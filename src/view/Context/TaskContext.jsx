import { createContext, useState } from "react";
import { useReducer } from "react";
import { taskReducer } from '../Reducer/taskReducer'


export const TaskStateContext = createContext()

export const TaskStateProvider = ({ children }) => {
  const [taskState, dispatchTask] = useReducer(taskReducer, initialTaskState);

  return ( 
    <TaskStateContext.Provider value={{taskState, dispatchTask}}>
      {children}
    </TaskStateContext.Provider>
  );
};