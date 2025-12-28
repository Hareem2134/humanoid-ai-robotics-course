from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTableUUID
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy import Column
from ..base import Base


class User(SQLAlchemyBaseUserTableUUID, Base):
    __tablename__ = "users"
    background_data = Column(JSONB)
