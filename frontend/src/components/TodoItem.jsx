const TodoItem = ({ todo, onDelete, onToggle, onEdit, index }) => {
  // Determine category color
  const getCategoryClass = () => {
    if (todo.title.toLowerCase().includes("design")) return "category-design";
    if (todo.title.toLowerCase().includes("meeting")) return "category-meeting";
    if (todo.title.toLowerCase().includes("learning")) return "category-learning";
    return "";
  };

  // Get icon based on category
  const getIcon = () => {
    if (todo.title.toLowerCase().includes("design")) return "🎨";
    if (todo.title.toLowerCase().includes("meeting")) return "👥";
    if (todo.title.toLowerCase().includes("learning")) return "📚";
    return "✓";
  };

  return (
    <div
      className={`todo-item ${getCategoryClass()} ${todo.completed ? 'completed' : ''}`}
      style={{ '--index': index }}
    >
      <div className="todo-content">
        <div className="todo-icon">{getIcon()}</div>
        <p className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.title}
        </p>
      </div>

      <div className="todo-actions">
        <button
          className="todo-btn edit"
          onClick={() => onEdit(todo)}
          title="Edit todo"
        >
          ✏️ Edit
        </button>
        <button
          className={`todo-btn ${todo.completed ? 'undo' : 'complete'}`}
          onClick={() => onToggle(todo)}
        >
          {todo.completed ? "↺ Undo" : "✓ Done"}
        </button>

        <button
          className="todo-btn delete"
          onClick={() => onDelete(todo.id)}
          title="Delete todo"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;