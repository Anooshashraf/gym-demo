'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const runnerRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // The specific scroll animation requested
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=150%', // Pin for 1.5x the viewport height
          pin: true,
          scrub: 1, // Smooth scrubbing
        }
      });

      // Initially runner is in center, text is offscreen left
      // Animate runner to the right and fade out
      tl.to(runnerRef.current, {
        x: '100vw', // Move completely off screen to the right
        opacity: 0,
        duration: 2,
        ease: 'power1.inOut'
      }, 0); // start at time 0

      // Animate text from the left to the center
      tl.fromTo(textRef.current, 
        { x: '-100vw', opacity: 0 },
        { x: '0', opacity: 1, duration: 2, ease: 'power1.out' },
        0.5 // start slightly after the runner starts moving
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-background">
           <img src="/gym-bg.png" alt="Luxury Gym Background" className="bg-img" />
           <div className="overlay"></div>
        </div>
        
        {/* The Hero Text (Layered BEHIND the runner) */}
        <div ref={textRef} className="hero-text-container">
          <h1 className="hero-title">PREMIER<br/>FITNESS</h1>
        </div>

        {/* The Running Man (Layered IN FRONT of the text) */}
        <div ref={runnerRef} className="runner-container">
          <img 
            src="/runner.png" 
            alt="Running Man" 
            className="runner-gif"
            style={{ mixBlendMode: 'screen', filter: 'brightness(1.5) drop-shadow(0 0 20px rgba(0,229,255,0.5))' }}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section page-section">
        <div className="stat-container">
          <div className="stat-item">
            <h2>15,000<span>+</span></h2>
            <p>Active Members</p>
          </div>
          <div className="stat-item">
            <h2>250<span>+</span></h2>
            <p>Expert Trainers</p>
          </div>
          <div className="stat-item">
            <h2>98<span>%</span></h2>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Featured Classes (Home overview) */}
      <section className="classes-section page-section">
        <div className="section-header">
          <h2>Our Premium Experience</h2>
          <p>State-of-the-art facilities with designer minimalism.</p>
        </div>

        <div className="cards-grid">
          <div className="card">
            <div className="card-image" style={{ height: '250px', background: 'url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800) center/cover' }}></div>
            <div className="card-content">
              <h3>Advanced Equipment</h3>
              <p>Smart machines tracking your every rep with precision.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image" style={{ height: '250px', background: 'url(https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800) center/cover' }}></div>
            <div className="card-content">
              <h3>Elite Community</h3>
              <p>Connect with like-minded individuals pushing their limits.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image" style={{ height: '250px', background: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800) center/cover' }}></div>
            <div className="card-content">
              <h3>Expert Coaching</h3>
              <p>Data-driven routines designed specifically for your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Preview Section */}
      <section className="trainers-preview page-section">
        <div className="section-header">
          <h2>World-Class Coaches</h2>
          <p>Learn from industry veterans dedicated to your success.</p>
        </div>
        <div className="cards-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="card">
            <div className="card-image" style={{ height: '300px', background: 'url(https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800) center/cover' }}></div>
            <div className="card-content">
              <h3>Alex Sterling</h3>
              <p style={{ color: 'var(--primary)', marginBottom: '10px' }}>Head Coach & Strength</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image" style={{ height: '300px', background: 'url(https://images.unsplash.com/photo-1611564494260-5f21ea5faa64?q=80&w=800) center/cover' }}></div>
            <div className="card-content">
              <h3>Sarah Jenkins</h3>
              <p style={{ color: 'var(--primary)', marginBottom: '10px' }}>HIIT & Conditioning</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image" style={{ height: '300px', background: 'url(https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800) center/cover' }}></div>
            <div className="card-content">
              <h3>Mike Chen</h3>
              <p style={{ color: 'var(--primary)', marginBottom: '10px' }}>Mobility & Yoga</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="/trainers" className="btn-secondary" style={{ display: 'inline-block', padding: '15px 30px', border: '1px solid var(--primary)', color: 'var(--primary)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px' }}>View All Trainers</a>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section page-section" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <div className="section-header">
          <h2>Membership Plans</h2>
          <p>Choose the tier that fits your ambition.</p>
        </div>
        <div className="cards-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="card" style={{ padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Standard</h3>
            <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '20px' }}>$49<span style={{ fontSize: '1rem', color: 'var(--text-gray)' }}>/mo</span></h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', color: 'var(--text-gray)', lineHeight: '2' }}>
              <li>Full Gym Access</li>
              <li>Locker Room Access</li>
              <li>1 Free Assessment</li>
            </ul>
            <button className="btn-secondary" style={{ width: '100%', padding: '15px', background: 'transparent', border: '1px solid white', color: 'white' }}>Select Plan</button>
          </div>
          <div className="card" style={{ padding: '40px', background: 'linear-gradient(145deg, rgba(0,229,255,0.1), rgba(0,0,0,0))', border: '1px solid var(--primary)', textAlign: 'center', transform: 'scale(1.05)', zIndex: 1 }}>
            <div style={{ background: 'var(--primary)', color: 'black', padding: '5px 10px', fontSize: '0.8rem', fontWeight: 'bold', display: 'inline-block', marginBottom: '15px', borderRadius: '4px' }}>MOST POPULAR</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Premium</h3>
            <h2 style={{ fontSize: '3rem', color: 'var(--text-white)', marginBottom: '20px' }}>$89<span style={{ fontSize: '1rem', color: 'var(--text-gray)' }}>/mo</span></h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', color: 'var(--text-white)', lineHeight: '2' }}>
              <li>Everything in Standard</li>
              <li>Unlimited Classes</li>
              <li>Sauna & Spa Access</li>
              <li>Monthly Body Scan</li>
            </ul>
            <button className="btn-primary" style={{ width: '100%', padding: '15px' }}>Select Plan</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section page-section" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="section-header">
          <h2>Success Stories</h2>
          <p>Real results from dedicated members.</p>
        </div>
        <div className="cards-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="card" style={{ padding: '40px', background: 'rgba(255,255,255,0.03)' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--text-gray)', marginBottom: '20px' }}>"Premier Fitness completely changed my approach to training. The equipment and the community are unmatched."</p>
            <h4 style={{ color: 'var(--primary)' }}>- John D.</h4>
          </div>
          <div className="card" style={{ padding: '40px', background: 'rgba(255,255,255,0.03)' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--text-gray)', marginBottom: '20px' }}>"The trainers here are actual experts. I've broken all my personal records since joining six months ago."</p>
            <h4 style={{ color: 'var(--primary)' }}>- Sarah M.</h4>
          </div>
          <div className="card" style={{ padding: '40px', background: 'rgba(255,255,255,0.03)' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--text-gray)', marginBottom: '20px' }}>"Cleanest gym I've ever been to. The atmosphere pushes you to work harder the second you walk in."</p>
            <h4 style={{ color: 'var(--primary)' }}>- Michael T.</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section page-section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px' }}>READY TO <span style={{ color: 'var(--primary)' }}>COMMIT?</span></h2>
        <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', marginBottom: '40px' }}>Join the elite. Start your transformation today.</p>
        <button className="btn-primary" style={{ display: 'inline-block', width: 'auto', minWidth: '200px', padding: '15px 40px', fontSize: '1.1rem' }}>Start Your Journey</button>
      </section>

      <style jsx>{`
        .hero-section {
          position: relative;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        
        .bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, var(--bg-start));
        }

        .hero-text-container {
          position: absolute;
          z-index: 2;
          width: 100%;
          text-align: center;
          top: 50%;
          transform: translateY(-50%);
        }

        .hero-title {
          font-size: clamp(4rem, 10vw, 10rem);
          font-weight: 900;
          line-height: 0.85;
          letter-spacing: -2px;
          text-transform: uppercase;
          background: linear-gradient(to bottom, #ffffff 20%, #7a8b99 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.8));
          margin: 0;
        }

        .runner-container {
          position: absolute;
          z-index: 3;
          left: 50%;
          bottom: 0%;
          transform: translateX(-50%);
          height: 85vh;
          pointer-events: none;
        }

        .runner-gif {
          height: 100%;
          width: auto;
          object-fit: contain;
        }

        .stat-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          text-align: center;
          width: 100%;
        }

        .stat-item h2 {
          font-size: 4rem;
          font-weight: 900;
          color: var(--primary);
        }

        .stat-item span {
          color: var(--accent);
        }

        .stat-item p {
          color: var(--text-gray);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}
