from server.controllers.auth import Login, Logout
from server.controllers.student import Students
from server.controllers.fee import Fees
from server.controllers.payment import Payments
from dotenv import get_key
from mpesa.api.auth import MpesaBase
from mpesa.api.c2b import C2B

def addResource(api):
    api.add_resource(Login, '/api/login')
    api.add_resource(Logout, '/api/logout')
    api.add_resource(Students, '/api/students')
    api.add_resource(Fees, '/api/fees')
    api.add_resource(Payments, '/api/payments')

def get_access_token():

    key = get_key(dotenv_path='/home/frank/Development/schoolmanagementsystem/.env',key_to_get='MPESA_KEY')
    secret = get_key(dotenv_path='/home/frank/Development/schoolmanagementsystem/.env',key_to_get='MPESA_SECRET')
    # authDict = C2B(app_key=key, 
    #                     app_secret=secret,
    #                     sandbox_url='https://sandbox.safaricom.co.ke/')
    # response = authDict.register(shortcode=174379,
    #                              response_type=,
    #                              confirmation_url=,
    #                              validation_url=)
    # return response