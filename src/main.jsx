import ReactDOM from 'react-dom/client'
import App from './view/App.jsx'
import './index.css'
import { TaskProvider } from './view/Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  // <TaskProvider>
    <App />
  // </TaskProvider>
)

