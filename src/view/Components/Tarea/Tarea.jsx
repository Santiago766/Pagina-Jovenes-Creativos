import './Tarea.css'

export const Tarea = ({ task, userId, cambiar}) => {

  function selectedTask () {
    globalThis.localStorage.setItem('task', JSON.stringify({
      _id: task._id,
      name: task.name,
      description: task.description,
      finishDate: Date,
      isCompleted: task.isCompleted,
      userId: userId
    }))
    cambiar()
  }

  const Date = task.finishDate.slice(0,10)
  return (
    <>
    <div className="tareas">
      <div className='title'>
      <h1>{task.name}</h1>
      </div>
      <div className='options'>
        <p>Fecha vencimiento: {Date}</p>
        <div className='checkmark'>
        <input type="checkbox" className='checkbox' checked={task.isCompleted}/>
        </div>
        <i className="fa-solid fa-plus"
        onClick={selectedTask}></i> 
      </div>
    </div>
    </>
  )
}