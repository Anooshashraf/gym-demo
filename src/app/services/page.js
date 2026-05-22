


'use client';
import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: '1-on-1 Personal Training',
    shortTitle: 'Personal Training',
    tag: 'PT',
    img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200',
    desc: 'Bespoke training programs tailored precisely to your biomechanics, goals, and lifestyle. Your dedicated coach tracks every metric to guarantee results — no guesswork, only data.',
    features: [
      'Comprehensive movement & postural assessment',
      'Customized macro-cycle programming',
      'Weekly form reviews via video analysis',
      'Direct coach communication & check-ins',
      'Progress tracking via proprietary app',
    ],
    price: 'From $120 / session',
  },
  {
    num: '02',
    title: 'Nutritional Coaching',
    shortTitle: 'Nutrition',
    tag: 'NC',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200',
    desc: 'Stop guessing. Our certified dieticians create sustainable, macro-calculated nutrition plans that fuel peak performance — without sacrificing the foods you love.',
    features: [
      'Metabolic rate & body composition analysis',
      'Custom weekly meal planning',
      'Supplementation protocol & timing',
      'Bi-weekly check-ins & plan adjustments',
      'Restaurant & travel nutrition guidance',
    ],
    price: 'From $200 / month',
  },
  {
    num: '03',
    title: 'Recovery Suite',
    shortTitle: 'Recovery',
    tag: 'RS',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200',
    desc: 'Train hard, recover harder. Access our state-of-the-art recovery suite to minimize downtime, prevent injury, and sustain elite output across every training block.',
    features: [
      'Infrared sauna sessions (up to 90 min)',
      'Cold plunge therapy & contrast protocols',
      'Normatec compression boot recovery',
      'Guided breathwork & meditation',
      'Sleep coaching & HRV monitoring',
    ],
    price: 'Included with Premium',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const svc = services[activeService];

  return (
    <>
      {/* ── Hero ── */}
      <section className="services-hero">
        <div className="services-hero-bg" />
        <div className="services-hero-content">
          <div className="reveal">
            <span className="section-label">What We Offer</span>
            <h1 className="services-hero-title">BEYOND THE<br/><em>GYM FLOOR.</em></h1>
            <p className="services-hero-sub">Complete athletic optimization. Every dimension covered.</p>
          </div>
        </div>
      </section>

      {/* ── Main Services ── */}
      <section className="page-section services-main">
        {/* Tab nav */}
        <div className="services-nav reveal">
          {services.map((s, i) => (
            <button
              key={i}
              className={`svc-tab ${activeService === i ? 'active' : ''}`}
              onClick={() => setActiveService(i)}
              data-hover="true"
            >
              <span className="svc-tab-num">{s.num}</span>
              <span className="svc-tab-label">{s.shortTitle}</span>
              {activeService === i && <span className="svc-tab-indicator" />}
            </button>
          ))}
        </div>

        {/* Active service detail */}
        <div className="svc-detail" key={activeService}>
          <div className="svc-img-col">
            <div className="svc-img" style={{ backgroundImage: `url(${svc.img})` }}>
              <div className="svc-img-overlay" />
              <span className="svc-big-tag">{svc.tag}</span>
            </div>
            <div className="svc-price-badge">
              <span className="svc-price-label">Starting at</span>
              <span className="svc-price-value">{svc.price}</span>
            </div>
          </div>

          <div className="svc-content-col">
            <span className="svc-num-display">{svc.num}</span>
            <h2 className="svc-title">{svc.title}</h2>
            <p className="svc-desc">{svc.desc}</p>

            <div className="svc-divider" />

            <ul className="svc-features">
              {svc.features.map((f, fi) => (
                <li key={fi} className="svc-feature">
                  <span className="svc-feature-mark">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="svc-cta">
              <Link href="/contact" className="btn-primary" style={{ padding: '16px 40px', fontSize: '0.82rem', textDecoration: 'none', display: 'inline-block' }}>
                Enquire Now
              </Link>
              <a href="/contact" className="svc-learn-link">
                Talk to a coach <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── All Services Overview Strip ── */}
      <section className="overview-strip">
        {services.map((s, i) => (
          <div
            key={i}
            className={`overview-item ${activeService === i ? 'overview-item--active' : ''}`}
            onClick={() => setActiveService(i)}
            data-hover="true"
          >
            <span className="overview-num">{s.num}</span>
            <div>
              <h3>{s.shortTitle}</h3>
              <span className="overview-price">{s.price}</span>
            </div>
            <span className="overview-arrow">→</span>
          </div>
        ))}
      </section>

      {/* ── Why Choose Us ── */}
      <section className="page-section why-section">
        <div className="section-header reveal">
          <span className="section-label">Why Premier</span>
          <h2>THE<br/>DIFFERENCE</h2>
          <p>Every service is built on three non-negotiable pillars.</p>
        </div>

        <div className="why-grid">
          {[
            { icon: '◈', title: 'Data-Led', desc: 'Every programme starts with a full biometric assessment. No assumptions, no guesswork — only evidence-based decisions.' },
            { icon: '◉', title: 'Personalised', desc: 'Cookie-cutter plans don\'t work. Every protocol is built around your body, schedule, and specific goals.' },
            { icon: '◊', title: 'Accountable', desc: 'Weekly check-ins, progress reporting, and a coach who picks up the phone. Your goals become our KPIs.' },
          ].map((w, i) => (
            <div key={i} className={`why-card reveal reveal-delay-${i + 1}`}>
              <span className="why-icon">{w.icon}</span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .services-hero {
          position: relative;
          min-height: 65vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background: var(--bg-start);
        }
        .services-hero-bg {
          position: absolute; inset: 0;
          background: url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000') center/cover;
          opacity: 0.1;
        }
        .services-hero-bg::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to top, var(--bg-start) 40%, transparent);
        }
        .services-hero-content {
          position: relative; z-index: 2;
          padding: 160px 6% 80px;
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
        }
        .services-hero-title {
          font-family: var(--font-display);
          font-size: clamp(5rem, 10vw, 11rem);
          font-weight: 400;
          line-height: 0.88;
          letter-spacing: 2px;
          color: var(--text-white);
          margin-bottom: 20px;
        }
        .services-hero-title em {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--primary);
        }
        .services-hero-sub {
          color: var(--text-gray);
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 0.5px;
        }

        /* Services main */
        .services-main {
          background: var(--bg-start);
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .services-nav {
          display: flex;
          gap: 2px;
          max-width: 1300px;
          margin: 0 auto 60px;
        }
        .svc-tab {
          flex: 1;
          padding: 24px 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .svc-tab.active {
          background: rgba(200,245,66,0.05);
          border-color: rgba(200,245,66,0.2);
        }
        .svc-tab:hover:not(.active) {
          background: rgba(255,255,255,0.04);
        }
        .svc-tab-num {
          font-family: var(--font-display);
          font-size: 0.9rem;
          letter-spacing: 2px;
          color: var(--primary);
          opacity: 0.6;
        }
        .svc-tab-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-gray);
          transition: color 0.3s;
        }
        .svc-tab.active .svc-tab-label { color: var(--text-white); }
        .svc-tab-indicator {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--primary);
        }

        /* Detail layout */
        .svc-detail {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          max-width: 1300px;
          margin: 0 auto;
          animation: fadeUp 0.5s ease forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .svc-img-col {
          position: relative;
        }
        .svc-img {
          height: 520px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }
        .svc-img::before {
          content: '';
          position: absolute; inset: -20px;
          border: 1px solid rgba(200,245,66,0.12);
          transform: translate(20px, 20px);
          pointer-events: none;
          z-index: 0;
        }
        .svc-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(5,5,6,0.3), transparent);
          z-index: 1;
        }
        .svc-big-tag {
          position: absolute;
          bottom: 24px; left: 24px;
          font-family: var(--font-display);
          font-size: 5rem;
          letter-spacing: 8px;
          color: var(--primary);
          opacity: 0.15;
          z-index: 2;
          line-height: 1;
        }
        .svc-price-badge {
          position: absolute;
          bottom: -20px; right: 20px;
          background: var(--primary);
          padding: 16px 24px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .svc-price-label {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(0,0,0,0.6);
        }
        .svc-price-value {
          font-family: var(--font-display);
          font-size: 1rem;
          letter-spacing: 1px;
          color: #000;
        }

        .svc-content-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 20px;
        }
        .svc-num-display {
          font-family: var(--font-display);
          font-size: 5rem;
          color: rgba(255,255,255,0.04);
          line-height: 1;
          display: block;
          margin-bottom: -16px;
          letter-spacing: 4px;
        }
        .svc-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 400;
          letter-spacing: 3px;
          color: var(--text-white);
          margin-bottom: 20px;
          line-height: 1;
        }
        .svc-desc {
          color: var(--text-gray);
          font-size: 0.95rem;
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 32px;
        }
        .svc-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin-bottom: 32px;
        }
        .svc-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 44px;
        }
        .svc-feature {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          font-size: 0.9rem;
          color: var(--text-gray);
          font-weight: 300;
          line-height: 1.5;
        }
        .svc-feature-mark {
          color: var(--primary);
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .svc-cta {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .svc-learn-link {
          font-family: var(--font-body);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-gray);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.3s;
        }
        .svc-learn-link:hover { color: var(--text-white); }

        /* Overview strip */
        .overview-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .overview-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 32px 40px;
          background: var(--bg-start);
          cursor: none;
          transition: all 0.3s ease;
          position: relative;
        }
        .overview-item::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--primary);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .overview-item:hover::before,
        .overview-item--active::before { transform: scaleX(1); }
        .overview-item:hover,
        .overview-item--active {
          background: rgba(200,245,66,0.03);
        }
        .overview-num {
          font-family: var(--font-display);
          font-size: 2rem;
          letter-spacing: 2px;
          color: rgba(200,245,66,0.3);
          flex-shrink: 0;
        }
        .overview-item--active .overview-num { color: var(--primary); }
        .overview-item h3 {
          font-family: var(--font-display);
          font-size: 1.2rem;
          letter-spacing: 2px;
          font-weight: 400;
          color: var(--text-white);
          margin-bottom: 4px;
        }
        .overview-price {
          font-size: 0.72rem;
          color: var(--text-gray);
          font-weight: 300;
          letter-spacing: 0.5px;
        }
        .overview-arrow {
          margin-left: auto;
          font-size: 1.2rem;
          color: var(--text-gray);
          transition: transform 0.3s, color 0.3s;
        }
        .overview-item:hover .overview-arrow { transform: translateX(4px); color: var(--primary); }

        /* Why grid */
        .why-section {
          background: var(--secondary);
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          max-width: 1300px;
          margin: 0 auto;
        }
        .why-card {
          padding: 52px 44px;
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.4s ease;
          position: relative;
        }
        .why-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 2px;
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }
        .why-card:hover::after { transform: scaleX(1); }
        .why-card:hover {
          background: rgba(200,245,66,0.025);
          transform: translateY(-6px);
        }
        .why-icon {
          display: block;
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 20px;
          opacity: 0.6;
          line-height: 1;
        }
        .why-card h3 {
          font-family: var(--font-display);
          font-size: 1.8rem;
          letter-spacing: 3px;
          color: var(--text-white);
          margin-bottom: 16px;
          font-weight: 400;
        }
        .why-card p {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.7;
          font-weight: 300;
        }

        @media (max-width: 1024px) {
          .svc-detail { grid-template-columns: 1fr; gap: 60px; }
          .svc-img { height: 380px; }
          .svc-price-badge { bottom: 20px; right: 20px; }
          .why-grid { grid-template-columns: 1fr; }
          .overview-strip { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .services-nav { flex-direction: column; }
        }
      `}</style>
    </>
  );
}