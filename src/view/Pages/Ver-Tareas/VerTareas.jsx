import { Tarea } from "../../Components/Tarea/Tarea";
import './VerTareas.css'
import { Input } from "../../Components/Input/Input";

export const VerTareas = () => {
  return (
    <div className="content_content">
      <div className="contentTodo">
        <div className="optionsTodo">
          <section>
            <label >Tareas:</label>
            <select name="Tareas">
              <option>Completas</option>
              <option>Incompletas</option>
            </select>
          </section>
          <Input placeHolder={"Buscar"} className={"Buscador"} 
          Img={<i className="fa-solid fa-magnifying-glass"></i>} type={"search"}/>
        </div>
        <Tarea Name={"Bañar Perro"} Fecha={"20/11/2023"} />
        <Tarea Name={"Proyecto Jovenes Creativos"} Fecha={"14/11/2023"} />
        <Tarea Name={"Recuperar el año"} Fecha={"12/11/2023"}  />  
      </div>
    </div>
  )
}