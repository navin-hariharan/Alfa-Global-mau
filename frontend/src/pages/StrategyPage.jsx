import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const StrategyPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', accentBorder: 'border-teal-200', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', heroAccent: 'text-teal-400' };

  const pillars = [
    { num: '1', title: 'Diversification for Stability', desc: 'The Group maintains a balanced presence across industries to mitigate concentration risk and broaden opportunity. Diversification across strategic holdings, maritime, sustainable agriculture, infrastructure, and cyber security underpins the Group’s resilience.' },
    { num: '2', title: 'Disciplined Opportunity Selection', desc: 'The Group’s strategy rests on identifying opportunities early and committing to enterprises and projects where it can contribute capital, expertise, and strategic partnerships.' },
    { num: '3', title: 'Innovation and Technology', desc: 'Technology platforms, data, and advanced digital tools are embedded across the Group’s enterprises, strengthening efficiency, transparency, and the quality of decision-making.' },
    { num: '4', title: 'Global Expansion with Local Impact', desc: 'While the Group’s presence extends across domestic and international markets, its focus remains on meaningful local impact, investing in industries that strengthen communities and build sustainable long-term value.' },
    { num: '5', title: 'Responsibility and Governance', desc: 'Sound governance and responsible stewardship are fundamental to the Group. From sustainable agricultural projects to compliance-led technology operations, growth is aligned with environmental and social responsibility.' }
  ];

  const execution = [
    { title: 'Rigorous Evaluation', desc: 'Comprehensive analysis and due diligence inform risk management and opportunity selection.' },
    { title: 'Strategic Partnerships', desc: 'Collaboration with founders, operators, and industry leaders worldwide.' },
    { title: 'Scalable Enterprises', desc: 'Ventures structured to scale with evolving markets and opportunities.' },
    { title: 'Active Oversight', desc: 'Regular reviews ensure consistent delivery, compliance, and alignment with long-term objectives.' }
  ];

  const stats = [
    { value: '30+', label: 'Years of combined leadership experience' },
    { value: 'Proven', label: 'Track record in building and scaling multi-sector enterprises' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Strategy</motion.h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">Alfa Global Group of Companies</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Strategic Approach</h2>
            <p className="text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed text-justify">
              Strategy informs every decision at Alfa Global Group. Although its enterprises span strategic holdings, technology, infrastructure, maritime, manufacturing, agriculture, and cyber security, each is guided by a unified approach that combines innovation, disciplined risk management, and long-term vision to deliver sustainable growth and impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Strategic Pillars</h2>
          <div className="space-y-6">
            {pillars.map((pillar, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-md">
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 ${t.accentBg} text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0`}>{pillar.num}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">{pillar.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Strategic Execution</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {execution.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-6 rounded-xl border ${t.accentBorder}`}>
                <svg className={`w-8 h-8 ${t.accentText} mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-24 bg-gradient-to-r ${t.gradient}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-white text-center mb-12">The Strength of the Approach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <Link to="/contact" className={`inline-flex items-center gap-2 px-8 py-4 ${t.accentBg} text-white font-semibold rounded-lg hover:opacity-90 transition-all`}>
            Partner With Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StrategyPage;
