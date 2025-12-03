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

const SocialMediaAds = () => {
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
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'packages', label: 'Monthly Packages', icon: <DollarSign className="h-4 w-4" /> },
    { id: 'technology', label: 'Our Technology', icon: <Cpu className="h-4 w-4" /> },
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
      const sections = ['deliverables', 'packages', 'technology', 'case-studies', 'approach', 'faqs'];
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
    const sectionIds = ['deliverables', 'packages', 'technology', 'case-studies', 'approach', 'faqs'];
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
    title: 'Social Media Advertising Delhi | Best Social Media Ads Agency NCR',
    description: 'Leading social media advertising services in Delhi NCR. Best social media ads agency in Delhi offering comprehensive social media advertising. Professional social media ads services India with proven results.',
    keywords: [
      'Social Media Advertising Delhi', 'Best social media ads agency in Delhi', 'Social media advertising services NCR', 'Best social media advertising services in India', 'Professional social media ads services India', 'Social media advertising experts in Delhi NCR', 'Social media ads company India', 'SEO services in Delhi', 'Social media marketing Delhi', 'Social media advertising India'
    ],
    url: '/services/seo-lead-generation/social-media-ads',
    type: 'website',
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'Ritik Kumar Poddar',
    section: 'Social Media Advertising',
    tags: ['Social Media Advertising', 'Social Media Ads', 'Facebook Ads', 'Instagram Ads', 'Social Media Marketing'],
    image: '/images/social-media-ads.webp'
  };

  const deliverables = [
    {
      title: 'Social Media Campaign Setup & Optimization',
      description: 'Complete setup and optimization of social media advertising campaigns across Facebook, Instagram, LinkedIn, Twitter, and other platforms. We create custom ad strategies tailored to your target audience, business goals, and budget. Our team handles account creation, pixel installation, audience building, and campaign structure for maximum ROI.',
      icon: <Target className="h-6 w-6" />
    },
    {
      title: 'Ad Creative Development & Testing',
      description: 'Professional ad creative development including images, videos, carousels, and stories. We create compelling visuals and copy that resonate with your target audience. Continuous A/B testing ensures we optimize for the highest performing creatives, improving click-through rates and conversion rates over time.',
      icon: <PenTool className="h-6 w-6" />
    },
    {
      title: 'Audience Targeting & Segmentation',
      description: 'Advanced audience targeting using demographic data, interests, behaviors, and custom audiences. We build lookalike audiences from your customer data, retarget website visitors, and create segmented campaigns for different customer personas. This ensures your ads reach the right people at the right time.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Campaign Management & Optimization',
      description: 'Daily monitoring and optimization of social media ad campaigns. We adjust bids, budgets, targeting, and creatives based on performance data. Our team implements advanced bidding strategies, budget allocation, and campaign scaling to maximize results while minimizing cost per acquisition.',
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: 'Conversion Tracking & Analytics',
      description: 'Comprehensive conversion tracking setup using Facebook Pixel, LinkedIn Insight Tag, and other tracking tools. We track website conversions, app installs, lead generation, and other key actions. Detailed analytics dashboards provide insights into campaign performance, audience behavior, and ROI.',
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: 'Retargeting & Remarketing Campaigns',
      description: 'Strategic retargeting campaigns to re-engage website visitors, cart abandoners, and past customers. We create dynamic product ads, personalized messaging, and sequential campaigns that guide prospects through the sales funnel. This maximizes conversion rates and customer lifetime value.',
      icon: <RefreshCw className="h-6 w-6" />
    },
    {
      title: 'Lead Generation & Form Ads',
      description: 'Lead generation campaigns using native social media lead forms and landing pages. We optimize forms for maximum conversions, implement lead nurturing sequences, and ensure quality lead delivery. Integration with CRM systems ensures seamless lead management and follow-up.',
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: 'Video Advertising Campaigns',
      description: 'Engaging video ad campaigns for Facebook, Instagram, YouTube, and LinkedIn. We create professional video content, optimize for each platform\'s specifications, and use video analytics to improve performance. Video ads drive higher engagement and conversion rates compared to static ads.',
      icon: <Video className="h-6 w-6" />
    },
    {
      title: 'Social Commerce & Shopping Ads',
      description: 'Social commerce campaigns including Facebook Shops, Instagram Shopping, and dynamic product ads. We set up product catalogs, create shopping experiences, and optimize for sales. These campaigns enable direct purchases from social media platforms, reducing friction in the customer journey.',
      icon: <ShoppingCart className="h-6 w-6" />
    },
    {
      title: 'Monthly Reporting & Strategy Reviews',
      description: 'Comprehensive monthly reports tracking campaign performance, ROI, cost per acquisition, and other key metrics. We provide actionable insights and recommendations for improvement. Regular strategy reviews ensure campaigns align with business goals and adapt to market changes.',
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹35,000',
      monthlyPrice: '₹17,500/mo',
      campaigns: 'Up to 3',
      platforms: '2 Platforms',
      adCreatives: '8',
      originalPrice: '₹45,000',
      savings: '₹10,000',
      features: [
        'Social Media Ads Account Setup',
        'Basic Campaign Management (3 campaigns)',
        'Ad Creative Development (8 creatives/month)',
        'Basic Audience Targeting',
        'Conversion Tracking Setup',
        'Monthly Performance Reports',
        'Email Support',
        'Basic Analytics Dashboard'
      ],
      bestFor: 'Small businesses starting with social media advertising',
      limitations: ['Limited campaign management', 'Basic reporting only', 'No priority support']
    },
    {
      name: 'Professional',
      price: '₹65,000',
      monthlyPrice: '₹32,500/mo',
      campaigns: 'Up to 8',
      platforms: '4 Platforms',
      adCreatives: '20',
      originalPrice: '₹75,000',
      savings: '₹10,000',
      features: [
        'Comprehensive Social Media Ads Setup',
        'Advanced Campaign Management (8 campaigns)',
        'Professional Ad Creative Development (20 creatives/month)',
        'Advanced Audience Targeting & Segmentation',
        'A/B Testing & Optimization',
        'Retargeting Campaigns',
        'Video Ad Creation',
        'Advanced Analytics & Conversion Tracking',
        'Monthly & Quarterly Detailed Reports',
        'Competitor Analysis & Strategy',
        'Dedicated Social Media Ads Manager',
        'Priority Phone & Email Support',
        'Lead Generation Campaigns',
        'Social Commerce Setup',
        'Multi-Platform Management'
      ],
      bestFor: 'Growing businesses serious about social media advertising results',
      exclusiveFeatures: ['Exclusive: AI-Powered Audience Insights', 'Exclusive: Advanced Creative Testing', 'Exclusive: Custom Social Media Dashboard']
    },
    {
      name: 'Enterprise',
      price: '₹1,25,000',
      monthlyPrice: '₹62,500/mo',
      campaigns: 'Unlimited',
      platforms: 'All Platforms',
      adCreatives: '50',
      originalPrice: '₹1,35,000',
      savings: '₹10,000',
      features: [
        'Everything in Professional',
        'Unlimited Campaign Management',
        'Full-Scale Creative Development (50+ creatives/month)',
        'Advanced Multi-Platform Strategy',
        'Enterprise-Level Analytics & Reporting',
        'Weekly Performance Reviews',
        'Dedicated Social Media Ads Team (3 specialists)',
        '24/7 Priority Support',
        'Custom Integrations & Tools',
        'Advanced Video Production',
        'Influencer Partnership Management',
        'Social Commerce Optimization',
        'International Campaign Management',
        'Advanced Attribution Modeling',
        'Custom Reporting & Dashboards'
      ],
      bestFor: 'Large businesses requiring maximum social media advertising impact',
      limitations: ['Higher investment required', 'Complex implementation timeline']
    }
  ];

  const technologyFeatures = [
    {
      title: 'Real-Time Campaign Monitoring',
      description: 'Track your social media ad performance across all platforms—updated in real-time.',
      icon: <Activity className="h-8 w-8" />
    },
    {
      title: 'AI-Powered Audience Insights',
      description: 'Discover high-value audiences your competition misses.',
      icon: <Brain className="h-8 w-8" />
    },
    {
      title: 'Competitor Intelligence',
      description: 'Benchmark against your market in Delhi, NCR, and all of India.',
      icon: <Eye className="h-8 w-8" />
    },
    {
      title: 'Automated Optimization',
      description: 'Proactive campaign adjustments and alerts—never miss optimization opportunities.',
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Live Performance Dashboards',
      description: 'Access all analytics, conversions, leads, and growth metrics anytime.',
      icon: <BarChart className="h-8 w-8" />
    }
  ];

  const caseStudies = [
    {
      title: 'E-Commerce Brand Skyrockets Sales with Social Ads',
      description: 'With Marktechrover\'s social media advertising strategy, our e-commerce brand achieved 400% increase in online sales through targeted Facebook and Instagram campaigns—results that brought in 5X qualified customers within six months.',
      metric: '400% Sales Increase',
      timeframe: '6 Months'
    },
    {
      title: 'NCR-Based SaaS Firm Dominates LinkedIn',
      description: 'We went from invisible to the go-to in NCR\'s SaaS scene. The blend of LinkedIn advertising and lead generation campaigns brought in enterprise clients—beyond our expectations.',
      metric: 'Enterprise Clients',
      timeframe: 'LinkedIn Dominance'
    },
    {
      title: 'Pan-India Service Business Expands Reach',
      description: 'We cracked the code for national social media presence. Our ad reach, engagement, and conversions grew and continue to trend upward every month.',
      metric: 'National Reach',
      timeframe: 'Ongoing Growth'
    }
  ];

  const approachSteps = [
    {
      step: 'Step 1: Strategy & Audit',
      description: 'Understand your business goals, target audience, and competitor landscape.',
      detailedDescription: 'We conduct a comprehensive analysis of your current social media presence, competitor strategies, and market opportunities. This includes audience research, platform analysis, and content performance review.',
      icon: <Search className="h-6 w-6" />,
      duration: '1-2 weeks',
      deliverables: ['Social Media Audit', 'Competitor Analysis', 'Audience Research', 'Platform Strategy'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/20 to-blue-600/20'
    },
    {
      step: 'Step 2: Custom Roadmap',
      description: 'No generic plans—only tailored, goal-oriented strategies.',
      detailedDescription: 'Based on our audit findings, we create a personalized social media advertising roadmap that aligns with your business objectives. This includes campaign structure, budget allocation, and timeline projections.',
      icon: <Target className="h-6 w-6" />,
      duration: '1 week',
      deliverables: ['Custom Ad Strategy', 'Campaign Structure', 'Content Calendar', 'Timeline Projections'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20'
    },
    {
      step: 'Step 3: Campaign Launch',
      description: 'Creative development, audience targeting, and campaign setup delivered together.',
      detailedDescription: 'Our comprehensive execution covers all aspects of social media advertising simultaneously. We create compelling ad creatives, build targeted audiences, set up tracking, and launch optimized campaigns.',
      icon: <Layers className="h-6 w-6" />,
      duration: 'Ongoing',
      deliverables: ['Ad Creative Development', 'Campaign Setup', 'Audience Building', 'Tracking Implementation'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/20 to-green-600/20'
    },
    {
      step: 'Step 4: Ongoing Optimization',
      description: 'Daily monitoring, proactive adjustments, and constant adaptation to platform updates.',
      detailedDescription: 'We continuously monitor your campaigns, optimize based on performance data, and adapt to platform algorithm changes. Regular strategy reviews ensure we stay ahead of the competition.',
      icon: <RefreshCw className="h-6 w-6" />,
      duration: 'Daily',
      deliverables: ['Performance Monitoring', 'Algorithm Adaptation', 'Budget Optimization', 'Creative Testing'],
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
      question: 'How soon will I see social media advertising results?',
      answer: 'Expect to see initial results within 1-2 weeks for most campaigns, with significant improvements in reach, engagement, and conversions achieved within 2-3 months. The biggest gains come from committed clients with sustained monthly optimization.',
      category: 'timeline',
      tags: ['results', 'timeline', 'performance']
    },
    {
      question: 'Is all work original and platform-compliant?',
      answer: 'Yes! All ad creatives and strategies are created by our team and follow Facebook, Instagram, LinkedIn, and other platform best practices for safety and long-term success.',
      category: 'safety',
      tags: ['compliance', 'safety', 'platforms']
    },
    {
      question: 'Which plan should I pick?',
      answer: 'Pick a plan that matches your business size and growth goals, or ask for a free, custom audit and recommendation from our team.',
      category: 'pricing',
      tags: ['packages', 'pricing', 'selection']
    },
    {
      question: 'Can I scale my package later?',
      answer: 'Absolutely. Our packages are flexible—upgrade or customize at any time as your needs expand.',
      category: 'pricing',
      tags: ['scaling', 'flexibility', 'upgrades']
    },
    {
      question: 'What\'s included in reporting?',
      answer: 'You\'ll get interactive dashboards, campaign performance reports, conversion analysis, and ROI tracking every month.',
      category: 'reporting',
      tags: ['analytics', 'reports', 'tracking']
    },
    {
      question: 'Do you work with businesses outside Delhi NCR?',
      answer: 'Yes, we serve clients globally. While we\'re based in Delhi, NCR, our social media advertising strategies work for businesses worldwide, with specialized targeting for Indian markets.',
      category: 'service',
      tags: ['international', 'global', 'local']
    },
    {
      question: 'What makes your social media advertising different from others?',
      answer: 'Our data-driven approach, transparent reporting, and focus on ROI set us apart. We don\'t just run ads—we drive measurable business growth through strategic social media advertising.',
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
                <Megaphone className={`h-10 w-10 text-white transition-all duration-1000 ${
                  heroAnimationComplete ? 'scale-100' : 'scale-0'
                }`} />
              </div>
            </div>

            {/* Animated Title */}
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              MarkTechRover: Delhi's <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent font-extrabold">Social Media Advertising Agency</span> for Revenue Growth
            </h1>

            {/* Animated Description */}
            <p className={`text-xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Grow with a Delhi-based team that blends AI insights with full-funnel social media advertising. We focus on measurable ROI, transparent reporting, and strategies tuned for India's social media landscape—so you win across Facebook, Instagram, LinkedIn, and beyond.
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
                <div className="text-gray-300 font-semibold">Social Media Awards</div>
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
                <span className="text-gray-300 text-sm">Meta Business Partner</span>
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
                <span className="relative z-10">Get Free Social Media Ads Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <button
                onClick={() => scrollToSection('packages')}
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Social Media Advertising Company Built for 2025</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">AI insights, human execution, and full-funnel ROI tracking — tailored for Delhi, NCR and pan-India markets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10">
              <div className="flex items-center space-x-3 mb-3">
                <Cpu className="h-5 w-5 text-purple-300" />
                <h3 className="text-white font-semibold">AI-Powered Audience Targeting</h3>
              </div>
              <p className="text-gray-300 text-sm">Target the right audiences across all platforms. Stay ahead as social media advertising evolves.</p>
            </div>
            <div className="rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="h-5 w-5 text-purple-300" />
                <h3 className="text-white font-semibold">Dedicated Delhi Team</h3>
              </div>
              <p className="text-gray-300 text-sm">A cross-functional team for strategy, creative, campaigns, and CRO — aligned to your goals.</p>
            </div>
            <div className="rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10">
              <div className="flex items-center space-x-3 mb-3">
                <BarChart3 className="h-5 w-5 text-purple-300" />
                <h3 className="text-white font-semibold">Revenue Reporting</h3>
              </div>
              <p className="text-gray-300 text-sm">Dashboards that connect ad performance to leads and revenue — not just impressions.</p>
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
            <nav className="flex items-center space-x-1 px-6 py-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${activeSection === item.id ? 'text-purple-300 bg-gradient-to-r from-purple-500/30 to-purple-400/30 border border-purple-400/50 shadow-lg shadow-purple-500/25' : 'text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/20 to-purple-400/20 hover:border-purple-300/30'} px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg`}
                >
                  {item.icon}
                  <span className="hidden sm:inline">{item.label}</span>
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
              At Marktechrover, our deliverables are crafted to help you reach the right audience, drive engagement, and convert more leads—month after month:
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
                            <span className="text-sm">Professional implementation by certified experts</span>
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
                            <div className="text-2xl font-bold text-cyan-300">+50%</div>
                            <div className="text-xs text-blue-200">Reach Increase</div>
                          </div>
                          <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                            <div className="text-2xl font-bold text-cyan-300">+35%</div>
                            <div className="text-xs text-blue-200">Conversion Rate</div>
                          </div>
                          <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                            <div className="text-2xl font-bold text-cyan-300">+70%</div>
                            <div className="text-xs text-blue-200">Lead Generation</div>
                          </div>
                          <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                            <div className="text-2xl font-bold text-cyan-300">+45%</div>
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
                              <div className="text-blue-200 font-semibold">Week 1-2: Setup & Strategy</div>
                              <div className="text-blue-100 text-sm">Account setup, audience research, and strategy planning</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                            <div>
                              <div className="text-blue-200 font-semibold">Week 3-8: Campaign Launch</div>
                              <div className="text-blue-100 text-sm">Creative development and campaign launch</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                            <div>
                              <div className="text-blue-200 font-semibold">Month 2+: Optimization</div>
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
                            <span className="text-gray-300">Facebook Ads Manager</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">Instagram Ads</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">LinkedIn Campaign Manager</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">Twitter Ads</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">Google Analytics</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">Pixel Tracking</span>
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

      {/* Monthly Packages Section */}
      <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/5 via-transparent to-purple-900/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
              <BarChart3 className="h-4 w-4 mr-2" />
              Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Social Media Advertising Plans Built for Growth</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Transparent monthly packages tailored for Delhi & pan-India businesses. Upgrade anytime. Every plan includes reporting, dashboards, and quarterly strategy reviews.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  index === 1 
                    ? 'bg-transparent border-white/40 shadow-lg' 
                    : index === 0
                    ? 'bg-transparent border-white/25'
                    : 'bg-transparent border-white/25'
                }`}
              >
                {/* Popular Badge */}
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-transparent text-white py-2 text-center text-xs font-bold border-b border-white/30 backdrop-blur-sm">
                    🔥 MOST POPULAR - 67% CHOOSE THIS
                  </div>
                )}
                
                {/* Discount Badge */}
                <div className="absolute top-8 right-3">
                  <div className="bg-transparent text-white px-2 py-1 rounded-full text-xs font-bold border border-white/40">
                    SAVE ₹10,000
                  </div>
                </div>
                
                {/* Package Header */}
                <div className={`p-6 ${index === 1 ? 'pt-12' : 'pt-10'}`}>
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                      index === 1 
                        ? 'bg-white/10' 
                        : 'bg-white/10'
                    }`}>
                      {index === 0 && <Target className="h-8 w-8 text-white" />}
                      {index === 1 && <Crown className="h-8 w-8 text-white" />}
                      {index === 2 && <Trophy className="h-8 w-8 text-white" />}
                    </div>
                    <h3 className={`text-2xl font-bold mb-3 ${index === 1 ? 'text-white' : 'text-gray-200'}`}>
                      {pkg.name}
                    </h3>
                    
                    {/* Best For */}
                    <div className="mb-3">
                      <p className="text-xs text-gray-300 italic">{pkg.bestFor}</p>
                    </div>
                    
                    {/* Pricing with Psychological Anchoring */}
                    <div className="mb-5">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-sm text-gray-400 line-through">{pkg.originalPrice}</span>
                        <span className="text-xs text-white bg-transparent border border-white/40 px-2 py-1 rounded font-bold">SAVE {pkg.savings}</span>
                      </div>
                      <div className="text-4xl font-bold text-white mb-2">
                        {pkg.price}
                      </div>
                      <div className="text-xs text-gray-300 mb-1">Initial Setup</div>
                      <div className="text-lg font-semibold text-white mb-1">{pkg.monthlyPrice}</div>
                      <div className="text-xs text-gray-300">Monthly After Setup</div>
                    </div>
                  </div>
                  
                  {/* Package Details */}
                  <div className="space-y-4">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-3 p-3 bg-transparent rounded-lg border border-white/20">
                      <div className="text-center">
                        <div className="text-sm font-bold text-white">{pkg.campaigns}</div>
                        <div className="text-xs text-gray-300">Campaigns</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-white">{pkg.platforms}</div>
                        <div className="text-xs text-gray-300">Platforms</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-white">{pkg.adCreatives}</div>
                        <div className="text-xs text-gray-300">Creatives</div>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-white" />
                        <span>What's Included</span>
                      </h4>
                      <div className="space-y-2">
                        {pkg.features.slice(0, 6).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-gray-200 text-xs leading-relaxed">{feature}</span>
                          </div>
                        ))}
                        {pkg.features.length > 6 && (
                          <div className="text-center pt-1">
                            <button className="text-white/90 hover:text-white text-xs font-medium transition-colors duration-200">
                              +{pkg.features.length - 6} more features
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Exclusive Features for Middle Option */}
                    {index === 1 && pkg.exclusiveFeatures && (
                      <div className="p-3 bg-transparent rounded-lg border border-white/20">
                        <h4 className="text-xs font-semibold text-white mb-2 flex items-center space-x-2">
                          <Star className="h-3 w-3" />
                          <span>Professional Exclusive Features</span>
                        </h4>
                        <div className="space-y-1">
                          {pkg.exclusiveFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-gray-200 text-xs leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Limitations for Side Options */}
                    {index !== 1 && pkg.limitations && (
                      <div className="p-3 bg-gradient-to-r from-sky-900/20 to-blue-800/20 rounded-lg border border-blue-500/20">
                        <h4 className="text-xs font-semibold text-blue-300 mb-2 flex items-center space-x-2">
                          <AlertTriangle className="h-3 w-3" />
                          <span>Limitations</span>
                        </h4>
                        <div className="space-y-1">
                          {pkg.limitations.map((limitation, limitationIndex) => (
                            <div key={limitationIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-blue-200 text-xs leading-relaxed">{limitation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Expected Results */}
                    <div className="p-3 bg-transparent rounded-lg border border-white/20">
                      <h4 className="text-xs font-semibold text-white mb-2 flex items-center space-x-2">
                        <TrendingUp className="h-3 w-3" />
                        <span>Expected Results (3 months)</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-2 bg-transparent rounded border border-white/15">
                          <div className="text-sm font-bold text-white">
                            {index === 0 ? '+100%' : index === 1 ? '+200%' : '+300%'}
                          </div>
                          <div className="text-xs text-gray-300">Ad Reach</div>
                        </div>
                        <div className="text-center p-2 bg-transparent rounded border border-white/15">
                          <div className="text-sm font-bold text-white">
                            {index === 0 ? '+150%' : index === 1 ? '+250%' : '+350%'}
                          </div>
                          <div className="text-xs text-gray-300">Lead Generation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* CTA Section */}
                <div className="p-6 pt-0">
                  <Link
                    to="/contact"
                    className={`block w-full text-center px-4 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 ${
                      index === 1
                        ? 'bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-black'
                        : 'bg-blue-600 hover:bg-blue-500 text-white'
                    }`}
                  >
                    {index === 1 ? '🔥 Get Started Now - Most Popular' : 'Choose This Plan'}
                  </Link>
                  
                  {/* Trust Elements */}
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-300">
                      <Shield className="h-3 w-3" />
                      <span>30-Day Money Back Guarantee</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-300">
                      <CheckCircle className="h-3 w-3" />
                      <span>No Setup Fees</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-300">
                      <Users className="h-3 w-3" />
                      <span>Dedicated Account Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Trust Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Why 500+ Businesses Trust Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2">91%</div>
                  <div className="text-white font-semibold">Client Retention</div>
                  <div className="text-gray-400 text-sm">Industry average: 65%</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">4.9/5</div>
                  <div className="text-white font-semibold">Client Rating</div>
                  <div className="text-gray-400 text-sm">Based on 200+ reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">5+</div>
                  <div className="text-white font-semibold">Years Experience</div>
                  <div className="text-gray-400 text-sm">Social Media Advertising</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-white font-semibold">Support Available</div>
                  <div className="text-gray-400 text-sm">Phone, Email, Chat</div>
                </div>
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
              Our Technology: Smarter Social Media Advertising for Modern Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Marktechrover invests in powerful tools and automation to keep your social media advertising strategy one step ahead
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
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">+15%</div>
              <div className="text-lg font-semibold text-white mb-1">Boost in Conversion Rate</div>
              <div className="text-gray-400 text-sm">for campaigns with ai-driven audience targeting</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-lg font-semibold text-white mb-1">Set up by Marktechrover</div>
              <div className="text-gray-400 text-sm">to give you the best data foundation</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">₹500K+</div>
              <div className="text-lg font-semibold text-white mb-1">Built-in Value</div>
              <div className="text-gray-400 text-sm">based on cost of similar tools</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real testimonials from businesses across Delhi, NCR, and India
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
                "Marktechrover transformed our social media presence completely. We went from zero engagement to thousands of leads in just 4 months. The results speak for themselves!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Rahul Sharma</div>
                  <div className="text-gray-400 text-sm">CEO, TechSolutions Delhi</div>
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
                "The team at Marktechrover is incredibly professional and results-driven. Our social media ad conversions increased by 400% within the first year of working with them."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Priya Patel</div>
                  <div className="text-gray-400 text-sm">Marketing Director, E-Commerce Brand</div>
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
                "Best investment we've made for our business. Marktechrover's social media advertising expertise helped us dominate the NCR market and attract high-quality leads."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Amit Kumar</div>
                  <div className="text-gray-400 text-sm">Founder, NCR Services</div>
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
              Case Studies: Delhi-NCR & India Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses across India
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
              A proven 5-step process that delivers consistent results
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
                    <span className="text-gray-300">Reach Growth</span>
                    <span className="text-green-400 font-semibold">+150-300%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Engagement Rate</span>
                    <span className="text-blue-400 font-semibold">Top 10%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Lead Generation</span>
                    <span className="text-purple-400 font-semibold">+200%</span>
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
                Ready to Start Your Social Media Advertising Journey?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join hundreds of businesses that have transformed their online presence with our proven approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Social Media Ads Audit
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
              Everything you need to know about our social media advertising services
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
                                Social Media Related
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
                Can't find what you're looking for? Our social media advertising experts are here to help!
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
              Why Choose Marktechrover for Social Media Advertising?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another social media advertising agency. We're your strategic partner for digital growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Results-Driven</h3>
              <p className="text-gray-400">We focus on measurable outcomes, not just impressions.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Platform-Compliant</h3>
              <p className="text-gray-400">All our strategies comply with Facebook, Instagram, LinkedIn, and other platform guidelines.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-400">Certified social media advertising specialists with years of experience.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scalable Growth</h3>
              <p className="text-gray-400">Strategies that grow with your business needs.</p>
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
                Ready to dominate social media?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Partner with Marktechrover—the best social media advertising service provider in Delhi, NCR, and across India. Get in touch for a free consultation or a detailed proposal tailored to your business goals!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Free social media audit worth ₹25,000</span>
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
                    Get Free Social Media Ads Consultation
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

export default SocialMediaAds; 