import React, { useState, useEffect } from 'react';
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
  Pause,
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
  AlertTriangle,
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
  Mail as MailIcon,
  Smartphone as MobileIcon,
  Building2,
  Network,
  Briefcase
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const EnterprisePPC = () => {
  const [activeSection, setActiveSection] = useState('deliverables');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedDeliverable, setExpandedDeliverable] = useState<number>(0);
  const [activeApproachStep, setActiveApproachStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set([0]));
  const [faqSearchTerm, setFaqSearchTerm] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState('all');
  const [heroAnimationComplete, setHeroAnimationComplete] = useState(false);
  const [statsCount, setStatsCount] = useState({ clients: 0, revenue: 0, awards: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showTrustBadges, setShowTrustBadges] = useState(false);

  const navItems = [
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'technology', label: 'Enterprise PPC Technology', icon: <Cpu className="h-4 w-4" /> },
    { id: 'case-studies', label: 'Enterprise PPC Case Studies', icon: <Trophy className="h-4 w-4" /> },
    { id: 'approach', label: 'Enterprise PPC Approach', icon: <Rocket className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  // Handle scroll for sticky navigation and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 800;
      setIsNavSticky(scrollPosition > heroHeight);

      // Detect active section based on scroll position
      const sections = ['deliverables', 'technology', 'case-studies', 'approach', 'faqs'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      let currentSection = 'deliverables';
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150;
          
          if (rect.top <= offset && rect.bottom > offset) {
            currentSection = sections[index];
        }
        }
      });
      
        setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play functionality for approach steps
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveApproachStep((prev) => (prev + 1) % 5);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  // Hero animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimationComplete(true);
    }, 500);

    const statsInterval = setInterval(() => {
      setStatsCount(prev => ({
        clients: prev.clients < 250 ? prev.clients + 5 : 250,
        revenue: prev.revenue < 95 ? prev.revenue + 1 : 95,
        awards: prev.awards < 42 ? prev.awards + 1 : 42
      }));
    }, 50);

    const trustTimer = setTimeout(() => {
      setShowTrustBadges(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(statsInterval);
      clearTimeout(trustTimer);
    };
  }, []);

  // Section reveal animations
  useEffect(() => {
    const sectionIds = ['deliverables', 'technology', 'case-studies', 'approach', 'faqs'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(8px)';
        el.style.transition = 'opacity 700ms ease, transform 700ms ease';
      }
    });

    const makeObserver = () =>
      new IntersectionObserver(
        ([entry], obs) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            obs.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
      );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = makeObserver();
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const expandAllFaqs = () => {
    setExpandedFaqs(new Set(faqs.map((_, index) => index)));
  };

  const collapseAllFaqs = () => {
    setExpandedFaqs(new Set());
  };

  const seoConfig = {
    title: 'Enterprise PPC Management Services Delhi | Best Enterprise PPC Agency NCR',
    description: 'Leading enterprise PPC management services in Delhi NCR. Best enterprise PPC agency in Delhi offering comprehensive PPC management. Professional enterprise PPC services India with proven results.',
    keywords: [
      'Enterprise PPC Management Delhi', 'Best enterprise PPC agency in Delhi', 'Enterprise PPC services NCR', 'Best enterprise PPC services in India', 'Professional enterprise PPC services India', 'Enterprise PPC experts in Delhi NCR', 'Enterprise PPC company India', 'SEO services in Delhi', 'PPC management Delhi', 'Enterprise advertising India'
    ],
    url: '/services/seo-lead-generation/enterprise-ppc',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'Ritik Kumar Poddar',
    section: 'Enterprise PPC Management',
    tags: ['Enterprise PPC', 'PPC Management', 'Enterprise Advertising', 'Google Ads', 'PPC Optimization'],
    image: '/images/enterprise-ppc.webp'
  };

  const deliverables = [
    {
      title: 'Enterprise Search Campaign Management',
      description: 'Comprehensive management of enterprise-level Google Ads and Microsoft Advertising search campaigns. We create sophisticated campaign structures, manage large keyword portfolios, and optimize for maximum ROI across multiple business units and product lines.',
      icon: <Search className="h-6 w-6" />
    },
    {
      title: 'Enterprise Display & Video Advertising',
      description: 'Strategic display and video advertising campaigns across Google Display Network, YouTube, and programmatic platforms. We manage large-scale brand awareness campaigns, retargeting strategies, and video ad placements for enterprise visibility.',
      icon: <Video className="h-6 w-6" />
    },
    {
      title: 'Multi-Channel PPC Strategy',
      description: 'Coordinated PPC campaigns across Google Ads, Microsoft Advertising, LinkedIn Ads, and specialized B2B platforms. We ensure consistent messaging, unified tracking, and optimal budget allocation across all channels.',
      icon: <Network className="h-6 w-6" />
    },
    {
      title: 'Enterprise Bid Management & Automation',
      description: 'Advanced bid management using automated bidding strategies, portfolio bid management, and machine learning optimization. We implement sophisticated bid strategies that scale across thousands of keywords and campaigns.',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: 'Enterprise Account Structure & Organization',
      description: 'Strategic account architecture for enterprise clients with multiple brands, products, or regions. We design scalable campaign structures, implement naming conventions, and organize accounts for maximum efficiency and performance.',
      icon: <Layers className="h-6 w-6" />
    },
    {
      title: 'Enterprise Conversion Tracking & Attribution',
      description: 'Comprehensive conversion tracking setup including enhanced conversions, offline conversion tracking, and multi-touch attribution modeling. We provide enterprise-level analytics that connect PPC performance to revenue and business outcomes.',
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: 'Enterprise Landing Page Strategy',
      description: 'Conversion-focused landing page strategies for enterprise PPC campaigns. We optimize landing pages, implement personalization, and create dedicated landing page experiences that maximize conversion rates for enterprise traffic.',
      icon: <MousePointer className="h-6 w-6" />
    },
    {
      title: 'Enterprise Budget Management & Scaling',
      description: 'Strategic budget allocation and scaling strategies for enterprise accounts. We optimize budget distribution across campaigns, channels, and business units, and identify scaling opportunities that maximize revenue growth.',
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: 'Enterprise A/B Testing & Experimentation',
      description: 'Systematic A/B testing of ad creatives, landing pages, and bidding strategies at enterprise scale. We run large-scale experiments, analyze results, and implement winning strategies across all campaigns.',
      icon: <Activity className="h-6 w-6" />
    },
    {
      title: 'Enterprise Reporting & Analytics',
      description: 'Comprehensive reporting and analytics dashboards for enterprise stakeholders. We provide executive-level reports, detailed performance analytics, and actionable insights that drive strategic decision-making.',
      icon: <BarChart className="h-6 w-6" />
    }
  ];


  const technologyFeatures = [
    {
      title: 'Real-Time Enterprise PPC Monitoring',
      description: 'Track your enterprise ad performance across all platforms—updated in real-time with enterprise-level insights.',
      icon: <Activity className="h-8 w-8" />
    },
    {
      title: 'AI-Powered Enterprise Bid Optimization',
      description: 'Discover high-value enterprise opportunities and optimize bids automatically across thousands of keywords.',
      icon: <Brain className="h-8 w-8" />
    },
    {
      title: 'Enterprise Competitor Intelligence',
      description: 'Benchmark against enterprise competitors in Delhi, NCR, and all of India with advanced competitive analysis.',
      icon: <Eye className="h-8 w-8" />
    },
    {
      title: 'Automated Enterprise Optimization',
      description: 'Proactive campaign adjustments and alerts—never miss optimization opportunities at enterprise scale.',
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Enterprise Performance Dashboards',
      description: 'Access all enterprise analytics, conversions, revenue, and growth metrics anytime with executive-level dashboards.',
      icon: <BarChart className="h-8 w-8" />
    }
  ];

  const caseStudies = [
    {
      title: 'Enterprise Brand Achieves 450% ROI',
      description: 'With Marktechrover\'s enterprise PPC strategy, a Fortune 500 company achieved 450% ROI through multi-channel campaigns—results that brought in ₹200+ crores in revenue within twelve months.',
      metric: '450% ROI',
      timeframe: '12 Months'
    },
    {
      title: 'NCR-Based Enterprise Firm Dominates Search',
      description: 'We helped a large enterprise business go from zero to market leader in NCR\'s B2B space. The blend of Search, Display, and LinkedIn campaigns brought in enterprise-level leads—beyond expectations.',
      metric: 'Enterprise Leads',
      timeframe: 'Market Dominance'
    },
    {
      title: 'Pan-India Enterprise Expands Globally',
      description: 'We enabled a pan-India enterprise to expand globally through strategic PPC campaigns. Our multi-platform strategy drove international reach and conversions.',
      metric: 'Global Expansion',
      timeframe: 'Ongoing Growth'
    }
  ];

  const approachSteps = [
    {
      step: 'Step 1: Enterprise PPC Strategy & Audit',
      description: 'Understand your enterprise goals, current PPC performance, and competitive landscape.',
      detailedDescription: 'We conduct a comprehensive analysis of your current enterprise PPC performance, competitor strategies, and market opportunities. This includes enterprise account audit, campaign performance analysis, and competitive intelligence.',
      icon: <Search className="h-6 w-6" />,
      duration: '2-3 weeks',
      deliverables: ['Enterprise PPC Audit', 'Competitor Analysis', 'Account Structure Review', 'Campaign Strategy'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/20 to-blue-600/20'
    },
    {
      step: 'Step 2: Custom Enterprise Roadmap',
      description: 'No generic plans—only tailored, goal-oriented enterprise PPC strategies.',
      detailedDescription: 'Based on our audit findings, we create a personalized enterprise PPC roadmap that aligns with your business objectives. This includes enterprise campaign structure, budget allocation, and timeline projections.',
      icon: <Target className="h-6 w-6" />,
      duration: '1-2 weeks',
      deliverables: ['Custom Enterprise PPC Strategy', 'Campaign Architecture', 'Budget Plan', 'Timeline Projections'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20'
    },
    {
      step: 'Step 3: Enterprise Campaign Launch',
      description: 'Search, Display, Video, and LinkedIn campaigns delivered together at enterprise scale.',
      detailedDescription: 'Our comprehensive execution covers all aspects of enterprise PPC simultaneously. We set up search campaigns, create display ads, implement video advertising, and launch LinkedIn campaigns.',
      icon: <Layers className="h-6 w-6" />,
      duration: 'Ongoing',
      deliverables: ['Search Campaigns', 'Display & Video Ads', 'LinkedIn Campaigns', 'Multi-Channel Setup'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/20 to-green-600/20'
    },
    {
      step: 'Step 4: Ongoing Enterprise Optimization',
      description: 'Weekly calls, proactive reporting, and constant adaptation to market changes.',
      detailedDescription: 'We continuously monitor your enterprise campaigns, optimize based on performance data, and adapt to market changes. Regular strategy reviews ensure we stay ahead of the competition.',
      icon: <RefreshCw className="h-6 w-6" />,
      duration: 'Weekly',
      deliverables: ['Performance Monitoring', 'Bid Optimization', 'Budget Optimization', 'Creative Testing'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/20 to-orange-600/20'
    },
    {
      step: 'Step 5: Reporting With Accountability',
      description: 'Clear dashboards and open communication—you always know your ROI.',
      detailedDescription: 'Transparent reporting with actionable insights. We provide detailed analytics, conversion tracking, and ROI measurement to ensure you understand the value of our work.',
      icon: <BarChart3 className="h-6 w-6" />,
      duration: 'Monthly',
      deliverables: ['Performance Dashboards', 'ROI Analysis', 'Conversion Tracking', 'Actionable Insights'],
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-500/20 to-red-600/20'
    }
  ];

  const faqs = [
    {
      question: 'How soon will I see enterprise PPC results?',
      answer: 'Expect to see initial enterprise PPC results within 2-3 weeks for most campaigns, with significant improvements in traffic, conversions, and ROI achieved within 4-6 months. The biggest gains come from committed enterprise clients with sustained monthly optimization.',
      category: 'timeline',
      tags: ['results', 'timeline', 'performance']
    },
    {
      question: 'Is all work original and platform-compliant for enterprise?',
      answer: 'Yes! All enterprise ad creatives and strategies are created by our team and follow Google, Microsoft, LinkedIn, and other platform best practices for safety and long-term enterprise success.',
      category: 'safety',
      tags: ['compliance', 'safety', 'platforms']
    },
    {
      question: 'Which enterprise PPC plan should I pick?',
      answer: 'Pick an enterprise PPC plan that matches your company size and growth goals, or ask for a free, custom enterprise audit and recommendation from our team.',
      category: 'pricing',
      tags: ['pricing', 'selection']
    },
    {
      question: 'Can I scale my enterprise PPC package later?',
      answer: 'Absolutely. Our enterprise PPC packages are flexible—upgrade or customize at any time as your business grows and you add more products or regions.',
      category: 'pricing',
      tags: ['scaling', 'flexibility', 'upgrades']
    },
    {
      question: 'What\'s included in enterprise PPC reporting?',
      answer: 'You\'ll get interactive dashboards, campaign performance reports, conversion tracking, and ROI analysis every month, specifically focused on enterprise metrics and business outcomes.',
      category: 'reporting',
      tags: ['analytics', 'reports', 'tracking']
    },
    {
      question: 'Do you work with enterprise businesses outside Delhi NCR?',
      answer: 'Yes, we serve enterprise clients globally. While we\'re based in Delhi, NCR, our enterprise PPC strategies work for businesses worldwide, with specialized optimization for Indian and international markets.',
      category: 'service',
      tags: ['international', 'global', 'local']
    },
    {
      question: 'What makes your enterprise PPC different from others?',
      answer: 'Our data-driven enterprise approach, transparent reporting, and focus on ROI set us apart. We don\'t just run ads—we drive measurable enterprise growth and revenue.',
      category: 'service',
      tags: ['unique', 'approach', 'results']
    },
    {
      question: 'How do you handle enterprise account management?',
      answer: 'We assign dedicated enterprise PPC managers and teams based on your package. You\'ll have direct access to your team for strategy discussions, performance reviews, and ongoing optimization.',
      category: 'service',
      tags: ['management', 'team', 'support']
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Questions', count: faqs.length },
    { id: 'timeline', name: 'Timeline & Results', count: faqs.filter(f => f.category === 'timeline').length },
    { id: 'pricing', name: 'Pricing & Packages', count: faqs.filter(f => f.category === 'pricing').length },
    { id: 'safety', name: 'Safety & Compliance', count: faqs.filter(f => f.category === 'safety').length },
    { id: 'reporting', name: 'Reporting & Analytics', count: faqs.filter(f => f.category === 'reporting').length },
    { id: 'service', name: 'Service & Process', count: faqs.filter(f => f.category === 'service').length }
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(faqSearchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(faqSearchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(faqSearchTerm.toLowerCase()));
    const matchesCategory = selectedFaqCategory === 'all' || faq.category === selectedFaqCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageSEO config={seoConfig} />
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-purple-900">
      
      {/* Sticky Navigation */}
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 z-[60] transition-all duration-500 ${
          isNavSticky ? 'top-24 opacity-100 scale-100 pointer-events-auto' : 'top-0 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 rounded-full"></div>

          <div className="relative bg-black/20 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-2xl shadow-purple-500/20">
            <nav className="flex items-center space-x-1 px-6 py-3 overflow-x-auto flex-nowrap">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    activeSection === item.id
                      ? 'text-purple-300 bg-gradient-to-r from-purple-500/30 to-blue-500/30 border border-purple-400/50 shadow-lg shadow-purple-500/25'
                      : 'text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:border-purple-300/30'
                  } px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg whitespace-nowrap flex-shrink-0`}
                >
                  {item.icon}
                  <span className="hidden lg:inline whitespace-nowrap">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
              <div className={`w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 transition-all duration-1000 ${
                heroAnimationComplete ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
              }`}>
                <Building2 className={`h-10 w-10 text-white transition-all duration-1000 ${
                  heroAnimationComplete ? 'scale-100' : 'scale-0'
                }`} />
              </div>
            </div>

            {/* Animated Title */}
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Hire Enterprise PPC Agency
            </h1>

            {/* Animated Description */}
            <p className={`text-xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Grow with a Delhi-based team that blends AI insights with full-funnel enterprise PPC. We focus on measurable ROI, transparent reporting, and strategies tuned for India's enterprise landscape—so you win across Google Ads, Microsoft Advertising, LinkedIn, and beyond.
            </p>
            
            {/* Interactive Stats Row */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-500 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  {statsCount.clients}+
                </div>
                <div className="text-gray-300 font-semibold">Enterprise Clients</div>
                <div className="text-gray-500 text-sm">Trusted by leading brands</div>
                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  {statsCount.revenue}%
                </div>
                <div className="text-gray-300 font-semibold">Revenue Growth</div>
                <div className="text-gray-500 text-sm">Average client improvement</div>
                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  {statsCount.awards}
                </div>
                <div className="text-gray-300 font-semibold">Enterprise PPC Awards</div>
                <div className="text-gray-500 text-sm">Won in 2024 Alone</div>
                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className={`flex flex-wrap justify-center gap-6 mb-8 transition-all duration-1000 delay-700 ${
              showTrustBadges ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
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
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 via-blue-600 to-blue-700 hover:from-teal-500 hover:via-blue-500 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Get Free Enterprise PPC Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Floating Action Button */}
            <div className={`mt-8 transition-all duration-1000 delay-1200 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="group inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-700/50"
              >
                {isVideoPlaying ? (
                  <>
                    <Pause className="h-4 w-4" />
                    <span>Pause Demo</span>
                  </>
                ) : (
                  <>
                <Play className="h-4 w-4" />
                <span>Watch Demo</span>
                  </>
                )}
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

      {/* Why MarkTechRover Delhi Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/40 via-purple-900/10 to-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
              <Trophy className="h-4 w-4 mr-2" />
              Why MarkTechRover Delhi
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Enterprise PPC Company Built for 2025</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">AI insights, human execution, and full-funnel ROI tracking — tailored for enterprise businesses in Delhi, NCR and pan-India markets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10">
              <div className="flex items-center space-x-3 mb-3">
                <Cpu className="h-5 w-5 text-purple-300" />
                <h3 className="text-white font-semibold">AI-Powered Enterprise PPC</h3>
              </div>
              <p className="text-gray-300 text-sm">Target the right enterprise keywords and audiences. Stay ahead as enterprise PPC evolves.</p>
            </div>
            <div className="rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="h-5 w-5 text-purple-300" />
                <h3 className="text-white font-semibold">Dedicated Enterprise Team</h3>
              </div>
              <p className="text-gray-300 text-sm">A cross-functional team for Search, Display, Video, and LinkedIn campaigns — aligned to your enterprise goals.</p>
            </div>
            <div className="rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10">
              <div className="flex items-center space-x-3 mb-3">
                <BarChart3 className="h-5 w-5 text-purple-300" />
                <h3 className="text-white font-semibold">Enterprise Revenue Reporting</h3>
              </div>
              <p className="text-gray-300 text-sm">Dashboards that connect PPC performance to revenue and business outcomes — not just clicks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section id="deliverables" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
              <CheckCircle className="h-4 w-4 mr-2" />
              Enterprise PPC Deliverables
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What You Get With Enterprise PPC Management</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Comprehensive enterprise PPC services designed to drive measurable results for your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((deliverable, index) => (
              <div
                key={index}
                onClick={() => setExpandedDeliverable(expandedDeliverable === index ? -1 : index)}
                className={`group relative rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                  expandedDeliverable === index
                    ? 'border-purple-500/50 bg-gradient-to-br from-purple-900/20 to-purple-800/20 shadow-xl shadow-purple-500/20 scale-105'
                    : 'border-purple-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:border-purple-500/40 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    expandedDeliverable === index
                      ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white'
                      : 'bg-purple-500/20 text-purple-300 group-hover:bg-purple-500/30'
                  }`}>
                    {deliverable.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-2">{deliverable.title}</h3>
                    <p className={`text-gray-400 text-sm transition-all duration-300 ${
                      expandedDeliverable === index ? 'block' : 'line-clamp-3'
                    }`}>
                      {deliverable.description}
                    </p>
                  </div>
                </div>
                <div className={`mt-4 flex items-center text-purple-400 text-sm font-medium transition-all duration-300 ${
                  expandedDeliverable === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  {expandedDeliverable === index ? 'Click to collapse' : 'Click to expand'}
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                    expandedDeliverable === index ? 'rotate-180' : ''
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Technology Section */}
      <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
              <Cpu className="h-4 w-4 mr-2" />
              Enterprise PPC Technology
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Enterprise PPC Technology Stack</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Advanced tools and platforms that power our enterprise PPC management services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyFeatures.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:border-purple-500/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-purple-300">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/40 via-purple-900/10 to-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
              <Trophy className="h-4 w-4 mr-2" />
              Enterprise PPC Case Studies
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Enterprise PPC Success Stories</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Real results from enterprise clients who trusted us with their PPC campaigns.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:border-purple-500/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-4 right-4">
                  <Trophy className="h-8 w-8 text-purple-400/50" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 pr-12">{study.title}</h3>
                <p className="text-gray-400 mb-4">{study.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      {study.metric}
                    </div>
                    <div className="text-gray-500 text-sm">{study.timeframe}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
              <Rocket className="h-4 w-4 mr-2" />
              Enterprise PPC Approach
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Enterprise PPC Process</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">A proven 5-step approach to enterprise PPC success.</p>
          </div>

          <div className="mb-8 flex justify-center space-x-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {isAutoPlaying ? <><Pause className="h-4 w-4 inline mr-2" />Pause</> : <><Play className="h-4 w-4 inline mr-2" />Auto Play</>}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {approachSteps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveApproachStep(index)}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`relative cursor-pointer transition-all duration-500 transform ${
                  activeApproachStep === index ? 'scale-105' : 'scale-100'
                }`}
              >
                <div
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 relative ${
                    activeApproachStep === index
                      ? `bg-gradient-to-br ${step.bgColor} border-purple-400 shadow-lg shadow-purple-500/25`
                      : 'bg-gray-800/50 border-gray-600 hover:border-purple-500/50'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      activeApproachStep === index ? `bg-gradient-to-br ${step.color} shadow-lg` : 'bg-gray-700'
                    }`}
                  >
                    <div className={`transition-all duration-300 ${activeApproachStep === index ? 'text-white' : 'text-gray-400'}`}>{step.icon}</div>
                  </div>
                  <h3
                    className={`text-sm font-bold mb-2 transition-all duration-300 ${
                      activeApproachStep === index ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    {step.step}
                  </h3>
                  <div
                    className={`text-xs transition-all duration-300 ${
                      activeApproachStep === index ? 'text-purple-300' : 'text-gray-500'
                    }`}
                  >
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-gray-800/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-start space-x-6 mb-6">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${approachSteps[activeApproachStep].color} rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 flex-shrink-0`}
              >
                <div className="text-white">{approachSteps[activeApproachStep].icon}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {approachSteps[activeApproachStep].step}
                </h3>
                <p className="text-gray-300 text-lg mb-4">{approachSteps[activeApproachStep].detailedDescription}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Duration: {approachSteps[activeApproachStep].duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Key Deliverables
                </h4>
                <ul className="space-y-2">
                  {approachSteps[activeApproachStep].deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <BarChart3 className="h-5 w-5 text-purple-400 mr-2" />
                  Expected Outcomes
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Traffic Growth</span>
                    <span className="text-green-400 font-semibold">Significant Increase</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Conversion Rate</span>
                    <span className="text-blue-400 font-semibold">Optimized</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">ROI</span>
                    <span className="text-purple-400 font-semibold">Maximized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/40 via-purple-900/10 to-black/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
              <MessageSquare className="h-4 w-4 mr-2" />
              Enterprise PPC FAQs
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Everything you need to know about our enterprise PPC services.</p>
          </div>

          {/* FAQ Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={faqSearchTerm}
                onChange={(e) => setFaqSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedFaqCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedFaqCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="text-gray-400 text-sm">
                Showing {filteredFaqs.length} of {faqs.length} questions
              </div>
              <div className="flex gap-2">
                <button
                  onClick={expandAllFaqs}
                  className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 text-sm transition-colors"
                >
                  Expand All
                </button>
                <button
                  onClick={collapseAllFaqs}
                  className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 text-sm transition-colors"
                >
                  Collapse All
                </button>
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-800/50 overflow-hidden transition-all duration-300 hover:border-purple-500/40"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors"
                  >
                    <span className="text-white font-semibold pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                        expandedFaqs.has(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaqs.has(index) && (
                    <div className="px-6 py-4 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {faq.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">No FAQs found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Scale Your Enterprise PPC?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Partner with Delhi's leading enterprise PPC agency and drive measurable revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default EnterprisePPC;
