import React, { useState, useEffect } from "react";
import TaskForm from "./componentes/TaskForm";
import TaskList from "./componentes/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas desde LocalStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Guardar tareas en LocalStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  // Función para agregar tareas
  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Función para alternar estado de completado
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para editar tareas
  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  // Función para eliminar tareas
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Contabilizar tareas completadas
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", position: "relative" }}>
      {/* Área enmarcada que incluye solo los títulos y el contador */}
      <div
        style={{
          border: "2px solid #9ACD32", // Borde Primera seccion 
          padding: "20px",
          borderRadius: "10px", // Bordes redondeados
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra suave
          marginBottom: "20px", // Espaciado hacia abajo
          position: "relative", // Para poder usar posicionamiento absoluto para el contador
        }}
      >
        {/* Títulos dentro del área enmarcada */}
        <h1>Lista de Tareas</h1>

        {/* Contador de tareas dentro del área enmarcada */}
        <div
          style={{
            position: "absolute",
            top: "50%", // Centrado verticalmente
            right: "20px",
            transform: "translateY(-50%)", // Ajuste para centrar
            width: "80px", // Tamaño más grande
            height: "80px", // Tamaño más grande
            borderRadius: "50%",
            backgroundColor: "#4CAF50", // Fondo
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px", // Font más grande
            fontWeight: "bold",
          }}
        >
          {completedTasks}/{totalTasks}
        </div>
      </div>

      {/* Formulario y lista de tareas fuera del área enmarcada */}
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
