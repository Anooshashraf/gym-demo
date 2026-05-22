'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroManImage from '../images/hero_man-Photoroom.png';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

/* ─── Hero ────────────────────────────────────────────── */
function Hero() {
  const heroRef    = useRef(null);
  const athleteRef = useRef(null);
  const lineRef    = useRef(null);
  const statsRef   = useRef(null);
  const scrollRef  = useRef(null);
  const videoRef   = useRef(null);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    const ctx = gsap.context(() => {
      // ── Entrance sequence
      const tl = gsap.timeline({ delay: 0.4 });
      tl.from(lineRef.current,    { scaleX: 0, duration: 1.4, ease: 'power3.out' })
        .from('.hero-eyebrow',     { opacity: 0, y: 14, duration: 0.9, ease: 'power3.out' }, '-=0.6')
        .from('.hero-word',        { opacity: 0, y: 90, duration: 1.2, ease: 'power3.out', stagger: 0.16 }, '-=0.5')
        .from('.hero-sub',         { opacity: 0, y: 18, duration: 1.0 }, '-=0.4')
        .from('.hero-cta-group',   { opacity: 0, y: 18, duration: 0.9 }, '-=0.35')
        .from(athleteRef.current,  { opacity: 0, scale: 0.96, x: 40, duration: 1.8, ease: 'power3.out' }, '-=1.2')
        .from(statsRef.current,    { opacity: 0, y: 22, duration: 0.9 }, '-=0.5')
        .from(scrollRef.current,   { opacity: 0, duration: 0.7 }, '-=0.3');

      // ── Scroll parallax
      gsap.to(athleteRef.current, { y: '-9%', opacity: 0.06, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.2 }
      });
      gsap.to('.hero-left', { opacity: 0.1, y: -40, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 }
      });
      gsap.to(scrollRef.current, { opacity: 0,
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: '18% top', scrub: 0.5 }
      });
      // video subtle zoom on scroll
      gsap.to('.hero-video-wrap', { scale: 1.06, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 }
      });
    }, heroRef);

    const noH = (e) => { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.preventDefault(); };
    window.addEventListener('wheel', noH, { passive: false });

    return () => {
      ctx.revert();
      document.body.style.overflowX = '';
      window.removeEventListener('wheel', noH);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section">

      {/* ── VIDEO BACKGROUND — the 3D gym render ── */}
      <div className="hero-video-wrap">
        <video
          ref={videoRef}
          className="hero-video"
          src="/gym-hero.mp4"
          autoPlay muted loop playsInline
          preload="auto"
        />
        {/* Warm overlay stack — makes it editorial/dark while preserving warmth */}
        <div className="hero-vid-dark"     />
        <div className="hero-vid-gradient" />
        <div className="hero-vid-bottom"   />
        <div className="hero-vid-vignette" />
        {/* Warm tint overlay — pulls the video toward our palette */}
        <div className="hero-vid-warm"     />
      </div>

      {/* Architectural wood slat lines — echoes the video's vertical slat wall */}
      <div className="hero-slats" aria-hidden="true">
        {[...Array(8)].map((_,i) => <div key={i} className="hero-slat" />)}
      </div>

      {/* ── ATHLETE — z:3 ── */}
      <div ref={athleteRef} className="hero-athlete" aria-hidden="true">
        
        <div className="hero-athlete-ground" />
      </div>

      {/* ── TEXT — z:4 ── */}
      <div className="hero-content">
        <div className="hero-left">
          <div ref={lineRef} className="hero-accent-line" />
          <p className="hero-eyebrow">EST. 2018 &nbsp;·&nbsp; NEW YORK</p>
          <h1 className="hero-title">
            <span className="hero-word">UNLOCK</span>
            <span className="hero-word hero-word--outline">YOUR</span>
            <span className="hero-word hero-word--accent">LIMIT</span>
          </h1>
          <p className="hero-sub">
            Elite training. Architectural luxury.<br />
            The city's finest wellness sanctuary.
          </p>
          <div className="hero-cta-group">
            <button className="btn-primary hero-btn">Start Training</button>
            <a href="/classes" className="hero-link">
              View Schedule <span className="hero-link-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── STAT STRIP — z:5 ── */}
      <div ref={statsRef} className="hero-stats">
        {[['15K+','Members'],['250+','Trainers'],['98%','Satisfaction'],['24/7','Access']].map(([n,l]) => (
          <div key={l} className="hero-stat">
            <span className="hero-stat-num">{n}</span>
            <span className="hero-stat-label">{l}</span>
          </div>
        ))}
      </div>

      

      <style jsx>{`
        /* ── Shell ── */
        .hero-section {
          position: relative;
          min-height: 100vh; min-height: 100dvh;
          width: 100%; overflow: hidden;
          display: flex; flex-direction: column;
          background: #12100D;
        }

        /* ── Video ──
           The 3D render plays at full bleed.
           We layer warm tints over it so it becomes
           the "atmosphere" rather than the literal bg.
        */
        .hero-video-wrap {
          position: absolute; inset: 0; z-index: 1;
          will-change: transform;
        }
        .hero-video {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 40%;
          /* Warm-neutralise the already-warm video slightly */
          filter: brightness(0.55) saturate(0.75) contrast(1.05);
        }
        /* Base dark wash */
        .hero-vid-dark {
          position: absolute; inset: 0;
          background: rgba(10, 8, 5, 0.38);
        }
        /* Left-heavy gradient — keeps text readable */
        .hero-vid-gradient {
          position: absolute; inset: 0;
          background: linear-gradient(
            100deg,
            rgba(10,8,5,0.96)  0%,
            rgba(10,8,5,0.80)  34%,
            rgba(10,8,5,0.32)  58%,
            rgba(10,8,5,0.05) 100%
          );
        }
        /* Bottom fade into stat strip */
        .hero-vid-bottom {
          position: absolute; bottom:0; left:0; right:0; height:40%;
          background: linear-gradient(to top, rgba(10,8,5,1) 0%, transparent 100%);
        }
        /* Radial corner vignette */
        .hero-vid-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(
            ellipse 115% 95% at 55% 40%,
            transparent 28%, rgba(10,8,5,0.62) 100%
          );
        }
        /* Warm amber tint — makes cold areas feel like the oak-lit gym */
        .hero-vid-warm {
          position: absolute; inset: 0;
          background: rgba(180, 140, 80, 0.06);
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        /* ── Architectural slat lines (echo the wood slats in video) ── */
        .hero-slats {
          position: absolute; inset: 0; z-index: 2;
          display: flex; padding: 0 6%; pointer-events: none;
        }
        .hero-slat {
          flex: 1;
          /* Warmer, slightly more visible than the cold grid lines before */
          border-left: 1px solid rgba(196,168,130,0.05);
        }

        /* ── Athlete ──
           Warm-dimmed to match the wood-lit scene.
           The warm drop-shadow simulates the overhead skylights in the video.
        */
        .hero-athlete {
          position: absolute; right: 3%; bottom: 62px;
          height: clamp(330px, 74vh, 86vh);
          z-index: 3; pointer-events: none;
          display: flex; flex-direction: column;
          align-items: center; justify-content: flex-end;
          will-change: transform, opacity;
        }
        .hero-athlete-img {
          display: block; height: 100%; width: auto;
          max-width: 50vw; object-fit: contain; object-position: bottom center;
          /*
            brightness(0.70): matches the warmly-lit scene
            contrast(1.18):   keeps definition
            saturate(0.55):   strips stock-photo vibrancy — figure feels part of gym
            sepia(0.18):      warm amber cast — matches the oak wood tones
            drop-shadows:
              amber/gold rim light — like the skylight overhead
              deep ground shadow   — anchors to floor
              side recession       — left side merges with darkness
          */
          filter:
            brightness(0.70)
            contrast(1.18)
            saturate(0.55)
            sepia(0.18)
            drop-shadow(0 0 50px rgba(196,168,130,0.16))
            drop-shadow(0 40px 90px rgba(0,0,0,0.96))
            drop-shadow(-45px 8px 65px rgba(0,0,0,0.72));
          mix-blend-mode: luminosity;
          -webkit-user-drag: none;
        }
        .hero-athlete-ground {
          width: 55%; height: 34px;
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, transparent 70%);
          margin-top: -17px; flex-shrink: 0;
        }

        /* ── Text  z:4 ── */
        .hero-content {
          position: relative; z-index: 4; flex: 1;
          display: flex; align-items: center;
          padding: 100px 6% 40px;
          max-width: 1500px; width: 100%; margin: 0 auto;
        }
        .hero-left { flex: 1; max-width: 600px; }
        .hero-accent-line {
          width: 50px; height: 2px;
          /* Warm gold line instead of cold lime */
          background: linear-gradient(to right, var(--gold), var(--primary));
          margin-bottom: 22px; transform-origin: left;
          box-shadow: 0 0 12px rgba(196,168,130,0.4);
        }
        .hero-eyebrow {
          font-family: var(--font-body); font-size: 0.68rem; font-weight: 700;
          letter-spacing: 5px; text-transform: uppercase;
          color: var(--primary); margin-bottom: 18px; display: block;
        }
        .hero-title {
          display: flex; flex-direction: column;
          font-family: var(--font-display);
          font-size: clamp(5rem, 11vw, 12rem);
          font-weight: 400; line-height: 0.87; letter-spacing: 1px; margin-bottom: 28px;
        }
        .hero-word          { display: block; color: var(--cream); }
        .hero-word--outline {
          -webkit-text-stroke: 1.5px rgba(245,239,230,0.2);
          color: transparent;
        }
        .hero-word--accent  {
          color: var(--primary);
          /* Warm gold glow — like the skylight wash in the video */
          text-shadow: 0 0 60px rgba(196,168,130,0.22), 0 0 20px rgba(196,168,130,0.1);
        }
        .hero-sub {
          font-family: var(--font-body); font-size: 0.95rem; font-weight: 300;
          color: rgba(138,125,107,0.9); line-height: 1.85;
          margin-bottom: 40px; letter-spacing: 0.4px;
        }
        .hero-cta-group { display: flex; align-items: center; gap: 30px; }
        .hero-btn { font-size: 0.78rem; padding: 15px 36px; }
        .hero-link {
          font-family: var(--font-body); font-size: 0.78rem; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(138,125,107,0.75); text-decoration: none;
          display: flex; align-items: center; gap: 8px; transition: color .3s;
        }
        .hero-link:hover { color: var(--cream); }
        .hero-link-arrow { display: inline-block; transition: transform .3s ease; }
        .hero-link:hover .hero-link-arrow { transform: translateX(6px); }

        /* ── Stats  z:5 ── */
        .hero-stats {
          position: relative; z-index: 5; display: flex;
          border-top: 1px solid rgba(196,168,130,0.1);
          background: rgba(10,8,5,0.86);
          backdrop-filter: blur(28px);
        }
        .hero-stat {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; padding: 22px 16px;
          border-right: 1px solid rgba(196,168,130,0.08);
          gap: 5px; transition: background .3s;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat:hover      { background: rgba(196,168,130,0.04); }
        .hero-stat-num {
          font-family: var(--font-display); font-size: 2rem;
          letter-spacing: 2px; color: var(--primary); line-height: 1;
        }
        .hero-stat-label {
          font-family: var(--font-body); font-size: 0.60rem; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: rgba(92,82,69,0.9);
        }

        /* ── Scroll indicator ── */
        .scroll-indicator {
          position: absolute; left: 6%; bottom: 100px;
          z-index: 5; display: flex; flex-direction: column;
          align-items: center; gap: 10px;
        }
        .scroll-indicator span {
          font-family: var(--font-body); font-size: 0.56rem; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          color: rgba(92,82,69,0.7); writing-mode: vertical-rl;
        }
        .scroll-line { width: 1px; height: 55px; background: rgba(196,168,130,0.12); position: relative; overflow: hidden; }
        .scroll-dot  { width: 1px; height: 18px; background: var(--primary); animation: scrollA 2.2s ease-in-out infinite; }
        @keyframes scrollA { 0%{transform:translateY(-18px);} 100%{transform:translateY(55px);} }

        /* ── Responsive ── */
        @media (min-width:1400px) {
          .hero-content { padding: 120px 8% 60px; }
          .hero-athlete { right: 5%; height: clamp(350px, 76vh, 88vh); }
        }
        @media (max-width:1399px) {
          .hero-title   { font-size: clamp(4.5rem, 9.5vw, 10.5rem); }
          .hero-athlete { height: clamp(300px, 68vh, 78vh); right: 2%; }
        }
        @media (max-width:1199px) {
          .hero-content { padding: 90px 5% 35px; }
          .hero-athlete { height: clamp(260px, 60vh, 70vh); max-width: 46%; }
        }
        @media (max-width:1023px) {
          .hero-section  { min-height: 100dvh; }
          .hero-content  { padding: 92px 5% 32px; align-items: flex-end; }
          .hero-left     { max-width: 100%; }
          .hero-athlete  { right: -4%; bottom: 62px; height: clamp(280px, 58vw, 450px); opacity: 0.32; }
          .hero-athlete-img { max-width: 65vw; filter: brightness(0.42) contrast(1.1) saturate(0.4) sepia(0.1) drop-shadow(0 20px 60px rgba(0,0,0,1)); }
          .scroll-indicator { display: none; }
        }
        @media (max-width:767px) {
          .hero-content { padding: 88px 4% 28px; }
          .hero-title   { font-size: clamp(4rem, 14vw, 6.5rem); }
          .hero-sub     { font-size: .87rem; margin-bottom: 28px; }
          .hero-cta-group { flex-direction: column; align-items: flex-start; gap: 14px; }
          .hero-stats { flex-wrap: wrap; }
          .hero-stat  { flex: 1 1 50%; padding: 16px 10px; border-right: 1px solid rgba(196,168,130,0.08); }
          .hero-stat:nth-child(2n) { border-right: none; }
          .hero-stat:nth-child(n+3) { border-top: 1px solid rgba(196,168,130,0.08); }
        }
        @media (max-width:479px) {
          .hero-title { font-size: clamp(3.2rem, 13vw, 5rem); }
          .hero-stats { flex-direction: column; }
          .hero-stat  { flex: 1 1 100%; border-right: none; border-bottom: 1px solid rgba(196,168,130,0.08); padding: 14px 0; }
          .hero-stat:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}

/* ─── Premium Section ────────────────────────────────── */
function PremiumSection() {
  const items = [
    { num:'01', title:'Advanced Equipment', desc:'Smart machines tracking every rep. Biomechanics-optimized stations built for elite performance.', img:'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=900' },
    { num:'02', title:'Elite Community',    desc:'Connect with like-minded individuals pushing their absolute limits, every single day.',         img:'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=900' },
    { num:'03', title:'Expert Coaching',    desc:'Data-driven routines designed around your body, goals, and recovery capacity.',                  img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900' },
  ];
  return (
    <section className="page-section premium-section">
      <div className="section-header reveal">
        <span className="section-label">The Experience</span>
        <h2>PREMIER<br/>STANDARD</h2>
        <p>Architectural luxury. Uncompromising performance.</p>
      </div>
      <div className="premium-grid">
        {items.map((item,i) => (
          <div key={i} className={`premium-card reveal reveal-delay-${i+1}`}>
            <div className="premium-card-img" style={{backgroundImage:`url(${item.img})`}}>
              <div className="premium-card-overlay" />
              <span className="premium-card-num">{item.num}</span>
            </div>
            <div className="premium-card-body">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="/services" className="premium-more">Explore <span>→</span></a>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .premium-section { background: var(--bg-end); }
        .premium-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; max-width:1400px; margin:0 auto; }
        .premium-card { background:rgba(255,255,255,0.015); border:1px solid var(--border); overflow:hidden; transition:all 0.6s cubic-bezier(0.16,1,0.3,1); position:relative; }
        .premium-card::after { content:''; position:absolute; bottom:0;left:0; width:100%;height:2px; background:var(--primary); transform:scaleX(0); transform-origin:left; transition:transform 0.5s cubic-bezier(0.16,1,0.3,1); }
        .premium-card:hover::after { transform:scaleX(1); }
        .premium-card:hover { transform:translateY(-10px); border-color:var(--border-hover); box-shadow:0 40px 80px rgba(0,0,0,0.6); z-index:1; }
        .premium-card-img { height:280px; background-size:cover; background-position:center; position:relative; overflow:hidden; transition:transform 0.8s cubic-bezier(0.16,1,0.3,1); }
        .premium-card:hover .premium-card-img { transform:scale(1.04); }
        .premium-card-overlay { position:absolute;inset:0; background:linear-gradient(to bottom,transparent 40%,rgba(12,10,8,0.9)); }
        .premium-card-num { position:absolute;top:20px;right:20px; font-family:var(--font-display);font-size:1rem;letter-spacing:2px;color:var(--primary);opacity:0.6; }
        .premium-card-body { padding:36px; }
        .premium-card-body h3 { font-family:var(--font-display);font-size:1.6rem;letter-spacing:2px;font-weight:400;color:var(--text-white);margin-bottom:14px; }
        .premium-card-body p  { color:var(--text-gray);font-size:0.9rem;line-height:1.7;font-weight:300;margin-bottom:24px; }
        .premium-more { font-family:var(--font-body);font-size:0.72rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--primary);text-decoration:none;display:flex;align-items:center;gap:8px;transition:gap 0.3s; }
        .premium-more:hover { gap:14px; }
        @media(max-width:900px){ .premium-grid{grid-template-columns:1fr;} }
      `}</style>
    </section>
  );
}

