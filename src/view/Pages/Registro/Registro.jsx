import { Link } from "react-router-dom"
import { Input } from "../../Components/Input/input"
import './Registro.css'

export const Registro = () => {
  return (
    <div className="Content_Registro">
      <div className="RegistroContent">
        <h1>Register</h1>
        <form action="/">
          <Input className={"Datos"} Img={<i class="fa-solid fa-user"></i>}
          type={"text"} placeHolder={"First Name"} />

          <Input className={"Datos"} Img={<i class="fa-solid fa-user"></i>}
          type={"text"} placeHolder={"Last Name"} />

          <Input className={"Datos"} Img={<i class="fa-solid fa-envelope"></i>}
          type={"email"} placeHolder={"Email"} />

          <Input className={"Datos"} Img={<i class="fa-solid fa-lock"></i>}
          type={"password"} placeHolder={"Password"} />

          <div className="Registrarse">
            <button type="submit" to='/Ver-tareas'>Register</button>

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