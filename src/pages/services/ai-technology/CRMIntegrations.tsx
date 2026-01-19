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
  Plug,
  PlugZap,
  GitMerge,
  Webhook,
  Megaphone,
  CreditCard
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const CRMIntegrations = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<number>(0);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Rocket className="h-4 w-4" /> },
    { id: 'features', label: 'Integration Features', icon: <Zap className="h-4 w-4" /> },
    { id: 'platforms', label: 'Supported Platforms', icon: <Layers className="h-4 w-4" /> },
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
    const sectionIds = ['overview', 'features', 'platforms', 'benefits', 'pricing', 'case-studies', 'faqs'];
    
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
    title: 'CRM Integrations | Seamless CRM Integration & Automation Services | MarkTechRover',
    description: 'CRM Integrations - Seamless CRM integration and automation services. Connect your CRM with marketing tools, sales platforms, and business systems. Best CRM integration services in Delhi NCR & India.',
    keywords: [
      'CRM Integrations', 'CRM Integration Services', 'CRM Automation', 'Salesforce Integration',
      'HubSpot Integration', 'CRM Platform Integration', 'Business System Integration', 'CRM API Integration',
      'CRM Integrations Delhi', 'Best CRM Integration India', 'CRM Integration Services', 'Data Integration',
      'System Integration', 'CRM Connector', 'CRM Sync', 'Multi-CRM Integration'
    ],
    url: '/services/ai-technology/crm-integrations',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['CRM Integrations', 'CRM Integration', 'System Integration', 'CRM Automation'],
    image: '/images/crm-integrations.webp'
  };

  const features = [
    {
      id: 1,
      title: 'CRM Platform Integrations',
      description: 'Connect your CRM with all major platforms including Salesforce, HubSpot, Microsoft Dynamics, and more',
      icon: <Building2 className="h-8 w-8" />,
      features: [
        'Salesforce integration',
        'HubSpot integration',
        'Microsoft Dynamics integration',
        'Zoho CRM integration',
        'Pipedrive integration',
        'Custom CRM integrations'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'Marketing Platform Integration',
      description: 'Integrate CRM with marketing automation, email marketing, and advertising platforms',
      icon: <Megaphone className="h-8 w-8" />,
      features: [
        'Email marketing platform integration',
        'Marketing automation integration',
        'Advertising platform integration',
        'Social media platform integration',
        'Analytics platform integration',
        'Content management integration'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 3,
      title: 'Data Synchronization',
      description: 'Bidirectional data sync between CRM and connected platforms in real-time',
      icon: <RefreshCw className="h-8 w-8" />,
      features: [
        'Real-time data synchronization',
        'Bidirectional data flow',
        'Automatic conflict resolution',
        'Data mapping and transformation',
        'Incremental sync optimization',
        'Sync monitoring and logging'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 4,
      title: 'API Development',
      description: 'Custom API development and integration for unique business requirements',
      icon: <Code className="h-8 w-8" />,
      features: [
        'RESTful API development',
        'GraphQL API support',
        'Webhook implementation',
        'Custom API endpoints',
        'API documentation',
        'API testing and validation'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'Workflow Automation',
      description: 'Automate workflows and processes across integrated systems',
      icon: <Workflow className="h-8 w-8" />,
      features: [
        'Automated data workflows',
        'Trigger-based automation',
        'Process automation',
        'Workflow orchestration',
        'Error handling and retry',
        'Workflow monitoring'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'Integration Management',
      description: 'Comprehensive integration management, monitoring, and support',
      icon: <Settings className="h-8 w-8" />,
      features: [
        'Integration monitoring',
        'Performance tracking',
        'Error detection and alerts',
        'Integration health checks',
        'Usage analytics',
        'Ongoing support and maintenance'
      ],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-500/10 to-violet-400/10',
      borderColor: 'border-violet-500/20',
      textColor: 'text-violet-300'
    }
  ];

  const supportedPlatforms = [
    {
      category: 'CRM Platforms',
      platforms: [
        { name: 'Salesforce', icon: <Building2 className="h-6 w-6" />, description: 'Complete Salesforce integration' },
        { name: 'HubSpot', icon: <Network className="h-6 w-6" />, description: 'Full HubSpot CRM integration' },
        { name: 'Microsoft Dynamics', icon: <Building2 className="h-6 w-6" />, description: 'Dynamics 365 integration' },
        { name: 'Zoho CRM', icon: <Database className="h-6 w-6" />, description: 'Zoho CRM integration' },
        { name: 'Pipedrive', icon: <TrendingUp className="h-6 w-6" />, description: 'Pipedrive integration' },
        { name: 'Custom CRM', icon: <Settings className="h-6 w-6" />, description: 'Custom CRM system integration' }
      ]
    },
    {
      category: 'Marketing Platforms',
      platforms: [
        { name: 'Mailchimp', icon: <MailIcon className="h-6 w-6" />, description: 'Email marketing integration' },
        { name: 'SendGrid', icon: <MailIcon className="h-6 w-6" />, description: 'Email delivery integration' },
        { name: 'Google Ads', icon: <Target className="h-6 w-6" />, description: 'Google Ads integration' },
        { name: 'Facebook Ads', icon: <Target className="h-6 w-6" />, description: 'Facebook advertising integration' },
        { name: 'LinkedIn Ads', icon: <Linkedin className="h-6 w-6" />, description: 'LinkedIn advertising integration' },
        { name: 'Marketing Automation', icon: <Zap className="h-6 w-6" />, description: 'Marketing automation platforms' }
      ]
    },
    {
      category: 'Business Tools',
      platforms: [
        { name: 'Google Workspace', icon: <Globe className="h-6 w-6" />, description: 'Google Workspace integration' },
        { name: 'Microsoft 365', icon: <Building2 className="h-6 w-6" />, description: 'Microsoft 365 integration' },
        { name: 'Slack', icon: <Slack className="h-6 w-6" />, description: 'Slack integration' },
        { name: 'Microsoft Teams', icon: <Users className="h-6 w-6" />, description: 'Teams integration' },
        { name: 'Zapier', icon: <Zap className="h-6 w-6" />, description: 'Zapier integration' },
        { name: 'Webhooks', icon: <Webhook className="h-6 w-6" />, description: 'Custom webhook integration' }
      ]
    },
    {
      category: 'E-commerce & Payments',
      platforms: [
        { name: 'Shopify', icon: <ShoppingCart className="h-6 w-6" />, description: 'Shopify integration' },
        { name: 'WooCommerce', icon: <ShoppingCart className="h-6 w-6" />, description: 'WooCommerce integration' },
        { name: 'Stripe', icon: <CreditCard className="h-6 w-6" />, description: 'Stripe payment integration' },
        { name: 'PayPal', icon: <CreditCard className="h-6 w-6" />, description: 'PayPal integration' },
        { name: 'E-commerce Platforms', icon: <ShoppingCart className="h-6 w-6" />, description: 'Other e-commerce platforms' }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Unified Data Flow',
      description: 'Seamless data flow between CRM and all connected systems',
      icon: <GitMerge className="h-8 w-8" />,
      metric: '100%',
      label: 'Data Sync'
    },
    {
      title: 'Automated Workflows',
      description: 'Automate processes and reduce manual work across systems',
      icon: <Zap className="h-8 w-8" />,
      metric: '65%',
      label: 'Time Savings'
    },
    {
      title: 'Better Insights',
      description: 'Unified data provides better insights and decision-making',
      icon: <BarChart3 className="h-8 w-8" />,
      metric: '48%',
      label: 'Better Insights'
    },
    {
      title: 'Increased Efficiency',
      description: 'Streamlined processes and automated workflows increase efficiency',
      icon: <TrendingUp className="h-8 w-8" />,
      metric: '52%',
      label: 'Efficiency Gain'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹40,000',
      period: 'per month',
      description: 'Perfect for small businesses with basic integration needs',
      features: [
        '1 CRM integration',
        'Up to 3 platform integrations',
        'Basic data synchronization',
        'Email support',
        'Standard setup',
        'Monthly monitoring'
      ],
      highlighted: false,
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '₹85,000',
      period: 'per month',
      description: 'Comprehensive integration for growing businesses',
      features: [
        'Multiple CRM integrations',
        'Up to 10 platform integrations',
        'Advanced data synchronization',
        'Workflow automation',
        'Priority support',
        'Real-time monitoring',
        'Custom API development',
        'Weekly optimization'
      ],
      highlighted: true,
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-featured integration for large organizations',
      features: [
        'Unlimited CRM integrations',
        'Unlimited platform integrations',
        'Advanced automation',
        'Custom development',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom integrations',
        'SLA guarantees',
        'On-premise options'
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
                <PlugZap className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Seamless CRM Integration & Automation</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Hire CRM Integration Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Connect your CRM with marketing tools, sales platforms, and business systems. Seamless integration 
                and automation to streamline workflows and maximize efficiency.
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
                  { value: '100%', label: 'Data Sync' },
                  { value: '65%', label: 'Time Savings' },
                  { value: '48%', label: 'Better Insights' },
                  { value: '52%', label: 'Efficiency Gain' }
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
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">₹650+</div>
                <div className="text-gray-300">Crores Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">400+</div>
                <div className="text-gray-300">Integration Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">97%</div>
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
                Seamless CRM Integration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Connect your CRM with all your business systems, marketing tools, and platforms. Our CRM integration 
                services ensure seamless data flow, automated workflows, and unified operations across all your systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Plug className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Connect Everything</h3>
                <p className="text-gray-300 leading-relaxed">
                  Integrate your CRM with marketing platforms, sales tools, e-commerce systems, and business applications.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automate Workflows</h3>
                <p className="text-gray-300 leading-relaxed">
                  Automate data synchronization, workflows, and processes across all integrated systems.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Unified Insights</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get unified insights from all your systems with integrated data and analytics.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-2xl border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Choose CRM Integrations?</h3>
                  <ul className="space-y-3">
                    {[
                      'Connect CRM with all your business systems and platforms',
                      'Automate data synchronization and workflows',
                      'Eliminate data silos and improve data accuracy',
                      'Streamline operations and increase efficiency',
                      'Get unified insights from all integrated systems',
                      'Reduce manual work and save time'
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
                        <div className="text-xs text-gray-400">Data Sync</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">65%</div>
                        <div className="text-xs text-gray-400">Time Savings</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">48%</div>
                        <div className="text-xs text-gray-400">Better Insights</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">52%</div>
                        <div className="text-xs text-gray-400">Efficiency Gain</div>
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
                Complete Integration Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful features for seamless CRM integration and automation
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

          {/* Supported Platforms Section */}
          <section id="platforms" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Supported Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect your CRM with 50+ popular platforms and business systems
              </p>
            </div>

            <div className="space-y-8">
              {supportedPlatforms.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                      <Layers className="h-5 w-5 text-white" />
                    </div>
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {category.platforms.map((platform, platformIndex) => (
                      <div
                        key={platformIndex}
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                      >
                        <div className="text-purple-300 mb-2">{platform.icon}</div>
                        <div className="text-sm font-medium text-white text-center mb-1">{platform.name}</div>
                        <div className="text-xs text-gray-400 text-center">{platform.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-4">Need integration with a platform not listed? We can build custom integrations.</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Request Custom Integration
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why businesses choose CRM Integration Services
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
                Choose the plan that fits your integration needs. All plans include setup and support.
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
                Real results from businesses using CRM Integration Services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  company: 'E-commerce Business',
                  industry: 'Retail',
                  challenge: 'Disconnected systems causing data silos',
                  solution: 'Integrated CRM with e-commerce, email, and analytics platforms',
                  results: [
                    { metric: '100%', label: 'Data Sync' },
                    { metric: '58%', label: 'Time Savings' },
                    { metric: '35%', label: 'Revenue Growth' }
                  ],
                  testimonial: 'CRM integrations unified all our systems. We achieved 100% data synchronization and saved 58% of time previously spent on manual data entry.'
                },
                {
                  company: 'B2B Services Company',
                  industry: 'Professional Services',
                  challenge: 'Manual data entry and workflow inefficiencies',
                  solution: 'Automated CRM integration with marketing and sales platforms',
                  results: [
                    { metric: '65%', label: 'Time Savings' },
                    { metric: '48%', label: 'Efficiency Gain' },
                    { metric: '42%', label: 'Sales Growth' }
                  ],
                  testimonial: 'CRM integrations automated our entire workflow. We saved 65% of time and increased sales by 42% through better data flow and automation.'
                },
                {
                  company: 'SaaS Startup',
                  industry: 'Technology',
                  challenge: 'Multiple disconnected tools and platforms',
                  solution: 'Integrated CRM with all business tools and platforms',
                  results: [
                    { metric: '100%', label: 'Integration' },
                    { metric: '52%', label: 'Efficiency' },
                    { metric: '45%', label: 'Productivity' }
                  ],
                  testimonial: 'CRM integrations connected all our tools seamlessly. We achieved 100% integration across all platforms and improved productivity by 45%.'
                },
                {
                  company: 'Marketing Agency',
                  industry: 'Marketing',
                  challenge: 'Client data scattered across multiple systems',
                  solution: 'Unified CRM integration with marketing and analytics platforms',
                  results: [
                    { metric: '73%', label: 'Data Accuracy' },
                    { metric: '55%', label: 'Time Savings' },
                    { metric: '38%', label: 'Client Satisfaction' }
                  ],
                  testimonial: 'CRM integrations unified all client data. Data accuracy improved by 73% and client satisfaction increased by 38% through better insights.'
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
                Common questions about CRM Integration Services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What are CRM Integrations?',
                  answer: 'CRM Integrations connect your CRM platform with other business systems, marketing tools, sales platforms, and applications. This enables seamless data flow, automated workflows, and unified operations across all your systems.'
                },
                {
                  question: 'Which CRM platforms do you support?',
                  answer: 'We support all major CRM platforms including Salesforce, HubSpot, Microsoft Dynamics, Zoho CRM, Pipedrive, and many others. We also provide custom integrations for proprietary or niche CRM systems.'
                },
                {
                  question: 'What platforms can be integrated with CRM?',
                  answer: 'We can integrate CRM with marketing platforms (email, advertising, social media), sales tools, e-commerce platforms, payment gateways, business applications (Google Workspace, Microsoft 365), communication tools (Slack, Teams), and custom systems.'
                },
                {
                  question: 'How long does integration setup take?',
                  answer: 'Integration setup typically takes 2-6 weeks depending on the number of platforms, complexity of data mapping, and customization requirements. Simple integrations can be completed in 1-2 weeks, while complex multi-platform integrations may take 4-8 weeks.'
                },
                {
                  question: 'Is data synchronization real-time?',
                  answer: 'Yes, we provide real-time data synchronization for most integrations. Data is synced automatically as changes occur in connected systems. We also support batch synchronization for high-volume data where real-time sync may not be required.'
                },
                {
                  question: 'What about data security and privacy?',
                  answer: 'Security is our top priority. All integrations use encrypted connections, follow industry security standards, and comply with data privacy regulations (GDPR, CCPA). We implement proper authentication, access controls, and data protection measures.'
                },
                {
                  question: 'Can you build custom integrations?',
                  answer: 'Yes, we provide custom integration development for unique requirements. Our team can build custom APIs, webhooks, and connectors to integrate with any system or platform that your business uses.'
                },
                {
                  question: 'Do you provide ongoing support?',
                  answer: 'Yes, all plans include ongoing support and maintenance. We monitor integrations, handle errors, perform optimizations, and provide updates. Professional and Enterprise plans include priority support with faster response times.'
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
              Ready to Integrate Your CRM?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get started with CRM Integration Services today. Connect your CRM with all your business 
              systems and streamline operations.
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

export default CRMIntegrations;
