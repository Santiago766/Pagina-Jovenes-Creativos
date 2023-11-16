import ReactDOM from 'react-dom/client'
import App from './view/App.jsx'
import './index.css'
import { TaskProvider } from './view/Context/Context.jsx'
import { TaskStateContext } from './view/Context/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <TaskProvider>
    {/* <TaskStateContext> */}
      <App />
    {/* </TaskStateContext> */}
  </TaskProvider>
)

