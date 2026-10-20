import React from 'react';
import { motion } from 'framer-motion';

const AlfaGlobalWealthAdvisorsPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', accentHover: 'hover:bg-teal-700' };

  const coreOfferings = [
    { title: 'Stewardship of Group Capital', desc: 'Custody, preservation and long-term stewardship of the Group’s own capital in accordance with policies approved by the Board.' },
    { title: 'Capital Allocation Across Group Businesses', desc: 'Allocation of proprietary capital to the Group’s operating businesses and strategic holdings, aligned with the Group’s long-term priorities.' },
    { title: 'Treasury & Liquidity Management', desc: 'Management of the Group’s own liquidity, funding requirements and cash reserves to support the continuity of its operations.' },
    { title: 'Governance, Risk Management & Compliance (GRC)', desc: 'Oversight of governance structures, risk frameworks, standard operating procedures and compliance processes across Group entities.' },
    { title: 'Internal Assurance', desc: 'Internal audits and reviews intended to uphold operational integrity and regulatory compliance within the Group.' },
    { title: 'Internal Control over Financial Reporting (ICOFR)', desc: 'Frameworks for financial reporting controls and oversight across the Group’s entities.' }
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
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-advisor-logo.png" alt="Alfa Global Wealth Advisors" className="h-20 w-auto mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Alfa Global Wealth Advisors</motion.h1>
          <p className="text-white/60 text-lg mb-8"></p>
          <a 
            href="https://alfaglobalwealth.com/" 
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
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/30ee92d8fd38e4ef1cd802b9be5472be1101dbb720790cb5a829cc8f6e3da856.png" alt="Alfa Global Wealth Advisors" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Family Office & Treasury Platform</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Alfa Global Wealth Advisors</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Alfa Global Wealth Advisors serves as the family office and treasury platform of Alfa Global Group. The Company stewards and allocates the Group’s own capital across its operating businesses and strategic holdings.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                The Company does not have external clients. It does not provide investment advice, portfolio management or any other financial service to the public, and it does not accept funds from third parties.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Identity & Reach Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mandate & Role</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                The Company’s mandate is confined to the Group’s proprietary capital. It works with the Group’s leadership to set capital priorities, maintain appropriate liquidity, and support each operating business in pursuing its long-term objectives. All capital deployed is the Group’s own.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/2017e9e6ae808ff9352347f47bfb5f89c1ac250aa043a3ca873df0f23e599579.png" alt="Mandate and Role" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Core Functions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">The Company performs the following functions for Alfa Global Group and its entities. They cover the stewardship of the Group’s capital as well as the governance, risk and control frameworks that support it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreOfferings.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className={`w-12 h-12 ${t.accentBg} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm text-justify">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alfa Global Access Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/cd479a8a24bbbcaf5ab57e3a996f8da45175d4fe5668fae72e2715ae78b352f7.png" alt="Capital Stewardship" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Long-Term Capital Stewardship</h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                The Company takes a measured, long-term approach to the Group’s capital. Before any capital is committed to a Group business or strategic holding, it is subject to internal due diligence, risk assessment and governance review. The Group’s capital is managed solely for the Group’s own account.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values & Credentials Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`p-12 rounded-2xl bg-gradient-to-r ${t.gradient} text-center`}>
            <h2 className="text-3xl font-bold text-white mb-4">Values & Corporate Information</h2>
            <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-justify">
              The Company is guided by clarity, transparency and long-term value. Alfa Global Wealth Advisors is a private limited company incorporated in Chennai in 2008, and it remains committed to regulatory compliance and operational integrity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlfaGlobalWealthAdvisorsPage;
