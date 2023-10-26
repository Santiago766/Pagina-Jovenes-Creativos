import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1>To-Do List</h1>

      <ul className='lista'>
        <li className='rutas'><Link to="/">Inicio</Link></li>
        <li className='rutas'><Link to="Agregar-Tareas">Agregar tareas</Link></li>
        <li className='rutas'><Link to="Ver-Tareas">Ver Tareas</Link></li>
      </ul>
    </header>
  )
}