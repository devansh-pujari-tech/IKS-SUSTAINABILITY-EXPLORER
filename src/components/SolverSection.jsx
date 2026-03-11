import { useState } from 'react';
import { problems } from '../data/iksData';
import useReveal from '../hooks/useReveal';

function SolutionCard({ solution, problemName }) {
  return (
    <div className="solution-card" role="region" aria-label={`Solution: ${solution.title}`}>
      <div className="solution-header">
        <p className="solution-problem">Traditional Solution for: {problemName}</p>
        <h3 className="solution-title">{solution.title}</h3>
        <p className="solution-sanskrit">{solution.sanskrit}</p>
      </div>
      <div className="solution-body">
        <p className="solution-desc">{solution.desc}</p>
        <div className="solution-how">
          <h5>⚙️ HOW TO IMPLEMENT</h5>
          <ol className="solution-steps">
            {solution.steps.map((step, i) => (
              <li key={i}>
                <span className="step-num">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', marginBottom: '0.5rem' }}>
            SDG Alignment
          </p>
          <div className="solution-sdgs">
            {solution.sdgs.map((sdg) => (
              <span
                key={sdg.label}
                className="sdg-label"
                style={{ backgroundColor: sdg.color }}
              >
                {sdg.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="empty-solution" role="status" aria-label="No problem selected">
      <span className="empty-icon">🪷</span>
      <p className="empty-text">
        Select an environmental problem on the left to discover the traditional Indian solution.
      </p>
    </div>
  );
}

export default function SolverSection() {
  const [selectedId, setSelectedId] = useState(null);
  const ref = useReveal();
  const selected = problems.find((p) => p.id === selectedId);

  return (
    <section id="solutions" className="solver-section" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">⚡ Interactive Tool</span>
          <h2 className="section-title">Environmental Problem Solver</h2>
          <p className="section-subtitle">
            Choose a modern environmental crisis and discover what ancient Indian traditions have to offer.
          </p>
        </div>

        <div className="solver-wrapper reveal">
          <div className="solver-left">
            <h3>Select an Environmental Problem</h3>
            <p>India's traditional knowledge systems have developed sustainable solutions over millennia. Each answer is rooted in community wisdom, ecological science, and cultural practice.</p>
            <div className="problem-grid" role="radiogroup" aria-label="Environmental problems">
              {problems.map((problem) => (
                <button
                  key={problem.id}
                  className={`problem-btn ${selectedId === problem.id ? 'selected' : ''}`}
                  onClick={() => setSelectedId(problem.id)}
                  role="radio"
                  aria-checked={selectedId === problem.id}
                  id={`problem-btn-${problem.id}`}
                >
                  <span className="problem-icon" aria-hidden="true">{problem.icon}</span>
                  <div className="problem-text">
                    <div className="problem-name">{problem.name}</div>
                    <div className="problem-desc">{problem.desc}</div>
                  </div>
                  {selectedId === problem.id && (
                    <span aria-hidden="true" style={{ color: 'var(--primary-light)', fontSize: '1.2rem' }}>→</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="solver-right">
            {selected ? (
              <SolutionCard
                solution={selected.solutions[0]}
                problemName={selected.name}
              />
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
