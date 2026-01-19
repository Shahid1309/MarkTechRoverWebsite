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
  UserCheck,
  UserCircle,
  Fingerprint,
  Merge
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const CustomerDataPlatform = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<number>(0);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Rocket className="h-4 w-4" /> },
    { id: 'features', label: 'Features', icon: <Zap className="h-4 w-4" /> },
    { id: 'capabilities', label: 'Capabilities', icon: <Layers className="h-4 w-4" /> },
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
    const sectionIds = ['overview', 'features', 'capabilities', 'benefits', 'pricing', 'case-studies', 'faqs'];
    
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
    title: 'Customer Data Platform (CDP) | Unified Customer Data Management | MarkTechRover',
    description: 'Customer Data Platform (CDP) - Unified customer data management and insights platform. Centralize customer data, create unified profiles, and activate customer insights across all channels. Best CDP services in Delhi NCR & India.',
    keywords: [
      'Customer Data Platform', 'CDP', 'Customer Data Management', 'Unified Customer Profiles',
      'Customer Data Platform India', 'CDP Services', 'Customer Data Integration', 'Customer Insights',
      'CDP Delhi', 'Best CDP India', 'Customer Data Platform Services', 'Data Management Platform',
      'Customer Identity Resolution', 'Customer Segmentation', 'Customer Analytics Platform'
    ],
    url: '/services/ai-technology/customer-data-platform',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['Customer Data Platform', 'CDP', 'Customer Data Management', 'Customer Insights'],
    image: '/images/customer-data-platform.webp'
  };

  const features = [
    {
      id: 1,
      title: 'Unified Customer Profiles',
      description: 'Create comprehensive, unified customer profiles by combining data from all sources',
      icon: <UserCircle className="h-8 w-8" />,
      features: [
        '360-degree customer view',
        'Identity resolution and matching',
        'Real-time profile updates',
        'Cross-channel data unification',
        'Historical data integration',
        'Profile enrichment and validation'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'Data Integration & Collection',
      description: 'Collect and integrate customer data from all touchpoints and systems',
      icon: <Link2 className="h-8 w-8" />,
      features: [
        'Multi-source data integration',
        'Real-time data collection',
        'API and webhook support',
        'Batch data processing',
        'Data transformation and mapping',
        'Data quality management'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 3,
      title: 'Customer Segmentation',
      description: 'Advanced segmentation capabilities to create targeted customer groups',
      icon: <Filter className="h-8 w-8" />,
      features: [
        'Behavioral segmentation',
        'Demographic segmentation',
        'Predictive segmentation',
        'Dynamic segment updates',
        'Multi-dimensional segmentation',
        'Segment performance tracking'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 4,
      title: 'Customer Journey Mapping',
      description: 'Map and analyze customer journeys across all touchpoints and channels',
      icon: <MapPin className="h-8 w-8" />,
      features: [
        'Journey visualization',
        'Touchpoint tracking',
        'Journey analytics',
        'Path analysis',
        'Journey optimization',
        'Cross-channel journey mapping'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'Data Activation',
      description: 'Activate customer data across marketing, sales, and service channels',
      icon: <Zap className="h-8 w-8" />,
      features: [
        'Marketing platform activation',
        'Sales system integration',
        'Customer service activation',
        'Real-time data sync',
        'Campaign activation',
        'Personalization activation'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'Privacy & Compliance',
      description: 'Enterprise-grade privacy, security, and compliance features',
      icon: <Shield className="h-8 w-8" />,
      features: [
        'GDPR compliance',
        'CCPA compliance',
        'Data encryption',
        'Consent management',
        'Data retention policies',
        'Privacy controls'
      ],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-500/10 to-violet-400/10',
      borderColor: 'border-violet-500/20',
      textColor: 'text-violet-300'
    }
  ];

  const capabilities = [
    {
      title: 'Identity Resolution',
      description: 'Match and merge customer records across systems to create unified identities',
      icon: <Fingerprint className="h-8 w-8" />,
      benefits: [
        'Accurate customer matching',
        'Duplicate detection and merging',
        'Cross-device identity resolution',
        'Email and phone matching',
        'Cookie and device ID matching'
      ]
    },
    {
      title: 'Real-Time Processing',
      description: 'Process and update customer data in real-time as interactions occur',
      icon: <Activity className="h-8 w-8" />,
      benefits: [
        'Real-time data updates',
        'Instant profile enrichment',
        'Live segmentation',
        'Real-time activation',
        'Streaming data processing'
      ]
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-powered predictive analytics to forecast customer behavior and value',
      icon: <Brain className="h-8 w-8" />,
      benefits: [
        'Customer lifetime value prediction',
        'Churn prediction',
        'Purchase probability scoring',
        'Next best action recommendations',
        'Behavioral predictions'
      ]
    },
    {
      title: 'Data Enrichment',
      description: 'Enrich customer profiles with additional data from external sources',
      icon: <Database className="h-8 w-8" />,
      benefits: [
        'Contact data enrichment',
        'Company data enrichment',
        'Behavioral data enrichment',
        'Social data integration',
        'Third-party data sources'
      ]
    },
    {
      title: 'Customer Insights',
      description: 'Generate actionable insights from unified customer data',
      icon: <Lightbulb className="h-8 w-8" />,
      benefits: [
        'Customer behavior insights',
        'Segmentation insights',
        'Journey insights',
        'Performance insights',
        'Custom analytics'
      ]
    },
    {
      title: 'API & Integrations',
      description: 'Robust APIs and integrations to connect with all your systems',
      icon: <Network className="h-8 w-8" />,
      benefits: [
        'RESTful API',
        'Webhook support',
        'Pre-built integrations',
        'Custom integrations',
        'Real-time sync'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Single Source of Truth',
      description: 'Unified customer data from all sources in one centralized platform',
      icon: <Database className="h-8 w-8" />,
      metric: '100%',
      label: 'Data Unification'
    },
    {
      title: 'Better Customer Understanding',
      description: 'Complete 360-degree view of every customer for better insights',
      icon: <Eye className="h-8 w-8" />,
      metric: '360°',
      label: 'Customer View'
    },
    {
      title: 'Improved Personalization',
      description: 'Deliver highly personalized experiences based on unified customer data',
      icon: <Target className="h-8 w-8" />,
      metric: '73%',
      label: 'Personalization'
    },
    {
      title: 'Increased Revenue',
      description: 'Drive revenue growth with better customer insights and targeting',
      icon: <TrendingUp className="h-8 w-8" />,
      metric: '42%',
      label: 'Revenue Growth'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹60,000',
      period: 'per month',
      description: 'Perfect for small businesses starting with customer data management',
      features: [
        'Up to 10,000 customer profiles',
        'Basic data integration',
        'Standard segmentation',
        'Basic analytics',
        'Email support',
        'Standard compliance',
        'API access'
      ],
      highlighted: false,
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '₹1,25,000',
      period: 'per month',
      description: 'Comprehensive CDP for growing businesses with advanced features',
      features: [
        'Up to 100,000 customer profiles',
        'Advanced data integration',
        'Advanced segmentation',
        'Predictive analytics',
        'Priority support',
        'Advanced compliance',
        'Real-time processing',
        'Custom integrations',
        'Dedicated account manager'
      ],
      highlighted: true,
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-featured CDP for large organizations with custom requirements',
      features: [
        'Unlimited customer profiles',
        'Unlimited data sources',
        'Custom segmentation',
        'Advanced analytics',
        '24/7 priority support',
        'Enterprise compliance',
        'Real-time processing',
        'Custom development',
        'On-premise options',
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
                <Database className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Unified Customer Data Management</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Hire CDP Implementation Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Unify customer data from all sources into one comprehensive platform. Create unified customer profiles, 
                gain actionable insights, and activate customer data across all channels for better engagement and revenue.
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
                  { value: '100%', label: 'Data Unification' },
                  { value: '360°', label: 'Customer View' },
                  { value: '73%', label: 'Personalization' },
                  { value: '42%', label: 'Revenue Growth' }
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
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">₹850+</div>
                <div className="text-gray-300">Crores Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">350+</div>
                <div className="text-gray-300">Clients Using CDP</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">94%</div>
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
                Customer Data Platform (CDP)
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A Customer Data Platform (CDP) is a unified system that collects, integrates, and manages customer data 
                from all sources to create comprehensive customer profiles. Use these profiles to deliver personalized 
                experiences, improve marketing effectiveness, and drive revenue growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Merge className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Unified Data</h3>
                <p className="text-gray-300 leading-relaxed">
                  Combine customer data from all sources - CRM, website, email, social media, and more - into unified profiles.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Identity Resolution</h3>
                <p className="text-gray-300 leading-relaxed">
                  Match and merge customer records across systems to create accurate, unified customer identities.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data Activation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Activate unified customer data across marketing, sales, and service channels for better engagement.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-2xl border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Use a Customer Data Platform?</h3>
                  <ul className="space-y-3">
                    {[
                      'Unify customer data from all sources into one platform',
                      'Create comprehensive 360-degree customer profiles',
                      'Improve customer segmentation and targeting',
                      'Enable better personalization across all channels',
                      'Gain actionable customer insights and analytics',
                      'Ensure data privacy and compliance (GDPR, CCPA)'
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
                        <div className="text-3xl font-bold text-purple-300 mb-1">100%</div>
                        <div className="text-xs text-gray-400">Data Unification</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">360°</div>
                        <div className="text-xs text-gray-400">Customer View</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">73%</div>
                        <div className="text-xs text-gray-400">Personalization</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">42%</div>
                        <div className="text-xs text-gray-400">Revenue Growth</div>
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
                Complete CDP Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful features for unified customer data management and activation
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

          {/* Capabilities Section */}
          <section id="capabilities" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful capabilities to manage and activate customer data effectively
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20 border border-purple-500/30 mb-4 inline-block">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
                Why businesses choose Customer Data Platform (CDP)
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
                Real results from businesses using Customer Data Platform (CDP)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  company: 'E-commerce Brand',
                  industry: 'Retail',
                  challenge: 'Fragmented customer data across multiple systems',
                  solution: 'Implemented CDP to unify customer data from all sources',
                  results: [
                    { metric: '73%', label: 'Personalization' },
                    { metric: '42%', label: 'Revenue Growth' },
                    { metric: '58%', label: 'Customer Retention' }
                  ],
                  testimonial: 'CDP unified our customer data from 8 different systems. We achieved 73% improvement in personalization and 42% revenue growth within 6 months.'
                },
                {
                  company: 'B2B SaaS Company',
                  industry: 'Technology',
                  challenge: 'Incomplete customer profiles and poor segmentation',
                  solution: 'Deployed CDP with identity resolution and advanced segmentation',
                  results: [
                    { metric: '360°', label: 'Customer View' },
                    { metric: '55%', label: 'Segmentation' },
                    { metric: '48%', label: 'Marketing ROI' }
                  ],
                  testimonial: 'CDP gave us complete 360-degree customer view. Our segmentation improved by 55% and marketing ROI increased by 48%.'
                },
                {
                  company: 'Financial Services',
                  industry: 'Finance',
                  challenge: 'Data silos preventing customer insights',
                  solution: 'Integrated CDP to break down data silos and create unified profiles',
                  results: [
                    { metric: '100%', label: 'Data Unification' },
                    { metric: '65%', label: 'Customer Insights' },
                    { metric: '38%', label: 'Cross-sell Rate' }
                  ],
                  testimonial: 'CDP broke down our data silos completely. We now have 100% data unification and 65% better customer insights, leading to 38% increase in cross-sell rates.'
                },
                {
                  company: 'Healthcare Provider',
                  industry: 'Healthcare',
                  challenge: 'Compliance and data privacy concerns',
                  solution: 'Implemented CDP with enterprise-grade privacy and compliance',
                  results: [
                    { metric: '100%', label: 'Compliance' },
                    { metric: '52%', label: 'Patient Engagement' },
                    { metric: '45%', label: 'Service Efficiency' }
                  ],
                  testimonial: 'CDP helped us maintain 100% compliance while improving patient engagement by 52% and service efficiency by 45%.'
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
                Common questions about Customer Data Platform (CDP)
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What is a Customer Data Platform (CDP)?',
                  answer: 'A Customer Data Platform (CDP) is a unified system that collects, integrates, and manages customer data from all sources to create comprehensive customer profiles. It provides a single source of truth for customer data and enables businesses to deliver personalized experiences across all channels.'
                },
                {
                  question: 'How is CDP different from CRM?',
                  answer: 'While CRM manages customer relationships and sales processes, CDP focuses on collecting and unifying customer data from all sources (CRM, website, email, social media, etc.) to create comprehensive customer profiles. CDP complements CRM by providing unified data that can be used across all systems.'
                },
                {
                  question: 'What data sources can CDP integrate?',
                  answer: 'CDP can integrate data from CRM systems, websites, mobile apps, email platforms, social media, e-commerce platforms, customer service systems, marketing automation tools, and any other customer touchpoint. It supports both real-time and batch data integration.'
                },
                {
                  question: 'How does identity resolution work?',
                  answer: 'Identity resolution matches and merges customer records across different systems and devices using various identifiers like email, phone, device IDs, cookies, and more. It creates unified customer identities even when customers interact through multiple channels and devices.'
                },
                {
                  question: 'Is CDP compliant with data privacy regulations?',
                  answer: 'Yes, our CDP is designed with privacy and compliance in mind. It supports GDPR, CCPA, and other data privacy regulations with features like consent management, data retention policies, right to deletion, and privacy controls.'
                },
                {
                  question: 'How long does CDP implementation take?',
                  answer: 'CDP implementation typically takes 4-8 weeks depending on the number of data sources, complexity of integrations, and customization requirements. Our team handles the entire implementation process including data integration, configuration, and training.'
                },
                {
                  question: 'Can CDP integrate with our existing systems?',
                  answer: 'Yes, CDP integrates with all major CRM platforms, marketing tools, analytics platforms, and custom systems through APIs, webhooks, and pre-built connectors. We also support custom integrations for unique requirements.'
                },
                {
                  question: 'What kind of insights can I get from CDP?',
                  answer: 'CDP provides comprehensive customer insights including customer behavior analysis, segmentation insights, journey mapping, predictive analytics, customer lifetime value, churn prediction, and custom analytics based on your business needs.'
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
              Ready to Unify Your Customer Data?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get started with Customer Data Platform today. Unify your customer data, gain insights, 
              and deliver better customer experiences.
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

export default CustomerDataPlatform;
