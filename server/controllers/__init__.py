from server.controllers.auth import Login, Logout
from server.controllers.student import Students

def addResource(api):
    api.add_resource(Login, '/api/login')
    api.add_resource(Logout, '/api/logout')
    api.add_resource(Students, '/api/students')