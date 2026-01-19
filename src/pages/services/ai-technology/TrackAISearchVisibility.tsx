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
  Building2,
  Briefcase,
  Network,
  Link2,
  Workflow,
  Filter,
  Bell,
  Mail as MailIcon,
  Repeat,
  RefreshCcw as RefreshIcon,
  MousePointerClick,
  Eye as EyeIcon,
  Info,
  Book,
  GraduationCap,
  LineChart,
  Gauge,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  Radar
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const TrackAISearchVisibility = () => {
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

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
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
    title: 'Track AI Search Visibility | AI Search Engine Optimization & Tracking | MarkTechRover',
    description: 'Track AI Search Visibility - Monitor and optimize your visibility in AI-powered search engines like ChatGPT, Perplexity, and Google AI. Advanced AI SEO tracking and analytics. Best AI search visibility tracking in Delhi NCR & India.',
    keywords: [
      'Track AI Search Visibility', 'AI Search Tracking', 'AI SEO', 'AI Search Engine Optimization',
      'AI Search Analytics', 'ChatGPT Visibility', 'Perplexity Tracking', 'AI Search Rankings',
      'AI Search Visibility Delhi', 'Best AI SEO India', 'AI Search Monitoring', 'AI Search Performance',
      'AI Search Metrics', 'AI Search Insights', 'AI Search Optimization'
    ],
    url: '/services/ai-technology/track-ai-search-visibility',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['AI Search Visibility', 'AI SEO', 'AI Search Tracking', 'AI Search Optimization'],
    image: '/images/track-ai-search-visibility.webp'
  };

  const features = [
    {
      id: 1,
      title: 'Multi-Platform AI Search Tracking',
      description: 'Track your visibility across ChatGPT, Perplexity, Google AI, Bing AI, and other AI search platforms',
      icon: <Radar className="h-8 w-8" />,
      features: [
        'ChatGPT visibility tracking',
        'Perplexity search monitoring',
        'Google AI search tracking',
        'Bing AI visibility monitoring',
        'Multi-platform analytics dashboard',
        'Real-time visibility updates'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'AI Search Ranking Monitoring',
      description: 'Monitor your rankings and positions in AI search results for key queries and topics',
      icon: <TrendingUp className="h-8 w-8" />,
      features: [
        'Keyword ranking tracking',
        'Position monitoring',
        'Ranking history analysis',
        'Competitor comparison',
        'Ranking alerts and notifications',
        'Historical ranking data'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 3,
      title: 'AI Search Analytics & Insights',
      description: 'Comprehensive analytics and insights to understand your AI search performance',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        'Visibility score tracking',
        'Search impression analytics',
        'Query performance analysis',
        'Content performance insights',
        'Trend analysis and forecasting',
        'Custom reports and dashboards'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 4,
      title: 'Content Optimization Recommendations',
      description: 'Get AI-powered recommendations to improve your content for better AI search visibility',
      icon: <Lightbulb className="h-8 w-8" />,
      features: [
        'Content optimization suggestions',
        'Keyword recommendations',
        'Content gap analysis',
        'AI search best practices',
        'Content performance scoring',
        'Optimization action plans'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'Competitive AI Search Analysis',
      description: 'Analyze competitor visibility and performance in AI search engines',
      icon: <Eye className="h-8 w-8" />,
      features: [
        'Competitor visibility tracking',
        'Market share analysis',
        'Competitive positioning',
        'Gap analysis',
        'Competitor content analysis',
        'Benchmarking reports'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'Automated Reporting & Alerts',
      description: 'Automated reports and alerts to stay informed about your AI search visibility changes',
      icon: <Bell className="h-8 w-8" />,
      features: [
        'Automated weekly reports',
        'Ranking change alerts',
        'Visibility drop notifications',
        'Performance summaries',
        'Custom alert rules',
        'Email and dashboard notifications'
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
      title: 'Platform Setup',
      description: 'Connect your website and configure tracking for AI search platforms',
      icon: <Settings className="h-6 w-6" />,
      details: [
        'Add your website domain',
        'Configure AI platform tracking',
        'Set up keyword tracking',
        'Define tracking parameters'
      ]
    },
    {
      step: '02',
      title: 'Data Collection',
      description: 'Automatically collect visibility data from AI search platforms',
      icon: <Database className="h-6 w-6" />,
      details: [
        'Automated data collection',
        'Real-time visibility monitoring',
        'Historical data tracking',
        'Multi-platform data aggregation'
      ]
    },
    {
      step: '03',
      title: 'Analysis & Insights',
      description: 'Analyze your AI search visibility and generate actionable insights',
      icon: <BarChart className="h-6 w-6" />,
      details: [
        'Visibility score calculation',
        'Performance analysis',
        'Trend identification',
        'Insight generation'
      ]
    },
    {
      step: '04',
      title: 'Optimization & Reporting',
      description: 'Get optimization recommendations and detailed performance reports',
      icon: <Rocket className="h-6 w-6" />,
      details: [
        'Optimization recommendations',
        'Performance reports',
        'Action plans',
        'Continuous monitoring'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Improved AI Search Visibility',
      description: 'Increase your visibility in AI-powered search engines and reach more customers',
      icon: <Eye className="h-8 w-8" />,
      metric: '68%',
      label: 'Visibility Increase'
    },
    {
      title: 'Better Content Performance',
      description: 'Optimize your content for AI search engines and improve performance',
      icon: <TrendingUp className="h-8 w-8" />,
      metric: '52%',
      label: 'Performance Boost'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with comprehensive AI search analytics and insights',
      icon: <BarChart className="h-8 w-8" />,
      metric: '45%',
      label: 'Better Decisions'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors with advanced AI search visibility tracking',
      icon: <Trophy className="h-8 w-8" />,
      metric: '73%',
      label: 'Market Share'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹25,000',
      period: 'per month',
      description: 'Perfect for small businesses starting with AI search visibility tracking',
      features: [
        'Up to 3 AI platforms',
        '100 keywords tracking',
        'Basic analytics dashboard',
        'Weekly reports',
        'Email support',
        'Monthly optimization review'
      ],
      highlighted: false,
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '₹55,000',
      period: 'per month',
      description: 'Comprehensive AI search visibility tracking for growing businesses',
      features: [
        'All AI platforms',
        'Unlimited keywords',
        'Advanced analytics',
        'Daily reports',
        'Priority support',
        'Content optimization recommendations',
        'Competitor analysis',
        'Custom alerts',
        'API access'
      ],
      highlighted: true,
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-featured AI search visibility tracking for large organizations',
      features: [
        'All platforms and features',
        'Unlimited tracking',
        'Custom analytics',
        'Real-time reporting',
        'Dedicated account manager',
        'Custom integrations',
        'White-label reports',
        'SLA guarantees',
        'Custom development'
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
                <Radar className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Advanced AI Search Visibility Tracking</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Hire AI Search Tracking Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Monitor and optimize your visibility in AI-powered search engines like ChatGPT, Perplexity, 
                and Google AI. Track rankings, analyze performance, and improve your AI search presence.
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
                  { value: '68%', label: 'Visibility Increase' },
                  { value: '52%', label: 'Performance Boost' },
                  { value: '45%', label: 'Better Decisions' },
                  { value: '73%', label: 'Market Share' }
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
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-gray-300">Websites Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">1M+</div>
                <div className="text-gray-300">Keywords Monitored</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">95%</div>
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
                Track AI Search Visibility
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Track AI Search Visibility allows you to monitor and optimize your presence in AI-powered search engines 
                like ChatGPT, Perplexity, Google AI, and Bing AI. Track rankings, analyze performance, and improve your 
                visibility in the new era of AI search.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Radar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Multi-Platform Tracking</h3>
                <p className="text-gray-300 leading-relaxed">
                  Track your visibility across ChatGPT, Perplexity, Google AI, Bing AI, and other AI search platforms.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ranking Monitoring</h3>
                <p className="text-gray-300 leading-relaxed">
                  Monitor your rankings and positions in AI search results for key queries and topics.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Performance Analytics</h3>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive analytics and insights to understand your AI search performance and trends.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-2xl border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Track AI Search Visibility?</h3>
                  <ul className="space-y-3">
                    {[
                      'Monitor visibility across AI search platforms',
                      'Track rankings and positions in AI search results',
                      'Analyze performance and identify opportunities',
                      'Optimize content for better AI search visibility',
                      'Stay ahead of competitors in AI search',
                      'Make data-driven optimization decisions'
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
                        <div className="text-3xl font-bold text-purple-300 mb-1">68%</div>
                        <div className="text-xs text-gray-400">Visibility Increase</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">52%</div>
                        <div className="text-xs text-gray-400">Performance Boost</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">45%</div>
                        <div className="text-xs text-gray-400">Better Decisions</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">73%</div>
                        <div className="text-xs text-gray-400">Market Share</div>
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
                Complete AI Search Visibility Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful features designed to track and optimize your AI search visibility
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
                How AI Search Visibility Tracking Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Simple 4-step process to start tracking your AI search visibility
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
                Why businesses choose AI Search Visibility Tracking
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
                Real results from businesses using AI Search Visibility Tracking
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  company: 'E-commerce Platform',
                  industry: 'Retail',
                  challenge: 'Low visibility in AI search engines',
                  solution: 'Implemented AI search visibility tracking and optimization',
                  results: [
                    { metric: '72%', label: 'Visibility Increase' },
                    { metric: '58%', label: 'Traffic Growth' },
                    { metric: '45%', label: 'Conversion Boost' }
                  ],
                  testimonial: 'AI search visibility tracking helped us increase visibility by 72% and traffic by 58%. We now rank prominently in ChatGPT and Perplexity searches.'
                },
                {
                  company: 'SaaS Company',
                  industry: 'Technology',
                  challenge: 'Poor AI search rankings',
                  solution: 'Deployed comprehensive AI search tracking and content optimization',
                  results: [
                    { metric: '65%', label: 'Ranking Improvement' },
                    { metric: '52%', label: 'Performance Boost' },
                    { metric: '38%', label: 'Lead Generation' }
                  ],
                  testimonial: 'Tracking AI search visibility transformed our presence. We achieved 65% ranking improvement and 52% performance boost in AI search results.'
                },
                {
                  company: 'Content Publisher',
                  industry: 'Media',
                  challenge: 'Limited AI search presence',
                  solution: 'Used AI search tracking to optimize content and improve visibility',
                  results: [
                    { metric: '78%', label: 'Visibility Growth' },
                    { metric: '61%', label: 'Content Performance' },
                    { metric: '43%', label: 'Engagement Increase' }
                  ],
                  testimonial: 'AI search visibility tracking increased our visibility by 78% and content performance by 61%. Our content now appears prominently in AI search results.'
                },
                {
                  company: 'Professional Services',
                  industry: 'Services',
                  challenge: 'Invisible in AI search engines',
                  solution: 'Implemented AI search tracking and strategic content optimization',
                  results: [
                    { metric: '68%', label: 'Visibility Increase' },
                    { metric: '55%', label: 'Brand Awareness' },
                    { metric: '41%', label: 'Client Acquisition' }
                  ],
                  testimonial: 'AI search visibility tracking helped us increase visibility by 68% and brand awareness by 55%. We now appear in relevant AI search queries.'
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
                Common questions about AI Search Visibility Tracking
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What is AI Search Visibility Tracking?',
                  answer: 'AI Search Visibility Tracking monitors and analyzes your presence in AI-powered search engines like ChatGPT, Perplexity, Google AI, and Bing AI. It tracks rankings, visibility scores, and performance metrics to help you optimize for AI search.'
                },
                {
                  question: 'Which AI search platforms are tracked?',
                  answer: 'We track visibility across major AI search platforms including ChatGPT, Perplexity, Google AI (Bard/Gemini), Bing AI, and other emerging AI search engines. Our platform continuously adds support for new AI search platforms.'
                },
                {
                  question: 'How does AI search differ from traditional SEO?',
                  answer: 'AI search engines use natural language understanding and semantic search, focusing on content quality, relevance, and context rather than just keywords. AI search visibility tracking helps you optimize for these new ranking factors.'
                },
                {
                  question: 'What metrics are tracked?',
                  answer: 'We track visibility scores, rankings, search impressions, query performance, content performance, competitor visibility, and various other metrics to give you comprehensive insights into your AI search presence.'
                },
                {
                  question: 'How often is data updated?',
                  answer: 'Data is collected and updated in real-time or near real-time depending on the platform. Most platforms are updated daily, with some providing real-time updates for critical metrics.'
                },
                {
                  question: 'Can I track competitors?',
                  answer: 'Yes, our platform includes competitive analysis features that allow you to track competitor visibility, compare rankings, analyze market share, and identify opportunities to outperform competitors.'
                },
                {
                  question: 'What kind of optimization recommendations are provided?',
                  answer: 'We provide AI-powered recommendations including content optimization suggestions, keyword recommendations, content gap analysis, best practices for AI search, and actionable optimization plans.'
                },
                {
                  question: 'How long does it take to see results?',
                  answer: 'Results vary based on your current visibility and optimization efforts. Most businesses see improvements within 2-4 weeks, with significant gains typically visible within 2-3 months of consistent optimization.'
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
              Ready to Track Your AI Search Visibility?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get started with AI Search Visibility Tracking today. Monitor your presence, optimize your content, 
              and improve your visibility in AI-powered search engines.
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

export default TrackAISearchVisibility;
