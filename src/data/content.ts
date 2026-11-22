export const BUSINESS_INFO = {
  name: 'Leak Detection Pro',
  tagline: 'Fast Water, Slab & Gas Leak Detection & Repair Across San Diego, CA',
  phone: '619-910-9411',
  phoneFormatted: '(619) 910-9411',
  telLink: 'tel:16199109411',
  address: '3431 43rd St',
  city: 'San Diego',
  state: 'CA',
  zip: '92105',
  fullAddress: '3431 43rd St, San Diego, CA 92105',
  neighborhood: 'San Diego, CA',
  hours: '24/7 Citywide Emergency Dispatch Network',
  serviceRadius: 'All City of San Diego Neighborhoods & ZIP Codes',
  targetZips: [
    '92101', '92102', '92103', '92104', '92105', '92106', '92107', '92108',
    '92109', '92110', '92111', '92113', '92114', '92115', '92116', '92117',
    '92119', '92120', '92121', '92122', '92123', '92124', '92126', '92127',
    '92128', '92129', '92130', '92131', '92037', '92139', '92154', '92173'
  ],
  localLandmarks: [
    'Downtown San Diego & Gaslamp Quarter',
    'Mission Valley & I-8 / I-15 Interchange',
    'La Jolla & Coastal Communities',
    'Balboa Park, Hillcrest & North Park',
    'Clairemont, Kearny Mesa & UTC',
    'Rancho Bernardo & Scripps Ranch (I-15)',
    'City Heights Dispatch Hub (43rd St)'
  ],
  facebookUrl: 'https://www.facebook.com/profile.php?id=61595322680001'
};

export const LEGAL_DISCLAIMER = {
  shortNotice:
    'Notice: Leak Detection Pro connects San Diego property owners with our qualified network of licensed, pre-screened plumbing and leak detection contractors. We facilitate service dispatch through independent licensed contractor partners.',
  fullNotice: `Leak Detection Pro connects property owners across the City of San Diego, CA with qualified, pre-screened licensed and insured plumbing and leak detection contractors.

IMPORTANT DISCLOSURES:
1. Qualified Contractor Network: Leak Detection Pro coordinates services through an elite network of independent California State License Board (CSLB) licensed plumbing and leak detection specialists. Field inspections, diagnostics, and repairs are performed directly by qualified contractor professionals.
2. Independent Contractor Network: All technicians in our contractor network are independent licensed service professionals. We do not employ plumbers or field technicians directly.
3. Verification & Estimates: Homeowners and business owners are encouraged to verify licenses, insurance, and warranty terms directly with the matched contractor prior to authorizing any work.
4. No Liability: Leak Detection Pro assumes no responsibility or liability for contractor performance, pricing disputes, property damages, or work guarantees.
5. Emergency Protocol: If you detect a severe natural gas leak or smell strong rotten egg odor indoors, please evacuate immediately and contact SDG&E at 1-800-411-7343 or dial 911.`
};

export const SAN_DIEGO_AREAS = [
  {
    name: 'Downtown, Uptown & Mid-City (92101–92105, 92116)',
    desc: 'Downtown, Little Italy, Hillcrest, North Park, South Park, Mission Hills, Normal Heights, Kensington & City Heights historic homes and condos.'
  },
  {
    name: 'Coastal & Beach Communities (92037, 92106, 92107, 92109)',
    desc: 'La Jolla, Pacific Beach, Mission Beach, Ocean Beach & Point Loma properties facing coastal salt air corrosion and slab pipe wear.'
  },
  {
    name: 'Mission Valley, Clairemont & Kearny Mesa (92108, 92110–92111, 92117)',
    desc: 'Bay Park, Linda Vista, Morena, Serra Mesa & Mission Valley residences built on mid-century concrete slabs and canyon mesas.'
  },
  {
    name: 'North City & I-15 / SR-56 Corridor (92121–92122, 92126–92131)',
    desc: 'UTC / University City, Sorrento Valley, Carmel Valley, Mira Mesa, Scripps Ranch, Rancho Peñasquitos & Rancho Bernardo.'
  },
  {
    name: 'East San Diego & College Area (92115, 92119, 92120, 92124)',
    desc: 'SDSU / College Area, Allied Gardens, Del Cerro, San Carlos & Tierrasanta homes prone to copper pinhole leaks and high water pressure.'
  },
  {
    name: 'Southeast & South Bay San Diego (92113, 92114, 92139, 92154, 92173)',
    desc: 'Encanto, Paradise Hills, Logan Heights, Otay Mesa & San Ysidro residential properties, ADUs, and commercial buildings.'
  }
];

export const CITY_HEIGHTS_AREAS = SAN_DIEGO_AREAS;

export const SAN_DIEGO_PLUMBING_ISSUES = [
  {
    title: 'Mid-Century Concrete Slab Copper Pinhole Leaks',
    badge: 'Clairemont, Allied Gardens & Beach Areas',
    summary:
      'Post-war homes across Clairemont, San Carlos, Pacific Beach, and Mira Mesa route hot and cold copper lines directly beneath concrete slabs. Thermal pipe movement against gravel and mineral-rich San Diego water thins copper walls until silent pinholes form.'
  },
  {
    title: 'Coastal Salt-Air & Historic Pipe Corrosion',
    badge: 'La Jolla, Point Loma & Uptown',
    summary:
      'Historic 1920s–1950s bungalows in Mission Hills, North Park, City Heights, and coastal properties in La Jolla and Ocean Beach face accelerated galvanized steel tuberculation, aging brass shutoffs, and hidden riser drips behind plaster walls.'
  },
  {
    title: 'High Municipal Pressure & PRV Failures',
    badge: 'Rancho Bernardo, Scripps Ranch & Mesas',
    summary:
      'Steep elevation changes across Tierrasanta, Scripps Ranch, Carmel Valley, and Rancho Bernardo create municipal water pressure surges above 90 PSI. Failed pressure-reducing valves stress appliance flex lines, slab runs, and irrigation manifolds.'
  },
  {
    title: 'Expansive Clay Soil & Aging Sewer Laterals',
    badge: 'Canyon Lots & Valley Corridors',
    summary:
      'Seasonal expansion in San Diego adobe clay soil combined with eucalyptus and ficus roots stresses cast-iron and clay sewer drains in Mission Valley, Point Loma, Chollas Creek, and Fox Canyon, causing foundation moisture and buried yard breaks.'
  }
];

