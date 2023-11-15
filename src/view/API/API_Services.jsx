import { API_URL } from "./API_URL"
import { useNavigate } from "react-router-dom"


export const Loginfetch = (user) => {
const navigate = useNavigate()
  return (
    fetch(API_URL + "user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    }).then(response => response.json())
    .then(response => {
        console.log(user)

        globalThis.localStorage.setItem('user', JSON.stringify({
          nombre: response.user.firstName,
          id: response.user._id
        }))
        window.alert(response)
        navigate("/ver-tareas")
      }).catch(() => {
        window.alert("El usuario o contraseña son invalidas")
      })
      )
} 