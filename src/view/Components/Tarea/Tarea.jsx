import './Tarea.css'

export const Tarea = ({name, finishDate, isCompleted, description, id, cambiar}) => {

  

  function task () {
    globalThis.localStorage.setItem('task', JSON.stringify({
      name: name,
      description: description,
      finishDate: Date,
      isCompleted: isCompleted,
      id: id
    }))
    cambiar()
  }

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
        onClick={task}></i> 
      </div>
    </div>
    </>
  )
}