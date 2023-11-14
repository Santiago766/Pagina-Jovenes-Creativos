import { createContext, useState } from "react";


export const TaskContext = createContext()

export function TaskProvider ({ children }) {
  const [id, setId] = useState();
  return ( 
    <TaskContext.Provider value={{id, setId}}>
      {children}
    </TaskContext.Provider>
  )
}