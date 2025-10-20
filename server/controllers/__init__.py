from server.controllers.auth import Login, Logout
from server.controllers.student import Students
from server.controllers.fee import Fees, FeeById
from server.controllers.payment import Payments, Confirmation
from dotenv import get_key
from mpesa.api.c2b import C2B

def addResource(api):
    api.add_resource(Login, '/api/login')
    api.add_resource(Logout, '/api/logout')
    api.add_resource(Students, '/api/students')
    api.add_resource(Fees, '/api/fees')
    api.add_resource(FeeById, '/api/fees/<int:id>')
    api.add_resource(Payments, '/api/payments')
    api.add_resource(Confirmation, '/api/confirm')
    

def registerUrl():

    key = get_key(dotenv_path='/home/frank/Development/schoolmanagementsystem/.env',key_to_get='MPESA_KEY')
    secret = get_key(dotenv_path='/home/frank/Development/schoolmanagementsystem/.env',key_to_get='MPESA_SECRET')
    client2business = C2B(app_key=key, 
                        app_secret=secret,
                        sandbox_url='https://sandbox.safaricom.co.ke/')
    response = client2business.register(shortcode=522123,
                                 response_type='Completed',
                                 confirmation_url='https://acronychous-depreciatory-makena.ngrok-free.dev/api/confirm',
                                 validation_url='https://acronychous-depreciatory-makena.ngrok-free.dev/api/confirm')
    return response

