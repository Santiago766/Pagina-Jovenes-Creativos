import './Modal.css'

export const Modal = () => {
  return (
    <div className='task'>
      <div className="taskContent">
        <header className='taskHeader'>
          <div className='taskName'>
            <h1>Titulo tarea</h1> {/*cambiar al de la api*/}
          </div>
          <div className='taskClose'>
            <i className="fa-regular fa-circle-xmark"></i>
          </div>
        </header>

        <div className='taskDescription'>
          <h2>Descripcion</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati doloribus delectus numquam nesciunt voluptatibus quod?
              Veniam ea unde itaque obcaecati cupiditate aliquam cum similique
                veritatis facilis quisquam, fugiat, accusamus mollitia?
          </p>
        </div>
      </div>
    </div>
  )
}