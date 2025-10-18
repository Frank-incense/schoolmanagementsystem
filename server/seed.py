import os
import csv
from server.app import app
from server.config import db
from server.models import Student, User

students_details = []

def parse_folder_os(path):
    try:
        for item in os.listdir(path):
            full_path = os.path.join(path, item)
            if os.path.isfile(full_path):
                
                with open(full_path, 'r') as file:
                    data = csv.DictReader(file)
                    for row in data:
                        students_details.append({'name': row['LEARNERS NAME'], 'grade': row['GRADE']})
                        print(row['LEARNERS NAME'],row['GRADE'])
                    

            elif os.path.isdir(full_path):
                parse_folder_os(full_path)
    except PermissionError:
        print(f"Permission denied: {path}")
    except FileNotFoundError:
        print(f"Path not found: {path}")

# Use an absolute path
parse_folder_os('/home/frank/Development/schoolmanagementsystem/server/temp')
usrs = ['Frankincense', 'Nancy']

def clear_data():
    db.drop_all()
    db.create_all()

def seed():
    clear_data()

    students = [Student(name=std['name'],grade=std['grade']) for std in students_details]
    
    db.session.add_all(students)

    users = [User(username=name) for name in usrs]
    for user in users:
        user.password_hash = 'Admin2024' 

    db.session.add_all(users)
    db.session.commit()

    print("Students added successfull")

if __name__ == '__main__':
    with app.app_context():
        seed()