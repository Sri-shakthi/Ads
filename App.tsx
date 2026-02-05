
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
          <div className="size-9 bg-[#0e5e8a] flex items-center justify-center rounded-lg text-white transition-transform group-hover:scale-105">
            <span className="font-black text-xl">AD</span>
          </div>
          <h2 className="text-slate-900 text-xl font-extrabold tracking-tight">AD Studio</h2>
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
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-[#0e5e8a] flex items-center justify-center rounded-lg text-white">
            <span className="font-black text-sm">AD</span>
          </div>
          <span className="text-slate-900 font-extrabold text-lg">AD Studio.</span>
        </div>
        <div className="flex gap-6">
          <a
            className="text-slate-400 hover:text-[#0e5e8a] transition-colors text-sm font-semibold"
            href="mailto:arivolidesignerstudio@gmail.com"
          >
            arivolidesignerstudio@gmail.com
          </a>
          <a
            className="text-slate-400 hover:text-[#0e5e8a] transition-colors text-sm font-semibold"
            href="https://www.instagram.com/arivoli.designerstudio/"
            target="_blank"
            rel="noreferrer"
          >
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
