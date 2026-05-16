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
      setScrolled(window.scrollY > 50);
      
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((totalScroll / windowHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Premier Fitness | Achieve Greatness</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CustomCursor />

        {/* Scroll Progress */}
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

        {/* Navbar */}
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <Link href="/" className="logo">PREMIER FITNESS</Link>
            <ul className="nav-links">
              <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
              <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
              <li><Link href="/classes" className={pathname === '/classes' ? 'active' : ''}>Classes</Link></li>
              <li><Link href="/trainers" className={pathname === '/trainers' ? 'active' : ''}>Trainers</Link></li>
              <li><Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link></li>
              <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            </ul>
            <button className="btn-primary">Join Now</button>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h2>PREMIER FITNESS</h2>
              <p>Where Iron Meets Innovation</p>
            </div>
            <div className="footer-socials">
              <a href="#" className="social-icon">IG</a>
              <a href="#" className="social-icon">TW</a>
              <a href="#" className="social-icon">FB</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Premier Fitness. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
