from sqlalchemy import Column, Integer, String
from app.database import Base

class TodoDB(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, index =True)
    title = Column(String,index=True)
    completed = Column(Integer, default=0)
