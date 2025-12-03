export interface Project {
  id: string;
  title: string;
  description: string;
  imageName: string;
  category: string;
  link: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'chumbak',
    title: 'Chumbak - Lifestyle Brand',
    description: 'Complete digital transformation for a leading lifestyle brand with 300% increase in online sales.',
    imageName: 'chumbak.jpg',
    category: 'ecommerce',
    link: '/case-studies/chumbak',
    tags: ['E-commerce', 'SEO', 'PPC', 'Social Media'],
    featured: true
  },
  {
    id: 'dentinics',
    title: 'Dentinics - Dental Practice',
    description: 'Local SEO and digital marketing for dental practice with 250% increase in patient bookings.',
    imageName: 'dentinics.jpg',
    category: 'healthcare',
    link: '/case-studies/dentinics',
    tags: ['Local SEO', 'Healthcare', 'Lead Generation'],
    featured: true
  },
  {
    id: 'idesign',
    title: 'iDesign - Architecture Firm',
    description: 'Professional website and digital presence for architecture firm with 400% increase in inquiries.',
    imageName: 'idesign.jpg',
    category: 'architects',
    link: '/case-studies/idesign',
    tags: ['Web Design', 'Architecture', 'Branding'],
    featured: true
  },
  {
    id: 'luxury-hotel',
    title: 'Luxury Hotel Chain',
    description: 'Digital marketing strategy for luxury hotel chain with 200% increase in bookings.',
    imageName: 'luxury-hotel.jpg',
    category: 'luxury',
    link: '/portfolio/luxury-hotel',
    tags: ['Luxury', 'Hospitality', 'PPC', 'Social Media']
  },
  {
    id: 'tech-startup',
    title: 'Tech Startup',
    description: 'Complete digital transformation for tech startup with 500% increase in user acquisition.',
    imageName: 'tech-startup.jpg',
    category: 'technology',
    link: '/portfolio/tech-startup',
    tags: ['Technology', 'SaaS', 'Growth Marketing']
  },
  {
    id: 'fashion-brand',
    title: 'Fashion Brand',
    description: 'E-commerce optimization and social media marketing for fashion brand.',
    imageName: 'fashion-brand.jpg',
    category: 'ecommerce',
    link: '/portfolio/fashion-brand',
    tags: ['Fashion', 'E-commerce', 'Social Media', 'Influencer Marketing']
  },
  // Legal Firms
  {
    id: 'azb-partners',
    title: 'AZB & Partners',
    description: 'Digital transformation for leading law firm with enhanced online presence and client engagement.',
    imageName: 'AZB&partners',
    category: 'legal',
    link: '/portfolio/azb-partners',
    tags: ['Legal', 'Corporate Law', 'Web Design', 'SEO']
  },
  {
    id: 'khaitan-co',
    title: 'Khaitan & Co',
    description: 'Comprehensive digital marketing strategy for premier legal services firm.',
    imageName: 'Khaitan&co',
    category: 'legal',
    link: '/portfolio/khaitan-co',
    tags: ['Legal', 'Corporate', 'Branding', 'Digital Marketing']
  },
  {
    id: 'clifford-chance',
    title: 'Clifford Chance',
    description: 'Global law firm digital presence optimization and content marketing strategy.',
    imageName: 'Cliffordchance',
    category: 'legal',
    link: '/portfolio/clifford-chance',
    tags: ['Legal', 'International', 'Content Marketing', 'SEO']
  },
  {
    id: 'baker-mckenzie',
    title: 'Baker McKenzie',
    description: 'International law firm digital marketing and lead generation campaigns.',
    imageName: 'BakerMckenize',
    category: 'legal',
    link: '/portfolio/baker-mckenzie',
    tags: ['Legal', 'Global', 'Lead Generation', 'PPC']
  },
  // Real Estate
  {
    id: 'hines',
    title: 'Hines Real Estate',
    description: 'Luxury real estate digital marketing with 180% increase in qualified leads.',
    imageName: 'Hines',
    category: 'realestate',
    link: '/portfolio/hines',
    tags: ['Real Estate', 'Luxury', 'Lead Generation', 'PPC']
  },
  {
    id: 'rustomjee',
    title: 'Rustomjee Group',
    description: 'Premium real estate developer digital transformation and lead generation.',
    imageName: 'Rustomjee',
    category: 'realestate',
    link: '/portfolio/rustomjee',
    tags: ['Real Estate', 'Premium', 'Digital Marketing', 'SEO']
  },
  {
    id: 'poddar-housing',
    title: 'Poddar Housing',
    description: 'Real estate digital marketing strategy with enhanced property showcasing.',
    imageName: 'Poddarhousing',
    category: 'realestate',
    link: '/portfolio/poddar-housing',
    tags: ['Real Estate', 'Housing', 'Digital Marketing', 'Web Design']
  },
  // Finance & Fintech
  {
    id: 'chargebee',
    title: 'Chargebee',
    description: 'SaaS billing platform growth marketing with 250% increase in enterprise leads.',
    imageName: 'Chargebee',
    category: 'finance',
    link: '/portfolio/chargebee',
    tags: ['SaaS', 'Fintech', 'Growth Marketing', 'B2B']
  },
  {
    id: 'scripbox',
    title: 'Scripbox',
    description: 'Investment platform digital marketing and user acquisition campaigns.',
    imageName: 'Scripbox',
    category: 'finance',
    link: '/portfolio/scripbox',
    tags: ['Fintech', 'Investment', 'User Acquisition', 'Digital Marketing']
  },
  {
    id: 'kuvera',
    title: 'Kuvera',
    description: 'Wealth management platform SEO and content marketing strategy.',
    imageName: 'Kuvera',
    category: 'finance',
    link: '/portfolio/kuvera',
    tags: ['Wealth Management', 'Fintech', 'SEO', 'Content Marketing']
  },
  // Healthcare
  {
    id: 'medibuddy',
    title: 'MediBuddy',
    description: 'Healthcare platform digital marketing with 300% increase in user engagement.',
    imageName: 'MediBuddy',
    category: 'healthcare',
    link: '/portfolio/medibuddy',
    tags: ['Healthcare', 'Digital Health', 'User Acquisition', 'Mobile Marketing']
  },
  {
    id: 'khealth',
    title: 'K Health',
    description: 'AI-powered healthcare platform growth marketing and user acquisition.',
    imageName: 'Khealth',
    category: 'healthcare',
    link: '/portfolio/khealth',
    tags: ['Healthcare', 'AI', 'Digital Marketing', 'User Acquisition']
  },
  {
    id: 'qube-health',
    title: 'Qube Health',
    description: 'Healthcare technology platform digital transformation and lead generation.',
    imageName: 'Qubehealth',
    category: 'healthcare',
    link: '/portfolio/qube-health',
    tags: ['Healthcare', 'Technology', 'B2B', 'Lead Generation']
  },
  // E-commerce & Fashion
  {
    id: 'jaypore',
    title: 'Jaypore',
    description: 'Luxury fashion e-commerce platform optimization and brand marketing.',
    imageName: 'Jaypore',
    category: 'ecommerce',
    link: '/portfolio/jaypore',
    tags: ['Fashion', 'E-commerce', 'Luxury', 'Brand Marketing']
  },
  {
    id: 'the-frankie-shop',
    title: 'The Frankie Shop',
    description: 'Fashion retail digital marketing and social media growth strategy.',
    imageName: 'TheFrankieShop',
    category: 'ecommerce',
    link: '/portfolio/the-frankie-shop',
    tags: ['Fashion', 'Retail', 'Social Media', 'Brand Marketing']
  },
  // Travel & Hospitality
  {
    id: 'klook',
    title: 'Klook',
    description: 'Travel experience platform digital marketing and user acquisition campaigns.',
    imageName: 'Klook',
    category: 'travel',
    link: '/portfolio/klook',
    tags: ['Travel', 'Experience', 'User Acquisition', 'Mobile Marketing']
  },
  {
    id: 'getyourguide',
    title: 'GetYourGuide',
    description: 'Travel booking platform SEO and conversion optimization strategy.',
    imageName: 'Getyourguide',
    category: 'travel',
    link: '/portfolio/getyourguide',
    tags: ['Travel', 'Booking', 'SEO', 'Conversion Optimization']
  },
  {
    id: 'savaari',
    title: 'Savaari Car Rentals',
    description: 'Car rental platform digital marketing with 200% increase in bookings.',
    imageName: 'Savaari',
    category: 'travel',
    link: '/portfolio/savaari',
    tags: ['Travel', 'Car Rental', 'Digital Marketing', 'Local SEO']
  },
  // Education & EdTech
  {
    id: 'vedantu',
    title: 'Vedantu',
    description: 'Online education platform growth marketing and student acquisition campaigns.',
    imageName: 'Vedantu',
    category: 'education',
    link: '/portfolio/vedantu',
    tags: ['EdTech', 'Online Learning', 'Growth Marketing', 'User Acquisition']
  },
  {
    id: 'cuemath',
    title: 'Cuemath',
    description: 'Math learning platform digital marketing and parent engagement strategy.',
    imageName: 'Cuemath',
    category: 'education',
    link: '/portfolio/cuemath',
    tags: ['EdTech', 'Math Learning', 'Parent Marketing', 'Digital Marketing']
  },
  {
    id: 'masterclass',
    title: 'MasterClass',
    description: 'Online learning platform content marketing and subscription growth strategy.',
    imageName: 'Masterclass',
    category: 'education',
    link: '/portfolio/masterclass',
    tags: ['Online Learning', 'Content Marketing', 'Subscription', 'Premium']
  },
  // Technology & SaaS
  {
    id: 'clickup',
    title: 'ClickUp',
    description: 'Productivity platform growth marketing with 400% increase in enterprise signups.',
    imageName: 'Clickup',
    category: 'tech',
    link: '/portfolio/clickup',
    tags: ['SaaS', 'Productivity', 'B2B', 'Growth Marketing']
  },
  {
    id: 'hiver',
    title: 'Hiver',
    description: 'Email collaboration platform digital marketing and lead generation campaigns.',
    imageName: 'Hiver',
    category: 'tech',
    link: '/portfolio/hiver',
    tags: ['SaaS', 'Email', 'Collaboration', 'B2B Marketing']
  },
  {
    id: 'moengage',
    title: 'MoEngage',
    description: 'Customer engagement platform growth marketing and enterprise lead generation.',
    imageName: 'moengage',
    category: 'tech',
    link: '/portfolio/moengage',
    tags: ['SaaS', 'Customer Engagement', 'Enterprise', 'Growth Marketing']
  },
  {
    id: 'airtable',
    title: 'Airtable',
    description: 'Database platform digital marketing and user acquisition campaigns.',
    imageName: 'Airtable',
    category: 'tech',
    link: '/portfolio/airtable',
    tags: ['SaaS', 'Database', 'Productivity', 'B2B']
  },
  {
    id: 'icertis',
    title: 'Icertis',
    description: 'Contract management platform enterprise marketing and lead generation.',
    imageName: 'Icertis',
    category: 'tech',
    link: '/portfolio/icertis',
    tags: ['SaaS', 'Enterprise', 'Contract Management', 'B2B']
  },
  {
    id: 'classplus',
    title: 'Classplus',
    description: 'EdTech platform growth marketing with 300% increase in creator signups.',
    imageName: 'Classplus',
    category: 'education',
    link: '/portfolio/classplus',
    tags: ['EdTech', 'Creator Economy', 'Growth Marketing', 'Mobile']
  },
  // Architecture & Design
  {
    id: 'and-studio',
    title: 'AND Studio',
    description: 'Architecture firm digital presence and portfolio showcase optimization.',
    imageName: 'ANDstudio',
    category: 'architects',
    link: '/portfolio/and-studio',
    tags: ['Architecture', 'Design', 'Portfolio', 'Branding']
  },
  {
    id: 'design-forum',
    title: 'Design Forum',
    description: 'Interior design firm digital marketing and lead generation strategy.',
    imageName: 'DesignForum',
    category: 'architects',
    link: '/portfolio/design-forum',
    tags: ['Interior Design', 'Architecture', 'Lead Generation', 'Luxury']
  },
  {
    id: 'studio-ardete',
    title: 'Studio Ardete',
    description: 'Contemporary architecture firm branding and digital showcase.',
    imageName: 'StuidoArdete',
    category: 'architects',
    link: '/portfolio/studio-ardete',
    tags: ['Architecture', 'Contemporary', 'Branding', 'Portfolio']
  },
  {
    id: 'td-smart-interior',
    title: 'TD Smart Interior',
    description: 'Smart interior design solutions digital marketing and client acquisition.',
    imageName: 'TDsmartinterior',
    category: 'architects',
    link: '/portfolio/td-smart-interior',
    tags: ['Interior Design', 'Smart Home', 'Digital Marketing', 'Innovation']
  },
  {
    id: 'urbanscape',
    title: 'Urbanscape',
    description: 'Urban planning and landscape architecture digital presence optimization.',
    imageName: 'Urbanscape',
    category: 'architects',
    link: '/portfolio/urbanscape',
    tags: ['Urban Planning', 'Landscape', 'Architecture', 'Sustainability']
  },
  // More Legal Firms
  {
    id: 'dla-piper',
    title: 'DLA Piper',
    description: 'Global law firm digital transformation and content marketing strategy.',
    imageName: 'DLApiper',
    category: 'legal',
    link: '/portfolio/dla-piper',
    tags: ['Legal', 'Global', 'Content Marketing', 'Corporate']
  },
  {
    id: 'lks-law',
    title: 'LKS Law',
    description: 'Corporate law firm digital marketing and client engagement optimization.',
    imageName: 'LKS',
    category: 'legal',
    link: '/portfolio/lks-law',
    tags: ['Legal', 'Corporate', 'Digital Marketing', 'Client Engagement']
  },
  {
    id: 'nishith-desai',
    title: 'Nishith Desai Associates',
    description: 'Research-based law firm thought leadership and digital presence.',
    imageName: 'Nishtishdesai',
    category: 'legal',
    link: '/portfolio/nishith-desai',
    tags: ['Legal', 'Research', 'Thought Leadership', 'Innovation']
  },
  {
    id: 'elp-law',
    title: 'ELP Law',
    description: 'Corporate law firm digital marketing and professional services optimization.',
    imageName: 'ELP',
    category: 'legal',
    link: '/portfolio/elp-law',
    tags: ['Legal', 'Corporate', 'Professional Services', 'Digital Marketing']
  },
  // More Real Estate
  {
    id: 'tridhaatu',
    title: 'Tridhaatu',
    description: 'Luxury real estate developer digital marketing and property showcase.',
    imageName: 'Tridhaatu',
    category: 'realestate',
    link: '/portfolio/tridhaatu',
    tags: ['Real Estate', 'Luxury', 'Property Development', 'Digital Showcase']
  },
  {
    id: 'bosa-properties',
    title: 'Bosa Properties',
    description: 'Premium property developer digital transformation and lead generation.',
    imageName: 'Bosaproperties',
    category: 'realestate',
    link: '/portfolio/bosa-properties',
    tags: ['Real Estate', 'Premium', 'Property Development', 'Lead Generation']
  },
  // More Finance & Fintech
  {
    id: 'wealthsimple',
    title: 'Wealthsimple',
    description: 'Investment platform digital marketing and user acquisition campaigns.',
    imageName: 'Wealthsimple',
    category: 'finance',
    link: '/portfolio/wealthsimple',
    tags: ['Fintech', 'Investment', 'Wealth Management', 'User Acquisition']
  },
  {
    id: 'stash',
    title: 'Stash',
    description: 'Micro-investing platform growth marketing and financial education content.',
    imageName: 'Stash',
    category: 'finance',
    link: '/portfolio/stash',
    tags: ['Fintech', 'Micro-investing', 'Financial Education', 'Growth Marketing']
  },
  {
    id: 'nutmeg',
    title: 'Nutmeg',
    description: 'Digital wealth management platform user acquisition and retention strategy.',
    imageName: 'Nutmeg',
    category: 'finance',
    link: '/portfolio/nutmeg',
    tags: ['Wealth Management', 'Digital Banking', 'User Retention', 'Fintech']
  },
  {
    id: 'cube',
    title: 'Cube',
    description: 'Investment platform digital marketing with focus on young investors.',
    imageName: 'Cube',
    category: 'finance',
    link: '/portfolio/cube',
    tags: ['Investment', 'Young Investors', 'Digital Marketing', 'Fintech']
  },
  // More E-commerce & Fashion
  {
    id: 'marine-serre',
    title: 'Marine Serre',
    description: 'Luxury fashion brand digital marketing and e-commerce optimization.',
    imageName: 'Marineserre',
    category: 'ecommerce',
    link: '/portfolio/marine-serre',
    tags: ['Luxury Fashion', 'E-commerce', 'Brand Marketing', 'Sustainability']
  },
  {
    id: 'wandler',
    title: 'Wandler',
    description: 'Premium accessories brand digital presence and social media strategy.',
    imageName: 'Wandler',
    category: 'ecommerce',
    link: '/portfolio/wandler',
    tags: ['Fashion', 'Accessories', 'Social Media', 'Premium']
  },
  {
    id: 'wolf-badger',
    title: 'Wolf & Badger',
    description: 'Independent fashion marketplace digital marketing and brand partnerships.',
    imageName: 'Wolf&Badger',
    category: 'ecommerce',
    link: '/portfolio/wolf-badger',
    tags: ['Fashion Marketplace', 'Independent Brands', 'Digital Marketing', 'Partnerships']
  },
  {
    id: 'third-urban',
    title: 'Third & Urban',
    description: 'Contemporary fashion brand e-commerce optimization and growth strategy.',
    imageName: 'Third&urban',
    category: 'ecommerce',
    link: '/portfolio/third-urban',
    tags: ['Fashion', 'Contemporary', 'E-commerce', 'Growth Marketing']
  },
  {
    id: 'ka-sha',
    title: 'Ka-Sha',
    description: 'Luxury fashion platform digital transformation and international expansion.',
    imageName: 'Ka-sha',
    category: 'ecommerce',
    link: '/portfolio/ka-sha',
    tags: ['Luxury Fashion', 'International', 'Digital Transformation', 'Platform']
  },
  {
    id: 'khatie',
    title: 'Khatie',
    description: 'Fashion brand social media marketing and influencer collaboration strategy.',
    imageName: 'Khatie',
    category: 'ecommerce',
    link: '/portfolio/khatie',
    tags: ['Fashion', 'Social Media', 'Influencer Marketing', 'Brand Building']
  },
  {
    id: 'bloni',
    title: 'Bloni',
    description: 'Contemporary fashion brand digital marketing and customer acquisition.',
    imageName: 'Bloni',
    category: 'ecommerce',
    link: '/portfolio/bloni',
    tags: ['Fashion', 'Contemporary', 'Customer Acquisition', 'Digital Marketing']
  },
  {
    id: 'the-postbox',
    title: 'The Postbox',
    description: 'Lifestyle brand e-commerce optimization and subscription box marketing.',
    imageName: 'ThePostbox',
    category: 'ecommerce',
    link: '/portfolio/the-postbox',
    tags: ['Lifestyle', 'Subscription Box', 'E-commerce', 'Customer Retention']
  },
  {
    id: 'nbnw',
    title: 'Nothing But The Wax',
    description: 'Beauty brand digital marketing and social commerce strategy.',
    imageName: 'NBNW',
    category: 'ecommerce',
    link: '/portfolio/nbnw',
    tags: ['Beauty', 'Social Commerce', 'Digital Marketing', 'Brand Building']
  },
  {
    id: 'brilliant',
    title: 'Brilliant',
    description: 'Jewelry brand luxury marketing and high-end customer acquisition.',
    imageName: 'Brilliant',
    category: 'luxury',
    link: '/portfolio/brilliant',
    tags: ['Jewelry', 'Luxury', 'High-end', 'Customer Acquisition']
  },
  {
    id: 'sculpt',
    title: 'Sculpt',
    description: 'Fitness and wellness brand digital transformation and community building.',
    imageName: 'Sculpt',
    category: 'healthcare',
    link: '/portfolio/sculpt',
    tags: ['Fitness', 'Wellness', 'Community Building', 'Digital Transformation']
  },
  // More Travel & Hospitality
  {
    id: 'treebo-club',
    title: 'Treebo Club',
    description: 'Hotel chain loyalty program digital marketing and member acquisition.',
    imageName: 'Treeboclub',
    category: 'travel',
    link: '/portfolio/treebo-club',
    tags: ['Hotels', 'Loyalty Program', 'Member Acquisition', 'Travel']
  },
  {
    id: 'gostops',
    title: 'GoStops',
    description: 'Backpacker hostel chain digital marketing and booking optimization.',
    imageName: 'Gostops',
    category: 'travel',
    link: '/portfolio/gostops',
    tags: ['Hostels', 'Backpacker', 'Booking Optimization', 'Youth Travel']
  },
  {
    id: 'hopper',
    title: 'Hopper',
    description: 'Travel prediction app user acquisition and retention strategy.',
    imageName: 'Hopper',
    category: 'travel',
    link: '/portfolio/hopper',
    tags: ['Travel App', 'Prediction', 'User Acquisition', 'Mobile Marketing']
  },
  {
    id: 'the-thekedar',
    title: 'The Thekedar',
    description: 'Travel and experience platform digital marketing and content strategy.',
    imageName: 'TheThekedar',
    category: 'travel',
    link: '/portfolio/the-thekedar',
    tags: ['Travel', 'Experiences', 'Content Marketing', 'Digital Platform']
  },
  // Healthcare & Wellness
  {
    id: 'doconline',
    title: 'DocOnline',
    description: 'Telemedicine platform user acquisition and healthcare digital marketing.',
    imageName: 'Doconline',
    category: 'healthcare',
    link: '/portfolio/doconline',
    tags: ['Telemedicine', 'Healthcare', 'User Acquisition', 'Digital Health']
  },
  {
    id: 'zava',
    title: 'Zava',
    description: 'Online healthcare platform digital marketing and patient acquisition.',
    imageName: 'Zava',
    category: 'healthcare',
    link: '/portfolio/zava',
    tags: ['Online Healthcare', 'Patient Acquisition', 'Digital Marketing', 'Telemedicine']
  },
  // Additional Tech/SaaS
  {
    id: 'ada',
    title: 'Ada',
    description: 'AI customer service platform enterprise marketing and lead generation.',
    imageName: 'ada',
    category: 'tech',
    link: '/portfolio/ada',
    tags: ['AI', 'Customer Service', 'Enterprise', 'SaaS']
  },
  {
    id: 'adda',
    title: 'Adda',
    description: 'Social platform digital marketing and user engagement strategy.',
    imageName: 'Adda',
    category: 'tech',
    link: '/portfolio/adda',
    tags: ['Social Platform', 'User Engagement', 'Digital Marketing', 'Community']
  },
  {
    id: 'myspace',
    title: 'MySpace',
    description: 'Social media platform revival marketing and user re-engagement.',
    imageName: 'Myspace',
    category: 'tech',
    link: '/portfolio/myspace',
    tags: ['Social Media', 'Platform Revival', 'User Engagement', 'Digital Marketing']
  },
  {
    id: 'doublej',
    title: 'DoubleJ',
    description: 'Creative agency digital presence and portfolio optimization.',
    imageName: 'Doublej',
    category: 'tech',
    link: '/portfolio/doublej',
    tags: ['Creative Agency', 'Portfolio', 'Digital Presence', 'Branding']
  },
  // Consulting & Professional Services
  {
    id: 'argus-partners',
    title: 'Argus Partners',
    description: 'Management consulting firm thought leadership and digital presence.',
    imageName: 'Arguspartners',
    category: 'legal',
    link: '/portfolio/argus-partners',
    tags: ['Consulting', 'Management', 'Thought Leadership', 'Professional Services']
  }
];

