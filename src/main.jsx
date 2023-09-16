import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'atropos/css'
import './styles/styles.scss'
import './translations/i18next-config'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
