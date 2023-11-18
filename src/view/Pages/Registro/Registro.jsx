import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../Components/Input"
import { useState, useContext } from "react"
import { RegisterUser } from "../../API/API_Services"
import { TaskContext } from "../../Context/Context"
import './Registro.css'

export const Registro = () => {

  const navigate = useNavigate();

  const {state, dispatch} = useContext(TaskContext)

  const [mensage, setMensage] = useState(false)

  const [user, setUser] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null
  })

  function onChange({ target }) {
    setUser(state => {
      if ([target.name] == "password" && target.value.length >= 8 ) {
        setMensage(true)
      }else {
        setMensage(false)
      }
      return {
        ...state,
        [target.name]: target.value
      }
    })
  }


  const handleSubmit = async(event) => {
    event.preventDefault();

    try {
      const datos = await RegisterUser(user)
      console.log(user)
      dispatch({
        type: 'Register', 
        payload: datos.user
      })
      globalThis.localStorage.setItem('user', JSON.stringify({
        nombre: datos.user.firstName,
        id: datos.user._id
      }))
      navigate('/ver-tareas')
    } catch (error) {
      window.alert("Falta rellenar algun campo o el email ya esta en uso")
    }
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
          onChange={onChange}
         />

          <Input
          className={"Datos"} 
          Img={<i className="fa-solid fa-user"></i>}
          type={"text"} 
          placeHolder={"Last Name"} 
          Name={"lastName"}
          onChange={onChange}
          />

          <Input 
          className={"Datos"} 
          Img={<i className="fa-solid fa-envelope"></i>}
          type={"email"} 
          placeHolder={"Email"} 
          Name={"email"} 
          onChange={onChange}
          />

          <Input 
          className={"Datos"} 
          Img={<i className="fa-solid fa-lock"></i>}
          type={"password"} 
          placeHolder={"Password"} 
          Name={"password"}
          onChange={onChange}
          />

          {!mensage && 
          <p className="passsword">La clave debe tener almenos<br/> 8 caracteres</p>
          }

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