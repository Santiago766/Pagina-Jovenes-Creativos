import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../Components/Layout/Layout'
import { Header } from '../Components/Header/Header'
import { Login } from '../Pages/Login/Login'
import { Registro } from '../Pages/Registro/Registro'



export const router = createBrowserRouter([
  {
    path: '/',
    Component: Login
  },
  {
    path: '/Registro',
    Component: Registro
  },

  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        Component: Header
      },
      {
        path: 'Agregar-Tareas'
      },
      {
        path: 'Ver-Tareas',
        
      },
    ]
  }
  
])