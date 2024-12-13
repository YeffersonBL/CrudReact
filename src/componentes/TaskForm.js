import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Importar el ícono de "+" desde React Icons

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "2px solid #121212", // Borde Input de tareas.
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra
        marginBottom: "10px", // Espaciado inferior
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escriba la tarea que desea agregar..."
        style={{
          flex: 1,
          marginRight: "10px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "5px", // Espaciado entre el ícono y el texto (si decides agregar texto)
        }} 
      >
        <FaPlus /> {/* Ícono de "+" */}
      </button>
    </form>
  );
};

export default TaskForm;
