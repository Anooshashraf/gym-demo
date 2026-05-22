

'use client';
import { useState } from 'react';

const trainers = [
  {
    name: 'Alex Sterling',
    specialty: 'Head Coach & Strength',
    tag: 'SC',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=900',
    bio: 'With over 10 years of competitive powerlifting, Alex specializes in biomechanics and programming for maximum strength gains. Founded Premier Fitness with a singular vision.',
    certifications: ['NASM-CPT', 'ISSA-SSC', 'ISSN-SNS'],
    stats: [['200+', 'Athletes Coached'], ['10+', 'Years Experience'], ['420lb', 'Personal PR']],
    highlights: 'Authored "The Science of Strength" · Consulted for Olympic programs',
  },
  {
    name: 'Sarah Jenkins',
    specialty: 'HIIT & Conditioning',
    tag: 'HI',
    img: 'https://images.unsplash.com/photo-1611564494260-5f21ea5faa64?q=80&w=900',
    bio: 'Former collegiate track athlete. Sarah\'s high-energy sessions are engineered to push cardiovascular limits and maximize metabolic output in minimum time.',
    certifications: ['NASM-CPT', 'ACE-GFI', 'ISSN-SNS'],
    stats: [['98%', 'Satisfaction Rate'], ['3', 'NCAA Programs'], ['Sub-3m', '800m PR']],
    highlights: 'Designed conditioning for 3 NCAA teams · 98% member satisfaction',
  },
  {
    name: 'Mike Chen',
    specialty: 'Mobility & Yoga',
    tag: 'MR',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=900',
    bio: 'Mike fuses traditional yoga with modern mobility science to help athletes move effortlessly and prevent injury. 12 years of practice, distilled into every session.',
    certifications: ['E-RYT 500', 'NASM-CPT', 'FRC-L1'],
    stats: [['12', 'Years Practice'], ['40%', 'Injury Reduction'], ['500+', 'Students']],
    highlights: 'Reduced member injuries by 40% · Specialist in athletic mobility',
  },
  {
    name: 'Emma Davis',
    specialty: 'Nutrition & Body Recomp',
    tag: 'ND',
    img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=900',
    bio: 'Certified dietician and trainer with a PhD in Sports Nutrition. Emma ensures your kitchen performance matches your gym floor output.',
    certifications: ['RDN-LD', 'NASM-CPT', 'CISSN'],
    stats: [['500+', 'Transformations'], ['15lb', 'Avg Muscle Gain'], ['8%', 'Avg Fat Loss']],
    highlights: 'PhD in Sports Nutrition · 500+ documented transformations',
  },
  {
    name: 'David Martinez',
    specialty: 'Olympic Lifting Coach',
    tag: 'OL',
    img: 'https://images.unsplash.com/photo-1552941111-3b3d8e7b0a3d?q=80&w=900',
    bio: 'Competitive weightlifter with international podium finishes. David\'s technical precision sessions build explosive power that transfers across every athletic domain.',
    certifications: ['IWCF-L2', 'USAW-L2', 'NASM-CPT'],
    stats: [['15', 'Years Competing'], ['50+', 'Competitive Lifters'], ['Intl', 'Podium Finishes']],
    highlights: 'International competitor · Trained 50+ competitive lifters',
  },
  {
    name: 'Lisa Rodriguez',
    specialty: 'Recovery & Sports Psychology',
    tag: 'RP',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=900',
    bio: 'Expert in recovery protocols and mental performance. Lisa helps athletes break through plateaus with evidence-based psychological techniques and sleep optimization.',
    certifications: ['M.A. Sports Psychology', 'NASM-CPT', 'Sleep Coach'],
    stats: [['95%', 'Goal Achievement'], ['Pro', 'Athletes Worked With'], ['∞', 'Potential Unlocked']],
    highlights: 'M.A. in Sports Psychology · 95% client goal achievement rate',
  },
];

