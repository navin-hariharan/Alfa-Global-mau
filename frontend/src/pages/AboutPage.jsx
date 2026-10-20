import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', accentBorder: 'border-teal-200', accentHover: 'hover:bg-teal-700', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', heroAccent: 'text-teal-400' };

  const companies = [
    { name: 'Alfa Global Wealth Advisors', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png', desc: 'The Group’s family office platform, responsible for stewarding and allocating the Group’s own capital across its businesses and strategic holdings.', link: '/alfa-global-wealth-advisors' },
    { name: 'Alfa Star Dynamics', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-star-logo-removebg-preview.png', desc: 'The Group’s strategic holdings arm, taking long-term stakes in maritime and industrial businesses alongside operating and industry partners.', link: '/alfa-star-dynamics' },
    { name: 'Alfa Zillion Traders LLP', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-zillion-logo-removebg-preview.png', desc: 'A technology-led firm that builds in-house fintech platforms and quantitative tools, and trades solely on its own account.', link: '/alfa-zillion-traders' },
    { name: 'Gazillion Capital Pvt Ltd', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/gazillon-logo-removebg-preview.png', desc: 'A separately operated financial services company of the Group, with its own management and governance and a focus on financial literacy. Any regulated activities are undertaken under its own registrations.', link: '/gazillion-capital' },
    { name: 'MK Dairy Farms', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/mk-logo-png.png', desc: 'The Group’s agriculture and natural resources enterprise. Guided by innovation and sustainability, MK Dairy Farms connects quality produce with established markets while strengthening rural economies.', link: '/mk-dairy-farms' },
    { name: 'Cyberhakz', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/cyberhakz-logo-removebg-preview.png', desc: 'The Group’s cyber security enterprise, providing enterprise-grade protection against evolving digital threats. Its capabilities extend from infrastructure security to regulatory compliance.', link: '/cyberhakz' },
    { name: 'Dhanveir Groups Shipping', logo: '/logos/dhanveir.png', logoBg: false, desc: 'The Group’s strategic maritime platform, established to build, own, and operate Indian-flagged vessels across key cargo segments, including the dry bulk transportation of sand, coal, and minerals.', link: '/dhanveir-groups-shipping' }
  ];

  const whyChoose = [
    { title: 'Diversified Enterprise Base', desc: 'An established presence across maritime, technology, agriculture, and security' },
    { title: 'Seasoned Leadership', desc: 'Experienced leadership supported by an international partner network' },
    { title: 'Innovation Led', desc: 'Technology, cyber security, and sustainable practices embedded across the Group' },
    { title: 'Long-Term Ownership', desc: 'Patient capital and an owner’s perspective in every enterprise the Group supports' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            About Us
          </motion.h1>
          <p className="text-white/60 text-lg">Alfa Global Group of Companies</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/9d7c12d3944451d05017673e52e286d2785ed291290853b0b4905e52dec5ccd5.png" alt="Who We Are" className="rounded-2xl shadow-xl w-full" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Alfa Global Group is a diversified strategic investment and holding company founded on a vision of global transformation, innovation, and lasting impact. The Group deploys proprietary capital into transformative ideas, strategic ventures, and high-impact projects that shape industries and create sustainable value across generations.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Spanning strategic holdings and joint ventures as well as projects in infrastructure, maritime, manufacturing, agriculture, and technology, the Group’s activities reflect an enduring commitment to building institutions of lasting value.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                The Group measures success not by financial outcomes alone, but by its capacity to foster innovation, empower communities, and leave a lasting legacy. Combining global perspective with disciplined execution, Alfa Global Group continues to transform considered ideas into enterprises that help define the future of business and society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl shadow-lg">
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/opportunity.png" alt="Vision" className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                To be a global catalyst for transformation, shaping industries, strengthening legacies, and creating sustainable value that transcends generations.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-lg">
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/targeting.png" alt="Mission" className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                To deploy the Group’s proprietary capital into transformative ideas, strategic ventures, and high-impact projects that drive innovation and growth across industries, and, through global perspective, disciplined execution, and unwavering integrity, to build enduring value alongside its enterprises, partners, and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Companies */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>An overview of the enterprises that constitute the Group</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Our Companies</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-6 rounded-2xl border ${t.accentBorder} hover:shadow-xl transition-all group`}>
                {company.logo ? (
                  <img src={company.logo} alt={company.name} className={`h-16 w-auto mb-4 object-contain ${company.logoBg ? 'bg-slate-800 rounded-lg p-2' : ''}`} />
                ) : (
                  <div className={`h-16 w-16 mb-4 ${t.accentBg} rounded-lg flex items-center justify-center`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                    </svg>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{company.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed text-justify">{company.desc}</p>
                <Link to={company.link} className={`inline-flex items-center gap-2 ${t.accentText} font-semibold text-sm hover:gap-3 transition-all`}>
                  Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">The Alfa Global Distinction</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-md">
                <svg className={`w-8 h-8 ${t.accentText} mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`p-12 rounded-2xl bg-gradient-to-r ${t.gradient} text-center`}>
            <h2 className="text-3xl font-bold text-white mb-4">Engage with the Group</h2>
            <p className="text-white/80 mb-8">The Group welcomes enquiries regarding strategic partnerships and collaborative ventures.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all">
              Get in Touch <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
