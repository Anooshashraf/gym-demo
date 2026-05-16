'use client';
export default function About() {
  return (
    <>
      <section className="page-section" style={{ paddingTop: '150px' }}>
        <div className="section-header">
          <h2>Our Story</h2>
          <p>The journey from a single garage to an elite fitness sanctuary.</p>
        </div>
        <div className="content-wrapper">
          <div className="text-content">
            <p>Founded in 2018, Premier Fitness was born out of a desire to create a training environment that combines the raw energy of old-school bodybuilding with the sleek, data-driven approach of modern sports science.</p>
            <p>What started as a small community of dedicated athletes has evolved into the city's premier destination for those who demand more from their workouts.</p>
          </div>
          <div className="image-content" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000)' }}></div>
        </div>
      </section>

      <section className="page-section" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="section-header">
          <h2>Our Mission</h2>
          <p>Elevating human potential through uncompromising quality.</p>
        </div>
        <div className="mission-grid">
          <div className="mission-card">
            <h3>Innovation</h3>
            <p>We continuously invest in the latest equipment and training methodologies.</p>
          </div>
          <div className="mission-card">
            <h3>Community</h3>
            <p>Fostering an environment where everyone pushes each other to be better.</p>
          </div>
          <div className="mission-card">
            <h3>Excellence</h3>
            <p>Zero compromises on cleanliness, equipment maintenance, and staff expertise.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .content-wrapper {
          display: flex;
          gap: 50px;
          max-width: 1200px;
          margin: 0 auto;
          align-items: center;
        }
        .text-content {
          flex: 1;
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-gray);
        }
        .text-content p {
          margin-bottom: 20px;
        }
        .image-content {
          flex: 1;
          height: 400px;
          background-size: cover;
          background-position: center;
          border-radius: 12px;
        }
        .mission-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .mission-card {
          padding: 40px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          text-align: center;
        }
        .mission-card h3 {
          color: var(--primary);
          font-size: 1.5rem;
          margin-bottom: 15px;
        }
        .mission-card p {
          color: var(--text-gray);
        }
        @media (max-width: 768px) {
          .content-wrapper { flex-direction: column; }
          .mission-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