/* ─── Trainers Preview ───────────────────────────────── */
function TrainersSection() {
  const trainers = [
    {name:'Alex Sterling',role:'Head Coach & Strength',img:'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800'},
    {name:'Sarah Jenkins',role:'HIIT & Conditioning',img:'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=900'},
    {name:'Mike Chen',role:'Mobility & Yoga',img:'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800'},
  ];
  return (
    <section className="page-section trainers-section">
      <div className="trainers-inner">
        <div className="trainers-header reveal">
          <span className="section-label">Our Coaches</span>
          <h2>WORLD-CLASS<br/>TRAINERS</h2>
          <p>Industry veterans dedicated to your transformation.</p>
          <a href="/trainers" className="btn-outline" style={{marginTop:'32px',display:'inline-block'}}>Meet the Team</a>
        </div>
        <div className="trainers-stack">
          {trainers.map((t,i)=>(
            <div key={i} className={`trainer-item reveal reveal-delay-${i+1}`}>
              <div className="trainer-img-wrap"><div className="trainer-img" style={{backgroundImage:`url(${t.img})`}}/></div>
              <div className="trainer-meta">
                <span className="trainer-role">{t.role}</span>
                <h3>{t.name}</h3>
              </div>
              <div className="trainer-num">{String(i+1).padStart(2,'0')}</div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .trainers-section { background:var(--secondary); border-top:1px solid var(--border); }
        .trainers-inner { max-width:1400px; margin:0 auto; display:grid; grid-template-columns:340px 1fr; gap:80px; align-items:center; width:100%; }
        .trainers-header h2 { font-family:var(--font-display); font-size:clamp(3rem,5vw,5rem); line-height:0.92; letter-spacing:3px; color:var(--text-white); margin-bottom:16px; }
        .trainers-header p  { color:var(--text-gray); font-size:0.95rem; font-weight:300; }
        .trainers-stack { display:flex; flex-direction:column; gap:2px; }
        .trainer-item { display:flex; align-items:center; gap:24px; padding:24px 28px; background:rgba(255,255,255,0.015); border:1px solid var(--border); transition:all 0.4s ease; position:relative; overflow:hidden; cursor:none; }
        .trainer-item::before { content:''; position:absolute; left:0;top:0;bottom:0; width:2px; background:var(--primary); transform:scaleY(0); transition:transform 0.4s cubic-bezier(0.16,1,0.3,1); }
        .trainer-item:hover::before { transform:scaleY(1); }
        .trainer-item:hover { background:var(--primary-dim); border-color:var(--border-hover); transform:translateX(8px); }
        .trainer-img-wrap { width:64px;height:64px; border-radius:50%; overflow:hidden; flex-shrink:0; border:2px solid rgba(196,168,130,0.25); }
        .trainer-img { width:100%;height:100%; background-size:cover; background-position:center top; transition:transform 0.5s ease; }
        .trainer-item:hover .trainer-img { transform:scale(1.1); }
        .trainer-meta { flex:1; }
        .trainer-role { display:block; font-size:0.66rem; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:var(--primary); margin-bottom:4px; }
        .trainer-meta h3 { font-family:var(--font-display); font-size:1.4rem; letter-spacing:2px; font-weight:400; color:var(--text-white); }
        .trainer-num { font-family:var(--font-display); font-size:1.5rem; color:rgba(255,255,255,0.05); letter-spacing:1px; transition:color 0.3s; }
        .trainer-item:hover .trainer-num { color:rgba(196,168,130,0.2); }
        @media(max-width:1024px){ .trainers-inner{grid-template-columns:1fr;} }
      `}</style>
    </section>
  );
}

/* ─── Pricing ────────────────────────────────────────── */
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
            <li>Full Gym Access</li><li>Locker Room</li><li>1 Free Assessment</li><li>App Access</li>
          </ul>
          <button className="btn-outline" style={{width:'100%',padding:'16px',textAlign:'center'}}>Select Plan</button>
        </div>
        <div className="pricing-card pricing-card--featured reveal reveal-delay-2">
          <div className="pricing-badge">MOST POPULAR</div>
          <div className="pricing-card-header">
            <span className="pricing-tier">Premium</span>
            <div className="pricing-price"><span className="pricing-num pricing-num--cream">$89</span><span className="pricing-per">/mo</span></div>
          </div>
          <ul className="pricing-features">
            <li>Everything in Standard</li><li>Unlimited Classes</li><li>Sauna & Spa Access</li><li>Monthly Body Scan</li><li>Priority Booking</li>
          </ul>
          <button className="btn-primary" style={{width:'100%',padding:'16px'}}>Select Plan</button>
        </div>
        <div className="pricing-card pricing-card--elite reveal reveal-delay-3">
          <div className="pricing-badge pricing-badge--gold">ELITE</div>
          <div className="pricing-card-header">
            <span className="pricing-tier">Elite</span>
            <div className="pricing-price"><span className="pricing-num pricing-num--gold">$119</span><span className="pricing-per">/mo</span></div>
          </div>
          <ul className="pricing-features">
            <li>Everything in Premium</li><li>Personal Trainer (2×/week)</li><li>Nutrition Planning</li><li>Weekly Body Scan</li><li>VIP Locker</li><li>Guest Passes (4/mo)</li>
          </ul>
          <button className="btn-primary" style={{width:'100%',padding:'16px',background:'linear-gradient(135deg,var(--primary) 0%,var(--gold) 100%)',color:'#0a0906'}}>Select Plan</button>
        </div>
      </div>
      <style jsx>{`
        .pricing-section { background:var(--bg-end); border-top:1px solid var(--border); }
        .pricing-grid { display:flex; gap:2px; max-width:1200px; margin:0 auto; }
        .pricing-card { flex:1; padding:52px 44px; background:rgba(255,255,255,0.02); border:1px solid var(--border); display:flex; flex-direction:column; gap:32px; position:relative; transition:all 0.4s ease; }
        .pricing-card:hover { background:rgba(196,168,130,0.03); transform:translateY(-4px); }
        .pricing-card--featured { background:var(--primary-dim); border-color:rgba(196,168,130,0.28); }
        .pricing-card--elite    { background:rgba(196,168,130,0.015); border-color:rgba(196,168,130,0.18); }
        .pricing-card--featured:hover { background:rgba(196,168,130,0.07); }
        .pricing-badge { position:absolute; top:-1px;left:50%; transform:translateX(-50%); background:var(--primary); color:#0a0906; font-family:var(--font-body); font-size:0.62rem; font-weight:800; letter-spacing:3px; padding:5px 18px; white-space:nowrap; }
        .pricing-badge--gold { background:linear-gradient(135deg,var(--primary) 0%,var(--gold) 100%); }
        .pricing-tier { display:block; font-family:var(--font-body); font-size:0.7rem; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--text-gray); margin-bottom:12px; }
        .pricing-price { display:flex; align-items:baseline; gap:4px; }
        .pricing-num { font-family:var(--font-display); font-size:4.5rem; letter-spacing:2px; color:var(--primary); line-height:1; }
        .pricing-num--cream { color:var(--cream); }
        .pricing-num--gold  { background:linear-gradient(135deg,var(--primary) 0%,var(--gold) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .pricing-per { font-size:0.9rem; color:var(--text-gray); font-weight:300; }
        .pricing-features { list-style:none; flex:1; display:flex; flex-direction:column; gap:14px; }
        .pricing-features li { font-size:0.9rem; color:var(--text-gray); font-weight:300; padding-left:20px; position:relative; }
        .pricing-features li::before { content:'—'; position:absolute; left:0; color:var(--primary); font-size:0.8rem; }
        @media(max-width:1024px){ .pricing-grid{flex-wrap:wrap;} .pricing-card{flex:1 1 calc(50% - 2px);min-width:280px;} .pricing-card--elite{flex:1 1 100%;} }
        @media(max-width:640px) { .pricing-grid{flex-direction:column;max-width:420px;} .pricing-card{padding:40px 32px;gap:24px;} .pricing-num{font-size:3rem;} }
      `}</style>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────── */
function TestimonialsSection() {
  const list = [
    {quote:'Premier Fitness changed my entire approach to training. The facility and community are truly unmatched.',name:'John D.',role:'Member since 2022',avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200'},
    {quote:"The trainers are actual experts. I've broken every personal record since joining six months ago.",name:'Sarah M.',role:'Member since 2023',avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200'},
    {quote:"Most inspiring gym space I've ever trained in. The atmosphere demands you push harder every session.",name:'Michael T.',role:'Member since 2021',avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200'},
  ];
  return (
    <section className="page-section testimonials-section">
      <div className="section-header reveal">
        <span className="section-label">Testimonials</span>
        <h2>SUCCESS<br/>STORIES</h2>
      </div>
      <div className="testi-grid">
        {list.map((t,i)=>(
          <div key={i} className={`testi-card reveal reveal-delay-${i+1}`}>
            <div className="testi-quote">"</div>
            <p className="testi-text">{t.quote}</p>
            <div className="testi-author">
              <div className="testi-avatar"><img src={t.avatar} alt={t.name}/></div>
              <span className="testi-name">{t.name}</span>
              <span className="testi-role">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .testimonials-section { background:var(--secondary); border-top:1px solid var(--border); }
        .testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; max-width:1300px; margin:0 auto; }
        .testi-card { padding:52px 44px; background:rgba(255,255,255,0.015); border:1px solid var(--border); display:flex; flex-direction:column; gap:24px; transition:all 0.4s ease; position:relative; overflow:hidden; }
        .testi-card::before { content:''; position:absolute; top:0;left:0;right:0; height:1px; background:var(--primary); transform:scaleX(0); transform-origin:left; transition:transform 0.5s ease; }
        .testi-card:hover::before { transform:scaleX(1); }
        .testi-card:hover { background:var(--primary-dim); border-color:var(--border-hover); }
        .testi-quote { font-family:var(--font-serif); font-size:5rem; line-height:0.8; color:var(--primary); opacity:0.35; }
        .testi-text  { font-family:var(--font-body); font-size:0.95rem; font-style:italic; font-weight:300; color:var(--text-gray); line-height:1.8; flex:1; }
        .testi-author { display:flex; flex-direction:column; gap:10px; align-items:flex-start; border-top:1px solid rgba(196,168,130,0.08); padding-top:24px; }
        .testi-avatar { width:52px;height:52px; border-radius:50%; overflow:hidden; border:2px solid var(--primary); flex-shrink:0; }
        .testi-avatar img { width:100%;height:100%;object-fit:cover; }
        .testi-name { font-family:var(--font-body); font-size:0.82rem; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--text-white); }
        .testi-role { font-size:0.75rem; color:var(--primary); letter-spacing:1px; }
        @media(max-width:900px){ .testi-grid{grid-template-columns:1fr;} }
        @media(max-width:600px){ .testi-card{padding:36px 24px;} .testi-quote{font-size:3rem;} }
      `}</style>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="cta-wrap">
      <div className="cta-bg"/>
      <div className="cta-inner">
        <div className="cta-content reveal">
          <span className="section-label">Take Action</span>
          <h2>READY TO<br/><span className="cta-accent">COMMIT?</span></h2>
          <p>Join the elite. Begin your transformation today.</p>
          <div className="cta-actions">
            <button className="btn-primary" style={{padding:'18px 52px',fontSize:'0.86rem'}}>Start Your Journey</button>
            <a href="/about" className="btn-outline" style={{padding:'18px 40px',fontSize:'0.86rem'}}>Learn More</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .cta-wrap { position:relative; padding:160px 6%; overflow:hidden; background:var(--bg-end); border-top:1px solid var(--border); }
        .cta-bg { position:absolute;inset:0; background:radial-gradient(ellipse 800px 600px at 65% 50%,rgba(196,168,130,0.05) 0%,transparent 65%),radial-gradient(ellipse 400px 400px at 20% 75%,rgba(196,168,130,0.04) 0%,transparent 60%); pointer-events:none; }
        .cta-inner   { max-width:900px; margin:0 auto; position:relative; z-index:1; }
        .cta-content { text-align:center; }
        .cta-content h2 { font-family:var(--font-display); font-size:clamp(4rem,10vw,9rem); font-weight:400; line-height:0.9; letter-spacing:2px; color:var(--text-white); margin-bottom:24px; }
        .cta-accent  { color:var(--primary); }
        .cta-content p  { color:var(--text-gray); font-size:1rem; font-weight:300; margin-bottom:48px; letter-spacing:.5px; }
        .cta-actions { display:flex; gap:20px; justify-content:center; align-items:center; flex-wrap:wrap; }
      `}</style>
    </section>
  );
}

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