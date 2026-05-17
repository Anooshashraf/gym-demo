// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// export default function Home() {
//   const heroRef = useRef(null);
//   const textRef = useRef(null);
//   const runnerRef = useRef(null);
  
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
    
//     let ctx = gsap.context(() => {
//       // The specific scroll animation requested
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top top',
//           end: '+=150%', // Pin for 1.5x the viewport height
//           pin: true,
//           scrub: 1, // Smooth scrubbing
//         }
//       });

//       // Initially runner is in center, text is offscreen left
//       // Animate runner to the right and fade out
//       tl.to(runnerRef.current, {
//         x: '100vw', // Move completely off screen to the right
//         opacity: 0,
//         duration: 2,
//         ease: 'power1.inOut'
//       }, 0); // start at time 0

//       // Animate text from the left to the center
//       tl.fromTo(textRef.current, 
//         { x: '-100vw', opacity: 0 },
//         { x: '0', opacity: 1, duration: 2, ease: 'power1.out' },
//         0.5 // start slightly after the runner starts moving
//       );
//     }, heroRef);

//     return () => {
//       ctx.revert();
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <section ref={heroRef} className="hero-section">
//         <div className="hero-background">
//            <img src="/gym-bg.png" alt="Luxury Gym Background" className="bg-img" />
//            <div className="overlay"></div>
//         </div>
        
//         {/* The Hero Text (Layered BEHIND the runner) */}
//         <div ref={textRef} className="hero-text-container">
//           <h1 className="hero-title">PREMIER<br/>FITNESS</h1>
//         </div>

//         {/* The Running Man (Layered IN FRONT of the text) */}
//         <div ref={runnerRef} className="runner-container">
//           <img 
//             src="/runner.png" 
//             alt="Running Man" 
//             className="runner-gif"
//             style={{ mixBlendMode: 'screen', filter: 'brightness(1.5) drop-shadow(0 0 20px rgba(0,229,255,0.5))' }}
//           />
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="stats-section page-section">
//         <div className="stat-container">
//           <div className="stat-item">
//             <h2>15,000<span>+</span></h2>
//             <p>Active Members</p>
//           </div>
//           <div className="stat-item">
//             <h2>250<span>+</span></h2>
//             <p>Expert Trainers</p>
//           </div>
//           <div className="stat-item">
//             <h2>98<span>%</span></h2>
//             <p>Satisfaction Rate</p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Classes (Home overview) */}
//       <section className="classes-section page-section">
//         <div className="section-header">
//           <h2>Our Premium Experience</h2>
//           <p>State-of-the-art facilities with designer minimalism.</p>
//         </div>

//         <div className="cards-grid">
//           <div className="card">
//             <div className="card-image" style={{ height: '250px', background: 'url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800) center/cover' }}></div>
//             <div className="card-content">
//               <h3>Advanced Equipment</h3>
//               <p>Smart machines tracking your every rep with precision.</p>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-image" style={{ height: '250px', background: 'url(https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800) center/cover' }}></div>
//             <div className="card-content">
//               <h3>Elite Community</h3>
//               <p>Connect with like-minded individuals pushing their limits.</p>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-image" style={{ height: '250px', background: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800) center/cover' }}></div>
//             <div className="card-content">
//               <h3>Expert Coaching</h3>
//               <p>Data-driven routines designed specifically for your goals.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Trainers Preview Section */}
//       <section className="trainers-preview page-section">
//         <div className="section-header">
//           <h2>World-Class Coaches</h2>
//           <p>Learn from industry veterans dedicated to your success.</p>
//         </div>
//         <div className="cards-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div className="card">
//             <div className="card-image" style={{ height: '300px', background: 'url(https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800) center/cover' }}></div>
//             <div className="card-content">
//               <h3>Alex Sterling</h3>
//               <p style={{ color: 'var(--primary)', marginBottom: '10px' }}>Head Coach & Strength</p>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-image" style={{ height: '300px', background: 'url(https://images.unsplash.com/photo-1611564494260-5f21ea5faa64?q=80&w=800) center/cover' }}></div>
//             <div className="card-content">
//               <h3>Sarah Jenkins</h3>
//               <p style={{ color: 'var(--primary)', marginBottom: '10px' }}>HIIT & Conditioning</p>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card-image" style={{ height: '300px', background: 'url(https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800) center/cover' }}></div>
//             <div className="card-content">
//               <h3>Mike Chen</h3>
//               <p style={{ color: 'var(--primary)', marginBottom: '10px' }}>Mobility & Yoga</p>
//             </div>
//           </div>
//         </div>
//         <div style={{ textAlign: 'center', marginTop: '40px' }}>
//           <a href="/trainers" className="btn-secondary" style={{ display: 'inline-block', padding: '15px 30px', border: '1px solid var(--primary)', color: 'var(--primary)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px' }}>View All Trainers</a>
//         </div>
//       </section>

      
//       {/* Pricing Section */}
//       <section className="pricing-section page-section" style={{ backgroundColor: 'var(--bg-dark)' }}>
//         <div className="section-header">
//           <h2>Membership Plans</h2>
//           <p>Choose the tier that fits your ambition.</p>
//         </div>
//         <div className="cards-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
//           <div className="card" style={{ padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
//             <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Standard</h3>
//             <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '20px' }}>$49<span style={{ fontSize: '1rem', color: 'var(--text-gray)' }}>/mo</span></h2>
//             <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', color: 'var(--text-gray)', lineHeight: '2' }}>
//               <li>Full Gym Access</li>
//               <li>Locker Room Access</li>
//               <li>1 Free Assessment</li>
//             </ul>
//             <button className="btn-secondary" style={{ width: '100%', padding: '15px', background: 'transparent', border: '1px solid white', color: 'white' }}>Select Plan</button>
//           </div>
//           <div className="card" style={{ padding: '40px', background: 'linear-gradient(145deg, rgba(0,229,255,0.1), rgba(0,0,0,0))', border: '1px solid var(--primary)', textAlign: 'center', transform: 'scale(1.05)', zIndex: 1 }}>
//             <div style={{ background: 'var(--primary)', color: 'black', padding: '5px 10px', fontSize: '0.8rem', fontWeight: 'bold', display: 'inline-block', marginBottom: '15px', borderRadius: '4px' }}>MOST POPULAR</div>
//             <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Premium</h3>
//             <h2 style={{ fontSize: '3rem', color: 'var(--text-white)', marginBottom: '20px' }}>$89<span style={{ fontSize: '1rem', color: 'var(--text-gray)' }}>/mo</span></h2>
//             <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', color: 'var(--text-white)', lineHeight: '2' }}>
//               <li>Everything in Standard</li>
//               <li>Unlimited Classes</li>
//               <li>Sauna & Spa Access</li>
//               <li>Monthly Body Scan</li>
//             </ul>
//             <button className="btn-primary" style={{ width: '100%', padding: '15px' }}>Select Plan</button>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials-section page-section" style={{ backgroundColor: 'var(--secondary)' }}>
//         <div className="section-header">
//           <h2>Success Stories</h2>
//           <p>Real results from dedicated members.</p>
//         </div>
//         <div className="cards-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div className="card" style={{ padding: '40px', background: 'rgba(255,255,255,0.03)' }}>
//             <p style={{ fontStyle: 'italic', color: 'var(--text-gray)', marginBottom: '20px' }}>"Premier Fitness completely changed my approach to training. The equipment and the community are unmatched."</p>
//             <h4 style={{ color: 'var(--primary)' }}>- John D.</h4>
//           </div>
//           <div className="card" style={{ padding: '40px', background: 'rgba(255,255,255,0.03)' }}>
//             <p style={{ fontStyle: 'italic', color: 'var(--text-gray)', marginBottom: '20px' }}>"The trainers here are actual experts. I've broken all my personal records since joining six months ago."</p>
//             <h4 style={{ color: 'var(--primary)' }}>- Sarah M.</h4>
//           </div>
//           <div className="card" style={{ padding: '40px', background: 'rgba(255,255,255,0.03)' }}>
//             <p style={{ fontStyle: 'italic', color: 'var(--text-gray)', marginBottom: '20px' }}>"Cleanest gym I've ever been to. The atmosphere pushes you to work harder the second you walk in."</p>
//             <h4 style={{ color: 'var(--primary)' }}>- Michael T.</h4>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="cta-section page-section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//         <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px' }}>READY TO <span style={{ color: 'var(--primary)' }}>COMMIT?</span></h2>
//         <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', marginBottom: '40px' }}>Join the elite. Start your transformation today.</p>
//         <button className="btn-primary" style={{ display: 'inline-block', width: 'auto', minWidth: '200px', padding: '15px 40px', fontSize: '1.1rem' }}>Start Your Journey</button>
//       </section>

//       <style jsx>{`
//         .hero-section {
//           position: relative;
//           height: 100vh;
//           width: 100vw;
//           overflow: hidden;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: #000;
//         }
        
//         .hero-background {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           z-index: 1;
//         }
        
//         .bg-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           opacity: 0.6;
//         }

//         .overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(to bottom, transparent, var(--bg-start));
//         }

//         .hero-text-container {
//           position: absolute;
//           z-index: 2;
//           width: 100%;
//           text-align: center;
//           top: 50%;
//           transform: translateY(-50%);
//         }

//         .hero-title {
//           font-size: clamp(6rem, 14vw, 14rem);
//           font-weight: 900;
//           line-height: 0.85;
//           letter-spacing: -2px;
//           text-transform: uppercase;
//           background: linear-gradient(to bottom, #ffffff 20%, #7a8b99 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           filter: drop-shadow(0 20px 30px rgba(0,0,0,0.8));
//           margin: 0;
//         }

//         .runner-container {
//           position: absolute;
//           z-index: 3;
//           left: 50%;
//           bottom: 0%;
//           transform: translateX(-50%);
//           height: 85vh;
//           pointer-events: none;
//         }

//         .runner-gif {
//           height: 100%;
//           width: auto;
//           object-fit: contain;
//         }

//         .stat-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           display: flex;
//           justify-content: space-around;
//           text-align: center;
//           width: 100%;
//         }

//         .stat-item h2 {
//           font-size: 4rem;
//           font-weight: 900;
//           color: var(--primary);
//         }

//         .stat-item span {
//           color: var(--accent);
//         }

//         .stat-item p {
//           color: var(--text-gray);
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           margin-top: 10px;
//         }
//       `}</style>
//     </>
//   );
// }


















// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import heroManImage from '../images/hero_man-Photoroom.png';

// /* ─── Particle Canvas ─────────────────────────────────── */
// function ParticleCanvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let w, h, particles = [], raf;

//     const resize = () => {
//       w = canvas.width = canvas.offsetWidth;
//       h = canvas.height = canvas.offsetHeight;
//     };

//     const rand = (min, max) => Math.random() * (max - min) + min;

//     const makeParticle = () => ({
//       x: rand(0, w), y: rand(0, h),
//       vx: rand(-0.15, 0.15), vy: rand(-0.25, -0.05),
//       r: rand(0.5, 1.8),
//       alpha: rand(0.1, 0.5),
//       life: rand(0.002, 0.006),
//     });

//     const init = () => {
//       resize();
//       particles = Array.from({ length: 120 }, makeParticle);
//     };

