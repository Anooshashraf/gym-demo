// 'use client';

// export default function About() {
//   return (
//     <>
//       <section className="page-section" style={{ paddingTop: '150px' }}>
//         <div className="section-header">
//           <h2>Our Story</h2>
//           <p>The journey from a single garage to an elite fitness sanctuary.</p>
//         </div>
//         <div className="story-wrapper">
//           <div className="text-content">
//             <p>Founded in 2018, Premier Fitness was born out of a desire to create a training environment that combines the raw energy of old-school bodybuilding with the sleek, data-driven approach of modern sports science.</p>
//             <p>What started as a small community of dedicated athletes has evolved into the city's premier destination for those who demand more from their workouts. With three state-of-the-art facilities across the metropolitan area and a community of over 15,000 members, we've established ourselves as the gold standard in boutique fitness.</p>
//             <p>Our founder, Alex Sterling, spent over 20 years competing at the highest levels of powerlifting before realizing his true passion: building a gym that would serve as a sanctuary for serious athletes. Today, Premier Fitness stands as a testament to his vision and the dedication of our world-class team.</p>
//           </div>
//           <div className="image-content" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000)' }}></div>
//         </div>
//       </section>

//       <section className="page-section" style={{ backgroundColor: 'var(--secondary)' }}>
//         <div className="section-header">
//           <h2>Our Mission</h2>
//           <p>Elevating human potential through uncompromising quality.</p>
//         </div>
//         <div className="about-mission-grid">
//           <div className="about-mission-card">
//             <div className="card-inner">
//               <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>⚡</div>
//               <h3>Innovation</h3>
//               <p>We continuously invest in the latest equipment and training methodologies, from AI-powered body scanners to biomechanics analysis labs.</p>
//             </div>
//           </div>
//           <div className="about-mission-card">
//             <div className="card-inner">
//               <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🤝</div>
//               <h3>Community</h3>
//               <p>Fostering an environment where everyone pushes each other to be better. We're not just a gym—we're a brotherhood of champions.</p>
//             </div>
//           </div>
//           <div className="about-mission-card">
//             <div className="card-inner">
//               <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏆</div>
//               <h3>Excellence</h3>
//               <p>Zero compromises on cleanliness, equipment maintenance, and staff expertise. Your experience is our obsession.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="page-section">
//         <div className="section-header">
//           <h2>By The Numbers</h2>
//           <p>Metrics that prove our impact.</p>
//         </div>
//         <div className="about-stats-grid">
//           <div className="about-stat-item">
//             <h2>15,000+</h2>
//             <p>Active Members</p>
//           </div>
//           <div className="about-stat-item">
//             <h2>250+</h2>
//             <p>Expert Trainers</p>
//           </div>
//           <div className="about-stat-item">
//             <h2>98%</h2>
//             <p>Member Retention</p>
//           </div>
//           <div className="about-stat-item">
//             <h2>24/7</h2>
//             <p>Facility Access</p>
//           </div>
//         </div>
//       </section>

//       <section className="page-section" style={{ backgroundColor: 'var(--secondary)' }}>
//         <div className="section-header">
//           <h2>Our Values</h2>
//           <p>What guides every decision we make.</p>
//         </div>
//         <div className="about-values-grid">
//           <div className="about-value-card">
//             <h3>Integrity</h3>
//             <p>Every rep counts. We believe in honest programming, no gimmicks, no shortcuts. Just hard work and proven results.</p>
//           </div>
//           <div className="about-value-card">
//             <h3>Accessibility</h3>
//             <p>Elite fitness shouldn't be reserved for the elite. We make world-class training accessible to anyone willing to put in the work.</p>
//           </div>
//           <div className="about-value-card">
//             <h3>Education</h3>
//             <p>We empower our members with knowledge. Understanding the science behind your training is as important as the training itself.</p>
//           </div>
//           <div className="about-value-card">
//             <h3>Growth</h3>
//             <p>Whether it's your first day or your 100th, we're committed to helping you reach levels you didn't think possible.</p>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         .story-wrapper {
//           display: flex;
//           gap: 50px;
//           max-width: 1200px;
//           margin: 0 auto;
//           align-items: center;
//         }
//         .text-content {
//           flex: 1;
//           font-size: 1rem;
//           line-height: 1.8;
//           color: var(--text-gray);
//         }
//         .text-content p {
//           margin-bottom: 20px;
//         }
//         .image-content {
//           flex: 1;
//           height: 400px;
//           background-size: cover;
//           background-position: center;
//           border-radius: 12px;
//         }
//         .about-mission-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 30px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .about-mission-card {
//           padding: 40px;
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(255,255,255,0.05);
//           border-radius: 12px;
//           text-align: center;
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//           min-height: 300px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .about-mission-card::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: center;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           z-index: 1;
//           filter: brightness(0.4) blur(2px);
//           pointer-events: none;
//         }
//         .about-mission-card:hover {
//           border-color: rgba(0, 229, 255, 0.2);
//           transform: translateY(-5px);
//         }
//         .about-mission-card:hover::before {
//           opacity: 1;
//         }
//         .card-inner {
//           position: relative;
//           z-index: 2;
//         }
//         .card-inner h3 {
//           color: var(--primary);
//           font-size: 1.3rem;
//           margin-bottom: 15px;
//           font-weight: 700;
//         }
//         .card-inner p {
//           color: var(--text-gray);
//           font-size: 0.95rem;
//           line-height: 1.6;
//         }
//         .about-mission-card:nth-child(1)::before {
//           background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600');
//         }
//         .about-mission-card:nth-child(2)::before {
//           background-image: url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600');
//         }
//         .about-mission-card:nth-child(3)::before {
//           background-image: url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600');
//         }
//         .about-stats-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 40px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .about-stat-item {
//           text-align: center;
//           padding: 40px 30px;
//           background: rgba(0, 229, 255, 0.03);
//           border: 1px solid rgba(0, 229, 255, 0.15);
//           border-radius: 12px;
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//         }
//         .about-stat-item::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 2px;
//           background: linear-gradient(to right, transparent, var(--primary), transparent);
//         }
//         .about-stat-item:hover {
//           background: rgba(0, 229, 255, 0.08);
//           border-color: rgba(0, 229, 255, 0.3);
//           transform: translateY(-5px);
//         }
//         .about-stat-item h2 {
//           font-size: 2.5rem;
//           color: var(--primary);
//           margin-bottom: 10px;
//           font-weight: 900;
//         }
//         .about-stat-item p {
//           font-size: 0.95rem;
//           color: var(--text-gray);
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           font-weight: 600;
//         }
//         .about-values-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 40px;
//           max-width: 1000px;
//           margin: 0 auto;
//         }
//         .about-value-card {
//           padding: 40px;
//           background: rgba(0, 229, 255, 0.05);
//           border: 1px solid rgba(0, 229, 255, 0.15);
//           border-radius: 12px;
//           transition: all 0.3s ease;
//         }
//         .about-value-card:hover {
//           background: rgba(0, 229, 255, 0.1);
//           border-color: rgba(0, 229, 255, 0.3);
//           transform: translateY(-5px);
//         }
//         .about-value-card h3 {
//           color: var(--primary);
//           font-size: 1.4rem;
//           margin-bottom: 15px;
//           font-weight: 700;
//         }
//         .about-value-card p {
//           color: var(--text-gray);
//           font-size: 0.95rem;
//           line-height: 1.7;
//         }
//         @media (max-width: 768px) {
//           .story-wrapper { flex-direction: column; }
//           .about-mission-grid { grid-template-columns: 1fr; }
//           .about-values-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>
//     </>
//   );
// }








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
