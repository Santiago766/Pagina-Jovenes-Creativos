import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <h1 className='Header_Titulo'>To-Do List</h1>

      <ul className='lista'>
        <li><Link to="/Agregar-Tareas" className='rutas'>Agregar tareas</Link></li>
        <li><Link to="/Ver-Tareas" className='rutas'>Ver Tareas</Link></li>
        <li><Link to="/" className='rutas'>Cerrar Sesion</Link></li>
      </ul>
      
    </header>
  )
}