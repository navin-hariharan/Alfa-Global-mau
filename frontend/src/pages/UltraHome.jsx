import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useInView, useSpring, useTransform } from 'framer-motion';
import NewsletterSubscription from '../components/NewsletterSubscription';
import GrowthHero from '../components/GrowthHero';

const UltraHome = ({ theme = 'teal' }) => {
  const [activeService, setActiveService] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Teal theme configuration
  const t = {
    accent: 'teal-600', accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50',
    accentBorder: 'border-teal-200', accentHover: 'hover:bg-teal-700', gradient: 'from-teal-600 to-teal-700',
    heroAccent: 'text-teal-400', heroAccentBg: 'bg-teal-400', heroBg: 'from-teal-950 via-slate-950 to-teal-950',
    statsBg: 'bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700', statsText: 'text-white',
    checkColor: 'text-teal-500', glowColor: 'rgba(45, 212, 191, 0.1)'
  };

  // Services from reference site - exact content
  const services = [
    {
      icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/strategic-partnerships.png',
      title: 'Strategic Holdings',
      desc: 'Long-term proprietary investments in operating companies, joint ventures, and scalable enterprises across sectors.',
      features: ['Strategic and Controlling Interests', 'Joint Ventures', 'Growth Capital for Group Enterprises', 'Acquisitions'],
      image: 'https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/0010f7ee9798ab61a3077ea085b3679c300267801248f42b6f4097bbd5676a5d.png'
    },
    {
      icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/project%20(1).png',
      title: 'High-Impact Projects',
      desc: 'Origination and funding of large-scale projects in infrastructure, energy, maritime, manufacturing, and technology.',
      features: ['Infrastructure Development', 'Manufacturing Projects', 'Shipping & Maritime', 'Technology Ventures'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    },
    {
      icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/partnership.png',
      title: 'Global Partnerships',
      desc: 'Cross-border alliances and operating partnerships that extend the Group’s enterprises into new markets.',
      features: ['Cross-Border Joint Ventures', 'Strategic Alliances', 'Industry and Operating Partners', 'Market Entry for Group Enterprises'],
      image: 'https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/bf52fff87a71bbd76ffad7e58336e973072d1215c98810ef58b845f88a84d52c.png'
    }
  ];

  const groupCompanies = [
    { name: 'Alfa Star Dynamics', logo: '/logos/alfa-star.png', desc: 'Strategic holdings across the maritime and industrial sectors.', link: '/alfa-star-dynamics' },
    { name: 'Dhanveir Groups Shipping', logo: '/logos/dhanveir.png', desc: 'Ownership and operation of Indian-flagged dry bulk vessels.', link: '/dhanveir-groups-shipping' },
    { name: 'MK Dairy Farms', logo: null, desc: 'Dairy, agriculture, and natural resource distribution.', link: '/mk-dairy-farms' },
    { name: 'Cyberhakz', logo: '/logos/cyberhakz.png', desc: 'Enterprise-grade cyber security and compliance solutions.', link: '/cyberhakz' }
  ];

  const coreValues = [
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>, title: 'Excellence', desc: 'Uncompromising standards.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>, title: 'Integrity', desc: 'Transparency and ethical conduct.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>, title: 'Innovation', desc: 'Continuous evolution.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>, title: 'Partnership', desc: 'Enduring relationships.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, title: 'Impact', desc: 'Meaningful contribution.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>, title: 'Vision', desc: 'A multi-generational outlook.' }
  ];

  const team = [
    { name: 'Vikram Singh', role: 'Head of Investments', image: 'https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/cfd26998e857f18fb3b781db437ef602290724f403d9913029aa32d6b6246a90.png' },
    { name: 'Meera Krishnan', role: 'Senior Analyst', image: 'https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/2b3129d6d241554bf19947e0b1a16540e099cef4415087d623e75b6022c1c069.png' },
    { name: 'Amit Deshmukh', role: 'Portfolio Manager', image: 'https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/f5afafd8d1834f3154890ee0f3867d07d7e9d30b3f817713f9dd5dc1712ac70d.png' },
    { name: 'Kavita Iyer', role: 'Director - Strategy', image: 'https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/16745fe51d0f23337b47ab67e77139a7aef09c225e8c9caebe7355bce36c5ffa.png' }
  ];


  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Scroll Progress */}
      <motion.div className={`fixed top-0 left-0 right-0 h-1 ${t.accentBg} origin-left z-[100]`} style={{ scaleX }} />

      <GrowthHero />

      {/* THE GROUP */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2a3d] mb-12">Our Group Enterprises</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
            {groupCompanies.map((c) => (
              <Link key={c.name} to={c.link} className="group py-8 sm:px-6 first:pt-0 sm:first:pt-8 lg:first:pl-0 flex flex-col">
                <div className="h-20 flex items-center mb-6">
                  {c.logo ? (
                    <img src={`${process.env.PUBLIC_URL}${c.logo}`} alt="" className="max-h-20 w-auto" />
                  ) : (
                    <span className="font-display text-2xl font-bold text-brandgreen">{c.name}</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[#0f2a3d] group-hover:text-teal-700 transition-colors">{c.name}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed" style={{ textAlign: 'left' }}>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Content from reference */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Group Overview</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6 leading-relaxed md:text-justify">
                Alfa Global Group is a diversified strategic investment and holding company. Guided by a long-term ownership philosophy, the Group
                deploys proprietary capital into enterprises and projects that strengthen industries and generate enduring value across generations.
                Its distinctive strength lies in combining disciplined capital stewardship with entrepreneurial execution, ensuring that every enterprise
                it supports benefits from far more than financial investment.
              </p>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Our Purpose</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Why We Exist</h2>
              <p className="text-gray-600 mb-6 leading-relaxed md:text-justify">
                Capital attains its greatest value when it builds enduring institutions. The Group exists to direct resources, expertise, and
                strategic insight towards ventures that redefine growth, foster innovation, and contribute meaningfully to its enterprises, its
                partners, and the communities in which it operates.
              </p>
              <Link to="/about" className={`inline-flex items-center gap-2 ${t.accentText} font-semibold hover:gap-3 transition-all`}>
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </Link>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/20327903923c4ebb76f605080941a3f9bafcd9f5abd68bc14b148bbf168c8646.png" alt="Alfa Global Group leadership" className="rounded-2xl shadow-2xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES - with icons from reference */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Investment Focus</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveService(i)}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    activeService === i ? `bg-white shadow-lg border-l-4 ${theme === 'gold' ? 'border-amber-500' : theme === 'silver' ? 'border-gray-500' : theme === 'purple' ? 'border-purple-500' : 'border-teal-500'}` : 'bg-white/50 hover:bg-white border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 text-sm mt-1 md:text-justify">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div key={activeService} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-32">
              <div className="aspect-video overflow-hidden">
                <img src={services[activeService].image} alt={services[activeService].title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{services[activeService].title}</h3>
                <ul className="space-y-3 mb-6">
                  {services[activeService].features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-600">
                      <svg className={`w-5 h-5 ${t.checkColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/strategy" className={`inline-flex items-center gap-2 px-6 py-3 ${t.accentBg} text-white rounded-lg font-medium ${t.accentHover} transition-all`}>Learn More</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE ALFA ADVANTAGE */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#0f2a3d] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">The Alfa Global Advantage</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>, title: 'Capital', desc: 'A long investment horizon, supported entirely by proprietary capital, allows decisions to rest on enterprise fundamentals rather than short-term market sentiment.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>, title: 'Insight', desc: 'Deep sectoral knowledge and extensive operating experience inform the identification of enterprises and projects with durable potential.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>, title: 'Opportunities', desc: 'The Group originates, builds, and scales ventures in sectors where it already holds operating strength and established relationships.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, title: 'Execution', desc: 'Experienced leadership, an integrated family of enterprises, and an international network enable decisive execution and value creation beyond capital.' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className={`${t.heroAccent} mb-4`}>{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed md:text-justify">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreValues.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-6 rounded-xl border ${t.accentBorder} text-center hover:shadow-md transition-all`}>
                <div className={`${t.accentText} mb-3 flex justify-center`}>{value.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{value.title}</h3>
                <p className="text-gray-500 text-xs">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`p-12 md:p-16 rounded-2xl bg-gradient-to-r ${t.gradient}`}>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Partnering for Enduring Value</h2>
              <p className="text-white/80 mb-8">The Group welcomes dialogue with founders, promoters, and strategic partners whose enterprises or projects align with its long-term investment focus.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all">
                Contact the Group <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Newsletter Subscription */}
      <NewsletterSubscription theme={theme} />
    </div>
  );
};

export default UltraHome;
