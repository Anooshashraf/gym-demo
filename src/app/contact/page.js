'use client';

export default function Contact() {
  return (
    <section className="page-section" style={{ paddingTop: '150px' }}>
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>Ready to start? We're here to answer any questions.</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="info-block">
            <h3>Location</h3>
            <p>123 Fitness Boulevard<br/>Downtown Core, NY 10001</p>
          </div>
          <div className="info-block">
            <h3>Hours</h3>
            <p>Mon-Fri: 5:00 AM - 11:00 PM<br/>Sat-Sun: 6:00 AM - 9:00 PM</p>
          </div>
          <div className="info-block">
            <h3>Contact Details</h3>
            <p>Phone: (555) 123-4567<br/>Email: join@premierfitness.com</p>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="How can we help you?" rows="5"></textarea>
            </div>
            <button className="btn-primary" style={{ width: '100%' }}>Send Message</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-wrapper {
          display: flex;
          max-width: 1200px;
          margin: 0 auto;
          gap: 60px;
        }
        .contact-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .info-block h3 {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 10px;
        }
        .info-block p {
          color: var(--text-gray);
          font-size: 1.1rem;
          line-height: 1.6;
        }
        .contact-form-container {
          flex: 1;
          background: rgba(255,255,255,0.02);
          padding: 40px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .form-group {
          margin-bottom: 25px;
        }
        .form-group label {
          display: block;
          margin-bottom: 10px;
          color: var(--text-white);
          font-weight: 600;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 15px;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: white;
          font-family: inherit;
          font-size: 1rem;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
        }
        @media (max-width: 768px) {
          .contact-wrapper { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
