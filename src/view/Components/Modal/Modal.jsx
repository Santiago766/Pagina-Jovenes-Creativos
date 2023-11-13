import './Modal.css'

export const Modal = ({name, cambiar}) => {

  const selected = JSON.parse(globalThis.localStorage.getItem('task'))
  console.log(selected)
  return (
    <div className='task'>
      <div className="taskContent">
        <header className='taskHeader'>
          <div className='taskName'>
            <h1>{name}</h1>
          </div>
          <div className='taskClose'>
            <i className="fa-regular fa-circle-xmark" 
            onClick={cambiar}></i>
          </div>
        </header>

        <div className='taskDescription'>
          <h2>Descripcion</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati doloribus delectus numquam nesciunt voluptatibus quod?
            Veniam ea unde itaque obcaecati cupiditate aliquam cum similique
            veritatis facilis quisquam, fugiat, accusamus mollitia?
          </p>  

          <h3>Fecha Limite: (fecha)</h3>
        </div>
        <footer>
          <div className='taskOptions'>
            <p>Editar:</p>
            <i className="fa-regular fa-pen-to-square"></i>
          </div>
          <div className='taskOptions'>
            <p>Completar:</p>
            <i className="fa-regular fa-circle-check"></i>
          </div>
          <div className='taskOptions'>
            <p>ELiminar:</p>
            <i className="fa-solid fa-trash"></i>
          </div>

        </footer>
      </div>
    </div>
  )
}