import { createContext } from "react";
import { useReducer } from "react";
import { userReducer } from "../Reducer/userReducer";
import { initialState } from "../Reducer/userReducer";


export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {

  const user = globalThis.localStorage.getItem('user')

  const [state, dispatch] = useReducer(userReducer, {
    ...initialState,
    user: user ? JSON.parse(user) : null,
  });

  return ( 
    <TaskContext.Provider value={{state, dispatch}}>
      {children}
    </TaskContext.Provider>
  )
}