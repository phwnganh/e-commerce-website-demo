import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './components/HomePage/HomePage'
import './index.css'
import SignupPage from './components/PreLoginPage/SignupPage'
import LoginPage from './components/PreLoginPage/LoginPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage/>
  </StrictMode>,
)
