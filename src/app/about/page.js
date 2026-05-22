


'use client';

export default function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="about-hero page-section">
        <div className="about-hero-inner">
          <div className="reveal">
            <span className="section-label">Our Story</span>
            <h1 className="about-hero-title">WHERE IRON<br/>MEETS<br/><em>INNOVATION.</em></h1>
          </div>
          <div className="about-hero-text reveal reveal-delay-2">
            <p>Founded in 2018 out of a desire to create a training environment that fuses the raw energy of old-school bodybuilding with data-driven modern sports science.</p>
            <p>From a single garage to three state-of-the-art facilities across the city — our 15,000+ member community stands as proof of what relentless dedication looks like.</p>
          </div>
        </div>
        <div className="about-hero-img reveal reveal-delay-3" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200)' }} />
      </section>

      {/* ── Mission ── */}
      <section className="page-section" style={{ background: 'var(--secondary)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-header reveal">
          <span className="section-label">Our Mission</span>
          <h2>THE THREE<br/>PILLARS</h2>
          <p>Every decision passes through this filter.</p>
        </div>
        <div className="pillars-grid">
          {[
            { icon: '⚡', title: 'Innovation', desc: 'We continuously invest in the latest equipment and methodologies — from AI-powered body scanners to biomechanics analysis labs.' },
            { icon: '🤝', title: 'Community', desc: 'A brotherhood of champions. We foster an environment where everyone pushes each other to be better, every session.' },
            { icon: '🏆', title: 'Excellence', desc: 'Zero compromise on cleanliness, maintenance, and staff expertise. Your experience is our obsession.' },
          ].map((p, i) => (
            <div key={i} className={`pillar-card reveal reveal-delay-${i + 1}`}>
              <span className="pillar-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Numbers ── */}
      <section className="page-section" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', minHeight: 'auto', padding: '80px 6%' }}>
        <div className="section-header reveal">
          <span className="section-label">Impact</span>
          <h2>BY THE<br/>NUMBERS</h2>
        </div>
        <div className="numbers-grid">
          {[['15,000+', 'Active Members'], ['250+', 'Expert Trainers'], ['98%', 'Retention Rate'], ['24/7', 'Facility Access']].map(([num, label]) => (
            <div key={label} className="number-item reveal">
              <h2>{num}</h2>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="page-section" style={{ background: 'var(--secondary)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-header reveal">
          <span className="section-label">Core Values</span>
          <h2>WHAT DRIVES<br/>US</h2>
        </div>
        <div className="values-grid">
          {[
            { title: 'Integrity', desc: 'Every rep counts. No gimmicks, no shortcuts — just hard work and proven results.' },
            { title: 'Accessibility', desc: 'Elite fitness shouldn\'t be exclusive. World-class training for anyone willing to put in the work.' },
            { title: 'Education', desc: 'We empower with knowledge. Understanding the science behind your training is as important as the training itself.' },
            { title: 'Growth', desc: 'Whether it\'s your first day or your 100th, we\'re committed to taking you further than you thought possible.' },
          ].map((v, i) => (
            <div key={i} className={`value-card reveal reveal-delay-${(i % 2) + 1}`}>
              <span className="value-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .about-hero {
          padding-top: 160px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          min-height: 100vh;
        }
        .about-hero-inner { display: flex; flex-direction: column; gap: 40px; }
        .about-hero-title {
          font-family: var(--font-display);
          font-size: clamp(4rem, 8vw, 8rem);
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: 2px;
          color: var(--text-white);
          margin-bottom: 0;
        }
        .about-hero-title em {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--primary);
        }
        .about-hero-text { display: flex; flex-direction: column; gap: 20px; }
        .about-hero-text p {
          color: var(--text-gray);
          font-size: 1rem;
          line-height: 1.8;
          font-weight: 300;
        }
        .about-hero-img {
          height: 70vh;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .about-hero-img::before {
          content: '';
          position: absolute;
          inset: -20px;
          border: 1px solid rgba(200,245,66,0.12);
          transform: translate(20px, 20px);
          pointer-events: none;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          max-width: 1300px;
          margin: 0 auto;
        }
        .pillar-card {
          padding: 52px 44px;
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 320px;
        }
        .pillar-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
          filter: brightness(0.3) blur(3px);
          pointer-events: none;
        }
        .pillar-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 2px;
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
          z-index: 3;
        }
        .pillar-card:hover::before { opacity: 1; }
        .pillar-card:hover::after { transform: scaleX(1); }
        .pillar-card:hover { background: rgba(200,245,66,0.025); transform: translateY(-6px); }
        .pillar-icon { 
          font-size: 2.2rem; 
          display: block; 
          margin-bottom: 20px; 
          position: relative;
          z-index: 2;
        }
        .pillar-card h3 {
          font-family: var(--font-display);
          font-size: 1.8rem;
          letter-spacing: 2px;
          color: var(--primary);
          margin-bottom: 16px;
          font-weight: 400;
          position: relative;
          z-index: 2;
        }
        .pillar-card p {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.7;
          font-weight: 300;
          position: relative;
          z-index: 2;
        }
        .pillar-card:nth-child(1)::before {
          background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600');
        }
        .pillar-card:nth-child(2)::before {
          background-image: url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600');
        }
        .pillar-card:nth-child(3)::before {
          background-image: url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600');
        }

        .numbers-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          max-width: 1300px;
          margin: 0 auto;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .number-item {
          text-align: center;
          padding: 60px 30px;
          background: var(--bg-start);
          transition: background 0.3s;
          position: relative;
        }
        .number-item::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--primary);
          transform: scaleX(0);
          transition: transform 0.5s ease;
        }
        .number-item:hover::before { transform: scaleX(1); }
        .number-item:hover { background: rgba(200,245,66,0.03); }
        .number-item h2 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4vw, 4rem);
          letter-spacing: 2px;
          color: var(--primary);
          font-weight: 400;
          margin-bottom: 10px;
        }
        .number-item p {
          font-size: 0.7rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-gray);
          font-weight: 600;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .value-card {
          padding: 52px 44px;
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.4s ease;
          position: relative;
        }
        .value-card:hover {
          background: rgba(200,245,66,0.02);
          border-color: rgba(200,245,66,0.12);
        }
        .value-num {
          display: block;
          font-family: var(--font-display);
          font-size: 3.5rem;
          color: rgba(255,255,255,0.04);
          line-height: 1;
          margin-bottom: 16px;
          letter-spacing: 2px;
          transition: color 0.3s;
        }
        .value-card:hover .value-num { color: rgba(200,245,66,0.1); }
        .value-card h3 {
          font-family: var(--font-display);
          font-size: 1.8rem;
          letter-spacing: 2px;
          color: var(--primary);
          margin-bottom: 16px;
          font-weight: 400;
        }
        .value-card p {
          color: var(--text-gray);
          font-size: 0.92rem;
          line-height: 1.7;
          font-weight: 300;
        }

        @media (max-width: 1024px) {
          .about-hero { grid-template-columns: 1fr; padding-top: 120px; }
          .about-hero-img { height: 50vh; }
          .pillars-grid { grid-template-columns: 1fr; }
          .numbers-grid { grid-template-columns: repeat(2, 1fr); }
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
