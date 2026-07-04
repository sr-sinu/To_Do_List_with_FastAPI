# 🚀 Full Stack To-Do Application

A full-stack To-Do application built with **FastAPI**, **React (Vite)**, **PostgreSQL**, and **Docker**. This project demonstrates how to build, containerize, and deploy a modern web application using industry-standard technologies.

---

## 📌 Features

### Backend
- ✅ RESTful CRUD API using FastAPI
- ✅ PostgreSQL database
- ✅ SQLAlchemy ORM
- ✅ Pydantic data validation
- ✅ Environment variable configuration
- ✅ Docker support
- ✅ Interactive Swagger API documentation

### Frontend
- ✅ React + Vite
- ✅ Axios for API communication
- ✅ Create, Update and Delete Todos
- ✅ Responsive component-based architecture
- ✅ Docker support

---

## 🛠️ Tech Stack

### Backend
- Python 3.11
- FastAPI
- SQLAlchemy
- PostgreSQL
- Uvicorn

### Frontend
- React
- Vite
- Axios
- Nginx (Production)

### DevOps
- Docker
- Docker Compose

---

# 📁 Project Structure

```
fullstack-todo-app/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   └── crud.py
│   │
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoForm.jsx
│   │   │   └── TodoItem.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   ├── Dockerfile
│   ├── nginx.conf
│   └── .env
│
├── docker-compose.yml
├── .env
├── .gitignore
└── README.md
```

---

# ⚙️ Environment Variables

## Backend (.env)

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DB=tododb
DATABASE_URL=postgresql://postgres:password@db:5432/tododb
```

## Frontend (.env)

```env
VITE_API_URL=http://localhost:8000
```

---

# 🐳 Running with Docker

Build and start all services:

```bash
docker-compose up --build
```

Services:

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:8000 |
| Swagger UI | http://localhost:8000/docs |

---

# 💻 Running Locally

## Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

The React application will be available at:

```
http://localhost:5173
```

---

# 📚 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | / | Health Check |
| GET | /todos | Get All Todos |
| GET | /todos/{id} | Get Todo |
| POST | /todos | Create Todo |
| PUT | /todos/{id} | Update Todo |
| DELETE | /todos/{id} | Delete Todo |

---

# 🌐 Deployment

### Backend

Deploy on Render.

Update the `DATABASE_URL` environment variable using the PostgreSQL connection string provided by your hosting service.

Example:

```
postgresql://username:password@hostname:5432/database_name
```

### Frontend

Deploy on Vercel or Netlify.

Set:

```
VITE_API_URL=https://your-backend.onrender.com
```

---

# 📖 What I Learned

- Building REST APIs using FastAPI
- Database integration with PostgreSQL
- SQLAlchemy ORM
- React fundamentals
- API integration using Axios
- Docker and Docker Compose
- Environment variable management
- Full-stack application architecture
- Deploying backend and frontend separately

---

# 🚀 Future Improvements

- JWT Authentication
- User Registration/Login
- Alembic Database Migrations
- Pagination
- Search & Filtering
- Unit Tests
- GitHub Actions CI/CD
- Kubernetes Deployment

---

# 👨‍💻 Author

**Your Name**

GitHub: https://github.com/your-github-username

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!