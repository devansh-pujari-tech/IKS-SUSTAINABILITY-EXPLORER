import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero section">
      <div className="hero-ornament" aria-hidden="true">☸</div>

      <div className="hero-badge" aria-label="Indian Knowledge Systems">
        <span>🇮🇳</span>
        Indian Knowledge Systems
      </div>

      <h1 className="hero-title">
        <span className="line1">Ancient Wisdom for a</span>
        <span className="line2">Sustainable Future</span>
      </h1>

      <p className="hero-devanagari" aria-label="Vasudhaiva Kutumbakam in Sanskrit">
        वसुधैव कुटुम्बकम्
      </p>

      <p className="hero-subtitle">
        Discover millennia-old Indian traditions that hold the answers to today&apos;s
        greatest environmental challenges from drought to biodiversity loss.
      </p>

      <div className="hero-cta">
        <Link to="/topics" className="btn-primary" id="explore-topics-btn">
          🌱 Explore Topics
        </Link>
        <Link to="/solver" className="btn-secondary" id="find-solutions-btn">
          ⚡ Find Solutions
        </Link>
      </div>

      <div className="hero-stats" role="list" aria-label="Key statistics">
        <div className="stat-item" role="listitem">
          <div className="stat-number">5000+</div>
          <div className="stat-label">Years of Wisdom</div>
        </div>
        <div className="stat-item" role="listitem">
          <div className="stat-number">13K+</div>
          <div className="stat-label">Sacred Groves</div>
        </div>
        <div className="stat-item" role="listitem">
          <div className="stat-number">8</div>
          <div className="stat-label">SDGs Addressed</div>
        </div>
        <div className="stat-item" role="listitem">
          <div className="stat-number">200+</div>
          <div className="stat-label">Millet Varieties</div>
        </div>
      </div>
    </section>
  );
}