//     const tick = () => {
//       ctx.clearRect(0, 0, w, h);
//       particles.forEach((p, i) => {
//         p.x += p.vx; p.y += p.vy; p.alpha -= p.life;
//         if (p.alpha <= 0 || p.y < -10) particles[i] = makeParticle();
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(200,245,66,${p.alpha})`;
//         ctx.fill();
//       });
//       raf = requestAnimationFrame(tick);
//     };

//     init();
//     tick();
//     window.addEventListener('resize', resize);
//     return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
//   }, []);

//   return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }} />;
// }



// // function Hero() {
// //   const heroRef = useRef(null);
// //   const textRef = useRef(null);
// //   const runnerRef = useRef(null);
// //   const lineRef = useRef(null);
// //   const statsRef = useRef(null);
// //   const scrollIndicatorRef = useRef(null);

// //   useEffect(() => {
// //     // Prevent horizontal scroll
// //     document.body.style.overflowX = 'hidden';
    
// //     // GSAP animations
// //     const ctx = gsap.context(() => {
// //       const tl = gsap.timeline({ delay: 0.2 });
// //       tl.from(lineRef.current, { scaleX: 0, duration: 1, ease: 'power3.out' })
// //         .from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.4')
// //         .from('.hero-word', { opacity: 0, y: 60, duration: 1, ease: 'power3.out', stagger: 0.12 }, '-=0.5')
// //         .from('.hero-sub', { opacity: 0, y: 20, duration: 0.8 }, '-=0.4')
// //         .from('.hero-cta-group', { opacity: 0, y: 20, duration: 0.7 }, '-=0.3')
// //         .from(runnerRef.current, { opacity: 0, x: 80, duration: 1.2, ease: 'power3.out' }, '-=0.8')
// //         .from(statsRef.current, { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
// //         .from(scrollIndicatorRef.current, { opacity: 0, duration: 0.6 }, '-=0.2');
// //     }, heroRef);

// //     // Prevent horizontal scroll from mouse wheel
// //     const preventHorizontalScroll = (e) => {
// //       if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
// //         e.preventDefault();
// //       }
// //     };

// //     // Prevent scroll on runner image
// //     const preventRunnerScroll = (e) => {
// //       if (e.target.closest('.hero-runner')) {
// //         e.preventDefault();
// //       }
// //     };

// //     window.addEventListener('wheel', preventHorizontalScroll, { passive: false });
    
// //     if (heroRef.current) {
// //       heroRef.current.addEventListener('touchmove', preventRunnerScroll, { passive: false });
// //     }

// //     return () => {
// //       ctx.revert();
// //       document.body.style.overflowX = '';
// //       window.removeEventListener('wheel', preventHorizontalScroll);
// //       if (heroRef.current) {
// //         heroRef.current.removeEventListener('touchmove', preventRunnerScroll);
// //       }
// //     };
// //   }, []);

// //   return (
// //     <section ref={heroRef} className="hero-section">
// //       {/* Background */}
// //       <div className="hero-bg">
// //         <img className="hero-bg-img" src="/gym-bg.png" alt="" aria-hidden="true" />
// //         <div className="hero-bg-overlay" />
// //         <div className="hero-bg-vignette" />
// //       </div>

// //       <ParticleCanvas />

// //       {/* Grid lines decoration */}
// //       <div className="hero-grid" aria-hidden="true">
// //         {[...Array(6)].map((_, i) => <div key={i} className="hero-grid-line" />)}
// //       </div>

// //       {/* Main content */}
// //       <div className="hero-content">
// //         <div className="hero-left">
// //           <div ref={lineRef} className="hero-accent-line" />
// //           <p className="hero-eyebrow">EST. 2018 &nbsp;·&nbsp; NEW YORK</p>
// //           <h1 className="hero-title">
// //             <span className="hero-word">UNLOCK</span>
// //             <span className="hero-word hero-word--outline">YOUR</span>
// //             <span className="hero-word hero-word--accent">LIMIT</span>
// //           </h1>
// //           <p className="hero-sub">Elite training. Data-driven coaching.<br />The city's finest fitness sanctuary.</p>
// //           <div className="hero-cta-group">
// //             <button className="btn-primary hero-btn">Start Training</button>
// //             <a href="/classes" className="hero-link">
// //               View Schedule <span className="hero-link-arrow">→</span>
// //             </a>
// //           </div>
// //         </div>

// //         {/* Runner */}
// //         <div ref={runnerRef} className="hero-runner">
// //           <img
// //             src={heroManImage.src}
// //             alt="Elite athlete"
// //             style={{ mixBlendMode: 'screen', filter: 'brightness(1.4) contrast(1.1) drop-shadow(0 0 40px rgba(200,245,66,0.3))' }}
// //           />
// //         </div>
// //       </div>

// //       {/* Bottom stat strip */}
// //       <div ref={statsRef} className="hero-stats">
// //         {[['15K+', 'Members'], ['250+', 'Trainers'], ['98%', 'Satisfaction'], ['24/7', 'Access']].map(([num, label]) => (
// //           <div key={label} className="hero-stat">
// //             <span className="hero-stat-num">{num}</span>
// //             <span className="hero-stat-label">{label}</span>
// //           </div>
// //         ))}
// //       </div>

      

// //       <style jsx>{`
// //         .hero-section {
// //           position: relative;
// //           height: auto;
// //           min-height: 100vh;
// //           min-height: 100dvh;
// //           width: 100%;
// //           overflow: hidden;
// //           display: flex;
// //           flex-direction: column;
// //           background: #050506;
// //           -webkit-overflow-scrolling: touch;
// //           will-change: transform;
// //         }
        
// //         /* Prevent text selection */
// //         .hero-section * {
// //           -webkit-user-select: none;
// //           -moz-user-select: none;
// //           -ms-user-select: none;
// //           user-select: none;
// //         }
        
// //         /* Allow text selection for content */
// //         .hero-eyebrow, 
// //         .hero-word, 
// //         .hero-sub, 
// //         .hero-stat-label, 
// //         .hero-stat-num {
// //           -webkit-user-select: text;
// //           -moz-user-select: text;
// //           -ms-user-select: text;
// //           user-select: text;
// //         }
        
// //         /* Prevent image dragging */
// //         img {
// //           -webkit-user-drag: none;
// //           -khtml-user-drag: none;
// //           -moz-user-drag: none;
// //           -o-user-drag: none;
// //           user-drag: none;
// //         }
        
// //         .hero-bg {
// //           position: absolute;
// //           inset: 0;
// //           z-index: 1;
// //         }
// //         .hero-bg-img {
// //           width: 100%; height: 100%;
// //           object-fit: cover;
// //           object-position: center 30%;
// //           opacity: 0.35;
// //         }
// //         .hero-bg-overlay {
// //           position: absolute; inset: 0;
// //           background: linear-gradient(105deg, rgba(5,5,6,0.96) 0%, rgba(5,5,6,0.5) 50%, rgba(5,5,6,0.2) 100%);
// //         }
// //         .hero-bg-vignette {
// //           position: absolute; inset: 0;
// //           background: radial-gradient(ellipse at center, transparent 40%, rgba(5,5,6,0.7) 100%);
// //         }
// //         .hero-grid {
// //           position: absolute; inset: 0; z-index: 2;
// //           display: flex;
// //           padding: 0 6%;
// //           pointer-events: none;
// //         }
// //         .hero-grid-line {
// //           flex: 1;
// //           border-left: 1px solid rgba(255,255,255,0.03);
// //         }
// //         .hero-content {
// //           position: relative;
// //           z-index: 4;
// //           flex: 1;
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           padding: 80px 6% 40px;
// //           max-width: 1500px;
// //           width: 100%;
// //           margin: 0 auto;
// //           gap: 40px;
// //           will-change: transform;
// //         }
// //         .hero-left {
// //           flex: 1;
// //           max-width: 680px;
// //         }
// //         .hero-accent-line {
// //           width: 60px;
// //           height: 2px;
// //           background: var(--primary);
// //           margin-bottom: 24px;
// //           transform-origin: left;
// //         }
// //         .hero-eyebrow {
// //           font-family: var(--font-body);
// //           font-size: 0.72rem;
// //           font-weight: 700;
// //           letter-spacing: 5px;
// //           text-transform: uppercase;
// //           color: var(--primary);
// //           margin-bottom: 20px;
// //           display: block;
// //         }
// //         .hero-title {
// //           display: flex;
// //           flex-direction: column;
// //           font-family: var(--font-display);
// //           font-size: clamp(6rem, 12vw, 13rem);
// //           font-weight: 400;
// //           line-height: 0.88;
// //           letter-spacing: -1px;
// //           margin-bottom: 32px;
// //           overflow: visible;
// //         }
// //         .hero-word {
// //           display: block;
// //           color: var(--text-white);
// //         }
// //         .hero-word--outline {
// //           -webkit-text-stroke: 1px rgba(240, 237, 232, 0.4);
// //           color: transparent;
// //         }
// //         .hero-word--accent {
// //           color: var(--primary);
// //         }
// //         .hero-sub {
// //           font-family: var(--font-body);
// //           font-size: 1rem;
// //           font-weight: 300;
// //           color: var(--text-gray);
// //           line-height: 1.8;
// //           margin-bottom: 44px;
// //           letter-spacing: 0.5px;
// //         }
// //         .hero-cta-group {
// //           display: flex;
// //           align-items: center;
// //           gap: 36px;
// //         }
// //         .hero-btn { font-size: 0.82rem; padding: 16px 40px; }
// //         .hero-link {
// //           font-family: var(--font-body);
// //           font-size: 0.82rem;
// //           font-weight: 700;
// //           letter-spacing: 2px;
// //           text-transform: uppercase;
// //           color: var(--text-gray);
// //           text-decoration: none;
// //           transition: color 0.3s;
// //           display: flex;
// //           align-items: center;
// //           gap: 8px;
// //         }
// //         .hero-link:hover { color: var(--text-white); }
// //         .hero-link-arrow {
// //           display: inline-block;
// //           transition: transform 0.3s ease;
// //         }
// //         .hero-link:hover .hero-link-arrow {
// //           transform: translateX(6px);
// //         }
// //         .hero-runner {
// //           position: absolute;
// //           right: 6%;
// //           bottom: 50px;
// //           top: 100px;
// //           height: clamp(150px, 80vh, 88vh);
// //           width: auto;
// //           pointer-events: none;
// //           z-index: 3;
// //           max-width: 50%;
// //           display: flex;
// //           align-items: flex-end;
// //         }
// //         .hero-runner img {
// //           height: 150px;
// //           width: auto;
// //           bottom: 10px;
// //           object-fit: contain;
// //           object-position: center bottom;
// //           display: block;
// //           max-width: 100%;
// //         }
// //         .hero-stats {
// //           position: relative;
// //           z-index: 4;
// //           display: flex;
// //           border-top: 1px solid rgba(255,255,255,0.06);
// //           background: rgba(5,5,6,0.6);
// //           backdrop-filter: blur(20px);
// //         }
// //         .hero-stat {
// //           flex: 1;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           padding: 24px 20px;
// //           border-right: 1px solid rgba(255,255,255,0.06);
// //           gap: 4px;
// //           transition: background 0.3s;
// //         }
// //         .hero-stat:last-child { border-right: none; }
// //         .hero-stat:hover { background: rgba(200,245,66,0.04); }
// //         .hero-stat-num {
// //           font-family: var(--font-display);
// //           font-size: 2rem;
// //           letter-spacing: 2px;
// //           color: var(--primary);
// //           line-height: 1;
// //         }
// //         .hero-stat-label {
// //           font-family: var(--font-body);
// //           font-size: 0.65rem;
// //           font-weight: 700;
// //           letter-spacing: 3px;
// //           text-transform: uppercase;
// //           color: var(--text-gray);
// //         }
// //         .scroll-indicator {
// //           position: absolute;
// //           left: 6%;
// //           bottom: 80px;
// //           z-index: 5;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           gap: 12px;
// //         }
// //         .scroll-indicator span {
// //           font-family: var(--font-body);
// //           font-size: 0.6rem;
// //           font-weight: 700;
// //           letter-spacing: 4px;
// //           text-transform: uppercase;
// //           color: var(--text-gray);
// //           writing-mode: vertical-rl;
// //         }
// //         .scroll-line {
// //           width: 1px;
// //           height: 60px;
// //           background: rgba(255,255,255,0.1);
// //           position: relative;
// //           overflow: hidden;
// //         }
// //         .scroll-dot {
// //           width: 1px;
// //           height: 20px;
// //           background: var(--primary);
// //           animation: scrollAnim 2s ease-in-out infinite;
// //         }
// //         @keyframes scrollAnim {
// //           0% { transform: translateY(-20px); }
// //           100% { transform: translateY(60px); }
// //         }

// //         /* ── Large Desktops (1400px+) ── */
// //         @media (min-width: 1400px) {
// //           .hero-content {
// //             padding: 100px 8% 60px;
// //           }
// //           .hero-runner {
// //             max-width: 45%;
// //           }
// //           .hero-stats {
// //             padding: 0 4%;
// //           }
// //         }

// //         /* ── Desktop (1200px - 1399px) ── */
// //         @media (max-width: 1399px) {
// //           .hero-content {
// //             padding: 80px 6% 40px;
// //             gap: 30px;
// //           }
// //           .hero-title {
// //             font-size: clamp(5rem, 10vw, 11rem);
// //           }
// //           .hero-runner {
// //             height: clamp(250px, 70vh, 80vh);
// //             right: 4%;
// //             max-width: 45%;
// //           }
// //         }

// //         /* ── Tablet Landscape (1024px - 1199px) ── */
// //         @media (max-width: 1199px) {
// //           .hero-content {
// //             padding: 70px 5% 35px;
// //           }
// //           .hero-runner {
// //             height: clamp(250px, 65vh, 75vh);
// //             right: 2%;
// //             max-width: 40%;
// //           }
// //           .hero-title {
// //             font-size: clamp(4.5rem, 9vw, 10rem);
// //           }
// //           .hero-stats {
// //             flex-wrap: wrap;
// //           }
// //           .hero-stat {
// //             flex: 1 1 25%;
// //             min-width: 140px;
// //           }
// //           .hero-stat:nth-child(2) {
// //             border-right: 1px solid rgba(255,255,255,0.06);
// //           }
// //           .hero-stat:nth-child(4) {
// //             border-right: none;
// //           }
// //         }

