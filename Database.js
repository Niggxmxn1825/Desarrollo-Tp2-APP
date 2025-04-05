// === BASE DE DATOS SIMULADA ===
const fakeDatabase = {
    tasks: [],
  
    // Agrega una tarea a la "base de datos"
    addTask(task) {
      this.tasks.push(task);
    },
  
    // Permite obtener todas las tareas (para escalar funcionalidades)
    getAllTasks() {
      return this.tasks;
    }
  };
  
 