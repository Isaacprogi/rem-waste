import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { SkipProvider } from './context/SkipContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <SkipProvider>
        <App />
      </SkipProvider>
    </Router>
  </StrictMode>,
)
