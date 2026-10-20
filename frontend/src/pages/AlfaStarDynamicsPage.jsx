import React from 'react';
import { motion } from 'framer-motion';

const AlfaStarDynamicsPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', accentHover: 'hover:bg-teal-700' };

  const investmentCriteria = [
    'The business model is established and supported by visible cash flows',
    'The business can scale with execution risk that is well understood and manageable',
    'The business is supported by sector standing, sound governance or tangible asset backing'
  ];

  const capitalDeployment = [
    'Direct equity participation',
    'Shareholder loans and other balance sheet support',
    'Joint ventures and partnerships with operating partners'
  ];

  const capitalMarkets = [
    'Management of the Company’s own liquidity reserves',
    'Prudent placement of surplus funds for the Company’s own account',
    'Management of risk on the Company’s own exposures'
  ];

  const maritimeServices = [
    'Acquisition, leasing and chartering of ships and marine assets',
    'Freight forwarding and crew management',
    'Marine infrastructure development and technical consulting',
    'Coastal and international shipping operations'
  ];

  const sectoralExposure = [
    'Infrastructure & Logistics',
    'Real Estate & Land Linked Assets',
    'Emerging Technologies',
    'Strategic Business Development'
  ];

  const whyAlfaStar = [
    'Long-term ownership of established, revenue-generating businesses',
    'Disciplined selection and governance-led oversight',
    'Close partnership with experienced operating management',
    'Integrated capabilities across maritime, industrial and real-asset sectors',
    'Investment of the Group’s own capital only, with no external investors'
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
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="/logos/alfa-star.png" alt="Alfa Star Dynamics" className="h-20 w-auto mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Alfa Star Dynamics</motion.h1>
          <p className="text-white/80 text-lg mb-8">Strategic Holdings in Maritime and Industrial Enterprises</p>
          <a 
            href="https://alfastardynamics.com/" 
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
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/strategic-global.png" alt="Strategic Capital" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Strategic Holdings Arm of Alfa Global Group</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">About Alfa Star Dynamics</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Alfa Star Dynamics is the strategic holdings arm of Alfa Global Group. The Company takes long-term stakes in maritime, infrastructure and industrial businesses alongside experienced operating partners. It invests only the Group’s own capital. It does not raise or manage funds for third parties and does not offer investment opportunities to the public.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* High Conviction PE Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Long-Term Strategic Holdings</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-justify">
              The Company’s principal activity is acquiring and holding long-term stakes in established, revenue-generating businesses with sound fundamentals. It works alongside each business’s operating partners to strengthen governance, operations and enduring enterprise value.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/de53560c83050cba010874b5494e1a5245d1b1064b954fd59364419c927b1ad0.png" alt="Strategic Holdings" className="rounded-2xl shadow-xl w-full h-[300px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/ee5ecde99a997ab4399d1ada872833783e7723afca53c9aef575ce2a019baabc.png" alt="Operating Partnerships" className="rounded-2xl shadow-xl w-full h-[300px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Criteria Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Company considers holdings where:</h2>
              <ul className="space-y-4 mb-8">
                {investmentCriteria.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-6 h-6 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    <span className="text-justify">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Group’s capital is committed through:</h2>
              <ul className="space-y-4 mb-8">
                {capitalDeployment.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-6 h-6 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-justify">
                Each commitment is made from the Group’s own resources, after internal due diligence and governance review, with a long-term ownership horizon.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capital Markets Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Treasury & Balance Sheet Management</h2>
              <p className="text-gray-600 mb-6 text-justify">
                As part of managing its own balance sheet, the Company maintains a prudent treasury function covering its own resources only.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">This function covers:</h3>
              <ul className="space-y-3 mb-6">
                {capitalMarkets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-justify">
                Treasury activities are conducted solely for the Company’s own account to preserve liquidity and support its strategic holdings. The Company does not manage money, provide advice or undertake transactions for any third party.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/cd479a8a24bbbcaf5ab57e3a996f8da45175d4fe5668fae72e2715ae78b352f7.png" alt="Treasury Management" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maritime Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/2017e9e6ae808ff9352347f47bfb5f89c1ac250aa043a3ca873df0f23e599579.png" alt="Maritime Services" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Maritime & Marine Holdings</h2>
              <p className="text-gray-600 mb-6 text-justify">
                Through its holdings and operating partnerships, Alfa Star Dynamics is present in the maritime and marine logistics sector across the following activities:
              </p>
              <ul className="space-y-3 mb-6">
                {maritimeServices.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-justify">
                These activities are carried out by the relevant operating businesses and their management teams, serving trade, logistics and infrastructure customers in the private and public sectors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectoral Exposure Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Broader Sectoral Interests</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              The Company also holds direct interests and strategic partnerships in the following sectors:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectoralExposure.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className={`w-12 h-12 ${t.accentBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item}</h3>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-600 text-center mt-8 text-justify max-w-3xl mx-auto">
            This multi-sector approach allows the Company to act both as a long-term owner and as a business enabler, supporting enduring enterprise value across the Group.
          </p>
        </div>
      </section>

      {/* Why Alfa Star Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Alfa Star Dynamics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {whyAlfaStar.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <svg className={`w-6 h-6 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className={`p-12 rounded-2xl bg-gradient-to-r ${t.gradient} text-center`}>
            <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-justify">
              Alfa Star Dynamics is a long-term owner and partner to the businesses in which it holds stakes. Drawing on strategic insight, operational expertise and the Group’s own capital, the Company aims to build durable enterprises of lasting value.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlfaStarDynamicsPage;
