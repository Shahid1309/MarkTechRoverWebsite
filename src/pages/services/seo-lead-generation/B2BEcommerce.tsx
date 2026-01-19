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
  Smartphone as MobileIcon
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const B2BEcommerce = () => {
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
  const [statsCount, setStatsCount] = useState({ retention: 0, satisfaction: 0, awards: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showTrustBadges, setShowTrustBadges] = useState(false);

  const navItems = [
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },{ id: 'technology', label: 'Our Technology', icon: <Cpu className="h-4 w-4" /> },
    { id: 'case-studies', label: 'Case Studies', icon: <Trophy className="h-4 w-4" /> },
    { id: 'approach', label: 'Our Approach', icon: <Rocket className="h-4 w-4" /> },
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
        retention: prev.retention < 91 ? prev.retention + 1 : 91,
        satisfaction: prev.satisfaction < 93 ? prev.satisfaction + 1 : 93,
        awards: prev.awards < 58 ? prev.awards + 1 : 58
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
    title: 'B2B Ecommerce Enablement Delhi | Best B2B Ecommerce Agency NCR',
    description: 'Leading B2B ecommerce enablement services in Delhi NCR. Best B2B ecommerce agency in Delhi offering comprehensive B2B ecommerce solutions. Professional B2B ecommerce services India with proven results.',
    keywords: [
      'B2B Ecommerce Enablement Delhi', 'Best B2B ecommerce agency in Delhi', 'B2B ecommerce services NCR', 'Best B2B ecommerce services in India', 'Professional B2B ecommerce services India', 'B2B ecommerce experts in Delhi NCR', 'B2B ecommerce company India', 'SEO services in Delhi', 'B2B ecommerce Delhi', 'B2B ecommerce enablement India'
    ],
    url: '/services/seo-lead-generation/b2b-ecommerce',
    type: 'website',
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'Ritik Kumar Poddar',
    section: 'B2B Ecommerce Enablement',
    tags: ['B2B Ecommerce', 'B2B Ecommerce Enablement', 'B2B Online Sales', 'B2B Digital Commerce', 'B2B Ecommerce Platform'],
    image: '/images/b2b-ecommerce.webp'
  };

  const deliverables = [
    {
      title: 'B2B Ecommerce Platform Setup & Integration',
      description: 'Complete setup and integration of B2B ecommerce platforms tailored for B2B sales. We configure platforms, integrate with ERP/CRM systems, set up B2B-specific features like bulk ordering, custom pricing, and account management.',
      icon: <ShoppingCart className="h-6 w-6" />
    },
    {
      title: 'B2B Product Catalog Management',
      description: 'Professional management of B2B product catalogs with complex pricing, volume discounts, and custom configurations. We optimize product data, manage SKUs, and ensure accurate B2B product information.',
      icon: <Layers className="h-6 w-6" />
    },
    {
      title: 'B2B Customer Portal Development',
      description: 'Custom B2B customer portals that enable self-service ordering, account management, and order tracking. We create intuitive portals that streamline B2B purchasing processes and improve customer experience.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'B2B Payment & Credit Management',
      description: 'Comprehensive B2B payment solutions including net terms, credit management, and invoice processing. We integrate payment gateways, set up credit limits, and automate B2B payment workflows.',
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: 'B2B Order Management & Fulfillment',
      description: 'Advanced order management systems for B2B transactions including bulk orders, custom configurations, and fulfillment workflows. We optimize order processing, inventory management, and shipping for B2B needs.',
      icon: <Activity className="h-6 w-6" />
    },
    {
      title: 'B2B Sales Enablement Tools',
      description: 'Sales enablement tools that empower your B2B sales team including quote generators, product configurators, and sales dashboards. We create tools that accelerate B2B sales cycles and improve conversion rates.',
      icon: <Target className="h-6 w-6" />
    },
    {
      title: 'B2B Analytics & Reporting',
      description: 'Comprehensive B2B analytics and reporting that tracks customer behavior, order patterns, and sales performance. We provide insights that help you understand your B2B customers and optimize your ecommerce strategy.',
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: 'B2B Marketing Automation',
      description: 'B2B marketing automation that nurtures leads, manages customer relationships, and drives repeat purchases. We set up email campaigns, personalized experiences, and automated workflows for B2B customers.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'B2B SEO & Content Strategy',
      description: 'B2B-focused SEO and content strategy that attracts and converts B2B buyers. We optimize for B2B keywords, create buyer-focused content, and build authority in your B2B market.',
      icon: <Search className="h-6 w-6" />
    },
    {
      title: 'B2B Performance Optimization',
      description: 'Continuous optimization of your B2B ecommerce platform for performance, conversion, and user experience. We monitor metrics, test improvements, and scale successful strategies.',
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  

  const technologyFeatures = [
    {
      title: 'Real-Time B2B Ecommerce Monitoring',
      description: 'Track your B2B ecommerce performance across all platforms—updated in real-time.',
      icon: <Activity className="h-8 w-8" />
    },
    {
      title: 'AI-Powered B2B Optimization',
      description: 'Discover high-value B2B opportunities and optimize automatically.',
      icon: <Brain className="h-8 w-8" />
    },
    {
      title: 'B2B Competitor Intelligence',
      description: 'Benchmark against B2B competitors in Delhi, NCR, and all of India.',
      icon: <Eye className="h-8 w-8" />
    },
    {
      title: 'Automated B2B Optimization',
      description: 'Proactive platform adjustments and alerts—never miss optimization opportunities.',
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'B2B Performance Dashboards',
      description: 'Access all B2B analytics, conversions, revenue, and growth metrics anytime.',
      icon: <BarChart className="h-8 w-8" />
    }
  ];

  const caseStudies = [
    {
      title: 'B2B Manufacturer Achieves 400% Revenue Growth',
      description: 'With Marktechrover\'s B2B ecommerce enablement strategy, a manufacturing company achieved 400% revenue growth through online B2B sales—results that brought in ₹100+ crores in B2B orders within twelve months.',
      metric: '400% Growth',
      timeframe: '12 Months'
    },
    {
      title: 'NCR-Based B2B Distributor Dominates Online Sales',
      description: 'We helped a large B2B distributor go from zero to market leader in NCR\'s B2B space. The blend of ecommerce platform and sales enablement tools brought in enterprise-level B2B sales—beyond expectations.',
      metric: 'Enterprise Sales',
      timeframe: 'B2B Dominance'
    },
    {
      title: 'Pan-India B2B Expands Nationally',
      description: 'We enabled a pan-India B2B business to expand nationally through strategic ecommerce enablement. Our multi-platform strategy drove national reach and B2B conversions.',
      metric: 'National Expansion',
      timeframe: 'Ongoing Growth'
    }
  ];

  const approachSteps = [
    {
      step: 'Step 1: B2B Ecommerce Strategy & Audit',
      description: 'Understand your B2B goals, current ecommerce performance, and competitor landscape.',
      detailedDescription: 'We conduct a comprehensive analysis of your current B2B ecommerce performance, competitor strategies, and market opportunities. This includes platform audit, customer journey review, and sales process analysis.',
      icon: <Search className="h-6 w-6" />,
      duration: '2-3 weeks',
      deliverables: ['B2B Ecommerce Audit', 'Competitor Analysis', 'Platform Review', 'Strategy Planning'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/20 to-blue-600/20'
    },
    {
      step: 'Step 2: Custom B2B Roadmap',
      description: 'No generic plans—only tailored, goal-oriented B2B ecommerce strategies.',
      detailedDescription: 'Based on our audit findings, we create a personalized B2B ecommerce roadmap that aligns with your business objectives. This includes platform selection, integration planning, and timeline projections.',
      icon: <Target className="h-6 w-6" />,
      duration: '1-2 weeks',
      deliverables: ['Custom B2B Strategy', 'Platform Architecture', 'Integration Plan', 'Timeline Projections'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20'
    },
    {
      step: 'Step 3: B2B Platform Launch',
      description: 'Platform setup, integrations, customizations, and sales enablement delivered together.',
      detailedDescription: 'Our comprehensive execution covers all aspects of B2B ecommerce simultaneously. We set up platforms, integrate systems, create custom portals, and launch sales enablement tools.',
      icon: <Layers className="h-6 w-6" />,
      duration: 'Ongoing',
      deliverables: ['Platform Setup', 'System Integrations', 'Custom Portals', 'Sales Tools'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/20 to-green-600/20'
    },
    {
      step: 'Step 4: Ongoing B2B Optimization',
      description: 'Monthly calls, proactive reporting, and constant adaptation to market changes.',
      detailedDescription: 'We continuously monitor your B2B ecommerce platform, optimize based on performance data, and adapt to market changes. Regular strategy reviews ensure we stay ahead of the competition.',
      icon: <RefreshCw className="h-6 w-6" />,
      duration: 'Monthly',
      deliverables: ['Performance Monitoring', 'Platform Optimization', 'Integration Updates', 'Feature Testing'],
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
      question: 'How soon will I see B2B ecommerce results?',
      answer: 'Expect to see initial B2B ecommerce results within 2-3 months for most implementations, with significant improvements in online B2B sales, customer acquisition, and revenue achieved within 6-12 months. The biggest gains come from committed B2B clients with sustained optimization.',
      category: 'timeline',
      tags: ['results', 'timeline', 'performance']
    },
    {
      question: 'Is all work original and platform-compliant for B2B?',
      answer: 'Yes! All B2B ecommerce solutions and strategies are created by our team and follow industry best practices for safety and long-term B2B success.',
      category: 'safety',
      tags: ['compliance', 'safety', 'platforms']
    },
    {
      question: 'Which B2B ecommerce plan should I pick?',
      answer: 'Pick a B2B ecommerce plan that matches your business size and growth goals, or ask for a free, custom B2B audit and recommendation from our team.',
      category: 'pricing',
      tags: ['pricing', 'selection']
    },
    {
      question: 'Can I scale my B2B ecommerce package later?',
      answer: 'Absolutely. Our B2B ecommerce packages are flexible—upgrade or customize at any time as your business grows and you add more features.',
      category: 'pricing',
      tags: ['scaling', 'flexibility', 'upgrades']
    },
    {
      question: 'What\'s included in B2B ecommerce reporting?',
      answer: 'You\'ll get interactive dashboards, platform performance reports, conversion tracking, and ROI analysis every month, specifically focused on B2B metrics.',
      category: 'reporting',
      tags: ['analytics', 'reports', 'tracking']
    },
    {
      question: 'Do you work with B2B businesses outside Delhi NCR?',
      answer: 'Yes, we serve B2B clients globally. While we\'re based in Delhi, NCR, our B2B ecommerce strategies work for businesses worldwide, with specialized optimization for Indian markets.',
      category: 'service',
      tags: ['international', 'global', 'local']
    },
    {
      question: 'What makes your B2B ecommerce different from others?',
      answer: 'Our data-driven B2B approach, transparent reporting, and focus on ROI set us apart. We don\'t just set up platforms—we drive measurable B2B growth and sales.',
      category: 'service',
      tags: ['unique', 'approach', 'results']
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
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 via-purple-950 via-purple-900 to-purple-900">
      
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
                <ShoppingCart className={`h-10 w-10 text-white transition-all duration-1000 ${
                  heroAnimationComplete ? 'scale-100' : 'scale-0'
                }`} />
              </div>
            </div>

            {/* Animated Title */}
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Hire B2B Ecommerce Marketing Agency
            </h1>

            {/* Animated Description */}
            <p className={`text-xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Grow with a Delhi-based team that blends AI insights with full-funnel B2B ecommerce enablement. We focus on measurable ROI, transparent reporting, and strategies tuned for India's B2B landscape—so you win across platforms, integrations, and beyond.
            </p>
            
            {/* Interactive Stats Row */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-500 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  {statsCount.retention}%
                </div>
                <div className="text-gray-300 font-semibold">Retention Rate</div>
                <div className="text-gray-500 text-sm">Industry average: 50%</div>
                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  {statsCount.satisfaction}%
                </div>
                <div className="text-gray-300 font-semibold">Client Satisfaction</div>
                <div className="text-gray-500 text-sm">Industry average: 72%</div>
                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  {statsCount.awards}
                </div>
                <div className="text-gray-300 font-semibold">B2B Ecommerce Awards</div>
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
                <span className="text-gray-300 text-sm">Platform Partner</span>
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
                <span className="relative z-10">Get Free B2B Ecommerce Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <button
                onClick={() => scrollToSection()}
                className="group inline-flex items-center px-8 py-4 border border-blue-500/40 text-blue-200 hover:text-white hover:bg-blue-500/20 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">View Packages</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The B2B Ecommerce Enablement Company Built for 2025</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">AI insights, human execution, and full-funnel ROI tracking — tailored for B2B businesses in Delhi, NCR and pan-India markets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10">
              <div className="flex items-center space-x-3 mb-3">
                <Cpu className="h-5 w-5 text-purple-300" />
                <h3 className="text-white font-semibold">AI-Powered B2B Ecommerce</h3>
              </div>
              <p className="text-gray-300 text-sm">Target the right B2B customers and optimize platforms. Stay ahead as B2B ecommerce evolves.</p>
            </div>
            <div className="rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="h-5 w-5 text-purple-300" />
                <h3 className="text-white font-semibold">Dedicated B2B Team</h3>
              </div>
              <p className="text-gray-300 text-sm">A cross-functional team for platform setup, integrations, customizations, and sales enablement — aligned to your B2B goals.</p>
            </div>
            <div className="rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10">
              <div className="flex items-center space-x-3 mb-3">
                <BarChart3 className="h-5 w-5 text-purple-300" />
                <h3 className="text-white font-semibold">B2B Revenue Reporting</h3>
              </div>
              <p className="text-gray-300 text-sm">Dashboards that connect platform performance to B2B sales and revenue — not just traffic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Sticky Sub Menu */}
      <div className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${isNavSticky ? 'top-32 opacity-100 scale-100' : 'top-0 opacity-0 scale-95 pointer-events-none'}`}>
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
                  className={`${activeSection === item.id ? 'text-purple-300 bg-gradient-to-r from-purple-500/30 to-purple-400/30 border border-purple-400/50 shadow-lg shadow-purple-500/25' : 'text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/20 to-purple-400/20 hover:border-purple-300/30'} px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg whitespace-nowrap flex-shrink-0`}
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
          {/* Deliverables Section */}
      <section id="deliverables" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Deliverables: What You Get Each Month
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At Marktechrover, our B2B ecommerce enablement deliverables are crafted to help you reach the right B2B customers, drive more qualified traffic, and convert more visitors—month after month:
              </p>
            </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Navigation */}
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Menu className="h-5 w-5 text-purple-400" />
                  <span>Our Deliverables</span>
                </h3>
                
                <div className="space-y-2">
              {deliverables.map((deliverable, index) => (
                  <button
                      key={index}
                      onClick={() => setExpandedDeliverable(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                        expandedDeliverable === index
                          ? 'bg-gradient-to-r from-purple-500/20 to-purple-400/20 border border-purple-400/50 shadow-lg shadow-purple-500/25'
                          : 'bg-gradient-to-r from-gray-800/20 to-gray-700/20 border border-gray-600/20 hover:border-purple-400/30 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-purple-400/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          expandedDeliverable === index
                            ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/25'
                            : 'bg-gradient-to-br from-gray-600 to-gray-700 group-hover:from-purple-500 group-hover:to-purple-600'
                        }`}>
                        {deliverable.icon}
                      </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold transition-colors duration-300 ${
                            expandedDeliverable === index ? 'text-purple-300' : 'text-gray-300 group-hover:text-purple-300'
                          }`}>
                          {deliverable.title}
                          </h4>
                      </div>
                        <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                          expandedDeliverable === index
                            ? 'border-purple-400 bg-purple-500'
                            : 'border-gray-400 group-hover:border-purple-400'
                        }`}>
                          {expandedDeliverable === index && (
                            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                          )}
                    </div>
                      </div>
                  </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-2/3">
              <div className="bg-gradient-to-br from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm p-8">
                {deliverables.map((deliverable, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      expandedDeliverable === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute pointer-events-none'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                        {deliverable.icon}
                          </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{deliverable.title}</h2>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8 p-6 bg-gradient-to-r from-purple-900/10 to-purple-800/10 rounded-xl border border-purple-500/20">
                      <p className="text-purple-200 text-lg leading-relaxed">{deliverable.description}</p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* What's Included */}
                      <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/20">
                        <h3 className="text-lg font-semibold text-purple-300 mb-4 flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-cyan-300" />
                          <span>What's Included</span>
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">Professional implementation by certified B2B ecommerce experts</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">Comprehensive monthly reporting & analytics</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">Continuous optimization & strategy refinement</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">Dedicated account manager & priority support</span>
                          </li>
                        </ul>
                      </div>

                      {/* Expected Results */}
                      <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 rounded-xl p-6 border border-green-500/20">
                        <h3 className="text-lg font-semibold text-green-300 mb-4 flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-green-400" />
                          <span>Expected Results</span>
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                            <div className="text-2xl font-bold text-cyan-300">+200%</div>
                            <div className="text-xs text-blue-200">B2B Traffic</div>
                          </div>
                          <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                            <div className="text-2xl font-bold text-cyan-300">+150%</div>
                            <div className="text-xs text-blue-200">B2B Conversions</div>
                          </div>
                          <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                            <div className="text-2xl font-bold text-cyan-300">+250%</div>
                            <div className="text-xs text-blue-200">B2B Sales</div>
                          </div>
                          <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                            <div className="text-2xl font-bold text-cyan-300">+180%</div>
                            <div className="text-xs text-blue-200">ROI Improvement</div>
                          </div>
                        </div>
                      </div>

                      {/* Implementation Timeline */}
                      <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-xl p-6 border border-blue-500/20">
                        <h3 className="text-lg font-semibold text-blue-300 mb-4 flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-blue-400" />
                          <span>Implementation Timeline</span>
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                            <div>
                              <div className="text-blue-200 font-semibold">Week 1-3: B2B Ecommerce Audit</div>
                              <div className="text-blue-100 text-sm">Platform audit, customer journey review, and strategy planning</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                            <div>
                              <div className="text-blue-200 font-semibold">Week 4-16: Platform Launch</div>
                              <div className="text-blue-100 text-sm">Platform setup, integrations, and customizations</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                            <div>
                              <div className="text-blue-200 font-semibold">Month 4+: Ongoing Optimization</div>
                              <div className="text-blue-100 text-sm">Continuous improvement and scaling</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Technology Used */}
                      <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/20">
                        <h3 className="text-lg font-semibold text-purple-300 mb-4 flex items-center space-x-2">
                          <Cpu className="h-5 w-5 text-purple-400" />
                          <span>Technology Used</span>
                        </h3>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">B2B Platforms</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">ERP/CRM Integration</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">Payment Gateways</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">B2B Analytics</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">Order Management</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">B2B Dashboards</span>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              ))}
              </div>
            </div>
          </div>
            </div>
          </section>

      

          {/* Technology Section */}
      <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/5 via-transparent to-purple-900/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Technology: Smarter B2B Ecommerce Enablement for Modern Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Marktechrover invests in powerful B2B ecommerce tools and automation to keep your platform strategy one step ahead
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {technologyFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                    </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                  </div>
            ))}
                </div>

          {/* Technology Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">+20%</div>
              <div className="text-lg font-semibold text-white mb-1">Boost in B2B Conversion Rate</div>
              <div className="text-gray-400 text-sm">for campaigns with ai-driven platform optimization</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-lg font-semibold text-white mb-1">Set up by Marktechrover</div>
              <div className="text-gray-400 text-sm">to give you the best B2B data foundation</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">₹1M+</div>
              <div className="text-lg font-semibold text-white mb-1">Built-in B2B Value</div>
              <div className="text-gray-400 text-sm">based on cost of similar B2B tools</div>
            </div>
          </div>
            </div>
          </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our B2B Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real testimonials from B2B businesses across Delhi, NCR, and India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                    </div>
                  </div>
              <p className="text-gray-300 mb-4">
                "Marktechrover transformed our B2B ecommerce completely. We went from zero to ₹100+ crores in B2B revenue through strategic platform enablement—results that brought in 400% growth and 500% ROI within twelve months!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Rajesh Kumar</div>
                  <div className="text-gray-400 text-sm">CEO, B2B Manufacturer Delhi</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "The B2B ecommerce team at Marktechrover is incredibly professional and results-driven. Our online B2B sales increased by 400% within the first year of working with them."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Priya Sharma</div>
                  <div className="text-gray-400 text-sm">Marketing Director, B2B Distributor</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Best investment we've made for our B2B business. Marktechrover's ecommerce enablement expertise helped us dominate the NCR market and attract high-quality B2B customers."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Amit Patel</div>
                  <div className="text-gray-400 text-sm">Founder, B2B Ecommerce NCR</div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </section>

          {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/5 via-transparent to-purple-900/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Case Studies: Delhi-NCR & India B2B Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real B2B businesses across India
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                    {study.metric}
                  </div>
                  <div className="text-sm text-gray-400">{study.timeframe}</div>
                    </div>
                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-gray-400 text-sm">{study.description}</p>
                </div>
              ))}
          </div>
            </div>
          </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Approach: Transparent, Holistic, Results-Driven
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 5-step B2B ecommerce enablement process that delivers consistent results
              </p>
            </div>

          {/* Interactive Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-400">Progress through our process</span>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`flex items-center space-x-2 px-3 py-1 rounded-lg text-sm transition-all duration-300 ${
                    isAutoPlaying
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {isAutoPlaying ? (
                    <>
                      <X className="h-4 w-4" />
                      <span>Stop Auto-Play</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      <span>Auto-Play</span>
                    </>
                  )}
                </button>
                <span className="text-sm text-purple-400 font-semibold">Step {activeApproachStep + 1} of 5</span>
                    </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((activeApproachStep + 1) / 5) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
            {approachSteps.map((step, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transition-all duration-500 transform ${
                  activeApproachStep === index 
                    ? 'scale-105' 
                    : hoveredStep === index 
                    ? 'scale-102' 
                    : 'scale-100'
                }`}
                onClick={() => setActiveApproachStep(index)}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div 
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 relative ${
                    activeApproachStep === index
                      ? `bg-gradient-to-br ${step.bgColor} border-purple-400 shadow-lg shadow-purple-500/25`
                      : 'bg-gray-800/50 border-gray-600 hover:border-purple-500/50'
                  }`}
                  onMouseEnter={() => setShowTooltip(index)}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                    activeApproachStep === index
                      ? `bg-gradient-to-br ${step.color} shadow-lg`
                      : 'bg-gray-700'
                  }`}>
                    <div className={`transition-all duration-300 ${
                      activeApproachStep === index ? 'text-white' : 'text-gray-400'
                    }`}>
                        {step.icon}
                      </div>
                    </div>
                  <h3 className={`text-sm font-bold mb-2 transition-all duration-300 ${
                    activeApproachStep === index ? 'text-white' : 'text-gray-300'
                  }`}>
                    {step.step.split(':')[1] || step.step}
                  </h3>
                  <div className={`text-xs transition-all duration-300 ${
                    activeApproachStep === index ? 'text-purple-300' : 'text-gray-500'
                  }`}>
                    {step.duration}
                  </div>
                  
                  {/* Tooltip */}
                  {showTooltip === index && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg border border-gray-700 z-10 whitespace-nowrap">
                      Click to learn more about {step.step.split(':')[1] || step.step}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  )}
                </div>
                
                {/* Active indicator */}
                {activeApproachStep === index && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                )}
                
                {/* Progress indicator */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full px-2">
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div 
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index <= activeApproachStep 
                          ? 'bg-gradient-to-r from-purple-500 to-purple-600' 
                          : 'bg-gray-600'
                      }`}
                      style={{ 
                        width: index <= activeApproachStep ? '100%' : '0%',
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
                </div>
              ))}
          </div>

          {/* Detailed Step Content */}
          <div className="bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-gray-800/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-start space-x-6 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${approachSteps[activeApproachStep].color} rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 flex-shrink-0`}>
                <div className="text-white">
                  {approachSteps[activeApproachStep].icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {approachSteps[activeApproachStep].step}
                </h3>
                <p className="text-gray-300 text-lg mb-4">
                  {approachSteps[activeApproachStep].detailedDescription}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Duration: {approachSteps[activeApproachStep].duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverables Grid */}
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
              
              <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <TrendingUp className="h-5 w-5 text-purple-400 mr-2" />
                  Expected Outcomes
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">B2B Traffic Growth</span>
                    <span className="text-green-400 font-semibold">+200-400%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">B2B Conversion Rate</span>
                    <span className="text-blue-400 font-semibold">Top 10%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">B2B Sales</span>
                    <span className="text-purple-400 font-semibold">+300%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-700/50">
              <button
                onClick={() => setActiveApproachStep(Math.max(0, activeApproachStep - 1))}
                disabled={activeApproachStep === 0}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeApproachStep === 0
                    ? 'text-gray-500 cursor-not-allowed'
                    : 'text-purple-400 hover:text-white hover:bg-purple-500/20'
                }`}
              >
                <ChevronDown className="h-4 w-4 rotate-90" />
                <span>Previous Step</span>
              </button>
              
              <div className="flex space-x-2">
                {approachSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveApproachStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeApproachStep === index
                        ? 'bg-purple-500'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setActiveApproachStep(Math.min(4, activeApproachStep + 1))}
                disabled={activeApproachStep === 4}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeApproachStep === 4
                    ? 'text-gray-500 cursor-not-allowed'
                    : 'text-purple-400 hover:text-white hover:bg-purple-500/20'
                }`}
              >
                <span>Next Step</span>
                <ChevronDown className="h-4 w-4 -rotate-90" />
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your B2B Ecommerce Enablement Journey?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join hundreds of B2B businesses that have transformed their online presence with our proven approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free B2B Ecommerce Audit
                </Link>
                <Link
                  to="/who-are-we/case-studies"
                  className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View Success Stories
                </Link>
              </div>
            </div>
          </div>

          {/* Floating Action Button */}
          <div className="fixed bottom-8 right-8 z-50">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => setActiveApproachStep(0)}
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-110"
                title="Reset to Step 1"
              >
                <RefreshCw className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                title="Back to Top"
              >
                <ArrowRight className="h-5 w-5 text-white rotate-[-90deg]" />
              </button>
            </div>
          </div>
            </div>
          </section>

          {/* FAQs Section */}
      <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/5 via-transparent to-purple-900/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions (FAQs)
              </h2>
            <p className="text-xl text-gray-300 mb-8">
              Everything you need to know about our B2B ecommerce enablement services
            </p>
            
            {/* FAQ Search and Controls */}
            <div className="space-y-6 mb-8">
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={faqSearchTerm}
                  onChange={(e) => setFaqSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                />
                {faqSearchTerm && (
                  <button
                    onClick={() => setFaqSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedFaqCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedFaqCategory === category.id
                        ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600'
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-600/50">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* FAQ Controls */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={expandAllFaqs}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Maximize2 className="h-4 w-4" />
                  <span>Expand All</span>
                </button>
                <button
                  onClick={collapseAllFaqs}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  <Minimize2 className="h-4 w-4" />
                  <span>Collapse All</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No FAQs Found</h3>
                <p className="text-gray-400 mb-4">
                  Try adjusting your search terms or category filter
                </p>
                <button
                  onClick={() => {
                    setFaqSearchTerm('');
                    setSelectedFaqCategory('all');
                  }}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                <div className="text-sm text-gray-400 text-center mb-4">
                  Showing {filteredFaqs.length} of {faqs.length} FAQs
                </div>
                {filteredFaqs.map((faq, index) => {
                  const originalIndex = faqs.findIndex(f => f.question === faq.question);
                  const isExpanded = expandedFaqs.has(originalIndex);
                  return (
                    <div
                      key={index}
                      className={`rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                        isExpanded
                          ? 'bg-gradient-to-r from-purple-900/20 via-purple-800/20 to-purple-900/20 border-purple-400/40 shadow-lg shadow-purple-500/25'
                          : 'bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border-purple-500/20 hover:border-purple-400/30'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(originalIndex)}
                        className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-2xl"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className={`text-lg font-bold transition-all duration-300 ${
                            isExpanded ? 'text-white' : 'text-gray-300'
                          }`}>
                            {faq.question}
                          </h3>
                          <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                            isExpanded
                              ? 'bg-purple-500 text-white rotate-180'
                              : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                          }`}>
                            <ChevronDown className="h-5 w-5 transition-transform duration-300" />
                          </div>
                        </div>
                      </button>
                      
                      {/* Expandable Content */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-6 pb-6">
                          <div className="border-t border-purple-500/20 pt-4">
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                            
                            {/* Additional Interactive Elements */}
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                <Clock className="h-3 w-3 mr-1" />
                                B2B Ecommerce Related
                              </span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Common Question
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
          
          {/* FAQ Summary */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-4">
                Can't find what you're looking for? Our B2B ecommerce enablement experts are here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Our Team
                </Link>
                <Link
                  to="/who-are-we/case-studies"
                  className="border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
            </div>
          </section>

      {/* Why Choose Marktechrover Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/5 via-transparent to-purple-900/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Marktechrover for B2B Ecommerce Enablement?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another ecommerce agency. We're your strategic partner for B2B digital growth.
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <Target className="h-8 w-8 text-white" />
                </div>
              <h3 className="text-xl font-bold text-white mb-3">Results-Driven</h3>
              <p className="text-gray-400">We focus on measurable B2B outcomes, not just traffic.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Platform-Compliant</h3>
              <p className="text-gray-400">All our B2B ecommerce strategies comply with industry best practices and platform requirements.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert B2B Team</h3>
              <p className="text-gray-400">Certified B2B ecommerce specialists with years of experience.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scalable Growth</h3>
              <p className="text-gray-400">Strategies that grow with your B2B business needs.</p>
            </div>
          </div>
            </div>
          </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to dominate B2B ecommerce?
            </h2>
              <p className="text-xl text-gray-300 mb-8">
                Partner with Marktechrover—the best B2B ecommerce enablement service provider in Delhi, NCR, and across India. Get in touch for a free consultation or a detailed proposal tailored to your B2B goals!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Free B2B ecommerce audit worth ₹25,000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">No long-term contracts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Money-back guarantee</span>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 via-purple-800/20 to-purple-900/20 border border-purple-500/30 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
                <div className="space-y-4">
              <Link
                to="/contact"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-center"
              >
                    Get Free B2B Ecommerce Consultation
              </Link>
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-4 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-500/20 rounded-xl font-semibold transition-all duration-300 text-center"
                  >
                    Get Detailed Proposal
                  </Link>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Or call us directly</div>
                    <div className="text-lg font-semibold text-purple-300">+91 98765 43210</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default B2BEcommerce; 