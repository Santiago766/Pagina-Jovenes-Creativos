import { useState } from "react"
import { Input } from "../../Components/Input"
import { API_URL } from "../../API/API_URL"
import './AgregarTarea.css'

export const AgregarTarea = () => {

  const handleClick = (event) => {
    event.preventDefault()

    fetch(API_URL + "todo", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    }).then(response => response.json())
    .then(response => {
      console.log(response)
    })

  }

  const id = JSON.parse(globalThis.localStorage.getItem('user'))

  const [newTask, setNewTask] = useState({
    name: null,
    description: null,
    finishDate: null,
    isCompleted: false,
    userId: id.id
  })

  const handleChange = ( {target} ) => {
    setNewTask(state => {
      return {
        ...state,
        [target.name]: target.value
      }
    })
  }

  return (
    <div className="content">
      <div className="contentCrear">
        <form onSubmit={handleClick}>
          <h1>Agregar Tarea</h1>

          <Input className={"Datos"} 
          placeHolder={"Task Name"} 
          Name={"name"}
          type={"text"} 
          onChange={handleChange}
          />

          <Input className={"Datos"} 
          placeHolder={"Description"} 
          Name={"description"}
          type={"text"}
          onChange={handleChange}
          />

          <Input 
          className={"Datos"} 
          placeHolder={"Finish Date"} 
          Name={"finishDate"}
          type={"date"}
          onChange={handleChange}
          />

          <button type="submit">Crear Tarea</button>
        </form>
      </div>
    </div>
  )
}