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
import { LeadCaptureForm } from '../components/LeadCaptureForm';

interface WaterLeakPageProps {
  onNavigate: (page: Page) => void;
  onOpenQuote: (service?: 'water' | 'gas') => void;
}

export const WaterLeakPage: React.FC<WaterLeakPageProps> = ({ onNavigate, onOpenQuote }) => {
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
            <button onClick={() => onNavigate('home')} className="hover:underline">
              Home
            </button>
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

                <button
                  onClick={() => onOpenQuote('water')}
                  className="bg-blue-800/80 hover:bg-blue-700 text-white font-semibold px-5 py-3.5 rounded-xl text-sm border border-blue-600"
                >
                  Request Dispatch Quote
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 text-xs space-y-3">
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
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Hidden water leaks waste thousands of gallons per month and inflict catastrophic structural damage before water ever surfaces. The independent contractors in our referral network specialize in diagnosing all residential and light commercial plumbing systems.
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

          {/* Sidebar Quote Request */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              <LeadCaptureForm initialService="water" compact />

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-xs text-blue-900 space-y-3">
                <div className="flex items-center gap-2 font-bold text-sm text-blue-950">
                  <Phone className="w-4 h-4 text-blue-700" />
                  <span>Prefer to Speak to a Human?</span>
                </div>
                <p className="text-blue-800 leading-relaxed">
                  Call our 24/7 City Heights dispatch hotline. A representative will gather your address details and match you with the closest licensed technician.
                </p>
                <a
                  href={BUSINESS_INFO.telLink}
                  className="block w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-center rounded-xl shadow-xs"
                >
                  Call {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
