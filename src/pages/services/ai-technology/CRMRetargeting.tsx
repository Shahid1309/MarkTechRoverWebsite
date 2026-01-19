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
  Layout,
  Smartphone as MobileIcon,
  Monitor as DesktopIcon,
  Palette as DesignIcon,
  Server,
  Workflow,
  Network,
  Link2,
  Building2,
  Briefcase,
  LineChart,
  Gauge,
  Filter,
  Bell,
  Mail as MailIcon,
  Repeat,
  RefreshCcw as RefreshIcon,
  MousePointerClick,
  Eye as EyeIcon
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const CRMRetargeting = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<number>(0);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Rocket className="h-4 w-4" /> },
    { id: 'features', label: 'Features', icon: <Zap className="h-4 w-4" /> },
    { id: 'how-it-works', label: 'How It Works', icon: <Settings className="h-4 w-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'pricing', label: 'Pricing', icon: <DollarSign className="h-4 w-4" /> },
    { id: 'case-studies', label: 'Success Stories', icon: <Trophy className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  // Scroll to top on mount and ensure content is visible
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    // Also use requestAnimationFrame to ensure it happens after render
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, []);

  // Handle scroll for sticky navigation and active section detection
  useEffect(() => {
    const sectionIds = ['overview', 'features', 'how-it-works', 'benefits', 'pricing', 'case-studies', 'faqs'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 600;
      setIsNavSticky(scrollPosition > heroHeight);

      // Update active section based on scroll position
      let currentSection = sectionIds[0];
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150;
          if (rect.top <= offset) {
            currentSection = sectionIds[i];
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    title: 'CRM Retargeting Technology | Advanced CRM-Based Retargeting Campaigns | MarkTechRover',
    description: 'CRM Retargeting Technology - Advanced CRM-based retargeting campaigns to re-engage customers and drive revenue. Target your CRM contacts with personalized ads across platforms. Best CRM retargeting services in Delhi NCR & India.',
    keywords: [
      'CRM Retargeting', 'CRM Retargeting Technology', 'CRM-Based Retargeting', 'Customer Retargeting',
      'CRM Advertising', 'Retargeting Campaigns', 'CRM Marketing', 'Customer Re-engagement',
      'CRM Retargeting Delhi', 'Best CRM Retargeting India', 'CRM Retargeting Services', 'Advanced Retargeting',
      'Personalized Retargeting', 'CRM Data Retargeting', 'Customer Retargeting Platform'
    ],
    url: '/services/ai-technology/crm-retargeting',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['CRM Retargeting', 'Retargeting Technology', 'CRM Marketing', 'Customer Re-engagement'],
    image: '/images/crm-retargeting.webp'
  };

  const features = [
    {
      id: 1,
      title: 'CRM Data Integration',
      description: 'Seamlessly integrate your CRM data with advertising platforms for precise retargeting',
      icon: <Database className="h-8 w-8" />,
      features: [
        'Automatic CRM data synchronization',
        'Real-time contact list updates',
        'Multi-CRM platform support',
        'Data privacy and compliance',
        'Custom audience segmentation',
        'Contact matching and deduplication'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'Multi-Platform Retargeting',
      description: 'Retarget your CRM contacts across Google Ads, Facebook, LinkedIn, and other platforms',
      icon: <Network className="h-8 w-8" />,
      features: [
        'Google Ads retargeting',
        'Facebook & Instagram retargeting',
        'LinkedIn retargeting campaigns',
        'Twitter and other platforms',
        'Cross-platform campaign management',
        'Unified reporting and analytics'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 3,
      title: 'Personalized Ad Campaigns',
      description: 'Create highly personalized retargeting campaigns based on CRM data and customer behavior',
      icon: <Target className="h-8 w-8" />,
      features: [
        'Dynamic ad personalization',
        'Behavior-based targeting',
        'Customer lifecycle targeting',
        'Product/service recommendations',
        'Personalized messaging',
        'A/B testing and optimization'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 4,
      title: 'Advanced Segmentation',
      description: 'Segment your CRM contacts into highly targeted audiences for maximum campaign effectiveness',
      icon: <Filter className="h-8 w-8" />,
      features: [
        'Custom audience segmentation',
        'Behavioral segmentation',
        'Demographic targeting',
        'Purchase history targeting',
        'Engagement level segmentation',
        'Lifecycle stage targeting'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'Campaign Automation',
      description: 'Automate retargeting campaigns with intelligent triggers and workflow automation',
      icon: <Zap className="h-8 w-8" />,
      features: [
        'Automated campaign triggers',
        'Workflow automation',
        'Smart bidding optimization',
        'Budget management automation',
        'Performance-based adjustments',
        'Campaign scheduling'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting to track retargeting campaign performance and ROI',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        'Real-time campaign analytics',
        'ROI and revenue tracking',
        'Conversion attribution',
        'Customer journey analysis',
        'Custom reports and dashboards',
        'Performance insights and recommendations'
      ],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-500/10 to-violet-400/10',
      borderColor: 'border-violet-500/20',
      textColor: 'text-violet-300'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'CRM Integration',
      description: 'Connect your CRM platform and sync contact data automatically',
      icon: <Link2 className="h-6 w-6" />,
      details: [
        'Connect Salesforce, HubSpot, or other CRM',
        'Automatic data synchronization',
        'Real-time contact updates',
        'Secure data handling'
      ]
    },
    {
      step: '02',
      title: 'Audience Creation',
      description: 'Create custom retargeting audiences from your CRM contacts',
      icon: <Users className="h-6 w-6" />,
      details: [
        'Segment contacts by behavior',
        'Create custom audience lists',
        'Match contacts to ad platforms',
        'Set up audience rules'
      ]
    },
    {
      step: '03',
      title: 'Campaign Setup',
      description: 'Configure retargeting campaigns with personalized ads',
      icon: <Settings className="h-6 w-6" />,
      details: [
        'Create ad campaigns',
        'Set targeting parameters',
        'Configure budgets and bids',
        'Set up automation rules'
      ]
    },
    {
      step: '04',
      title: 'Launch & Optimize',
      description: 'Launch campaigns and continuously optimize for better results',
      icon: <Rocket className="h-6 w-6" />,
      details: [
        'Launch retargeting campaigns',
        'Monitor performance in real-time',
        'Optimize based on data',
        'Scale successful campaigns'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Higher Conversion Rates',
      description: 'Retarget CRM contacts who already know your brand for significantly higher conversion rates',
      icon: <TrendingUp className="h-8 w-8" />,
      metric: '3-5x',
      label: 'Higher Conversion'
    },
    {
      title: 'Better ROI',
      description: 'Target warm leads from your CRM for improved return on advertising investment',
      icon: <DollarSign className="h-8 w-8" />,
      metric: '45%',
      label: 'ROI Improvement'
    },
    {
      title: 'Reduced Ad Waste',
      description: 'Target only relevant contacts from your CRM, reducing wasted ad spend',
      icon: <Target className="h-8 w-8" />,
      metric: '62%',
      label: 'Cost Reduction'
    },
    {
      title: 'Customer Re-engagement',
      description: 'Re-engage inactive customers and bring them back into your sales funnel',
      icon: <RefreshIcon className="h-8 w-8" />,
      metric: '38%',
      label: 'Re-engagement Rate'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹35,000',
      period: 'per month',
      description: 'Perfect for small businesses starting with CRM retargeting',
      features: [
        'Up to 5,000 contacts',
        '1 CRM integration',
        '2 ad platform integrations',
        'Basic audience segmentation',
        'Standard reporting',
        'Email support',
        'Monthly optimization'
      ],
      highlighted: false,
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '₹75,000',
      period: 'per month',
      description: 'Comprehensive CRM retargeting for growing businesses',
      features: [
        'Up to 25,000 contacts',
        'Multiple CRM integrations',
        'All ad platform integrations',
        'Advanced segmentation',
        'Campaign automation',
        'Priority support',
        'Advanced analytics',
        'Weekly optimization',
        'Custom audience creation'
      ],
      highlighted: true,
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-featured CRM retargeting for large organizations',
      features: [
        'Unlimited contacts',
        'Unlimited CRM integrations',
        'All platform integrations',
        'Custom segmentation',
        'Full automation',
        'Dedicated account manager',
        'Custom analytics',
        'Daily optimization',
        'Custom development',
        'SLA guarantees'
      ],
      highlighted: false,
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <PageSEO config={seoConfig}>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-visible">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, opacity: 0.5 }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(147,51,234,0.02)_50%,transparent_70%)] bg-[length:100px_100px] animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 10, isolation: 'isolate' }}>
            <div className="text-center max-w-5xl mx-auto" style={{ position: 'relative', zIndex: 10 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm mb-8" style={{ position: 'relative', zIndex: 10 }}>
                <Repeat className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Advanced CRM Retargeting Technology</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Hire CRM Retargeting Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Re-engage your CRM contacts with personalized retargeting campaigns across Google, Facebook, 
                LinkedIn, and more. Drive revenue by targeting customers who already know your brand.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Get Started
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { value: '3-5x', label: 'Higher Conversion' },
                  { value: '45%', label: 'ROI Improvement' },
                  { value: '62%', label: 'Cost Reduction' },
                  { value: '38%', label: 'Re-engagement' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 backdrop-blur-sm">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-16 bg-gradient-to-r from-gray-900 via-purple-900/20 to-gray-900 border-y border-purple-500/10">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">₹500+</div>
                <div className="text-gray-300">Crores Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">250+</div>
                <div className="text-gray-300">Clients Using CRM Retargeting</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">96%</div>
                <div className="text-gray-300">Client Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        {isNavSticky && (
          <div className="fixed top-20 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-2 overflow-x-auto py-3 scrollbar-hide">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25 scale-105'
                        : 'text-gray-300 hover:text-purple-300 hover:bg-purple-500/10'
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Overview Section */}
          <section id="overview" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Advanced CRM Retargeting Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                CRM Retargeting Technology allows you to retarget your CRM contacts with personalized ads across 
                Google, Facebook, LinkedIn, and other advertising platforms. Re-engage customers, drive conversions, 
                and maximize revenue from your existing CRM database.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">CRM Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Seamlessly connect your CRM platform and automatically sync contact data for retargeting campaigns.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Precise Targeting</h3>
                <p className="text-gray-300 leading-relaxed">
                  Target your CRM contacts with highly personalized ads based on their behavior, preferences, and history.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Higher Conversions</h3>
                <p className="text-gray-300 leading-relaxed">
                  Achieve 3-5x higher conversion rates by retargeting warm leads who already know your brand.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-2xl border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Use CRM Retargeting?</h3>
                  <ul className="space-y-3">
                    {[
                      'Re-engage customers from your CRM database',
                      '3-5x higher conversion rates than cold audiences',
                      'Personalized ads based on CRM data and behavior',
                      'Reduce ad waste by targeting only relevant contacts',
                      'Improve ROI with better targeting and lower costs',
                      'Automate campaigns with intelligent triggers and workflows'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-600/20 to-purple-500/20 rounded-xl p-6 border border-purple-500/30">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">3-5x</div>
                        <div className="text-xs text-gray-400">Higher Conversion</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">45%</div>
                        <div className="text-xs text-gray-400">ROI Improvement</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">62%</div>
                        <div className="text-xs text-gray-400">Cost Reduction</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">38%</div>
                        <div className="text-xs text-gray-400">Re-engagement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Complete CRM Retargeting Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful features designed to maximize your retargeting campaign effectiveness
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border ${feature.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                >
                  <button
                    onClick={() => setExpandedFeature(expandedFeature === index ? -1 : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        expandedFeature === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {expandedFeature === index && (
                    <div className="px-8 pb-6 border-t border-gray-700 pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {feature.features.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className={`h-5 w-5 ${feature.textColor} flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How CRM Retargeting Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Simple 4-step process to start retargeting your CRM contacts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20 border border-purple-500/30">
                        <div className="text-purple-300">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-20 transform -translate-y-1/2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why businesses choose CRM Retargeting Technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20 border border-purple-500/30 mb-4 inline-block">
                    {benefit.icon}
                  </div>
                  <div className="text-right mb-3">
                    <div className="text-2xl font-bold text-purple-300">{benefit.metric}</div>
                    <div className="text-xs text-gray-400">{benefit.label}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Plans Section */}
          <section id="pricing" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include setup and onboarding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-2xl ${
                    plan.highlighted
                      ? 'border-purple-500 shadow-xl shadow-purple-500/25 scale-105'
                      : 'border-purple-500/30 hover:border-purple-500/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {plan.cta}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-purple-300">{plan.price}</span>
                      {plan.period !== 'pricing' && (
                        <span className="text-gray-500"> / {plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 text-center block ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-500/25'
                        : 'bg-gray-800 text-white hover:bg-gray-700 border border-purple-500/30'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Success Stories Section */}
          <section id="case-studies" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from businesses using CRM Retargeting Technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  company: 'E-commerce Retailer',
                  industry: 'Retail',
                  challenge: 'Low conversion rates from website visitors',
                  solution: 'Implemented CRM retargeting to re-engage past customers and website visitors',
                  results: [
                    { metric: '4.2x', label: 'Conversion Rate' },
                    { metric: '52%', label: 'ROI Improvement' },
                    { metric: '38%', label: 'Revenue Growth' }
                  ],
                  testimonial: 'CRM retargeting transformed our advertising. We achieved 4.2x higher conversion rates and 52% ROI improvement by retargeting our CRM contacts.'
                },
                {
                  company: 'B2B SaaS Company',
                  industry: 'Technology',
                  challenge: 'High customer acquisition costs',
                  solution: 'Deployed CRM retargeting to re-engage leads and reduce acquisition costs',
                  results: [
                    { metric: '58%', label: 'Cost Reduction' },
                    { metric: '3.8x', label: 'Conversion Rate' },
                    { metric: '45%', label: 'Lead Re-engagement' }
                  ],
                  testimonial: 'CRM retargeting helped us reduce customer acquisition costs by 58% while achieving 3.8x higher conversion rates. Game changer for our business.'
                },
                {
                  company: 'Professional Services',
                  industry: 'Services',
                  challenge: 'Low engagement from past clients',
                  solution: 'Used CRM retargeting to re-engage inactive clients and drive repeat business',
                  results: [
                    { metric: '42%', label: 'Client Re-engagement' },
                    { metric: '35%', label: 'Repeat Business' },
                    { metric: '28%', label: 'Revenue Growth' }
                  ],
                  testimonial: 'CRM retargeting brought back 42% of our inactive clients. We saw 35% increase in repeat business and 28% revenue growth within 6 months.'
                },
                {
                  company: 'Financial Services',
                  industry: 'Finance',
                  challenge: 'Ineffective traditional advertising',
                  solution: 'Implemented CRM retargeting with personalized campaigns for existing customers',
                  results: [
                    { metric: '5.1x', label: 'Conversion Rate' },
                    { metric: '48%', label: 'ROI Improvement' },
                    { metric: '41%', label: 'Customer Retention' }
                  ],
                  testimonial: 'CRM retargeting delivered 5.1x higher conversion rates compared to our traditional ads. ROI improved by 48% and customer retention increased by 41%.'
                }
              ].map((story, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{story.company}</h3>
                        <p className="text-sm text-gray-400">{story.industry}</p>
                      </div>
                      <Trophy className="h-8 w-8 text-purple-400" />
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-purple-300 mb-1">Challenge:</p>
                      <p className="text-gray-300 text-sm">{story.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-purple-300 mb-1">Solution:</p>
                      <p className="text-gray-300 text-sm">{story.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {story.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
                          <div className="text-xl font-bold text-purple-300 mb-1">{result.metric}</div>
                          <div className="text-xs text-gray-400">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-gray-300 text-sm italic">"{story.testimonial}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs Section */}
          <section id="faqs" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about CRM Retargeting Technology
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What is CRM Retargeting Technology?',
                  answer: 'CRM Retargeting Technology allows you to retarget your CRM contacts with personalized ads across Google Ads, Facebook, LinkedIn, and other advertising platforms. It syncs your CRM data with ad platforms to create custom audiences and retarget contacts who already know your brand.'
                },
                {
                  question: 'How does CRM retargeting differ from regular retargeting?',
                  answer: 'Regular retargeting targets website visitors, while CRM retargeting targets your CRM contacts - customers, leads, and prospects from your database. This allows you to re-engage people who have already interacted with your business, resulting in 3-5x higher conversion rates.'
                },
                {
                  question: 'Which CRM platforms are supported?',
                  answer: 'CRM Retargeting Technology supports all major CRM platforms including Salesforce, HubSpot, Microsoft Dynamics, Zoho CRM, Pipedrive, and many others. We can also integrate with custom CRM systems through our API.'
                },
                {
                  question: 'Which advertising platforms can I use?',
                  answer: 'You can retarget CRM contacts across Google Ads, Facebook, Instagram, LinkedIn, Twitter, and other major advertising platforms. Our platform automatically syncs your CRM data and creates custom audiences on each platform.'
                },
                {
                  question: 'Is my CRM data secure?',
                  answer: 'Yes, security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and follow strict data privacy protocols. Your CRM data is securely synced and never shared with third parties.'
                },
                {
                  question: 'How long does it take to set up?',
                  answer: 'Setup typically takes 1-2 weeks. This includes CRM integration, ad platform connections, audience creation, and campaign configuration. Our team handles the entire setup process and provides training.'
                },
                {
                  question: 'What kind of results can I expect?',
                  answer: 'Most businesses see 3-5x higher conversion rates, 45% ROI improvement, 62% cost reduction, and 38% customer re-engagement rates. Results vary based on your industry, audience size, and campaign strategy.'
                },
                {
                  question: 'Do you provide campaign management?',
                  answer: 'Yes, we provide complete campaign management including setup, optimization, monitoring, and reporting. Our team continuously optimizes your campaigns for better performance and ROI.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Start Retargeting Your CRM Contacts?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get started with CRM Retargeting Technology today. Re-engage your customers and drive revenue 
              with personalized retargeting campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Rocket className="h-5 w-5 mr-2" />
                Get Started
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-900/50 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-purple-900/70 transition-all duration-300"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-purple-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Quick setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Ongoing support</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageSEO>
  );
};

export default CRMRetargeting;
