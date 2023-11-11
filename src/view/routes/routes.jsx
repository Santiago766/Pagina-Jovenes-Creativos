import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../Components/Layout/Layout'
import { Header } from '../Components/Header/Header'
import { Login } from '../Pages/Login/Login'
import { Registro } from '../Pages/Registro/Registro'
import { VerTareas } from '../Pages/Ver-Tareas/VerTareas'
import { AgregarTarea } from '../Pages/AgregarTarea/AgregarTarea'




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
        path: 'Agregar-Tareas',
        Component: AgregarTarea
      },
      {
        path: 'Ver-Tareas',
        Component: VerTareas
      },
    ]
  }
  
])