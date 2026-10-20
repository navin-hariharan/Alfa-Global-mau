import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GlobalAccessPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', accentBorder: 'border-teal-200', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', heroAccent: 'text-teal-400' };

  const accessAreas = [
    { title: 'Strategic Holdings & Cross-Border Partnerships', company: 'Through Alfa Star Dynamics', items: ['Joint ventures with international partners', 'Long-term strategic stakes in industrial and maritime businesses', 'Market entry support for group companies'] },
    { title: 'Maritime & Logistics', company: 'Through Dhanveir Groups Shipping', items: ['Indian-flagged vessels across key cargo segments', 'Dry bulk transportation of sand, coal, and minerals', 'Partnerships across ports, logistics, and trade routes'] },
    { title: 'Global Trade in Agriculture & Resources', company: 'Through MK Dairy Farms Pvt Ltd', items: ['Sustainable agricultural practices aligned with international standards', 'Export ready products for global markets', 'Partnerships that strengthen the global agri trade ecosystem'] },
    { title: 'Cyber Security Without Borders', company: 'Cyberhakz Pvt Ltd provides', items: ['Enterprise grade cyber security solutions tailored for global operations', 'Compliance with international regulations (GDPR, ISO, HIPAA, etc.)', 'Threat detection and prevention for multinational corporations'] }
  ];

  const stats = [
    { value: '10+', label: 'Presence in 10+ countries with strategic partnerships worldwide' },
    { value: '30+', label: '30+ years of combined leadership experience across international markets' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Global Access</motion.h1>
          <p className="text-white/60 text-lg">Our Expertise</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Connecting Businesses to Global Opportunities</h2>
            <p className="text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed text-justify">
              At Alfa Global Group of Companies, our strength lies in connecting our businesses with international markets, partners, and cross border opportunities. With a strong global footprint, we bridge the gap between local expertise and international scale, enabling our partners to grow beyond boundaries.
            </p>
          </motion.div>

          <div className={`p-8 rounded-2xl ${t.accentBgLight} mb-12`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Global Reach</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              We work with partners across Asia, Europe, Middle East, and North America in strategic holdings, shipping, agricultural trade, and cyber security.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/global-reach-1.png" alt="Global Reach" className="rounded-xl w-full" />
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/global-reach-2.png" alt="Global Reach" className="rounded-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessAreas.map((area, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className={`${t.accentText} text-sm mb-4`}>{area.company}</p>
                <ul className="space-y-2">
                  {area.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600">
                      <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Global Access with Alfa Global?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-6 rounded-xl border ${t.accentBorder} text-center`}>
                <div className={`text-3xl font-bold ${t.accentText} mb-2`}>{stat.value}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-24 bg-gradient-to-r ${t.gradient}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Our Promise</h2>
          <p className="text-white/80 max-w-3xl mx-auto mb-8">
            At Alfa Global Group, we go beyond capital to unlock opportunities across industries and borders. Through innovation, disciplined execution, and a global vision, we deliver access, growth, and impact that stand the test of time.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all">
            Connect With Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GlobalAccessPage;
