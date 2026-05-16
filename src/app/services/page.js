'use client';
export default function Services() {
  return (
    <>
      <section className="page-section" style={{ paddingTop: '150px' }}>
        <div className="section-header">
          <h2>Premium Services</h2>
          <p>Beyond the gym floor: complete athletic optimization.</p>
        </div>

        <div className="services-list">
          <div className="service-row">
            <div className="service-content">
              <h3>1-on-1 Personal Training</h3>
              <p>Bespoke training programs tailored precisely to your biomechanics, goals, and lifestyle. Your dedicated coach will track every metric to guarantee results.</p>
              <ul className="service-features">
                <li>Comprehensive movement assessment</li>
                <li>Customized macro-cycle programming</li>
                <li>Direct coach communication</li>
              </ul>
            </div>
            <div className="service-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800)' }}></div>
          </div>

          <div className="service-row reverse">
            <div className="service-content">
              <h3>Nutritional Coaching</h3>
              <p>Stop guessing. Our certified dieticians create sustainable, macro-calculated nutrition plans that fuel performance without sacrificing taste.</p>
              <ul className="service-features">
                <li>Custom meal planning</li>
                <li>Supplementation protocol</li>
                <li>Bi-weekly check-ins and adjustments</li>
              </ul>
            </div>
            <div className="service-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800)' }}></div>
          </div>

          <div className="service-row">
            <div className="service-content">
              <h3>Recovery Suite</h3>
              <p>Train hard, recover harder. Access our state-of-the-art recovery tools to minimize downtime and prevent injury.</p>
              <ul className="service-features">
                <li>Infrared saunas</li>
                <li>Cold plunge therapy</li>
                <li>Normatec compression boots</li>
              </ul>
            </div>
            <div className="service-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800)' }}></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-list {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 80px;
        }
        .service-row {
          display: flex;
          gap: 50px;
          align-items: center;
        }
        .service-row.reverse {
          flex-direction: row-reverse;
        }
        .service-content {
          flex: 1;
        }
        .service-content h3 {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 20px;
        }
        .service-content p {
          font-size: 1.1rem;
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .service-features {
          list-style: none;
        }
        .service-features li {
          color: var(--text-white);
          font-size: 1.1rem;
          margin-bottom: 10px;
          position: relative;
          padding-left: 25px;
        }
        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }
        .service-image {
          flex: 1;
          height: 400px;
          background-size: cover;
          background-position: center;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }
        @media (max-width: 768px) {
          .service-row, .service-row.reverse { flex-direction: column; }
          .service-image { width: 100%; }
        }
      `}</style>
    </>
  );
}

