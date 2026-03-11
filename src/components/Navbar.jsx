import { useState, useEffect } from 'react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#topics', label: 'Topics' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#sdgs', label: 'SDGs' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['home', 'topics', 'solutions', 'philosophy', 'sdgs'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <a href="#home" className="nav-brand">
        <span className="nav-logo">🌿</span>
        <span className="nav-title">Sustainability Explorer</span>
      </a>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={active === item.href ? 'active' : ''}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
