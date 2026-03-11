import { useEffect, useMemo, useState } from 'react';
import { practices } from '../data/practices';
import useReveal from '../hooks/useReveal';

function PracticeModal({ practice, onClose }) {
  useEffect(() => {
    if (!practice) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [practice, onClose]);

  if (!practice) return null;

  return (
    <div className="practice-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="practice-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`practice-modal-title-${practice.id}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="practice-modal-close" onClick={onClose} aria-label="Close practice details">
          X
        </button>

        <div className="practice-modal-header">
          <div>
            <span className="practice-modal-category">{practice.category}</span>
            <h3 className="practice-modal-title" id={`practice-modal-title-${practice.id}`}>
              {practice.name}
            </h3>
            <p className="practice-modal-meta">{practice.region} | {practice.sdg}</p>
          </div>
          <span className="practice-modal-sdg">{practice.sdg}</span>
        </div>

        <p className="practice-modal-summary">{practice.description}</p>

        <div className="practice-modal-grid">
          <div className="practice-modal-panel">
            <h4>Ancient Context</h4>
            <p>{practice.ancientContext}</p>
          </div>
          <div className="practice-modal-panel">
            <h4>Modern Sustainability Relevance</h4>
            <p>{practice.modernRelevance}</p>
          </div>
          <div className="practice-modal-panel practice-modal-panel-full">
            <h4>Full Description</h4>
            <p>{practice.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TopicsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activePractice, setActivePractice] = useState(null);
  const ref = useReveal();

  const filteredPractices = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return practices;

    return practices.filter((practice) =>
      [practice.name, practice.category, practice.region].some((value) =>
        value.toLowerCase().includes(query)
      )
    );
  }, [searchTerm]);

  return (
    <section id="topics" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">Searchable Explorer</span>
          <h2 className="section-title">Ancient Indian Sustainability Practices</h2>
          <p className="section-subtitle">
            Explore place-based practices from ancient India through region, category, and ecological relevance.
          </p>
        </div>

        <div className="topics-toolbar reveal">
          <label className="topics-search" htmlFor="practice-search">
            <span className="topics-search-label">Search by name, category, or region</span>
            <input
              id="practice-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Try Stepwells, Water Management, Meghalaya..."
              className="topics-search-input"
            />
          </label>
          <p className="topics-search-meta">
            {filteredPractices.length} practice{filteredPractices.length === 1 ? '' : 's'} found
          </p>
        </div>

        <div className="practices-grid">
          {filteredPractices.map((practice, index) => (
            <article
              key={practice.id}
              className="practice-card reveal visible"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <button
                type="button"
                className="practice-card-button"
                onClick={() => setActivePractice(practice)}
                aria-label={`Open details for ${practice.name}`}
              >
                <div className="practice-card-top">
                  <span className="practice-card-category">{practice.category}</span>
                  <span className="practice-card-sdg">{practice.sdg}</span>
                </div>
                <h3 className="practice-card-title">{practice.name}</h3>
                <p className="practice-card-region">{practice.region}</p>
                <p className="practice-card-description">{practice.description}</p>
              </button>
            </article>
          ))}
        </div>

        {filteredPractices.length === 0 && (
          <div className="practices-empty reveal visible" role="status">
            <h3>No matching practices</h3>
            <p>Try a broader region, category, or practice name.</p>
          </div>
        )}
      </div>

      <PracticeModal practice={activePractice} onClose={() => setActivePractice(null)} />
    </section>
  );
}
