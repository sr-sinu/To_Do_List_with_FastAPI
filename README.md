# 🚀 FastAPI To-Do API (SQLite + SQLAlchemy)

A simple and scalable REST API built with FastAPI, SQLite, and SQLAlchemy.
This project demonstrates clean architecture, CRUD operations, and database integration.

---

## 📌 Features

* ✅ Create, Read, Update, Delete (CRUD) To-Do items
* ✅ SQLite database integration
* ✅ SQLAlchemy ORM
* ✅ Pydantic validation
* ✅ Dependency Injection with FastAPI
* ✅ Auto-generated API docs
* ✅ Update endpoint included

---

## 🛠️ Tech Stack

* Python 3.10+
* FastAPI
* SQLAlchemy
* SQLite
* Uvicorn

---

## 📁 Project Structure

```
fastapi_app/
│── main.py        # Entry point
│── database.py    # Database connection
│── models.py      # SQLAlchemy models
│── schemas.py     # Pydantic schemas
│── crud.py        # Database operations
```

---

## ⚙️ Installation

### 1. Clone the repository

```
git clone https://github.com/your-username/fastapi-todo-app.git
cd fastapi-todo-app
```

### 2. Create virtual environment (optional but recommended)

```
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

### 3. Install dependencies

```
pip install -r requirements.txt
```

---

## ▶️ Run the Application

```
uvicorn main:app --reload
```

App will be available at:

* http://127.0.0.1:8000

---

## 📚 API Documentation

FastAPI provides built-in interactive docs:

* Swagger UI: http://127.0.0.1:8000/docs
* ReDoc: http://127.0.0.1:8000/redoc

---

## 🔗 API Endpoints

| Method | Endpoint    | Description     |
| ------ | ----------- | --------------- |
| GET    | /           | Root message    |
| GET    | /todos      | Get all todos   |
| GET    | /todos/{id} | Get single todo |
| POST   | /todos      | Create todo     |
| PUT    | /todos/{id} | Update todo     |
| DELETE | /todos/{id} | Delete todo     |

---

## 📦 Example Request

### Create Todo

```
POST /todos
```

Body:

```
{
  "title": "Learn FastAPI",
  "completed": false
}
```

---

## 🔄 Update Todo

```
PUT /todos/{id}
```

Body:

```
{
  "title": "Learn FastAPI deeply",
  "completed": true
}
```

---

## 🧠 Learning Goals

This project helps you understand:

* FastAPI fundamentals
* REST API design
* Database integration with SQLAlchemy
* Clean code structure
* Backend project organization

---

## 🚀 Future Improvements

* 🔐 Authentication (JWT)
* 🐳 Docker support
* 🧪 Unit & integration tests
* 📄 Environment configuration (.env)
* 🐘 PostgreSQL support

---

## 🤝 Contributing

Feel free to fork this repo and improve it. Contributions are welcome!


---

## 👨‍💻 Author

Shrikant Shinde
GitHub: https://github.com/sr-sinu
