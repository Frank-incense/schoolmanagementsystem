from server.models import Fee, Student, Payment, Term
from flask_jwt_extended import get_jwt_identity, jwt_required
from flask import request, make_response, jsonify
from flask_restful import Resource
from sqlalchemy import or_
from server.config import db

class Fees(Resource):
    # @jwt_required()
    def get(self):
        page = int(request.args.get('page'))
        per_page = int(request.args.get('per_page'))
        search_term = request.args.get('search')

        query = Fee.query

        if search_term:
            search_term = f"%{search_term}%"

            query = query.filter(
                or_(
                    Fee.account.ilike(search_term),
                    Fee.balance.ilike(search_term),
                    Student.name.ilike(search_term)
                )
            )

            total = query.count()
            paginated_fee = query.offset((page -1) * per_page).limit(per_page).all()
            if paginated_fee:
                return make_response(jsonify({
                    'data': [fee.to_dict() for fee in paginated_fee],
                    'total': total,
                    'page': page,
                    'per_page': per_page,
                    'pages': (total // per_page)
                }), 200)
            else:
                return make_response(jsonify({
                    'error': 'Fee not found'
                }), 404)
        
        total = query.count()
        paginated_fee = query.offset((page -1) * per_page).limit(per_page).all()

        if paginated_fee:
            return make_response(jsonify({
                'data': [fee.to_dict() for fee in paginated_fee],
                'total': total,
                'page': page,
                'per_page': per_page,
                'pages': (total // per_page)
            }), 200)
        
        else:
            return make_response(jsonify({
                'error': 'Fee Not Found'
            }), 404)

    def post(self):
        data = request.get_json()

        payment = Payment.query.get(data.get('pay_id'))
        student = Student.query.get(data.get('student_id'))
        terms = Term.query.filter_by(grade=student.grade).all()
        prev_fees = Fee.query.filter_by(student_id=student.id).all()

        if not prev_fees[prev_fees.length].balance:
            balance = terms[terms.length].fee_amount - payment.amount

        balance = prev_fees[prev_fees.length].balance - payment.amount

        fee = Fee(
            payment_id=payment.id,
            student_id=student.id,
            term_id=terms[terms.length].id,
            balance=balance,
            account=data.get('account')
        )
        
        db.session.add(fee)
        db.session.commit()

        return make_response(jsonify(fee.to_dict()),201)

class FeeById(Resource):
    def patch(self):
        data = request.get_json()

        fee = Fee.query.get(data.get('id'))
        
        for attr in data:
            setattr(fee, attr, data[attr])
        
        db.session.commit()

        if fee:
            return make_response(jsonify(fee.to_dict()), 201)
        
        return make_response(jsonify({
            'error': 'Did not find the fee record.'
        }), 404)