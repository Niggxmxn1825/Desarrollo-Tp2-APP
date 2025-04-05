// === BACKEND SIMULADO ===
function handleAddTaskRequest(taskName) {
    // Seguridad: validación para evitar entradas vacías o maliciosas
    if (!taskName || typeof taskName !== "string" || taskName.trim() === "") {
      return "Error: El nombre de la tarea no puede estar vacío.";
    }
  
    // Guardar en la "base de datos"
    fakeDatabase.addTask(taskName.trim());
  
    return `Tarea guardada: ${taskName.trim()}`;
  }
  