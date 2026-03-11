import { philosophies } from '../data/iksData';
import useReveal from '../hooks/useReveal';

export default function PhilosophySection() {
  const ref = useReveal();

  return (
    <section id="philosophy" className="philosophy-section" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">🕉️ Darshana</span>
          <h2 className="section-title">Ecological Philosophy</h2>
          <p className="section-subtitle">
            Ancient Indian thought wove ecological ethics into the very fabric of daily life, ritual, and cosmology.
          </p>
        </div>

        <div className="divider reveal">
          <div className="divider-line"></div>
          <span className="divider-icon">☸</span>
          <div className="divider-line"></div>
        </div>

        <div className="philosophy-grid">
          {philosophies.map((philo, i) => (
            <article
              key={philo.title}
              className="philosophy-card reveal"
              data-ornament={philo.ornament}
              style={{ transitionDelay: `${i * 0.12}s` }}
              id={`philo-card-${i}`}
            >
              <span className="philo-icon" aria-hidden="true">{philo.icon}</span>
              <p className="philo-concept" lang="sa">{philo.concept}</p>
              <h3 className="philo-title">{philo.title}</h3>
              <p className="philo-desc">{philo.desc}</p>
              <blockquote className="philo-quote">{philo.quote}</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
