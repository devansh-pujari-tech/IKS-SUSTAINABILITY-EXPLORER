import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Solver from './pages/Solver';
import Philosophy from './pages/Philosophy';
import SDG from './pages/SDG';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function AppShell() {
  return (
    <>
      <div className="bg-mandala" aria-hidden="true" />
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/solver" element={<Solver />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/sdg" element={<SDG />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
