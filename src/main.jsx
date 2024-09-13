import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './main.scss'
import './components/header/header.scss'
import './components/hero/hero.scss'
import './components/aboutme/aboutme.scss'
import './components/portfolio/portfolio.scss'
import './components/contact/contact.scss'
import './components/footer/footer.scss'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
