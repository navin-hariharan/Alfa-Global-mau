import React from 'react';
import { motion } from 'framer-motion';

const GazillionCapitalPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', accentHover: 'hover:bg-teal-700' };

  const wealthDistribution = [
    'Awareness programmes on the basic functioning of financial markets',
    'Educational sessions on savings, risk and responsible financial conduct',
    'Information on investor rights and regulatory safeguards',
    'General educational content that does not constitute investment advice'
  ];

  const privateWealth = [
    'Sound corporate governance',
    'Compliance with applicable laws and regulations',
    'Transparency in corporate communication',
    'Ethical standards of conduct',
    'Protection of data and confidentiality'
  ];

  const brokingServices = [
    'Board-level oversight of the Company’s affairs',
    'Internal policies and compliance procedures',
    'Risk management frameworks',
    'Regulated activities undertaken only under applicable registrations'
  ];

  const privateMarket = [
    'A separately operated company within Alfa Global Group',
    'Its own management and governance structure',
    'Alignment with the Group’s standards of integrity',
    'A long-term orientation consistent with the Group’s values'
  ];

  const investorEducation = [
    'Introductory programmes on how capital markets function',
    'Sessions on risk awareness and financial discipline',
    'Workshops for students and working professionals',
    'Content intended for general awareness only'
  ];

  const whyGazillion = [
    { title: 'Separate Operation', desc: 'Operated as a distinct company within Alfa Global Group' },
    { title: 'Experienced Leadership', desc: 'Managed by professionals with experience in financial services' },
    { title: 'Governance First', desc: 'Board oversight, internal controls and compliance procedures' },
    { title: 'Financial Literacy', desc: 'A commitment to raising general awareness of financial matters' },
    { title: 'Responsible Technology', desc: 'Prudent use of technology in the Company’s operations' },
    { title: 'Integrity', desc: 'Transparent, ethical and accountable conduct' }
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
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="/logos/gazillion.png" alt="Gazillion Capital" className="h-20 w-auto mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Gazillion Capital</motion.h1>
          <p className="text-white/80 text-lg mb-8">A Financial Services Company of Alfa Global Group</p>
          <a 
            href="https://www.gazcap.com/" 
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
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/strategic-wealth.png" alt="Gazillion Capital" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Group Company in Financial Services</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">About Gazillion Capital</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Gazillion Capital Private Limited is a separately operated company of Alfa Global Group in the financial services sector. It has its own management and governance structure, and it is guided by the Group’s commitment to integrity, transparency and responsible conduct.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                The Company supports financial literacy initiatives intended to improve general awareness of how financial markets function. This page provides corporate information only. It does not offer broking, distribution of financial products, or investment advice to the public, and nothing on it constitutes a solicitation or recommendation. Any regulated activities of the Company are undertaken separately, under and in accordance with the applicable registrations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Images Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/8df3010dfa69d83fbba688213d2865dcbef9aa956fdb6c520db7ce0da725a6f3.png" alt="Gazillion Capital Operations" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/af5f4527cb96fde6f01a82dfacd99dbeb3db4d41aeefc404f3dbddf952e41fec.png" alt="Gazillion Capital Initiatives" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wealth Product Distribution Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">1. Financial Literacy Initiatives</h3>
              <ul className="space-y-3">
                {wealthDistribution.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">2. Corporate Principles</h3>
              <ul className="space-y-3">
                {privateWealth.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Services Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">3. Governance & Compliance</h3>
              <ul className="space-y-3">
                {brokingServices.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">4. Relationship with the Group</h3>
              <ul className="space-y-3">
                {privateMarket.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">5. Financial Education Programmes</h3>
              <ul className="space-y-3">
                {investorEducation.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Philosophy</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify">
              Gazillion Capital believes that sound financial understanding contributes to a more resilient economy and society. The Company’s philosophy rests on responsible conduct, strong governance and respect for the regulatory framework within which it operates.
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify mt-4">
              The Company’s educational initiatives are intended for general awareness only and do not constitute investment advice, research or recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Gazillion Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Guiding Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyGazillion.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className={`w-12 h-12 ${t.accentBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`p-12 rounded-2xl bg-gradient-to-r ${t.gradient} text-center`}>
            <h2 className="text-3xl font-bold text-white mb-6">Commitment</h2>
            <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-justify mb-6">
              Gazillion Capital is committed to the highest standards of governance, compliance and ethical conduct in all its activities, and to supporting financial awareness in the communities it serves.
            </p>
            <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-justify">
              As a member of Alfa Global Group, the Company shares the Group’s long-term orientation and its commitment to integrity, transparency and accountability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GazillionCapitalPage;
