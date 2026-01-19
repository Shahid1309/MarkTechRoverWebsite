import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  TrendingUp, 
  Search, 
  BarChart3, 
  Users, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Star,
  Award,
  Clock,
  Brain,
  Code,
  Globe,
  MessageSquare,
  FileText,
  Settings,
  Monitor,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Rocket,
  Lightbulb,
  ChevronDown,
  Play,
  ExternalLink,
  Calendar,
  DollarSign,
  Percent,
  Users2,
  BarChart,
  PieChart,
  Activity,
  PenTool,
  Palette,
  Cpu,
  ShoppingCart,
  BookOpen,
  Eye,
  MousePointer,
  Layers,
  GitBranch,
  Wrench,
  AlertCircle,
  ThumbsUp,
  Heart,
  Trophy,
  Medal,
  Crown,
  Sparkles,
  Infinity,
  Lock,
  Unlock,
  RefreshCw,
  RotateCcw,
  Maximize2,
  Minimize2,
  Plus,
  Minus,
  X,
  Menu,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Slack,
  Figma,
  Chrome,
  Apple,
  Megaphone,
  Share2,
  Video,
  Image,
  Grid,
  List,
  Download,
  Upload,
  Edit,
  Trash2,
  Copy,
  Filter,
  Tag
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const DigitalMarketingServices = () => {
  const [activeSection, setActiveSection] = useState('deliverables');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedDeliverable, setExpandedDeliverable] = useState<number>(0);
  const [pageReady, setPageReady] = useState(false);
  const [revealStats, setRevealStats] = useState(false);
  const [revealWhy, setRevealWhy] = useState(false);
  const [revealDeliverables, setRevealDeliverables] = useState(false);
  const [revealTechnology, setRevealTechnology] = useState(false);
  const [revealCaseStudies, setRevealCaseStudies] = useState(false);
  const [revealApproach, setRevealApproach] = useState(false);
  const [revealFaqs, setRevealFaqs] = useState(false);
  const [revealCta, setRevealCta] = useState(false);

  // Animated counters for hero stats
  const [countClients, setCountClients] = useState(0);
  const [countCampaigns, setCountCampaigns] = useState(0);
  const [countRoi, setCountRoi] = useState(0);
  const [countRevenue, setCountRevenue] = useState(0);

  const refWhy = useRef<HTMLDivElement>(null);
  const refStats = useRef<HTMLDivElement>(null);
  const refDeliverables = useRef<HTMLDivElement>(null);
  const refTechnology = useRef<HTMLDivElement>(null);
  const refCaseStudies = useRef<HTMLDivElement>(null);
  const refApproach = useRef<HTMLDivElement>(null);
  const refFaqs = useRef<HTMLDivElement>(null);
  const refCta = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },{ id: 'technology', label: 'Digital Marketing Technology', icon: <Cpu className="h-4 w-4" /> },
    { id: 'case-studies', label: 'Digital Marketing Case Studies', icon: <Trophy className="h-4 w-4" /> },
    { id: 'approach', label: 'Digital Marketing Approach', icon: <Rocket className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  // Handle scroll for sticky navigation and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 800;
      setIsNavSticky(scrollPosition > heroHeight);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mount animation for page (prevents blank screen while still animating in)
  useEffect(() => {
    const t = setTimeout(() => setPageReady(true), 30);
    return () => clearTimeout(t);
  }, []);

  // Section reveal on scroll
  useEffect(() => {
    const makeObserver = (cb: () => void) =>
      new IntersectionObserver(
        ([entry], obs) => {
          if (entry.isIntersecting) {
            cb();
            obs.disconnect();
          }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
      );

    const observers: IntersectionObserver[] = [];
    const pairs: Array<[React.RefObject<HTMLDivElement>, React.Dispatch<React.SetStateAction<boolean>>]> = [
      [refStats, setRevealStats],
      [refWhy, setRevealWhy],
      [refDeliverables, setRevealDeliverables],
      [refTechnology, setRevealTechnology],
      [refCaseStudies, setRevealCaseStudies],
      [refApproach, setRevealApproach],
      [refFaqs, setRevealFaqs],
      [refCta, setRevealCta]
    ];

    pairs.forEach(([ref, setter]) => {
      if (ref.current) {
        const obs = makeObserver(() => setter(true));
        obs.observe(ref.current);
        observers.push(obs);
      }
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Animate numbers when stats become visible
  useEffect(() => {
    if (!revealStats) return;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const animate = (
      duration: number,
      update: (progress: number) => void,
      done?: () => void
    ) => {
      const start = performance.now();
      const frame = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(1, elapsed / duration);
        update(easeOutCubic(progress));
        if (progress < 1) requestAnimationFrame(frame);
        else done && done();
      };
      requestAnimationFrame(frame);
    };

    animate(1200, (p) => {
      setCountClients(Math.round(500 * p));
      setCountCampaigns(Math.round(1000 * p));
      setCountRoi(Math.round(300 * p));
      setCountRevenue(Math.round(3021182299 * p));
    });
  }, [revealStats]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const seoConfig = {
    title: 'Digital Marketing Services Delhi | Best Digital Marketing Company NCR',
    description: 'Leading digital marketing services in Delhi NCR. Best digital marketing company in Delhi offering comprehensive digital marketing solutions. Professional digital marketing services India with proven results.',
    keywords: [
      'Digital Marketing Services Delhi', 'Best digital marketing company in Delhi', 'Digital marketing services NCR', 'Best digital marketing services in India', 'Professional digital marketing services India', 'Digital marketing experts in Delhi NCR', 'Digital marketing company India', 'SEO services in Delhi', 'PPC services Delhi', 'Social media marketing Delhi'
    ],
    image: '/images/google-ads-1024.webp',
    url: '/services/digital-marketing',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'Ritik Kumar Poddar',
    section: 'Digital Marketing Services',
    tags: ['Digital Marketing', 'SEO', 'PPC', 'Social Media Marketing', 'Content Marketing', 'Email Marketing']
  };

  const deliverables = [
    {
      id: 1,
      title: 'Search Engine Optimization (SEO)',
      description: 'Comprehensive SEO strategies to improve your website\'s visibility in search engines',
      icon: <Search className="h-8 w-8 text-blue-500" />,
      features: [
        'Keyword research and optimization',
        'On-page SEO optimization',
        'Technical SEO audit and fixes',
        'Content optimization',
        'Link building strategies',
        'Local SEO optimization',
        'SEO performance tracking',
        'Monthly SEO reports'
      ],
      duration: '3-6 months'
    },
    {
      id: 2,
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Targeted PPC campaigns to drive immediate traffic and conversions',
      icon: <Target className="h-8 w-8 text-red-500" />,
      features: [
        'Google Ads campaign setup',
        'Facebook & Instagram ads',
        'Keyword research and selection',
        'Ad copy creation and optimization',
        'Landing page optimization',
        'Bid management and optimization',
        'Performance tracking and reporting',
        'ROI optimization'
      ],
      duration: '1-2 months'
    },
    {
      id: 3,
      title: 'Social Media Marketing',
      description: 'Strategic social media management to build brand awareness and engagement',
      icon: <Share2 className="h-8 w-8 text-purple-500" />,
      features: [
        'Social media strategy development',
        'Content creation and curation',
        'Community management',
        'Paid social media advertising',
        'Influencer partnerships',
        'Social media analytics',
        'Brand monitoring',
        'Crisis management'
      ],
      duration: 'Ongoing'
    },
    {
      id: 4,
      title: 'Content Marketing',
      description: 'High-quality content creation to attract and engage your target audience',
      icon: <FileText className="h-8 w-8 text-green-500" />,
      features: [
        'Content strategy development',
        'Blog post creation',
        'Infographic design',
        'Video content production',
        'Email newsletter creation',
        'Content distribution',
        'Content performance tracking',
        'SEO-optimized content'
      ],
      duration: 'Ongoing'
    },
    {
      id: 5,
      title: 'Email Marketing',
      description: 'Targeted email campaigns to nurture leads and drive conversions',
      icon: <Mail className="h-8 w-8 text-orange-500" />,
      features: [
        'Email list building',
        'Campaign design and creation',
        'Automation workflows',
        'A/B testing',
        'Segmentation strategies',
        'Performance analytics',
        'Compliance management',
        'ROI tracking'
      ],
      duration: '1-2 months'
    },
    {
      id: 6,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting to track performance and optimize campaigns',
      icon: <BarChart3 className="h-8 w-8 text-indigo-500" />,
      features: [
        'Google Analytics setup',
        'Conversion tracking',
        'Custom dashboard creation',
        'Monthly performance reports',
        'ROI analysis',
        'Competitor analysis',
        'Recommendations and insights',
        'Goal tracking and optimization'
      ],
      duration: 'Ongoing'
    }
  ];

  

  const technologies = [
    {
      name: 'Google Marketing Platform',
      description: 'Comprehensive suite for search, display, and video advertising',
      icon: <Chrome className="h-6 w-6" />,
      features: ['Google Ads', 'Google Analytics', 'Google Tag Manager', 'Google Data Studio']
    },
    {
      name: 'Social Media Platforms',
      description: 'Multi-platform social media management and advertising',
      icon: <Share2 className="h-6 w-6" />,
      features: ['Facebook Ads Manager', 'Instagram Business', 'LinkedIn Campaign Manager', 'Twitter Ads']
    },
    {
      name: 'SEO Tools',
      description: 'Advanced SEO tools for keyword research and optimization',
      icon: <Search className="h-6 w-6" />,
      features: ['Ahrefs', 'SEMrush', 'Moz Pro', 'Google Search Console']
    },
    {
      name: 'Email Marketing',
      description: 'Professional email marketing and automation platforms',
      icon: <Mail className="h-6 w-6" />,
      features: ['Mailchimp', 'ConvertKit', 'ActiveCampaign', 'HubSpot']
    },
    {
      name: 'Analytics & Reporting',
      description: 'Advanced analytics and reporting tools for performance tracking',
      icon: <BarChart3 className="h-6 w-6" />,
      features: ['Google Analytics 4', 'Hotjar', 'Crazy Egg', 'Mixpanel']
    },
    {
      name: 'Content Management',
      description: 'Tools for content creation, management, and optimization',
      icon: <FileText className="h-6 w-6" />,
      features: ['WordPress', 'HubSpot CMS', 'Contentful', 'Canva Pro']
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Growth Campaign',
      client: 'Fashion Retailer',
      results: {
        revenue: '300% increase',
        traffic: '250% increase',
        conversions: '180% increase'
      },
      description: 'Comprehensive digital marketing campaign for an e-commerce fashion retailer'
    },
    {
      title: 'B2B Lead Generation',
      client: 'Software Company',
      results: {
        leads: '400% increase',
        qualified_leads: '280% increase',
        cost_per_lead: '45% decrease'
      },
      description: 'Targeted B2B marketing campaign for a software solutions company'
    },
    {
      title: 'Local Business Expansion',
      client: 'Restaurant Chain',
      results: {
        foot_traffic: '200% increase',
        online_orders: '350% increase',
        brand_awareness: '180% increase'
      },
      description: 'Local SEO and social media campaign for a restaurant chain'
    }
  ];

  const approach = [
    {
      step: 1,
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business, goals, and current digital presence',
      icon: <Search className="h-6 w-6" />,
      details: [
        'Business analysis and goal setting',
        'Competitor research and analysis',
        'Current digital presence audit',
        'Target audience identification',
        'Market opportunity assessment'
      ]
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Based on our analysis, we create a comprehensive digital marketing strategy',
      icon: <Target className="h-6 w-6" />,
      details: [
        'Channel selection and prioritization',
        'Content strategy development',
        'Budget allocation and planning',
        'Timeline and milestone setting',
        'Success metrics definition'
      ]
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'We execute the strategy across all selected digital marketing channels',
      icon: <Rocket className="h-6 w-6" />,
      details: [
        'SEO optimization and implementation',
        'PPC campaign setup and launch',
        'Social media presence establishment',
        'Content creation and publishing',
        'Email marketing setup'
      ]
    },
    {
      step: 4,
      title: 'Optimization',
      description: 'Continuous monitoring and optimization to improve performance',
      icon: <TrendingUp className="h-6 w-6" />,
      details: [
        'Performance monitoring and analysis',
        'A/B testing and optimization',
        'Budget and bid management',
        'Content optimization',
        'Strategy refinement'
      ]
    },
    {
      step: 5,
      title: 'Reporting & Growth',
      description: 'Regular reporting and strategic planning for continued growth',
      icon: <BarChart3 className="h-6 w-6" />,
      details: [
        'Monthly performance reports',
        'ROI analysis and insights',
        'Growth opportunity identification',
        'Strategy adjustments',
        'Long-term planning'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to see results from digital marketing?',
      answer: 'Results vary by channel and strategy. SEO typically takes 3-6 months for significant results, while PPC can show immediate results. Social media and content marketing build over time, usually showing measurable results within 2-3 months.'
    },
    {
      question: 'What is the minimum budget for digital marketing services?',
      answer: 'Our starter package begins at ₹35,000 per month, which includes basic SEO, PPC management with ₹10,000 ad spend, and social media management. We can customize packages based on your specific needs and budget.'
    },
    {
      question: 'Do you work with businesses outside of Delhi NCR?',
      answer: 'Yes, we work with businesses across India and internationally. Our digital marketing services are not limited by geography, and we can effectively manage campaigns for businesses in any location.'
    },
    {
      question: 'How do you measure the success of digital marketing campaigns?',
      answer: 'We use various metrics including website traffic, conversion rates, lead generation, ROI, engagement rates, and brand awareness. We provide detailed monthly reports with actionable insights and recommendations.'
    },
    {
      question: 'Can you help with both B2B and B2C digital marketing?',
      answer: 'Absolutely! We have extensive experience in both B2B and B2C digital marketing. Our strategies are tailored to your specific business model, target audience, and industry requirements.'
    },
    {
      question: 'What makes your digital marketing services different?',
      answer: 'We combine data-driven strategies with creative execution, provide transparent reporting, offer personalized service, and focus on measurable ROI. Our team stays updated with the latest digital marketing trends and technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 via-purple-950 via-purple-900 to-purple-900">
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-500 ${pageReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}> 
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Animated Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 transition-all duration-1000">
                <Target className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Animated Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000">
              Hire Full Service Digital Marketing Agency
            </h1>

            {/* Animated Description */}
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300">
              Built in Delhi NCR for Indian markets. We blend AI insights with full‑funnel execution across SEO, PPC, Social, and CRO—focused on qualified leads, lower CPL, and measurable ROI for fast‑moving Indian businesses.
            </p>
            
            {/* Interactive Stats Row */}
            <div ref={refStats} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-500">
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  {countClients.toLocaleString('en-IN')}+
                </div>
                <div className="text-gray-300 font-semibold text-sm">Happy Clients</div>
                <div className="text-gray-500 text-xs">Across India</div>
                <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  {countCampaigns.toLocaleString('en-IN')}+
                </div>
                <div className="text-gray-300 font-semibold text-sm">Successful Campaigns</div>
                <div className="text-gray-500 text-xs">Delivered</div>
                <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  {countRoi}%
                </div>
                <div className="text-gray-300 font-semibold text-sm">Average ROI</div>
                <div className="text-gray-500 text-xs">For Our Clients</div>
                <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  ₹{countRevenue.toLocaleString('en-IN')}
                </div>
                <div className="text-gray-300 font-semibold text-sm">Revenue Driven</div>
                <div className="text-gray-500 text-xs">For Our Clients</div>
                <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 transition-all duration-1000 delay-700">
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">Google Partner</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300 text-sm">Certified Agency</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">5+ Years Experience</span>
              </div>
            </div>
            
            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Get Free Digital Marketing Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <button
                onClick={() => scrollToSection()}
                className="group inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-500/20 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">View Packages</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Floating Action Button */}
            <div className="mt-8 transition-all duration-1000 delay-1200">
              <button className="group inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-700/50">
                <Play className="h-4 w-4" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </section>

      {/* Why MarkTech Is Better */}
      <section ref={refCaseStudies} className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${revealCaseStudies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
              Why MarkTechRover
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why MarkTech is Better Than Any Other Agency</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Built for India’s speed and scale: faster GTM, lower CPL, and transparent ROI with executive‑ready dashboards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/10 to-purple-800/10 border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-2">Revenue Accountability</h3>
              <p className="text-gray-300 text-sm">Track pipeline, revenue, and CAC across SEO, PPC, and Social — not just traffic.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/10 to-purple-800/10 border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-2">LLM‑Aided Decisions</h3>
              <p className="text-gray-300 text-sm">AI‑assisted research, copy, and testing help reduce time‑to‑value while improving performance.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/10 to-purple-800/10 border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-2">Enterprise‑Grade Governance</h3>
              <p className="text-gray-300 text-sm">Change control and brand safeguards ensure quality at scale across channels and markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Sticky Sub Menu */}
      <div className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isNavSticky 
          ? 'top-32 opacity-100 scale-100' 
          : 'top-0 opacity-0 scale-95 pointer-events-none'
      }`}>
        {/* Floating Background Element */}
        <div className="relative">
          {/* Animated Background Ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 rounded-full"></div>
          
          {/* Main Navigation Container */}
          <div className="relative bg-black/20 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-2xl shadow-purple-500/20">
            <nav className="flex items-center space-x-1 px-6 py-3 overflow-x-auto flex-nowrap">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    activeSection === item.id
                      ? 'text-purple-300 bg-gradient-to-r from-purple-500/30 to-purple-400/30 border border-purple-400/50 shadow-lg shadow-purple-500/25' 
                      : 'text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/20 to-purple-400/20 hover:border-purple-300/30'
                  } px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg whitespace-nowrap flex-shrink-0`}
                >
                  {item.icon}
                  <span className="hidden sm:inline whitespace-nowrap">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
          
          {/* Floating Decorative Elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>

      {/* Why MarkTechRover Delhi NCR */}
      <section ref={refWhy} className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${revealWhy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
              <Trophy className="h-4 w-4 mr-2" />
              Why MarkTechRover Delhi NCR
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Performance Marketing, Built For India</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Faster GTM cycles, cost‑efficient lead gen, and full‑funnel analytics—tuned for Indian demand and decision cycles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <BarChart className="h-5 w-5" />, title: 'ROI Tracking', desc: 'Dashboards that connect channels to pipeline, revenue, and CAC.' },
              { icon: <Megaphone className="h-5 w-5" />, title: 'Omnichannel Execution', desc: 'SEO, PPC, Social, and CRO working together—not in silos.' },
              { icon: <Cpu className="h-5 w-5" />, title: 'AI‑Aided Decisions', desc: 'LLM‑assisted research, copy, and tests to reduce time‑to‑value.' },
            ].map((card, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-purple-400/30">
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl transition-all duration-500 group-hover:translate-y-6" />
                <div className="flex items-center space-x-3 mb-3 text-purple-300">
                  {card.icon}
                  <h3 className="text-white font-semibold">{card.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Deliverables Section */}
      <section ref={refDeliverables} id="deliverables" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${revealDeliverables ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Deliverables: What You Get Each Month
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth, 
              increase visibility, and maximize your return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div
                key={deliverable.id}
                className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  expandedDeliverable === index ? 'ring-2 ring-purple-500 shadow-lg shadow-purple-500/25' : ''
                }`}
                onClick={() => setExpandedDeliverable(index)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/30">
                    {deliverable.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{deliverable.title}</h3>
                    <p className="text-purple-300 text-sm">{deliverable.duration}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{deliverable.description}</p>
                
                <div className="space-y-3 mb-6">
                  {deliverable.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Technology Section */}
      <section ref={refTechnology} id="technology" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${revealTechnology ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Marketing Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge tools and platforms to deliver exceptional results 
              and provide comprehensive insights into your digital marketing performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/30">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{tech.description}</p>
                
                <div className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={refCaseStudies} id="case-studies" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${revealCaseStudies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Marketing Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real clients. See how our digital marketing strategies 
              have transformed businesses across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-purple-400 font-semibold">{study.client}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-400 capitalize">{key.replace('_', ' ')}</span>
                      <span className="text-purple-400 font-bold">{value}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section ref={refApproach} id="approach" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${revealApproach ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Digital Marketing Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 5-step process that ensures your digital marketing success 
              and delivers measurable results for your business.
            </p>
          </div>

          <div className="space-y-12">
            {approach.map((step, index) => (
              <div key={step.step} className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/25">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg">{step.description}</p>
                  
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center border border-purple-500/30 shadow-lg shadow-purple-500/25">
                    <div className="p-6 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-full">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section ref={refFaqs} id="faqs" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${revealFaqs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to the most common questions about our digital marketing services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={refCta} className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${revealCta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-purple-500/20 rounded-3xl p-12 border border-purple-500/30 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our digital marketing services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:from-purple-500 hover:to-purple-400"
              >
                Get Free Consultation
              </Link>
              <button className="border-2 border-purple-500/50 text-purple-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingServices;