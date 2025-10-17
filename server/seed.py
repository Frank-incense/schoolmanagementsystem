import os
import csv
from server.app import app
from server.config import db
from server.models import Student

students_name = []
def parse_folder_os(path):
    try:
        for item in os.listdir(path):
            full_path = os.path.join(path, item)
            if os.path.isfile(full_path):
                # print(f"File: {full_path}")
                with open(full_path, 'r') as file:
                    data = csv.DictReader(file)
                    for row in data:
                        students_name.append(row['LEARNERS NAME'])
                        print(row['LEARNERS NAME'])
                    

            elif os.path.isdir(full_path):
                # print(f"Folder: {full_path}")
                parse_folder_os(full_path)
    except PermissionError:
        print(f"Permission denied: {path}")
    except FileNotFoundError:
        print(f"Path not found: {path}")

# Use an absolute path
parse_folder_os('/home/frank/Development/schoolmanagementsystem/server/temp')
print(len(students_name))

def clear_data():
    db.drop_all()
    db.create_all()

def seed():
    clear_data()

    students = [Student(name=name) for name in students_name]

    db.session.add_all(students)
    db.session.commit()

    print("Students added successfull")

if __name__ == '__main__':
    with app.app_context():
        seed()