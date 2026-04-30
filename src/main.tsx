import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GrainGradient } from '@paper-design/shaders-react';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <GrainGradient
          className="gradient"
          colors={["#000000", "#0077ff", "#ffffff"]}
          colorBack="#0a0000"
          softness={1}
          intensity={1}
          noise={0.51}
          shape="dots"
          speed={1}
          scale={0.32}
          rotation={60}
      />
    <App />
  </StrictMode>,
)
