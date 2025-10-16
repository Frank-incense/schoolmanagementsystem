from server.config import db
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import Column, Integer, String, DateTime, func, Boolean
from sqlalchemy.orm import relationship, validates

class Student(db.Model, SerializerMixin):
    __tablename__ = 'students'

    id = Column(Integer(),primary_key=True)
    name = Column(String())
    contact = Column(String())
    parent = Column(String())
    gender = Column(Boolean())
    created_at = Column(DateTime(), server_default=func.now())
    updated_at = Column(DateTime(), onupdate=func.now())

    fees = relationship('Fee', back_populates='student')

    serialize_rules = ('-fees.student')
    
    def __repr__(self):
        return f"Student, {self.id}, {self.name}"