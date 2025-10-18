from server.models import Student
from flask_jwt_extended import jwt_required
from flask import request, make_response, jsonify
from flask_restful import Resource
from sqlalchemy import or_
from server.config import db
from mpesa.api.mpesa_express import MpesaExpress

class Payments(Resource):
    def get(self):
        from server.controllers import get_access_token
        res = get_access_token()
        return {'res': res},200
        
