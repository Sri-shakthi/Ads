
import React, { useState, useRef, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const FloatingAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isTyping) return;

    const userMsg = message;
    setMessage("");
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...chatHistory.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.text }] })), { role: 'user', parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: "You are the 'AD Studio Design Concierge'. You are professional, creative, and expert in digital design, branding, and motion graphics. Your goal is to help potential clients understand AD Studio's services (Web, Print, Motion) and help them conceptualize their projects. Keep answers concise and high-end.",
        }
      });

      const aiText = response.text || "I'm having trouble connecting right now. Please try again or email us directly!";
      setChatHistory(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error(error);
      setChatHistory(prev => [...prev, { role: 'model', text: "Apologies, I encountered an error. Please reach out to our team via the contact page." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden mb-4 animate-fade-in-up">
          <div className="p-4 bg-[#0e5e8a] text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
              </div>
              <span className="font-bold text-sm tracking-tight">Design Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
            {chatHistory.length === 0 && (
              <div className="text-center py-10 px-6">
                <div className="size-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl text-[#0e5e8a]">stylus_note</span>
                </div>
                <h4 className="text-slate-900 font-bold mb-2">How can we help?</h4>
                <p className="text-slate-500 text-xs">Ask about our web packages, brand strategy, or request a design consultation.</p>
              </div>
            )}
            {chatHistory.map((chat, i) => (
              <div key={i} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                  chat.role === 'user' 
                  ? 'bg-[#0e5e8a] text-white rounded-tr-none' 
                  : 'bg-slate-100 text-slate-700 rounded-tl-none'
                }`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 text-slate-400 px-4 py-2 rounded-2xl rounded-tl-none text-xs flex items-center gap-1">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce [animation-delay:0.2s]">.</span>
                  <span className="animate-bounce [animation-delay:0.4s]">.</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-100 flex gap-2">
            <input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your project..."
              className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-[#0e5e8a]/20"
            />
            <button className="size-10 bg-[#0e5e8a] text-white rounded-xl flex items-center justify-center hover:scale-105 transition-transform active:scale-95">
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </form>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`size-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${isOpen ? 'bg-slate-900 text-white rotate-90' : 'bg-[#0e5e8a] text-white'}`}
      >
        <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'smart_toy'}</span>
      </button>
    </div>
  );
};

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
        <FloatingAI />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