export default function Trainers() {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* ── Hero ── */}
      <section className="trainers-hero">
        <div className="trainers-hero-bg" />
        <div className="trainers-hero-content">
          <div className="reveal">
            <span className="section-label">Our Team</span>
            <h1 className="trainers-hero-title">ELITE<br/><em>TRAINERS.</em></h1>
            <p className="trainers-hero-sub">
              Industry veterans. Zero compromises.<br/>Six coaches. One obsession: your results.
            </p>
          </div>
        </div>
      </section>

      {/* ── Trainer Grid ── */}
      <section className="page-section trainers-main">
        <div className="trainers-grid-wrap">
          {trainers.map((t, i) => (
            <div
              key={i}
              className={`trainer-card reveal reveal-delay-${(i % 3) + 1} ${active === i ? 'expanded' : ''}`}
              onClick={() => setActive(active === i ? null : i)}
              data-hover="true"
            >
              {/* Image */}
              <div className="trainer-card-img" style={{ backgroundImage: `url(${t.img})` }}>
                <div className="trainer-card-overlay" />
                <span className="trainer-card-tag">{t.tag}</span>
                <div className="trainer-card-name-overlay">
                  <span className="trainer-card-role">{t.specialty}</span>
                  <h2>{t.name}</h2>
                </div>
              </div>

              {/* Info (always visible) */}
              <div className="trainer-card-base">
                <div className="trainer-card-certs">
                  {t.certifications.map((c, ci) => (
                    <span key={ci} className="cert">{c}</span>
                  ))}
                </div>
                <p className="trainer-card-bio">{t.bio}</p>
              </div>

              {/* Stats (expanded) */}
              <div className={`trainer-card-expanded ${active === i ? 'open' : ''}`}>
                <div className="trainer-stats">
                  {t.stats.map(([num, label], si) => (
                    <div key={si} className="t-stat">
                      <span className="t-stat-num">{num}</span>
                      <span className="t-stat-label">{label}</span>
                    </div>
                  ))}
                </div>
                <p className="trainer-highlights">✦ {t.highlights}</p>
                <button className="btn-primary" style={{ width: '100%', padding: '14px', fontSize: '0.78rem', marginTop: '8px' }}>
                  Book a Session
                </button>
              </div>

              {/* Toggle hint */}
              <div className="trainer-toggle">
                <span>{active === i ? 'Less' : 'More'}</span>
                <span className="toggle-arrow" style={{ transform: active === i ? 'rotate(180deg)' : 'none' }}>↓</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .trainers-hero {
          position: relative;
          min-height: 65vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background: var(--bg-start);
        }
        .trainers-hero-bg {
          position: absolute; inset: 0;
          background:
            url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000') center 30%/cover;
          opacity: 0.12;
        }
        .trainers-hero-bg::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to top, var(--bg-start) 40%, transparent);
        }
        .trainers-hero-content {
          position: relative; z-index: 2;
          padding: 160px 6% 80px;
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
        }
        .trainers-hero-title {
          font-family: var(--font-display);
          font-size: clamp(5.5rem, 11vw, 12rem);
          font-weight: 400;
          line-height: 0.88;
          letter-spacing: 2px;
          color: var(--text-white);
          margin-bottom: 20px;
        }
        .trainers-hero-title em {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--primary);
        }
        .trainers-hero-sub {
          color: var(--text-gray);
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.7;
          letter-spacing: 0.5px;
        }

        .trainers-main {
          background: var(--bg-start);
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .trainers-grid-wrap {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .trainer-card {
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.05);
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: none;
          position: relative;
        }
        .trainer-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
          z-index: 1;
        }
        .trainer-card:hover::before,
        .trainer-card.expanded::before { transform: scaleX(1); }
        .trainer-card:hover,
        .trainer-card.expanded {
          border-color: rgba(200,245,66,0.15);
          background: rgba(200,245,66,0.02);
        }

        .trainer-card-img {
          height: 320px;
          background-size: cover;
          background-position: center top;
          position: relative;
          overflow: hidden;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .trainer-card:hover .trainer-card-img { transform: scale(1.04); }
        .trainer-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(5,5,6,0.92));
        }
        .trainer-card-tag {
          position: absolute;
          top: 18px; right: 18px;
          font-family: var(--font-display);
          font-size: 1.6rem;
          letter-spacing: 3px;
          color: var(--primary);
          opacity: 0.5;
        }
        .trainer-card-name-overlay {
          position: absolute;
          bottom: 24px; left: 28px; right: 28px;
        }
        .trainer-card-role {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 6px;
        }
        .trainer-card-name-overlay h2 {
          font-family: var(--font-display);
          font-size: 1.8rem;
          letter-spacing: 2px;
          font-weight: 400;
          color: var(--text-white);
          line-height: 1;
        }

        .trainer-card-base {
          padding: 28px 28px 0;
        }
        .trainer-card-certs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .cert {
          background: rgba(200,245,66,0.07);
          border: 1px solid rgba(200,245,66,0.2);
          color: var(--primary);
          padding: 4px 10px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .trainer-card-bio {
          color: var(--text-gray);
          font-size: 0.88rem;
          line-height: 1.7;
          font-weight: 300;
          padding-bottom: 20px;
        }

        .trainer-card-expanded {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
          opacity: 0;
          padding: 0 28px;
        }
        .trainer-card-expanded.open {
          max-height: 300px;
          opacity: 1;
          padding-bottom: 20px;
        }
        .trainer-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.06);
          margin-bottom: 20px;
        }
        .t-stat {
          background: rgba(5,5,6,1);
          padding: 16px 12px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .t-stat-num {
          font-family: var(--font-display);
          font-size: 1.5rem;
          letter-spacing: 1px;
          color: var(--primary);
          line-height: 1;
        }
        .t-stat-label {
          font-size: 0.6rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-gray);
          font-weight: 600;
        }
        .trainer-highlights {
          color: var(--text-gray);
          font-size: 0.8rem;
          font-style: italic;
          line-height: 1.6;
          margin-bottom: 16px;
          font-weight: 300;
        }

        .trainer-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 28px;
          border-top: 1px solid rgba(255,255,255,0.05);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-gray);
          transition: color 0.3s;
        }
        .trainer-card:hover .trainer-toggle { color: var(--primary); }
        .toggle-arrow {
          display: inline-block;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          font-size: 0.9rem;
        }

        @media (max-width: 1100px) {
          .trainers-grid-wrap { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 700px) {
          .trainers-grid-wrap { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}