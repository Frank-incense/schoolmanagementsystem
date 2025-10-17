from server.models import Student
from flask_jwt_extended import get_jwt_identity, jwt_required
from flask import request, make_response, jsonify
from flask_restful import Resource
from sqlalchemy import or_
from server.config import db

class Students(Resource):
    
    def get(self):
        page = int(request.args.get('page'))
        per_page = int(request.args.get('per_page'))
        gender = request.args.get('gender')
        search_term = request.args.get('search')
        query = Student.query

        if gender:
            students = query.filter_by(gender=gender).all()

            if students:
                total = len(students)
                start = (page - 1) * per_page
                end = start + per_page
                paginated_students = students[start:end]

                return make_response(jsonify({
                    'data': [student.to_dict() for student in paginated_students],
                    'total': total,
                    'page': page,
                    'per_page': per_page,
                    'pages': (total + per_page - 1)
                }), 200)
            else:
                return make_response(jsonify({
                    'error': 'Students not found'
                }), 200)
        

        if search_term:
            search_term = f"%{search_term}%"
            print(search_term)
            query = query.filter(
                or_(
                Student.name.ilike(search_term),
                Student.contact.ilike(search_term),
                Student.parent.ilike(search_term)
            ))
            
            total = query.count()
            paginated_students = query.offset((page - 1) * per_page).limit(per_page).all()
            
            if paginated_students:

                return make_response(jsonify({
                    'data': [student.to_dict() for student in paginated_students],
                    'total': total,
                    'page': page,
                    'per_page': per_page,
                    'pages': (total + per_page - 1)
                }), 200)
            else:
                return make_response(jsonify({
                    'error': 'Students not found'
                }), 200)
        
        total = query.count()
        paginated_students = query.offset((page - 1) * per_page).limit(per_page).all()
        print(total, paginated_students)
        if paginated_students:

            return make_response(jsonify({
                'data': [student.to_dict() for student in paginated_students],
                'total': total,
                'page': page,
                'per_page': per_page,
                'pages': (total / per_page)
            }), 200)
    
    @jwt_required()
    def post(self):
        data = request.get_json()
        if not data.get('name'):
            return make_response(jsonify({
                'error': 'Kindly input a student name'
            }), 422)
        
        student = Student(
            name = data.get('name'),
            contact = data.get('contact'),
            parent = data.get('parent'),
            gender = data.get('gender')
        )
        
        db.session.add(student)
        db.session.commit()
        
        return make_response(jsonify(student.to_dict()), 201)


class StudentById(Resource):
    @jwt_required()
    def get(self, id):
        pass
    
    @jwt_required()
    def patch(self, id):
        pass