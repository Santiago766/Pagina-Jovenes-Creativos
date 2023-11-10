import { Link } from "react-router-dom"
import './Registro.css'

export const Registro = () => {
  return (
    <div className="Content_Registro">
      <div className="RegistroContent">
        <h1>Registro</h1>
        <form action="/">
          <div className="Datos">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="Datos">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="Datos">
            <i class="fa-solid fa-envelope"></i>
            <input type="Email" placeholder="Email" />
          </div>
          <div className="Datos">
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <div className="Registrarse">
            <button type="submit" to='/Ver-tareas'>Registrarse</button>
            <div className="Login">
              <p>¿Ya tienes una cuenta?</p>
              <Link className="Login__link" to="/">Login </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}