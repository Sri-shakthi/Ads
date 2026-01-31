
import React, { useState } from 'react';

interface Service {
  id: string;
  category: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  timeline: string;
  tags: string[];
  image: string;
  number: string;
}

const services: Service[] = [
  {
    id: '1',
    category: 'Digital',
    number: '01',
    title: 'Website Experience',
    price: '$4,500',
    description: "We don't just build websites; we build conversion-optimized engines that tell your brand's unique story through interaction.",
    features: ['Custom UX/UI Design', 'Webflow Development', 'Advanced SEO Setup'],
    timeline: '6 - 8 Weeks',
    tags: ['Figma', 'Source'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClleUPNnMI5AflqozzkNCUMkVYtGHhXsx1ntLekIpD5aUX1-UeX0l6Yx-xZCsSts8bcGcuZGciwtAULPcRlQvLsz3DzEqYUW9oV1dTzHCWuS6PviVLA8pXS_TqHL4ER5ZXiMX6C2p8ZmDfVJ2ddzEbi1LHmFy1j8ajOl9aJSvmq0na4IWuZKB7g8wFSSjOG7ZaOCH3p4bDl8SlsAJYmMbwC0SWY20wIdvIXs1snPMKVewaA_HjEeFDp8sc6JUBrvfkWAEnL0hSpN34'
  },
  {
    id: '2',
    category: 'Print',
    number: '02',
    title: 'High-End Print Assets',
    price: '$1,200',
    description: 'Premium brochures, lookbooks, and posters designed for tactile impact. We bridge the gap between digital and physical.',
    features: ['Typographic Layouts', 'Paper Stock Consulting', 'Print Management'],
    timeline: '2 - 3 Weeks',
    tags: ['Vector', 'PDF'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhLN0KEsgTgfQjs38Z3zay6-LOTWqs1Zyy4s4lZZhC0_x21afHO-zTAh6R2D6XQdOJRa5MqCS-QZYblzjaQ-whfzENiKVClEHVJXNu27xe3LXsfKNBqnysrOobd1ub_eqbUlx_rbXSG9PFqXYO20VU2UjDSdvDFjqHP_aqyBVpAT70LoRL29BVGacPCwbY7jpDi4Gp6F4sb6CRtWFciHJzs_-5iPZALzFuJMVE-dlYlboDJMypATdk-Db7MakeNnMe57sQcW7EZN1C'
  },
  {
    id: '3',
    category: 'Motion',
    number: '03',
    title: 'AI Motion & Content',
    price: '$2,800',
    description: 'Harnessing future tech to create viral-quality video content. We specialize in high-end Reels and cinematic AI generation.',
    features: ['Storyboarding', 'AI Synthesis', 'Sound Design'],
    timeline: '1 - 2 Weeks',
    tags: ['4K MP4', 'Source'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfBnrbEB4Q-KtojiLxp8z5NVR_XCs6JUq3ttV3Gd641jiSn6x94QG2PlNeyHaY5QaX45SuNJA9EngOMf576NrApJ2-38WzHlIfqW8E4iW4WunAFP9ifQHG3rFGDXveKFu4mimtHyUnhyGaxd7pnqROuzAXpE1MTHV1Er1XqLtv_Qc1WspCqzUAMKlNrHLtyTL08_cYm9bJAi79mrYE-q5juKkAzEPG0GvuBqXjPB_ic5AHfj8xLaBCBHIILO_jjf3nu-joZVGbDcsO'
  }
];

const Services: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredServices = filter === 'All' 
    ? services 
    : services.filter(s => s.category.includes(filter) || filter.includes(s.category));

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden bg-white/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-20 pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-[#11b4d4] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0e5e8a] rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-[#0e5e8a] bg-[#0e5e8a]/10 rounded-full">
            Elevating Digital Standards
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
            Crafting <span className="gradient-text">Premium</span> Experiences
          </h1>
          <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            We combine high-end design with technical precision to build brands that lead markets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="h-14 px-10 bg-[#0e5e8a] text-white rounded-full font-bold shadow-xl shadow-[#0e5e8a]/25 hover:bg-[#0e5e8a]/90 transition-all hover:scale-105 active:scale-95">
              Start Your Project
            </button>
            <button className="h-14 px-10 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
              View Showreel
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="px-6 mb-12 animate-fade-in-up [animation-delay:0.1s] opacity-0 [animation-fill-mode:forwards]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar pb-4">
            {['All Services', 'Digital Design', 'Print & Branding', 'Motion & Video'].map((item) => (
              <button 
                key={item}
                onClick={() => setFilter(item === 'All Services' ? 'All' : item.split(' ')[0])}
                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  (filter === 'All' && item === 'All Services') || item.includes(filter)
                    ? 'bg-[#0e5e8a] text-white' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0e5e8a]/30'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12">
          {filteredServices.map((service, idx) => (
            <div 
              key={service.id} 
              className={`glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row group animate-fade-in-up opacity-0 [animation-fill-mode:forwards]`}
              style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
            >
              <div className="lg:w-[45%] h-[320px] lg:h-auto overflow-hidden">
                <img 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={service.image} 
                />
              </div>
              <div className="flex-1 p-8 lg:p-12 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[#0e5e8a] font-bold text-xs uppercase tracking-widest block mb-2">{service.number} / {service.category}</span>
                    <h3 className="text-3xl font-black text-slate-900">{service.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-xs font-semibold block">From</span>
                    <span className="text-[#0e5e8a] text-2xl font-black">{service.price}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <ul className="space-y-3">
                    {service.features.map(feat => (
                      <li key={feat} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                        <span className="material-symbols-outlined text-[#0e5e8a] text-lg">verified</span> {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Timeline</p>
                      <p className="text-slate-800 font-bold">{service.timeline}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="mt-auto w-full md:w-fit px-8 h-12 bg-slate-900 text-white font-bold rounded-xl hover:bg-[#0e5e8a] transition-colors flex items-center justify-center gap-2">
                  Inquire Project <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 px-6 border-y border-slate-100 animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-slate-900 mb-4">Loved by Leading Brands</h3>
            <p className="text-slate-500 font-medium">Follow our process on Instagram</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                user: "@techvision_ceo", role: "Global Tech Corp", likes: "2.4k", 
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaAt4dTyaymXYd6m9WitohZZnJn0BUzIwRFpKRo9JhodmiqbBBPO1GdTVuSNPDwZ0UWeFnxgGp5gBGZZAnIyFcVLT18cH8VZJFE68upSjoM2zmBcNmveyuG9-2RqyvbWQ5-N8CYbeAKQFmDJ7nxyYB7lHdrhjKSV9HS_FtBU9zCfVZ7RWrlOJTrENukUgK84tLPHDp0KS_35D40XQAy7akrcbUIzT7waBsNurPu1Jli6d19j9C6Va4gttfpGf-Z5n6Rj6F_zThuMLh",
                text: "The redesign of our corporate identity by AD Studio was transformative. Their attention to motion detail is unmatched in the industry."
              },
              { 
                user: "@sarah.design", role: "Creative Director", likes: "1.8k", 
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Wy_rPYZnF0yup75z7OgJ1Q5AfHYra9MWmJIj7YInYCeQJKRkjEkUL6bPUalZgQbkO__oBFZRKdeYTGvziHdcQbyDX-o3Tx6eelLwM55SGlRYqZZysWHHjlwtaWZpBO0e7mnbiVEyjNc0IXdE5teNbrhTH7QStORSpqMNdZZldQC9cyMj85utlU261_QL4vBeFN2-_JnmRSgBwQFJt5Mfi7KVifQR3Jm2uIQrKbZEc-jTZ8ogyHS4RX5j5ml1IBrBqlNq5-v5_1oO",
                text: "Their AI video work blew our marketing team away. It looks incredibly organic and fits our high-end aesthetic perfectly."
              },
              { 
                user: "@luxe_brands", role: "E-commerce Founder", likes: "3.1k", 
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG9_tOw_mRQHdcS-pbqrTgi3SjSNcLu91kwUMGhhHxtE8q7qTYnMF1MHL8ahGPx9dohDMXfPiJFL2dpm-_c46rMXf6xxbY9f6akDkvmJem7WW3XVMWkc-oyIyuf_qnCLFJ2YPWXDlKV0zurvy2WAB4olS8cBXdeRsvbYXQy6Rd2XTF7cbgss3F85LJpBfGBmuPptXNTvLfu4DN1V5g0agR-NzjmOvM9yo43LyX5NwWdAVVpRoZUH-ri8sLm7CepvIEm9cxWpMZmp2Y",
                text: "Professionalism from start to finish. The packaging design they delivered was tactile, luxury, and exactly what we envisioned."
              }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
                      <img alt="User" src={t.img} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{t.user}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                  <a className="text-[#0e5e8a]" href="#"><span className="material-symbols-outlined">link</span></a>
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="mt-auto pt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm text-pink-500">favorite</span> {t.likes} Likes
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-[#0e5e8a] rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up">
          <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Ready to Build the Future of Your Brand?</h3>
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't settle for average. Let's create something extraordinary that defines your industry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="h-14 px-12 bg-[#0e5e8a] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(14,94,138,0.5)] transition-all">Book Discovery Call</button>
            <button className="h-14 px-12 bg-white/10 text-white border border-white/20 backdrop-blur-md font-bold rounded-full hover:bg-white/20 transition-all">Download Rate Card</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
