import { OptionCard } from '../OptionCard'
import { Delete, Update } from '../../API/API_Services'
import { FormEdit } from '../FormEdit/FormEdit'
import { useState } from 'react'
import { useContext } from "react";
import { TaskContext } from "../../Context/Context.jsx";
import './Modal.css'

export const Modal = ({cambiar}) => {

  const selected = JSON.parse(globalThis.localStorage.getItem('task'))
  const { dispatch } = useContext(TaskContext)

  const [Form, setForm] = useState (false)

  const eliminar = async() => {
    await Delete()
    dispatch({
      type:'Update',
      payload: selected
    })
    cambiar()
  }

  const completar = async() => {
    selected.isCompleted = !selected.isCompleted
    await Update(selected)
    dispatch({
      type:'Update',
      payload: selected
    })
    cambiar()
  }

  const edit = () => {
    setForm(!Form)
  }

  const Modal = !Form ? 'taskContent' : 'hidden'

 
  
  return (
    <div className='task'>
      {Form && <FormEdit edit={edit} cambiar={cambiar} />}
      <div className={Modal}>
        <header className='taskHeader'>
          <div className='taskName'>
            <h1>{selected.name}</h1>
          </div>
          <div className='taskClose'>
            <i className="fa-regular fa-circle-xmark" 
            onClick={cambiar}></i>
          </div>
        </header>

        <div className='taskDescription'>
          <h2>Descripcion</h2>
          <p>{selected.description}</p>  
          <h3>Fecha Limite: {selected.finishDate}</h3>
        </div>
        <footer>  

          <OptionCard
          onClick={edit} 
          className={"taskOptions editar"} 
          text={"Editar:"} 
          img={<i className="fa-regular fa-pen-to-square"></i>} 
          />

          {!selected.isCompleted && <OptionCard 
          onClick={completar}
          className={"taskOptions completar"} 
          text={"Completar:"} 
          img={ <i className="fa-regular fa-circle-check"></i>} 
          />}

          {selected.isCompleted && <OptionCard 
          onClick={completar}
          className={"taskOptions eliminar"} 
          text={"Descompletar:"} 
          img={ <i className="fa-regular fa-circle-check"></i>} 
          />}

          <OptionCard 
          onClick={eliminar} 
          className={"taskOptions eliminar"} 
          text={"Eliminar:"} 
          img={<i className="fa-solid fa-trash" ></i>}
          />

        </footer>
      </div>
    </div>
  )
}