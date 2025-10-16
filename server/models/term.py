from server.config import db
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import Column, Integer, Float, DateTime, func
from sqlalchemy.orm import relationship, validates

class Term(db.Model, SerializerMixin):
    __tablename__ = 'terms'

    id = Column(Integer(), primary_key=True)
    start_date = Column(DateTime(), nullable=False)
    end_date = Column(DateTime(), nullable=False)
    fee_amount = Column(Float(), nullable=False)
    created_at = Column(DateTime(), server_default=func.now())
    updated_at = Column(DateTime(), onupdate=func.now())

    fees = relationship('Fee', back_populates='term')

    serialize_rules = ('-fees.term',)

    def __repr__(self):
        return f"Term {self.id}, {self.fee_amount}"
    