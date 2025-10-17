from server.config import db
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import Column, Integer, ForeignKey, Float, DateTime, func
from sqlalchemy.orm import relationship
from sqlalchemy import Enum

ROLES = ('FEE', 'PTA', 'GRADUATION')

class Fee(db.Model, SerializerMixin):
    __tablename__ = 'fees'

    id = Column(Integer(), primary_key=True)
    student_id = Column(Integer(), ForeignKey('students.id'))
    term_id = Column(Integer(), ForeignKey('terms.id'))
    payment_id = Column(Integer(), ForeignKey('payments.id'))
    balance = Column(Float())
    account = Column(Enum(*ROLES, name='payment_roles'))
    created_at = Column(DateTime(), server_default=func.now())
    updated_at = Column(DateTime(), onupdate=func.now())

    student = relationship('Student', back_populates='fees')
    payments = relationship('Payment', back_populates='fee')
    term = relationship('Term', back_populates='fees')

    serialize_rules = ('-student.fees', '-payments.fee', '-term.fees',)

    def __repr__(self):
        return f"Fee {self.id}, student:{self.student_id}"