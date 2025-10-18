from server.models import Fee, Student
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
        pass

class FeeById(Resource):
    def patch(self):
        pass