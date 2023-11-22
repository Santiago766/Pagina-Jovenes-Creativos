import ReactDOM from 'react-dom/client'
import App from './view/App.jsx'
import { TaskProvider } from './view/Context/Context.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(

  <TaskProvider>
    <App />
  </TaskProvider>
)

