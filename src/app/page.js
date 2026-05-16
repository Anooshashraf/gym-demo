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

    // Animate runner to the right and fade out
    tl.to(runnerRef.current, {
      x: '150vw', // Move completely off screen to the right
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

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-background">
           <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" alt="Gym Background" className="bg-img" />
           <div className="overlay"></div>
        </div>
        
        {/* The Running Man Video/GIF */}
        <div ref={runnerRef} className="runner-container">
          {/* Using a generated static image of a runner silhouette */}
          <img 
            src="/runner.png" 
            alt="Running Man" 
            className="runner-gif"
            style={{ mixBlendMode: 'screen' }}
          />
        </div>

        {/* The Hero Text */}
        <div ref={textRef} className="hero-text-container">
          <h1 className="hero-title">ACHIEVE<br/>GREATNESS</h1>
          <p className="hero-subtitle">Where Iron Meets Innovation</p>
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
      <section className="cta-section page-section" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '20px' }}>READY TO <span style={{ color: 'var(--primary)' }}>COMMIT?</span></h2>
        <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', marginBottom: '40px' }}>Join the elite. Start your transformation today.</p>
        <button className="btn-primary" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>Start Your Journey</button>
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
          opacity: 0.4;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, var(--bg-start));
        }

        .runner-container {
          position: absolute;
          z-index: 2;
          /* Start position of the runner (left/center) */
          left: 20%;
          bottom: 10%;
          height: 60vh;
          pointer-events: none;
        }

        .runner-gif {
          height: 100%;
          width: auto;
          object-fit: contain;
        }

        .hero-text-container {
          position: relative;
          z-index: 3;
          text-align: center;
        }

        .hero-title {
          font-size: 6rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -2px;
          color: var(--text-white);
          text-shadow: 0 10px 30px rgba(0,0,0,0.8);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          color: var(--primary);
          letter-spacing: 4px;
          text-transform: uppercase;
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
