import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../Components/Layout/Layout'
import { Header } from '../Components/Header/Header'


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: 'Iniciar-Sesion',
        Component: Header
      }
    ]
  }

])