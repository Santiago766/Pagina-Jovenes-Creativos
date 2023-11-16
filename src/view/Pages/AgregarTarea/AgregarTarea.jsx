import { useState } from "react"
import { Input } from "../../Components/Input"
import { API_URL } from "../../API/API_URL"
import './AgregarTarea.css'
import { CreateTask } from "../../API/API_Services"

export const AgregarTarea = () => {

  const handleClick = (event) => {
    event.preventDefault()
    CreateTask(newTask)
  }

  const id = JSON.parse(globalThis.localStorage.getItem('user'))

  const [newTask, setNewTask] = useState({
    name: null,
    description: null,
    finishDate: null,
    isCompleted: false,
    userId: id.id
  })

  const handleChange = ({ target }) => {
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

          <Input className={"create"}
            placeHolder={"Task Name"}
            Name={"name"}
            type={"text"}
            onChange={handleChange}
            value=''
          />

          <Input className={"create"}
            placeHolder={"Description"}
            Name={"description"}
            type={"text"}
            onChange={handleChange}
            value=''
          />

          <Input
            className={"create"}
            placeHolder={"Finish Date"}
            Name={"finishDate"}
            type={"date"}
            onChange={handleChange}
            value=''
          />

          <button type="submit">Crear Tarea</button>
        </form>
      </div>
    </div>
  )
}