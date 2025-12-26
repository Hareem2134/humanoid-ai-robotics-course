from pydantic import BaseModel, EmailStr, Field
from typing import Optional, Dict, Any
import uuid
from datetime import datetime

class User(BaseModel):
    user_id: uuid.UUID = Field(default_factory=uuid.uuid4)
    email: EmailStr
    hashed_password: str
    background_data: Optional[Dict[str, Any]] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
