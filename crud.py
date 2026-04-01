from sqlalchemy.orm import Session
import models, schemas

def get_todos(db: Session):
    return db.query(models.TodoDB).all()

def get_todo(db: Session, id: int):
    return db.query(models.TodoDB).filter(models.TodoDB.id == id).first()

def create_todo(db:Session, todo: schemas.Todocreate):
    db_todo = models.TodoDB(title = todo.title, completed = int(todo.completed))
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo

def update_todo(db: Session, todo_id: int, updated: schemas.Todocreate):
    todo = get_todo(db, todo_id)
    if todo:
        todo.title = updated.title
        todo.completed = int(updated.completed)
        db.commit()
        db.refresh(todo)
    return todo

def delete_todo(db: Session, todo_id: int):
    todo = get_todo(db, todo_id)
    if todo:
        db.delete(todo)
        db.commit()
    return todo

