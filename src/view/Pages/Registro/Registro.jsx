import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../Components/Input/Input"
import { API_URL } from "../../API/API_URL"
import './Registro.css'

export const Registro = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let body = {}
    for (const element of event.target.elements){
      if (element.name) {
        body = { ...body, [element.name]: element.value}
      }
    }


    fetch(API_URL + "user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }).then(response => response.json())
    .then(response => {
      console.log(response.user.firstName)
      navigate("/ver-tareas")
    })
  }

  return (
    <div className="Content_Registro">
      <div className="RegistroContent">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>

          <Input 
          className={"Datos"} 
          Img={<i className="fa-solid fa-user"></i>}
          type={"text"} 
          placeHolder={"First Name"} 
          Name={"firstName"} 
         />

          <Input
          className={"Datos"} 
          Img={<i className="fa-solid fa-user"></i>}
          type={"text"} 
          placeHolder={"Last Name"} 
          Name={"lastName"}
          />

          <Input 
          className={"Datos"} 
          Img={<i className="fa-solid fa-envelope"></i>}
          type={"email"} 
          placeHolder={"Email"} 
          Name={"email"} 
          />

          <Input 
          className={"Datos"} 
          Img={<i className="fa-solid fa-lock"></i>}
          type={"password"} 
          placeHolder={"Password"} 
          Name={"password"} 
          />

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