import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useInView, useSpring, useTransform } from 'framer-motion';
import NewsletterSubscription from '../components/NewsletterSubscription';
import { ServiceHighlights } from '../components/ProfessionalSections';

const UltraHome = ({ theme = 'teal' }) => {
  const [activeService, setActiveService] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroScrollProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

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
      desc: 'Long-term investments of the Group’s own capital in operating companies, joint ventures, and scalable businesses across sectors.',
      features: ['Strategic & Controlling Stakes', 'Joint Ventures', 'Growth Capital for Group Companies', 'Acquisitions'],
      image: 'https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/0010f7ee9798ab61a3077ea085b3679c300267801248f42b6f4097bbd5676a5d.png'
    },
    {
      icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/project%20(1).png',
      title: 'High-Impact Projects',
      desc: 'Initiating and funding projects in industries such as infrastructure, energy, shipping, manufacturing, and technology.',
      features: ['Infrastructure Development', 'Manufacturing Projects', 'Shipping & Maritime', 'Technology Ventures'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    },
    {
      icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/partnership.png',
      title: 'Global Partnerships',
      desc: 'Cross-border alliances and operating partnerships that bring our businesses to new markets.',
      features: ['Cross-Border Joint Ventures', 'Strategic Alliances', 'Industry & Operating Partners', 'Market Entry for Group Companies'],
      image: 'https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/bf52fff87a71bbd76ffad7e58336e973072d1215c98810ef58b845f88a84d52c.png'
    }
  ];

  const coreValues = [
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>, title: 'Excellence', desc: 'Highest standards.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>, title: 'Integrity', desc: 'Transparency & ethics.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>, title: 'Innovation', desc: 'Evolving approaches.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>, title: 'Partnership', desc: 'Lasting relationships.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, title: 'Impact', desc: 'Positive change.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>, title: 'Vision', desc: 'Multi-generational.' }
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

      {/* HERO SECTION - Content from reference site */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-sky-50 to-emerald-50 overflow-hidden">
        {/* Background: soft brand-cyan and brand-green glows that sit well behind the logo */}
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,204,255,0.14) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(46,125,50,0.10) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
          </div>
          <div className="absolute inset-0 opacity-[0.5]" style={{ backgroundImage: 'linear-gradient(rgba(0,127,170,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,127,170,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
            <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="40" x2="40" y2="0" stroke="#007faa" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-32 sm:pt-40 pb-20">
            <div className="max-w-4xl">
              <div>
                {/* Logo from reference */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-6">
                  <img src={`${process.env.PUBLIC_URL}/alfa-logo.png`} alt="Alfa Global" className="h-14 sm:h-20 w-auto" />
                </motion.div>

                {/* Main Headline - from reference */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6"
                >
                  Beyond Capital.
                  <br />
                  <span className="text-teal-600">Building Futures.</span>
                </motion.h1>

                {/* Description - exact from reference */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg sm:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed"
                >
                  Alfa Global Group is a strategic investment and holding company. We invest our own capital to build, acquire, and grow
                  businesses and high impact projects across shipping, agriculture, technology, and infrastructure, partnering with founders and operators for the long term.
                </motion.p>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4 mb-10"
                >
                  <Link to="/contact" className={`px-8 py-4 ${t.accentBg} ${t.accentHover} text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl`}>
                    Partner With Us
                  </Link>
                  <Link to="/strategy" className="px-8 py-4 bg-white border border-slate-200 text-slate-800 font-semibold rounded-lg hover:border-teal-300 hover:text-teal-700 transition-all">
                    Our Approach
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center text-slate-400">
            <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION - Content from reference */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Group Overview</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Alfa Global Group is a diversified strategic investment and holding company driven by vision, innovation, and impact. We commit
                our own capital to businesses and projects that shape industries and create sustainable value across generations. Our strength lies in
                combining patient, long-term ownership with entrepreneurial execution, so that every business we back gains more than capital.
              </p>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Our Purpose</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Why We Exist</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                We believe capital is most valuable when it builds something real. Alfa Global Group exists to channel resources, knowledge,
                and strategy into ventures that redefine growth, spark innovation, and contribute to a better future for our businesses,
                partners, and communities.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Where We Invest</h2>
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
                      <p className="text-gray-600 text-sm mt-1 text-justify">{service.desc}</p>
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
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">The Alfa Advantage</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>, title: 'Capital', desc: 'We invest our own capital with a long horizon, so our decisions follow business fundamentals rather than short-term market movements.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>, title: 'Insight', desc: 'Deep sector knowledge and hands-on operating experience help us recognise businesses and projects with durable potential.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>, title: 'Opportunities', desc: 'We originate, build, and scale ventures in sectors where the Group already has operating strength and lasting relationships.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, title: 'Execution', desc: 'Our people, group companies, and global network let us act decisively and add value well beyond capital.' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className={`${t.heroAccent} mb-4`}>{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-justify">{item.desc}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let’s Build Something Together</h2>
              <p className="text-white/80 mb-8">Whether you are a founder, an operator, or a prospective strategic partner, we would like to hear about your business or project.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all">
                Get in Touch <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <ServiceHighlights theme={theme} />

      {/* Newsletter Subscription */}
      <NewsletterSubscription theme={theme} />
    </div>
  );
};

export default UltraHome;
