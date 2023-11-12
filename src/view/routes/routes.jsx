import { createHashRouter } from 'react-router-dom'
import { Layout } from '../Components/Layout/Layout'
import { Login } from '../Pages/Login/Login'
import { Registro } from '../Pages/Registro/Registro'
import { VerTareas } from '../Pages/Ver-Tareas/VerTareas'
import { AgregarTarea } from '../Pages/AgregarTarea/AgregarTarea'

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
        Component: AgregarTarea
      },
      {
        path: '/ver-tareas',
        Component: VerTareas
      },
    ]
  }
  
])