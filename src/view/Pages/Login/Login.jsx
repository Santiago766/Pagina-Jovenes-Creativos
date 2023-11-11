import { Link } from "react-router-dom"
import './Login.css'
import { Input } from "../../Components/Input/input"

export const Login = () => {
  return (
    <div className="Content">
      <div className="loginContent">
        <h1>Login</h1>
        <form action="/Ver-Tareas">
          <Input className={"Campos"} Img={<i class="fa-solid fa-user"></i>}
          type={"email"} placeHolder={"Email"} />
          
          <Input className={"Campos"} Img={<i class="fa-solid fa-lock"></i>}
          type={"password"} placeHolder={"Password"} />

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