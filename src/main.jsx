import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //StrictMode checks if our jsx files are aligned with the norms decided by React so that it doesn't conflict with the future release of react.
  <StrictMode>
    {/* Refers to App.jsx */}
    <App />
  </StrictMode>,
)
