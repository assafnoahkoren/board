import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'virtual:uno.css'

import "@fontsource/heebo/200.css";
import "@fontsource/heebo/400.css";
import "@fontsource/heebo/700.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
