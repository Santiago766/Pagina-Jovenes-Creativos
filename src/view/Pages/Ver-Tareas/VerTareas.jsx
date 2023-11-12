import { Tarea } from "../../Components/Tarea/Tarea";
import { useState } from "react";
import {Modal} from '../../Components/Modal/Modal.jsx'
import { Input } from "../../Components/Input/Input";
import './VerTareas.css'

export const VerTareas = () => {

  const [hidden, setHidden] = useState(false)

  function cambiar () {
    setHidden(!hidden)
    console.log("pepino")
  }

  const todo = !hidden
  ? 'contentTodo' : 'hidden'

  return (
    <div className="content_content" >
      {hidden && <Modal cambiar={cambiar}/>}
      <div className={todo}>
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
        <Tarea Name={"Bañar Perro"} Fecha={"20/11/2023"} cambiar={cambiar} />
        <Tarea Name={"Proyecto Jovenes Creativos"} Fecha={"14/11/2023"} cambiar={cambiar} />
        <Tarea Name={"Recuperar el año"} Fecha={"12/11/2023"} cambiar={cambiar}  />  
        <Tarea Name={"Recuperar el año"} Fecha={"12/11/2023"} cambiar={cambiar}  />  
        <Tarea Name={"Recuperar el año"} Fecha={"12/11/2023"} cambiar={cambiar}  />  
        <Tarea Name={"Recuperar el año"} Fecha={"12/11/2023"} cambiar={cambiar}  />  
        <Tarea Name={"Recuperar el año"} Fecha={"12/11/2023"} cambiar={cambiar}  />  
      </div>
    </div>
  )
}