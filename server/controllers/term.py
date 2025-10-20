# term_resources.py
from datetime import datetime
from flask import request
from flask_restful import Resource
from flask_jwt_extended import get_jwt_identity, jwt_required
from sqlalchemy.exc import IntegrityError
from server.config import db
from server.models.term import Term

def _parse_iso_dt(value, field):
    """Parse ISO 8601 (accepts trailing 'Z')."""
    if value is None:
        return None
    try:
        return datetime.fromisoformat(str(value).replace("Z", "+00:00"))
    except Exception:
        raise ValueError(
            f"Invalid datetime for '{field}'. Use ISO 8601, e.g. 2025-01-15T00:00:00"
        )

def _validate_payload(data, *, partial: bool):
    errors, cleaned = {}, {}

    # Required checks for POST
    if not partial:
        for field in ("start_date", "end_date", "fee_amount"):
            if field not in data or data.get(field) in (None, ""):
                errors[field] = f"'{field}' is required"

    # start_date
    if (not partial) or ("start_date" in data):
        try:
            sd = _parse_iso_dt(data.get("start_date"), "start_date")
            if sd is not None:
                cleaned["start_date"] = sd
        except ValueError as e:
            errors["start_date"] = str(e)

    # end_date
    if (not partial) or ("end_date" in data):
        try:
            ed = _parse_iso_dt(data.get("end_date"), "end_date")
            if ed is not None:
                cleaned["end_date"] = ed
        except ValueError as e:
            errors["end_date"] = str(e)

    # fee_amount
    if (not partial) or ("fee_amount" in data):
        try:
            fa = float(data.get("fee_amount"))
            if fa < 0:
                raise ValueError("fee_amount must be >= 0")
            cleaned["fee_amount"] = fa
        except (TypeError, ValueError):
            errors["fee_amount"] = "fee_amount must be a non-negative number"

    return cleaned, (errors or None)

TERM_ONLY_FIELDS = ("id", "start_date", "end_date", "fee_amount", "created_at", "updated_at")

class TermListResource(Resource):
    def get(self):
        try:
            page = max(int(request.args.get("page", 1)), 1)
            per_page = min(max(int(request.args.get("per_page", 20)), 1), 100)
        except ValueError:
            return {"errors": {"pagination": "page/per_page must be integers"}}, 422

        pagination = (
            Term.query.order_by(Term.start_date.desc())
            .paginate(page=page, per_page=per_page, error_out=False)
        )

        return {
            "items": [t.to_dict(only=TERM_ONLY_FIELDS) for t in pagination.items],
            "page": pagination.page,
            "per_page": pagination.per_page,
            "total": pagination.total,
            "pages": pagination.pages,
        }, 200

    @jwt_required()
    def post(self):
        data = request.get_json(silent=True) or {}
        cleaned, errors = _validate_payload(data, partial=False)
        if errors:
            return {"errors": errors}, 422

        if cleaned["start_date"] >= cleaned["end_date"]:
            return {"errors": {"date_range": "start_date must be earlier than end_date"}}, 422

        term = Term(**cleaned)
        db.session.add(term)
        db.session.commit()
        return term.to_dict(only=TERM_ONLY_FIELDS), 201


class TermResource(Resource):
    def get(self, term_id: int):
        term = Term.query.get_or_404(term_id)
        return term.to_dict(only=TERM_ONLY_FIELDS), 200
    
    @jwt_required()
    def patch(self, term_id: int):
        term = Term.query.get_or_404(term_id)
        data = request.get_json(silent=True) or {}
        cleaned, errors = _validate_payload(data, partial=True)
        if errors:
            return {"errors": errors}, 422

        sd = cleaned.get("start_date", term.start_date)
        ed = cleaned.get("end_date", term.end_date)
        if sd and ed and sd >= ed:
            return {"errors": {"date_range": "start_date must be earlier than end_date"}}, 422

        for k, v in cleaned.items():
            setattr(term, k, v)
        db.session.commit()
        return term.to_dict(only=TERM_ONLY_FIELDS), 200

    @jwt_required()
    def delete(self, term_id: int):
        term = Term.query.get_or_404(term_id)
        try:
            db.session.delete(term)
            db.session.commit()
            return "", 204
        except IntegrityError:
            db.session.rollback()
            return {
                "error": "Conflict",
                "message": "This term is referenced by other records and cannot be deleted."
            }, 409
