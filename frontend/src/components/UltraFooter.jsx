import React from 'react';
import { Link } from 'react-router-dom';

const UltraFooter = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = {
      accent: 'text-teal-700',
      accentHover: 'hover:text-teal-600',
      button: 'bg-teal-600 hover:bg-teal-500',
      border: 'border-teal-500/20',
      logoColor: '#2dd4bf'
    };

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Strategy', path: '/strategy' },
    { label: 'Global Access', path: '/global-access' },
    { label: 'Contact', path: '/contact' }
  ];

  const companies = [
    { label: 'Alfa Global Wealth Advisors', path: '/alfa-global-wealth-advisors' },
    { label: 'Alfa Star Dynamics', path: '/alfa-star-dynamics' },
    { label: 'Alfa Zillion Traders LLP', path: '/alfa-zillion-traders' },
    { label: 'Gazillion Capital Pvt Ltd', path: '/gazillion-capital' },
    { label: 'MK Dairy Farms', path: '/mk-dairy-farms' },
    { label: 'Cyberhakz', path: '/cyberhakz' },
    { label: 'Dhanveir Groups Shipping', path: '/dhanveir-groups-shipping' }
  ];

  return (
    <footer className="bg-gradient-to-b from-sky-50 to-white text-slate-900 border-t border-slate-200">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={`${process.env.PUBLIC_URL}/alfa-logo.png`} alt="Alfa Global Group" className="h-11 w-auto mb-5" />
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              A diversified strategic investment and holding company, building enduring enterprises across generations.
            </p>
            <div className="flex gap-3">
              {['linkedin', 'twitter', 'facebook'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 ${t.accentHover} transition-colors`}
                >
                  {social === 'linkedin' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )}
                  {social === 'twitter' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                  {social === 'facebook' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-sm font-semibold ${t.accent} uppercase tracking-wider mb-4`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-slate-600 text-sm ${t.accentHover} transition-colors`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div>
            <h4 className={`text-sm font-semibold ${t.accent} uppercase tracking-wider mb-4`}>Our Companies</h4>
            <ul className="space-y-3">
              {companies.map((company) => (
                <li key={company.path}>
                  <Link
                    to={company.path}
                    className={`text-slate-600 text-sm ${t.accentHover} transition-colors`}
                  >
                    {company.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className={`text-sm font-semibold ${t.accent} uppercase tracking-wider mb-4`}>Office</h4>
            <div className="text-slate-600 text-sm">
              <p className="text-slate-900 font-medium mb-2">Chennai (HQ)</p>
              <p>No. 6/8, Second Floor, Lakshmi Nagar, 10th Street, Nanganallur, Chennai - 600 061.</p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-slate-600 text-sm mb-2">Contact Us</p>
              <p className="text-slate-900 text-sm">+91 44-2224-2929</p>
              <p className="text-slate-900 text-sm">+91 73580-65999</p>
              <p className={`${t.accent} text-sm mt-1`}>contact@alfaglobalwealth.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <p className="text-slate-500 text-xs leading-relaxed">
            Alfa Global Group invests only its own capital. It does not provide investment advice, portfolio management, research
            recommendations, or broking services, and does not accept money from the public for investment. Nothing on this website is an
            offer, solicitation, or recommendation to buy or sell any security or financial product. Group companies that carry on any
            regulated activity do so separately, under their own registrations where applicable.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Alfa Global Group. All rights reserved.
            </p>
            <div className="flex flex-col items-center sm:items-end gap-2">
              <a 
                href="https://techbook.co.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              >
                <span>Website Powered by</span>
                <span className="font-semibold text-teal-700">Techbook Technologies</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFooter;
