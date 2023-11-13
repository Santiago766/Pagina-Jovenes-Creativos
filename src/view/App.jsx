import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
// import { TasksContext } from './Context/Context'

function App () {
  return (
      <RouterProvider router={router} />  )
}

export default App
