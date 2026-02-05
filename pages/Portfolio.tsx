import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const reels = [
    {
      name: 'Ganesh Bhavan',
      role: 'Restaurant Brand',
      permalink: 'https://www.instagram.com/reel/DTVG-NbEVsp/?utm_source=ig_embed&utm_campaign=loading',
      profileUrl: 'https://www.instagram.com/ganeshbhavan_thanjavur/'
    },
    {
      name: 'Arafath Biryani',
      role: 'Restaurant Brand',
      permalink: 'https://www.instagram.com/reel/DULXbi_k2z_/?utm_source=ig_embed&utm_campaign=loading',
      profileUrl: 'https://www.instagram.com/arafath_biriyani/'
    },
    {
      name: 'KKT Traders',
      role: 'Retail Brand',
      permalink: 'https://www.instagram.com/reel/DT5g3TZCbeo/?utm_source=ig_embed&utm_campaign=loading',
      profileUrl: 'https://www.instagram.com/kkt_kktraders/'
    }
  ];

  useEffect(() => {
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
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <main className="flex-1">
        <div className="mx-auto max-w-[960px] pt-24 pb-12 text-center px-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900">
            Crafting <span className="text-[#0e5e8a] font-light italic">Digital Excellence</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            A premium design collective dedicated to building high-end interactive experiences and timeless visual identities.
          </p>
        </div>

        <div className="mx-auto max-w-[1200px] px-6 pb-32 animate-fade-in-up [animation-delay:0.1s]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {reels.map((reel) => (
              <div
                key={reel.permalink}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden p-4"
              >
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
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{reel.name}</p>
                    <p className="text-xs text-slate-500">{reel.role}</p>
                  </div>
                  <a
                    className="text-[#0e5e8a] font-bold text-xs uppercase tracking-widest flex items-center gap-2"
                    href={reel.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Details <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="bg-slate-50 py-32 border-t border-slate-100">
          <div className="mx-auto max-w-[960px] px-6">
            <div className="flex flex-col items-center text-center gap-12">
              <div className="space-y-6">
                <h2 className="text-slate-900 tracking-tight text-5xl md:text-6xl font-extrabold max-w-[800px]">
                  Let's define your <span className="text-[#0e5e8a] italic font-normal">Future</span>.
                </h2>
                <p className="text-slate-500 text-xl font-light max-w-[600px] mx-auto leading-relaxed">Ready to elevate your brand with world-class design? Our team is standing by.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="flex min-w-[200px] items-center justify-center rounded-full h-16 px-10 bg-[#0e5e8a] text-white text-xs font-bold uppercase tracking-widest hover:shadow-2xl hover:shadow-[#0e5e8a]/30 transition-all active:scale-95">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
