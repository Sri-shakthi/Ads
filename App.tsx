
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
        <Link 
          to="/contact" 
          className="hidden md:flex items-center justify-center rounded-full h-11 px-6 bg-[#0e5e8a] text-white text-sm font-bold hover:shadow-lg hover:shadow-[#0e5e8a]/20 transition-all hover:-translate-y-0.5"
        >
          <span>Book a Call</span>
        </Link>
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
        <div className="flex gap-8">
          <a className="text-slate-400 hover:text-[#0e5e8a] transition-colors" href="#">
            <svg className="size-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
          </a>
          <a class="text-slate-400 hover:text-[#0e5e8a] transition-colors" href="#">
            <span className="material-symbols-outlined">language</span>
          </a>
          <a class="text-slate-400 hover:text-[#0e5e8a] transition-colors" href="#">
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest border-t border-slate-100 pt-8">
        <p>© 2024 AD STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <a className="hover:text-[#0e5e8a] transition-colors" href="#">Privacy</a>
          <a className="hover:text-[#0e5e8a] transition-colors" href="#">Terms</a>
          <a className="hover:text-[#0e5e8a] transition-colors" href="#">Careers</a>
        </div>
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
