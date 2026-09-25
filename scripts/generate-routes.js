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
    title: 'Water & Slab Leak Detection City Heights, San Diego | 24/7 Dispatch',
    desc: 'Non-invasive underground water leak detection and slab leak locating in City Heights (92105). Thermal FLIR imaging and acoustic pipe testing. Call (619) 910-9411.',
    h1: 'Water &amp; Slab Leak Detection Services in City Heights, San Diego',
    h2: 'Precision Acoustic Locating &amp; Thermal Imaging for Hidden Leaks',
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        Unexplained spikes on your San Diego water bill? Damp drywall or warm spots on your floor? <strong>Leak Detection Pro</strong> connects City Heights (92105) homeowners and businesses with licensed, insured leak detection contractors equipped with electro-acoustic ground sensors and thermal FLIR imaging cameras.
      </p>
      <p style="margin-bottom: 12px;">
        Located at <strong>3431 43rd St, San Diego CA 92105</strong>, matched specialists pinpoint copper pipe pinholes under concrete foundations without destructive jackhammering.
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
    title: 'Emergency Gas Leak Detection City Heights, San Diego CA | 24/7 Hotline',
    desc: 'Emergency natural gas odor detection, line pressure decay testing, and SDG&E coordination in City Heights, San Diego (92105). Rapid 24/7 certified dispatch.',
    h1: 'Emergency Gas Leak Detection in City Heights, San Diego',
    h2: '24/7 Combustible Gas Sniffing &amp; Line Pressure Decay Testing',
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        Smelling rotten eggs or experiencing natural gas odor in City Heights? Natural gas leaks require immediate certified emergency intervention. <strong>Leak Detection Pro</strong> connects residents with licensed gas pipe technicians for digital sniffing and pressure decay testing.
      </p>
      <p style="margin-bottom: 12px;">
        Contractors assist with <strong>SDG&amp;E red-tag clearance</strong> and permanent safety repairs across the 92105 area. If you smell gas, evacuate and call SDG&amp;E (1-800-411-7343) or 911 immediately.
      </p>
      <div style="margin-top: 16px;">
        <a href="tel:+16199109411" style="background: #dc2626; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
          📞 Emergency Gas Dispatch: (619) 910-9411
        </a>
      </div>
    `
  },
  {
    path: 'about',
    title: 'About Us | City Heights Local Leak Detection Network (92105)',
    desc: 'Learn about Leak Detection Pro based at 3431 43rd St, connecting City Heights property owners with licensed, certified San Diego leak detection contractors.',
    h1: 'About Leak Detection Pro — City Heights, San Diego',
    h2: 'Connecting Property Owners with Pre-Screened Local Leak Specialists',
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        Operating from <strong>3431 43rd St, San Diego CA 92105</strong>, Leak Detection Pro serves the vibrant City Heights community by maintaining an elite referral network of licensed, insured plumbing and leak detection contractors.
      </p>
      <p style="margin-bottom: 12px;">
        Every matched contractor holds active California State License Board (CSLB) credentials and carries advanced diagnostic tools including FLIR thermal cameras and ultrasonic listening probes.
      </p>
    `
  },
  {
    path: 'contact',
    title: 'Contact & Emergency Dispatch | 3431 43rd St, City Heights CA 92105',
    desc: 'Contact Leak Detection Pro at 3431 43rd St, San Diego CA 92105. 24/7 emergency hotline (619) 910-9411 or instant online contractor matching.',
    h1: 'Contact &amp; 24/7 Dispatch — City Heights, San Diego',
    h2: 'Direct Phone Line &amp; Local Dispatch Office',
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        <strong>Address:</strong> 3431 43rd St, San Diego, CA 92105<br/>
        <strong>Emergency Phone:</strong> (619) 910-9411<br/>
        <strong>Operating Hours:</strong> 24 Hours a Day, 7 Days a Week, 365 Days a Year
      </p>
      <p style="margin-bottom: 12px;">
        Need immediate contractor dispatch for an active slab leak or gas smell? Call our local line for rapid priority dispatch throughout 92105, 92104, 92115, and surrounding neighborhoods.
      </p>
    `
  },
  {
    path: 'privacy',
    title: 'Privacy Policy | Leak Detection Pro City Heights',
    desc: 'Privacy policy and consumer data protection terms for Leak Detection Pro serving City Heights, San Diego CA.',
    h1: 'Privacy Policy &amp; Consumer Protection',
    h2: 'CCPA &amp; California Consumer Privacy Compliance',
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        Leak Detection Pro respects your privacy. This policy explains how we collect, use, and protect your information when you request leak detection contractor referral services at 3431 43rd St, San Diego CA 92105.
      </p>
    `
  },
  {
    path: 'disclaimer',
    title: 'Legal Disclaimers & Licensing | Leak Detection Pro',
    desc: 'Consumer referral notices, California licensing standards, and lead generation disclosures for Leak Detection Pro.',
    h1: 'Licensing &amp; Lead Generation Disclaimers',
    h2: 'Independent Contractor Network Notice',
    bodySnippet: `
      <p style="margin-bottom: 12px;">
        Leak Detection Pro is an independent advertising and contractor matchmaking referral service. We connect consumers with independent California State License Board (CSLB) licensed plumbing contractors.
      </p>
    `
  }
];

