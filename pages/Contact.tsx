
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    details: '',
    services: [] as string[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service) 
        ? prev.services.filter(s => s !== service) 
        : [...prev.services, service]
    }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#f0f3f4] min-h-screen flex items-center justify-center p-6">
        <div className="max-w-[600px] w-full bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
          <div className="h-2.5 bg-green-500 w-full"></div>
          <div className="p-12 text-center">
            <div className="size-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="material-symbols-outlined text-4xl text-green-500">check_circle</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Inquiry Received</h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Thanks for reaching out, <span className="text-[#0e5e8a] font-bold">{formData.name}</span>! Our creative director will review your project details and get back to you within 24 hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-[#0e5e8a] transition-all"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

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
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="h-2.5 bg-[#0ea5e9] w-full"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-[#0ea5e9]">calendar_today</span>
                  <h3 className="text-lg font-bold text-slate-900">Discovery Call</h3>
                </div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">Rather speak to someone? Book a 15-min intro call to discuss your vision.</p>
                <button className="w-full py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">event</span> Schedule Meeting
                </button>
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
                  <p className="text-slate-600 text-sm">Please fill out this form and we'll get back to you within 24 hours.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-8 flex flex-col gap-8">
                  <div className="flex flex-col gap-8">
                    <label className="flex flex-col gap-3 group">
                      <span className="text-base font-semibold text-slate-900">Full Name <span className="text-red-500">*</span></span>
                      <input 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-b-2 border-slate-200 focus:border-[#0e5e8a] transition-all duration-300 outline-none py-2 bg-transparent text-lg placeholder:text-slate-300 focus:ring-0 px-0" 
                        placeholder="Your answer" 
                        type="text"
                      />
                    </label>
                    <label className="flex flex-col gap-3">
                      <span className="text-base font-semibold text-slate-900">Work Email <span className="text-red-500">*</span></span>
                      <input 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-b-2 border-slate-200 focus:border-[#0e5e8a] transition-all duration-300 outline-none py-2 bg-transparent text-lg placeholder:text-slate-300 focus:ring-0 px-0" 
                        placeholder="Your answer" 
                        type="email"
                      />
                    </label>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-8">
                  <div className="flex flex-col gap-6">
                    <span className="text-base font-semibold text-slate-900">What services are you looking for? <span className="text-red-500">*</span></span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['Brand Identity Design', 'UI/UX Interface Design', 'Custom Web Development', 'SaaS Product Strategy'].map(service => (
                        <div 
                          key={service} 
                          onClick={() => toggleService(service)}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                            formData.services.includes(service) 
                            ? 'bg-[#0e5e8a]/5 border-[#0e5e8a] text-[#0e5e8a]' 
                            : 'bg-slate-50 border-transparent hover:border-slate-200 text-slate-600'
                          }`}
                        >
                          <span className="material-symbols-outlined text-lg">
                            {formData.services.includes(service) ? 'check_box' : 'check_box_outline_blank'}
                          </span>
                          <span className="text-sm font-bold">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-8">
                  <div className="flex flex-col gap-6">
                    <span className="text-base font-semibold text-slate-900">Estimated Project Budget <span className="text-red-500">*</span></span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['$5k-$10k', '$10k-$25k', '$25k-$50k', '$50k+'].map(range => (
                        <label key={range} className="relative group cursor-pointer">
                          <input 
                            className="peer hidden" 
                            name="budget" 
                            type="radio" 
                            required
                            onChange={() => setFormData({...formData, budget: range})}
                          />
                          <div className="flex items-center justify-center p-3 rounded-xl border-2 border-slate-100 text-xs font-bold text-slate-500 peer-checked:border-[#0e5e8a] peer-checked:bg-[#0e5e8a] peer-checked:text-white transition-all hover:bg-slate-50">
                            {range}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-8">
                  <label className="flex flex-col gap-6">
                    <span className="text-base font-semibold text-slate-900">Project Details <span className="text-red-500">*</span></span>
                    <textarea 
                      required
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      className="border-b-2 border-slate-200 focus:border-[#0e5e8a] transition-all duration-300 outline-none py-2 bg-transparent text-lg placeholder:text-slate-300 focus:ring-0 px-0 resize-none" 
                      placeholder="Describe your vision..." 
                      rows={4}
                    ></textarea>
                  </label>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
                  <button 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-4 bg-[#0e5e8a] text-white font-bold rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-[#0e5e8a]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3" 
                    type="submit"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      'Submit Proposal'
                    )}
                  </button>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    Data Protected by NDA
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
