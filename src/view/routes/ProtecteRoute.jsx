import { Navigate } from "react-router-dom"

export const ProtecteRoute = ({children}) => {
  
  const user = JSON.parse(globalThis.localStorage.getItem('user'))
  console.log(user)

  if (user === null){
    console.log("pepe" + user);
    return(
    <Navigate to="/" replace />)
  }
  return children
}