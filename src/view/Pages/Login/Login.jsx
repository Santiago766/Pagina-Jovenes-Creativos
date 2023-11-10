import { Link } from "react-router-dom"
import './Login.css'

export const Login = () => {
  return (
    <div className="Content">
      <div className="loginContent">
        <h1>Login</h1>
        <form action="/Ver-Tareas">
          <div className="Campos">
          <i class="fa-solid fa-user"></i>
          <input type="text" placeholder="Email" />
        </div>
        <div className="Campos">
          <i class="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password"/>
        </div>
        <div className="Entrar">
          <button type="submit" to='/Ver-tareas'>Ingresar</button>
          <div className="Registro">
            <p>¿No tienes cuenta?</p>
            <Link className="Registro__link" to="/Registro">Registrate </Link>
          </div>
        </div>
        </form>
      </div>   
    </div>
  )
}