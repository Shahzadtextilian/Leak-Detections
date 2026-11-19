export const BUSINESS_INFO = {
  name: 'Leak Detection Pro',
  tagline: 'Fast Water & Gas Leak Detection & Repair Services in City Heights',
  phone: '619-910-9411',
  phoneFormatted: '(619) 910-9411',
  telLink: 'tel:16199109411',
  address: '3431 43rd St',
  city: 'City Heights, San Diego',
  state: 'CA',
  zip: '92105',
  fullAddress: '3431 43rd St, San Diego, CA 92105',
  neighborhood: 'City Heights',
  hours: '24/7 Emergency Dispatch Network',
  serviceRadius: 'City Heights & Greater San Diego County',
  targetZips: ['92105', '92104', '92115', '92116', '92102', '92113', '92114'],
  localLandmarks: [
    'University Ave corridor',
    'Fairmount Ave & 43rd St intersection',
    'Euclid Tower area',
    'City Heights Recreation Center',
    'Officer Jeremy Henwood Memorial Park',
    'Teralta Park / Interstate 15 lid',
    'Colina Del Sol Golf Course'
  ],
  facebookUrl: 'https://www.facebook.com/profile.php?id=61595322680001'
};

export const LEGAL_DISCLAIMER = {
  shortNotice: 'Notice: Leak Detection Pro connects property owners with our qualified network of licensed, pre-screened plumbing and leak detection contractors. We facilitate service dispatch through independent licensed contractor partners.',
  fullNotice: `Leak Detection Pro connects property owners in City Heights, San Diego, CA with qualified, pre-screened licensed and insured plumbing and leak detection contractors.

IMPORTANT DISCLOSURES:
1. Qualified Contractor Network: Leak Detection Pro coordinates services through an elite network of independent California State License Board (CSLB) licensed plumbing and leak detection specialists. Field inspections, diagnostics, and repairs are performed directly by qualified contractor professionals.
2. Independent Contractor Network: All technicians in our contractor network are independent licensed service professionals. We do not employ plumbers or field technicians directly.
3. Verification & Estimates: Homeowners and business owners are encouraged to verify licenses, insurance, and warranty terms directly with the matched contractor prior to authorizing any work.
4. No Liability: Leak Detection Pro assumes no responsibility or liability for contractor performance, pricing disputes, property damages, or work guarantees.
5. Emergency Protocol: If you detect a severe natural gas leak or smell strong rotten egg odor indoors, please evacuate immediately and contact SDG&E at 1-800-411-7343 or dial 911.`
};

export const CITY_HEIGHTS_AREAS = [
  {
    name: 'Teralta (92105)',
    desc: '1920s–1940s Craftsman & bungalow blocks north and south of University Ave near Teralta Park; raised-foundation galvanized pipe and drain leaks.'
  },
  {
    name: 'Azalea Park (92105)',
    desc: 'Canyon-rim cottages and mid-century slab homes along Poplar St & Violet St prone to copper slab pinholes and hillside main line stress.'
  },
  {
    name: 'Fairmount Village (92105)',
    desc: 'Hillside residences near Fairmount Ave & Swan Canyon with aging cast-iron sewer lines, pressure-regulator faults, and foundation seepage.'
  },
  {
    name: 'Fox Canyon (92105)',
    desc: 'Sloped canyon parcels south of Orange Ave & Euclid Ave requiring tracer gas yard main locating and precision acoustic slab diagnostics.'
  },
  {
    name: 'Chollas Creek (92105 / 92102)',
    desc: 'Properties along the Chollas Creek corridor near 47th St & Market St affected by alluvial soil shifting, root intrusion, and under-slab moisture.'
  },
  {
    name: 'Surrounding Metro ZIPs (92104, 92115, 92116)',
    desc: 'Rapid 24/7 dispatch extending from 43rd St into Normal Heights, North Park, Talmadge, Kensington, and Rolando.'
  }
];

export const CITY_HEIGHTS_PLUMBING_ISSUES = [
  {
    title: '1920s–1950s Craftsman Homes & Bungalows',
    badge: 'Historic Raised Foundations',
    summary: 'Pre-war wood-framed homes near Teralta, Azalea Park, and University Ave often contain original crawlspace risers, aging brass shutoffs, and brittle solder joints that weep quietly behind lath-and-plaster walls.'
  },
  {
    title: 'Corroded Galvanized Steel Supply Pipes',
    badge: 'Rust & Pressure Drops',
    summary: 'Before copper and PEX became standard, City Heights builders installed galvanized steel water piping. Internal rust buildup restricts water flow, spikes line pressure, and causes sudden pinhole ruptures at threaded joints.'
  },
  {
    title: 'Aging Cast-Iron & Clay Sewer Lines',
    badge: 'Root Intrusion & Soil Shift',
    summary: 'Heavy San Diego clay soils and mature neighborhood tree roots stress decades-old cast-iron and vitrified clay drains across Fairmount Village, Fox Canyon, and Chollas Creek, leading to slow backups and concealed foundation dampness.'
  },
  {
    title: 'Mid-Century Concrete Slab Foundations',
    badge: 'Sub-Slab Copper Leaks',
    summary: '1950s–1970s slab-on-grade homes and fourplexes route pressurized hot and cold copper lines straight through abrasive earth and concrete footings, creating warm floor spots, hissing sounds, and spiking water bills.'
  }
];

