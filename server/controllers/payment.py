from server.models import Student
from flask_jwt_extended import jwt_required
from flask import request, make_response, jsonify
from flask_restful import Resource
from sqlalchemy import or_
from server.config import db
from mpesa.api.c2b import C2B

class Payments(Resource):
    def get(self):
        from server.controllers import registerUrl
        res = registerUrl()
        return {'res': res},200
    
class Confirmation(Resource):
    def post(self):
        data = request.get_json()
        print(data)
        return jsonify({
            "ResultCode": 0,
            "ResultDesc": "Accepted"
        })
        
    