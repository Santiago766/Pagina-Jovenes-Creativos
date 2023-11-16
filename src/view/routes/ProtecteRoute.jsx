import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { TaskContext } from "../Context/Context"

export const ProtecteRoute = ({children}) => {
  
  const {state} = useContext(TaskContext)
  const user = state.user

  if (!user){
    return(
    <Navigate to="/" replace />)
  }
  
  return children
}