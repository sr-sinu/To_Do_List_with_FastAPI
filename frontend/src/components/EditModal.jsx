import { useState, useEffect } from "react";

const EditModal = ({ todo, isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
    }
  }, [todo, isOpen]);

  const handleSave = () => {
    if (!title.trim()) {
      alert("Please enter a todo title");
      return;
    }
    onSave(title);
    setTitle("");
  };

  const handleCancel = () => {
    setTitle("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">✏️ Edit Todo</div>
        <input
          type="text"
          className="modal-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title..."
          autoFocus
          onKeyPress={(e) => e.key === "Enter" && handleSave()}
        />
        <div className="modal-buttons">
          <button className="modal-btn save" onClick={handleSave}>
            Save
          </button>
          <button className="modal-btn cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
