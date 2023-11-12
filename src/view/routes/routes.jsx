import { createHashRouter } from 'react-router-dom'
import { Layout } from '../Components/Layout/Layout'
import { Login } from '../Pages/Login/Login'
import { Registro } from '../Pages/Registro/Registro'
import { VerTareas } from '../Pages/Ver-Tareas/VerTareas'
import { AgregarTarea } from '../Pages/AgregarTarea/AgregarTarea'
import { ProtecteRoute } from './ProtecteRoute'
import { Modal } from '../Components/Modal/Modal'

export const router = createHashRouter([
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
        path: 'Agregar-Tareas',
        element: (
          <ProtecteRoute><AgregarTarea/></ProtecteRoute>
        )
      },
      {
        path: 'ver-tareas',
        element: (
          <ProtecteRoute><VerTareas/></ProtecteRoute>
        )
      },
      {
        path:'Modal',
        Component: Modal
      }
    ]
  }
  
])