// //         /* ── Tablet Portrait (768px - 1023px) ── */
// //         @media (max-width: 1023px) {
// //           .hero-section {
// //             min-height: 100dvh;
// //             height: auto;
// //           }
// //           .hero-content {
// //             flex-direction: column;
// //             justify-content: center;
// //             padding: 60px 5% 40px;
// //             gap: 30px;
// //           }
// //           .hero-left {
// //             max-width: 100%;
// //             width: 100%;
// //             text-align: center;
// //           }
// //           .hero-accent-line {
// //             margin: 0 auto 24px;
// //             transform-origin: center;
// //           }
// //           .hero-cta-group {
// //             justify-content: center;
// //           }
// //           .hero-runner {
// //             position: relative;
// //             right: auto;
// //             bottom: auto;
// //             top: auto;
// //             height: clamp(200px, 40vh, 350px);
// //             width: 100%;
// //             max-width: 80%;
// //             margin: 0 auto;
// //             flex-shrink: 0;
// //             pointer-events: auto;
// //           }
// //           .hero-runner img {
// //             width: 100%;
// //             max-width: 100%;
// //             object-position: center;
// //           }
// //           .hero-title {
// //             font-size: clamp(3.5rem, 8vw, 6rem);
// //             align-items: center;
// //           }
// //           .hero-sub {
// //             font-size: 0.95rem;
// //             margin-bottom: 24px;
// //           }
// //           .hero-stats {
// //             flex-wrap: wrap;
// //           }
// //           .hero-stat {
// //             flex: 1 1 25%;
// //             min-width: 120px;
// //           }
// //           .scroll-indicator {
// //             bottom: 20px;
// //           }
// //         }

// //         /* ── Mobile Large (600px - 767px) ── */
// //         @media (max-width: 767px) {
// //           .hero-section {
// //             height: auto;
// //             min-height: 100dvh;
// //           }
// //           .hero-content {
// //             padding: 50px 4% 30px;
// //             gap: 20px;
// //           }
// //           .hero-runner {
// //             height: clamp(180px, 45vw, 300px);
// //             max-width: 90%;
// //           }
// //           .hero-title {
// //             font-size: clamp(2.5rem, 7vw, 4rem);
// //             margin-bottom: 16px;
// //           }
// //           .hero-sub {
// //             font-size: 0.9rem;
// //             margin-bottom: 20px;
// //             line-height: 1.6;
// //           }
// //           .hero-cta-group {
// //             flex-direction: column;
// //             align-items: center;
// //             gap: 16px;
// //             width: 100%;
// //           }
// //           .hero-btn {
// //             width: 80%;
// //             text-align: center;
// //           }
// //           .scroll-indicator {
// //             display: none;
// //           }
// //           .hero-stats {
// //             flex-direction: column;
// //           }
// //           .hero-stat {
// //             flex: 1 1 100%;
// //             border-right: none;
// //             border-bottom: 1px solid rgba(255,255,255,0.06);
// //             padding: 18px 0;
// //           }
// //           .hero-stat:last-child {
// //             border-bottom: none;
// //           }
// //           .hero-accent-line {
// //             width: 50px;
// //           }
// //           .hero-grid {
// //             padding: 0 4%;
// //           }
// //         }

// //         /* ── Mobile Medium (480px - 599px) ── */
// //         @media (max-width: 599px) {
// //           .hero-content {
// //             padding: 40px 3% 25px;
// //           }
// //           .hero-runner {
// //             height: clamp(150px, 40vw, 250px);
// //             max-width: 95%;
// //           }
// //           .hero-accent-line {
// //             width: 40px;
// //             margin-bottom: 16px;
// //           }
// //           .hero-eyebrow {
// //             font-size: 0.65rem;
// //             letter-spacing: 3px;
// //             margin-bottom: 12px;
// //           }
// //           .hero-title {
// //             font-size: clamp(2rem, 6vw, 3.5rem);
// //             margin-bottom: 14px;
// //             line-height: 0.92;
// //           }
// //           .hero-sub {
// //             font-size: 0.85rem;
// //             margin-bottom: 20px;
// //           }
// //           .hero-btn {
// //             width: 90%;
// //             padding: 14px 24px;
// //             font-size: 0.8rem;
// //           }
// //           .hero-link {
// //             font-size: 0.75rem;
// //           }
// //         }

// //         /* ── Mobile Small (320px - 479px) ── */
// //         @media (max-width: 479px) {
// //           .hero-content {
// //             padding: 30px 2% 20px;
// //           }
// //           .hero-runner {
// //             height: clamp(120px, 35vw, 200px);
// //           }
// //           .hero-accent-line {
// //             width: 30px;
// //             margin-bottom: 12px;
// //           }
// //           .hero-eyebrow {
// //             font-size: 0.6rem;
// //             letter-spacing: 2px;
// //             margin-bottom: 10px;
// //           }
// //           .hero-title {
// //             font-size: clamp(1.6rem, 5vw, 2.5rem);
// //             margin-bottom: 12px;
// //           }
// //           .hero-sub {
// //             font-size: 0.8rem;
// //             margin-bottom: 16px;
// //             line-height: 1.5;
// //           }
// //           .hero-btn {
// //             width: 100%;
// //             padding: 12px 20px;
// //             font-size: 0.75rem;
// //           }
// //           .hero-stat-num {
// //             font-size: 1.5rem;
// //           }
// //           .hero-stat-label {
// //             font-size: 0.6rem;
// //             letter-spacing: 2px;
// //           }
// //           .hero-grid {
// //             padding: 0 3%;
// //           }
// //         }

// //         /* ── Landscape mode for mobile ── */
// //         @media (max-height: 500px) and (orientation: landscape) {
// //           .hero-section {
// //             min-height: 100vh;
// //           }
// //           .hero-content {
// //             flex-direction: row;
// //             padding: 20px 4%;
// //             gap: 20px;
// //             align-items: center;
// //           }
// //           .hero-runner {
// //             height: 60vh;
// //             max-width: 35%;
// //             position: relative;
// //             right: auto;
// //           }
// //           .hero-title {
// //             font-size: clamp(2rem, 8vh, 4rem);
// //             margin-bottom: 8px;
// //           }
// //           .hero-sub {
// //             margin-bottom: 12px;
// //             font-size: 0.7rem;
// //           }
// //           .hero-stats {
// //             flex-direction: row;
// //             padding: 8px 0;
// //           }
// //           .hero-stat {
// //             padding: 8px 10px;
// //           }
// //           .scroll-indicator {
// //             display: none;
// //           }
// //         }

// //         /* ── High-DPI screens ── */
// //         @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
// //           .hero-bg-img {
// //             image-rendering: -webkit-optimize-contrast;
// //           }
// //         }

// //         /* ── Reduced motion preferences ── */
// //         @media (prefers-reduced-motion: reduce) {
// //           .scroll-dot {
// //             animation: none;
// //           }
// //           .hero-link-arrow {
// //             transition: none;
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }









// import { useEffect, useRef } from 'react';

// // If you are using GSAP, ensure it's imported at the top of your file
// // import gsap from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//   const heroRef = useRef(null);
//   const textRef = useRef(null);
//   const athleteRef = useRef(null);
//   const lineRef = useRef(null);
//   const statsRef = useRef(null);
//   const scrollIndicatorRef = useRef(null);

//   useEffect(() => {
//     // Prevent horizontal scroll
//     document.body.style.overflowX = 'hidden';
    
//     // GSAP animations
//     const ctx = gsap.context(() => {
//       // Entrance animations
//       const tl = gsap.timeline({ delay: 0.2 });
//       tl.from(lineRef.current, { scaleX: 0, duration: 1, ease: 'power3.out' })
//         .from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.4')
//         .from('.hero-word', { opacity: 0, y: 60, duration: 1, ease: 'power3.out', stagger: 0.12 }, '-=0.5')
//         .from('.hero-sub', { opacity: 0, y: 20, duration: 0.8 }, '-=0.4')
//         .from('.hero-cta-group', { opacity: 0, y: 20, duration: 0.7 }, '-=0.3')
//         .from(athleteRef.current, { opacity: 0, x: 50, duration: 1.2, ease: 'power3.out' }, '-=0.8')
//         .from(statsRef.current, { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
//         .from(scrollIndicatorRef.current, { opacity: 0, duration: 0.6 }, '-=0.2');

//       // Scroll-based animation for the athlete (slight fade and scale out instead of radical shifting)
//       gsap.to(athleteRef.current, {
//         x: '20%', 
//         opacity: 0,
//         scale: 0.95,
//         ease: 'power1.inOut',
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: 1.5,
//         }
//       });

//       // Parallax upward drift
//       gsap.to(athleteRef.current, {
//         y: '5%',
//         ease: 'none',
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: 1,
//         }
//       });

//       // Fade out left content slightly as user scrolls
//       gsap.to('.hero-left', {
//         opacity: 0.3,
//         y: -30,
//         ease: 'power2.inOut',
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: 1,
//         }
//       });

//       // Stats strip animation
//       gsap.to(statsRef.current, {
//         opacity: 0,
//         y: 20,
//         ease: 'power2.inOut',
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: 1,
//         }
//       });

//       // Scroll indicator fades out quickly
//       gsap.to(scrollIndicatorRef.current, {
//         opacity: 0,
//         y: -20,
//         ease: 'power2.in',
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top top',
//           end: '20% top',
//           scrub: 0.5,
//         }
//       });

//     }, heroRef);

//     // Prevent horizontal scroll from mouse wheel
//     const preventHorizontalScroll = (e) => {
//       if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
//         e.preventDefault();
//       }
//     };

//     window.addEventListener('wheel', preventHorizontalScroll, { passive: false });

//     return () => {
//       ctx.revert();
//       document.body.style.overflowX = '';
//       window.removeEventListener('wheel', preventHorizontalScroll);
//     };
//   }, []);

//   return (
//     <section ref={heroRef} className="hero-section">
//       {/* Background */}
//       <div className="hero-bg">
//         <img className="hero-bg-img" src="/gym-bg.png" alt="" aria-hidden="true" />
//         <div className="hero-bg-overlay" />
//         <div className="hero-bg-vignette" />
//       </div>

//       {/* Grid lines decoration */}
//       <div className="hero-grid" aria-hidden="true">
//         {[...Array(6)].map((_, i) => <div key={i} className="hero-grid-line" />)}
//       </div>

//       {/* Main content */}
//       <div className="hero-content">
//         <div className="hero-left">
//           <div ref={lineRef} className="hero-accent-line" />
//           <p className="hero-eyebrow">EST. 2018 &nbsp;·&nbsp; NEW YORK</p>
//           <h1 className="hero-title">
//             <span className="hero-word">UNLOCK</span>
//             <span className="hero-word hero-word--outline">YOUR</span>
//             <span className="hero-word hero-word--accent">LIMIT</span>
//           </h1>
//           <p className="hero-sub">Elite training. Data-driven coaching.<br />The city's finest fitness sanctuary.</p>
//           <div className="hero-cta-group">
//             <button className="btn-primary hero-btn">Start Training</button>
//             <a href="/classes" className="hero-link">
//               View Schedule <span className="hero-link-arrow">→</span>
//             </a>
//           </div>
//         </div>

//         {/* Athlete Image Container */}
//         <div ref={athleteRef} className="hero-athlete">
//           <img
//             src="/hero-athlete.png"
//             alt="Elite athlete performing a deadlift"
//           />
//         </div>
//       </div>

//       {/* Bottom stat strip */}
//       <div ref={statsRef} className="hero-stats">
//         {[['15K+', 'Members'], ['250+', 'Trainers'], ['98%', 'Satisfaction'], ['24/7', 'Access']].map(([num, label]) => (
//           <div key={label} className="hero-stat">
//             <span className="hero-stat-num">{num}</span>
//             <span className="hero-stat-label">{label}</span>
//           </div>
//         ))}
//       </div>

//       {/* Scroll indicator */}
//       <div ref={scrollIndicatorRef} className="scroll-indicator" aria-hidden="true">
//         <span>SCROLL</span>
//         <div className="scroll-line"><div className="scroll-dot" /></div>
//       </div>

//       <style jsx>{`
//         .hero-section {
//           position: relative;
//           height: auto;
//           min-height: 100vh;
//           min-height: 100dvh;
//           width: 100%;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           background: #050506;
//           -webkit-overflow-scrolling: touch;
//           will-change: transform;
//         }
        