export const CITY_HEIGHTS_PLUMBING_ISSUES = SAN_DIEGO_PLUMBING_ISSUES;

export const HOMEPAGE_PRICING_TIERS = [
  {
    service: 'Visual Fixture & Meter Isolation Check',
    method: 'City Meter Spin Test & Valve Check',
    range: '$125 – $225',
    details:
      'Confirms whether water loss is active on your private service lateral, indoor fixtures, or irrigation manifold.'
  },
  {
    service: 'Thermal FLIR Infrared Wall & Ceiling Scan',
    method: 'FLIR Thermography & Moisture Mapping',
    range: '$175 – $325',
    details:
      'Pinpoints hidden cold or hot pipe drips behind drywall, plaster, cabinetry, and tile without exploratory cutouts.'
  },
  {
    service: 'Acoustic Concrete Slab Leak Locating',
    method: 'Piezo-Acoustic Ground Sensors',
    range: '$250 – $450',
    details:
      'Tracks pressurized water vibrations beneath concrete slab foundations within 1–2 inches before any targeted repair.'
  },
  {
    service: 'Underground Yard Main & Tracer Gas Test',
    method: 'Nitrogen/Helium Tracer & Ground Probe',
    range: '$295 – $525',
    details:
      'Isolates deep buried supply runs under driveways, walkways, and landscaped yards between the curb meter and home.'
  },
  {
    service: 'Natural Gas Pressure Decay & Sniffer Survey',
    method: 'Digital Manometer & 1-PPM Electronic Sniffer',
    range: '$195 – $350',
    details:
      'Tests gas line holding pressure, locates active vapor leaks, and provides compliance testing for SDG&E service restoration.'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Carlos M.',
    location: 'North Park / Mid-City San Diego (92104)',
    service: 'Underground Slab Water Leak',
    rating: 5,
    date: '2 weeks ago',
    text: 'Our San Diego water bill jumped $340 in one cycle with no puddles in sight. Called Leak Detection Pro and their partner technician arrived within 70 minutes. Ultrasonic ground sensors pinpointed a hot-water copper pinhole under our hallway tile with zero unnecessary demolition.'
  },
  {
    id: '2',
    name: 'Elena R.',
    location: 'Clairemont Mesa, San Diego (92117)',
    service: 'Emergency Gas Odor Detection',
    rating: 5,
    date: '1 month ago',
    text: 'Smelled a faint sulfur odor near our stove and water heater. The 24/7 dispatch desk routed a certified gas specialist who used an electronic sniffer to isolate a leaking fitting behind the kitchen cabinet and handled our pressure certification smoothly.'
  },
  {
    id: '3',
    name: 'Marcus T.',
    location: 'Pacific Beach, San Diego (92109)',
    service: 'Main Water Line Leak',
    rating: 5,
    date: '3 weeks ago',
    text: 'We noticed damp concrete near our front walkway and constant water meter movement. The matched contractor traced the buried supply line using acoustic probes and helium tracer gas, keeping the repair strictly to a single small access opening.'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How fast can a leak detection specialist arrive anywhere in San Diego?',
    answer:
      'Contractors across our San Diego network provide priority 24/7 emergency dispatch, commonly arriving within 45 to 90 minutes across Downtown, Uptown, Mid-City, Coastal neighborhoods (La Jolla, Pacific Beach, Point Loma), Mission Valley, Clairemont, North City (Carmel Valley, Mira Mesa, Rancho Bernardo), East San Diego, and South Bay.'
  },
  {
    question: 'What is the role of Leak Detection Pro?',
    answer:
      'Leak Detection Pro provides specialized plumbing and leak detection solutions across the City of San Diego by connecting residential and commercial property owners with licensed, vetted, and insured independent leak detection and plumbing specialists.'
  },
  {
    question: 'How do technicians find leaks without tearing down walls or jackhammering floors?',
    answer:
      'Matched specialists deploy non-invasive diagnostic equipment including electro-acoustic ground microphones, FLIR infrared thermal cameras, inert tracer gas testing, video sewer cameras, and static pressure decay gauges to pinpoint leaks within inches prior to targeted repair.'
  },
  {
    question: 'What should I do immediately if I smell gas in San Diego?',
    answer:
      'If you smell rotten eggs or suspect a natural gas leak: 1) Do NOT touch light switches or create sparks. 2) Evacuate all people and pets immediately. 3) Leave doors open as you exit if safe. 4) Call SDG&E at 1-800-411-7343 or 911 from outside. 5) Call our 24/7 dispatch line at (619) 910-9411 for a certified gas line contractor to perform pressure testing and SDG&E red-tag clearance repairs.'
  },
  {
    question: 'Are the contractors licensed and insured in California?',
    answer:
      'Yes. We coordinate strictly with independent contractors holding active California State License Board (CSLB) C-36 plumbing or specialty licenses along with verified general liability insurance and workers’ compensation coverage.'
  }
];
