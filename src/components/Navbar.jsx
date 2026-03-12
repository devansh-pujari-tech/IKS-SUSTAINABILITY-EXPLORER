import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/topics', label: 'Topics' },
  { to: '/solver', label: 'Solutions' },
  { to: '/philosophy', label: 'Philosophy' },
  { to: '/sdg', label: 'SDGs' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <Link to="/" className="nav-brand">
        <span className="nav-logo">🌿</span>
        <span className="nav-title">Sustainability Explorer</span>
      </Link>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
