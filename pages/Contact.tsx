
import React from 'react';

const Contact: React.FC = () => {
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
              <a
                className="flex items-center gap-4 group"
                href="https://wa.me/918056625313"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">chat</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">WhatsApp</p>
                  <p className="text-xs text-slate-500">+91 80566 25313</p>
                </div>
              </a>
              <a className="flex items-center gap-4 group" href="mailto:arivolidesignerstudio@gmail.com">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0e5e8a] group-hover:bg-[#0e5e8a] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">arivolidesignerstudio@gmail.com</p>
                  <p className="text-xs text-slate-500">Email our team</p>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="h-2.5 bg-[#0ea5e9] w-full"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-[#0ea5e9]">support_agent</span>
                  <h3 className="text-lg font-bold text-slate-900">Fast Response</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">We reply within 24 hours with a clear plan and next steps.</p>
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

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-4 md:p-6">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdlGCkCKYkpZ0PsrHd8R6csad8STY9Vxjdi_fhjfVduXb3sBg/viewform?embedded=true"
                  width="100%"
                  height="1029"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="AD Studio Inquiry Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
