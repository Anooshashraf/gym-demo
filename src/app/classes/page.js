// 'use client';
// export default function Classes() {
//   return (
//     <>
//       <div className="classes-hero">
//         <div className="overlay"></div>
//         <section className="page-section" style={{ paddingTop: '150px', position: 'relative', zIndex: 2 }}>
//           <div className="section-header">
//             <h2>Class Schedule & Shifts</h2>
//             <p>Find the perfect time to elevate your training.</p>
//           </div>
        
//         <div className="schedule-container">
//           <div className="shift-block">
//             <h3>Morning Shift (6:00 AM - 12:00 PM)</h3>
//             <ul className="class-list">
//               <li><span className="time">06:00 AM</span> <span className="name">HIIT Blast</span> <span className="trainer">with Sarah</span></li>
//               <li><span className="time">07:30 AM</span> <span className="name">Power Yoga</span> <span className="trainer">with Mike</span></li>
//               <li><span className="time">09:00 AM</span> <span className="name">Strength Core</span> <span className="trainer">with David</span></li>
//               <li><span className="time">10:30 AM</span> <span className="name">Cardio Kickboxing</span> <span className="trainer">with Emma</span></li>
//             </ul>
//           </div>

//           <div className="shift-block">
//             <h3>Afternoon Shift (12:00 PM - 5:00 PM)</h3>
//             <ul className="class-list">
//               <li><span className="time">12:15 PM</span> <span className="name">Lunch Express (45m)</span> <span className="trainer">with Sarah</span></li>
//               <li><span className="time">02:00 PM</span> <span className="name">Mobility Flow</span> <span className="trainer">with Mike</span></li>
//               <li><span className="time">04:00 PM</span> <span className="name">Barbell Basics</span> <span className="trainer">with David</span></li>
//             </ul>
//           </div>

//           <div className="shift-block">
//             <h3>Evening Shift (5:00 PM - 10:00 PM)</h3>
//             <ul className="class-list">
//               <li><span className="time">05:30 PM</span> <span className="name">CrossFit WOD</span> <span className="trainer">with Alex</span></li>
//               <li><span className="time">06:45 PM</span> <span className="name">Spin Intensity</span> <span className="trainer">with Emma</span></li>
//               <li><span className="time">08:00 PM</span> <span className="name">Heavy Lifting</span> <span className="trainer">with Alex</span></li>
//             </ul>
//           </div>
//         </div>
//       </section>
//       </div>

//       <section className="page-section" style={{ backgroundColor: 'var(--secondary)' }}>
//         <div className="section-header">
//           <h2>Class Types</h2>
//           <p>Diverse methodologies for complete athletic development.</p>
//         </div>
//         <div className="cards-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div className="card">
//             <div className="card-content">
//               <h3>Strength & Conditioning</h3>
//               <p>Focus on building raw power and muscular endurance using free weights, compound movements, and structured programming.</p>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-content">
//               <h3>High-Intensity Interval Training (HIIT)</h3>
//               <p>Maximize calorie burn and cardiovascular capacity with short bursts of intense effort followed by brief recovery periods.</p>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-content">
//               <h3>Mobility & Recovery</h3>
//               <p>Enhance joint health, flexibility, and longevity through active stretching, yoga flows, and myofascial release techniques.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         .classes-hero {
//           position: relative;
//           min-height: 100vh;
//           background: url('https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2000') center/cover fixed;
//         }
//         .overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(135deg, rgba(5,5,8,0.9), rgba(10,13,20,0.95));
//           z-index: 1;
//         }
//         .schedule-container {
//           max-width: 1000px;
//           margin: 0 auto;
//           display: flex;
//           flex-direction: column;
//           gap: 40px;
//         }
//         .shift-block h3 {
//           font-size: 1.8rem;
//           color: var(--primary);
//           margin-bottom: 20px;
//           border-bottom: 1px solid rgba(255,255,255,0.1);
//           padding-bottom: 10px;
//         }
//         .class-list {
//           list-style: none;
//         }
//         .class-list li {
//           display: flex;
//           padding: 15px 0;
//           border-bottom: 1px dashed rgba(255,255,255,0.05);
//           font-size: 1.1rem;
//         }
//         .time {
//           width: 120px;
//           font-weight: 800;
//           color: var(--accent);
//         }
//         .name {
//           flex: 1;
//           font-weight: 600;
//         }
//         .trainer {
//           color: var(--text-gray);
//           font-style: italic;
//         }
//         @media (max-width: 768px) {
//           .class-list li { flex-direction: column; gap: 5px; }
//           .time { width: auto; }
//         }
//       `}</style>
//     </>
//   );
// }





