import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import RoutingConfig from './routes/RoutingConfig'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RoutingConfig />
    </HelmetProvider>
  </StrictMode>,
);