//         /* Prevent text selection */
//         .hero-section * {
//           -webkit-user-select: none;
//           -moz-user-select: none;
//           -ms-user-select: none;
//           user-select: none;
//         }
        
//         /* Allow text selection for content */
//         .hero-eyebrow, 
//         .hero-word, 
//         .hero-sub, 
//         .hero-stat-label, 
//         .hero-stat-num {
//           -webkit-user-select: text;
//           -moz-user-select: text;
//           -ms-user-select: text;
//           user-select: text;
//         }
        
//         /* Prevent image dragging */
//         img {
//           -webkit-user-drag: none;
//           -khtml-user-drag: none;
//           -moz-user-drag: none;
//           -o-user-drag: none;
//           user-drag: none;
//         }
        
//         .hero-bg {
//           position: absolute;
//           inset: 0;
//           z-index: 1;
//         }
//         .hero-bg-img {
//           width: 100%; height: 100%;
//           object-fit: cover;
//           object-position: center 30%;
//           opacity: 0.35;
//         }
//         .hero-bg-overlay {
//           position: absolute; inset: 0;
//           background: linear-gradient(105deg, rgba(5,5,6,0.96) 0%, rgba(5,5,6,0.5) 50%, rgba(5,5,6,0.2) 100%);
//         }
//         .hero-bg-vignette {
//           position: absolute; inset: 0;
//           background: radial-gradient(ellipse at center, transparent 40%, rgba(5,5,6,0.7) 100%);
//         }
//         .hero-grid {
//           position: absolute; inset: 0; z-index: 2;
//           display: flex;
//           padding: 0 6%;
//           pointer-events: none;
//         }
//         .hero-grid-line {
//           flex: 1;
//           border-left: 1px solid rgba(255,255,255,0.03);
//         }
//         .hero-content {
//           position: relative;
//           z-index: 4;
//           flex: 1;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 100px 6% 40px;
//           max-width: 1500px;
//           width: 100%;
//           margin: 0 auto;
//           gap: 20px;
//           will-change: transform;
//         }
//         .hero-left {
//           flex: 1.2;
//           max-width: 680px;
//           z-index: 5;
//         }
//         .hero-accent-line {
//           width: 60px;
//           height: 2px;
//           background: var(--primary, #C8F542);
//           margin-bottom: 24px;
//           transform-origin: left;
//         }
//         .hero-eyebrow {
//           font-family: var(--font-body);
//           font-size: 0.72rem;
//           font-weight: 700;
//           letter-spacing: 5px;
//           text-transform: uppercase;
//           color: var(--primary, #C8F542);
//           margin-bottom: 20px;
//           display: block;
//         }
//         .hero-title {
//           display: flex;
//           flex-direction: column;
//           font-family: var(--font-display);
//           font-size: clamp(4.5rem, 10vw, 11rem);
//           font-weight: 400;
//           line-height: 0.88;
//           letter-spacing: -1px;
//           margin-bottom: 32px;
//           overflow: visible;
//         }
//         .hero-word {
//           display: block;
//           color: var(--text-white, #ffffff);
//         }
//         .hero-word--outline {
//           -webkit-text-stroke: 1px rgba(240, 237, 232, 0.4);
//           color: transparent;
//         }
//         .hero-word--accent {
//           color: var(--primary, #C8F542);
//         }
//         .hero-sub {
//           font-family: var(--font-body);
//           font-size: 1rem;
//           font-weight: 300;
//           color: var(--text-gray, #a0a0a5);
//           line-height: 1.8;
//           margin-bottom: 44px;
//           letter-spacing: 0.5px;
//         }
//         .hero-cta-group {
//           display: flex;
//           align-items: center;
//           gap: 36px;
//         }
//         .hero-btn { font-size: 0.82rem; padding: 16px 40px; }
//         .hero-link {
//           font-family: var(--font-body);
//           font-size: 0.82rem;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           color: var(--text-gray, #a0a0a5);
//           text-decoration: none;
//           transition: color 0.3s;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }
//         .hero-link:hover { color: var(--text-white, #ffffff); }
//         .hero-link-arrow {
//           display: inline-block;
//           transition: transform 0.3s ease;
//         }
//         .hero-link:hover .hero-link-arrow {
//           transform: translateX(6px);
//         }
        
//         /* Optimized for the Deadlift Aspect Ratio */
//         .hero-athlete {
//           position: absolute;
//           right: 2%;
//           bottom: 60px;
//           height: clamp(300px, 68vh, 76vh);
//           width: auto;
//           pointer-events: none;
//           z-index: 3;
//           max-width: 55%;
//           display: flex;
//           align-items: flex-end;
//           will-change: transform, opacity;
//           transition: none;
//         }
//         .hero-athlete img {
//           height: 100%;
//           width: auto;
//           object-fit: contain;
//           object-position: right bottom;
//           display: block;
//           max-width: 100%;
//           filter: brightness(1.1) contrast(1.05) drop-shadow(0 0 50px rgba(200,245,66,0.15));
//         }
        
//         .hero-stats {
//           position: relative;
//           z-index: 4;
//           display: flex;
//           border-top: 1px solid rgba(255,255,255,0.06);
//           background: rgba(5,5,6,0.6);
//           backdrop-filter: blur(20px);
//         }
//         .hero-stat {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 24px 20px;
//           border-right: 1px solid rgba(255,255,255,0.06);
//           gap: 4px;
//           transition: background 0.3s;
//         }
//         .hero-stat:last-child { border-right: none; }
//         .hero-stat:hover { background: rgba(200,245,66,0.04); }
//         .hero-stat-num {
//           font-family: var(--font-display);
//           font-size: 2rem;
//           letter-spacing: 2px;
//           color: var(--primary, #C8F542);
//           line-height: 1;
//         }
//         .hero-stat-label {
//           font-family: var(--font-body);
//           font-size: 0.65rem;
//           font-weight: 700;
//           letter-spacing: 3px;
//           text-transform: uppercase;
//           color: var(--text-gray, #a0a0a5);
//         }
//         .scroll-indicator {
//           position: absolute;
//           left: 6%;
//           bottom: 120px;
//           z-index: 5;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 12px;
//         }
//         .scroll-indicator span {
//           font-family: var(--font-body);
//           font-size: 0.6rem;
//           font-weight: 700;
//           letter-spacing: 4px;
//           text-transform: uppercase;
//           color: var(--text-gray, #a0a0a5);
//           writing-mode: vertical-rl;
//         }
//         .scroll-line {
//           width: 1px;
//           height: 60px;
//           background: rgba(255,255,255,0.1);
//           position: relative;
//           overflow: hidden;
//         }
//         .scroll-dot {
//           width: 1px;
//           height: 20px;
//           background: var(--primary, #C8F542);
//           animation: scrollAnim 2s ease-in-out infinite;
//         }
//         @keyframes scrollAnim {
//           0% { transform: translateY(-20px); }
//           100% { transform: translateY(60px); }
//         }

//         /* ── Screen Breakpoint Optimizations ── */
//         @media (min-width: 1400px) {
//           .hero-content { padding: 120px 8% 60px; }
//           .hero-athlete { max-width: 50%; right: 4%; }
//         }

//         @media (max-width: 1399px) {
//           .hero-title { font-size: clamp(4rem, 9vw, 9.5rem); }
//           .hero-athlete { height: clamp(280px, 62vh, 70vh); right: 2%; }
//         }

//         @media (max-width: 1199px) {
//           .hero-content { padding: 90px 5% 35px; }
//           .hero-athlete { height: clamp(260px, 55vh, 65vh); max-width: 48%; }
//           .hero-stats { flex-wrap: wrap; }
//           .hero-stat { flex: 1 1 25%; min-width: 140px; }
//           .hero-stat:nth-child(2) { border-right: 1px solid rgba(255,255,255,0.06); }
//           .hero-stat:nth-child(4) { border-right: none; }
//         }

//         /* Responsive Layout Switch for Tablets/Mobile */
//         @media (max-width: 1023px) {
//           .hero-section { height: auto; min-height: 100dvh; }
//           .hero-content { flex-direction: column; justify-content: center; padding: 100px 5% 40px; gap: 40px; }
//           .hero-left { max-width: 100%; width: 100%; text-align: center; }
//           .hero-accent-line { margin: 0 auto 24px; transform-origin: center; }
//           .hero-cta-group { justify-content: center; }
//           .hero-title { align-items: center; font-size: clamp(3.5rem, 8vw, 6rem); }
          
//           .hero-athlete {
//             position: relative;
//             right: auto;
//             bottom: auto;
//             height: clamp(220px, 38vh, 340px);
//             width: 100%;
//             max-width: 85%;
//             margin: 0 auto;
//             pointer-events: auto;
//           }
//           .hero-athlete img { object-position: center; margin: 0 auto; }
//           .scroll-indicator { bottom: 20px; }
//         }

//         @media (max-width: 767px) {
//           .hero-content { padding: 80px 4% 30px; gap: 30px; }
//           .hero-sub { font-size: 0.9rem; margin-bottom: 24px; }
//           .hero-cta-group { flex-direction: column; gap: 16px; width: 100%; }
//           .hero-btn { width: 80%; text-align: center; }
//           .scroll-indicator { display: none; }
//           .hero-stats { flex-direction: column; }
//           .hero-stat { flex: 1 1 100%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 18px 0; }
//           .hero-stat:last-child { border-bottom: none; }
//         }

//         @media (max-width: 479px) {
//           .hero-title { font-size: clamp(2.2rem, 7vw, 3.5rem); }
//           .hero-btn { width: 100%; }
//         }
//       `}</style>
//     </section>
//   );
// }

// /* ─── Premium Experience Section ─────────────────────── */
// function PremiumSection() {
//   const items = [
//     {
//       num: '01',
//       title: 'Advanced Equipment',
//       desc: 'Smart machines tracking your every rep. Biomechanics-optimized stations built for elite performance.',
//       img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=900',
//     },
//     {
//       num: '02',
//       title: 'Elite Community',
//       desc: 'Connect with like-minded individuals pushing their absolute limits, every single day.',
//       img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=900',
//     },
//     {
//       num: '03',
//       title: 'Expert Coaching',
//       desc: 'Data-driven routines designed specifically around your body, goals, and recovery capacity.',
//       img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900',
//     },
//   ];

//   return (
//     <section className="page-section premium-section">
//       <div className="section-header reveal">
//         <span className="section-label">The Experience</span>
//         <h2>PREMIER<br/>STANDARD</h2>
//         <p>State-of-the-art facilities with uncompromising design.</p>
//       </div>

//       <div className="premium-grid">
//         {items.map((item, i) => (
//           <div key={i} className={`premium-card reveal reveal-delay-${i + 1}`}>
//             <div className="premium-card-img" style={{ backgroundImage: `url(${item.img})` }}>
//               <div className="premium-card-overlay" />
//               <span className="premium-card-num">{item.num}</span>
//             </div>
//             <div className="premium-card-body">
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//               <a href="/services" className="premium-more">
//                 Explore <span>→</span>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         .premium-section {
//           background: var(--bg-end);
//         }
//         .premium-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 2px;
//           max-width: 1400px;
//           margin: 0 auto;
//         }
//         .premium-card {
//           background: rgba(255,255,255,0.015);
//           border: 1px solid rgba(255,255,255,0.05);
//           overflow: hidden;
//           transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//           position: relative;
//         }
//         .premium-card::after {
//           content: '';
//           position: absolute;
//           bottom: 0; left: 0;
//           width: 100%; height: 2px;
//           background: var(--primary);
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
//         }
//         .premium-card:hover::after { transform: scaleX(1); }
//         .premium-card:hover {
//           transform: translateY(-10px);
//           border-color: rgba(200,245,66,0.15);
//           box-shadow: 0 40px 80px rgba(0,0,0,0.7);
//           z-index: 1;
//         }
//         .premium-card-img {
//           height: 280px;
//           background-size: cover;
//           background-position: center;
//           position: relative;
//           overflow: hidden;
//           transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
//         }
//         .premium-card:hover .premium-card-img {
//           transform: scale(1.04);
//         }
//         .premium-card-overlay {
//           position: absolute; inset: 0;
//           background: linear-gradient(to bottom, transparent 40%, rgba(5,5,6,0.9));
//         }
//         .premium-card-num {
//           position: absolute;
//           top: 20px; right: 20px;
//           font-family: var(--font-display);
//           font-size: 1rem;
//           letter-spacing: 2px;
//           color: var(--primary);
//           opacity: 0.7;
//         }
//         .premium-card-body {
//           padding: 36px;
//         }
//         .premium-card-body h3 {
//           font-family: var(--font-display);
//           font-size: 1.6rem;
//           letter-spacing: 2px;
//           font-weight: 400;
//           color: var(--text-white);
//           margin-bottom: 14px;
//         }
//         .premium-card-body p {
//           color: var(--text-gray);
//           font-size: 0.9rem;
//           line-height: 1.7;
//           font-weight: 300;
//           margin-bottom: 24px;
//         }
//         .premium-more {
//           font-family: var(--font-body);
//           font-size: 0.75rem;
//           font-weight: 700;
//           letter-spacing: 3px;
//           text-transform: uppercase;
//           color: var(--primary);
//           text-decoration: none;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           transition: gap 0.3s;
//         }
//         .premium-more:hover { gap: 14px; }
//         @media (max-width: 900px) {
//           .premium-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>
//     </section>
//   );
// }

