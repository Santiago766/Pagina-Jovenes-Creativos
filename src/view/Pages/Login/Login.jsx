import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../Components/Input/Input";
import { API_URL } from "../../API/API_URL";
import "./Login.css";

export const Login = () => {
  localStorage.clear()

  const navigate = useNavigate();


    const handleSubmit = (event) => {
    event.preventDefault();
    let body = {}
    for (const element of event.target.elements){
      if (element.name) {
        body = { ...body, [element.name]: element.value}
      }
    }


    fetch(API_URL + "user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }).then(response => response.json())
    .then(response => {

      globalThis.localStorage.setItem('user', JSON.stringify({
        nombre: response.user.firstName,
        id: response.user._id
      }))
      
      console.log(response.user.firstName)
      navigate("/ver-tareas")
    })
  }
    

  return (
    <div className="Content">
      <div className="loginContent">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          
          <Input
            className={"Campos"}
            Img={<i className="fa-solid fa-user"></i>}
            type={"email"}
            placeHolder={"Email"}
            Name={"email"}
          />

          <Input
            className={"Campos"}
            Img={<i className="fa-solid fa-lock"></i>}
            type={"password"}
            placeHolder={"Password"}
            Name={"password"}
          />

          <div className="Entrar">
            <button type="submit">Ingresar</button>
            <div className="Registro">
              <p>¿No tienes cuenta?</p>
              <Link className="Registro__link" to="/Registro">
                Regístrate
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};