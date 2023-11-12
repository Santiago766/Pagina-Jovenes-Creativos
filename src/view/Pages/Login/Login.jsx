import { Link, useNavigate } from "react-router-dom"
import './Login.css'
import { Input } from "../../Components/Input/Input"

export const Login = () => {

  const navigate = useNavigate()
  const navegar = () => {
    navigate("ver-tareas")
  }

  return (
    <div className="Content">
      <div className="loginContent">
        <h1>Login</h1>
        <form>
          <Input className={"Campos"} Img={<i className="fa-solid fa-user"></i>}
          type={"email"} placeHolder={"Email"} Name={"email"}/>
          
          <Input className={"Campos"} Img={<i className="fa-solid fa-lock"></i>}
          type={"password"} placeHolder={"Password"} Name={"password"} />

          <div className="Entrar">
            <button type="submit" onClick={navegar}>Ingresar</button>
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