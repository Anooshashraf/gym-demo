// 'use client';

// import './globals.css';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import CustomCursor from '@/components/CustomCursor';

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   const [scrolled, setScrolled] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
      
//       const totalScroll = document.documentElement.scrollTop;
//       const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//       setScrollProgress((totalScroll / windowHeight) * 100);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <html lang="en">
//       <head>
//         <title>Premier Fitness | Achieve Greatness</title>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800;900&display=swap" rel="stylesheet" />
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
//       </head>
//       <body>
//         <CustomCursor />

//         {/* Scroll Progress */}
//         <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

//         {/* Navbar */}
//         <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//           <div className="nav-container">
//             <Link href="/" className="logo">PREMIER FITNESS</Link>
//             <ul className="nav-links">
//               <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
//               <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
//               <li><Link href="/classes" className={pathname === '/classes' ? 'active' : ''}>Classes</Link></li>
//               <li><Link href="/trainers" className={pathname === '/trainers' ? 'active' : ''}>Trainers</Link></li>
//               <li><Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link></li>
//               <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
//             </ul>
//             <button className="btn-primary">Join Now</button>
//           </div>
//         </nav>

//         {/* Main Content */}
//         <main>
//           {children}
//         </main>

//         {/* Footer */}
//         <footer className="footer">
//           <div className="footer-content">
//             <div className="footer-brand">
//               <h2>PREMIER FITNESS</h2>
//               <p>Where Iron Meets Innovation</p>
//             </div>
//             <div className="footer-section">
//               <h3>Quick Links</h3>
//               <ul>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/about">About Us</a></li>
//                 <li><a href="/classes">Classes</a></li>
//                 <li><a href="/trainers">Our Trainers</a></li>
//               </ul>
//             </div>
//             <div className="footer-section">
//               <h3>Get In Touch</h3>
//               <ul>
//                 <li><a href="/contact">Contact</a></li>
//                 <li><a href="#">Memberships</a></li>
//                 <li><a href="#">Blog</a></li>
//                 <li><a href="#">FAQs</a></li>
//               </ul>
//             </div>
//             <div className="footer-section">
//               <h3>Follow Us</h3>
//               <div className="footer-socials">
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram"><i className="fab fa-instagram"></i></a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter"><i className="fab fa-twitter"></i></a>
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook"><i className="fab fa-facebook-f"></i></a>
//                 <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="YouTube"><i className="fab fa-youtube"></i></a>
//               </div>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>&copy; 2026 Premier Fitness. All rights reserved. | Privacy Policy | Terms of Service</p>
//           </div>
//         </footer>
//       </body>
//     </html>
//   );
// }








'use client';

import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import CustomCursor from '@/components/CustomCursor';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Reveal on scroll */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>Premier Fitness | Achieve Greatness</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,600;0,800;1,300&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <CustomCursor />
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <Link href="/" className="logo">
              PREMIER <span>FITNESS</span>
            </Link>
            <ul className="nav-links">
              {['/', '/about', '/classes', '/trainers', '/services', '/equipments','/contact'].map((href, i) => {
                const labels = ['Home', 'About', 'Classes', 'Trainers', 'Services', 'Equipments', 'Contact'];
                return (
                  <li key={href}>
                    <Link href={href} className={pathname === href ? 'active' : ''}>{labels[i]}</Link>
                  </li>
                );
              })}
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
                {[['instagram', 'https://instagram.com'], ['twitter', 'https://twitter.com'], ['facebook-f', 'https://facebook.com'], ['youtube', 'https://youtube.com']].map(([icon, href]) => (
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
