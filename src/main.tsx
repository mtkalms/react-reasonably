import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css'; 
import './highlight/shades-of-purple.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
