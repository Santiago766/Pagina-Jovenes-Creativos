import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <h1 className='header_Titulo'>To-Do List</h1>
      <div>
        <ul className='lista'>
          <li><Link to="/agregar-tareas" className='rutas'>Agregar tareas</Link></li>
          <li><Link to="/ver-tareas" className='rutas'>Ver Tareas</Link></li>
          <li><Link to="/" className='rutas'>Cerrar Sesion</Link></li>
        </ul>
      </div>
    </header>
  )
}