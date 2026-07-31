import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import RoutingConfig from './routes/RoutingConfig'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutingConfig/>
  </StrictMode>,
)
