from server.models import Student
from flask_jwt_extended import jwt_required
from flask import request, make_response, jsonify
from flask_restful import Resource
from sqlalchemy import or_
from server.config import db

class Students(Resource):
    @jwt_required()
    def get(self):
        page = int(request.args.get('page'))
        per_page = int(request.args.get('per_page'))
        gender = request.args.get('gender')
        search_term = request.args.get('search')
        query = Student.query

        if gender:
            students = query.filter_by(gender=gender)

            if students:
                total = students.count()
                paginated_students = students.offset((page - 1) * per_page).limit(per_page).all()

                return make_response(jsonify({
                    'data': [student.to_dict() for student in paginated_students],
                    'total': total,
                    'page': page,
                    'per_page': per_page,
                    'pages': (total // per_page)
                }), 200)
            else:
                return make_response(jsonify({
                    'error': 'Students not found'
                }), 404)
        

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
                    'pages': (total // per_page)
                }), 200)
            else:
                return make_response(jsonify({
                    'error': 'Students not found'
                }), 404)
        
        total = query.count()
        paginated_students = query.offset((page - 1) * per_page).limit(per_page).all()
        print(total, paginated_students)
        if paginated_students:

            return make_response(jsonify({
                'data': [student.to_dict() for student in paginated_students],
                'total': total,
                'page': page,
                'per_page': per_page,
                'pages': (total // per_page)
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
        data = request.get_json()
        student = Student.query.get(id)

        if student:
            for attr in data:
                setattr(student, attr, data[attr])

            db.session.commit()

            return make_response(jsonify(student), 201)
        
        return make_response(jsonify({
            'error': 'Student not found'
        }), 404)