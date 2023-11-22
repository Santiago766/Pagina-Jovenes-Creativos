import { Tarea } from "../../Components/Tarea/Tarea";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Modal } from '../../Components/Modal/Modal.jsx'
import { Input } from "../../Components/Input.jsx";
import { API_URL } from "../../API/API_URL.js";
import { TaskContext } from "../../Context/Context.jsx";
import './VerTareas.css'


export const VerTareas = () => {
  const user = JSON.parse(globalThis.localStorage.getItem('user'))
  const [task, setTask] = useState([])
  const { state } = useContext(TaskContext)
  const [searchTerm, setSearchTerm] = useState('')
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    fetch(API_URL + `todo?userId=${user.id}`)
      .then(response => response.json())
      .then(response => 
        setTask(response.todos)
      )
  }, [state])

  const search = ({target}) => {
    setSearchTerm(target.value)
    console.log(searchTerm.toLowerCase())
  }

  const filter = task.filter((task) => {
      const title = task.name.toLowerCase().includes(searchTerm.toLowerCase());
      return title
  })
  console.log(filter)


  function cambiar() {
    setHidden(!hidden)
  }

  const todo = !hidden ? 'contentTodo' : 'hidden';

  return (
    <div className="content_content">
      <div className="Modal">
      {hidden && <Modal name={task.name} cambiar={cambiar} />}
        <div className={todo}>
          <div className="optionsTodo">
              <Input
                placeHolder={"Buscar"}
                className={"Buscador"}
                onChange={search}
                Img2={<i className="fa-solid fa-magnifying-glass"></i>}
                type={"search"}
                />
          </div>

          {filter.length > 0 ? (
            filter.map((tasks) => (
              <Tarea
                key={tasks._id}
                task={tasks}
                userId={user.id}
                cambiar={cambiar}
              />
            ))
          ) : (
            <h1 className="DontTask">No tiene tareas agregadas<br />
              <Link to="/agregar-tareas" >Click aqui para agregar una</Link>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};