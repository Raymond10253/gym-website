import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import AdminDashboard from './pages/AdminDashboard'
import '../src/styles/index.css'

const isAdminRoute = window.location.pathname.replace(/\/+$/, '') === '/admin'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isAdminRoute ? <AdminDashboard /> : <App />}
  </StrictMode>,
)
