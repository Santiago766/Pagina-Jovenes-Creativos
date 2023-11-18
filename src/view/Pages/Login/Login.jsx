import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../Components/Input";
import { useContext, useState } from "react";
import { Loginfetch } from "../../API/API_Services";
import { TaskContext } from "../../Context/Context";
import "./Login.css";

export const Login = () => {
  localStorage.clear()

  const navigate = useNavigate()

  const {state, dispatch} = useContext(TaskContext)

  const [user, setUser] = useState({
    email: null,
    password: null
  })

  function onChange({ target }) {
    setUser(state => {
      return {
        ...state,
        [target.name]: target.value
      }
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      const datos = await Loginfetch(user)
      dispatch({
        type: 'userAuth', 
        payload: datos.user
      })
      globalThis.localStorage.setItem('user', JSON.stringify({
        nombre: datos.user.firstName,
        id: datos.user._id
      }))
      navigate('/ver-tareas')
    } catch (error) {
      window.alert("Las credenciales no son correctas")
    }
  }

  return (
    <div className="Content">
      <div className="loginContent">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>

          <Input
            className={"Campos"}
            Img={<i className="fa-solid fa-user"></i>}
            type={"email"}
            placeHolder={"Email"}
            Name={"email"}
            onChange={onChange}
            required
          />

          <Input
            className={"Campos"}
            Img={<i className="fa-solid fa-lock"></i>}
            type={"password"}
            placeHolder={"Password"}
            Name={"password"}
            onChange={onChange}
            required
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