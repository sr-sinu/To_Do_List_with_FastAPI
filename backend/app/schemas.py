from pydantic import BaseModel

class TodoBase(BaseModel):
    title: str
    completed: bool=False

class Todocreate(TodoBase):
    pass

class Todo(TodoBase):
    id:int

    class Config:
        from_attributes = True

        