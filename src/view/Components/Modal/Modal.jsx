import { OptionCard } from '../OptionCard'
import { API_URL } from '../../API/API_URL'
import './Modal.css'
import { Eliminar } from '../../API/API_Services'

export const Modal = ({cambiar}) => {
  const selected = JSON.parse(globalThis.localStorage.getItem('task'))
  
  const id = JSON.stringify(selected.id)

  const eliminar = (id) => {
    Eliminar()
    cambiar()
  }

 
  
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

          <OptionCard className={"taskOptions editar"} 
          text={"Editar:"} 
          img={<i className="fa-regular fa-pen-to-square"></i>} 
          />

          {!selected.isCompleted && <OptionCard className={"taskOptions completar"} 
          text={"Completar:"} 
          img={ <i className="fa-regular fa-circle-check"></i>} 
          />}

          {selected.isCompleted && <OptionCard className={"taskOptions eliminar"} 
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