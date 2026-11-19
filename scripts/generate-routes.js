import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf-8');

const routes = [
  {
    path: 'water-leak',
    title: 'Slab & Water Leak Detection in City Heights | No Digging',
    desc: 'Suspect a leak under your slab or walls? Acoustic and thermal imaging pinpoints it without tearing up floors. Free estimate: (619) 910-9411.',
    h1: 'Non-Invasive Water Leak Detection &amp; Slab Leak Locating in City Heights, CA',
    h2: 'Precision Acoustic Ground Sensors, FLIR Thermal Imaging &amp; Pressure Testing',
    breadcrumbName: 'Water & Slab Leak Detection',
    serviceSchema: {
      "@type": "Service",
      "@id": "https://www.cityheightsleakdetectionpro.com/water-leak/#service",
      "name": "Water & Slab Leak Detection City Heights",
      "serviceType": "Water and Slab Leak Locating",
      "provider": {
        "@id": "https://www.cityheightsleakdetectionpro.com/#organization"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "City Heights, San Diego CA 92105"
      },
      "description": "Suspect a leak under your slab or walls? Acoustic and thermal imaging pinpoints it without tearing up floors. Free estimate: (619) 910-9411.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "description": "Free phone dispatch quote & upfront flat-rate diagnostic estimates",
        "availability": "https://schema.org/InStock"
      }
    },
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        Unexplained spikes on your San Diego water bill? Damp drywall, hissing sounds when fixtures are off, or warm spots on your floor? <strong>Leak Detection Pro</strong> connects City Heights (92105) homeowners and property managers with CSLB-licensed, insured plumbing contractors equipped with electro-acoustic ground microphones, FLIR thermal imaging cameras, and helium tracer gas kits.
      </p>
      <p style="margin-bottom: 12px;">
        Many residences in City Heights, Teralta, Castle, and Azalea Park built between 1940 and 1980 have copper pipes routed beneath concrete slab foundations. Soil shifting and mineral scale cause microscopic pinhole leaks that damage subfloors and foundations if left untreated.
      </p>
      <h3 style="font-size: 17px; color: #0f172a; margin: 16px 0 8px; font-weight: 700;">Non-Invasive Detection Methods Used</h3>
      <ul style="margin: 0 0 16px 20px; line-height: 1.75;">
        <li><strong>Electro-Acoustic Ground Probes:</strong> Pinpoints pressurized sub-slab copper pinhole leaks within inches without jackhammering.</li>
        <li><strong>FLIR Infrared Thermal Cameras:</strong> Maps hot-water lines and concealed moisture signatures behind drywall, ceilings, and tile.</li>
        <li><strong>Static Pressure Decay &amp; Meter Isolation:</strong> Separates hot, cold, and outdoor irrigation supply zones to isolate hidden loss.</li>
        <li><strong>Helium / Hydrogen Tracer Gas:</strong> Detects ultra-quiet underground yard and pool supply line breaks.</li>
      </ul>
      <p style="margin-bottom: 16px;">
        Explore our <a href="/hidden-water-leak-signs-city-heights/" style="color: #1d4ed8; text-decoration: underline;">Hidden Water Leak Warning Signs Guide</a> or browse all guides in our <a href="/blog/" style="color: #1d4ed8; text-decoration: underline;">City Heights Diagnostic Blog</a>.
      </p>
      <div style="margin-top: 16px;">
        <a href="tel:+16199109411" style="background: #2563eb; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
          📞 Call (619) 910-9411 for Water Leak Dispatch
        </a>
      </div>
    `
  },
  {
    path: 'gas-leak',
    title: 'Gas Leak Detection City Heights, CA | 24/7 Emergency',
    desc: 'Smell gas? Leave the home and call 911 or SDG&E first. Then call us for licensed gas leak testing in City Heights. (619) 910-9411.',
    h1: 'Emergency Gas Leak Detection &amp; Line Safety in City Heights, CA',
    h2: '24/7 Combustible Gas Sniffing, Manometer Decay Testing &amp; SDG&amp;E Red-Tag Clearance',
    breadcrumbName: 'Emergency Gas Leak Detection',
    serviceSchema: {
      "@type": "Service",
      "@id": "https://www.cityheightsleakdetectionpro.com/gas-leak/#service",
      "name": "Emergency Gas Leak Detection City Heights",
      "serviceType": "Emergency Combustible Gas Leak Locating",
      "provider": {
        "@id": "https://www.cityheightsleakdetectionpro.com/#organization"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "City Heights, San Diego CA 92105"
      },
      "description": "Smell gas? Leave the home and call 911 or SDG&E first. Then call us for licensed gas leak testing in City Heights. (619) 910-9411.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "description": "24/7 emergency dispatch coordination & upfront inspection quote",
        "availability": "https://schema.org/InStock"
      }
    },
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        Smelling rotten eggs (mercaptan sulfur odor), hearing hissing near gas pipes, or dealing with an SDG&amp;E meter lock-out in City Heights? Natural gas leaks are immediate life-safety hazards. <strong>If you smell strong gas indoors, evacuate everyone immediately, avoid light switches, and call SDG&amp;E (1-800-411-7343) or 911 from outside.</strong>
      </p>
      <p style="margin-bottom: 12px;">
        Once emergency responders secure the structure, <strong>Leak Detection Pro</strong> (3431 43rd St, San Diego CA 92105) dispatches CSLB-licensed gas plumbing contractors across 92105 and nearby San Diego neighborhoods for certified testing and permanent repairs.
      </p>
      <h3 style="font-size: 17px; color: #0f172a; margin: 16px 0 8px; font-weight: 700;">Gas Testing &amp; Restoration Services</h3>
      <ul style="margin: 0 0 16px 20px; line-height: 1.75;">
        <li><strong>Electronic PPM Gas Sniffers:</strong> Pinpoints trace methane and propane vapors behind walls, appliances, and threaded joints.</li>
        <li><strong>Digital Manometer Pressure Decay Tests:</strong> Certifies gas line pressure integrity for San Diego city inspections.</li>
        <li><strong>SDG&amp;E Red-Tag Clearance:</strong> Repairs leaking black iron pipes, appliance flex lines, and seismic shut-off valves so gas service can be restored safely.</li>
      </ul>
      <div style="margin-top: 16px;">
        <a href="tel:+16199109411" style="background: #dc2626; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
          📞 Emergency Gas Dispatch: (619) 910-9411
        </a>
      </div>
    `
  },
  {
    path: 'about',
    title: 'About Leak Detection Pro | City Heights Plumber Network',
    desc: 'We connect City Heights homeowners with pre-screened, CSLB-licensed plumbers for leak detection. See how it works. Call (619) 910-9411.',
    h1: 'About Leak Detection Pro — City Heights, San Diego',
    h2: 'Connecting Property Owners with Pre-Screened Local Leak Specialists',
    breadcrumbName: 'About Us',
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        Operating from <strong>3431 43rd St, San Diego CA 92105</strong>, Leak Detection Pro serves the City Heights community by maintaining a vetted contractor network of California State License Board (CSLB) licensed plumbing and leak detection specialists.
      </p>
      <p style="margin-bottom: 12px;">
        Every specialist in our network carries active general liability coverage, workers' compensation insurance, and non-invasive acoustic, FLIR thermal, and electronic gas sniffing instruments so City Heights homeowners get accurate diagnostics without destructive exploratory digging.
      </p>
      <p style="margin-bottom: 16px;">
        Explore our <a href="/water-leak/" style="color: #1d4ed8; text-decoration: underline;">Water Leak Services</a>, <a href="/gas-leak/" style="color: #b45309; text-decoration: underline;">Gas Leak Testing</a>, or <a href="/blog/" style="color: #1d4ed8; text-decoration: underline;">Leak Detection Blog &amp; Guides</a>.
      </p>
    `
  },
  {
    path: 'contact',
    title: 'Contact Leak Detection Pro | City Heights, CA 92105',
    desc: 'Request a leak detection estimate in City Heights. Call (619) 910-9411 anytime or reach our dispatch desk at 3431 43rd St, San Diego, CA 92105.',
    h1: 'Contact &amp; 24/7 Dispatch — City Heights, San Diego',
    h2: 'Direct Phone Line &amp; Local Dispatch Office',
    breadcrumbName: 'Contact & Dispatch',
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        <strong>Address:</strong> 3431 43rd St, San Diego, CA 92105<br/>
        <strong>Emergency Phone:</strong> <a href="tel:+16199109411" style="color: #1d4ed8;">(619) 910-9411</a><br/>
        <strong>Operating Hours:</strong> 24 Hours a Day, 7 Days a Week, 365 Days a Year
      </p>
      <p style="margin-bottom: 12px;">
        Need immediate contractor dispatch for an active slab leak, hidden ceiling drip, or gas odor? Call our local dispatch line for rapid priority response throughout 92105, 92104, 92115, 92116, and surrounding San Diego neighborhoods.
      </p>
    `
  },
  {
    path: 'blog',
    title: 'Leak Detection Blog & Guides | City Heights, San Diego',
    desc: 'Explore City Heights leak detection guides covering hidden water leak signs, slab leak locating, acoustic testing, and pipe repair methods.',
    h1: 'City Heights Leak Detection Blog &amp; Homeowner Field Guides',
    h2: 'Featured Leak Detection &amp; Plumbing Diagnostic Articles',
    breadcrumbName: 'Blog & Knowledge Center',
    blogSchema: {
      "@type": "CollectionPage",
      "@id": "https://www.cityheightsleakdetectionpro.com/blog/#collection",
      "name": "City Heights Leak Detection Blog & Homeowner Field Guides",
      "description": "Explore City Heights leak detection guides covering hidden water leak signs, slab leak locating, acoustic testing, and pipe repair methods.",
      "url": "https://www.cityheightsleakdetectionpro.com/blog/"
    },
    bodySnippet: `
      <p style="margin-bottom: 14px;">
        Welcome to the <strong>Leak Detection Pro</strong> City Heights Knowledge Center. Read practical local guides written for San Diego homeowners covering early leak warning signs, ten-minute meter checks, non-invasive slab leak locating, and targeted repair methods.
      </p>
      <h3 style="font-size: 17px; color: #0f172a; margin: 16px 0 8px; font-weight: 700;">Published City Heights Leak Detection Guides</h3>
      <ul style="margin: 0 0 16px 20px; line-height: 1.8;">
        <li><a href="/hidden-water-leak-signs-city-heights/" style="color: #1d4ed8; text-decoration: underline;"><strong>How to Spot a Hidden Water Leak in City Heights Homes</strong></a> &mdash; Water bill checks, warning signs, and the ten-minute meter test.</li>
        <li><a href="/leak-detection-city-heights-san-diego/" style="color: #1d4ed8; text-decoration: underline;"><strong>Leak Detection in City Heights, San Diego: A Friendly Homeowner’s Guide</strong></a> &mdash; Signs of water and gas leaks, non-invasive locating, and hiring licensed local pros.</li>
        <li><a href="/underground-slab-leak-detection/" style="color: #1d4ed8; text-decoration: underline;"><strong>Underground Water &amp; Slab Leak Detection Deep Dive</strong></a> &mdash; Acoustic ground microphones, FLIR thermography, and helium tracer testing.</li>
        <li><a href="/leak-detection-and-repair-guide/" style="color: #1d4ed8; text-decoration: underline;"><strong>Complete Guide to Leak Detection &amp; Leak Repair in City Heights</strong></a> &mdash; Surgical slab spot repairs and overhead PEX reroutes.</li>
      </ul>
      <div style="margin-top: 16px;">
        <a href="tel:+16199109411" style="background: #2563eb; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
          📞 Speak With a Leak Specialist: (619) 910-9411
        </a>
      </div>
    `
  },
  {
    path: 'leak-detection-city-heights-san-diego',
    isArticle: true,
    title: 'Leak Detection in City Heights, San Diego | Local Guide',
    desc: 'Learn the signs of hidden leaks, how pros find them, and what pricing depends on. Call City Heights Leak Detection Pro at (619) 910-9411.',
    h1: 'Leak Detection in City Heights, San Diego: A Friendly Homeowner’s Guide',
    h2: 'Warning Signs, Non-Invasive Methods &amp; Local Pricing Factors',
    breadcrumbName: 'City Heights Homeowner Guide',
    blogSchema: {
      "@type": "BlogPosting",
      "@id": "https://www.cityheightsleakdetectionpro.com/leak-detection-city-heights-san-diego/#article",
      "headline": "Leak Detection in City Heights, San Diego: A Friendly Homeowner’s Guide",
      "description": "Learn the signs of hidden leaks, how pros find them, and what pricing depends on. Call City Heights Leak Detection Pro at (619) 910-9411.",
      "image": "https://www.cityheightsleakdetectionpro.com/og-image.webp",
      "keywords": "leak detection in City Heights San Diego, water leak detection university heights san diego, slab leak detection service university heights san diego, gas leak detection san diego, how much does leak detection cost, plumbers city heights ca",
      "datePublished": "2026-11-05T08:00:00-08:00",
      "dateModified": "2026-11-15T09:00:00-08:00",
      "author": {
        "@type": "Organization",
        "name": "City Heights Leak Detection Pro Advisory Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Leak Detection Pro",
        "url": "https://www.cityheightsleakdetectionpro.com/"
      },
      "mainEntityOfPage": "https://www.cityheightsleakdetectionpro.com/leak-detection-city-heights-san-diego/"
    },
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        A tiny drip behind a wall can quietly waste thousands of gallons of water, pad your bills, and invite mold long before a stain appears. For City Heights homeowners—many living in older bungalows and mid-century homes along University Ave, Fairmount Ave, and 43rd St—early <strong>leak detection in City Heights, San Diego</strong> prevents gradual pipe corrosion and shifting clay soil from turning into costly structural repairs.
      </p>
      <h3 style="font-size: 17px; color: #0f172a; margin: 16px 0 8px; font-weight: 700;">Common Signs of a Hidden Water or Gas Leak</h3>
      <ul style="margin: 0 0 16px 20px; line-height: 1.75;">
        <li><strong>Water Leaks:</strong> Unexplained water bill climbs, damp drywall, musty odors, sound of running water when fixtures are off, or warm patches on tile and hardwood floors.</li>
        <li><strong>Gas Leaks:</strong> Rotten-egg odor near appliances, hissing sounds near pipes, or dead grass patches above buried lines. <em>If you smell gas, evacuate immediately and call 911 or SDG&amp;E (1-800-411-7343).</em></li>
      </ul>
      <h3 style="font-size: 17px; color: #0f172a; margin: 16px 0 8px; font-weight: 700;">How Professionals Find Leaks Non-Invasively</h3>
      <p style="margin-bottom: 12px;">
        Specialists use acoustic ground listening microphones, FLIR thermal imaging cameras, moisture probes, and sensitive electronic gas sniffers to pinpoint slab, wall, and yard pipe leaks without breaking open walls or floors.
      </p>
      <h3 style="font-size: 17px; color: #0f172a; margin: 16px 0 8px; font-weight: 700;">What Affects Leak Detection Cost?</h3>
      <p style="margin-bottom: 14px;">
        Basic fixture checks typically cost $125&ndash;$225, concealed wall leaks $175&ndash;$325, sub-slab locating $250&ndash;$450, and full natural gas pressure decay surveys $195&ndash;$350. Always request a written estimate and insurance-ready diagnostic report before work begins.
      </p>
      <div style="margin-top: 16px;">
        <a href="tel:+16199109411" style="background: #2563eb; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
          📞 Call (619) 910-9411 for Fast Local Help
        </a>
      </div>
    `
  },
  {
    path: 'underground-slab-leak-detection',
    isArticle: true,
    title: 'Underground Water & Slab Leak Detection | San Diego CA',
    desc: 'How underground water & slab leak detection pinpoints hidden pipe leaks in San Diego without jackhammers. Non-invasive help: (619) 910-9411.',
    h1: 'Underground Water &amp; Slab Leak Detection: How Plumbers Pinpoint Hidden Pipe Leaks Without Jackhammers',
    h2: 'Acoustic Ground Microphones, FLIR Thermography &amp; Helium Tracer Testing',
    breadcrumbName: 'Underground & Slab Deep Dive',
    blogSchema: {
      "@type": "BlogPosting",
      "@id": "https://www.cityheightsleakdetectionpro.com/underground-slab-leak-detection/#article",
      "headline": "Underground Water & Slab Leak Detection: How Plumbers Pinpoint Hidden Pipe Leaks Without Jackhammers",
      "description": "How underground water & slab leak detection pinpoints hidden pipe leaks in San Diego without jackhammers. Non-invasive help: (619) 910-9411.",
      "image": "https://www.cityheightsleakdetectionpro.com/og-image.webp",
      "keywords": "water leak detection, slab leak detection, underground water leak detection, acoustic leak detection, thermal imaging leak detection, leak detection San Diego, leak detection City Heights 92105",
      "datePublished": "2026-10-12T08:00:00-07:00",
      "dateModified": "2026-11-15T09:00:00-08:00",
      "author": {
        "@type": "Organization",
        "name": "Master Diagnostic Plumbing Advisory Group"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Leak Detection Pro",
        "url": "https://www.cityheightsleakdetectionpro.com/"
      },
      "mainEntityOfPage": "https://www.cityheightsleakdetectionpro.com/underground-slab-leak-detection/"
    },
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        When pressurized copper or PEX lines fracture beneath a concrete slab foundation or four feet underground along a yard supply main, water tracks along gravel beds before surfacing feet away. Modern <strong>underground water leak detection</strong> eliminates exploratory trenching and jackhammering.
      </p>
      <h3 style="font-size: 17px; color: #0f172a; margin: 16px 0 8px; font-weight: 700;">4 Non-Invasive Subsurface Technologies</h3>
      <ul style="margin: 0 0 16px 20px; line-height: 1.75;">
        <li><strong>Piezo-Acoustic Ground Listening:</strong> Amplifies the high-frequency sound signature of pressurized water escaping a sub-slab pinhole.</li>
        <li><strong>FLIR Infrared Thermal Imaging:</strong> Reveals hot water slab runs and damp subfloor plumes through concrete and tile.</li>
        <li><strong>Inert Tracer Gas (Nitrogen/Helium):</strong> Escapes microscopic cracks in deep yard lines and is traced from above ground.</li>
        <li><strong>Static Line Pressure &amp; Pipe Tracing:</strong> Maps exact copper conduit paths prior to targeted spot repair or overhead PEX rerouting.</li>
      </ul>
      <div style="margin-top: 16px;">
        <a href="tel:+16199109411" style="background: #2563eb; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
          📞 Book Non-Invasive Slab Detection: (619) 910-9411
        </a>
      </div>
    `
  },
  {
    path: 'leak-detection-and-repair-guide',
    isArticle: true,
    title: 'Leak Detection & Repair Guide | City Heights, San Diego',
    desc: 'Complete leak detection & repair guide for City Heights (92105). Learn how acoustic sensors, thermal imaging & slab repairs work. Call (619) 910-9411.',
    h1: 'The Complete Guide to Leak Detection and Leak Repair in City Heights, San Diego',
    h2: 'From Acoustic Pinpointing to Surgical Slab Spot Repairs &amp; PEX Reroutes',
    breadcrumbName: 'Leak Detection & Repair Guide',
    blogSchema: {
      "@type": "BlogPosting",
      "@id": "https://www.cityheightsleakdetectionpro.com/leak-detection-and-repair-guide/#article",
      "headline": "The Complete Guide to Leak Detection and Leak Repair in City Heights, San Diego",
      "description": "Complete leak detection & repair guide for City Heights (92105). Learn how acoustic sensors, thermal imaging & slab repairs work. Call (619) 910-9411.",
      "image": "https://www.cityheightsleakdetectionpro.com/og-image.webp",
      "keywords": "leak detection, leak repair, City Heights leak detection, non-invasive leak detection, slab leak repair San Diego",
      "datePublished": "2026-10-01T08:00:00-07:00",
      "dateModified": "2026-11-15T09:00:00-08:00",
      "author": {
        "@type": "Organization",
        "name": "City Heights Leak Detection Editorial Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Leak Detection Pro",
        "url": "https://www.cityheightsleakdetectionpro.com/"
      },
      "mainEntityOfPage": "https://www.cityheightsleakdetectionpro.com/leak-detection-and-repair-guide/"
    },
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        Whether facing a silent slab leak beneath living room flooring or an aging main water supply pipe in City Heights (92105), combining pinpoint non-invasive diagnostics with lasting plumbing repair protects your foundation and lowers utility bills.
      </p>
      <h3 style="font-size: 17px; color: #0f172a; margin: 16px 0 8px; font-weight: 700;">Diagnostic &amp; Repair Options</h3>
      <ul style="margin: 0 0 16px 20px; line-height: 1.75;">
        <li><strong>Surgical Spot Repair:</strong> Opens only a small targeted access point directly above the located pipe break.</li>
        <li><strong>Overhead PEX Reroute:</strong> Bypasses corroded under-slab copper completely by routing Type-A PEX cleanly through attics and walls.</li>
        <li><strong>Gas Safety &amp; Pressure Certification:</strong> Digital manometer leak testing and utility clearance for older San Diego gas lines.</li>
      </ul>
      <div style="margin-top: 16px;">
        <a href="tel:+16199109411" style="background: #2563eb; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
          📞 Dispatch Local Specialist: (619) 910-9411
        </a>
      </div>
    `
  },
  {
    path: 'hidden-water-leak-signs-city-heights',
    isArticle: true,
    title: 'How to Spot a Hidden Water Leak in City Heights Homes',
    desc: 'Higher water bill, damp smell, or a sound in the walls? Learn how City Heights homeowners can spot a hidden leak early. Call (619) 910-9411.',
    h1: 'Is Your City Heights Home Hiding a Water Leak?',
    h2: 'Early Warning Signs, 10-Minute Meter Check &amp; What to Do Next',
    breadcrumbName: 'Hidden Water Leak Signs',
    blogSchema: {
      "@type": "BlogPosting",
      "@id": "https://www.cityheightsleakdetectionpro.com/hidden-water-leak-signs-city-heights/#article",
      "headline": "Is Your City Heights Home Hiding a Water Leak?",
      "description": "Higher water bill, damp smell, or a sound in the walls? Learn how City Heights homeowners can spot a hidden leak early. Call (619) 910-9411.",
      "image": "https://www.cityheightsleakdetectionpro.com/og-image.webp",
      "keywords": "hidden water leak signs, water leak City Heights, how to spot a hidden water leak, water meter leak check, City Heights leak detection",
      "datePublished": "2026-11-18T08:00:00-08:00",
      "dateModified": "2026-11-18T08:00:00-08:00",
      "author": {
        "@type": "Organization",
        "name": "City Heights Leak Detection Pro Editorial Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Leak Detection Pro",
        "url": "https://www.cityheightsleakdetectionpro.com/"
      },
      "mainEntityOfPage": "https://www.cityheightsleakdetectionpro.com/hidden-water-leak-signs-city-heights/"
    },
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        Most leaks don’t announce themselves. There’s no flood and no dramatic burst pipe, just a small change somewhere that’s easy to shrug off. For City Heights homeowners, learning to notice those small changes is one of the cheapest ways to protect a house.
      </p>
      <h3 style="font-size: 17px; color: #0f172a; margin: 16px 0 8px; font-weight: 700;">Start With Your Water Bill</h3>
      <p style="margin-bottom: 12px;">
        The bill is often the first clue. If usage creeps up month after month and nothing in the household has changed, water may be escaping somewhere. Pull out the last few statements and compare them. A steady upward trend deserves a closer look.
      </p>
      <h3 style="font-size: 17px; color: #0f172a; margin: 16px 0 8px; font-weight: 700;">Signs Your House Is Trying to Tell You Something</h3>
      <ul style="margin: 0 0 14px 20px; line-height: 1.75;">
        <li>Musty smells in a closet, cabinet, or corner room</li>
        <li>Paint that bubbles, peels, or looks stained</li>
        <li>Floors that feel warm, soft, or slightly raised</li>
        <li>The faint sound of water running when nothing is on</li>
        <li>Weak water pressure that can’t be explained</li>
      </ul>
      <h3 style="font-size: 17px; color: #0f172a; margin: 16px 0 8px; font-weight: 700;">Try a Ten-Minute Meter Check</h3>
      <p style="margin-bottom: 12px;">
        Turn off every faucet and appliance that uses water, note your water meter reading or small dial, wait ten minutes without using any water, and check again. If the numbers or dial moved, water is flowing somewhere it shouldn’t.
      </p>
      <h3 style="font-size: 17px; color: #0f172a; margin: 16px 0 8px; font-weight: 700;">When to Call a Professional &amp; What to Do While You Wait</h3>
      <p style="margin-bottom: 14px;">
        If the meter keeps moving or older City Heights pipes show signs of corrosion, specialists use listening equipment, thermal imaging, and moisture readings to keep repairs small and targeted. Shut off the main water valve if needed, photograph damp stains, avoid opening walls yourself, and keep notes for your insurance claim.
      </p>
      <div style="margin-top: 16px;">
        <a href="tel:+16199109411" style="background: #2563eb; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
          📞 Suspect a Leak? Call (619) 910-9411
        </a>
      </div>
    `
  },
  {
    path: 'privacy',
    title: 'Privacy Policy | Leak Detection Pro',
    desc: 'How Leak Detection Pro collects, uses and protects your personal information, including your rights under the CCPA.',
    h1: 'Privacy Policy &amp; Consumer Protection',
    h2: 'CCPA &amp; California Consumer Privacy Compliance',
    breadcrumbName: 'Privacy Policy',
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        Leak Detection Pro respects your privacy. This policy explains how we collect, use, and protect your information when you request leak detection contractor services at 3431 43rd St, San Diego CA 92105.
      </p>
    `
  },
  {
    path: 'disclaimer',
    title: 'Legal Disclaimer & Licensing | Leak Detection Pro',
    desc: 'Leak Detection Pro connects homeowners with independent CSLB-licensed plumbers. Read our qualified contractor network licensing & service terms.',
    h1: 'Licensing &amp; Service Network Disclaimers',
    h2: 'Independent Contractor Network Notice',
    breadcrumbName: 'Legal Disclaimers',
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        Leak Detection Pro connects consumers with independent California State License Board (CSLB) licensed plumbing contractors.
      </p>
    `
  },
  {
    path: 'sitemap',
    title: 'Sitemap | Leak Detection Pro City Heights',
    desc: 'Browse every Leak Detection Pro page: water leak detection, gas leak detection, cost guides and contact details for City Heights, San Diego.',
    h1: 'Website Sitemap &amp; Verified URL Index',
    h2: 'Sitemaps.org Compliant XML &amp; Navigation Links',
    breadcrumbName: 'Sitemap',
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        Browse the complete directory of services, diagnostic guides, and emergency dispatch links for Leak Detection Pro.
      </p>
      <ul style="margin: 12px 0 16px 20px; line-height: 1.8;">
        <li><a href="/" style="color: #1d4ed8;">Home (City Heights, San Diego)</a></li>
        <li><a href="/water-leak/" style="color: #1d4ed8;">Water &amp; Slab Leak Locating</a></li>
        <li><a href="/gas-leak/" style="color: #1d4ed8;">Emergency Gas Leak Testing</a></li>
        <li><a href="/blog/" style="color: #1d4ed8;">Leak Detection Blog &amp; Guides</a></li>
        <li><a href="/leak-detection-city-heights-san-diego/" style="color: #1d4ed8;">City Heights Homeowner’s Guide</a></li>
        <li><a href="/hidden-water-leak-signs-city-heights/" style="color: #1d4ed8;">How to Spot a Hidden Water Leak</a></li>
        <li><a href="/underground-slab-leak-detection/" style="color: #1d4ed8;">Underground &amp; Slab Leak Deep Dive</a></li>
        <li><a href="/leak-detection-and-repair-guide/" style="color: #1d4ed8;">Leak Detection &amp; Repair Guide</a></li>
        <li><a href="/about/" style="color: #1d4ed8;">About Our Contractor Network</a></li>
        <li><a href="/contact/" style="color: #1d4ed8;">Contact &amp; 24/7 Dispatch</a></li>
        <li><a href="/privacy/" style="color: #1d4ed8;">Privacy Policy</a></li>
        <li><a href="/disclaimer/" style="color: #1d4ed8;">Legal Disclaimers</a></li>
      </ul>
      <div style="margin-top: 16px;">
        <a href="/sitemap.xml" target="_blank" style="background: #2563eb; color: white; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
          Open Raw XML Sitemap &rarr;
        </a>
      </div>
    `
  }
];

routes.forEach((route) => {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const pageCanonical = `https://www.cityheightsleakdetectionpro.com/${route.path}/`;

  let pageHtml = baseHtml;

  // Replace Title
  pageHtml = pageHtml.replace(
    /<title>.*?<\/title>/i,
    `<title>${route.title}</title>`
  );

  // Replace Meta Description
  pageHtml = pageHtml.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${route.desc}" />`
  );

  // Replace Canonical Link (strictly with trailing slash)
  pageHtml = pageHtml.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${pageCanonical}" />`
  );

  // Replace hreflang links so they strictly match pageCanonical (fixes self-referential hreflang conflict!)
  pageHtml = pageHtml.replace(
    /<link\s+rel="alternate"\s+hreflang="en-US"\s+href=".*?"\s*\/?>/i,
    `<link rel="alternate" hreflang="en-US" href="${pageCanonical}" />`
  );
  pageHtml = pageHtml.replace(
    /<link\s+rel="alternate"\s+hreflang="x-default"\s+href=".*?"\s*\/?>/i,
    `<link rel="alternate" hreflang="x-default" href="${pageCanonical}" />`
  );

  // Replace Open Graph Type, URL, Title & Desc
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:type"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:type" content="${route.isArticle ? 'article' : 'website'}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${pageCanonical}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${route.desc}" />`
  );

  // Replace Twitter Title & Desc
  pageHtml = pageHtml.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${route.desc}" />`
  );

  // Generate specialized BreadcrumbList, Service, or BlogPosting Schema for this subpage
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${pageCanonical}#breadcrumbs`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.cityheightsleakdetectionpro.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": route.breadcrumbName,
        "item": pageCanonical
      }
    ]
  };

  // Parse and cleanly rebuild Schema.org JSON-LD graph with valid JSON
  const schemaRegex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i;
  const schemaMatch = baseHtml.match(schemaRegex);
  if (schemaMatch) {
    try {
      const baseJson = JSON.parse(schemaMatch[1]);
      const baseGraph = baseJson['@graph'] || [];
      const orgSchema = baseGraph.find((item) => {
        const t = item['@type'];
        return Array.isArray(t) ? t.includes('LocalBusiness') : t === 'LocalBusiness';
      });
      const siteSchema = baseGraph.find((item) => item['@type'] === 'WebSite');

      const pageGraph = [];
      if (siteSchema) {
        pageGraph.push(siteSchema);
      }
      if (orgSchema) {
        pageGraph.push(orgSchema);
      }
      pageGraph.push(breadcrumbSchema);

      if (route.serviceSchema) {
        pageGraph.push(route.serviceSchema);
      }

      if (route.blogSchema) {
        pageGraph.push(route.blogSchema);
      }

      const newSchemaJson = {
        '@context': 'https://schema.org',
        '@graph': pageGraph
      };

      pageHtml = pageHtml.replace(
        schemaRegex,
        `<script type="application/ld+json">\n${JSON.stringify(newSchemaJson, null, 2)}\n    </script>`
      );
    } catch (e) {
      console.error('Error generating structured data for route ' + route.path + ':', e.message);
    }
  }

  // Inject Pre-rendered semantic SEO fallback inside #root with full semantic navigation
  const semanticContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; min-height: 100vh; background: #f8fafc; color: #0f172a;">
      <header style="padding: 20px 24px; background: #ffffff; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; flex-wrap: wrap; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <a href="/" style="text-decoration: none; display: flex; align-items: center; gap: 12px; color: inherit;">
            <div style="width: 40px; height: 40px; border-radius: 12px; background: linear-gradient(135deg, #2563eb, #4f46e5); color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 20px;">
              💧
            </div>
            <div>
              <div style="font-size: 20px; font-weight: 800; letter-spacing: -0.5px; color: #0f172a;">
                Leak Detection <span style="color: #2563eb;">Pro</span>
              </div>
              <div style="font-size: 12px; color: #475569;">City Heights, San Diego CA &bull; 92105</div>
            </div>
          </a>
        </div>
        <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
          <nav style="display: flex; gap: 14px; font-size: 14px; flex-wrap: wrap;">
            <a href="/" style="color: #334155; text-decoration: none;">Home</a>
            <a href="/water-leak/" style="color: #334155; text-decoration: none;">Water Leaks</a>
            <a href="/gas-leak/" style="color: #334155; text-decoration: none;">Gas Leaks</a>
            <a href="/blog/" style="color: #334155; text-decoration: none;">Blog</a>
            <a href="/about/" style="color: #334155; text-decoration: none;">About</a>
            <a href="/contact/" style="color: #334155; text-decoration: none;">Contact</a>
          </nav>
          <a href="tel:+16199109411" style="background: #dc2626; color: white; padding: 10px 18px; border-radius: 10px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-flex; align-items: center; gap: 8px;">
            📞 (619) 910-9411
          </a>
        </div>
      </header>

      <main style="max-width: 900px; margin: 40px auto; padding: 0 24px;">
        <nav aria-label="Breadcrumb" style="font-size: 13px; color: #64748b; margin-bottom: 20px;">
          <a href="/" style="color: #1d4ed8; font-weight: 600; text-decoration: none;">Home</a> &rsaquo; <span style="color: #0f172a;">${route.breadcrumbName}</span>
        </nav>
        <h1 style="font-size: 32px; font-weight: 800; margin-bottom: 16px; line-height: 1.25; color: #0f172a;">
          ${route.h1}
        </h1>
        <p style="font-size: 18px; color: #475569; line-height: 1.6; margin-bottom: 24px;">
          ${route.desc}
        </p>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px; line-height: 1.7; color: #334155; font-size: 15px;">
          <h2 style="font-size: 20px; color: #0f172a; margin-bottom: 12px; font-weight: 700;">
            ${route.h2}
          </h2>
          ${route.bodySnippet}
        </div>
      </main>

      <footer style="margin-top: 60px; padding: 32px 24px; background: #f1f5f9; border-top: 1px solid #e2e8f0; max-width: 1200px; margin-left: auto; margin-right: auto; font-size: 13px; color: #475569;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 16px;">
          <div>
            <strong style="color: #0f172a;">Leak Detection Pro</strong> &bull; 3431 43rd St, City Heights, San Diego, CA 92105 &bull; <a href="tel:+16199109411" style="color: #1d4ed8; font-weight: 700; text-decoration: none;">(619) 910-9411</a> &bull; <a href="https://www.facebook.com/profile.php?id=61595322680001" target="_blank" rel="noopener noreferrer" style="color: #1d4ed8; font-weight: 600; text-decoration: none;">Facebook</a>
          </div>
          <nav style="display: flex; gap: 16px; flex-wrap: wrap;">
            <a href="/" style="color: #475569; text-decoration: none;">Home</a>
            <a href="/water-leak/" style="color: #475569; text-decoration: none;">Water Leaks</a>
            <a href="/gas-leak/" style="color: #475569; text-decoration: none;">Gas Leaks</a>
            <a href="/blog/" style="color: #475569; text-decoration: none;">Blog</a>
            <a href="/leak-detection-city-heights-san-diego/" style="color: #475569; text-decoration: none;">Local Guide</a>
            <a href="/hidden-water-leak-signs-city-heights/" style="color: #475569; text-decoration: none;">Leak Signs</a>
            <a href="/underground-slab-leak-detection/" style="color: #475569; text-decoration: none;">Slab Guide</a>
            <a href="/leak-detection-and-repair-guide/" style="color: #475569; text-decoration: none;">Repair Guide</a>
            <a href="/about/" style="color: #475569; text-decoration: none;">About</a>
            <a href="/contact/" style="color: #475569; text-decoration: none;">Contact</a>
            <a href="/privacy/" style="color: #475569; text-decoration: none;">Privacy</a>
            <a href="/disclaimer/" style="color: #475569; text-decoration: none;">Disclaimer</a>
            <a href="/sitemap/" style="color: #475569; text-decoration: none;">Sitemap</a>
          </nav>
        </div>
        <p style="font-size: 11px; color: #64748b; margin: 0;">
          &copy; 2026 Leak Detection Pro. Non-invasive water &amp; gas leak detection qualified contractor network serving City Heights, San Diego (92105).
        </p>
      </footer>
    </div>
  `;

  // Ensure all script tags explicitly have the defer attribute
  pageHtml = pageHtml.replace(
    /<script\s+type="module"(\s+crossorigin)?\s+src=/gi,
    '<script type="module"$1 defer src='
  );

  // Replace content of <div id="root">...</div> cleanly before </body> or <script>
  pageHtml = pageHtml.replace(
    /<div id="root">[\s\S]*?<\/div>\s*(?=<\/body>|<script)/i,
    `<div id="root">\n${semanticContent}\n    </div>\n    `
  );

  const targetFile = path.join(routeDir, 'index.html');
  fs.writeFileSync(targetFile, pageHtml, 'utf-8');
  console.log(`Generated route: ${route.path} -> ${targetFile}`);
});

// Also ensure base dist/index.html script tags explicitly include defer
let updatedIndexHtml = fs.readFileSync(indexPath, 'utf-8');
updatedIndexHtml = updatedIndexHtml.replace(
  /<script\s+type="module"(\s+crossorigin)?\s+src=/gi,
  '<script type="module"$1 defer src='
);
fs.writeFileSync(indexPath, updatedIndexHtml, 'utf-8');

console.log('All static routes generated successfully.');
