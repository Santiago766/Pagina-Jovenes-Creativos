import './Tarea.css'

export const Tarea = ({name, finishDate, isCompleted, cambiar, id}) => {

  // function select (id) {
  //   globalThis.localStorage.setItem('task', JSON.stringify({
  //     id: id
  //   }))
  // }

  const Date = finishDate.slice(0,10)
  return (
    <>
    <div className="tareas">
      <div className='title'>
      <h1>{name}</h1>
      </div>
      <div className='options'>
        <p>Fecha vencimiento: {Date}</p>
        <div className='checkmark'>
        <input type="checkbox" className='checkbox' checked={isCompleted}/>
        </div>
        <i className="fa-solid fa-plus"
        onClick={cambiar}></i> 
      </div>
    </div>
    </>
  )
}