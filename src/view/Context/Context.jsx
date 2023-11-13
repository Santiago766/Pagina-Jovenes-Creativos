import { createContext, useReducer } from 'react';
import { useState } from 'react';

// Crear un contexto para las tareas
export const TasksContext = createContext();

// Crear un proveedor para las tareas
export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useState

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};