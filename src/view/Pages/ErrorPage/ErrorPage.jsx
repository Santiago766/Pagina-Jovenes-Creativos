import { Link } from 'react-router-dom'
import './ErrorPage.css'
export const ErrorPage = () => {
  return (
    <div className='ErrorContent'>
      <div>
        <h1>Opps!</h1>
        <p>La url colocada es invalida <Link to="/ver-tareas">click aqui para volver atras</Link></p>
      </div>
    </div>
   
  )
}