// /* ─── Trainers Preview ────────────────────────────────── */
// function TrainersSection() {
//   const trainers = [
//     { name: 'Alex Sterling', role: 'Head Coach & Strength', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800' },
//     { name: 'Sarah Jenkins', role: 'HIIT & Conditioning', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800' },
//     { name: 'Mike Chen', role: 'Mobility & Yoga', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800' },
//   ];

//   return (
//     <section className="page-section trainers-section">
//       <div className="trainers-inner">
//         <div className="trainers-header reveal">
//           <span className="section-label">Our Coaches</span>
//           <h2>WORLD-CLASS<br/>TRAINERS</h2>
//           <p>Industry veterans dedicated to your transformation.</p>
//           <a href="/trainers" className="btn-outline" style={{ marginTop: '32px', display: 'inline-block' }}>Meet the Team</a>
//         </div>

//         <div className="trainers-stack">
//           {trainers.map((t, i) => (
//             <div key={i} className={`trainer-item reveal reveal-delay-${i + 1}`}>
//               <div className="trainer-img-wrap">
//                 <div className="trainer-img" style={{ backgroundImage: `url(${t.img})` }} />
//               </div>
//               <div className="trainer-meta">
//                 <span className="trainer-role">{t.role}</span>
//                 <h3>{t.name}</h3>
//               </div>
//               <div className="trainer-num">{String(i + 1).padStart(2, '0')}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .trainers-section {
//           background: var(--secondary);
//           border-top: 1px solid rgba(255,255,255,0.04);
//         }
//         .trainers-inner {
//           max-width: 1400px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: 340px 1fr;
//           gap: 80px;
//           align-items: center;
//           width: 100%;
//         }
//         .trainers-header h2 {
//           font-family: var(--font-display);
//           font-size: clamp(3rem, 5vw, 5rem);
//           line-height: 0.92;
//           letter-spacing: 3px;
//           color: var(--text-white);
//           margin-bottom: 16px;
//         }
//         .trainers-header p {
//           color: var(--text-gray);
//           font-size: 0.95rem;
//           font-weight: 300;
//         }
//         .trainers-stack {
//           display: flex;
//           flex-direction: column;
//           gap: 2px;
//         }
//         .trainer-item {
//           display: flex;
//           align-items: center;
//           gap: 24px;
//           padding: 24px 28px;
//           background: rgba(255,255,255,0.015);
//           border: 1px solid rgba(255,255,255,0.05);
//           transition: all 0.4s ease;
//           position: relative;
//           overflow: hidden;
//           cursor: none;
//         }
//         .trainer-item::before {
//           content: '';
//           position: absolute;
//           left: 0; top: 0; bottom: 0;
//           width: 2px;
//           background: var(--primary);
//           transform: scaleY(0);
//           transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//         }
//         .trainer-item:hover::before { transform: scaleY(1); }
//         .trainer-item:hover {
//           background: rgba(200,245,66,0.03);
//           border-color: rgba(200,245,66,0.12);
//           transform: translateX(8px);
//         }
//         .trainer-img-wrap {
//           width: 64px; height: 64px;
//           border-radius: 50%;
//           overflow: hidden;
//           flex-shrink: 0;
//           border: 2px solid rgba(200,245,66,0.2);
//         }
//         .trainer-img {
//           width: 100%; height: 100%;
//           background-size: cover;
//           background-position: center top;
//           transition: transform 0.5s ease;
//         }
//         .trainer-item:hover .trainer-img { transform: scale(1.1); }
//         .trainer-meta {
//           flex: 1;
//         }
//         .trainer-role {
//           display: block;
//           font-size: 0.68rem;
//           font-weight: 700;
//           letter-spacing: 3px;
//           text-transform: uppercase;
//           color: var(--primary);
//           margin-bottom: 4px;
//         }
//         .trainer-meta h3 {
//           font-family: var(--font-display);
//           font-size: 1.4rem;
//           letter-spacing: 2px;
//           font-weight: 400;
//           color: var(--text-white);
//         }
//         .trainer-num {
//           font-family: var(--font-display);
//           font-size: 1.5rem;
//           color: rgba(255,255,255,0.06);
//           letter-spacing: 1px;
//           transition: color 0.3s;
//         }
//         .trainer-item:hover .trainer-num {
//           color: rgba(200,245,66,0.2);
//         }
//         @media (max-width: 1024px) {
//           .trainers-inner { grid-template-columns: 1fr; }
//         }
//       `}</style>
//     </section>
//   );
// }

// /* ─── Pricing Section ─────────────────────────────────── */
// // function PricingSection() {
// //   return (
// //     <section className="page-section pricing-section">
// //       <div className="section-header reveal">
// //         <span className="section-label">Membership</span>
// //         <h2>CHOOSE YOUR<br/>TIER</h2>
// //         <p>Invest in excellence. Cancel anytime.</p>
// //       </div>

// //       <div className="pricing-grid">
// //         <div className="pricing-card reveal reveal-delay-1">
// //           <div className="pricing-card-header">
// //             <span className="pricing-tier">Standard</span>
// //             <div className="pricing-price"><span className="pricing-num">$49</span><span className="pricing-per">/mo</span></div>
// //           </div>
// //           <ul className="pricing-features">
// //             <li>Full Gym Access</li>
// //             <li>Locker Room</li>
// //             <li>1 Free Assessment</li>
// //             <li>App Access</li>
// //           </ul>
// //           <button className="btn-outline" style={{ width: '100%', padding: '16px', textAlign: 'center' }}>Select Plan</button>
// //         </div>

// //         <div className="pricing-card pricing-card--featured reveal reveal-delay-2">
// //           <div className="pricing-badge">MOST POPULAR</div>
// //           <div className="pricing-card-header">
// //             <span className="pricing-tier">Premium</span>
// //             <div className="pricing-price"><span className="pricing-num pricing-num--white">$89</span><span className="pricing-per">/mo</span></div>
// //           </div>
// //           <ul className="pricing-features">
// //             <li>Everything in Standard</li>
// //             <li>Unlimited Classes</li>
// //             <li>Sauna & Spa Access</li>
// //             <li>Monthly Body Scan</li>
// //             <li>Priority Booking</li>
// //           </ul>
// //           <button className="btn-primary" style={{ width: '100%', padding: '16px' }}>Select Plan</button>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .pricing-section {
// //           background: var(--bg-end);
// //           border-top: 1px solid rgba(255,255,255,0.04);
// //         }
// //         .pricing-grid {
// //           display: flex;
// //           gap: 2px;
// //           max-width: 900px;
// //           margin: 0 auto;
// //         }
// //         .pricing-card {
// //           flex: 1;
// //           padding: 52px 44px;
// //           background: rgba(255,255,255,0.02);
// //           border: 1px solid rgba(255,255,255,0.07);
// //           display: flex;
// //           flex-direction: column;
// //           gap: 32px;
// //           position: relative;
// //           transition: all 0.4s ease;
// //         }
// //         .pricing-card:hover {
// //           background: rgba(255,255,255,0.035);
// //         }
// //         .pricing-card--featured {
// //           background: rgba(200,245,66,0.04);
// //           border-color: rgba(200,245,66,0.25);
// //         }
// //         .pricing-card--featured:hover {
// //           background: rgba(200,245,66,0.06);
// //         }
// //         .pricing-badge {
// //           position: absolute;
// //           top: -1px; left: 50%;
// //           transform: translateX(-50%);
// //           background: var(--primary);
// //           color: #000;
// //           font-family: var(--font-body);
// //           font-size: 0.65rem;
// //           font-weight: 800;
// //           letter-spacing: 3px;
// //           padding: 5px 18px;
// //         }
// //         .pricing-card-header {}
// //         .pricing-tier {
// //           display: block;
// //           font-family: var(--font-body);
// //           font-size: 0.72rem;
// //           font-weight: 700;
// //           letter-spacing: 4px;
// //           text-transform: uppercase;
// //           color: var(--text-gray);
// //           margin-bottom: 12px;
// //         }
// //         .pricing-price {
// //           display: flex;
// //           align-items: baseline;
// //           gap: 4px;
// //         }
// //         .pricing-num {
// //           font-family: var(--font-display);
// //           font-size: 4.5rem;
// //           letter-spacing: 2px;
// //           color: var(--primary);
// //           line-height: 1;
// //         }
// //         .pricing-num--white {
// //           color: var(--text-white);
// //         }
// //         .pricing-per {
// //           font-size: 0.9rem;
// //           color: var(--text-gray);
// //           font-weight: 300;
// //         }
// //         .pricing-features {
// //           list-style: none;
// //           flex: 1;
// //           display: flex;
// //           flex-direction: column;
// //           gap: 14px;
// //         }
// //         .pricing-features li {
// //           font-size: 0.9rem;
// //           color: var(--text-gray);
// //           font-weight: 300;
// //           padding-left: 20px;
// //           position: relative;
// //         }
// //         .pricing-features li::before {
// //           content: '—';
// //           position: absolute;
// //           left: 0;
// //           color: var(--primary);
// //           font-size: 0.8rem;
// //         }
// //         @media (max-width: 640px) {
// //           .pricing-grid { flex-direction: column; }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }



// function PricingSection() {
//   return (
//     <section className="page-section pricing-section">
//       <div className="section-header reveal">
//         <span className="section-label">Membership</span>
//         <h2>CHOOSE YOUR<br/>TIER</h2>
//         <p>Invest in excellence. Cancel anytime.</p>
//       </div>

//       <div className="pricing-grid">
//         <div className="pricing-card reveal reveal-delay-1">
//           <div className="pricing-card-header">
//             <span className="pricing-tier">Standard</span>
//             <div className="pricing-price"><span className="pricing-num">$49</span><span className="pricing-per">/mo</span></div>
//           </div>
//           <ul className="pricing-features">
//             <li>Full Gym Access</li>
//             <li>Locker Room</li>
//             <li>1 Free Assessment</li>
//             <li>App Access</li>
//           </ul>
//           <button className="btn-outline" style={{ width: '100%', padding: '16px', textAlign: 'center' }}>Select Plan</button>
//         </div>

//         <div className="pricing-card pricing-card--featured reveal reveal-delay-2">
//           <div className="pricing-badge">MOST POPULAR</div>
//           <div className="pricing-card-header">
//             <span className="pricing-tier">Premium</span>
//             <div className="pricing-price"><span className="pricing-num pricing-num--white">$89</span><span className="pricing-per">/mo</span></div>
//           </div>
//           <ul className="pricing-features">
//             <li>Everything in Standard</li>
//             <li>Unlimited Classes</li>
//             <li>Sauna & Spa Access</li>
//             <li>Monthly Body Scan</li>
//             <li>Priority Booking</li>
//           </ul>
//           <button className="btn-primary" style={{ width: '100%', padding: '16px' }}>Select Plan</button>
//         </div>

//         <div className="pricing-card pricing-card--elite reveal reveal-delay-3">
//           <div className="pricing-badge pricing-badge--elite">ELITE</div>
//           <div className="pricing-card-header">
//             <span className="pricing-tier">Elite</span>
//             <div className="pricing-price"><span className="pricing-num pricing-num--accent">$119</span><span className="pricing-per">/mo</span></div>
//           </div>
//           <ul className="pricing-features">
//             <li>Everything in Premium</li>
//             <li>Personal Trainer (2x/week)</li>
//             <li>Nutrition Planning</li>
//             <li>Weekly Body Scan</li>
//             <li>VIP Locker</li>
//             <li>Guest Passes (4/mo)</li>
//             <li>Exclusive Events</li>
//           </ul>
//           <button className="btn-primary btn-primary--elite" style={{ width: '100%', padding: '16px' }}>Select Plan</button>
//         </div>
//       </div>

