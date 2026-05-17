'use client';

import { useState } from 'react';

export default function Equipment() {
  const [activeCategory, setActiveCategory] = useState('all');

  const equipment = [
    {
      id: 1,
      category: 'cardio',
      name: 'Smart Treadmills',
      desc: 'AI-powered treadmills with real-time form correction and personalized coaching.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600',
    },
    {
      id: 2,
      category: 'cardio',
      name: 'Stationary Bikes',
      desc: 'High-performance stationary bikes with resistance tracking and metrics integration.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600',
    },
    {
      id: 3,
      category: 'cardio',
      name: 'Rowing Machines',
      desc: 'Professional-grade rowing machines for full-body cardio conditioning.',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600',
    },
    {
      id: 4,
      category: 'strength',
      name: 'Cable Machines',
      desc: 'State-of-the-art cable systems with precision weight stacks and ergonomic design.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600',
    },
    {
      id: 5,
      category: 'strength',
      name: 'Dumbbells & Weights',
      desc: 'Full range of premium dumbbells from 5lbs to 150lbs with ergonomic grips.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600',
    },
    {
      id: 6,
      category: 'strength',
      name: 'Barbell Station',
      desc: 'Olympic-grade barbells and weight plates with precision engineering.',
      image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=600',
    },
    {
      id: 7,
      category: 'strength',
      name: 'Smith Machine',
      desc: 'Guided weight system for safe, controlled strength training.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600',
    },
    {
      id: 8,
      category: 'recovery',
      name: 'Massage Chairs',
      desc: 'Full-body massage chairs with heat therapy and customizable programs.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600',
    },
    {
      id: 9,
      category: 'recovery',
      name: 'Sauna Suite',
      desc: 'Premium infrared saunas for muscle recovery and detoxification.',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600',
    },
    {
      id: 10,
      category: 'recovery',
      name: 'Ice Baths',
      desc: 'Cryotherapy baths for accelerated recovery and inflammation reduction.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600',
    },
    {
      id: 11,
      category: 'functional',
      name: 'Functional Training Rigs',
      desc: 'Multi-functional training systems for CrossFit and functional movements.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600',
    },
    {
      id: 12,
      category: 'functional',
      name: 'TRX & Suspension Systems',
      desc: 'Advanced suspension training equipment for bodyweight exercises.',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Equipment' },
    { id: 'cardio', name: 'Cardio' },
    { id: 'strength', name: 'Strength' },
    { id: 'recovery', name: 'Recovery' },
    { id: 'functional', name: 'Functional' },
  ];

  const filtered = activeCategory === 'all' 
    ? equipment 
    : equipment.filter(item => item.category === activeCategory);

  return (
    <main style={{ background: '#050506', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        position: 'relative',
        height: '50vh',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,5,6,0.3) 0%, rgba(5,5,6,0.9) 100%)',
        }} />
        <div style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          padding: '60px 20px 80px',
        }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 10vw, 5rem)',
            fontWeight: 400,
            letterSpacing: '3px',
            color: '#fff',
            marginBottom: '16px',
          }}>ADVANCED EQUIPMENT</h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#a0a0a5',
            fontWeight: 300,
          }}>Precision-engineered machinery for elite performance</p>
        </div>
      </section>

      {/* Equipment Section */}
      <section style={{ padding: '100px 6%', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: '#C8F542',
          }}>Our Arsenal</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 400,
            color: '#fff',
            marginTop: '16px',
          }}>STATE-OF-THE-ART MACHINERY</h2>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '60px',
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '12px 28px',
                border: `1px solid ${activeCategory === cat.id ? '#C8F542' : 'rgba(200,245,66,0.3)'}`,
                background: activeCategory === cat.id ? '#C8F542' : 'transparent',
                color: activeCategory === cat.id ? '#000' : '#a0a0a5',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {filtered.map(item => (
            <div key={item.id} style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
              overflow: 'hidden',
              transition: 'all 0.4s',
            }}>
              <div style={{
                height: '240px',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}>
                <span style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: '#C8F542',
                  color: '#000',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  padding: '6px 14px',
                }}>{item.category.toUpperCase()}</span>
              </div>
              <div style={{ padding: '28px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: 400,
                  color: '#fff',
                  marginBottom: '10px',
                }}>{item.name}</h3>
                <p style={{
                  color: '#a0a0a5',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        textAlign: 'center',
        padding: '80px 40px',
        background: 'linear-gradient(135deg, rgba(200,245,66,0.08) 0%, rgba(200,245,66,0.03) 100%)',
        border: '1px solid rgba(200,245,66,0.15)',
        margin: '0 6% 100px',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          fontWeight: 400,
          color: '#fff',
          marginBottom: '20px',
        }}>Ready to Experience Elite Equipment?</h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#a0a0a5',
          marginBottom: '40px',
        }}>Tour our facility and discover the difference premium machinery makes.</p>
        <a href="/contact" style={{
          display: 'inline-block',
          padding: '18px 52px',
          background: '#C8F542',
          color: '#000',
          fontWeight: 800,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          textDecoration: 'none',
          fontSize: '0.88rem',
        }}>Schedule a Tour</a>
      </section>
    </main>
  );
}