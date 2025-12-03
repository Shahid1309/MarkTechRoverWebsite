interface Project {
  id: number;
  title: string;
  description: string;
  imageName: string;
  category: string;
  service: string;
  link: string;
}

export const projects: Project[] = [
  // Architects & Interior Designers
  {
    id: 1,
    title: 'TD Smart Interior',
    description: 'Developed a modern interior design portfolio with 3D visualization and project management features.',
    imageName: 'TDsmartinterior',
    category: 'architects',
    service: 'website',
    link: 'https://www.tdsmartinterior.com/'
  },
  {
    id: 2,
    title: 'Studio Ardete',
    description: 'Created an immersive portfolio platform with WebGL-powered 3D project walkthroughs.',
    imageName: 'StuidoArdete',
    category: 'architects',
    service: 'website',
    link: 'https://www.studioardete.com/'
  },
  {
    id: 3,
    title: 'Sculpt Design',
    description: 'Built a modern portfolio site with parallax scrolling and interactive project galleries.',
    imageName: 'Sculpt',
    category: 'architects',
    service: 'website',
    link: 'https://www.sculptdesign.com/'
  },
  {
    id: 4,
    title: 'The Thekedaar',
    description: 'Developed a bilingual website with project timeline tracking and cost estimator.',
    imageName: 'TheThekedar',
    category: 'architects',
    service: 'website',
    link: 'https://www.thethekedaar.com/'
  },
  {
    id: 5,
    title: 'AND Studio',
    description: 'Created a minimalist portfolio platform with lazy-loaded image galleries.',
    imageName: 'ANDstudio',
    category: 'architects',
    service: 'website',
    link: 'https://www.andstudio.com/'
  },
  {
    id: 6,
    title: 'iDesign',
    description: 'Built an innovative interior design platform with VR project visualization.',
    imageName: 'Idesign',
    category: 'architects',
    service: 'website',
    link: 'https://www.idesign.com/'
  },
  {
    id: 7,
    title: 'MySpace',
    description: 'Developed a user-friendly interior design platform with AI-powered room suggestions.',
    imageName: 'Myspace',
    category: 'architects',
    service: 'website',
    link: 'https://www.myspace-design.com/'
  },
  {
    id: 8,
    title: 'Urbanscape',
    description: 'Created an urban planning and architecture portfolio with interactive city models.',
    imageName: 'Urbanscape',
    category: 'architects',
    service: 'website',
    link: 'https://www.urbanscape.com/'
  },
  {
    id: 9,
    title: 'Design Forum',
    description: 'Implemented a collaborative design platform with real-time project updates.',
    imageName: 'DesignForum',
    category: 'architects',
    service: 'website',
    link: 'https://www.designforum.com/'
  },

  // Healthcare & Wellness
  {
    id: 10,
    title: 'Qube Health',
    description: 'Engineered a HIPAA-compliant telemedicine platform with real-time consultations.',
    imageName: 'Qubehealth',
    category: 'healthcare',
    service: 'website',
    link: 'https://www.qubehealth.com/'
  },
  {
    id: 11,
    title: 'DocOnline',
    description: 'Developed a mobile-responsive healthcare platform with AI-powered symptom checker.',
    imageName: 'Doconline',
    category: 'healthcare',
    service: 'website',
    link: 'https://www.doconline.com/'
  },
  {
    id: 12,
    title: 'MediBuddy',
    description: 'Built a comprehensive healthcare ecosystem with integrated insurance claims.',
    imageName: 'MediBuddy',
    category: 'healthcare',
    service: 'website',
    link: 'https://www.medibuddy.com/'
  },
  {
    id: 13,
    title: 'Zava',
    description: 'Created a secure digital health platform with automated medical questionnaires.',
    imageName: 'Zava',
    category: 'healthcare',
    service: 'website',
    link: 'https://www.zava.com/'
  },
  {
    id: 14,
    title: 'K Health',
    description: 'Implemented an AI-driven symptom assessment platform with ML diagnostics.',
    imageName: 'Khealth',
    category: 'healthcare',
    service: 'website',
    link: 'https://www.khealth.com/'
  },
  {
    id: 15,
    title: 'Ada Health',
    description: 'Developed an intelligent health companion app with natural language processing.',
    imageName: 'ada',
    category: 'healthcare',
    service: 'website',
    link: 'https://ada.com/'
  },

  // E-commerce & Online Retailers
  {
    id: 16,
    title: 'Chumbak',
    description: 'Created a vibrant e-commerce platform for lifestyle and design products.',
    imageName: 'Chumbak',
    category: 'ecommerce',
    service: 'website',
    link: 'https://www.chumbak.com/'
  },
  {
    id: 17,
    title: 'The Postbox',
    description: 'Developed an artisanal e-commerce platform with storytelling-driven product pages.',
    imageName: 'ThePostbox',
    category: 'ecommerce',
    service: 'website',
    link: 'https://www.thepostbox.in/'
  },
  {
    id: 18,
    title: 'Jaypore',
    description: 'Built a curated marketplace for traditional Indian crafts and designs.',
    imageName: 'Jaypore',
    category: 'ecommerce',
    service: 'website',
    link: 'https://www.jaypore.com/'
  },
  {
    id: 19,
    title: 'Double J',
    description: 'Created a luxury fashion e-commerce platform with editorial content.',
    imageName: 'Doublej',
    category: 'ecommerce',
    service: 'website',
    link: 'https://www.thedobulej.com/'
  },
  {
    id: 20,
    title: 'Wolf & Badger',
    description: 'Implemented a marketplace for independent and sustainable brands.',
    imageName: 'Wolf&Badger',
    category: 'ecommerce',
    service: 'website',
    link: 'https://www.wolfandbadger.com/'
  },
  {
    id: 21,
    title: 'The Frankie Shop',
    description: 'Developed a minimalist fashion e-commerce platform with global shipping.',
    imageName: 'TheFrankieShop',
    category: 'ecommerce',
    service: 'website',
    link: 'https://www.thefrankieshop.com/'
  },

  // Luxury & High-End Brands
  {
    id: 22,
    title: 'Marine Serre',
    description: 'Developed a luxury fashion platform with immersive collection showcases.',
    imageName: 'Marineserre',
    category: 'luxury',
    service: 'website',
    link: 'https://www.marineserre.com/'
  },
  {
    id: 23,
    title: 'NBNW',
    description: 'Created an exclusive fashion e-commerce platform with private shopping experiences.',
    imageName: 'NBNW',
    category: 'luxury',
    service: 'website',
    link: 'https://www.nbnw.com/'
  },
  {
    id: 24,
    title: 'Bloni',
    description: 'Built a high-fashion website with runway show streaming and collection previews.',
    imageName: 'Bloni',
    category: 'luxury',
    service: 'website',
    link: 'https://www.bloni.in/'
  },
  {
    id: 25,
    title: 'Ka-sha',
    description: 'Implemented a sustainable luxury fashion platform with artisan storytelling.',
    imageName: 'Ka-sha',
    category: 'luxury',
    service: 'website',
    link: 'https://www.ka-sha.com/'
  },
  {
    id: 26,
    title: 'Khatie',
    description: 'Developed an artistic fashion platform with collection archives.',
    imageName: 'Khatie',
    category: 'luxury',
    service: 'website',
    link: 'https://www.khatie.com/'
  },
  {
    id: 27,
    title: 'Wandler',
    description: 'Created a luxury accessories platform with immersive product experiences.',
    imageName: 'Wandler',
    category: 'luxury',
    service: 'website',
    link: 'https://www.wandler.com/'
  },

  // Legal & Consulting Services
  {
    id: 28,
    title: 'Khaitan & Co',
    description: 'Built an enterprise legal platform with secure document management.',
    imageName: 'Khaitan&co',
    category: 'legal',
    service: 'website',
    link: 'https://www.khaitanco.com/'
  },
  {
    id: 29,
    title: 'AZB & Partners',
    description: 'Developed a comprehensive legal website with practice area microsites.',
    imageName: 'AZB&partners',
    category: 'legal',
    service: 'website',
    link: 'https://www.azbpartners.com/'
  },
  {
    id: 30,
    title: 'Nishith Desai Associates',
    description: 'Created a research-focused legal platform with automated updates.',
    imageName: 'Nishtishdesai',
    category: 'legal',
    service: 'website',
    link: 'https://www.nishithdesai.com/'
  },
  {
    id: 31,
    title: 'LKS Legal',
    description: 'Engineered a multi-language legal platform with expertise showcase.',
    imageName: 'LKS',
    category: 'legal',
    service: 'website',
    link: 'https://www.lkslegal.in/'
  },
  {
    id: 32,
    title: 'Argus Partners',
    description: 'Implemented a modern legal website with deal database.',
    imageName: 'Arguspartners',
    category: 'legal',
    service: 'website',
    link: 'https://www.argus-p.com/'
  },
  {
    id: 33,
    title: 'Economic Laws Practice',
    description: 'Built a specialized legal platform with regulatory tracking.',
    imageName: 'ELP',
    category: 'legal',
    service: 'website',
    link: 'https://elplaw.in/'
  },
  {
    id: 34,
    title: 'Clifford Chance',
    description: 'Developed an international legal platform with multi-jurisdiction tools.',
    imageName: 'Cliffordchance',
    category: 'legal',
    service: 'website',
    link: 'https://www.cliffordchance.com/'
  },
  {
    id: 35,
    title: 'Baker McKenzie',
    description: 'Created a global legal website with AI-powered search.',
    imageName: 'BakerMckenize',
    category: 'legal',
    service: 'website',
    link: 'https://www.bakermckenzie.com/'
  },
  {
    id: 36,
    title: 'DLA Piper',
    description: 'Engineered an enterprise legal platform with knowledge sharing.',
    imageName: 'DLApiper',
    category: 'legal',
    service: 'website',
    link: 'https://www.dlapiper.com/'
  },

  // Personal Finance & Investment
  {
    id: 37,
    title: 'Cube Wealth',
    description: 'Built a comprehensive wealth management platform with AI-driven insights.',
    imageName: 'Cube',
    category: 'finance',
    service: 'website',
    link: 'https://www.cubewealth.com/'
  },
  {
    id: 38,
    title: 'Kuvera',
    description: 'Developed a zero-commission investment platform with portfolio analytics.',
    imageName: 'Kuvera',
    category: 'finance',
    service: 'website',
    link: 'https://www.kuvera.in/'
  },
  {
    id: 39,
    title: 'Scripbox',
    description: 'Created an automated investment advisory platform with goal-based planning.',
    imageName: 'Scripbox',
    category: 'finance',
    service: 'website',
    link: 'https://www.scripbox.com/'
  },
  {
    id: 40,
    title: 'Wealthsimple',
    description: 'Implemented a smart investing platform with socially responsible options.',
    imageName: 'Wealthsimple',
    category: 'finance',
    service: 'website',
    link: 'https://www.wealthsimple.com/'
  },
  {
    id: 41,
    title: 'Nutmeg',
    description: 'Built a digital wealth management platform with personalized portfolios.',
    imageName: 'Nutmeg',
    category: 'finance',
    service: 'website',
    link: 'https://www.nutmeg.com/'
  },
  {
    id: 42,
    title: 'Stash',
    description: 'Developed a micro-investing platform with educational resources.',
    imageName: 'Stash',
    category: 'finance',
    service: 'website',
    link: 'https://www.stash.com/'
  },

  // Real Estate & Property
  {
    id: 43,
    title: 'Poddar Housing',
    description: 'Created a property showcase platform with virtual tours.',
    imageName: 'Poddarhousing',
    category: 'realestate',
    service: 'website',
    link: 'https://www.poddarhousing.com/'
  },
  {
    id: 44,
    title: 'Tridhaatu',
    description: 'Built a luxury real estate platform with 3D property visualization.',
    imageName: 'Tridhaatu',
    category: 'realestate',
    service: 'website',
    link: 'https://www.tridhaatu.com/'
  },
  {
    id: 45,
    title: 'Rustomjee',
    description: 'Developed an immersive property showcase with AR experiences.',
    imageName: 'Rustomjee',
    category: 'realestate',
    service: 'website',
    link: 'https://www.rustomjee.com/'
  },
  {
    id: 46,
    title: 'Bosa Properties',
    description: 'Implemented a premium real estate platform with interactive maps.',
    imageName: 'Bosaproperties',
    category: 'realestate',
    service: 'website',
    link: 'https://www.bosaproperties.com/'
  },
  {
    id: 47,
    title: 'Third & Urban',
    description: 'Created an urban development showcase with project timelines.',
    imageName: 'Third&urban',
    category: 'realestate',
    service: 'website',
    link: 'https://www.thirdandurban.com/'
  },
  {
    id: 48,
    title: 'Hines',
    description: 'Built a global real estate investment platform with portfolio analytics.',
    imageName: 'Hines',
    category: 'realestate',
    service: 'website',
    link: 'https://www.hines.com/'
  },

  // Travel & Hospitality
  {
    id: 49,
    title: 'goSTOPS',
    description: 'Developed a modern hostel booking platform with social features.',
    imageName: 'Gostops',
    category: 'travel',
    service: 'website',
    link: 'https://www.gostops.com/'
  },
  {
    id: 50,
    title: 'Savaari',
    description: 'Created an intercity car rental platform with real-time tracking.',
    imageName: 'Savaari',
    category: 'travel',
    service: 'website',
    link: 'https://www.savaari.com/'
  },
  {
    id: 51,
    title: 'Treebo',
    description: 'Built a budget hotel booking platform with quality assurance.',
    imageName: 'Treeboclub',
    category: 'travel',
    service: 'website',
    link: 'https://www.treebo.com/'
  },
  {
    id: 52,
    title: 'Hopper',
    description: 'Implemented an AI-powered travel booking platform with price predictions.',
    imageName: 'Hopper',
    category: 'travel',
    service: 'website',
    link: 'https://www.hopper.com/'
  },
  {
    id: 53,
    title: 'GetYourGuide',
    description: 'Developed a tours and activities booking platform with instant confirmation.',
    imageName: 'Getyourguide',
    category: 'travel',
    service: 'website',
    link: 'https://www.getyourguide.com/'
  },
  {
    id: 54,
    title: 'Klook',
    description: 'Created a global activities booking platform with mobile tickets.',
    imageName: 'Klook',
    category: 'travel',
    service: 'website',
    link: 'https://www.klook.com/'
  },

  // Education & Online Learning
  {
    id: 55,
    title: 'Vedantu',
    description: 'Built an interactive online tutoring platform with live classes.',
    imageName: 'vedantu',
    category: 'education',
    service: 'website',
    link: 'https://www.vedantu.com/'
  },
  {
    id: 56,
    title: 'Classplus',
    description: 'Developed a mobile-first teaching platform with course creation tools.',
    imageName: 'classplus',
    category: 'education',
    service: 'website',
    link: 'https://www.classplus.co/'
  },
  {
    id: 57,
    title: 'Cuemath',
    description: 'Created an adaptive math learning platform with visual problem solving.',
    imageName: 'cuemath',
    category: 'education',
    service: 'website',
    link: 'https://www.cuemath.com/'
  },
  {
    id: 58,
    title: 'Adda247',
    description: 'Implemented a competitive exam preparation platform with mock tests.',
    imageName: 'adda',
    category: 'education',
    service: 'website',
    link: 'https://www.adda247.com/'
  },
  {
    id: 59,
    title: 'MasterClass',
    description: 'Built a premium online learning platform with celebrity instructors.',
    imageName: 'masterclass',
    category: 'education',
    service: 'website',
    link: 'https://www.masterclass.com/'
  },
  {
    id: 60,
    title: 'Brilliant',
    description: 'Developed an interactive STEM learning platform with hands-on courses.',
    imageName: 'brilliant',
    category: 'education',
    service: 'website',
    link: 'https://www.brilliant.org/'
  },

  // Tech Startups
  {
    id: 61,
    title: 'Chargebee',
    description: 'Created a subscription billing platform with revenue analytics.',
    imageName: 'Chargebee',
    category: 'tech',
    service: 'website',
    link: 'https://www.chargebee.com/'
  },
  {
    id: 62,
    title: 'Hiver',
    description: 'Built an email collaboration platform with workflow automation.',
    imageName: 'Hiver',
    category: 'tech',
    service: 'website',
    link: 'https://www.hiverhq.com/'
  },
  {
    id: 63,
    title: 'Icertis',
    description: 'Developed an AI-powered contract management platform.',
    imageName: 'Icertis',
    category: 'tech',
    service: 'website',
    link: 'https://www.icertis.com/'
  },
  {
    id: 64,
    title: 'MoEngage',
    description: 'Implemented a customer engagement platform with AI insights.',
    imageName: 'moengage',
    category: 'tech',
    service: 'website',
    link: 'https://www.moengage.com/'
  },
  {
    id: 65,
    title: 'Airtable',
    description: 'Created a flexible workspace platform with custom applications.',
    imageName: 'Airtable',
    category: 'tech',
    service: 'website',
    link: 'https://www.airtable.com/'
  },
  {
    id: 66,
    title: 'ClickUp',
    description: 'Built an all-in-one productivity platform with customizable workflows.',
    imageName: 'Clickup',
    category: 'tech',
    service: 'website',
    link: 'https://www.clickup.com/'
  }
];

export const getImageUrl = (imageName: string, size: number = 640): string => {
  return `/images/portfolio/${imageName}-${size}.webp`;
};

export const getPlaceholderUrl = (imageName: string): string => {
  return `/images/portfolio/${imageName}-placeholder.webp`;
};

export const getSrcSet = (imageName: string): string => {
  const sizes = [320, 640, 768, 1024];
  return sizes
    .map(size => `${getImageUrl(imageName, size)} ${size}w`)
    .join(', ');
}; 