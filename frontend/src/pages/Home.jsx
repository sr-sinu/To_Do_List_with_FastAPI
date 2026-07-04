import { useEffect, useMemo, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import EditModal from "../components/EditModal";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/api";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const fetchTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async (todo) => {
    try {
      await createTodo(todo);
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleToggle = async (todo) => {
    try {
      await updateTodo(todo.id, {
        ...todo,
        completed: !todo.completed,
      });
      fetchTodos();
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  const handleEditClick = (todo) => {
    setEditingTodo(todo);
    setIsEditModalOpen(true);
  };

  const handleEditSave = async (newTitle) => {
    try {
      await updateTodo(editingTodo.id, {
        ...editingTodo,
        title: newTitle,
      });
      setIsEditModalOpen(false);
      setEditingTodo(null);
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleEditClose = () => {
    setIsEditModalOpen(false);
    setEditingTodo(null);
  };

  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const pending = total - completed;
    const progress = total ? Math.round((completed / total) * 100) : 0;
    const categories = {
      design: todos.filter((todo) => todo.title.toLowerCase().includes("design")).length,
      meeting: todos.filter((todo) => todo.title.toLowerCase().includes("meeting")).length,
      learning: todos.filter((todo) => todo.title.toLowerCase().includes("learning")).length,
      other:
        total -
        todos.filter((todo) =>
          ["design", "meeting", "learning"].some((term) => todo.title.toLowerCase().includes(term))
        ).length,
    };

    return {
      total,
      completed,
      pending,
      progress,
      categories,
    };
  }, [todos]);

  const categoryCards = [
    {
      label: "Design",
      value: stats.categories.design,
      icon: "🎨",
    },
    {
      label: "Meeting",
      value: stats.categories.meeting,
      icon: "👥",
    },
    {
      label: "Learning",
      value: stats.categories.learning,
      icon: "📚",
    },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="profile-details">
          <span className="profile-badge">
            <span>4Y+</span> Experienced Fullstack Developer
          </span>
          <h1 className="app-title">Create, manage, and ship your work with confidence.</h1>
          <p className="app-subtitle">
            This dashboard uses meaningful task insights, quick actions, and a polished experience
            designed for workflow-focused developers.
          </p>
        </div>

        <div className="action-chip">Fast API + React</div>
      </header>

      <div className="hero-grid">
        <section className="hero-card">
          <h2 className="hero-title">Production-ready task intelligence</h2>
          <p className="hero-copy">
            See your delivery progress, focus on the highest-impact items, and move your sprint forward
            with a clean workflow.
          </p>

          <div className="hero-metrics">
            <div className="metric-pill">
              <small>Weekly delivery</small>
              <strong>{stats.completed} completed</strong>
            </div>
            <div className="metric-pill">
              <small>Task pipeline</small>
              <strong>{stats.pending} active</strong>
            </div>
          </div>
        </section>

        <div className="summary-grid">
          <article className="summary-card">
            <p className="card-title">Total todos</p>
            <p className="card-value">{stats.total}</p>
            <p className="card-note">Your full task backlog at a glance.</p>
          </article>

          <article className="summary-card">
            <p className="card-title">Completion rate</p>
            <p className="card-value">{stats.progress}%</p>
            <p className="card-note">Percent of tasks completed in the current list.</p>
          </article>

          <article className="summary-card">
            <p className="card-title">Current focus</p>
            <p className="card-value">{stats.pending}</p>
            <p className="card-note">Tasks still waiting on your next review.</p>
          </article>
        </div>
      </div>

      <section className="todo-panel">
        <div className="todo-panel-header">
          <div>
            <p className="section-label">Workspace overview</p>
            <h2 className="section-title">Task board</h2>
          </div>

          <div className="grid-chips">
            {categoryCards.map((card) => (
              <span key={card.label} className="chip">
                {card.icon} {card.label}: {card.value}
              </span>
            ))}
          </div>
        </div>

        <div className="todo-form-container">
          <TodoForm onAdd={handleAdd} />
        </div>

        <div className="todo-list-container">
          {todos.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">🧭</div>
              <p>No tasks yet — add one to kick off your sprint.</p>
            </div>
          ) : (
            todos.map((todo, index) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={handleDelete}
                onToggle={handleToggle}
                onEdit={handleEditClick}
                index={index}
              />
            ))
          )}
        </div>
      </section>

      <EditModal
        todo={editingTodo}
        isOpen={isEditModalOpen}
        onClose={handleEditClose}
        onSave={handleEditSave}
      />
    </div>
  );
};

export default Home;
