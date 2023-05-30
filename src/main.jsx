import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { ContextShoping } from './components/Context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextShoping>
      <App /> 
    </ContextShoping>
  </React.StrictMode>,
)

/*se mete la app para que quede la funcion global*/
