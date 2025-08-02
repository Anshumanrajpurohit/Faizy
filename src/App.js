import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from '../src/component/navbar';
import Loader from '../src/component/loder';
import KiteTailCanvas from '../src/js/cursor';
import Marquee from '../src/component/marquee';
import ProductGrid from '../src/component/productGrid';
import Home from '../src/component/home';
import About from '../src/component/aboutme';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar />
      <KiteTailCanvas />
      {isHome && <Loader />}
      {isHome && <Marquee />}

      <Routes>
        <Route path="/" element={<><Home /><ProductGrid /></>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
