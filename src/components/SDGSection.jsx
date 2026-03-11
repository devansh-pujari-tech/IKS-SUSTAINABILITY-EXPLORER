import { sdgItems } from '../data/iksData';
import useReveal from '../hooks/useReveal';

export default function SDGSection() {
  const ref = useReveal();

  return (
    <section id="sdgs" className="sdg-section" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">🌐 UN Agenda 2030</span>
          <h2 className="section-title">SDG Alignment</h2>
          <p className="section-subtitle">
            Indian Knowledge Systems directly contribute to 8 of the 17 UN Sustainable Development Goals.
          </p>
        </div>

        <div className="sdg-grid">
          {sdgItems.map((sdg, i) => (
            <article
              key={sdg.num}
              className="sdg-card reveal"
              style={{
                backgroundColor: sdg.bg,
                borderColor: sdg.border,
                transitionDelay: `${i * 0.06}s`,
              }}
              id={`sdg-card-${sdg.num}`}
              aria-label={`SDG ${sdg.num}: ${sdg.name}`}
            >
              <span className="sdg-icon-big" aria-hidden="true">{sdg.icon}</span>
              <div className="sdg-number" style={{ color: sdg.color }}>
                {sdg.num}
              </div>
              <h3 className="sdg-name" style={{ color: sdg.color }}>
                {sdg.name}
              </h3>
              <p className="sdg-iks-link" style={{ color: sdg.color }}>
                {sdg.link}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
