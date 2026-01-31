
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry submitted! We'll be in touch soon.");
  };

  return (
    <div className="bg-[#f0f3f4] min-h-screen">
      <main className="max-w-[1100px] mx-auto px-6 py-12">
        <div className="mb-12 text-center md:text-left animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Let's build something <span className="text-[#0e5e8a] italic">extraordinary</span></h1>
          <p className="text-slate-500 text-lg max-w-2xl font-medium">Tell us about your project or schedule a call to explore how our design studio can help you scale.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1 animate-fade-in-up [animation-delay:0.1s]">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-6 flex flex-col gap-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Direct Connect</h3>
              <a className="flex items-center gap-4 group" href="#">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">chat</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">WhatsApp</p>
                  <p className="text-xs text-slate-500">Live chat support</p>
                </div>
              </a>
              <a className="flex items-center gap-4 group" href="#">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0e5e8a] group-hover:bg-[#0e5e8a] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">hello@adstudio.design</p>
                  <p className="text-xs text-slate-500">Email our team</p>
                </div>
              </a>
              <a className="flex items-center gap-4 group pt-2 border-t border-slate-100" href="#">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">camera</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Connect on Instagram</p>
                  <p className="text-xs text-slate-500">@adstudio.official</p>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="h-2.5 bg-[#0ea5e9] w-full"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-[#0ea5e9]">calendar_today</span>
                  <h3 className="text-lg font-bold text-slate-900">Discovery Call</h3>
                </div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">Rather speak to someone? Book a 15-min intro call to discuss your vision.</p>
                <div className="aspect-video bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-4">
                  <span className="material-symbols-outlined text-3xl text-slate-300 mb-2">event_note</span>
                  <p className="text-xs font-semibold text-slate-400">Calendly Widget Area</p>
                  <button className="mt-4 text-xs font-bold text-[#0ea5e9] hover:underline">Pick a slot →</button>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="h-2.5 bg-[#0e5e8a] w-full"></div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Project Inquiry Form</h2>
                  <p className="text-slate-600 text-sm">Please fill out this form and we'll get back to you within 24 hours. Required fields are marked with an asterisk (*)</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-8 flex flex-col gap-8">
                  <div className="flex flex-col gap-6">
                    <label className="flex flex-col gap-3 group">
                      <span className="text-base font-semibold text-slate-900">Full Name <span className="text-red-500">*</span></span>
                      <input 
                        required
                        className="border-b-2 border-slate-200 focus:border-[#0e5e8a] transition-all duration-300 outline-none py-2 bg-transparent text-lg placeholder:text-slate-300 placeholder:font-light focus:ring-0 px-0" 
                        placeholder="Your answer" 
                        type="text"
                      />
                    </label>
                    <label className="flex flex-col gap-3">
                      <span className="text-base font-semibold text-slate-900">Work Email <span className="text-red-500">*</span></span>
                      <input 
                        required
                        className="border-b-2 border-slate-200 focus:border-[#0e5e8a] transition-all duration-300 outline-none py-2 bg-transparent text-lg placeholder:text-slate-300 placeholder:font-light focus:ring-0 px-0" 
                        placeholder="Your answer" 
                        type="email"
                      />
                    </label>
                    <label className="flex flex-col gap-3">
                      <span className="text-base font-semibold text-slate-900">Company Name</span>
                      <input 
                        className="border-b-2 border-slate-200 focus:border-[#0e5e8a] transition-all duration-300 outline-none py-2 bg-transparent text-lg placeholder:text-slate-300 placeholder:font-light focus:ring-0 px-0" 
                        placeholder="Your answer" 
                        type="text"
                      />
                    </label>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-8">
                  <div className="flex flex-col gap-6">
                    <span className="text-base font-semibold text-slate-900">What services are you looking for? <span className="text-red-500">*</span></span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Brand Identity Design', 'UI/UX Interface Design', 'Custom Web Development', 'SaaS Product Strategy'].map(service => (
                        <label key={service} className="flex items-center gap-3 cursor-pointer group">
                          <input className="w-5 h-5 rounded border-slate-300 text-[#0e5e8a] focus:ring-[#0e5e8a]" type="checkbox"/>
                          <span className="text-slate-700 group-hover:text-[#0e5e8a] transition-colors">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-8">
                  <div className="flex flex-col gap-6">
                    <span className="text-base font-semibold text-slate-900">Estimated Project Budget <span className="text-red-500">*</span></span>
                    <div className="flex flex-col gap-4">
                      {['$5,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000+'].map(range => (
                        <label key={range} className="flex items-center gap-3 cursor-pointer group">
                          <input className="w-5 h-5 border-slate-300 text-[#0e5e8a] focus:ring-[#0e5e8a]" name="budget" type="radio"/>
                          <span className="text-slate-700">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-8">
                  <label className="flex flex-col gap-6">
                    <span className="text-base font-semibold text-slate-900">Project Details & Vision <span className="text-red-500">*</span></span>
                    <textarea 
                      required
                      className="border-b-2 border-slate-200 focus:border-[#0e5e8a] transition-all duration-300 outline-none py-2 bg-transparent text-lg placeholder:text-slate-300 placeholder:font-light focus:ring-0 px-0 resize-none" 
                      placeholder="Your answer" 
                      rows={4}
                    ></textarea>
                  </label>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
                  <button className="w-full md:w-auto px-10 py-3 bg-[#0e5e8a] text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-[#0e5e8a]/10" type="submit">
                    Submit Proposal
                  </button>
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    Secure form. NDA available.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <section className="mt-24 pt-16 border-t border-slate-200">
          <p className="text-center text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-12">Trusted by Global Innovators</p>
          <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-30 grayscale contrast-125">
            <img alt="Techflow Logo" className="h-6 md:h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlRgGcsDD7MuIZhDOysRUj4ZlByOMt_NsOoT14OfErxx6EiP4Oh-d2J14A4U0wl0gR9Gz-G4kxLsTRLRnKN2X4BCHEST_MbA4rvIRyiKMbgJJRe_YslNQBhZG2GgVh7p7h3Z-PrC4tRiJkLUoOAic2pnWrMmvzvf9TwR7y-DCu9hnSlwrZoqajVKVy-FaYQTZLYcbT21gR3NeGkmX41sTpHyLjMexGv5xeOmOUxh5AvcQ3P4UzfjZ9eKRiqbSH7T5xIee_ODzkDlgf"/>
            <img alt="Nexus Logo" className="h-6 md:h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRCgBrGGBNk0--zHsS6MXRc_c0EUUVp1B3NpXOq2H4zHGoNyVZGj4Qv9ob_MdQqD_jVck3F3oorVc_sTk41s0vmzMzTt28GN1dQil-vWst74E1iqNhEJz-SfGAKf4NMnAISBRUzoxyizReFKCBsI6_1fOVZkWHOKFS1sJp8AHf2c3ILQuDxJJdr7-maTm_i9VLKqfn0NT9QuIhwZcA7YoDUqZpUodVWUZGZXPPyVqNOsRI2jUEmnlTSufzibX6U5PRH8iAZWf2gkAn"/>
            <img alt="Orbit Logo" className="h-6 md:h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo0OREqGy2kBSsNhkXfLZAqKFj4pAgwjV1r_ox5x_BAb06pnoffy6ue1xMNkOIG-zW0Tlk5rKO9HSa4_x1uIue6Q_o87iGJgwEMN4kJiyCG1CVc9Z3x-mlj5hChqE31gzl9-Adepkc4MEIG0Ruj8DQ8bE15WWGqJlqkJwHVp2py91TDfQhqnBcIhD43Da1Vdee7cmmRI4QPn6WSRxQ260NKLkOqvi8ujGuFH6Lu2QcMrtYnBBz87JYqU5l8kj1bDfWdmf4qrTJhH5W"/>
            <img alt="Vantage Logo" className="h-6 md:h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEU_2SJ5K1FWyulPG6Bb8eASIvkVtWJcTmH2QuWnufVbgHl1exRG8DbmP_S888rbt58EZbaa773WmnsSzKT1RMa5NQySieBLSM4TnutsQghpFbLXWunukiOtxgQvHE-EK07uRQHWUiraxaSbbuXB4MDQh8cfAHFzOA1UjibO63D_s5KXy9jET0UeInTS9eK8fbXXyIhWUwqlgKwZa9vpUTyFSwDlmu3aFTBRtws_hrfFM4gtAiUar-mOoyrzeTSuW4p3LpIzEV_0Ns"/>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
