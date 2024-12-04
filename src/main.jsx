import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FormDisponibilidad from './components/forms/FormDisponibilidad.jsx'
import FormCitas from './components/forms/FormCitas.jsx'
import FormCumplimiento from './components/forms/FormCumplimiento.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<FormDisponibilidad />} />
          <Route path='/citas' element={<FormCitas />} />
          <Route path='/cumplimiento' element={<FormCumplimiento />} />
        </Route>
      </Routes>
    </Router>
    
  </StrictMode>,
)
