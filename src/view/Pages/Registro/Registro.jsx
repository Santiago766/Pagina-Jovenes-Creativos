import { Link } from "react-router-dom"
import { Input } from "../../Components/Input/Input"
import './Registro.css'

export const Registro = () => {
  return (
    <div className="Content_Registro">
      <div className="RegistroContent">
        <h1>Register</h1>
        <form action="/">

          <Input className={"Datos"} Img={<i className="fa-solid fa-user"></i>}
          type={"text"} placeHolder={"First Name"} Name={"firstName"} />

          <Input className={"Datos"} Img={<i className="fa-solid fa-user"></i>}
          type={"text"} placeHolder={"Last Name"} Name={"lastName"} />

          <Input className={"Datos"} Img={<i className="fa-solid fa-envelope"></i>}
          type={"email"} placeHolder={"Email"} Name={"email"} />

          <Input className={"Datos"} Img={<i className="fa-solid fa-lock"></i>}
          type={"password"} placeHolder={"Password"} Name={"password"} />

          <div className="Registrarse">
            <button type="submit">Register</button>

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