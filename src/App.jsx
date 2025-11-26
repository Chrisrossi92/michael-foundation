// src/App.jsx
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/home'; // 👈 back to the original import
import AboutMichael from './pages/AboutMichael';
import Foundation from './pages/Foundation';
import Events from './pages/Events';
import Contact from './pages/Contact';
import signatureLogo from './assets/signature-logo.png';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`app-container ${isHome ? 'home' : ''}`}>
      <header className={`site-header ${isHome ? 'home' : ''}`}>
        <nav className="main-nav">
          <Link to="/" className="logo-link">
            <img
              src={signatureLogo}
              alt="Michael J. Rossi Signature Logo"
              className="nav-logo"
            />
          </Link>
          <Link to="/about-michael">About Michael</Link>
          <Link to="/foundation">The Foundation</Link>
          <Link to="/events">Events &amp; News</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-michael" element={<AboutMichael />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

