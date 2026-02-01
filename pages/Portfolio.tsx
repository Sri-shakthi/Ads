
import React, { useState, useEffect } from 'react';
// Added Link import from react-router-dom to fix "Cannot find name 'Link'" error
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  category: string;
  subCategory: string;
  title: string;
  description: string;
  client: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: '1',
    category: 'Web & Apps',
    subCategory: 'Product / FinTech',
    title: 'Neo-Bank',
    description: 'Revolutionizing digital banking with a focus on fluid UX and airy interfaces. We implemented a custom design system that scales across multiple regions.',
    client: 'NeoGlobal Ltd',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7hFoh6d1pY9YVieC_ghxgQ19HE5giDAmBh6VX_sS62aeQqA0zvtIG-i0WMTEifQLGZfTQSYMfewxY3XRbjxTymErOier-BI6Z6UeyU7YVlDFJuQB7DhXcu-AMb4vbPqc3_Zh2vp-s9D3NtwhcuugdsOIIZuDHM4rqSCU9FgKyNeOdrlanH0_qX0dzIpNNHi9VCQ0bGrOLqX4G7rkVEINm03n__XbzDQXtBbHcaoSC5nwpZV5DJSrvKGnxkbnd2lKGFoLWXAWEaxEn',
    tags: ['React', 'Framer Motion', 'Web3']
  },
  {
    id: '2',
    category: 'Branding',
    subCategory: 'Brand Identity',
    title: 'Lunar Coffee',
    description: 'A cosmic identity for a specialty roastery reaching for the stars. From packaging to store signage, every touchpoint was meticulously crafted.',
    client: 'Lunar Roasters',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_mlV4uGcpq4K57e2H8IRK9RLdSiqihnf5bvP4VB1TvOAAUFe_88HiOOo774U5_NIHZJSvKcS3FTCEBWiwh2HUEDhsiGugbYLvSWDtlc-PXS3W61XkvFJEgAJqyzyj0SYNWYBEY6pDeHpDN5x8_pRm-iJSzVP47ZqT_2HvLXBILMXmS7nm6vgRpr4UNAoFE8KHLfEXhDMTPpKtGPpGvePkZKe0YMdjpAn3Y3GkRnG1F6BlAeMEBLa8is2jeJlRkv0s5LGNROe5Zv7f',
    tags: ['Branding', 'Package Design', 'Typography']
  },
  {
    id: '3',
    category: 'Visual Systems',
    subCategory: 'Packaging',
    title: 'Eco-Pulse',
    description: 'Sustainable materials meet high-energy visual language for Gen-Z. The identity is built on vibrant gradients and bold, readable typography.',
    client: 'Vitality Co.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQPy86ySFcHJx2wqoQDQ_0-wLZQF3rcM_7YxfVoKPqeYT4I5ORECL6p2Rz7U_1ASvAJFS82IXUWIqd-c969cowuAIWUjbmNo8BXOSGX8AS46m4ilJfRzCw-630kjScdh1sQxG4lR7_tMo_JjSrmVrEzUhvP3uwaxBcqLbZBm1dhsB_jt7QsTOzniK4EXopYVTtjsfvfreZ37F8tHJ5ftZ_TOI80K81DzbDe4FK84NajbF65x0BAfCqNEaEZ3855kWhd1asTiYsG4vG',
    tags: ['Eco-Friendly', 'Visual Identity', 'Motion']
  },
  {
    id: '4',
    category: 'Motion',
    subCategory: 'Motion / Audio',
    title: 'Sonic Brand',
    description: 'Translating sound into a vibrant visual language for digital platforms. We explored synesthesia through code-driven animations.',
    client: 'AudioWave',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2_AHtW-xNlFclSPGxZo-JKx1NVTo-lh0sHfRR9fmmnck_T12NDBJKO9nEnBAL2WvwRIf8GLWREWSoAxxdNvaYK_uaBpCJBfyRUeopmwfhq4yG--CSjn3CpODzSDTAYZQAaYgLoNWdcivBw5oQQTdBFVa6_2CqfdOQknMj9SgMSERNXwl0pxs15GIIreRFN_9onCVcIEp1c5Y6tLGoDsrViPZAczVtkVnb2r06ezNcblDayrr3IbHpygQhTAjgHTxoue9dAUMDANuD',
    tags: ['After Effects', 'AI Motion', 'Sound Design']
  },
  {
    id: '5',
    category: 'Branding',
    subCategory: 'Fashion / Photography',
    title: 'Urban Wear',
    description: 'Capturing the raw energy of street culture through a luxury lens. A lifestyle brand that bridges the gap between high fashion and the city streets.',
    client: 'Urbanist',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB3Do6S_hRj829b3Wfpf_CiMlQKzOgeBt9v8g7IT13MWXhOzoJsp1SKW3rS-U65MXQV1iHN-8fMyW_eONmufUtcrpiZaFB1wOyltzw0G3GMQdQ4vNnTgktoNG8JjhBYmOAOF-Hw6YcWhG2g5KVMy9aUbpsxfHRfWoB7E_btCoqR7AYV4TinmzJJRYYlXHFseIsXGlBZy_3LUqqLGtaDkm5P26NxgXl4Dkmmy85zpR5VHCDfBK8dMNJXfZ28RxggxXFd7LO2W390ntG',
    tags: ['Fashion', 'Photography', 'Layout']
  },
  {
    id: '6',
    category: 'Motion',
    subCategory: 'Video / Content',
    title: 'Vibe Studio',
    description: 'Dynamic storytelling that moves audiences and drives engagement. High-impact content designed for the vertical-first generation.',
    client: 'Vibe Media Group',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdYSvZMzJ-HyGO1HZ15-latts4x9pdrxyh_v2oMT1b0b0SnS3WdN6rUWqKAXSfeGvdliEdgfY1s_TG5YssKzi5Bk-X-YiUBDzB2fuWP92QAdzOhWR3iIDYOJvxqHGCphPtCpwTqR92-pZKjg2IIXWXQaSsdo9CkmZdFbSZLN4Lje0BeQn2UgC_jIkrF96hqS-tR1laJw35WeO3mt9ioFQsk0rmCwfZnxC-9mcZ0qzzmXAlmhu8VQ75F657WKwB8nQAD8jdv4sFwZMC',
    tags: ['TikTok', 'Instagram Reels', 'Video Editing']
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [filter]);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
          <div className="bg-white w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl relative z-20 flex flex-col md:flex-row animate-fade-in-up">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-30 size-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="w-full md:w-3/5 h-[300px] md:h-auto overflow-hidden">
              <img alt={selectedProject.title} className="w-full h-full object-cover" src={selectedProject.image} />
            </div>
            <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto bg-white">
              <span className="text-[#0e5e8a] text-[10px] font-black uppercase tracking-[0.2em] block mb-4">{selectedProject.subCategory}</span>
              <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">{selectedProject.title}</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">{selectedProject.description}</p>
              
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Client</h4>
                  <p className="text-slate-900 font-bold">{selectedProject.client}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-xs font-bold">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-[#0e5e8a] text-white font-bold rounded-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                Launch Project <span className="material-symbols-outlined text-lg">open_in_new</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1">
        <div className="mx-auto max-w-[960px] pt-24 pb-12 text-center px-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900">
            Crafting <span className="text-[#0e5e8a] font-light italic">Digital Excellence</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            A premium design collective dedicated to building high-end interactive experiences and timeless visual identities.
          </p>
        </div>

        <div className="mx-auto max-w-[960px] px-6 mb-16 animate-fade-in-up [animation-delay:0.1s]">
          <div className="flex gap-4 py-4 flex-wrap justify-center">
            {['All Work', 'Web & Apps', 'Branding', 'Visual Systems', 'Motion'].map((item) => (
              <button 
                key={item}
                onClick={() => setFilter(item === 'All Work' ? 'All' : item)}
                className={`flex h-11 shrink-0 items-center justify-center rounded-full px-8 text-xs font-bold uppercase tracking-widest transition-all ${
                  (filter === 'All' && item === 'All Work') || filter === item
                    ? 'bg-[#0e5e8a] text-white shadow-xl shadow-[#0e5e8a]/20'
                    : 'bg-slate-50 border border-slate-100 text-slate-500 hover:bg-white hover:shadow-md'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className={`mx-auto max-w-[1280px] px-6 pb-32 transition-opacity duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="project-card group relative overflow-hidden rounded-2xl bg-slate-50 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                    src={project.image} 
                  />
                </div>
                <div className="overlay absolute inset-0 bg-white/90 p-10 flex flex-col justify-end opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="mb-auto flex justify-between items-start">
                    <span className="text-[#0e5e8a] text-[10px] font-black uppercase tracking-[0.2em]">{project.subCategory}</span>
                    <span className="material-symbols-outlined text-slate-400">fullscreen</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Client: {project.client}</span>
                    <div className="flex items-center text-[#0e5e8a] font-bold text-xs uppercase tracking-widest gap-2">
                      View Details <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </div>
                  </div>
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
                <button className="flex min-w-[200px] items-center justify-center rounded-full h-16 px-10 border border-slate-200 text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-white hover:border-slate-300 transition-all">
                  Our Process
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
