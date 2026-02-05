
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="https://ik.imagekit.io/qbnsahjpu/assets/Arivoli/arivoli-logo.jpeg?updatedAt=1770328291783"
            alt="Arivoli logo"
            className="h-9 w-auto object-cover transition-transform scale-[2] origin-left group-hover:scale-[2.05]"
            loading="eager"
            decoding="async"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link 
            to="/" 
            className={`text-sm font-semibold transition-colors relative ${isActive('/') ? 'text-[#0e5e8a] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#0e5e8a]' : 'text-slate-600 hover:text-[#0e5e8a]'}`}
          >
            Services
          </Link>
          <Link 
            to="/portfolio" 
            className={`text-sm font-semibold transition-colors relative ${isActive('/portfolio') ? 'text-[#0e5e8a] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#0e5e8a]' : 'text-slate-600 hover:text-[#0e5e8a]'}`}
          >
            Portfolio
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-semibold transition-colors relative ${isActive('/contact') ? 'text-[#0e5e8a] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#0e5e8a]' : 'text-slate-600 hover:text-[#0e5e8a]'}`}
          >
            Contact
          </Link>
        </nav>
        <a
          href="tel:+918056625313"
          className="hidden md:flex items-center justify-center rounded-full h-11 px-6 bg-[#0e5e8a] text-white text-sm font-bold hover:shadow-lg hover:shadow-[#0e5e8a]/20 transition-all hover:-translate-y-0.5"
        >
          <span>Book a Call</span>
        </a>
        <button className="md:hidden text-slate-900">
           <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-white pt-16 pb-8 px-6 border-t border-slate-100">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
          <img
            src="https://ik.imagekit.io/qbnsahjpu/assets/Arivoli/arivoli-logo.jpeg?updatedAt=1770328291783"
            alt="Arivoli logo"
            className="h-8 w-auto object-cover scale-[2] origin-left"
            loading="lazy"
            decoding="async"
          />
          </div>
          <p className="text-slate-500 text-sm font-medium max-w-xs">
            High-end branding, motion, and digital experiences crafted for ambitious businesses.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Quick Links</p>
          <Link className="text-slate-600 hover:text-[#0e5e8a] text-sm font-semibold" to="/">Services</Link>
          <Link className="text-slate-600 hover:text-[#0e5e8a] text-sm font-semibold" to="/portfolio">Portfolio</Link>
          <Link className="text-slate-600 hover:text-[#0e5e8a] text-sm font-semibold" to="/contact">Contact</Link>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Contact</p>
          <a
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#0e5e8a] transition-colors text-sm font-semibold"
            href="mailto:arivolidesignerstudio@gmail.com"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
              <path
                fill="currentColor"
                d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6zm3-.5A1.5 1.5 0 0 0 3.5 7v.3l8.5 5.1L20.5 7V7A1.5 1.5 0 0 0 19 5.5H5zm15.5 3.3-7.9 4.8a1.5 1.5 0 0 1-1.6 0L3.5 8.8V18A1.5 1.5 0 0 0 5 19.5h14a1.5 1.5 0 0 0 1.5-1.5V8.8z"
              />
            </svg>
            arivolidesignerstudio@gmail.com
          </a>
          <a
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#0e5e8a] transition-colors text-sm font-semibold"
            href="tel:+918056625313"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
              <path
                fill="currentColor"
                d="M6.6 2h2.9c.5 0 .9.3 1 .8l.8 3a1 1 0 0 1-.3 1l-2 1.6a13.8 13.8 0 0 0 6.5 6.5l1.6-2a1 1 0 0 1 1-.3l3 .8c.5.1.8.6.8 1v2.9c0 .6-.4 1-1 1A17.5 17.5 0 0 1 2 5c0-.6.4-1 1-1h3.6z"
              />
            </svg>
            +91 80566 25313
          </a>
          <a
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#0e5e8a] transition-colors text-sm font-semibold"
            href="https://www.instagram.com/arivoli.designerstudio/"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
              <path
                fill="currentColor"
                d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zm5.2-3.2a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2z"
              />
            </svg>
            Instagram
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest border-t border-slate-100 pt-8">
        <p>© 2026 AD STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6"></div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
