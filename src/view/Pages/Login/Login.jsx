import { Link } from "react-router-dom"
import './Login.css'

export const Login = () => {
  return (
    <div className="Content">
      <div className="loginContent">
        <h1>Login</h1>
        <div className="Campos">
          <i class="fa-solid fa-user"></i>
          <input type="text" placeholder="User" />
        </div>
        <div className="Campos">
          <i class="fa-solid fa-lock"></i>
          <input type="text" placeholder="Password" />
        </div>
        <div className="Entrar">
          <button type="submit" to='/Ver-tareas'>Ingresar</button>
          <div className="Registro">
            <p>No tienes cuenta?</p>
            <Link className="Registro__link" to="/Registro">Registrate </Link>
          </div>

        </div>
      </div>   
    </div>
  )
}