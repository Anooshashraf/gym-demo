'use client';
export default function Classes() {
  return (
    <>
      <section className="page-section" style={{ paddingTop: '150px' }}>
        <div className="section-header">
          <h2>Class Schedule & Shifts</h2>
          <p>Find the perfect time to elevate your training.</p>
        </div>
        
        <div className="schedule-container">
          <div className="shift-block">
            <h3>Morning Shift (6:00 AM - 12:00 PM)</h3>
            <ul className="class-list">
              <li><span className="time">06:00 AM</span> <span className="name">HIIT Blast</span> <span className="trainer">with Sarah</span></li>
              <li><span className="time">07:30 AM</span> <span className="name">Power Yoga</span> <span className="trainer">with Mike</span></li>
              <li><span className="time">09:00 AM</span> <span className="name">Strength Core</span> <span className="trainer">with David</span></li>
              <li><span className="time">10:30 AM</span> <span className="name">Cardio Kickboxing</span> <span className="trainer">with Emma</span></li>
            </ul>
          </div>

          <div className="shift-block">
            <h3>Afternoon Shift (12:00 PM - 5:00 PM)</h3>
            <ul className="class-list">
              <li><span className="time">12:15 PM</span> <span className="name">Lunch Express (45m)</span> <span className="trainer">with Sarah</span></li>
              <li><span className="time">02:00 PM</span> <span className="name">Mobility Flow</span> <span className="trainer">with Mike</span></li>
              <li><span className="time">04:00 PM</span> <span className="name">Barbell Basics</span> <span className="trainer">with David</span></li>
            </ul>
          </div>

          <div className="shift-block">
            <h3>Evening Shift (5:00 PM - 10:00 PM)</h3>
            <ul className="class-list">
              <li><span className="time">05:30 PM</span> <span className="name">CrossFit WOD</span> <span className="trainer">with Alex</span></li>
              <li><span className="time">06:45 PM</span> <span className="name">Spin Intensity</span> <span className="trainer">with Emma</span></li>
              <li><span className="time">08:00 PM</span> <span className="name">Heavy Lifting</span> <span className="trainer">with Alex</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="section-header">
          <h2>Class Types</h2>
          <p>Diverse methodologies for complete athletic development.</p>
        </div>
        <div className="cards-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="card">
            <div className="card-content">
              <h3>Strength & Conditioning</h3>
              <p>Focus on building raw power and muscular endurance using free weights, compound movements, and structured programming.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>High-Intensity Interval Training (HIIT)</h3>
              <p>Maximize calorie burn and cardiovascular capacity with short bursts of intense effort followed by brief recovery periods.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Mobility & Recovery</h3>
              <p>Enhance joint health, flexibility, and longevity through active stretching, yoga flows, and myofascial release techniques.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .schedule-container {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .shift-block h3 {
          font-size: 1.8rem;
          color: var(--primary);
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 10px;
        }
        .class-list {
          list-style: none;
        }
        .class-list li {
          display: flex;
          padding: 15px 0;
          border-bottom: 1px dashed rgba(255,255,255,0.05);
          font-size: 1.1rem;
        }
        .time {
          width: 120px;
          font-weight: 800;
          color: var(--accent);
        }
        .name {
          flex: 1;
          font-weight: 600;
        }
        .trainer {
          color: var(--text-gray);
          font-style: italic;
        }
        @media (max-width: 768px) {
          .class-list li { flex-direction: column; gap: 5px; }
          .time { width: auto; }
        }
      `}</style>
    </>
  );
}