export const getImageUrl = (imageName: string): string => {
  // Map specific image names to actual portfolio files
  const imageMap: Record<string, string> = {
    'idesign': '/images/portfolio/Idesign-640.webp',
    'dental1': '/images/portfolio/dental1-640.webp',
    'Chumbak': '/images/portfolio/Chumbak-640.webp',
    'chumbak.jpg': '/images/portfolio/Chumbak-640.webp',
    'dentinics.jpg': '/images/portfolio/dental1-640.webp',
    'idesign.jpg': '/images/portfolio/Idesign-640.webp',
    'luxury-hotel.jpg': '/images/portfolio/Hines-640.webp',
    'tech-startup.jpg': '/images/portfolio/Chargebee-640.webp',
    'fashion-brand.jpg': '/images/portfolio/TheFrankieShop-640.webp',
    // Legal firms
    'AZB&partners': '/images/portfolio/AZB&partners-640.webp',
    'Khaitan&co': '/images/portfolio/Khaitan&co-640.webp',
    'Cliffordchance': '/images/portfolio/Cliffordchance-640.webp',
    'BakerMckenize': '/images/portfolio/BakerMckenize-640.webp',
    // Real Estate
    'Hines': '/images/portfolio/Hines-640.webp',
    'Rustomjee': '/images/portfolio/Rustomjee-640.webp',
    'Poddarhousing': '/images/portfolio/Poddarhousing-640.webp',
    // Finance & Fintech
    'Chargebee': '/images/portfolio/Chargebee-640.webp',
    'Scripbox': '/images/portfolio/Scripbox-640.webp',
    'Kuvera': '/images/portfolio/Kuvera-640.webp',
    // Healthcare
    'MediBuddy': '/images/portfolio/MediBuddy-640.webp',
    'Khealth': '/images/portfolio/Khealth-640.webp',
    'Qubehealth': '/images/portfolio/Qubehealth-640.webp',
    // E-commerce & Fashion
    'Jaypore': '/images/portfolio/Jaypore-640.webp',
    'TheFrankieShop': '/images/portfolio/TheFrankieShop-640.webp',
    // Travel & Hospitality
    'Klook': '/images/portfolio/Klook-640.webp',
    'Getyourguide': '/images/portfolio/Getyourguide-640.webp',
    'Savaari': '/images/portfolio/Savaari-640.webp',
    // Education & EdTech
    'Vedantu': '/images/portfolio/Vedantu-640.webp',
    'Cuemath': '/images/portfolio/Cuemath-640.webp',
    'Masterclass': '/images/portfolio/Masterclass-640.webp',
    // Technology & SaaS
    'Clickup': '/images/portfolio/Clickup-640.webp',
    'Hiver': '/images/portfolio/Hiver-640.webp',
    'moengage': '/images/portfolio/moengage-640.webp',
    'Airtable': '/images/portfolio/Airtable-640.webp',
    'Icertis': '/images/portfolio/Icertis-640.webp',
    'Classplus': '/images/portfolio/Classplus-640.webp',
    // Architecture & Design
    'ANDstudio': '/images/portfolio/ANDstudio-640.webp',
    'DesignForum': '/images/portfolio/DesignForum-640.webp',
    'StuidoArdete': '/images/portfolio/StuidoArdete-640.webp',
    'TDsmartinterior': '/images/portfolio/TDsmartinterior-640.webp',
    'Urbanscape': '/images/portfolio/Urbanscape-640.webp',
    // More Legal Firms
    'DLApiper': '/images/portfolio/DLApiper-640.webp',
    'LKS': '/images/portfolio/LKS-640.webp',
    'Nishtishdesai': '/images/portfolio/Nishtishdesai-640.webp',
    'ELP': '/images/portfolio/ELP-640.webp',
    // More Real Estate
    'Tridhaatu': '/images/portfolio/Tridhaatu-640.webp',
    'Bosaproperties': '/images/portfolio/Bosaproperties-640.webp',
    // More Finance & Fintech
    'Wealthsimple': '/images/portfolio/Wealthsimple-640.webp',
    'Stash': '/images/portfolio/Stash-640.webp',
    'Nutmeg': '/images/portfolio/Nutmeg-640.webp',
    'Cube': '/images/portfolio/Cube-640.webp',
    // More E-commerce & Fashion
    'Marineserre': '/images/portfolio/Marineserre-640.webp',
    'Wandler': '/images/portfolio/Wandler-640.webp',
    'Wolf&Badger': '/images/portfolio/Wolf&Badger-640.webp',
    'Third&urban': '/images/portfolio/Third&urban-640.webp',
    'Ka-sha': '/images/portfolio/Ka-sha-640.webp',
    'Khatie': '/images/portfolio/Khatie-640.webp',
    'Bloni': '/images/portfolio/Bloni-640.webp',
    'ThePostbox': '/images/portfolio/ThePostbox-640.webp',
    'NBNW': '/images/portfolio/NBNW-640.webp',
    'Brilliant': '/images/portfolio/Brilliant-640.webp',
    'Sculpt': '/images/portfolio/Sculpt-640.webp',
    // More Travel & Hospitality
    'Treeboclub': '/images/portfolio/Treeboclub-640.webp',
    'Gostops': '/images/portfolio/Gostops-640.webp',
    'Hopper': '/images/portfolio/Hopper-640.webp',
    'TheThekedar': '/images/portfolio/TheThekedar-640.webp',
    // Healthcare & Wellness
    'Doconline': '/images/portfolio/Doconline-640.webp',
    'Zava': '/images/portfolio/Zava-640.webp',
    // Additional Tech/SaaS
    'ada': '/images/portfolio/ada-640.webp',
    'Adda': '/images/portfolio/Adda-640.webp',
    'Myspace': '/images/portfolio/Myspace-640.webp',
    'Doublej': '/images/portfolio/Doublej-640.webp',
    // Consulting & Professional Services
    'Arguspartners': '/images/portfolio/Arguspartners-640.webp'
  };
  
  return imageMap[imageName] || `/images/portfolio/${imageName}-640.webp`;
};

