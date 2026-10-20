import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

// The hero borrows the logo's own motif: a dark-green line that wobbles, then
// rises into an arrow. It draws once on load, and each sector the Group invests
// in lights up as the line passes it.
const PATH = 'M40 430 L95 360 L140 445 L190 330 L235 420 L290 380 L470 400 L640 300 L820 250 L980 140 L1110 70';
const SHADOW = 'M48 440 L103 370 L148 455 L198 340 L243 430 L298 390 L478 410 L648 310 L828 260 L988 150 L1118 80';

const sectors = [
  { label: 'Agriculture', x: 470, y: 400 },
  { label: 'Maritime', x: 640, y: 300 },
  { label: 'Infrastructure', x: 820, y: 250 },
  { label: 'Technology', x: 980, y: 140 }
];

const facts = [
  { value: '7', label: 'group enterprises' },
  { value: '10+', label: 'countries of engagement' },
  { value: '30+', label: 'years of combined leadership' }
];

const GrowthLine = ({ className = '' }) => {
  const reduce = useReducedMotion();
  const draw = reduce ? {} : { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 2.4, ease: [0.65, 0, 0.35, 1], delay: 0.4 } };

  return (
    <svg viewBox="0 0 1200 500" className={className} role="img" aria-label="A rising growth line passing through agriculture, maritime, infrastructure and technology">
      <defs>
        <pattern id="heroDots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="#0284c7" opacity="0.28" />
        </pattern>
        <radialGradient id="heroDotsFade" cx="65%" cy="55%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="heroDotsMask">
          <rect width="1200" height="500" fill="url(#heroDotsFade)" />
        </mask>
      </defs>

      <rect width="1200" height="500" fill="url(#heroDots)" mask="url(#heroDotsMask)" />

      {/* Depth shadow, as on the logo arrow */}
      <motion.path d={SHADOW} fill="none" stroke="#2b4019" strokeWidth="16" strokeLinejoin="round" strokeLinecap="round" {...draw} />
      <motion.path d={PATH} fill="none" stroke="#1f6224" strokeWidth="16" strokeLinejoin="round" strokeLinecap="round" {...draw} />

      {/* Arrow head */}
      <motion.polygon
        points="1060,60 1160,30 1128,128"
        fill="#1f6224"
        stroke="#2b4019"
        strokeWidth="6"
        strokeLinejoin="round"
        initial={reduce ? false : { opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: reduce ? 0 : 2.6, duration: 0.35 }}
        style={{ transformOrigin: '1110px 70px' }}
      />

      {sectors.map((s, i) => (
        <motion.g
          key={s.label}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 1.2 + i * 0.35, duration: 0.4 }}
        >
          <circle cx={s.x} cy={s.y} r="17" fill="#fff" stroke="#0284c7" strokeWidth="6" />
          <text x={s.x + 4} y={s.y - 34} textAnchor="middle" fill="#0f2a3d" stroke="#fff" strokeWidth="8" paintOrder="stroke" fontFamily="Fredoka, sans-serif" fontWeight="600" fontSize="26">
            {s.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
};

const GrowthHero = () => (
  <section className="relative overflow-hidden bg-white pt-28 sm:pt-36 lg:min-h-screen">
    <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-sky-50 to-white" aria-hidden="true" />

    <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
      <div className="max-w-2xl lg:max-w-[50%] lg:pt-6">
        <h1 className="font-display text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-semibold text-[#0f2a3d] tracking-tight">
          Beyond capital.
          <br />
          Building futures.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl" style={{ textAlign: 'left' }}>
          Alfa Global Group is a diversified strategic investment and holding company. Deploying proprietary capital with a long-term
          ownership perspective, the Group builds, acquires, and scales enterprises across agriculture, maritime, infrastructure, and technology.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/contact" className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-colors">
            Partnership Enquiries
          </Link>
          <Link to="/about" className="px-8 py-4 border-2 border-[#0f2a3d]/15 text-[#0f2a3d] font-semibold rounded-full hover:border-teal-600 hover:text-teal-700 transition-colors">
            About the Group
          </Link>
        </div>

        <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="sr-only">{f.label}</dt>
              <dd className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-teal-600">{f.value}</span>
                <span className="text-slate-500">{f.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

    <GrowthLine className="relative mt-10 w-full h-auto lg:absolute lg:mt-0 lg:right-0 lg:bottom-10 lg:w-[62%]" />
  </section>
);

export default GrowthHero;
