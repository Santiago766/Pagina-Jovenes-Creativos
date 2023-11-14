import { Navigate } from "react-router-dom"

export const ProtecteRoute = ({children}) => {
  
  const user = JSON.parse(globalThis.localStorage.getItem('user'))

  if (!user){
    return(
    <Navigate to="/" replace />)
  }
  return children
}