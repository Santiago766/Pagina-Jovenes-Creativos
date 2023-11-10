import './Tareas.css'

export const Tareas = ({Name}) => {
  return (
    <div className="tareas">
      <div className='title'>
      <h1>{Name}</h1>
      <input type="datetime-local" />
      </div>
      <div className='options'>
        <input type="checkbox" />
        <i class="fa-solid fa-plus"></i> 
      </div>
    </div>
  )
}