# 🚀 FastAPI To-Do API (PostgreSQL + Docker)

A production-ready REST API built with FastAPI, PostgreSQL, and Docker.
This project demonstrates clean architecture, containerization, and real-world backend practices.

---

## 📌 Features

* ✅ Full CRUD operations (Create, Read, Update, Delete)
* ✅ PostgreSQL database integration
* ✅ Dockerized application
* ✅ SQLAlchemy ORM
* ✅ Pydantic validation
* ✅ Environment-based configuration
* ✅ Auto-generated API docs

---

## 🛠️ Tech Stack

* Python 3.11
* FastAPI
* PostgreSQL
* SQLAlchemy
* Docker & Docker Compose
* Uvicorn

---

## 📁 Project Structure

```
TO_DO_LIST_WITH_FASTAPI/
│
│── main.py
│── database.py
│── models.py
│── schemas.py
│── crud.py
│
│── docker-compose.yml
│── Dockerfile
│── requirements.txt
│── .env
│── README.md
```
---

## 🐳 Run with Docker

### 1. Build and start containers

```
docker-compose up --build
```

---

### 2. Access the application

* API: http://localhost:8000
* Swagger Docs: http://localhost:8000/docs
* ReDoc: http://localhost:8000/redoc

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
  "title": "Learn Docker with FastAPI",
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
  "title": "Master FastAPI + PostgreSQL",
  "completed": true
}
```

---

## 🧠 Learning Highlights

* FastAPI backend development
* PostgreSQL integration
* Docker containerization
* Clean project architecture
* Environment-based configuration

---

## ⚠️ Important Notes

* Use `db` as the database host inside Docker
* Do not use `localhost` for database connection
* Ensure Docker is running before starting the app

---

## 🚀 Future Improvements

* 🔐 JWT Authentication
* 🐳 Add pgAdmin (database UI)
* 🔄 Alembic migrations
* 🧪 Unit testing
* ☁️ Deployment (AWS / Render / Railway)

---

## 🤝 Contributing

Feel free to fork and improve this project. Contributions are welcome!

---


## 👨‍💻 Author

Shrikant Shinde
GitHub: https://github.com/sr-sinu
