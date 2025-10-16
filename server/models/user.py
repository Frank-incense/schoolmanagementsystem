from server.config import db
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import Column, Integer, String, DateTime, func

from sqlalchemy.ext.hybrid import hybrid_property

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = Column(Integer(), primary_key=True)
    username = Column(String())
    _password_hash = Column(String())
    created_at = Column(DateTime(), server_default=func.now())
    updated_at = Column(DateTime(), onupdate=func.now())

    def __repr__(self):
        return f"User {self.id}, {self.username}"   
    
    @hybrid_property
    def password_hash(self):
        raise AttributeError("Password hash is write-only.")

    @password_hash.setter
    def password_hash(self, value):
        from server.app import bcrypt
        hashed = bcrypt.generate_password_hash(value.encode('utf-8'))
        self._password_hash = hashed.decode('utf-8')

    def authenticate(self, password):
        from server.app import bcrypt
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))