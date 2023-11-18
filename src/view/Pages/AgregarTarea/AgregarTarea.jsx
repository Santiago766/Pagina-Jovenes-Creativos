import { useState } from "react"
import { Input } from "../../Components/Input"
import './AgregarTarea.css'
import { CreateTask } from "../../API/API_Services"

export const AgregarTarea = () => {

  const handleClick = (event) => {
    event.preventDefault()
    CreateTask(newTask)
  }

  const id = JSON.parse(globalThis.localStorage.getItem('user'))

  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    finishDate: '',
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
        <form className="form" onSubmit={handleClick}>
          <div className="titleForm">
            <h1>Agregar Tarea</h1>
          </div>

          <Input className={"create"}
            placeHolder={"Task Name"}
            Name={"name"}
            type={"text"}
            onChange={handleChange}
            value={newTask.name}
          />

          <Input className={"create"}
            placeHolder={"Description"}
            Name={"description"}
            type={"text"}
            onChange={handleChange}
          />

          <Input
            className={"create"}
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