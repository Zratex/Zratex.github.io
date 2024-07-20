import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter, Route,  Routes } from 'react-router-dom';
import { Gallery } from './pages/Gallery.tsx';
import { Projects } from './pages/Projects.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
