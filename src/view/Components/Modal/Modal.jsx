import { OptionCard } from '../OptionCard'
import './Modal.css'

export const Modal = ({cambiar}) => {

  const selected = JSON.parse(globalThis.localStorage.getItem('task'))
  
  return (
    <div className='task'>
      <div className="taskContent">
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

          <OptionCard className={"taskOptions"} 
          text={"Editar:"} 
          img={<i className="fa-regular fa-pen-to-square"></i>} 
          />

          {!selected.isCompleted && <OptionCard className={"taskOptions "} 
          text={"Completar:"} 
          img={ <i className="fa-regular fa-circle-check"></i>} 
          />}

          {selected.isCompleted && <OptionCard className={"taskOptions "} 
          text={"Descompletar:"} 
          img={ <i className="fa-regular fa-circle-check"></i>} 
          />}

          <OptionCard className={"taskOptions"} 
          text={"Eliminar:"} 
          img={<i className="fa-solid fa-trash"></i>} 
          />

        </footer>
      </div>
    </div>
  )
}