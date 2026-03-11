import { useState } from 'react';
import { topics } from '../data/iksData';
import useReveal from '../hooks/useReveal';

function TopicDetail({ topic }) {
  return (
    <div className="topic-detail" role="region" aria-label={`Details for ${topic.title}`}>
      <div className="topic-detail-header">
        <span className="topic-detail-icon" aria-hidden="true">{topic.icon}</span>
        <div>
          <h3 className="topic-detail-title">{topic.title}</h3>
          <p className="topic-detail-subtitle">{topic.devanagari} — {topic.tag}</p>
        </div>
      </div>
      <div className="topic-detail-grid">
        <div className="detail-section">
          <h4>🌿 Key Practices</h4>
          <ul className="detail-list">
            {topic.details.keyPractices.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="detail-section">
          <h4>✅ Environmental Benefits</h4>
          <ul className="detail-list">
            {topic.details.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div style={{ marginTop: '1.5rem' }}>
            <h4>🎯 SDG Alignment</h4>
            <div className="sdg-chips" style={{ marginTop: '0.75rem' }}>
              {topic.details.sdgs.map((s, i) => (
                <span key={i} className="sdg-chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TopicsSection() {
  const [activeTopic, setActiveTopic] = useState(null);
  const ref = useReveal();

  const handleTopicClick = (id) => {
    setActiveTopic(activeTopic === id ? null : id);
  };

  const selectedTopic = topics.find((t) => t.id === activeTopic);

  return (
    <section id="topics" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">📚 Core Domains</span>
          <h2 className="section-title">Traditional Knowledge Pillars</h2>
          <p className="section-subtitle">
            Four centuries-old domains where Indian wisdom offers profound and practical environmental insights.
          </p>
        </div>

        <div className="topics-grid">
          {topics.map((topic, i) => (
            <article
              key={topic.id}
              className={`topic-card reveal ${activeTopic === topic.id ? 'active' : ''}`}
              style={{
                '--card-gradient': topic.gradient,
                transitionDelay: `${i * 0.07}s`,
              }}
              onClick={() => handleTopicClick(topic.id)}
              role="button"
              tabIndex={0}
              aria-expanded={activeTopic === topic.id}
              aria-label={`Learn about ${topic.title}`}
              onKeyDown={(e) => e.key === 'Enter' && handleTopicClick(topic.id)}
              id={`topic-card-${topic.id}`}
            >
              <span className="topic-icon" aria-hidden="true">{topic.icon}</span>
              <span className="topic-tag">{topic.tag}</span>
              <h3 className="topic-title">{topic.title}</h3>
              <p className="topic-desc">{topic.description}</p>
              <div className="topic-practices">
                {topic.practices.map((p) => (
                  <span key={p} className="practice-chip">{p}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {selectedTopic && (
          <div className="reveal visible">
            <TopicDetail topic={selectedTopic} />
          </div>
        )}
      </div>
    </section>
  );
}
