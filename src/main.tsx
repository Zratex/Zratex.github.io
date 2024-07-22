import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter, Route,  Routes } from 'react-router-dom';
import Gallery from './pages/Gallery.tsx';
import Projects from './pages/Projects.tsx';
import NotFound from './pages/NotFound.tsx';
import Zone51 from './pages/Zone51.tsx';

const LoginSport = () => {
  React.useEffect(() => {
    window.location.href = '/login-sport.html'
  }, []);
  return null;
}

const RPS = () => {
  React.useEffect(() => {
    window.location.href = '/rps.html'
  }, []);
  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/zone51" element={<Zone51 />} />
        <Route path="/login-sport" element={<LoginSport />} />
        <Route path="/rps" element={<RPS />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