export const HOMEPAGE_PRICING_TIERS = [
  {
    service: 'Visual Fixture & Meter Isolation Check',
    method: 'City Meter Spin Test & Valve Check',
    range: '$125 – $225',
    details: 'Confirms whether water loss is active on your private service lateral, indoor fixtures, or irrigation manifold.'
  },
  {
    service: 'Thermal FLIR Infrared Wall & Ceiling Scan',
    method: 'FLIR Thermography & Moisture Mapping',
    range: '$175 – $325',
    details: 'Pinpoints hidden cold or hot pipe drips behind drywall, plaster, cabinetry, and tile without exploratory cutouts.'
  },
  {
    service: 'Acoustic Concrete Slab Leak Locating',
    method: 'Piezo-Acoustic Ground Sensors',
    range: '$250 – $450',
    details: 'Tracks pressurized water vibrations beneath concrete slab foundations within 1–2 inches before any targeted repair.'
  },
  {
    service: 'Underground Yard Main & Tracer Gas Test',
    method: 'Nitrogen/Helium Tracer & Ground Probe',
    range: '$295 – $525',
    details: 'Isolates deep buried supply runs under driveways, walkways, and landscaped yards between the curb meter and home.'
  },
  {
    service: 'Natural Gas Pressure Decay & Sniffer Survey',
    method: 'Digital Manometer & 1-PPM Electronic Sniffer',
    range: '$195 – $350',
    details: 'Tests gas line holding pressure, locates active vapor leaks, and provides compliance testing for SDG&E service restoration.'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Carlos M.',
    location: 'City Heights (43rd St & Wightman)',
    service: 'Underground Slab Water Leak',
    rating: 5,
    date: '2 weeks ago',
    text: 'Our water bill spiked by $340 last month with no visible wet spots. Called Leak Detection Pro and their partner technician arrived at our City Heights home within 75 minutes. Used ultrasonic listening equipment to pinpoint a hot water copper pinhole leak under the hallway tile with zero unnecessary demolition!'
  },
  {
    id: '2',
    name: 'Elena R.',
    location: 'Teralta East, City Heights',
    service: 'Emergency Gas Odor Detection',
    rating: 5,
    date: '1 month ago',
    text: 'Smelled a faint sulfur odor near our stove and water heater. The dispatch team immediately coordinated a certified gas leak specialist who used an electronic sniffer to locate a loose fitting behind the kitchen wall. Fast, professional, and gave us peace of mind.'
  },
  {
    id: '3',
    name: 'Marcus T.',
    location: 'Azalea Park / 92105',
    service: 'Hidden Irrigation & Main Line Leak',
    rating: 5,
    date: '3 weeks ago',
    text: 'Our front yard had a damp patch that kept growing. The matched contractor traced our main supply line using ground microphones and helium pressure testing. Repaired the joint without digging up our entire driveway.'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How fast can a leak detection specialist arrive at my City Heights home?',
    answer: 'Contractors in our City Heights network provide priority emergency response, often arriving within 45 to 90 minutes across the 92105 zip code and surrounding San Diego metro areas, 24 hours a day, 7 days a week.'
  },
  {
    question: 'What is the role of Leak Detection Pro?',
    answer: 'Leak Detection Pro provides specialized plumbing and leak detection solutions by connecting residential and commercial property owners with licensed, vetted, and insured independent leak detection and plumbing specialists in City Heights, San Diego.'
  },
  {
    question: 'How do technicians find leaks without tearing down walls or jackhammering floors?',
    answer: 'The matched specialists utilize non-invasive cutting-edge diagnostic technology including electro-acoustic ground sensors, high-resolution thermal imaging cameras, tracer gas / helium testing, video pipe cameras, and line pressure decay testing to pinpoint leaks within inches before any excavation is considered.'
  },
  {
    question: 'What should I do immediately if I smell gas in City Heights?',
    answer: 'If you smell rotten eggs or suspect a natural gas leak: 1) Do NOT flip any light switches or ignite matches. 2) Evacuate all occupants and pets immediately. 3) Leave doors open behind you if safe. 4) Call SDG&E at 800-411-7343 or 911 from a safe distance outside. 5) Call our dispatch line at 619-910-9411 to arrange a certified gas line technician for official repairs and safety certification.'
  },
  {
    question: 'Are the contractors licensed and insured in California?',
    answer: 'Yes. We work exclusively with qualified contractors who hold valid California State License Board (CSLB) plumbing/specialty licenses and carry active general liability insurance and workers compensation.'
  }
];
