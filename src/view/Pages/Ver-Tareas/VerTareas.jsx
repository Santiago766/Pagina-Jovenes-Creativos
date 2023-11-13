import { Tarea } from "../../Components/Tarea/Tarea";
import { useState, useEffect } from "react";
import { Modal } from '../../Components/Modal/Modal.jsx'
import { Input } from "../../Components/Input/Input";
import { API_URL } from "../../API/API_URL.js";
import './VerTareas.css'


export const VerTareas = () => {

  const user = JSON.parse(globalThis.localStorage.getItem('user'))
  const id = user.id

  console.log(id)

  const [task, setTask] = useState()

  useEffect(() => {

    fetch(API_URL + `todo?userId=${id}`, {
      method: "GET",
    }).then(response => response.json())
      .then(response => setTask(response.todos))

  }, [])

  console.log(task)



  const [hidden, setHidden] = useState(false)

  function cambiar(id) {
    setHidden(!hidden)
    const user = JSON.parse(globalThis.localStorage.getItem('user'))
    console.log(user.id)

    globalThis.localStorage.setItem('task', JSON.stringify({
      id: id
    }))
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
          cambiar={cambiar}
          id={tasks._id}
          />
          ))
        }


      </div>
    </div>
  )
}