routes.forEach((route) => {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const pageCanonical = `https://www.cityheightsleakdetectionpro.com/${route.path}`;

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

  // Replace Canonical Link
  pageHtml = pageHtml.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${pageCanonical}" />`
  );

  // Replace Open Graph URL & Title & Desc
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

  // Inject Pre-rendered semantic SEO fallback inside #root
  const semanticContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; min-height: 100vh; background: #0f172a; color: #f8fafc;">
      <header style="padding: 20px 24px; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <a href="/" style="text-decoration: none; display: flex; align-items: center; gap: 12px; color: inherit;">
            <div style="width: 40px; height: 40px; border-radius: 12px; background: linear-gradient(135deg, #2563eb, #4f46e5); display: flex; align-items: center; justify-content: center; font-size: 20px;">
              💧
            </div>
            <div>
              <div style="font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">
                Leak Detection <span style="color: #60a5fa;">Pro</span>
              </div>
              <div style="font-size: 12px; color: #94a3b8;">City Heights, San Diego CA &bull; 92105</div>
            </div>
          </a>
        </div>
        <a href="tel:+16199109411" style="background: #dc2626; color: white; padding: 10px 18px; border-radius: 10px; font-weight: bold; text-decoration: none; font-size: 14px; display: inline-flex; align-items: center; gap: 8px;">
          📞 (619) 910-9411
        </a>
      </header>

      <main style="max-width: 900px; margin: 40px auto; padding: 0 24px;">
        <h1 style="font-size: 32px; font-weight: 800; margin-bottom: 16px; line-height: 1.25; color: white;">
          ${route.h1}
        </h1>
        <p style="font-size: 18px; color: #cbd5e1; line-height: 1.6; margin-bottom: 24px;">
          ${route.desc}
        </p>
        <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 28px; line-height: 1.7; color: #cbd5e1; font-size: 15px;">
          <h2 style="font-size: 20px; color: white; margin-bottom: 12px; font-weight: 700;">
            ${route.h2}
          </h2>
          ${route.bodySnippet}
        </div>
      </main>
    </div>
  `;

  // Replace content of <div id="root">...</div> with semantic content for this route
  pageHtml = pageHtml.replace(
    /<div id="root">[\s\S]*?<\/div>\s*<script type="module"/i,
    `<div id="root">${semanticContent}</div>\n    <script type="module"`
  );

  const targetFile = path.join(routeDir, 'index.html');
  fs.writeFileSync(targetFile, pageHtml, 'utf-8');
  console.log(`Generated route: ${route.path} -> ${targetFile}`);
});

console.log('All static routes generated successfully.');