'use client';
import { useState } from 'react';
import Link from 'next/link';

const schedule = {
  Morning: [
    { time: '06:00 AM', name: 'HIIT Blast', trainer: 'Sarah Jenkins', intensity: 'High', duration: '60 min', spots: 8 },
    { time: '07:30 AM', name: 'Power Yoga', trainer: 'Mike Chen', intensity: 'Medium', duration: '60 min', spots: 12 },
    { time: '09:00 AM', name: 'Strength Core', trainer: 'David Martinez', intensity: 'High', duration: '75 min', spots: 5 },
    { time: '10:30 AM', name: 'Cardio Kickboxing', trainer: 'Emma Davis', intensity: 'High', duration: '60 min', spots: 10 },
  ],
  Afternoon: [
    { time: '12:15 PM', name: 'Lunch Express', trainer: 'Sarah Jenkins', intensity: 'Medium', duration: '45 min', spots: 14 },
    { time: '02:00 PM', name: 'Mobility Flow', trainer: 'Mike Chen', intensity: 'Low', duration: '60 min', spots: 16 },
    { time: '04:00 PM', name: 'Barbell Basics', trainer: 'David Martinez', intensity: 'Medium', duration: '75 min', spots: 9 },
  ],
  Evening: [
    { time: '05:30 PM', name: 'CrossFit WOD', trainer: 'Alex Sterling', intensity: 'High', duration: '60 min', spots: 3 },
    { time: '06:45 PM', name: 'Spin Intensity', trainer: 'Emma Davis', intensity: 'High', duration: '45 min', spots: 6 },
    { time: '08:00 PM', name: 'Heavy Lifting', trainer: 'Alex Sterling', intensity: 'High', duration: '90 min', spots: 11 },
  ],
};

const intensityColor = {
  High: 'var(--primary)',
  Medium: 'rgba(200,245,66,0.5)',
  Low: 'rgba(200,245,66,0.25)',
};

const classTypes = [
  {
    title: 'Strength & Conditioning',
    desc: 'Build raw power and muscular endurance using free weights, compound movements, and periodized programming designed for consistent progress.',
    tag: 'SC',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=900',
  },
  {
    title: 'High-Intensity Interval Training',
    desc: 'Maximize calorie burn and cardiovascular capacity. Short bursts of maximal effort followed by strategic recovery windows.',
    tag: 'HI',
    img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=900',
  },
  {
    title: 'Mobility & Recovery',
    desc: 'Enhance joint health, flexibility, and athletic longevity through active stretching, yoga flows, and myofascial release.',
    tag: 'MR',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=900',
  },
  {
    title: 'Olympic Lifting',
    desc: 'Master the snatch and clean & jerk under expert supervision. Technical precision meets explosive power development.',
    tag: 'OL',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900',
  },
];

