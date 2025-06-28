import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Due to strictMode the app will render twice its an development standard
  <StrictMode> 
    <App />
  </StrictMode>,
)