//       <style jsx>{`
//         .pricing-section {
//           background: var(--bg-end);
//           border-top: 1px solid rgba(255,255,255,0.04);
//         }
//         .pricing-grid {
//           display: flex;
//           gap: 2px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .pricing-card {
//           flex: 1;
//           padding: 52px 44px;
//           background: rgba(255,255,255,0.02);
//           border: 1px solid rgba(255,255,255,0.07);
//           display: flex;
//           flex-direction: column;
//           gap: 32px;
//           position: relative;
//           transition: all 0.4s ease;
//         }
//         .pricing-card:hover {
//           background: rgba(255,255,255,0.035);
//           transform: translateY(-4px);
//         }
//         .pricing-card--featured {
//           background: rgba(200,245,66,0.04);
//           border-color: rgba(200,245,66,0.25);
//         }
//         .pricing-card--featured:hover {
//           background: rgba(200,245,66,0.06);
//         }
//         .pricing-card--elite {
//           background: rgba(200,245,66,0.02);
//           border-color: rgba(200,245,66,0.15);
//         }
//         .pricing-card--elite:hover {
//           background: rgba(200,245,66,0.04);
//           border-color: rgba(200,245,66,0.3);
//         }
//         .pricing-badge {
//           position: absolute;
//           top: -1px; left: 50%;
//           transform: translateX(-50%);
//           background: var(--primary);
//           color: #000;
//           font-family: var(--font-body);
//           font-size: 0.65rem;
//           font-weight: 800;
//           letter-spacing: 3px;
//           padding: 5px 18px;
//           white-space: nowrap;
//         }
//         .pricing-badge--elite {
//           background: linear-gradient(135deg, var(--primary) 0%, #f0c445 100%);
//           color: #000;
//           letter-spacing: 4px;
//         }
//         .pricing-card-header {}
//         .pricing-tier {
//           display: block;
//           font-family: var(--font-body);
//           font-size: 0.72rem;
//           font-weight: 700;
//           letter-spacing: 4px;
//           text-transform: uppercase;
//           color: var(--text-gray);
//           margin-bottom: 12px;
//         }
//         .pricing-price {
//           display: flex;
//           align-items: baseline;
//           gap: 4px;
//         }
//         .pricing-num {
//           font-family: var(--font-display);
//           font-size: 4.5rem;
//           letter-spacing: 2px;
//           color: var(--primary);
//           line-height: 1;
//         }
//         .pricing-num--white {
//           color: var(--text-white);
//         }
//         .pricing-num--accent {
//           background: linear-gradient(135deg, var(--primary) 0%, #f0c445 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
//         .pricing-per {
//           font-size: 0.9rem;
//           color: var(--text-gray);
//           font-weight: 300;
//         }
//         .pricing-features {
//           list-style: none;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           gap: 14px;
//         }
//         .pricing-features li {
//           font-size: 0.9rem;
//           color: var(--text-gray);
//           font-weight: 300;
//           padding-left: 20px;
//           position: relative;
//         }
//         .pricing-features li::before {
//           content: '—';
//           position: absolute;
//           left: 0;
//           color: var(--primary);
//           font-size: 0.8rem;
//         }
//         .btn-primary--elite {
//           background: linear-gradient(135deg, var(--primary) 0%, #f0c445 100%);
//           border: none;
//           color: #000;
//           font-weight: 800;
//         }
//         .btn-primary--elite:hover {
//           opacity: 0.9;
//           transform: translateY(-2px);
//           box-shadow: 0 4px 15px rgba(200,245,66,0.3);
//         }

//         /* Tablet */
//         @media (max-width: 1024px) {
//           .pricing-grid {
//             max-width: 900px;
//             flex-wrap: wrap;
//           }
//           .pricing-card {
//             flex: 1 1 calc(50% - 2px);
//             min-width: 280px;
//           }
//           .pricing-card--elite {
//             flex: 1 1 100%;
//           }
//           .pricing-num {
//             font-size: 3.5rem;
//           }
//         }

//         /* Mobile */
//         @media (max-width: 640px) {
//           .pricing-grid { 
//             flex-direction: column; 
//             max-width: 400px;
//           }
//           .pricing-card {
//             padding: 40px 32px;
//             gap: 24px;
//           }
//           .pricing-num {
//             font-size: 3rem;
//           }
//           .pricing-features {
//             gap: 12px;
//           }
//         }

//         /* Small Mobile */
//         @media (max-width: 400px) {
//           .pricing-card {
//             padding: 32px 24px;
//           }
//           .pricing-num {
//             font-size: 2.5rem;
//           }
//           .pricing-badge {
//             font-size: 0.6rem;
//             padding: 4px 14px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// /* ─── Testimonials ────────────────────────────────────── */
// function TestimonialsSection() {
//   const testimonials = [
//     { 
//       quote: 'Premier Fitness changed my entire approach to training. The equipment and community are truly unmatched.', 
//       name: 'John D.', 
//       role: 'Member since 2022',
//       avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200'
//     },
//     { 
//       quote: 'The trainers are actual experts. I\'ve broken every personal record since joining six months ago.', 
//       name: 'Sarah M.', 
//       role: 'Member since 2023',
//       avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200'
//     },
//     { 
//       quote: 'Cleanest, most inspiring gym I\'ve ever stepped into. The atmosphere demands you push harder.', 
//       name: 'Michael T.', 
//       role: 'Member since 2021',
//       avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200'
//     },
//   ];

//   return (
//     <section className="page-section testimonials-section">
//       <div className="section-header reveal">
//         <span className="section-label">Testimonials</span>
//         <h2>SUCCESS<br/>STORIES</h2>
//       </div>

//       <div className="testi-grid">
//         {testimonials.map((t, i) => (
//           <div key={i} className={`testi-card reveal reveal-delay-${i + 1}`}>
//             <div className="testi-quote">"</div>
//             <p className="testi-text">{t.quote}</p>
//             <div className="testi-author">
//               <div className="testi-avatar">
//                 <img src={t.avatar} alt={t.name} />
//               </div>
//               <span className="testi-name">{t.name}</span>
//               <span className="testi-role">{t.role}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         .testimonials-section {
//           background: var(--secondary);
//           border-top: 1px solid rgba(255,255,255,0.04);
//         }
//         .testi-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 2px;
//           max-width: 1300px;
//           margin: 0 auto;
//         }
//         .testi-card {
//           padding: 52px 44px;
//           background: rgba(255,255,255,0.015);
//           border: 1px solid rgba(255,255,255,0.05);
//           display: flex;
//           flex-direction: column;
//           gap: 24px;
//           transition: all 0.4s ease;
//           position: relative;
//           overflow: hidden;
//         }
//         .testi-card::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 1px;
//           background: var(--primary);
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.5s ease;
//         }
//         .testi-card:hover::before { transform: scaleX(1); }
//         .testi-card:hover {
//           background: rgba(200,245,66,0.025);
//           border-color: rgba(200,245,66,0.1);
//         }
//         .testi-quote {
//           font-family: var(--font-serif);
//           font-size: 5rem;
//           line-height: 0.8;
//           color: var(--primary);
//           opacity: 0.4;
//         }
//         .testi-text {
//           font-family: var(--font-body);
//           font-size: 0.95rem;
//           font-style: italic;
//           font-weight: 300;
//           color: var(--text-gray);
//           line-height: 1.8;
//           flex: 1;
//         }
//         .testi-author {
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//           align-items: flex-start;
//           border-top: 1px solid rgba(255,255,255,0.06);
//           padding-top: 24px;
//         }
//         .testi-avatar {
//           width: 56px;
//           height: 56px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 2px solid var(--primary);
//           flex-shrink: 0;
//         }
//         .testi-avatar img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
//         .testi-name {
//           font-family: var(--font-body);
//           font-size: 0.85rem;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           color: var(--text-white);
//         }
//         .testi-role {
//           font-size: 0.78rem;
//           color: var(--primary);
//           letter-spacing: 1px;
//         }
//         @media (max-width: 900px) {
//           .testi-grid { grid-template-columns: 1fr; }
//         }
//         @media (max-width: 600px) {
//           .testi-card { padding: 36px 24px; }
//           .testi-quote { font-size: 3rem; }
//           .testi-text { font-size: 0.85rem; }
//           .testi-avatar { width: 48px; height: 48px; }
//         }
//       `}</style>
//     </section>
//   );
// }

// /* ─── CTA Section ─────────────────────────────────────── */
// function CTASection() {
//   return (
//     <section className="cta-wrap">
//       <div className="cta-bg" />
//       <div className="cta-inner">
//         <div className="cta-content reveal">
//           <span className="section-label">Take Action</span>
//           <h2>READY TO<br/><span className="cta-accent">COMMIT?</span></h2>
//           <p>Join the elite. Begin your transformation today.</p>
//           <div className="cta-actions">
//             <button className="btn-primary" style={{ padding: '18px 52px', fontSize: '0.88rem' }}>Start Your Journey</button>
//             <a href="/about" className="btn-outline" style={{ padding: '18px 40px', fontSize: '0.88rem' }}>Learn More</a>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .cta-wrap {
//           position: relative;
//           padding: 160px 6%;
//           overflow: hidden;
//           background: var(--bg-end);
//           border-top: 1px solid rgba(200,245,66,0.08);
//         }
//         .cta-bg {
//           position: absolute;
//           inset: 0;
//           background:
//             radial-gradient(ellipse 800px 600px at 70% 50%, rgba(200,245,66,0.04) 0%, transparent 70%),
//             radial-gradient(ellipse 400px 400px at 20% 80%, rgba(200,245,66,0.03) 0%, transparent 60%);
//           pointer-events: none;
//         }
//         .cta-inner {
//           max-width: 900px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 1;
//         }
//         .cta-content {
//           text-align: center;
//         }
//         .cta-content h2 {
//           font-family: var(--font-display);
//           font-size: clamp(4rem, 10vw, 9rem);
//           font-weight: 400;
//           line-height: 0.9;
//           letter-spacing: 2px;
//           color: var(--text-white);
//           margin-bottom: 24px;
//         }
//         .cta-accent { color: var(--primary); }
//         .cta-content p {
//           color: var(--text-gray);
//           font-size: 1rem;
//           font-weight: 300;
//           margin-bottom: 48px;
//           letter-spacing: 0.5px;
//         }
//         .cta-actions {
//           display: flex;
//           gap: 20px;
//           justify-content: center;
//           align-items: center;
//           flex-wrap: wrap;
//         }
//       `}</style>
//     </section>
//   );
// }

// /* ─── Main Export ─────────────────────────────────────── */
// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <PremiumSection />
//       <TrainersSection />
//       <PricingSection />
//       <TestimonialsSection />
//       <CTASection />
//     </>
//   );
// }











































'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroManImage from '../images/hero_man-Photoroom.png';

/* ─── Register GSAP Plugins ──────────────────────────── */
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Particle Canvas ─────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [], raf;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    const rand = (min, max) => Math.random() * (max - min) + min;

    const makeParticle = () => ({
      x: rand(0, w), y: rand(0, h),
      vx: rand(-0.15, 0.15), vy: rand(-0.25, -0.05),
      r: rand(0.5, 1.8),
      alpha: rand(0.1, 0.5),
      life: rand(0.002, 0.006),
    });

    const init = () => {
      resize();
      particles = Array.from({ length: 120 }, makeParticle);
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy; p.alpha -= p.life;
        if (p.alpha <= 0 || p.y < -10) particles[i] = makeParticle();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,245,66,${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };

    init();
    tick();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }} />;
}