export const getPlaceholderUrl = (imageName: string): string => {
  // Use a simple gradient placeholder for now
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNGY0NjU5O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3YzNhZWQ7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+Cjwvc3ZnPgo=';
};

export const getSrcSet = (imageName: string): string => {
  // Generate responsive srcset for portfolio images
  const imageMap: Record<string, string> = {
    'idesign': 'Idesign',
    'dental1': 'dental1', 
    'Chumbak': 'Chumbak',
    'chumbak.jpg': 'Chumbak',
    'dentinics.jpg': 'dental1',
    'idesign.jpg': 'Idesign',
    'luxury-hotel.jpg': 'Hines',
    'tech-startup.jpg': 'Chargebee',
    'fashion-brand.jpg': 'TheFrankieShop',
    // Direct mappings for new projects
    'AZB&partners': 'AZB&partners',
    'Khaitan&co': 'Khaitan&co',
    'Cliffordchance': 'Cliffordchance',
    'BakerMckenize': 'BakerMckenize',
    'Hines': 'Hines',
    'Rustomjee': 'Rustomjee',
    'Poddarhousing': 'Poddarhousing',
    'Chargebee': 'Chargebee',
    'Scripbox': 'Scripbox',
    'Kuvera': 'Kuvera',
    'MediBuddy': 'MediBuddy',
    'Khealth': 'Khealth',
    'Qubehealth': 'Qubehealth',
    'Jaypore': 'Jaypore',
    'TheFrankieShop': 'TheFrankieShop',
    'Klook': 'Klook',
    'Getyourguide': 'Getyourguide',
    'Savaari': 'Savaari',
    'Vedantu': 'Vedantu',
    'Cuemath': 'Cuemath',
    'Masterclass': 'Masterclass',
    'Clickup': 'Clickup',
    'Hiver': 'Hiver',
    'moengage': 'moengage',
    'Airtable': 'Airtable',
    'Icertis': 'Icertis',
    'Classplus': 'Classplus',
    'ANDstudio': 'ANDstudio',
    'DesignForum': 'DesignForum',
    'StuidoArdete': 'StuidoArdete',
    'TDsmartinterior': 'TDsmartinterior',
    'Urbanscape': 'Urbanscape',
    'DLApiper': 'DLApiper',
    'LKS': 'LKS',
    'Nishtishdesai': 'Nishtishdesai',
    'ELP': 'ELP',
    'Tridhaatu': 'Tridhaatu',
    'Bosaproperties': 'Bosaproperties',
    'Wealthsimple': 'Wealthsimple',
    'Stash': 'Stash',
    'Nutmeg': 'Nutmeg',
    'Cube': 'Cube',
    'Marineserre': 'Marineserre',
    'Wandler': 'Wandler',
    'Wolf&Badger': 'Wolf&Badger',
    'Third&urban': 'Third&urban',
    'Ka-sha': 'Ka-sha',
    'Khatie': 'Khatie',
    'Bloni': 'Bloni',
    'ThePostbox': 'ThePostbox',
    'NBNW': 'NBNW',
    'Brilliant': 'Brilliant',
    'Sculpt': 'Sculpt',
    'Treeboclub': 'Treeboclub',
    'Gostops': 'Gostops',
    'Hopper': 'Hopper',
    'TheThekedar': 'TheThekedar',
    'Doconline': 'Doconline',
    'Zava': 'Zava',
    'ada': 'ada',
    'Adda': 'Adda',
    'Myspace': 'Myspace',
    'Doublej': 'Doublej',
    'Arguspartners': 'Arguspartners'
  };
  
  const baseName = imageMap[imageName] || imageName.replace(/\.(jpg|jpeg|png)$/, '');
  
  return [
    `/images/portfolio/${baseName}-320.webp 320w`,
    `/images/portfolio/${baseName}-640.webp 640w`,
    `/images/portfolio/${baseName}-768.webp 768w`,
    `/images/portfolio/${baseName}-1024.webp 1024w`
  ].join(', ');
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(projects.map(project => project.category))];
};

