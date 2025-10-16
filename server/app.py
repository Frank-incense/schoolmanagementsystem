from flask import Flask
from flask_restful import Api
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from flask_cors import CORS
from dotenv import load_dotenv
from server.config import db
from server.models import User, Term, Student, Payment, Fee

load_dotenv()

app = Flask(__name__)
CORS(app=app, supports_credentials=True)
app.config.from_prefixed_env(prefix='FLASK')
migrate = Migrate(app=app, db=db)
bcrypt=Bcrypt(app=app)
jwt = JWTManager(app=app)
api = Api(app=app)

db.init_app(app=app)