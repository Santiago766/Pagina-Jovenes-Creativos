import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import './Layout.css'

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
    </>
  )
}
