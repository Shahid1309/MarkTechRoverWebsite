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
  Megaphone,
  Video,
  Image,
  Share2,
  ThumbsUp as ThumbsUpIcon
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const AIDigitalMarketing = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<number>(0);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Rocket className="h-4 w-4" /> },
    { id: 'features', label: 'Features', icon: <Zap className="h-4 w-4" /> },
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
    const sectionIds = ['overview', 'features', 'benefits', 'pricing', 'case-studies', 'faqs'];
    
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
    title: 'AI Digital Marketing Services | AI-Powered Marketing | MarkTechRover',
    description: 'AI Digital Marketing Services - AI-powered digital marketing automation and optimization. Leverage artificial intelligence for campaign management, audience targeting, and marketing automation. Best AI digital marketing services in Delhi NCR & India.',
    keywords: [
      'AI Digital Marketing', 'AI Marketing', 'AI-Powered Marketing', 'Artificial Intelligence Marketing',
      'AI Marketing Automation', 'AI Marketing India', 'AI Marketing Delhi', 'Best AI Marketing Services',
      'AI Marketing Campaigns', 'Machine Learning Marketing', 'AI Marketing Strategy', 'AI Marketing Tools',
      'AI Social Media Marketing', 'AI Email Marketing', 'AI Content Marketing'
    ],
    url: '/services/ai-technology/ai-digital-marketing',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['AI Digital Marketing', 'AI Marketing', 'AI-Powered Marketing', 'Marketing Automation'],
    image: '/images/ai-digital-marketing.webp'
  };

  const features = [
    {
      id: 1,
      title: 'AI Campaign Management',
      description: 'Intelligent campaign creation, optimization, and management using AI algorithms',
      icon: <Target className="h-8 w-8" />,
      features: [
        'Automated campaign creation',
        'AI-powered bid optimization',
        'Budget allocation optimization',
        'Campaign performance prediction',
        'Real-time campaign adjustments',
        'Multi-channel campaign management'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'AI Audience Targeting',
      description: 'Advanced AI algorithms to identify and target the right audiences for your campaigns',
      icon: <Users className="h-8 w-8" />,
      features: [
        'Audience segmentation using AI',
        'Lookalike audience creation',
        'Behavioral targeting',
        'Predictive audience modeling',
        'Dynamic audience optimization',
        'Cross-channel audience tracking'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 3,
      title: 'AI Content Creation',
      description: 'AI-powered content generation and optimization for marketing campaigns',
      icon: <PenTool className="h-8 w-8" />,
      features: [
        'AI content generation',
        'Content personalization',
        'A/B testing automation',
        'Content performance analysis',
        'Multi-format content creation',
        'Content optimization recommendations'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 4,
      title: 'AI Social Media Marketing',
      description: 'Automated social media marketing with AI-powered content and scheduling',
      icon: <Share2 className="h-8 w-8" />,
      features: [
        'AI social media scheduling',
        'Content recommendation engine',
        'Optimal posting time analysis',
        'Engagement prediction',
        'Hashtag optimization',
        'Social listening and sentiment analysis'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'AI Email Marketing',
      description: 'Intelligent email marketing automation with AI-powered personalization and optimization',
      icon: <Mail className="h-8 w-8" />,
      features: [
        'AI email content generation',
        'Send time optimization',
        'Subject line optimization',
        'Email personalization',
        'Open and click prediction',
        'Automated email sequences'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'AI Marketing Analytics',
      description: 'Advanced AI-powered analytics to measure and optimize marketing performance',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        'Predictive analytics',
        'ROI measurement and forecasting',
        'Attribution modeling',
        'Customer journey analysis',
        'Performance insights',
        'Automated reporting'
      ],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-500/10 to-violet-400/10',
      borderColor: 'border-violet-500/20',
      textColor: 'text-violet-300'
    }
  ];

  const benefits = [
    {
      title: 'Higher ROI',
      description: 'AI optimization improves marketing ROI through better targeting and automation',
      icon: <DollarSign className="h-8 w-8" />,
      metric: '58%',
      label: 'ROI Improvement'
    },
    {
      title: 'Better Conversions',
      description: 'AI-powered targeting and personalization increase conversion rates significantly',
      icon: <TrendingUp className="h-8 w-8" />,
      metric: '45%',
      label: 'Conversion Rate'
    },
    {
      title: 'Cost Efficiency',
      description: 'AI automation reduces marketing costs while improving performance',
      icon: <Percent className="h-8 w-8" />,
      metric: '35%',
      label: 'Cost Reduction'
    },
    {
      title: 'Time Savings',
      description: 'AI automation saves time on manual marketing tasks and optimization',
      icon: <Clock className="h-8 w-8" />,
      metric: '68%',
      label: 'Time Savings'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹30,000',
      period: 'per month',
      description: 'Perfect for small businesses starting with AI marketing',
      features: [
        'AI campaign management',
        'Basic audience targeting',
        'Email marketing automation',
        'Social media scheduling',
        'Monthly reports',
        'Email support',
        '1 marketing channel'
      ],
      highlighted: false,
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '₹65,000',
      period: 'per month',
      description: 'Comprehensive AI marketing for growing businesses',
      features: [
        'Advanced AI campaign management',
        'Multi-channel marketing',
        'AI content creation',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'A/B testing',
        'Attribution modeling',
        '3 marketing channels'
      ],
      highlighted: true,
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-featured AI marketing for large organizations',
      features: [
        'All AI marketing features',
        'Unlimited channels',
        'Custom AI models',
        'Dedicated account manager',
        '24/7 priority support',
        'White-label options',
        'Custom development',
        'Advanced security',
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
                <Megaphone className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">AI-Powered Digital Marketing Automation</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" style={{ position: 'relative', zIndex: 10 }}>
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', position: 'relative', zIndex: 10 }}>
                  Hire AI Digital Marketing Agency
                </span>
                <span className="block bg-gradient-to-r from-purple-200 via-blue-200 to-purple-300 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', position: 'relative', zIndex: 10 }}>
                  Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ position: 'relative', zIndex: 10 }}>
                Transform your digital marketing with artificial intelligence. AI-powered campaign management, 
                audience targeting, content creation, and automation to drive better results and ROI.
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
                  { value: '58%', label: 'ROI Improvement' },
                  { value: '45%', label: 'Conversion Rate' },
                  { value: '35%', label: 'Cost Reduction' },
                  { value: '68%', label: 'Time Savings' }
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
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">₹920+</div>
                <div className="text-gray-300">Crores Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">420+</div>
                <div className="text-gray-300">Clients Using AI Marketing</div>
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
                AI-Powered Digital Marketing
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionize your digital marketing with artificial intelligence. Our AI marketing services use machine learning 
                to automate campaigns, optimize targeting, create content, and maximize ROI across all digital channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Campaign Management</h3>
                <p className="text-gray-300 leading-relaxed">
                  Intelligent campaign creation, optimization, and management using AI algorithms for better performance.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Audience Targeting</h3>
                <p className="text-gray-300 leading-relaxed">
                  Advanced AI algorithms to identify and target the right audiences for maximum conversion.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <PenTool className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Content Creation</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI-powered content generation and optimization for marketing campaigns across all channels.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-2xl border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Use AI Digital Marketing?</h3>
                  <ul className="space-y-3">
                    {[
                      'AI automates campaign management and optimization for better performance',
                      'Intelligent audience targeting improves conversion rates and ROI',
                      'AI content creation saves time and improves engagement',
                      'Predictive analytics forecast campaign performance and optimize budgets',
                      'Multi-channel automation manages campaigns across all platforms',
                      'Continuous learning improves strategies based on real-time data'
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
                        <div className="text-3xl font-bold text-purple-300 mb-1">58%</div>
                        <div className="text-xs text-gray-400">ROI Improvement</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">45%</div>
                        <div className="text-xs text-gray-400">Conversion Rate</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">35%</div>
                        <div className="text-xs text-gray-400">Cost Reduction</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">68%</div>
                        <div className="text-xs text-gray-400">Time Savings</div>
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
                Complete AI Marketing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-powered features for comprehensive digital marketing
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

          {/* Benefits Section */}
          <section id="benefits" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why businesses choose AI Digital Marketing Services
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
                Choose the plan that fits your AI marketing needs. All plans include setup and onboarding.
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
                Real results from businesses using AI Digital Marketing Services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  company: 'E-commerce Brand',
                  industry: 'E-commerce',
                  challenge: 'Low conversion rates and high marketing costs',
                  solution: 'Implemented AI marketing with automated campaigns and audience targeting',
                  results: [
                    { metric: '62%', label: 'ROI Improvement' },
                    { metric: '48%', label: 'Conversion Rate' },
                    { metric: '40%', label: 'Cost Reduction' }
                  ],
                  testimonial: 'AI marketing transformed our campaigns. We achieved 62% ROI improvement, 48% conversion rate increase, and 40% cost reduction. The AI automation was game-changing.'
                },
                {
                  company: 'SaaS Company',
                  industry: 'Technology',
                  challenge: 'Inefficient multi-channel marketing management',
                  solution: 'Deployed AI marketing platform for unified campaign management',
                  results: [
                    { metric: '55%', label: 'ROI Improvement' },
                    { metric: '42%', label: 'Conversion Rate' },
                    { metric: '50%', label: 'Time Savings' }
                  ],
                  testimonial: 'AI marketing unified all our channels and automated campaign management. ROI improved by 55%, conversions increased by 42%, and we saved 50% of our time.'
                },
                {
                  company: 'B2B Services',
                  industry: 'Professional Services',
                  challenge: 'Poor lead quality and low marketing ROI',
                  solution: 'Implemented AI audience targeting and content personalization',
                  results: [
                    { metric: '58%', label: 'ROI Improvement' },
                    { metric: '45%', label: 'Lead Quality' },
                    { metric: '38%', label: 'Cost Reduction' }
                  ],
                  testimonial: 'AI marketing improved our lead quality by 45% and ROI by 58%. The AI-powered targeting and personalization delivered much better results than traditional methods.'
                },
                {
                  company: 'Retail Chain',
                  industry: 'Retail',
                  challenge: 'Ineffective social media and email marketing',
                  solution: 'Deployed AI social media and email marketing automation',
                  results: [
                    { metric: '52%', label: 'ROI Improvement' },
                    { metric: '55%', label: 'Engagement Rate' },
                    { metric: '45%', label: 'Time Savings' }
                  ],
                  testimonial: 'AI marketing automation revolutionized our social media and email campaigns. ROI improved by 52%, engagement increased by 55%, and we saved 45% of our marketing time.'
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
                Common questions about AI Digital Marketing Services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What is AI Digital Marketing?',
                  answer: 'AI Digital Marketing uses artificial intelligence and machine learning to automate and optimize digital marketing campaigns. It includes AI-powered campaign management, audience targeting, content creation, social media marketing, email marketing, and analytics to improve performance and ROI.'
                },
                {
                  question: 'How does AI improve digital marketing?',
                  answer: 'AI improves digital marketing by automating campaign management, optimizing targeting and bidding, creating personalized content, predicting performance, and continuously learning from data to improve strategies. This leads to better ROI, higher conversions, and time savings.'
                },
                {
                  question: 'What marketing channels does AI marketing support?',
                  answer: 'AI marketing supports all major digital marketing channels including Google Ads, Facebook, Instagram, LinkedIn, Twitter, email marketing, social media, content marketing, and more. The AI platform manages and optimizes campaigns across all channels from one unified platform.'
                },
                {
                  question: 'How long does it take to see results?',
                  answer: 'AI marketing typically shows results faster than traditional marketing. Most clients see initial improvements in 2-4 weeks, with significant ROI improvements in 1-3 months. The exact timeline depends on your current campaigns, budget, and optimization scope.'
                },
                {
                  question: 'Do I need marketing expertise to use AI marketing?',
                  answer: 'No marketing expertise is required. Our team handles all AI marketing setup, optimization, and management. You\'ll receive regular reports and insights, but we handle all the technical aspects of AI marketing for you.'
                },
                {
                  question: 'Can AI marketing work for any industry?',
                  answer: 'Yes, AI marketing works for all industries. The AI algorithms adapt to your industry, target audience, and business goals. We customize the AI marketing strategy based on your business type, products, services, and market conditions.'
                },
                {
                  question: 'How does AI content creation work?',
                  answer: 'AI content creation uses natural language processing and machine learning to generate marketing content including ad copy, social media posts, email content, and blog posts. The AI analyzes your brand voice, target audience, and goals to create personalized, engaging content.'
                },
                {
                  question: 'What kind of reporting do I get?',
                  answer: 'You receive comprehensive AI-powered reports including campaign performance, ROI metrics, conversion tracking, audience insights, content performance, and predictive analytics. Reports are generated automatically and include AI-driven insights and recommendations for continuous improvement.'
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
              Ready to Transform Your Marketing with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get started with AI Digital Marketing Services today. Leverage artificial intelligence to improve ROI, 
              drive conversions, and grow your business faster.
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
                <Megaphone className="h-5 w-5 mr-2" />
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

export default AIDigitalMarketing;