export default function Classes() {
  const [activeShift, setActiveShift] = useState('Morning');

  return (
    <>
      {/* ── Hero ── */}
      <section className="classes-hero">
        <div className="classes-hero-bg" />
        <div className="classes-hero-content">
          <div className="reveal">
            <span className="section-label">Schedule & Classes</span>
            <h1 className="classes-hero-title">FIND YOUR<br/><em>SESSION.</em></h1>
            <p className="classes-hero-sub">Every shift. Every level. Every goal.</p>
          </div>
          <div className="classes-hero-meta reveal reveal-delay-2">
            <div className="classes-meta-item">
              <span className="classes-meta-num">10+</span>
              <span className="classes-meta-label">Daily Classes</span>
            </div>
            <div className="classes-meta-divider" />
            <div className="classes-meta-item">
              <span className="classes-meta-num">4</span>
              <span className="classes-meta-label">Disciplines</span>
            </div>
            <div className="classes-meta-divider" />
            <div className="classes-meta-item">
              <span className="classes-meta-num">5</span>
              <span className="classes-meta-label">Elite Coaches</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Schedule ── */}
      <section className="page-section schedule-section">
        <div className="section-header reveal">
          <span className="section-label">Daily Schedule</span>
          <h2>BOOK YOUR<br/>SPOT</h2>
          <p>Limited class sizes ensure personalised attention.</p>
        </div>

        {/* Shift tabs */}
        <div className="shift-tabs reveal">
          {Object.keys(schedule).map(shift => (
            <button
              key={shift}
              className={`shift-tab ${activeShift === shift ? 'active' : ''}`}
              onClick={() => setActiveShift(shift)}
            >
              {shift}
            </button>
          ))}
        </div>

        {/* Class rows */}
        <div className="class-table">
          <div className="class-table-header">
            <span>Time</span>
            <span>Class</span>
            <span>Coach</span>
            <span>Duration</span>
            <span>Intensity</span>
            <span>Spots</span>
            <span></span>
          </div>
          {schedule[activeShift].map((cls, i) => (
            <div key={i} className={`class-row reveal reveal-delay-${Math.min(i + 1, 3)}`}>
              <span className="cr-time">{cls.time}</span>
              <span className="cr-name">{cls.name}</span>
              <span className="cr-trainer">{cls.trainer}</span>
              <span className="cr-duration">{cls.duration}</span>
              <span className="cr-intensity">
                <span className="intensity-dot" style={{ background: intensityColor[cls.intensity] }} />
                {cls.intensity}
              </span>
              <span className="cr-spots" style={{ color: cls.spots <= 5 ? 'var(--primary)' : 'var(--text-gray)' }}>
                {cls.spots} left
              </span>
              <Link href="/contact" className="cr-book btn-outline" style={{ padding: '8px 20px', fontSize: '0.68rem', letterSpacing: '2px', textDecoration: 'none' }}>
                Book
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Class Types ── */}
      <section className="page-section" style={{ background: 'var(--secondary)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-header reveal">
          <span className="section-label">Disciplines</span>
          <h2>WHAT WE<br/>OFFER</h2>
          <p>Four training methodologies for complete athletic development.</p>
        </div>

        <div className="class-types-grid">
          {classTypes.map((ct, i) => (
            <div key={i} className={`class-type-card reveal reveal-delay-${(i % 2) + 1}`}>
              <div className="ct-img" style={{ backgroundImage: `url(${ct.img})` }}>
                <div className="ct-img-overlay" />
                <span className="ct-tag">{ct.tag}</span>
              </div>
              <div className="ct-body">
                <h3>{ct.title}</h3>
                <p>{ct.desc}</p>
                <a href="#" className="ct-link">View Schedule <span>→</span></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .classes-hero {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background: var(--bg-start);
        }
        .classes-hero-bg {
          position: absolute; inset: 0;
          background:
            url('https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2000') center/cover,
            var(--bg-start);
          opacity: 0.15;
        }
        .classes-hero-bg::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to top, var(--bg-start) 30%, transparent);
        }
        .classes-hero-content {
          position: relative;
          z-index: 2;
          padding: 160px 6% 80px;
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 60px;
        }
        .classes-hero-title {
          font-family: var(--font-display);
          font-size: clamp(5rem, 10vw, 11rem);
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: 2px;
          color: var(--text-white);
          margin-bottom: 20px;
        }
        .classes-hero-title em {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--primary);
        }
        .classes-hero-sub {
          color: var(--text-gray);
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 0.5px;
        }
        .classes-hero-meta {
          display: flex;
          align-items: center;
          gap: 40px;
          flex-shrink: 0;
          padding-bottom: 8px;
        }
        .classes-meta-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          text-align: center;
        }
        .classes-meta-num {
          font-family: var(--font-display);
          font-size: 3rem;
          letter-spacing: 2px;
          color: var(--primary);
          line-height: 1;
        }
        .classes-meta-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-gray);
        }
        .classes-meta-divider {
          width: 1px;
          height: 50px;
          background: rgba(255,255,255,0.1);
        }

        /* Schedule */
        .schedule-section {
          background: var(--bg-start);
        }
        .shift-tabs {
          display: flex;
          gap: 2px;
          max-width: 1300px;
          margin: 0 auto 2px;
        }
        .shift-tab {
          flex: 1;
          padding: 18px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          color: var(--text-gray);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .shift-tab::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--primary);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .shift-tab.active {
          background: rgba(200,245,66,0.05);
          color: var(--primary);
          border-color: rgba(200,245,66,0.2);
        }
        .shift-tab.active::after { transform: scaleX(1); }
        .shift-tab:hover:not(.active) {
          color: var(--text-white);
          background: rgba(255,255,255,0.04);
        }

        .class-table {
          max-width: 1300px;
          margin: 0 auto;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .class-table-header {
          display: grid;
          grid-template-columns: 110px 1fr 160px 100px 110px 80px 90px;
          padding: 14px 28px;
          background: rgba(200,245,66,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          gap: 16px;
          align-items: center;
        }
        .class-table-header span {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-gray);
        }
        .class-row {
          display: grid;
          grid-template-columns: 110px 1fr 160px 100px 110px 80px 90px;
          padding: 22px 28px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          gap: 16px;
          align-items: center;
          transition: all 0.3s ease;
        }
        .class-row:last-child { border-bottom: none; }
        .class-row:hover {
          background: rgba(200,245,66,0.025);
        }
        .cr-time {
          font-family: var(--font-display);
          font-size: 1rem;
          letter-spacing: 1px;
          color: var(--text-white);
        }
        .cr-name {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--text-white);
        }
        .cr-trainer {
          font-size: 0.85rem;
          color: var(--text-gray);
          font-weight: 300;
          font-style: italic;
        }
        .cr-duration {
          font-size: 0.82rem;
          color: var(--text-gray);
          font-weight: 300;
          letter-spacing: 0.5px;
        }
        .cr-intensity {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--text-gray);
          font-weight: 600;
          letter-spacing: 1px;
        }
        .intensity-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .cr-spots {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .cr-book {
          text-align: center;
        }

        /* Class types */
        .class-types-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          max-width: 1300px;
          margin: 0 auto;
        }
        .class-type-card {
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.05);
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }
        .class-type-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 2px;
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }
        .class-type-card:hover::after { transform: scaleX(1); }
        .class-type-card:hover {
          transform: translateY(-8px);
          border-color: rgba(200,245,66,0.15);
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
          z-index: 1;
        }
        .ct-img {
          height: 240px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .class-type-card:hover .ct-img { transform: scale(1.05); }
        .ct-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(5,5,6,0.85));
        }
        .ct-tag {
          position: absolute;
          top: 20px; right: 20px;
          font-family: var(--font-display);
          font-size: 1.8rem;
          letter-spacing: 4px;
          color: var(--primary);
          opacity: 0.5;
          line-height: 1;
        }
        .ct-body {
          padding: 36px;
        }
        .ct-body h3 {
          font-family: var(--font-display);
          font-size: 1.6rem;
          letter-spacing: 2px;
          font-weight: 400;
          color: var(--text-white);
          margin-bottom: 14px;
        }
        .ct-body p {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 24px;
        }
        .ct-link {
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: gap 0.3s;
        }
        .ct-link:hover { gap: 14px; }

        @media (max-width: 1024px) {
          .classes-hero-content { flex-direction: column; align-items: flex-start; }
          .class-table-header,
          .class-row { grid-template-columns: 100px 1fr 130px; }
          .class-table-header span:nth-child(n+4),
          .class-row > span:nth-child(n+4):not(.cr-book),
          .class-row > button { display: none; }
          .class-types-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .class-table-header, .class-row { grid-template-columns: 90px 1fr; padding: 16px 20px; }
          .class-table-header span:nth-child(n+3),
          .class-row > *:nth-child(n+3) { display: none; }
        }
      `}</style>
    </>
  );
}