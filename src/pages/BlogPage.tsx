import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  ShieldCheck,
  Phone,
  ArrowRight,
  Droplets,
  Flame,
  CheckCircle2,
  AlertTriangle,
  Search,
  Wrench,
  Activity,
  Layers,
  FileText,
  Share2,
  Facebook,
  Radio,
  Eye,
  ThermometerSnowflake,
  Gauge,
  Sparkles,
  ChevronRight,
  BookOpen,
  Check,
  DollarSign,
  HelpCircle,
  FileSpreadsheet,
  ShieldAlert,
  CreditCard,
  MapPin
} from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { APP_IMAGES } from '../data/images';
import { BLOG_POSTS, BlogPost } from '../data/blogs';

interface BlogPageProps {
  onNavigate: (page: Page) => void;
  initialSlug?: string;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, initialSlug }) => {
  // When initialSlug is omitted (/blog/), display the Blog Index Hub; otherwise display the selected post
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initialSlug || null);

  useEffect(() => {
    setSelectedSlug(initialSlug || null);
  }, [initialSlug]);

  const activePost = selectedSlug
    ? BLOG_POSTS.find((p) => p.slug === selectedSlug) || null
    : null;

  const isBlogIndex = !activePost;

  // Dynamically synchronize document title, description, OG, and Twitter tags
  useEffect(() => {
    const targetTitle = activePost
      ? activePost.metaTitle
      : 'San Diego Leak Detection Blog & Homeowner Guides';
    const targetDesc = activePost
      ? activePost.metaDesc
      : 'Explore San Diego leak detection guides covering hidden water leak signs, slab leak locating, acoustic testing, and targeted pipe repair methods.';

    document.title = targetTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', targetDesc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', targetTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', targetDesc);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', targetTitle);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', targetDesc);
  }, [activePost]);

  const getPostHref = (post: BlogPost) =>
    post.routePage === 'blog' ? '/blog/' : `/${post.routePage}/`;

  const handleSelectPost = (post: BlogPost) => {
    setSelectedSlug(post.slug);
    onNavigate(post.routePage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Article Selector Navigation Bar */}
      <section className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Leak Detection Diagnostic Knowledge Center:</span>
            </div>
            <nav aria-label="Blog Articles" className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <a
                href="/blog/"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedSlug(null);
                  onNavigate('blog');
                }}
                className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isBlogIndex
                    ? 'bg-blue-600 text-white shadow-sm font-bold'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span>All Guides</span>
                {isBlogIndex && <Check className="w-3.5 h-3.5" />}
              </a>
              {BLOG_POSTS.map((post) => {
                const isActive = post.slug === selectedSlug;
                return (
                  <a
                    key={post.slug}
                    href={getPostHref(post)}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelectPost(post);
                    }}
                    className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm font-bold'
                        : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    <span>{post.shortTitle}</span>
                    {isActive && <Check className="w-3.5 h-3.5" />}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </section>

      {/* Blog Article Header */}
      <section className="bg-gradient-to-br from-sky-50 via-blue-50/50 to-white border-b border-slate-200 text-slate-900 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumbs" className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="hover:underline hover:text-blue-700"
            >
              Home
            </a>
            <span>/</span>
            {activePost ? (
              <>
                <a
                  href="/blog/"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedSlug(null);
                    onNavigate('blog');
                  }}
                  className="hover:underline hover:text-blue-700 text-slate-600"
                >
                  Blog &amp; Knowledge Center
                </a>
                <span>/</span>
                <span className="text-slate-900 font-medium">{activePost.shortTitle}</span>
              </>
            ) : (
              <span className="text-slate-900 font-medium">Blog &amp; Knowledge Center</span>
            )}
          </nav>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
              {activePost ? activePost.badge : 'San Diego Leak Detection Knowledge Center'}
            </span>
            <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              CSLB Industry Verified Diagnostic Standard
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {isBlogIndex ? (
              <>
                San Diego{' '}
                <span className="text-blue-700">
                  Leak Detection Blog
                </span>{' '}
                &amp; Homeowner Field Guides
              </>
            ) : activePost.slug === 'hidden-water-leak-signs-city-heights' ? (
              <>
                Is Your{' '}
                <span className="text-blue-700">
                  City Heights Home
                </span>{' '}
                Hiding a Water Leak?
              </>
            ) : activePost.slug === 'leak-detection-city-heights-san-diego' ? (
              <>
                Leak Detection in{' '}
                <span className="text-blue-700">
                  City Heights, San Diego
                </span>
                : A Friendly Homeowner’s Guide
              </>
            ) : activePost.slug === 'guide-to-leak-detection-and-repair' ? (
              <>
                The Complete Guide to{' '}
                <span className="text-blue-700">
                  Leak Detection
                </span>{' '}
                and{' '}
                <span className="text-amber-700">
                  Leak Repair
                </span>{' '}
                in San Diego, CA
              </>
            ) : (
              <>
                Underground Water &amp; Slab{' '}
                <span className="text-blue-700">
                  Leak Detection
                </span>
                : How Plumbers Pinpoint Hidden Pipe Leaks Without Jackhammers
              </>
            )}
          </h1>

          {activePost ? (
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 pt-2 border-t border-slate-200">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-600" />
                <span>{activePost.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>Published {activePost.publishDate} &bull; Updated {activePost.updateDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>{activePost.readTime}</span>
              </div>
            </div>
          ) : (
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed pt-2 border-t border-slate-200">
              Practical San Diego homeowner guides covering how to spot hidden water leaks early, run a ten-minute meter check, understand non-invasive acoustic &amp; thermal diagnostics, and protect aging slab and coastal plumbing.
            </p>
          )}
        </div>
      </section>

      {/* Main Blog Content Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 leading-relaxed">
        {/* Switcher Banner with All Crawlably Linked Articles */}
        <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <FileText className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Select a specialized diagnostic guide:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {BLOG_POSTS.map((post) => (
              <a
                key={post.slug}
                href={getPostHref(post)}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectPost(post);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                  activePost?.slug === post.slug
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                <span>{post.shortTitle}</span>
              </a>
            ))}
          </div>
        </div>

        {/* BLOG HUB INDEX VIEW (/blog/) OR INDIVIDUAL ARTICLE */}
        {isBlogIndex ? (
          <section className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...BLOG_POSTS].reverse().map((post) => (
                <div
                  key={post.slug}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden flex flex-col"
                >
                  <a
                    href={getPostHref(post)}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelectPost(post);
                    }}
                    className="block relative h-48 overflow-hidden"
                  >
                    <img
                      src={post.featuredImage}
                      alt={post.imageAlt}
                      width={600}
                      height={320}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded-md border border-blue-200 shadow-xs">
                      {post.badge}
                    </span>
                  </a>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-[11px] text-slate-500">
                        <span>{post.publishDate}</span>
                        <span>&bull;</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-lg font-extrabold text-slate-900 leading-snug">
                        <a
                          href={getPostHref(post)}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSelectPost(post);
                          }}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {post.title}
                        </a>
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <a
                        href={getPostHref(post)}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelectPost(post);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : activePost.slug === 'hidden-water-leak-signs-city-heights' ? (
          <>
            {/* Intro Summary Callout */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200 rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2 font-extrabold text-blue-950 text-base">
                <Search className="w-5 h-5 text-blue-600" />
                <span>Early Warning Guide for City Heights Homeowners</span>
              </div>
              <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
                Most leaks don’t announce themselves. There’s no flood and no dramatic burst pipe, just a small change somewhere that’s easy to shrug off. For City Heights homeowners, learning to notice those small changes is one of the cheapest ways to protect a house.
              </p>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={APP_IMAGES.thermalImaging}
                alt="Technician inspecting interior wall for hidden moisture and water leaks with thermal imaging in City Heights home"
                width={800}
                height={420}
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="bg-slate-100 border-t border-slate-200 text-slate-700 text-xs px-4 py-2.5 flex items-center justify-between">
                <span>Non-invasive thermal imaging reveals hidden moisture behind drywall and under flooring without opening walls.</span>
                <span className="text-blue-700 font-semibold">City Heights, San Diego &bull; 92105</span>
              </div>
            </div>

            {/* Section 1: Start With Your Water Bill */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <FileSpreadsheet className="w-6 h-6 text-blue-600 shrink-0" />
                <span>Start With Your Water Bill</span>
              </h2>
              <p>
                The bill is often the first clue. If usage creeps up month after month and nothing in the household has changed, water may be escaping somewhere. Pull out the last few statements and compare them. A steady upward trend deserves a closer look.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start gap-3">
                <Activity className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>Quick Tip:</strong> Compare gallons used (not just dollar totals, which can shift with rate changes or seasonal irrigation) across the past three billing cycles to catch silent, continuous water loss early.
                </p>
              </div>
            </section>

            {/* Section 2: Signs Your House Is Trying to Tell You Something */}
            <section className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                <span>Signs Your House Is Trying to Tell You Something</span>
              </h2>

              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-5 sm:p-6 space-y-4">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-blue-950">
                  <li className="flex items-start gap-2 bg-white/85 p-3.5 rounded-xl border border-blue-100 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Musty smells in a closet, cabinet, or corner room</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white/85 p-3.5 rounded-xl border border-blue-100 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Paint that bubbles, peels, or looks stained</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white/85 p-3.5 rounded-xl border border-blue-100 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Floors that feel warm, soft, or slightly raised</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white/85 p-3.5 rounded-xl border border-blue-100 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>The faint sound of water running when nothing is on</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white/85 p-3.5 rounded-xl border border-blue-100 shadow-xs sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Weak water pressure that can’t be explained</span>
                  </li>
                </ul>
                <p className="text-xs sm:text-sm text-blue-950 font-semibold pt-1">
                  One sign on its own may be nothing. Two or three together are worth checking.
                </p>
              </div>
            </section>

            {/* Section 3: Try a Ten-Minute Meter Check */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <Gauge className="w-6 h-6 text-indigo-600 shrink-0" />
                <span>Try a Ten-Minute Meter Check</span>
              </h2>
              <div className="bg-sky-50 border border-sky-200 text-slate-900 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs">
                <ol className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                    <span>Turn off every faucet and appliance that uses water.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                    <span>Find your water meter and note the reading or the small dial.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                    <span>Wait ten minutes without using any water.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                    <span>Check again. If the numbers or dial moved, water is flowing somewhere it shouldn’t.</span>
                  </li>
                </ol>
                <p className="text-xs sm:text-sm text-blue-800 font-medium border-t border-sky-200 pt-3">
                  It isn’t a diagnosis, but it’s a reliable first step before calling anyone.
                </p>
              </div>
            </section>

            {/* Supporting Image 2: Acoustic Listening */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={APP_IMAGES.heroWaterLeak}
                alt="Acoustic ground microphone locating an underground or sub-slab water leak in City Heights San Diego"
                width={800}
                height={420}
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="bg-slate-100 border-t border-slate-200 text-slate-700 text-xs px-4 py-2.5 flex items-center justify-between">
                <span>Electronic listening equipment traces hidden pipe leaks without cutting open drywall at random.</span>
                <span className="text-emerald-700 font-semibold">Targeted Non-Invasive Locating</span>
              </div>
            </div>

            {/* Section 4: Why Older Homes Deserve Extra Attention */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
                <span>Why Older Homes Deserve Extra Attention</span>
              </h2>
              <p>
                Plenty of City Heights homes have been standing for decades. Over time, fittings wear out, joints loosen, and older pipe materials can corrode. That doesn’t mean every older house has a leak. It does mean a periodic check makes sense, especially if the bill starts climbing.
              </p>
            </section>

            {/* Section 5: When to Call a Professional */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <Radio className="w-6 h-6 text-cyan-600 shrink-0" />
                <span>When to Call a Professional</span>
              </h2>
              <p>
                If the meter keeps moving or the signs pile up, a leak detection specialist can find the source without cutting open walls at random. Technicians typically use listening equipment, thermal imaging, and moisture readings to trace the problem, so repairs stay small and targeted.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                    <Radio className="w-4 h-4 text-blue-600" />
                    <span>Listening Equipment</span>
                  </div>
                  <div className="text-[11px] text-slate-600">Amplifies pressurized water escaping pinhole leaks beneath concrete slabs or behind plaster.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                    <ThermometerSnowflake className="w-4 h-4 text-purple-600" />
                    <span>Thermal Imaging</span>
                  </div>
                  <div className="text-[11px] text-slate-600">Maps temperature patterns behind walls and floors to pinpoint hot or cold pipe leaks visually.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-cyan-600" />
                    <span>Moisture Readings</span>
                  </div>
                  <div className="text-[11px] text-slate-600">Confirms hidden saturation inside baseboards, subfloors, and cabinetry without invasive cuts.</div>
                </div>
              </div>
            </section>

            {/* Section 6: What to Do While You Wait */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <Wrench className="w-6 h-6 text-emerald-600 shrink-0" />
                <span>What to Do While You Wait</span>
              </h2>
              <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-5 sm:p-6">
                <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Shut off the main water valve if you think a pipe is actively leaking.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Take photos of any stains or damp areas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Hold off on opening walls or floors yourself.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Check your insurance policy and keep notes for any claim.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7: Suspect a Leak? Call Us */}
            <section className="bg-gradient-to-br from-sky-100 via-blue-50 to-white border border-sky-200 text-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-white px-3 py-1 rounded-full border border-blue-200 inline-block">
                  City Heights Leak Detection Pro
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Suspect a Leak? Call Us
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  Reach City Heights Leak Detection Pro anytime for non-invasive water leak locating and targeted repair coordination across City Heights and San Diego.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-slate-900">
                    <a href="tel:+16199109411" className="hover:text-blue-700 transition-colors">
                      (619) 910-9411
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-500">24/7 dispatch support</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Visit</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    3431 43rd St, San Diego, CA 92105
                  </div>
                  <p className="text-[11px] text-slate-500">City Heights service desk</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Web</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    www.cityheightsleakdetectionpro.com
                  </div>
                  <p className="text-[11px] text-slate-500">CSLB-licensed contractor network</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+16199109411"
                  className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all text-center"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>Call (619) 910-9411 Now</span>
                </a>
                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="bg-white hover:bg-slate-50 text-blue-700 font-semibold px-5 py-3.5 rounded-xl text-xs border border-blue-200 transition-colors text-center flex items-center justify-center"
                >
                  Request Non-Invasive Inspection &rarr;
                </a>
              </div>
            </section>
          </>
        ) : activePost.slug === 'leak-detection-city-heights-san-diego' ? (
          <>
            {/* Quick Keyword & Executive Summary Callout */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200 rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 font-extrabold text-blue-950 text-base">
                <Search className="w-5 h-5 text-blue-600" />
                <span>Executive Summary: A Friendly Homeowner’s Guide to Leak Detection in City Heights</span>
              </div>
              <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
                A tiny drip behind a wall can quietly waste thousands of gallons of water, pad your bills, and invite mold long before a stain appears. For City Heights homeowners, many of whom live in older properties with aging pipes, early leak detection can mean the difference between a simple fix and a costly disaster. This guide walks through the warning signs, how professionals pinpoint problems without tearing up your home, and what to expect when it comes to price.
              </p>
            </div>

            {/* Featured Image 1 */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={APP_IMAGES.heroWaterLeak}
                alt="Non-invasive acoustic leak detection technician pinpointing hidden water leak in City Heights San Diego home"
                width={800}
                height={420}
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="bg-slate-100 border-t border-slate-200 text-slate-700 text-xs px-4 py-2.5 flex items-center justify-between">
                <span>Precision electro-acoustic listening probe pinpointing concealed sub-surface water leaks.</span>
                <span className="text-blue-700 font-semibold">City Heights, San Diego &bull; 92105</span>
              </div>
            </div>

            {/* Section 1: Why Hidden Leaks Matter in City Heights */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
                <span>Why Hidden Leaks Matter in City Heights</span>
              </h2>
              <p>
                Many City Heights homes were built decades ago, and pipes don’t last forever. Corrosion, shifting soil, and old fittings can all lead to slow leaks that go unnoticed for months. The damage is rarely dramatic at first. It’s gradual, which is exactly why it gets expensive.
              </p>
              <p>
                Whether you live in a classic 1920s Spanish Revival bungalow along University Avenue, a mid-century home near Wightman Street, or a renovated multifamily property in 92105, subterranean copper and galvanized pipes undergo constant stress from San Diego&apos;s hard water minerals and reactive clay soil. Early <strong>leak detection in City Heights San Diego</strong> catches micro-fractures before foundation slab cracks, drywall rot, or mold outbreaks force emergency structural renovations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Activity className="w-4 h-4 text-amber-500" />
                    <span>Gradual vs. Catastrophic Damage</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A slow subterranean pipe leak losing just 0.5 gallons per minute wastes over <strong>21,600 gallons per month</strong>. The moisture softens supporting foundation soils, leading to uneven slab settling and costly structural remediation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <ShieldAlert className="w-4 h-4 text-blue-600" />
                    <span>Aging Plumbing Infrastructure</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Original post-war copper pipes in City Heights often suffer from internal pitting corrosion. When pinholes form under concrete slabs or inside walls, non-invasive electronic locating finds the exact spot without destructive demolition.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Common Signs of a Hidden Leak */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                <span>Common Signs of a Hidden Leak</span>
              </h2>
              <p>
                Because plumbing lines are hidden behind finished drywall, ceilings, and thick concrete foundation slabs, property owners must watch for subtle behavioral and sensory indicators:
              </p>

              {/* Water Leak Signs Card */}
              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-5 sm:p-6 space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-blue-950 flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-blue-600" />
                  <span>Water Leak Warning Signs</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-blue-950">
                  <li className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-blue-100 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Unexplained bill spikes:</strong> A water bill that climbs for no clear reason despite normal household usage.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-blue-100 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Moisture &amp; odor:</strong> Damp spots, peeling paint, blistered baseboards, or persistent musty smells.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-blue-100 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Phantom running sounds:</strong> The sound of running or hissing water when every faucet and appliance is switched off.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-blue-100 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Warm flooring spots:</strong> Warm patches on tile, linoleum, or hardwood flooring—a definitive hallmark of a hot-water slab leak.</span>
                  </li>
                </ul>
              </div>

              {/* Gas Leak Signs Card */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 sm:p-6 space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-amber-950 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-600" />
                  <span>Gas Leak Warning Signs</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-amber-950">
                  <li className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-amber-100 shadow-xs">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Rotten-egg odor:</strong> A sulfurous rotten-egg smell near gas appliances, water heaters, or meter supply lines.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-amber-100 shadow-xs">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Audible hissing:</strong> A faint whistling or hissing sound near threaded gas pipe joints and flexible connectors.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-amber-100 shadow-xs sm:col-span-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Vegetation die-off:</strong> Dead or discolored patches of grass and plants directly over a buried yard gas service line.</span>
                  </li>
                </ul>
              </div>

              {/* Critical Emergency Banner for Gas Leaks */}
              <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl p-6 shadow-lg space-y-3">
                <div className="flex items-center gap-2 text-base font-extrabold uppercase tracking-wide text-rose-100">
                  <Flame className="w-5 h-5 text-amber-300 animate-pulse" />
                  <span>Important Safety Protocol: Gas Leaks Are Immediate Emergencies</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-white">
                  <strong>A suspected gas leak is an emergency.</strong> Leave the building immediately and do not operate electrical switches, light fixtures, or phones inside the home. Call your gas utility (SDG&amp;E at <strong>1-800-411-7343</strong>) or <strong>911</strong> from outside at a safe distance. Once the scene is secured, our licensed technicians can perform certified digital pressure testing to locate the break and clear utility red tags.
                </p>
                <div className="pt-1 flex flex-wrap gap-3">
                  <a
                    href="tel:911"
                    className="bg-white text-red-700 hover:bg-rose-50 font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                  >
                    <span>Dial 911 (Life Safety)</span>
                  </a>
                  <a
                    href="tel:+18004117343"
                    className="bg-red-800 hover:bg-red-900 text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 border border-red-500 transition-colors"
                  >
                    <span>SDG&amp;E Emergency: 1-800-411-7343</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Featured Image 2: Thermal Imaging */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={APP_IMAGES.thermalImaging}
                alt="Infrared FLIR thermal imaging camera identifying hidden sub-slab water leak temperature differentials under concrete floor"
                width={800}
                height={420}
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="bg-slate-100 border-t border-slate-200 text-slate-700 text-xs px-4 py-2.5 flex items-center justify-between">
                <span>FLIR thermal infrared sensor isolating hot water slab leak signature without breaking floor tiles.</span>
                <span className="text-blue-700 font-semibold">Non-Invasive Diagnostic Inspection</span>
              </div>
            </div>

            {/* Section 3: How Professionals Find Leaks */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <Wrench className="w-6 h-6 text-blue-600 shrink-0" />
                <span>How Professionals Find Leaks Without Tearing Up Your Home</span>
              </h2>
              <p>
                Decades ago, finding a buried leak involved sledgehammers, exploratory trenches, and ripped-apart drywall. Modern diagnostic specialists use high-precision non-destructive technologies that identify the source down to the exact inch:
              </p>

              <div className="space-y-4">
                {/* Subsection A: Water Leak Detection */}
                <div className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-white space-y-3 shadow-xs">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Search className="w-5 h-5 text-blue-600" />
                    <span>Water Leak Detection</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Technicians use acoustic listening devices, thermal cameras, and moisture meters to find the exact source of a leak without breaking walls open. Acoustic ground microphones capture the distinct frequency sound of pressurized water escaping tiny pinholes. Homeowners in nearby neighborhoods often search for <strong>water leak detection university heights san diego</strong>, and the same non-invasive methods apply across the area.
                  </p>
                </div>

                {/* Subsection B: Slab Leaks */}
                <div className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-white space-y-3 shadow-xs">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-600" />
                    <span>Slab Leaks</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    When pipes run beneath a concrete foundation, finding a leak is tricky. Specialists listen for escaping water and map the line’s path using electromagnetic pipe transmitters. Residents nearby looking for a <strong>slab leak detection service university heights san diego</strong> will find that pinpointing the exact spot first keeps repairs small and targeted, avoiding arbitrary jackhammering through expensive flooring.
                  </p>
                </div>

                {/* Subsection C: Gas Lines */}
                <div className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-white space-y-3 shadow-xs">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-amber-600" />
                    <span>Gas Lines</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Gas leak detection san diego</strong> services rely on sensitive electronic detectors that spot even tiny amounts of escaping gas down to single parts per million (PPM). For larger properties or older systems, <strong>gas leak survey companies</strong> can inspect an entire network of lines and document the results with digital manometer pressure decay readouts, providing certified documentation for city inspectors and utilities.
                  </p>
                </div>
              </div>
            </section>

            {/* Featured Image 3: Gas Leak Testing */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={APP_IMAGES.gasLeakTesting}
                alt="Electronic gas detector sniffer inspecting gas line valves and meters in San Diego"
                width={800}
                height={420}
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="bg-slate-100 border-t border-slate-200 text-slate-700 text-xs px-4 py-2.5 flex items-center justify-between">
                <span>Digital combustible gas sniffer verifying natural gas supply connections and emergency shut-offs.</span>
                <span className="text-amber-700 font-semibold">Certified Gas Safety Survey</span>
              </div>
            </div>

            {/* Section 4: What Does Leak Detection Cost? */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-emerald-600 shrink-0" />
                <span>What Does Leak Detection Cost? (2026 Price Guide)</span>
              </h2>
              <p>
                Let’s tackle the question on everyone’s mind: <strong>how much does leak detection cost?</strong> It depends. <strong>Leak detection costs</strong> usually reflect the type of leak, how hard it is to reach, and how long the search takes. A simple under-sink check is a different job from a hunt beneath a foundation.
              </p>

              {/* Factors That Affect Pricing */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
                <h3 className="font-bold text-slate-900 text-base">Key Factors That Affect Pricing:</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Slab leaks:</strong> <strong>Slab leak detection cost</strong> tends to run higher because specialists need advanced equipment (ultrasonic ground microphones, thermal cameras) and more time to map subterranean foundation lines.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Gas leaks:</strong> <strong>Gas leak detection cost</strong> depends on the size of the property and the number of lines inspected, especially when multi-unit manifolds or long yard runs require pressure decay testing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Search time:</strong> <strong>Leak locating cost</strong> can climb when pipes are buried, hidden behind finished walls, or hard to trace due to non-standard post-war plumbing layouts.</span>
                  </li>
                </ul>
              </div>

              {/* 2026 Homeowner Pricing Reference Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white pt-2">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                  <thead className="bg-sky-100 text-slate-900 border-b border-sky-200 font-semibold text-xs uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4 sm:px-6">Service Type</th>
                      <th className="py-3.5 px-4">2026 Typical Cost Range</th>
                      <th className="py-3.5 px-4">Diagnostic Method</th>
                      <th className="py-3.5 px-4 sm:px-6">What Is Included</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-bold text-slate-900">
                        Basic Fixture &amp; Exposed Pipe Check
                      </td>
                      <td className="py-3 px-4 font-extrabold text-blue-700 whitespace-nowrap">
                        $125 &ndash; $225
                      </td>
                      <td className="py-3 px-4 text-slate-600">Visual, Dye &amp; Pressure Gauge</td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600">Under-sink, toilets, angle stops, hose bibbs</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3 px-4 sm:px-6 font-bold text-slate-900">
                        Interior Wall &amp; Ceiling Leak Detection
                      </td>
                      <td className="py-3 px-4 font-extrabold text-blue-700 whitespace-nowrap">
                        $175 &ndash; $325
                      </td>
                      <td className="py-3 px-4 text-slate-600">FLIR Thermal &amp; Moisture Probes</td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600">Concealed risers without drywall cuts</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-bold text-slate-900">
                        Foundation Slab Leak Locating
                      </td>
                      <td className="py-3 px-4 font-extrabold text-blue-700 whitespace-nowrap">
                        $250 &ndash; $450
                      </td>
                      <td className="py-3 px-4 text-slate-600">Acoustic Microphones &amp; Tracer Gas</td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600">Pinpoints sub-slab supply lines within inches</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3 px-4 sm:px-6 font-bold text-slate-900">
                        Natural Gas Leak Survey &amp; Decay Test
                      </td>
                      <td className="py-3 px-4 font-extrabold text-blue-700 whitespace-nowrap">
                        $195 &ndash; $350
                      </td>
                      <td className="py-3 px-4 text-slate-600">Digital Manometer &amp; PPM Sniffers</td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600">Full system safety check &amp; SDG&amp;E compliance report</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-bold text-slate-900">
                        Underground Yard Water Main Line
                      </td>
                      <td className="py-3 px-4 font-extrabold text-blue-700 whitespace-nowrap">
                        $275 &ndash; $495
                      </td>
                      <td className="py-3 px-4 text-slate-600">Electromagnetic Pipe Locators</td>
                      <td className="py-3 px-4 sm:px-6 text-slate-600">Meter-to-house service lateral tracing</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Getting a Fair Price Subsection */}
              <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-5 sm:p-6 space-y-3">
                <h3 className="font-bold text-emerald-950 text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>How Homeowners Can Ensure a Fair Price</span>
                </h3>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  Always ask for a <strong>leak detection cost estimate</strong> in writing before work begins. It also helps to know whether the <strong>cost of leak detection</strong> includes a written report for your insurance company. Before agreeing to any <strong>cost for leak detection</strong>, ask whether repairs are bundled in or billed separately. A transparent provider will happily explain every line item.
                </p>
                <div className="text-xs text-emerald-900 bg-white/80 p-3 rounded-xl border border-emerald-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Insurance Tip:</strong> Many California homeowners insurance policies cover the <em>cost of leak detection and tear-out</em> to access a ruptured pipe, even when basic plumbing repairs are excluded. A detailed diagnostic report accelerates your claim.</span>
                </div>
              </div>
            </section>

            {/* Featured Image 4: Plumber Inspection */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={APP_IMAGES.plumberInspection}
                alt="CSLB licensed plumber inspecting and repairing water lines in City Heights CA"
                width={800}
                height={420}
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="bg-slate-100 border-t border-slate-200 text-slate-700 text-xs px-4 py-2.5 flex items-center justify-between">
                <span>Licensed plumbing contractor executing surgical pipe repair following acoustic detection.</span>
                <span className="text-emerald-700 font-semibold">CSLB Licensed Contractor Network</span>
              </div>
            </div>

            {/* Section 5: Choosing the Right Local Help */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <User className="w-6 h-6 text-blue-600 shrink-0" />
                <span>Choosing the Right Local Help in City Heights, CA</span>
              </h2>
              <p>
                Leak finding and leak repair are sometimes handled by different people. If a problem turns out to need a fix, <strong>plumbers city heights ca</strong> are a natural next call. It’s worth checking licenses, reviews, and whether they offer warranties on their work.
              </p>
              <p>
                At <strong>City Heights Leak Detection Pro</strong>, we maintain a pre-screened, qualified contractor network of licensed California plumbers (CSLB C-36). When you request service, you are connected directly with verified professionals who arrive equipped with high-grade acoustic, thermal, and electronic diagnostic gear.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <div className="font-bold text-xs text-slate-900">1. Verify CSLB License</div>
                  <div className="text-[11px] text-slate-600">Ensure active workers’ comp, general liability, and state plumbing credentials.</div>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <div className="font-bold text-xs text-slate-900">2. Request Non-Invasive First</div>
                  <div className="text-[11px] text-slate-600">Never allow demolition until electronic sensors confirm the exact coordinates.</div>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <div className="font-bold text-xs text-slate-900">3. Written Workmanship Warranty</div>
                  <div className="text-[11px] text-slate-600">Confirm parts, labor, and re-testing are covered under written service warranties.</div>
                </div>
              </div>
            </section>

            {/* Section 6: Searching Beyond City Heights */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <MapPin className="w-6 h-6 text-cyan-600 shrink-0" />
                <span>Searching Beyond City Heights: What Homeowners Everywhere Should Know</span>
              </h2>
              <p>
                Some readers may be looking for help in other areas. People searching for <strong>lake city leak detection</strong> or <strong>slab leak detection cherry hill</strong> will find the same principles apply: look for non-invasive methods, clear pricing, and local experience.
              </p>
              <p>
                Whether you are managing a rental property on the East Coast or dealing with high water bills across San Diego County (from North Park and Normal Heights to El Cajon and Chula Vista), never accept blind demolition. Quality diagnostic technicians anywhere will follow the same gold standard: isolate, electronically pinpoint, document, and preserve your property&apos;s finishes.
              </p>
            </section>

            {/* Section 7: Suspect a Leak? Talk to a Local Team */}
            <section className="bg-gradient-to-br from-sky-100 via-blue-50 to-white border border-sky-200 text-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-white px-3 py-1 rounded-full border border-blue-200 inline-block">
                  City Heights Priority Dispatch
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Suspect a Leak? Talk to a Local Team
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  If you notice any of the warning signs above, don’t wait for the damage to spread. <strong className="text-slate-900">City Heights Leak Detection Pro</strong> serves homeowners and property owners throughout City Heights, San Diego.
                </p>
              </div>

              {/* Local Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <Phone className="w-4 h-4" />
                    <span>Direct Call</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-slate-900">
                    <a href="tel:+16199109411" className="hover:text-blue-700 transition-colors">
                      (619) 910-9411
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-500">24/7 emergency dispatch line</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Local Office</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    3431 43rd St, San Diego, CA 92105
                  </div>
                  <p className="text-[11px] text-slate-500">City Heights dispatch desk</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Official Web</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    www.cityheightsleakdetectionpro.com
                  </div>
                  <p className="text-[11px] text-slate-500">Licensed plumbing contractor network</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+16199109411"
                  className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all text-center"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>Call (619) 910-9411 for Fast Leak Help</span>
                </a>
                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="bg-white hover:bg-slate-50 text-blue-700 font-semibold px-5 py-3.5 rounded-xl text-xs border border-blue-200 transition-colors text-center flex items-center justify-center"
                >
                  Request Non-Invasive Estimate &rarr;
                </a>
              </div>
            </section>
          </>
        ) : activePost.slug === 'underground-slab-water-leak-detection-guide' ? (
          <>
            {/* Quick Keyword & Executive Summary Callout */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50/50 border border-blue-200 rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 font-extrabold text-blue-950 text-base">
                <Activity className="w-5 h-5 text-blue-600" />
                <span>Executive Summary: Non-Invasive Water Leak Detection Standards</span>
              </div>
              <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
                When water lines crack beneath concrete foundations, behind insulated drywall, or four feet underground along a municipal service lateral, the damage compounds by the hour. <strong>Professional water leak detection</strong> eliminates the costly guesswork of demolition by pairing acoustic micro-sensors, infrared thermography, and tracer gas forensics. Below is an authoritative technical analysis of how certified leak specialists detect, isolate, and repair hidden leaks across residential and commercial San Diego properties.
              </p>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={APP_IMAGES.thermalImaging}
                alt="Infrared FLIR thermal imaging camera identifying hidden sub-slab water leak temperature differentials under concrete floor"
                width={800}
                height={420}
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="bg-slate-100 border-t border-slate-200 text-slate-700 text-xs px-4 py-2.5 flex items-center justify-between">
                <span>FLIR infrared thermography pinpointing a pressurized hot-water slab pipe rupture.</span>
                <span className="text-blue-700 font-semibold">San Diego County &bull; 92105</span>
              </div>
            </div>

            {/* Section 1: The Physics of Hidden Leaks */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                1. What is Modern Water Leak Detection? The Science of Non-Destructive Locating
              </h2>
              <p>
                Every pressurized plumbing system operates under constant hydraulic force—typically between 50 and 80 PSI in municipal San Diego water districts. When a hairline fissure, pinhole corrosion pit, or cracked joint develops in copper, galvanized steel, or PEX supply lines, water exits at high velocity into the surrounding soil, aggregate, or structural framing.
              </p>
              <p>
                In the past, locating such breaches required destructive exploratory trenching. Plumbers would sledgehammer floor tiles or tear down plaster walls in hopes of chancing upon the wet pipe. Today, <strong>non-invasive water leak detection</strong> is a rigorous acoustic and thermal engineering discipline that maps subterranean plumbing grids with pinpoint accuracy.
              </p>
              <p>
                By analyzing the mechanical vibrations, frequency signatures, and thermodynamic gradients produced by pressurized leaks, experienced diagnostic technicians can isolate the exact puncture coordinates to within a 4-inch radius—before a single floor tile or section of drywall is disturbed.
              </p>
            </section>

            {/* Urgent Dispatch Callout */}
            <div className="bg-gradient-to-r from-sky-100 via-blue-50 to-indigo-50 border border-blue-200 text-slate-900 rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center justify-center sm:justify-start gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Immediate Water Leak Detection Dispatch</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900">
                  Suspect a Slab or Hidden Pipe Leak in City Heights?
                </div>
                <p className="text-xs text-slate-600 max-w-lg">
                  Connecting San Diego homeowners with CSLB-licensed, insured leak detection contractors equipped with acoustic ground mics and FLIR infrared gear.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.telLink}
                className="shrink-0 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm shadow-md transition-transform active:scale-95 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (619) 910-9411</span>
              </a>
            </div>

            {/* Section 2: The 5 Core Technologies */}
            <section className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                2. The 5 Core Technologies Powering Electronic Leak Detection
              </h2>
              <p>
                To consistently achieve <strong>top-tier leak detection precision</strong>, diagnostic specialists do not rely on a single gadget. They deploy a multi-layered diagnostic protocol matching the building material, pipe diameter, and soil composition:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* Tech 1 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Radio className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    1. Electro-Acoustic Ground Microphones
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Water escaping a pressurized orifice vibrates the pipe wall, generating high-frequency audio waves (500 Hz to 2,500 Hz) that travel through concrete slabs and compacted earth. Specialists use seismic ground listening discs coupled with noise-canceling digital amplifiers to trace the peak amplitude and zero in on the ruptured fitting.
                  </p>
                </div>

                {/* Tech 2 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <ThermometerSnowflake className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    2. FLIR High-Resolution Infrared Thermography
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Hot water slab leaks transfer heat into the surrounding concrete slab, creating thermal blooms clearly visible on infrared imagers. For cold water lines, thermal cameras register evaporative cooling signatures behind drywall cavities and ceiling joists, identifying hidden ceiling and wall leaks before water stains show.
                  </p>
                </div>

                {/* Tech 3 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    3. Digital Static Pressure Decay Testing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Before beginning acoustic scans, technicians isolate individual domestic plumbing manifolds and hook up calibrated digital manometers. By monitoring PSI drop down to 0.05 PSI over a 15-minute test, the technician proves beyond doubt whether the leak is on the cold domestic line, hot line, irrigation branch, or pool return.
                  </p>
                </div>

                {/* Tech 4 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    4. Non-Toxic Tracer Gas (Helium/Hydrogen) Testing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For deep underground yard lines, large commercial asphalt lots, or polybutylene pipes that do not conduct sound effectively, lines are evacuated and charged with safe, food-grade tracer gas. Being lighter than air, the tracer gas escapes through microscopic pinholes, percolates up through 4 feet of soil or concrete, and is detected by sniffing snouts sensitive to parts-per-million.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Slab Leak Detection Focus */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                3. Slab Leak Detection: Why San Diego &amp; City Heights Homes Are Particularly Vulnerable
              </h2>
              <p>
                A <strong>slab leak</strong> refers specifically to a pipe failure occurring underneath or encased within the concrete foundation slab of a residential or commercial building. In older neighborhoods like City Heights (zip code 92105), Talmadge, Normal Heights, and North Park, thousands of mid-century single-family houses and multi-unit apartments were built using type M or L copper piping laid directly atop soil before concrete was poured.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>The 3 Primary Catalysts of Slab Leaks in Central San Diego:</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Expansive Adobe Clay Soil:</strong> City Heights sits atop expansive clay formations. As seasonal moisture fluctuates, the soil expands and contracts, stressing underground copper joints until they fatigue and shear.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Gravel Abrasion &amp; Thermal Expansion:</strong> Hot water lines expand each time a shower runs and contract when cooling. If the copper rubs against sharp underground aggregate without protective foam sleeving, the pipe wall wears thin and punctures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Electrolytic &amp; Chemical Soil Corrosion:</strong> Direct contact between bare copper and mineralized clay initiates galvanic pitting, eating pinholes into the metal from the exterior inward.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4: Warning Signs Checklist */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4. Signs You Need Immediate Slab &amp; Water Leak Detection
              </h2>
              <p>
                Because subterranean leaks remain out of sight, homeowners must watch for subtle behavioral and structural warnings before water undermines foundation stability:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Unexplained Water Bill Inflation</strong>
                    <span className="text-xs text-slate-600">A $100 to $400 monthly surge on your City of San Diego water utility statement with no changes in household consumption is the classic #1 sign of an active underground leak.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Activity className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Warm or Damp Flooring Spots</strong>
                    <span className="text-xs text-slate-600">Walking barefoot across hallway tile, linoleum, or hardwood and feeling a localized warm patch indicates a hot water line leaking beneath the slab.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Continuous Sound of Running Water</strong>
                    <span className="text-xs text-slate-600">Hearing a faint hissing, whooshing, or trickling noise in quiet rooms when all faucets, toilets, and appliances are shut off.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Layers className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Foundation Cracks or Buckling Baseboards</strong>
                    <span className="text-xs text-slate-600">Water saturating foundation soil causes uneven settling or hydraulic heave, resulting in hairline cracks in exterior stucco, warped baseboards, or sticking interior doors.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Step-by-Step DIY Meter Test */}
            <section className="bg-sky-50 border border-sky-200 text-slate-900 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm uppercase tracking-wider">
                <Search className="w-4 h-4 text-blue-600" />
                <span>The 10-Minute Homeowner Water Meter Test</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                You can independently verify whether your home has a hidden pressurized water leak right now using your curb water meter:
              </p>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                  <div>
                    <strong className="text-slate-900 font-semibold">Turn Off All Indoor and Outdoor Water:</strong> Ensure washing machines, dishwashers, ice makers, and garden sprinklers are completely idle. Do not flush toilets during the test.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                  <div>
                    <strong className="text-slate-900 font-semibold">Inspect the Water Meter Dial:</strong> Locate the meter box at your street curb. Open the lid carefully. Look for a small red, blue, or silver triangle, gear, or digital flow rate indicator.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                  <div>
                    <strong className="text-slate-900 font-semibold">Observe Movement:</strong> If the low-flow dial is spinning, or the digital register increases over 15 minutes, water is actively leaking. Immediately call our 24/7 dispatch hotline at <strong className="text-slate-900">(619) 910-9411</strong> to schedule non-invasive acoustic locating.
                  </div>
                </li>
              </ol>
            </section>

            {/* Section 6: From Detection to Repair */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                5. Water Leak Repair Solutions: Spot Repair vs. Overhead PEX Rerouting
              </h2>
              <p>
                Once <strong>leak detection</strong> confirms the exact location of the pipe breach, property owners have two primary repair avenues:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-blue-600" />
                    <span>Direct Slab Spot Repair</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A technician cuts a localized opening directly over the acoustically pinpointed leak, clears back aggregate, removes the compromised copper section, and brazes in a new type L copper or brass sleeve. Ideal when piping is otherwise healthy and the leak is located under easily repaired flooring.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Overhead PEX Line Bypass (Reroute)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Rather than jackhammering through expensive hardwood or custom tile, plumbers abandon the leaking sub-slab line entirely. A new corrosion-proof, flexible PEX supply line is fed through the attic, baseboards, or drywall to re-feed the fixture—eliminating the risk of future slab leaks along that line forever.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Local City Heights Context & Dispatch Info */}
            <section className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
              <h3 className="font-extrabold text-blue-950 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-red-500" />
                <span>Need Underground Leak Detection Anywhere in San Diego, CA?</span>
              </h3>
              <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
                From La Jolla, Pacific Beach, and Clairemont Mesa to Downtown, North Park, City Heights, Mira Mesa, and Rancho Bernardo, our qualified contractor network connects you with pre-screened California State License Board (CSLB) contractors specialized in non-destructive electronic leak detection and long-term leak repair.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>Call 24/7 Hotline: {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href="/water-leak/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('water-leak');
                  }}
                  className="bg-white hover:bg-slate-50 text-blue-700 border border-blue-200 font-semibold px-5 py-3.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Explore Water &amp; Slab Leak Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </section>
          </>
        ) : (
          /* POST 1 CONTENT: Foundation Guide to Leak Detection and Leak Repair */
          <>
            {/* Key Takeaways Callout Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2 font-bold text-blue-950 text-base">
                <Activity className="w-5 h-5 text-blue-600" />
                <span>Key Takeaways for Property Owners</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-blue-900">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Non-Invasive Leak Detection:</strong> Modern acoustic ground sensors and FLIR thermal cameras pinpoint underground slab and wall leaks within inches—without destructive floor excavation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Timely Leak Repair:</strong> Addressing pinhole copper slab leaks early prevents foundation soil erosion, mold proliferation, and massive San Diego water bill hikes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Natural Gas Emergency:</strong> If you smell rotten egg odor or suspect a gas line leak, evacuate immediately and call SDG&amp;E (1-800-411-7343) or 911 before scheduling certified repair work.</span>
                </li>
              </ul>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={APP_IMAGES.heroWaterLeak}
                alt="Licensed technician performing acoustic leak detection on a concrete slab in San Diego CA"
                width={800}
                height={420}
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="bg-slate-100 border-t border-slate-200 text-slate-700 text-xs px-4 py-2 flex items-center justify-between">
                <span>Specialized acoustic listening equipment locating hidden pressurized pipe leaks.</span>
                <span className="text-blue-700 font-semibold">San Diego, CA &bull; Citywide Dispatch</span>
              </div>
            </div>

            {/* Section 1: What is Leak Detection? */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                1. What is Professional Leak Detection and Why is Non-Invasive Locating Essential?
              </h2>
              <p>
                When water escapes from pressurized copper or PEX supply lines buried deep beneath concrete foundation slabs, behind finished drywall, or under front-yard landscaping, the leak rarely surfaces directly above the ruptured pipe. Water naturally tracks the path of least resistance, traveling along subterranean gravel beds, footing trenches, or floor joists before emerging ten or twenty feet away.
              </p>
              <p>
                Historically, plumbers relied on invasive guesswork—jackhammering through hardwood floors or tearing open drywall cavities to discover the source. Today, professional <strong>leak detection</strong> utilizes precision electronic instrumentation that identifies the exact location of sub-surface leaks without causing structural damage:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Search className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Acoustic Ground Probes</h3>
                  <p className="text-xs text-slate-600">
                    Ultra-sensitive piezoelectric microphones amplify the distinct high-frequency sound of water escaping pressurized pipes under concrete slabs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Thermal FLIR Imaging</h3>
                  <p className="text-xs text-slate-600">
                    Infrared cameras reveal subtle surface temperature differentials created by hot water slab leaks or evaporative cooling behind drywall.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Activity className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Line Pressure Decay</h3>
                  <p className="text-xs text-slate-600">
                    Digital manometers measure static pressure loss down to fractions of a PSI, isolating whether the breach is on the hot, cold, or irrigation system.
                  </p>
                </div>
              </div>
            </section>

            {/* Urgent Callout Banner */}
            <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-rose-200">
                  Need Immediate Leak Detection or Leak Repair?
                </div>
                <div className="text-xl sm:text-2xl font-black">
                  24/7 San Diego Priority Hotline
                </div>
                <p className="text-xs text-rose-100 max-w-md">
                  Speak with our central dispatch team at 3431 43rd St for rapid citywide routing to your San Diego home or business.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.telLink}
                className="shrink-0 bg-white hover:bg-slate-100 text-red-600 font-extrabold px-6 py-3.5 rounded-xl text-sm shadow-md transition-transform active:scale-95 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (619) 910-9411</span>
              </a>
            </div>

            {/* Section 2: Warning Signs */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                2. When Does a Homeowner Need Professional Leak Repair?
              </h2>
              <p>
                Across the entire City of San Diego—from historic craftsman homes in Uptown and Mid-City to slab foundations in Clairemont, Mission Valley, and Mira Mesa—thousands of properties feature copper piping laid directly beneath concrete slabs without protective conduit. Over decades, soil conditions, thermal expansion friction, and water chemistry induce pinhole pitting corrosion.
              </p>
              <p>
                Watch for these critical symptoms indicating it is time to arrange professional <strong>leak detection</strong> followed by lasting <strong>leak repair</strong>:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Unexplained Water Bill Spikes</strong>
                    <span className="text-xs text-slate-600">A sudden increase in your City of San Diego Public Utilities water bill without increased usage strongly points to an active underground leak.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Activity className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Warm Spots on Flooring</strong>
                    <span className="text-xs text-slate-600">Unexplained warm patches on tile, linoleum, or engineered wood indicate a hot water slab line breach radiating through concrete.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Spinning Meter Flow Indicator</strong>
                    <span className="text-xs text-slate-600">If your water meter's low-flow dial or digital register turns while all fixtures and appliances are turned off, water is actively leaking.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Flame className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Sulfur or Rotten Egg Odor</strong>
                    <span className="text-xs text-slate-600">Natural gas suppliers inject mercaptan to give natural gas a distinct sulfur smell. Any trace of gas requires immediate evacuation and specialized gas leak repair.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Leak Repair Options */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                3. Common Leak Repair Techniques Explained
              </h2>
              <p>
                Once non-invasive <strong>leak detection</strong> accurately isolates the exact pipe breach, your licensed plumbing specialist will present repair methods tailored to your property’s age, foundation structure, and budget:
              </p>

              <div className="space-y-3">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-blue-600" />
                    <span>Direct Spot Repair (Slab Penetration)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When a pinhole occurs in an isolated, accessible area on relatively young piping, technicians open a small surgical section of the concrete slab, excise the degraded copper pipe segment, and solder or press-fit a high-grade replacement copper or PEX fitting before re-pouring concrete.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-blue-600" />
                    <span>Overhead Pipe Rerouting (Bypass Method)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For older copper systems with multiple pinhole vulnerabilities, opening the slab is often uneconomical. Instead, specialists abandon the leaking pipe under the foundation entirely and route a new, flexible, insulated PEX line through the attic or ceiling joists, completely eliminating future slab leak risks on that branch.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-blue-600" />
                    <span>Gas Line Sectional Replacement &amp; Pressure Certification</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Natural gas leaks require strict CSLB code compliance. Technicians replace damaged black iron or corrugated stainless steel tubing (CSST), rebuild faulty appliance shut-off valves, and perform a formal manometer pressure holding test to secure SDG&amp;E gas restoration approval.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Why Local City Heights Context Matters */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4. Why Prompt Leak Detection &amp; Leak Repair Protects San Diego Home Value
              </h2>
              <p>
                Properties throughout San Diego—from Downtown, North Park, and City Heights to Clairemont, Mira Mesa, and Scripps Ranch—often sit on expansive clay soils or coastal alluvial terraces. When subterranean water leaks soak into this soil, the ground swells unevenly, exerting intense upward pressure against concrete slabs. Over time, this hydraulic heave causes cracked tile, unaligned doorways, and costly foundation movement.
              </p>
              <p>
                Furthermore, San Diego's warm coastal climate creates an ideal incubation environment for black mold (Stachybotrys chartarum) inside damp wall cavities within just 24 to 48 hours of water intrusion. Prompt <strong>leak detection</strong> and prompt <strong>leak repair</strong> save thousands of dollars in water mitigation and mold remediation expenses.
              </p>
            </section>

            {/* Section 5: Step-by-Step Emergency Response */}
            <section className="bg-sky-50 border border-sky-200 text-slate-900 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>What to Do Right Now if You Suspect an Active Leak</span>
              </div>

              <ol className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                  <div>
                    <strong className="text-slate-900 font-semibold">Locate Your Main Water Shut-Off Valve:</strong> Turn the valve clockwise to stop incoming pressurized water flow and halt foundation saturation immediately.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                  <div>
                    <strong className="text-slate-900 font-semibold">For Gas Odors, Evacuate First:</strong> Do not touch light switches, appliances, or garage openers. Vacate the home and dial SDG&amp;E at 1-800-411-7343 or 911 from outside.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                  <div>
                    <strong className="text-slate-900 font-semibold">Call Our 24/7 San Diego Dispatch Center:</strong> Dial <strong className="text-slate-900">(619) 910-9411</strong> to have an on-call licensed leak detection and repair specialist routed directly to your San Diego property.
                  </div>
                </li>
              </ol>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>Call Dispatch: {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="bg-white hover:bg-slate-50 text-blue-700 font-semibold px-5 py-3.5 rounded-xl text-xs border border-blue-200 transition-colors text-center flex items-center justify-center"
                >
                  View Dispatch Location (3431 43rd St)
                </a>
              </div>
            </section>
          </>
        )}

        {/* Social Share & Follow Section at Article End */}
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-slate-400" />
            <span className="font-semibold text-slate-700">Follow &amp; Connect with Us on Social Media:</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium transition-colors border border-blue-200"
              aria-label="Follow Leak Detection Pro on Facebook"
            >
              <Facebook className="w-4 h-4 text-blue-600" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Related Services Links for Internal Linking & SEO */}
        <div className="pt-4 border-t border-slate-200">
          <h3 className="font-bold text-slate-900 text-sm mb-3">
            Related Emergency Services Across San Diego, CA:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="/water-leak/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('water-leak');
              }}
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-left flex items-center justify-between group"
            >
              <div>
                <div className="font-bold text-sm text-slate-900 group-hover:text-blue-600">
                  Water &amp; Slab Leak Detection
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Acoustic ground sensor &amp; thermal FLIR diagnostics
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/gas-leak/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('gas-leak');
              }}
              className="p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all text-left flex items-center justify-between group"
            >
              <div>
                <div className="font-bold text-sm text-slate-900 group-hover:text-amber-700">
                  Emergency Gas Leak Detection
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Combustible gas sniffer &amp; SDG&amp;E tag clearances
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
