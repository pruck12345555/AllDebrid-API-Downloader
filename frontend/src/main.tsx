import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Debrid from './Debrid.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Debrid/>
  </StrictMode>,
)
