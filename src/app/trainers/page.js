'use client';
export default function Trainers() {
  const trainers = [
    {
      name: "Alex Sterling",
      specialty: "Head Coach & Strength Expert",
      img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800",
      bio: "With over 10 years of competitive powerlifting experience, Alex specializes in biomechanics and programming for maximum strength gains."
    },
    {
      name: "Sarah Jenkins",
      specialty: "HIIT & Conditioning Specialist",
      img: "https://images.unsplash.com/photo-1611564494260-5f21ea5faa64?q=80&w=800",
      bio: "Former collegiate track athlete. Sarah's high-energy sessions are designed to push cardiovascular limits and torch body fat."
    },
    {
      name: "Mike Chen",
      specialty: "Mobility & Yoga",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800",
      bio: "Mike combines traditional yoga practices with modern mobility drills to help athletes prevent injury and move effortlessly."
    },
    {
      name: "Emma Davis",
      specialty: "Nutrition & Body Recomposition",
      img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800",
      bio: "Certified dietician and personal trainer. Emma ensures that your work in the kitchen matches your effort on the gym floor."
    }
  ];

  return (
    <section className="page-section" style={{ paddingTop: '150px' }}>
      <div className="section-header">
        <h2>Meet Our Elite Trainers</h2>
        <p>Industry veterans dedicated to your success.</p>
      </div>

      <div className="trainers-grid">
        {trainers.map((t, idx) => (
          <div key={idx} className="trainer-card">
            <div className="trainer-img" style={{ backgroundImage: `url(${t.img})` }}></div>
            <div className="trainer-info">
              <h3>{t.name}</h3>
              <span className="specialty">{t.specialty}</span>
              <p>{t.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .trainers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .trainer-card {
          background: rgba(255,255,255,0.02);
          border-radius: 12px;
          overflow: hidden;
          transition: transform var(--transition-smooth);
        }
        .trainer-card:hover {
          transform: translateY(-10px);
        }
        .trainer-img {
          height: 350px;
          background-size: cover;
          background-position: center top;
        }
        .trainer-info {
          padding: 30px;
        }
        .trainer-info h3 {
          font-size: 1.5rem;
          color: var(--text-white);
          margin-bottom: 5px;
        }
        .specialty {
          display: block;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }
        .trainer-info p {
          color: var(--text-gray);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}

