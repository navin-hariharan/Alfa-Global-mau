import React from 'react';
import { motion } from 'framer-motion';

const AlfaZillionTradersPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', accentHover: 'hover:bg-teal-700' };

  const offerings = [
    {
      title: 'In-House Fintech Platforms',
      desc: 'The Firm designs, builds and maintains proprietary technology platforms that support its own trading, risk management and operational processes.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    },
    {
      title: 'Data & Analytics Tools',
      desc: 'The Firm develops internal data infrastructure and analytical tools for its own use, with an emphasis on data quality, reliability and sound engineering.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      title: 'Quantitative Models',
      desc: 'The Firm builds and tests quantitative models internally, under structured model governance and risk controls, for use in its own trading activities.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
    },
    {
      title: 'Proprietary Trading',
      desc: 'The Firm trades solely on its own account using its own capital. It does not manage money for others, accept funds from any person, or provide trading advice, recommendations or signals to third parties.',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
    }
  ];

  const whoWeServe = [
    'Trading conducted solely with the Firm’s own capital',
    'No acceptance of funds, deposits or mandates from any person',
    'No investment advice, research, recommendations or trading signals to third parties',
    'Technology platforms and tools developed for internal use',
    'Risk controls and compliance oversight applied across all activities'
  ];

  const whyAlfaZillion = [
    'Engineering Discipline in Platform Development',
    'Rigorous Model Governance and Risk Controls',
    'Integrity, Transparency and Regulatory Compliance',
    'A Long-Term Commitment to Technology and Talent'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="/logos/alfa-zillion.png" alt="Alfa Zillion Traders" className="h-20 w-auto mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Alfa Zillion Traders</motion.h1>
          <p className="text-white/80 text-lg mb-8">Technology-Led Proprietary Trading</p>
          <a 
            href="https://alfazillion.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 ${t.accentBg} text-white font-semibold rounded-lg ${t.accentHover} transition-all`}
            data-testid="find-out-more-cta"
          >
            Find out More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/9edec9684205cf32f23e3ab2aae9af838159c1a121c5cd3af47e9a0bbf81009a.png" alt="Technology Platforms" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Technology-Led Proprietary Firm</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">About Alfa Zillion Traders</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Alfa Zillion Traders LLP is a technology-led firm within Alfa Global Group. It develops in-house fintech platforms, data tools and quantitative models, and it trades solely on its own account.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                The Firm is established under the Limited Liability Partnership Act, 2008. It brings together financial knowledge and technological capability for its own proprietary activities. It does not manage money, accept funds from any person, or provide investment or trading advice, recommendations or signals to others.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Operating Philosophy</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed text-justify mb-6">
              The Firm’s work rests on sound engineering, careful research and development for internal use, and prudent management of its own capital.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              All trading activity is undertaken with the Firm’s own resources and is governed by internal risk limits, model validation and compliance oversight. The Firm does not hold mandates on behalf of others.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className={`w-12 h-12 ${t.accentBg} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-justify">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Scope of Activities</h2>
              <p className="text-gray-600 mb-6 text-justify">
                The Firm’s activities are proprietary in nature and are conducted within the following boundaries:
              </p>
              <ul className="space-y-4">
                {whoWeServe.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-6 h-6 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/2017e9e6ae808ff9352347f47bfb5f89c1ac250aa043a3ca873df0f23e599579.png" alt="Proprietary Operations" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Alfa Zillion Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Guiding Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {whyAlfaZillion.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 p-6 bg-gray-50 rounded-xl">
                <svg className={`w-6 h-6 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className={`p-12 rounded-2xl bg-gradient-to-r ${t.gradient} text-center`}>
            <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-justify text-lg">
              Alfa Zillion Traders LLP is committed to building durable technology capabilities and to conducting its proprietary activities with discipline, integrity and full regard for applicable regulations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlfaZillionTradersPage;
