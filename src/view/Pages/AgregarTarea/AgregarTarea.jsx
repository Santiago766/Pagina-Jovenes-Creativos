import { Input } from "../../Components/Input/Input"
import './AgregarTarea.css'

export const AgregarTarea = () => {

  return (
    <div className="content">
      <div className="contentCrear">
        <form action="/ver-tareas">
          <h1>Agregar Tarea</h1>

          <Input className={"Datos"} placeHolder={"Task Name"} Name={"name"}
          type={"text"} 
          />

          <Input className={"Datos"} placeHolder={"Description"} Name={"description"}
          type={"text"}
          />

          <Input className={"Datos"} placeHolder={"Finish Date"} Name={"finishDate"}
          type={"date"}
          />

          <button type="submit">Crear Tarea</button>
        </form>
      </div>
    </div>
  )
}