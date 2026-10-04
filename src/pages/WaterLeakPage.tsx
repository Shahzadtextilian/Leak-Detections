import React, { useState } from 'react';
import {
  Droplets,
  Phone,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Waves,
  Maximize2,
  Clock,
  HelpCircle,
  ChevronDown,
  ShieldAlert,
  MapPin
} from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { APP_IMAGES } from '../data/images';

interface WaterLeakPageProps {
  onNavigate: (page: Page) => void;
}

export const WaterLeakPage: React.FC<WaterLeakPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const waterFaqs = [
    {
      q: 'What are the main causes of water slab leaks in City Heights?',
      a: 'Many City Heights residences constructed between 1940 and 1980 feature copper plumbing laid directly underneath concrete slabs. Over decades, acidic soil, friction from thermal expansion, and water velocity cause copper pinhole pitting, leading to active foundation water leaks.'
    },
    {
      q: 'How do technicians pinpoint a water leak without breaking my tile or hardwood?',
      a: 'Contractors matched through our network deploy advanced acoustic ground microphones that amplify the distinct sound frequency of pressurized water escaping pipes, paired with FLIR thermal imaging cameras that trace temperature differentials across the slab.'
    },
    {
      q: 'What repair options will the matched contractor offer for a slab leak?',
      a: 'Contractors typically provide three primary solutions depending on pipe condition: 1) Direct spot repair under the slab, 2) Complete pipe reroute through ceilings or baseboards (eliminating future slab risks), or 3) Modern epoxy barrier coating / relining where suitable.'
    },
    {
      q: 'Will homeowner insurance cover water leak detection in San Diego?',
      a: 'Most standard California homeowner policies cover "tear-out" and consequential water damage remediation, and many cover the professional diagnostic leak locating fee when performed by a licensed professional. Check with your adjuster.'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-blue-200 mb-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="hover:underline hover:text-white"
            >
              Home
            </a>
            <span>/</span>
            <span className="text-white font-medium">Services</span>
            <span>/</span>
            <span className="text-cyan-300 font-semibold">Water Leak Detection</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/60 border border-blue-600/60 text-xs text-blue-200">
                <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                <span>City Heights Specialist Contractor Referral</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Non-Invasive <span className="text-cyan-300">Water Leak Detection</span> & Slab Leak Locating in City Heights, CA
              </h1>

              <p className="text-base text-slate-200 max-w-2xl leading-relaxed">
                Pinpoint pressurized water leaks hidden deep under concrete foundation slabs, behind finished drywall, or along underground yard supply lines. Serving residential properties and multi-family units across 92105 and San Diego County.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 shadow-lg"
                  id="water-call-top"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 24/7 Water Dispatch: {BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700 rounded-2xl p-5 text-xs space-y-3 overflow-hidden">
              <div className="relative rounded-xl overflow-hidden mb-3 border border-slate-700">
                <img
                  src={APP_IMAGES.heroWaterLeak}
                  alt="Acoustic ground sensor detecting slab water leak"
                  width={400}
                  height={160}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 bg-slate-900/90 text-cyan-300 text-[10px] font-semibold px-2 py-0.5 rounded">
                  Acoustic Slab Leak Testing
                </span>
              </div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Fast Diagnostic Match Promise</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Pinpoint accuracy within inches</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Ultrasonic acoustic sound amplification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>FLIR infrared thermal mapping</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Prevents unnecessary demolition costs</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-700 text-[11px] text-slate-400">
                Local Hub: 3431 43rd St, City Heights, CA 92105
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Types of Water Leaks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Types of Water Leaks Located in City Heights Properties
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Hidden water leaks waste thousands of gallons per month and inflict catastrophic structural damage before water ever surfaces. The independent contractors in our referral network specialize in diagnosing all residential and light commercial plumbing systems across City Heights and 92105.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 bg-blue-50/60 p-3.5 rounded-xl border border-blue-100">
                <strong>Need more information?</strong> Consult our comprehensive{' '}
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('blog');
                  }}
                  className="text-blue-600 font-bold underline hover:text-blue-800"
                >
                  Slab Leak Diagnostic Guide
                </a>{' '}
                or explore our{' '}
                <a
                  href="/gas-leak"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('gas-leak');
                  }}
                  className="text-amber-700 font-bold underline hover:text-amber-900"
                >
                  Emergency Gas Leak Detection Services
                </a>{' '}
                if you detect odor or suspect a pipeline hazard.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-3">
                    <Waves className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-1">Concrete Slab Leaks</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hot or cold water supply copper pipes encased underneath concrete footings. Pinhole leaks cause warm floor tiles, buckled floorboards, and foundation cracking.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-3">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-1">Underground Yard Main Line</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Main water supply lines extending from the City of San Diego street meter to your home shut-off valve. Contractors locate leaks under driveways and lawns.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-3">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-1">Interior Wall Cavity Leaks</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pressurized pipe fittings behind shower valves, toilet supply lines, and kitchen sinks causing silent drywall mold growth and structural timber rot.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-1">Irrigation & Backflow Leaks</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Solenoid valve failures, cracked PVC sprinkler manifolds, and underground lateral pipe breaks causing low sprinkler pressure and swampy soil.
                  </p>
                </div>
              </div>
            </div>

            {/* Diagnostic Technology */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Cutting-Edge Detection Technology Deployed
              </h3>

              {/* Equipment Visual Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                  <img
                    src={APP_IMAGES.heroWaterLeak}
                    alt="Technician operating acoustic leak locator on concrete floor"
                    width={350}
                    height={150}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-36 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-3">
                    <div className="font-bold text-xs text-slate-900">Acoustic Listening Probes</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Captures underground pressurized hiss</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                  <img
                    src={APP_IMAGES.thermalImaging}
                    alt="FLIR thermal camera detecting cold and hot water spread in wall"
                    width={350}
                    height={150}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-36 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-3">
                    <div className="font-bold text-xs text-slate-900">FLIR Infrared Scanners</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Visualizes sub-surface moisture gradients</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-md bg-blue-100 text-blue-700 font-bold shrink-0 mt-0.5">01</div>
                  <div>
                    <strong className="text-slate-900">Electro-Acoustic Ground Microphones:</strong> Amplifies the precise high-frequency hiss of water forced through micro-fissures under concrete up to 6 feet deep.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-md bg-blue-100 text-blue-700 font-bold shrink-0 mt-0.5">02</div>
                  <div>
                    <strong className="text-slate-900">High-Definition Thermal Imaging (FLIR):</strong> Translates infrared radiation into clear thermal maps to identify hot water puddling under flooring without drilling test holes.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-md bg-blue-100 text-blue-700 font-bold shrink-0 mt-0.5">03</div>
                  <div>
                    <strong className="text-slate-900">Pressure Decay & Static Testing:</strong> Isolates plumbing branches with test plugs to verify whether the hot, cold, or irrigation system is losing pressure.
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                Water Leak Detection Questions
              </h3>
              <div className="space-y-3">
                {waterFaqs.map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-sm text-slate-900 hover:bg-slate-50"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 bg-slate-50/50 border-t border-slate-100 leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Emergency Dispatch */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-cyan-300">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>24/7 Water Leak Priority Dispatch</span>
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  Need Immediate Water Leak Help?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Connect directly with on-call licensed leak detection specialists stationed in City Heights (92105) equipped with acoustic listening probes and thermal imaging cameras.
                </p>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>Average Response:</span>
                    <strong className="text-emerald-400">45-90 Minutes</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Local Base:</span>
                    <strong className="text-white">3431 43rd St</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Diagnostic Tools:</span>
                    <strong className="text-cyan-300">FLIR &amp; Acoustic</strong>
                  </div>
                </div>
                <a
                  href={BUSINESS_INFO.telLink}
                  className="block w-full py-3.5 bg-red-600 hover:bg-red-700 active:scale-98 text-white font-extrabold text-center rounded-xl shadow-lg transition-all"
                  id="water-sidebar-call"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 animate-pulse" />
                    <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
                  </div>
                </a>

                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="block w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 font-semibold text-center rounded-xl text-xs transition-colors"
                  id="water-sidebar-contact"
                >
                  Book Dispatch Online &rarr;
                </a>
              </div>

              {/* Related Local Links Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                <h3 className="font-bold text-sm text-slate-900">
                  Related Services &amp; Resources
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>
                    <a
                      href="/gas-leak"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('gas-leak');
                      }}
                      className="text-blue-600 hover:underline flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-amber-500" />
                      Emergency Gas Leak Detection
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('blog');
                      }}
                      className="text-blue-600 hover:underline flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-cyan-500" />
                      Slab Leak Symptoms &amp; Diagnostic Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('about');
                      }}
                      className="text-blue-600 hover:underline flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-blue-500" />
                      About Our Contractor Network
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('contact');
                      }}
                      className="text-blue-600 hover:underline flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-emerald-500" />
                      City Heights Dispatch Office
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
