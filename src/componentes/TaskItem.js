import React, { useState } from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

const TaskItem = ({ task, toggleComplete, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    if (newText.trim()) {
      editTask(task.id, newText);
      setIsEditing(false);
    }
  }; 

  return (
    <div
      style={{
        border: "2px solid #9ACD32",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra
      }}
    >
      {/* Checkbox redondo */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "2px solid #4CAF50",
          cursor: "pointer",
          appearance: "none",
          outline: "none",
          backgroundColor: task.completed ? "#4CAF50" : "transparent",
          display: "flex",
          marginRight: "15px",
        }}
      />

      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          style={{
            flex: 1,
            marginRight: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      ) : (
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            cursor: "pointer",
            flex: 1,
          }}
        >
          {task.text}
        </span>
      )}

      <div style={{ display: "flex", gap: "10px" }}>
        {isEditing ? (
          <button
            onClick={handleSave}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <FaSave />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <FaEdit />
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          style={{
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
