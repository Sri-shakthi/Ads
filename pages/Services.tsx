
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  category: string;
  title: string;
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
    description: "We don't just build websites; we build conversion-optimized engines that tell your brand's unique story through interaction.",
    features: ['Custom UX/UI Design', 'Webflow Development', 'Advanced SEO Setup'],
    timeline: '1 Week',
    tags: ['Figma', 'Source'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClleUPNnMI5AflqozzkNCUMkVYtGHhXsx1ntLekIpD5aUX1-UeX0l6Yx-xZCsSts8bcGcuZGciwtAULPcRlQvLsz3DzEqYUW9oV1dTzHCWuS6PviVLA8pXS_TqHL4ER5ZXiMX6C2p8ZmDfVJ2ddzEbi1LHmFy1j8ajOl9aJSvmq0na4IWuZKB7g8wFSSjOG7ZaOCH3p4bDl8SlsAJYmMbwC0SWY20wIdvIXs1snPMKVewaA_HjEeFDp8sc6JUBrvfkWAEnL0hSpN34'
  },
  {
    id: '2',
    category: 'Print',
    number: '02',
    title: 'High-End Print Assets',
    description: 'Premium brochures, lookbooks, and posters designed for tactile impact. We bridge the gap between digital and physical.',
    features: ['Typographic Layouts', 'Paper Stock Consulting', 'Print Management'],
    timeline: '1 Week',
    tags: ['Vector', 'PDF'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhLN0KEsgTgfQjs38Z3zay6-LOTWqs1Zyy4s4lZZhC0_x21afHO-zTAh6R2D6XQdOJRa5MqCS-QZYblzjaQ-whfzENiKVClEHVJXNu27xe3LXsfKNBqnysrOobd1ub_eqbUlx_rbXSG9PFqXYO20VU2UjDSdvDFjqHP_aqyBVpAT70LoRL29BVGacPCwbY7jpDi4Gp6F4sb6CRtWFciHJzs_-5iPZALzFuJMVE-dlYlboDJMypATdk-Db7MakeNnMe57sQcW7EZN1C'
  },
  {
    id: '3',
    category: 'Motion',
    number: '03',
    title: 'AI Motion & Content',
    description: 'Harnessing future tech to create viral-quality video content. We specialize in high-end Reels and cinematic AI generation.',
    features: ['Storyboarding', 'AI Synthesis', 'Sound Design'],
    timeline: '1 - 2 Weeks',
    tags: ['4K MP4', 'Source'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfBnrbEB4Q-KtojiLxp8z5NVR_XCs6JUq3ttV3Gd641jiSn6x94QG2PlNeyHaY5QaX45SuNJA9EngOMf576NrApJ2-38WzHlIfqW8E4iW4WunAFP9ifQHG3rFGDXveKFu4mimtHyUnhyGaxd7pnqROuzAXpE1MTHV1Er1XqLtv_Qc1WspCqzUAMKlNrHLtyTL08_cYm9bJAi79mrYE-q5juKkAzEPG0GvuBqXjPB_ic5AHfj8xLaBCBHIILO_jjf3nu-joZVGbDcsO'
  }
];

const Services: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [reelsReady, setReelsReady] = useState(false);
  const reelsRef = useRef<HTMLDivElement>(null);
  const reelsSectionRef = useRef<HTMLDivElement>(null);

  const filteredServices = filter === 'All' 
    ? services 
    : services.filter(s => s.category.includes(filter) || filter.includes(s.category));

  const reels = [
    {
      handle: '@ganeshbhavan_thanjavur',
      role: 'Restaurant Brand',
      permalink: 'https://www.instagram.com/reel/DTVG-NbEVsp/?utm_source=ig_embed&utm_campaign=loading'
    },
    {
      handle: '@arafath_biriyani',
      role: 'Restaurant Brand',
      permalink: 'https://www.instagram.com/reel/DULXbi_k2z_/?utm_source=ig_embed&utm_campaign=loading'
    },
    {
      handle: '@kkt_kktraders',
      role: 'Retail Brand',
      permalink: 'https://www.instagram.com/reel/DT5g3TZCbeo/?utm_source=ig_embed&utm_campaign=loading'
    },
    {
      handle: '@ganeshbhavan_thanjavur',
      role: 'Restaurant Brand',
      permalink: 'https://www.instagram.com/reel/DSrMdhPCEEJ/?utm_source=ig_embed&utm_campaign=loading'
    },
    {
      handle: '@ganeshbhavan_thanjavur',
      role: 'Restaurant Brand',
      permalink: 'https://www.instagram.com/reel/DTg_6V-Ef-H/?utm_source=ig_embed&utm_campaign=loading'
    },
    {
      handle: '@ganeshbhavan_thanjavur',
      role: 'Restaurant Brand',
      permalink: 'https://www.instagram.com/reel/DT0Ai_DDZKr/?utm_source=ig_embed&utm_campaign=loading'
    },
    {
      handle: '@ganeshbhavan_thanjavur',
      role: 'Restaurant Brand',
      permalink: 'https://www.instagram.com/reel/DOyGkfJiAal/?utm_source=ig_embed&utm_campaign=loading'
    },
    {
      handle: '@arafath_biriyani',
      role: 'Restaurant Brand',
      permalink: 'https://www.instagram.com/reel/DTiH_JuE0gN/?utm_source=ig_embed&utm_campaign=loading'
    },
    {
      handle: '@kkt_kktraders',
      role: 'Retail Brand',
      permalink: 'https://www.instagram.com/reel/DTRgt7eCaGL/?utm_source=ig_embed&utm_campaign=loading'
    },
    {
      handle: '@kkt_kktraders',
      role: 'Retail Brand',
      permalink: 'https://www.instagram.com/reel/DR9EKhLiXye/?utm_source=ig_embed&utm_campaign=loading'
    },
    {
      handle: '@kkt_kktraders',
      role: 'Retail Brand',
      permalink: 'https://www.instagram.com/reel/DRwpahCCd5z/?utm_source=ig_embed&utm_campaign=loading'
    }
  ];

  useEffect(() => {
    if (!reelsSectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setReelsReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(reelsSectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!reelsReady) return;
    const scriptId = 'instagram-embed-script';
    if (document.getElementById(scriptId)) {
      // @ts-expect-error Instagram injects this.
      window.instgrm?.Embeds?.process?.();
      return;
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    script.onload = () => {
      // @ts-expect-error Instagram injects this.
      window.instgrm?.Embeds?.process?.();
    };
    document.body.appendChild(script);
  }, [reelsReady]);

  const scrollReels = (direction: 'left' | 'right') => {
    if (!reelsRef.current) return;
    const scrollAmount = reelsRef.current.clientWidth * 0.9;
    reelsRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-[50vh] pt-20 pb-16 px-6 overflow-hidden bg-white/50 flex items-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-20 pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-[#11b4d4] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0e5e8a] rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in-up w-full">
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
            <Link
              to="/portfolio"
              className="h-14 px-10 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all inline-flex items-center justify-center"
            >
              View Our Portfolio
            </Link>
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
              <div className="lg:w-[45%] h-[320px] lg:h-auto overflow-hidden bg-slate-100">
                <img 
                  alt={service.title} 
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={idx === 0 ? 'high' : 'auto'}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-0"
                  onLoad={(e) => (e.currentTarget.classList.add('opacity-100'))}
                  src={service.image} 
                />
              </div>
              <div className="flex-1 p-8 lg:p-12 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[#0e5e8a] font-bold text-xs uppercase tracking-widest block mb-2">{service.number} / {service.category}</span>
                    <h3 className="text-3xl font-black text-slate-900">{service.title}</h3>
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
                <Link
                  to="/contact"
                  className="mt-auto w-full md:w-fit px-8 h-12 bg-slate-900 text-white font-bold rounded-xl hover:bg-[#0e5e8a] transition-colors flex items-center justify-center gap-2"
                >
                  Inquire Project <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={reelsSectionRef}
        className="bg-white py-24 px-6 border-y border-slate-100 animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-slate-900 mb-4">Loved by Leading Brands</h3>
            <p className="text-slate-500 font-medium">Watch our latest Instagram Reels</p>
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={() => scrollReels('left')}
              className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 size-12 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 hover:bg-slate-50"
              aria-label="Scroll reels left"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div
              ref={reelsRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar"
            >
              {reels.map((reel) => (
                <div
                  key={reel.permalink}
                  className="min-w-[280px] md:min-w-[360px] snap-center bg-white border border-slate-100 rounded-3xl overflow-hidden p-4"
                >
                  <div className="instagram-embed">
                    {reelsReady ? (
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={reel.permalink}
                        data-instgrm-version="14"
                        style={{
                          background: '#fff',
                          border: 0,
                          margin: 0,
                          maxWidth: '540px',
                          minWidth: '280px',
                          padding: 0,
                          width: '100%'
                        }}
                      >
                        <div style={{ padding: 16 }}>
                          <a
                            href={reel.permalink}
                            style={{
                              background: '#fff',
                              lineHeight: 0,
                              padding: 0,
                              textAlign: 'center',
                              textDecoration: 'none',
                              width: '100%',
                              display: 'block'
                            }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View this post on Instagram
                          </a>
                        </div>
                      </blockquote>
                    ) : (
                      <div className="h-[420px] w-full rounded-2xl bg-slate-100 animate-pulse" />
                    )}
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">{reel.handle}</p>
                      <p className="text-xs text-slate-500">{reel.role}</p>
                    </div>
                    <a className="text-[#0e5e8a]" href={reel.permalink} target="_blank" rel="noreferrer">
                      <span className="material-symbols-outlined">open_in_new</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollReels('right')}
              className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 size-12 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 hover:bg-slate-50"
              aria-label="Scroll reels right"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
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
            <Link
              to="/contact"
              className="h-14 px-12 bg-[#0e5e8a] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(14,94,138,0.5)] transition-all inline-flex items-center justify-center"
            >
              Book Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
