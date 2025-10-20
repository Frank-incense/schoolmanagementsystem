from server.config import db
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import Column, Integer, ForeignKey, Float, String, DateTime, func, Boolean
from sqlalchemy.orm import relationship, validates

class Payment(db.Model, SerializerMixin):
    __tablename__ = 'payments'

    id = Column(Integer(), primary_key=True)
    amount = Column(Float())
    phone_number = Column(String())
    name = Column(String())
    paid_on = Column(DateTime())
    mpesa_code = Column(String()) # Rename to account
    transaction_id = Column(Integer())
    created_at = Column(DateTime(), server_default=func.now())
    updated_at = Column(DateTime(), onupdate=func.now())

    fee = relationship('Fee', back_populates='payments')

    serialize_rules = ('-fee.payments',)

    def __repr__(self):
        return f"Payment {self.id}, {self.mpesa_code}"