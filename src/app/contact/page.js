// 'use client';

// export default function Contact() {
//   return (
//     <>
//       <div className="contact-hero">
//         <div className="overlay"></div>
//         <section className="page-section" style={{ paddingTop: '150px', position: 'relative', zIndex: 2 }}>
//           <div className="section-header">
//             <h2>Get In Touch</h2>
//             <p>Ready to start? We're here to answer any questions.</p>
//           </div>

//       <div className="contact-wrapper">
//         <div className="contact-info">
//           <div className="info-block">
//             <h3>Location</h3>
//             <p>123 Fitness Boulevard<br/>Downtown Core, NY 10001</p>
//           </div>
//           <div className="info-block">
//             <h3>Hours</h3>
//             <p>Mon-Fri: 5:00 AM - 11:00 PM<br/>Sat-Sun: 6:00 AM - 9:00 PM</p>
//           </div>
//           <div className="info-block">
//             <h3>Contact Details</h3>
//             <p>Phone: (555) 123-4567<br/>Email: join@premierfitness.com</p>
//           </div>
//         </div>

//         <div className="contact-form-container">
//           <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
//             <div className="form-group">
//               <label>Full Name</label>
//               <input type="text" placeholder="John Doe" />
//             </div>
//             <div className="form-group">
//               <label>Email Address</label>
//               <input type="email" placeholder="john@example.com" />
//             </div>
//             <div className="form-group">
//               <label>Message</label>
//               <textarea placeholder="How can we help you?" rows="5"></textarea>
//             </div>
//             <button className="btn-primary" style={{ width: '100%' }}>Send Message</button>
//           </form>
//         </div>
//       </div>
//       </section>
//     </div>

//       <style jsx>{`
//         .contact-hero {
//           position: relative;
//           min-height: 100vh;
//           background: url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000') center/cover fixed;
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
//         .contact-wrapper {
//           display: flex;
//           max-width: 1200px;
//           margin: 0 auto;
//           gap: 60px;
//         }
//         .contact-info {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           gap: 40px;
//         }
//         .info-block h3 {
//           font-size: 1.5rem;
//           color: var(--primary);
//           margin-bottom: 10px;
//         }
//         .info-block p {
//           color: var(--text-gray);
//           font-size: 1.1rem;
//           line-height: 1.6;
//         }
//         .contact-form-container {
//           flex: 1;
//           background: rgba(255,255,255,0.02);
//           padding: 40px;
//           border-radius: 12px;
//           border: 1px solid rgba(255,255,255,0.05);
//         }
//         .form-group {
//           margin-bottom: 25px;
//         }
//         .form-group label {
//           display: block;
//           margin-bottom: 10px;
//           color: var(--text-white);
//           font-weight: 600;
//         }
//         .form-group input, .form-group textarea {
//           width: 100%;
//           padding: 15px;
//           background: rgba(0,0,0,0.5);
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 8px;
//           color: white;
//           font-family: inherit;
//           font-size: 1rem;
//         }
//         .form-group input:focus, .form-group textarea:focus {
//           outline: none;
//           border-color: var(--primary);
//         }
//         @media (max-width: 768px) {
//           .contact-wrapper { flex-direction: column; }
//         }
//       `}</style>
//     </>
//   );
// }




'use client';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="contact-hero page-section">
        <div className="contact-inner">
          <div className="contact-left reveal">
            <span className="section-label">Contact</span>
            <h1 className="contact-title">GET IN<br/><em>TOUCH.</em></h1>
            <p className="contact-subtitle">Ready to start? We're here for every question.</p>

            <div className="info-blocks">
              {[
                { label: 'Location', value: '123 Fitness Boulevard\nDowntown Core, NY 10001' },
                { label: 'Hours', value: 'Mon–Fri: 5:00 AM – 11:00 PM\nSat–Sun: 6:00 AM – 9:00 PM' },
                { label: 'Contact', value: '(555) 123-4567\njoin@premierfitness.com' },
              ].map((b, i) => (
                <div key={i} className="info-block">
                  <span className="info-label">{b.label}</span>
                  <p className="info-value">{b.value.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap reveal reveal-delay-2">
            {sent ? (
              <div className="form-success">
                <span className="form-success-icon">✓</span>
                <h3>Message Sent</h3>
                <p>We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Membership inquiry..." />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="How can we help you achieve your goals?" rows="6" required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '18px', fontSize: '0.85rem' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-hero {
          padding-top: 160px;
          min-height: 100vh;
          background: var(--bg-start);
        }
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 100px;
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
        }
        .contact-title {
          font-family: var(--font-display);
          font-size: clamp(4rem, 8vw, 9rem);
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: 2px;
          color: var(--text-white);
          margin-bottom: 20px;
        }
        .contact-title em {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--primary);
        }
        .contact-subtitle {
          color: var(--text-gray);
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 60px;
          letter-spacing: 0.5px;
        }
        .info-blocks {
          display: flex;
          flex-direction: column;
          gap: 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 40px;
        }
        .info-block {}
        .info-label {
          display: block;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 8px;
        }
        .info-value {
          color: var(--text-gray);
          font-size: 0.95rem;
          line-height: 1.8;
          font-weight: 300;
        }

        .contact-form-wrap {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 60px;
          position: relative;
        }
        .contact-form-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, var(--primary), transparent);
        }
        .contact-form { display: flex; flex-direction: column; gap: 24px; }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-group { display: flex; flex-direction: column; gap: 10px; }
        .form-group label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-gray);
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 16px 18px;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.08);
          color: var(--text-white);
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 300;
          transition: border-color 0.3s;
          resize: none;
          outline: none;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(122,120,112,0.5);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: rgba(200,245,66,0.4);
          background: rgba(200,245,66,0.02);
        }

        .form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 400px;
          gap: 20px;
          text-align: center;
        }
        .form-success-icon {
          width: 72px; height: 72px;
          border: 2px solid var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: var(--primary);
          margin: 0 auto;
          line-height: 72px;
          text-align: center;
        }
        .form-success h3 {
          font-family: var(--font-display);
          font-size: 2.5rem;
          letter-spacing: 3px;
          color: var(--text-white);
        }
        .form-success p {
          color: var(--text-gray);
          font-weight: 300;
        }

        @media (max-width: 1024px) {
          .contact-inner { grid-template-columns: 1fr; gap: 60px; }
          .contact-form-wrap { padding: 40px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
