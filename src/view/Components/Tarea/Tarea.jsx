import './Tarea.css'

export const Tarea = ({Name, Fecha}) => {
  return (
    <div className="tareas">
      <div className='title'>
      <h1>{Name}</h1>
      </div>
      <div className='options'>

        <p>Fecha vencimiento {Fecha}</p>
        <input type="checkbox" className='checkbox' />
        <i class="fa-solid fa-plus"></i> 
      </div>
    </div>
  )
}