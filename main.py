from fastapi import HTTPException, FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

#In memory Database
todos = []

#Pydentic model
class Todo(BaseModel):
    id: int
    title: str
    completed: bool=False

#Root Value
@app.get("/")
def read_root():
      return {"messege":"Welcome to FastAPI To-Do App"}

#Get all todos
@app.get("/todos", response_model = List[Todo])
def get_todos():
    return todos

# Get one todo
@app.get("/todos/{todo_id}")
def get_todo(todo_id: int):
    for todo in todos:
        if todo.id == todo_id:
            return todo
    raise HTTPException(status_code=404, detail="Todo not found")


#Create a todo
@app.post("/todos",response_model=Todo)
def create_to_do(todo: Todo):
    todos.append(todo)
    return todo


#Update a todo
@app.put("/todos/{todo_id}")
def update_todo(todo_id:int, updated: Todo):
    for index, todo in enumerate(todos):
        if todo.id == todo_id:
            todos[index] = updated
            return updated
    raise HTTPException(status_code=404, detail="Todo not found")
	
#Delete a todo
@app.delete("/todos/{todo_id}")
def delete_todo(todo_id:int):
	for index, todo in enumerate(todos):
		if todo.id == todo_id:
			todos.pop(index)
			return {"messege":"Deleted Sucessfully"}
	raise HTTPException(status_code = 404, detail="Todo not found")