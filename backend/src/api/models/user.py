from pydantic import BaseModel, EmailStr
from typing import Optional, Dict, Any
import uuid

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    background_data: Optional[Dict[str, Any]] = None

class UserInDB(BaseModel):
    user_id: uuid.UUID
    email: EmailStr
    background_data: Optional[Dict[str, Any]] = None

    class Config:
        orm_mode = True
