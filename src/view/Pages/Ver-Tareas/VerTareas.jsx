import { Tarea } from "../../Components/Tarea/Tarea";
import { useState, useEffect } from "react";
import { Modal } from '../../Components/Modal/Modal.jsx'
import { Input } from "../../Components/Input.jsx";
import { API_URL } from "../../API/API_URL.js";
import './VerTareas.css'


export const VerTareas = () => {

  const user = JSON.parse(globalThis.localStorage.getItem('user'))

  const [task, setTask] = useState()

  useEffect(() => {

    fetch(API_URL + `todo?userId=${user.id}`, {
      method: "GET",
    }).then(response => response.json())
      .then(response => setTask(response.todos))

  }, [])

  const [hidden, setHidden] = useState(false)

  function cambiar() {
    setHidden(!hidden)
  }
  

  const todo = !hidden
    ? 'contentTodo' : 'hidden'

  return (
    <div className="content_content" >
      {hidden && <Modal name={task.name} cambiar={cambiar} />}
      <div className={todo}>
        <div className="optionsTodo">
          <section>
            <label >Tareas:</label>
            <select name="Tareas">
              <option>Todas</option>
              <option>Completas</option>
              <option>Incompletas</option>
            </select>
          </section>
          <Input placeHolder={"Buscar"} className={"Buscador"}
            Img={<i className="fa-solid fa-magnifying-glass"></i>} type={"search"} />
        </div>


        {
          task && task.map((tasks) => (
          <Tarea 
          key={tasks._id} 
          name={tasks.name}
          finishDate={tasks.finishDate} 
          isCompleted={tasks.isCompleted}
          description={tasks.description}
          cambiar={cambiar}
          />
          ))
        }
      </div>
    </div>
  )
}