/* ─── Hero Section ────────────────────────────────────── */
function Hero() {
  const heroRef = useRef(null);
  const athleteRef = useRef(null);
  const lineRef = useRef(null);
  const statsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    
    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(lineRef.current, { scaleX: 0, duration: 1, ease: 'power3.out' })
        .from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.hero-word', { opacity: 0, y: 60, duration: 1, ease: 'power3.out', stagger: 0.12 }, '-=0.5')
        .from('.hero-sub', { opacity: 0, y: 20, duration: 0.8 }, '-=0.4')
        .from('.hero-cta-group', { opacity: 0, y: 20, duration: 0.7 }, '-=0.3')
        .from(athleteRef.current, { opacity: 0, x: 50, duration: 1.2, ease: 'power3.out' }, '-=0.8')
        .from(statsRef.current, { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
        .from(scrollIndicatorRef.current, { opacity: 0, duration: 0.6 }, '-=0.2');

      // Scroll-based animation for the athlete
      gsap.to(athleteRef.current, {
        x: '20%', 
        opacity: 0,
        scale: 0.95,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        }
      });

      // Parallax upward drift
      gsap.to(athleteRef.current, {
        y: '5%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });

      // Fade out left content slightly as user scrolls
      gsap.to('.hero-left', {
        opacity: 0.3,
        y: -30,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });

      // Stats strip animation
      gsap.to(statsRef.current, {
        opacity: 0,
        y: 20,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });

      // Scroll indicator fades out quickly
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        y: -20,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '20% top',
          scrub: 0.5,
        }
      });

    }, heroRef);

    const preventHorizontalScroll = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventHorizontalScroll, { passive: false });

    return () => {
      ctx.revert();
      document.body.style.overflowX = '';
      window.removeEventListener('wheel', preventHorizontalScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      {/* Background */}
      <div className="hero-bg">
        <img className="hero-bg-img" src="/gym-bg.png" alt="" aria-hidden="true" />
        <div className="hero-bg-overlay" />
        <div className="hero-bg-vignette" />
      </div>

      <ParticleCanvas />

      {/* Grid lines decoration */}
      <div className="hero-grid" aria-hidden="true">
        {[...Array(6)].map((_, i) => <div key={i} className="hero-grid-line" />)}
      </div>

      {/* Main content */}
      <div className="hero-content">
        <div className="hero-left">
          <div ref={lineRef} className="hero-accent-line" />
          <p className="hero-eyebrow">EST. 2018 &nbsp;·&nbsp; NEW YORK</p>
          <h1 className="hero-title">
            <span className="hero-word">UNLOCK</span>
            <span className="hero-word hero-word--outline">YOUR</span>
            <span className="hero-word hero-word--accent">LIMIT</span>
          </h1>
          <p className="hero-sub">Elite training. Data-driven coaching.<br />The city's finest fitness sanctuary.</p>
          <div className="hero-cta-group">
            <button className="btn-primary hero-btn">Start Training</button>
            <a href="/classes" className="hero-link">
              View Schedule <span className="hero-link-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Athlete Image Container */}
        <div ref={athleteRef} className="hero-athlete">
          <img
            src={heroManImage.src}
            alt="Elite athlete"
            style={{ mixBlendMode: 'screen', filter: 'brightness(1.4) contrast(1.1) drop-shadow(0 0 40px rgba(200,245,66,0.3))' }}
          />
        </div>
      </div>

      {/* Bottom stat strip */}
      <div ref={statsRef} className="hero-stats">
        {[['15K+', 'Members'], ['250+', 'Trainers'], ['98%', 'Satisfaction'], ['24/7', 'Access']].map(([num, label]) => (
          <div key={label} className="hero-stat">
            <span className="hero-stat-num">{num}</span>
            <span className="hero-stat-label">{label}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndicatorRef} className="scroll-indicator" aria-hidden="true">
        <span>SCROLL</span>
        <div className="scroll-line"><div className="scroll-dot" /></div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          height: auto;
          min-height: 100vh;
          min-height: 100dvh;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: #050506;
          -webkit-overflow-scrolling: touch;
          will-change: transform;
        }
        
        .hero-section * {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        .hero-eyebrow, 
        .hero-word, 
        .hero-sub, 
        .hero-stat-label, 
        .hero-stat-num {
          -webkit-user-select: text;
          -moz-user-select: text;
          -ms-user-select: text;
          user-select: text;
        }
        
        img {
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
        }
        
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .hero-bg-img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 30%;
          opacity: 0.35;
        }
        .hero-bg-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(105deg, rgba(5,5,6,0.96) 0%, rgba(5,5,6,0.5) 50%, rgba(5,5,6,0.2) 100%);
        }
        .hero-bg-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(5,5,6,0.7) 100%);
        }
        .hero-grid {
          position: absolute; inset: 0; z-index: 2;
          display: flex;
          padding: 0 6%;
          pointer-events: none;
        }
        .hero-grid-line {
          flex: 1;
          border-left: 1px solid rgba(255,255,255,0.03);
        }
        .hero-content {
          position: relative;
          z-index: 4;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 100px 6% 40px;
          max-width: 1500px;
          width: 100%;
          margin: 0 auto;
          gap: 20px;
          will-change: transform;
        }
        .hero-left {
          flex: 1.2;
          max-width: 680px;
          z-index: 5;
        }
        .hero-accent-line {
          width: 60px;
          height: 2px;
          background: var(--primary, #C8F542);
          margin-bottom: 24px;
          transform-origin: left;
        }
        .hero-eyebrow {
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--primary, #C8F542);
          margin-bottom: 20px;
          display: block;
        }
        .hero-title {
          display: flex;
          flex-direction: column;
          font-family: var(--font-display);
          font-size: clamp(4.5rem, 10vw, 11rem);
          font-weight: 400;
          line-height: 0.88;
          letter-spacing: -1px;
          margin-bottom: 32px;
          overflow: visible;
        }
        .hero-word {
          display: block;
          color: var(--text-white, #ffffff);
        }
        .hero-word--outline {
          -webkit-text-stroke: 1px rgba(240, 237, 232, 0.4);
          color: transparent;
        }
        .hero-word--accent {
          color: var(--primary, #C8F542);
        }
        .hero-sub {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 300;
          color: var(--text-gray, #a0a0a5);
          line-height: 1.8;
          margin-bottom: 44px;
          letter-spacing: 0.5px;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .hero-btn { font-size: 0.82rem; padding: 16px 40px; }
        .hero-link {
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-gray, #a0a0a5);
          text-decoration: none;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hero-link:hover { color: var(--text-white, #ffffff); }
        .hero-link-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .hero-link:hover .hero-link-arrow {
          transform: translateX(6px);
        }
        
        .hero-athlete {
          position: absolute;
          right: 2%;
          bottom: 60px;
          height: clamp(300px, 68vh, 76vh);
          width: auto;
          pointer-events: none;
          z-index: 3;
          max-width: 55%;
          display: flex;
          align-items: flex-end;
          will-change: transform, opacity;
          transition: none;
        }
        .hero-athlete img {
          height: 100%;
          width: auto;
          object-fit: contain;
          object-position: right bottom;
          display: block;
          max-width: 100%;
          filter: brightness(1.1) contrast(1.05) drop-shadow(0 0 50px rgba(200,245,66,0.15));
        }
        
        .hero-stats {
          position: relative;
          z-index: 4;
          display: flex;
          border-top: 1px solid rgba(255,255,255,0.06);
          background: rgba(5,5,6,0.6);
          backdrop-filter: blur(20px);
        }
        .hero-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 20px;
          border-right: 1px solid rgba(255,255,255,0.06);
          gap: 4px;
          transition: background 0.3s;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat:hover { background: rgba(200,245,66,0.04); }
        .hero-stat-num {
          font-family: var(--font-display);
          font-size: 2rem;
          letter-spacing: 2px;
          color: var(--primary, #C8F542);
          line-height: 1;
        }
        .hero-stat-label {
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-gray, #a0a0a5);
        }
        .scroll-indicator {
          position: absolute;
          left: 6%;
          bottom: 120px;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .scroll-indicator span {
          font-family: var(--font-body);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--text-gray, #a0a0a5);
          writing-mode: vertical-rl;
        }
        .scroll-line {
          width: 1px;
          height: 60px;
          background: rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }
        .scroll-dot {
          width: 1px;
          height: 20px;
          background: var(--primary, #C8F542);
          animation: scrollAnim 2s ease-in-out infinite;
        }
        @keyframes scrollAnim {
          0% { transform: translateY(-20px); }
          100% { transform: translateY(60px); }
        }

        @media (min-width: 1400px) {
          .hero-content { padding: 120px 8% 60px; }
          .hero-athlete { max-width: 50%; right: 4%; }
        }

        @media (max-width: 1399px) {
          .hero-title { font-size: clamp(4rem, 9vw, 9.5rem); }
          .hero-athlete { height: clamp(280px, 62vh, 70vh); right: 2%; }
        }

        @media (max-width: 1199px) {
          .hero-content { padding: 90px 5% 35px; }
          .hero-athlete { height: clamp(260px, 55vh, 65vh); max-width: 48%; }
          .hero-stats { flex-wrap: wrap; }
          .hero-stat { flex: 1 1 25%; min-width: 140px; }
          .hero-stat:nth-child(2) { border-right: 1px solid rgba(255,255,255,0.06); }
          .hero-stat:nth-child(4) { border-right: none; }
        }

        @media (max-width: 1023px) {
          .hero-section { height: auto; min-height: 100dvh; }
          .hero-content { flex-direction: column; justify-content: center; padding: 100px 5% 40px; gap: 40px; }
          .hero-left { max-width: 100%; width: 100%; text-align: center; }
          .hero-accent-line { margin: 0 auto 24px; transform-origin: center; }
          .hero-cta-group { justify-content: center; }
          .hero-title { align-items: center; font-size: clamp(3.5rem, 8vw, 6rem); }
          
          .hero-athlete {
            position: relative;
            right: auto;
            bottom: auto;
            height: clamp(220px, 38vh, 340px);
            width: 100%;
            max-width: 85%;
            margin: 0 auto;
            pointer-events: auto;
          }
          .hero-athlete img { object-position: center; margin: 0 auto; }
          .scroll-indicator { bottom: 20px; }
        }
        
        @media (max-width: 767px) {
          .hero-content { padding: 80px 4% 30px; gap: 30px; }
          .hero-sub { font-size: 0.9rem; margin-bottom: 24px; }
          .hero-cta-group { flex-direction: column; gap: 16px; width: 100%; }
          .hero-btn { width: 80%; text-align: center; }
          .scroll-indicator { display: none; }
          .hero-stats { flex-direction: column; }
          .hero-stat { flex: 1 1 100%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 18px 0; }
          .hero-stat:last-child { border-bottom: none; }
        }

        @media (max-width: 479px) {
          .hero-title { font-size: clamp(2.2rem, 7vw, 3.5rem); }
          .hero-btn { width: 100%; }
        }
      `}</style>
    </section>
  );
}

/* ─── Premium Experience Section ─────────────────────── */
function PremiumSection() {
  const items = [
    {
      num: '01',
      title: 'Advanced Equipment',
      desc: 'Smart machines tracking your every rep. Biomechanics-optimized stations built for elite performance.',
      img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=900',
    },
    {
      num: '02',
      title: 'Elite Community',
      desc: 'Connect with like-minded individuals pushing their absolute limits, every single day.',
      img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=900',
    },
    {
      num: '03',
      title: 'Expert Coaching',
      desc: 'Data-driven routines designed specifically around your body, goals, and recovery capacity.',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900',
    },
  ];

  return (
    <section className="page-section premium-section">
      <div className="section-header reveal">
        <span className="section-label">The Experience</span>
        <h2>PREMIER<br/>STANDARD</h2>
        <p>State-of-the-art facilities with uncompromising design.</p>
      </div>

      <div className="premium-grid">
        {items.map((item, i) => (
          <div key={i} className={`premium-card reveal reveal-delay-${i + 1}`}>
            <div className="premium-card-img" style={{ backgroundImage: `url(${item.img})` }}>
              <div className="premium-card-overlay" />
              <span className="premium-card-num">{item.num}</span>
            </div>
            <div className="premium-card-body">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="/services" className="premium-more">
                Explore <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .premium-section {
          background: var(--bg-end);
        }
        .premium-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          max-width: 1400px;
          margin: 0 auto;
        }
        .premium-card {
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.05);
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }
        .premium-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 2px;
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-card:hover::after { transform: scaleX(1); }
        .premium-card:hover {
          transform: translateY(-10px);
          border-color: rgba(200,245,66,0.15);
          box-shadow: 0 40px 80px rgba(0,0,0,0.7);
          z-index: 1;
        }
        .premium-card-img {
          height: 280px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-card:hover .premium-card-img {
          transform: scale(1.04);
        }
        .premium-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(5,5,6,0.9));
        }
        .premium-card-num {
          position: absolute;
          top: 20px; right: 20px;
          font-family: var(--font-display);
          font-size: 1rem;
          letter-spacing: 2px;
          color: var(--primary);
          opacity: 0.7;
        }
        .premium-card-body {
          padding: 36px;
        }
        .premium-card-body h3 {
          font-family: var(--font-display);
          font-size: 1.6rem;
          letter-spacing: 2px;
          font-weight: 400;
          color: var(--text-white);
          margin-bottom: 14px;
        }
        .premium-card-body p {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 24px;
        }
        .premium-more {
          font-family: var(--font-body);
          font-size: 0.75rem;
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
        .premium-more:hover { gap: 14px; }
        @media (max-width: 900px) {
          .premium-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

/* ─── Trainers Preview ────────────────────────────────── */
function TrainersSection() {
  const trainers = [
    { name: 'Alex Sterling', role: 'Head Coach & Strength', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800' },
    { name: 'Sarah Jenkins', role: 'HIIT & Conditioning', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800' },
    { name: 'Mike Chen', role: 'Mobility & Yoga', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800' },
  ];

  return (
    <section className="page-section trainers-section">
      <div className="trainers-inner">
        <div className="trainers-header reveal">
          <span className="section-label">Our Coaches</span>
          <h2>WORLD-CLASS<br/>TRAINERS</h2>
          <p>Industry veterans dedicated to your transformation.</p>
          <a href="/trainers" className="btn-outline" style={{ marginTop: '32px', display: 'inline-block' }}>Meet the Team</a>
        </div>

        <div className="trainers-stack">
          {trainers.map((t, i) => (
            <div key={i} className={`trainer-item reveal reveal-delay-${i + 1}`}>
              <div className="trainer-img-wrap">
                <div className="trainer-img" style={{ backgroundImage: `url(${t.img})` }} />
              </div>
              <div className="trainer-meta">
                <span className="trainer-role">{t.role}</span>
                <h3>{t.name}</h3>
              </div>
              <div className="trainer-num">{String(i + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .trainers-section {
          background: var(--secondary);
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .trainers-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 80px;
          align-items: center;
          width: 100%;
        }
        .trainers-header h2 {
          font-family: var(--font-display);
          font-size: clamp(3rem, 5vw, 5rem);
          line-height: 0.92;
          letter-spacing: 3px;
          color: var(--text-white);
          margin-bottom: 16px;
        }
        .trainers-header p {
          color: var(--text-gray);
          font-size: 0.95rem;
          font-weight: 300;
        }
        .trainers-stack {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .trainer-item {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px 28px;
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .trainer-item::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: var(--primary);
          transform: scaleY(0);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .trainer-item:hover::before { transform: scaleY(1); }
        .trainer-item:hover {
          background: rgba(200,245,66,0.03);
          border-color: rgba(200,245,66,0.12);
          transform: translateX(8px);
        }
        .trainer-img-wrap {
          width: 64px; height: 64px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid rgba(200,245,66,0.2);
        }
        .trainer-img {
          width: 100%; height: 100%;
          background-size: cover;
          background-position: center top;
          transition: transform 0.5s ease;
        }
        .trainer-item:hover .trainer-img { transform: scale(1.1); }
        .trainer-meta {
          flex: 1;
        }
        .trainer-role {
          display: block;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 4px;
        }
        .trainer-meta h3 {
          font-family: var(--font-display);
          font-size: 1.4rem;
          letter-spacing: 2px;
          font-weight: 400;
          color: var(--text-white);
        }
        .trainer-num {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: rgba(255,255,255,0.06);
          letter-spacing: 1px;
          transition: color 0.3s;
        }
        .trainer-item:hover .trainer-num {
          color: rgba(200,245,66,0.2);
        }
        @media (max-width: 1024px) {
          .trainers-inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

/* ─── Pricing Section ─────────────────────────────────── */
function PricingSection() {
  return (
    <section className="page-section pricing-section">
      <div className="section-header reveal">
        <span className="section-label">Membership</span>
        <h2>CHOOSE YOUR<br/>TIER</h2>
        <p>Invest in excellence. Cancel anytime.</p>
      </div>

      <div className="pricing-grid">
        <div className="pricing-card reveal reveal-delay-1">
          <div className="pricing-card-header">
            <span className="pricing-tier">Standard</span>
            <div className="pricing-price"><span className="pricing-num">$49</span><span className="pricing-per">/mo</span></div>
          </div>
          <ul className="pricing-features">
            <li>Full Gym Access</li>
            <li>Locker Room</li>
            <li>1 Free Assessment</li>
            <li>App Access</li>
          </ul>
          <button className="btn-outline" style={{ width: '100%', padding: '16px', textAlign: 'center' }}>Select Plan</button>
        </div>

        <div className="pricing-card pricing-card--featured reveal reveal-delay-2">
          <div className="pricing-badge">MOST POPULAR</div>
          <div className="pricing-card-header">
            <span className="pricing-tier">Premium</span>
            <div className="pricing-price"><span className="pricing-num pricing-num--white">$89</span><span className="pricing-per">/mo</span></div>
          </div>
          <ul className="pricing-features">
            <li>Everything in Standard</li>
            <li>Unlimited Classes</li>
            <li>Sauna & Spa Access</li>
            <li>Monthly Body Scan</li>
            <li>Priority Booking</li>
          </ul>
          <button className="btn-primary" style={{ width: '100%', padding: '16px' }}>Select Plan</button>
        </div>

        <div className="pricing-card pricing-card--elite reveal reveal-delay-3">
          <div className="pricing-badge pricing-badge--elite">ELITE</div>
          <div className="pricing-card-header">
            <span className="pricing-tier">Elite</span>
            <div className="pricing-price"><span className="pricing-num pricing-num--accent">$119</span><span className="pricing-per">/mo</span></div>
          </div>
          <ul className="pricing-features">
            <li>Everything in Premium</li>
            <li>Personal Trainer (2x/week)</li>
            <li>Nutrition Planning</li>
            <li>Weekly Body Scan</li>
            <li>VIP Locker</li>
            <li>Guest Passes (4/mo)</li>
            <li>Exclusive Events</li>
          </ul>
          <button className="btn-primary btn-primary--elite" style={{ width: '100%', padding: '16px' }}>Select Plan</button>
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          background: var(--bg-end);
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .pricing-grid {
          display: flex;
          gap: 2px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .pricing-card {
          flex: 1;
          padding: 52px 44px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex;
          flex-direction: column;
          gap: 32px;
          position: relative;
          transition: all 0.4s ease;
        }
        .pricing-card:hover {
          background: rgba(255,255,255,0.035);
          transform: translateY(-4px);
        }
        .pricing-card--featured {
          background: rgba(200,245,66,0.04);
          border-color: rgba(200,245,66,0.25);
        }
        .pricing-card--featured:hover {
          background: rgba(200,245,66,0.06);
        }
        .pricing-card--elite {
          background: rgba(200,245,66,0.02);
          border-color: rgba(200,245,66,0.15);
        }
        .pricing-card--elite:hover {
          background: rgba(200,245,66,0.04);
          border-color: rgba(200,245,66,0.3);
        }
        .pricing-badge {
          position: absolute;
          top: -1px; left: 50%;
          transform: translateX(-50%);
          background: var(--primary);
          color: #000;
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 3px;
          padding: 5px 18px;
          white-space: nowrap;
        }
        .pricing-badge--elite {
          background: linear-gradient(135deg, var(--primary) 0%, #f0c445 100%);
          color: #000;
          letter-spacing: 4px;
        }
        .pricing-card-header {}
        .pricing-tier {
          display: block;
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--text-gray);
          margin-bottom: 12px;
        }
        .pricing-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .pricing-num {
          font-family: var(--font-display);
          font-size: 4.5rem;
          letter-spacing: 2px;
          color: var(--primary);
          line-height: 1;
        }
        .pricing-num--white {
          color: var(--text-white);
        }
        .pricing-num--accent {
          background: linear-gradient(135deg, var(--primary) 0%, #f0c445 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pricing-per {
          font-size: 0.9rem;
          color: var(--text-gray);
          font-weight: 300;
        }
        .pricing-features {
          list-style: none;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .pricing-features li {
          font-size: 0.9rem;
          color: var(--text-gray);
          font-weight: 300;
          padding-left: 20px;
          position: relative;
        }
        .pricing-features li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-size: 0.8rem;
        }
        .btn-primary--elite {
          background: linear-gradient(135deg, var(--primary) 0%, #f0c445 100%);
          border: none;
          color: #000;
          font-weight: 800;
        }
        .btn-primary--elite:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(200,245,66,0.3);
        }

        @media (max-width: 1024px) {
          .pricing-grid {
            max-width: 900px;
            flex-wrap: wrap;
          }
          .pricing-card {
            flex: 1 1 calc(50% - 2px);
            min-width: 280px;
          }
          .pricing-card--elite {
            flex: 1 1 100%;
          }
          .pricing-num {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 640px) {
          .pricing-grid { 
            flex-direction: column; 
            max-width: 400px;
          }
          .pricing-card {
            padding: 40px 32px;
            gap: 24px;
          }
          .pricing-num {
            font-size: 3rem;
          }
          .pricing-features {
            gap: 12px;
          }
        }

        @media (max-width: 400px) {
          .pricing-card {
            padding: 32px 24px;
          }
          .pricing-num {
            font-size: 2.5rem;
          }
          .pricing-badge {
            font-size: 0.6rem;
            padding: 4px 14px;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    { 
      quote: 'Premier Fitness changed my entire approach to training. The equipment and community are truly unmatched.', 
      name: 'John D.', 
      role: 'Member since 2022',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200'
    },
    { 
      quote: 'The trainers are actual experts. I\'ve broken every personal record since joining six months ago.', 
      name: 'Sarah M.', 
      role: 'Member since 2023',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200'
    },
    { 
      quote: 'Cleanest, most inspiring gym I\'ve ever stepped into. The atmosphere demands you push harder.', 
      name: 'Michael T.', 
      role: 'Member since 2021',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200'
    },
  ];

  return (
    <section className="page-section testimonials-section">
      <div className="section-header reveal">
        <span className="section-label">Testimonials</span>
        <h2>SUCCESS<br/>STORIES</h2>
      </div>

      <div className="testi-grid">
        {testimonials.map((t, i) => (
          <div key={i} className={`testi-card reveal reveal-delay-${i + 1}`}>
            <div className="testi-quote">"</div>
            <p className="testi-text">{t.quote}</p>
            <div className="testi-author">
              <div className="testi-avatar">
                <img src={t.avatar} alt={t.name} />
              </div>
              <span className="testi-name">{t.name}</span>
              <span className="testi-role">{t.role}</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .testimonials-section {
          background: var(--secondary);
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          max-width: 1300px;
          margin: 0 auto;
        }
        .testi-card {
          padding: 52px 44px;
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          gap: 24px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .testi-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }
        .testi-card:hover::before { transform: scaleX(1); }
        .testi-card:hover {
          background: rgba(200,245,66,0.025);
          border-color: rgba(200,245,66,0.1);
        }
        .testi-quote {
          font-family: var(--font-serif);
          font-size: 5rem;
          line-height: 0.8;
          color: var(--primary);
          opacity: 0.4;
        }
        .testi-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-style: italic;
          font-weight: 300;
          color: var(--text-gray);
          line-height: 1.8;
          flex: 1;
        }
        .testi-author {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-start;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 24px;
        }
        .testi-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--primary);
          flex-shrink: 0;
        }
        .testi-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .testi-name {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-white);
        }
        .testi-role {
          font-size: 0.78rem;
          color: var(--primary);
          letter-spacing: 1px;
        }
        @media (max-width: 900px) {
          .testi-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .testi-card { padding: 36px 24px; }
          .testi-quote { font-size: 3rem; }
          .testi-text { font-size: 0.85rem; }
          .testi-avatar { width: 48px; height: 48px; }
        }
      `}</style>
    </section>
  );
}

/* ─── CTA Section ─────────────────────────────────────── */
function CTASection() {
  return (
    <section className="cta-wrap">
      <div className="cta-bg" />
      <div className="cta-inner">
        <div className="cta-content reveal">
          <span className="section-label">Take Action</span>
          <h2>READY TO<br/><span className="cta-accent">COMMIT?</span></h2>
          <p>Join the elite. Begin your transformation today.</p>
          <div className="cta-actions">
            <button className="btn-primary" style={{ padding: '18px 52px', fontSize: '0.88rem' }}>Start Your Journey</button>
            <a href="/about" className="btn-outline" style={{ padding: '18px 40px', fontSize: '0.88rem' }}>Learn More</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-wrap {
          position: relative;
          padding: 160px 6%;
          overflow: hidden;
          background: var(--bg-end);
          border-top: 1px solid rgba(200,245,66,0.08);
        }
        .cta-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 800px 600px at 70% 50%, rgba(200,245,66,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 400px 400px at 20% 80%, rgba(200,245,66,0.03) 0%, transparent 60%);
          pointer-events: none;
        }
        .cta-inner {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .cta-content {
          text-align: center;
        }
        .cta-content h2 {
          font-family: var(--font-display);
          font-size: clamp(4rem, 10vw, 9rem);
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: 2px;
          color: var(--text-white);
          margin-bottom: 24px;
        }
        .cta-accent { color: var(--primary); }
        .cta-content p {
          color: var(--text-gray);
          font-size: 1rem;
          font-weight: 300;
          margin-bottom: 48px;
          letter-spacing: 0.5px;
        }
        .cta-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
}

/* ─── Main Export (ONLY ONE default export) ───────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <PremiumSection />
      <TrainersSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}