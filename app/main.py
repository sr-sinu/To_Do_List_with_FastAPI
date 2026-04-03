from fastapi import HTTPException, FastAPI, Depends
from sqlalchemy.orm import Session
from app import models, schemas, crud
from app.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


#Root Value
@app.get("/")
def read_root():
      return {"message":"Welcome to FastAPI + PostgreSQL To-Do App"}

#Get all todos
@app.get("/todos", response_model = list[schemas.Todo])
def get_todos(db: Session = Depends(get_db)):
    return crud.get_todos(db)

# Get one todo
@app.get("/todos/{todo_id}", response_model=schemas.Todo)
def get_todo(todo_id: int, db: Session = Depends(get_db)):
    todo = crud.get_todo(db, todo_id)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return todo

#Create a todo
@app.post("/todos",response_model=schemas.Todo)
def create_to_do(todo: schemas.Todocreate, db: Session = Depends(get_db)):
    return crud.create_todo(db, todo)


#Update a todo
@app.put("/todos/{todo_id}", response_model=schemas.Todo)
def update_todo(todo_id:int, updated: schemas.Todocreate, db: Session = Depends(get_db)):
    todo = crud.get_todo(db, todo_id)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return crud.update_todo(db, todo_id, updated)
	
#Delete a todo
@app.delete("/todos/{todo_id}")
def delete_todo(todo_id:int, db: Session=Depends(get_db)):
    todo = crud.get_todo(db, todo_id)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    crud.delete_todo(db, todo_id)
    return {"message": "Todo deleted successfully"}