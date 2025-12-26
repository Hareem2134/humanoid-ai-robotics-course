from fastapi_users import schemas
from typing import Optional, Dict, Any

class UserRead(schemas.BaseUser[schemas.UUID]):
    background_data: Optional[Dict[str, Any]] = None

class UserCreate(schemas.BaseUserCreate):
    background_data: Optional[Dict[str, Any]] = None

class UserUpdate(schemas.BaseUserUpdate):
    background_data: Optional[Dict[str, Any]] = None
