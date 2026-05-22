'use client';

import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CustomCursor from '@/components/CustomCursor';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const total = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(height > 0 ? (total / height) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  const navLinks = [
    ['/', 'Home'], ['/about', 'About'], ['/classes', 'Classes'],
    ['/trainers', 'Trainers'], ['/services', 'Services'],
    ['/equipments', 'Equipment'], ['/contact', 'Contact'],
  ];

  return (
    <html lang="en">
      <head>
        <title>Premier Fitness | Luxury Wellness</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Barlow:ital,wght@0,300;0,400;0,600;0,800;1,300&family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <CustomCursor />
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <Link href="/" className="logo">PREMIER <span>FITNESS</span></Link>
            <ul className="nav-links">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className={pathname === href ? 'active' : ''}>{label}</Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>Join Now</Link>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h2>PREMIER FITNESS</h2>
              <p>Where iron meets innovation.</p>
              <div className="footer-socials">
                {[['instagram','https://instagram.com'],['twitter','https://twitter.com'],['facebook-f','https://facebook.com'],['youtube','https://youtube.com']].map(([icon,href]) => (
                  <a key={icon} href={href} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="footer-section">
              <h3>Navigate</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/classes">Classes</a></li>
                <li><a href="/trainers">Trainers</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="/services">Personal Training</a></li>
                <li><a href="/services">Nutrition</a></li>
                <li><a href="/services">Recovery Suite</a></li>
                <li><a href="#">Memberships</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <ul>
                <li><a href="/contact">Get in Touch</a></li>
                <li><a href="#">(555) 123-4567</a></li>
                <li><a href="#">join@premierfitness.com</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Premier Fitness. All rights reserved.</p>
            <p>Privacy Policy &nbsp;·&nbsp; Terms of Service</p>
          </div>
        </footer>
      </body>
    </html>
  );
}