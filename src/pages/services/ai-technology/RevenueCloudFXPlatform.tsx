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
  CreditCard,
  Package,
  Store,
  Handshake,
  TrendingDown,
  Wallet
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const RevenueCloudFXPlatform = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<number>(0);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Rocket className="h-4 w-4" /> },
    { id: 'features', label: 'CRM Features', icon: <Zap className="h-4 w-4" /> },
    { id: 'services', label: 'CRM Services', icon: <Layers className="h-4 w-4" /> },
    { id: 'revenue', label: 'Revenue Tools', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'pricing', label: 'Pricing', icon: <DollarSign className="h-4 w-4" /> },
    { id: 'integrations', label: 'Integrations', icon: <Link2 className="h-4 w-4" /> },
    { id: 'case-studies', label: 'Success Stories', icon: <Trophy className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  // Handle scroll for sticky navigation and active section detection
  useEffect(() => {
    const sectionIds = ['overview', 'features', 'services', 'revenue', 'pricing', 'integrations', 'case-studies', 'faqs'];
    
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

    // Initial check after a small delay to ensure DOM is ready
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
    title: 'RevenueMTR | Complete CRM Services Platform | Revenue Generation CRM | MarkTechRover',
    description: 'RevenueMTR - Complete CRM services platform for revenue generation. Sell CRM services to clients with comprehensive customer relationship management, sales automation, marketing automation, and revenue tools. Best CRM platform in Delhi NCR & India.',
    keywords: [
      'RevenueMTR', 'CRM Services Platform', 'Revenue Generation CRM', 'CRM Services for Clients', 
      'Customer Relationship Management', 'Sales CRM Platform', 'Marketing CRM', 'Revenue CRM',
      'CRM Platform Delhi', 'Best CRM Platform India', 'CRM Services India', 'Revenue Management CRM',
      'Sales Automation CRM', 'Marketing Automation CRM', 'Client CRM Services', 'RevenueMTR Platform'
    ],
    url: '/services/ai-technology/revenuecloudfx-platform',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['RevenueMTR', 'CRM Platform', 'CRM Services', 'Revenue Generation', 'Sales CRM'],
    image: '/images/revenuemtr-platform.webp'
  };

  const crmFeatures = [
    {
      id: 1,
      title: 'Customer Relationship Management',
      description: 'Complete customer lifecycle management with unified customer profiles, interaction history, and relationship tracking',
      icon: <Users className="h-8 w-8" />,
      features: [
        'Unified customer profiles and 360-degree view',
        'Contact and company management',
        'Interaction history and communication tracking',
        'Customer segmentation and tagging',
        'Relationship mapping and hierarchy',
        'Customer health scoring and insights'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'Sales Pipeline Management',
      description: 'Manage your entire sales process from lead to close with visual pipeline, deal tracking, and sales forecasting',
      icon: <TrendingUp className="h-8 w-8" />,
      features: [
        'Visual sales pipeline and kanban boards',
        'Deal tracking and stage management',
        'Sales forecasting and revenue prediction',
        'Activity tracking and follow-up automation',
        'Sales team collaboration and sharing',
        'Win/loss analysis and reporting'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 3,
      title: 'Marketing Automation',
      description: 'Automate marketing campaigns, lead nurturing, email marketing, and customer engagement across all channels',
      icon: <Rocket className="h-8 w-8" />,
      features: [
        'Email marketing automation and campaigns',
        'Lead nurturing and drip campaigns',
        'Multi-channel campaign management',
        'Behavioral triggers and automation',
        'A/B testing and optimization',
        'Marketing ROI and attribution tracking'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 4,
      title: 'Lead Management & Scoring',
      description: 'Capture, qualify, score, and route leads automatically with intelligent lead management and assignment',
      icon: <Target className="h-8 w-8" />,
      features: [
        'Lead capture forms and landing pages',
        'Lead scoring and qualification',
        'Automatic lead routing and assignment',
        'Lead enrichment and data enhancement',
        'Lead source tracking and attribution',
        'Lead conversion analytics and reporting'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'Revenue Analytics & Reporting',
      description: 'Comprehensive revenue analytics, forecasting, and reporting to track performance and drive revenue growth',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        'Revenue dashboards and analytics',
        'Sales forecasting and pipeline analysis',
        'Revenue reporting and insights',
        'Custom reports and dashboards',
        'Revenue attribution and tracking',
        'Performance metrics and KPIs'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'Customer Support & Service',
      description: 'Deliver exceptional customer support with ticketing, knowledge base, and customer service automation',
      icon: <MessageSquare className="h-8 w-8" />,
      features: [
        'Helpdesk and ticket management',
        'Customer support automation',
        'Knowledge base and self-service',
        'Live chat and messaging',
        'Customer satisfaction tracking',
        'Support analytics and reporting'
      ],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-500/10 to-violet-400/10',
      borderColor: 'border-violet-500/20',
      textColor: 'text-violet-300'
    }
  ];

  const crmServices = [
    {
      title: 'CRM Implementation & Setup',
      description: 'Complete CRM implementation, customization, and setup services for your clients',
      icon: <Settings className="h-8 w-8" />,
      features: [
        'CRM platform selection and consultation',
        'Custom CRM setup and configuration',
        'Data migration and import',
        'User training and onboarding',
        'Customization and integration',
        'Ongoing support and maintenance'
      ],
      revenue: '₹2,50,000 - ₹10,00,000',
      duration: '4-12 weeks'
    },
    {
      title: 'Sales Process Automation',
      description: 'Automate sales processes, workflows, and activities to increase sales efficiency and revenue',
      icon: <Zap className="h-8 w-8" />,
      features: [
        'Sales workflow automation',
        'Pipeline management setup',
        'Activity tracking and automation',
        'Sales reporting and analytics',
        'Team collaboration tools',
        'Performance optimization'
      ],
      revenue: '₹1,50,000 - ₹6,00,000',
      duration: '3-8 weeks'
    },
    {
      title: 'Marketing Automation Setup',
      description: 'Set up and configure marketing automation campaigns, email marketing, and lead nurturing',
      icon: <Rocket className="h-8 w-8" />,
      features: [
        'Email marketing automation',
        'Campaign setup and management',
        'Lead nurturing workflows',
        'Marketing analytics and reporting',
        'Integration with sales CRM',
        'Campaign optimization'
      ],
      revenue: '₹1,00,000 - ₹5,00,000',
      duration: '2-6 weeks'
    },
    {
      title: 'CRM Integration Services',
      description: 'Integrate CRM with existing tools, platforms, and systems for seamless data flow',
      icon: <Link2 className="h-8 w-8" />,
      features: [
        'Third-party platform integrations',
        'API development and integration',
        'Data synchronization',
        'Custom integration development',
        'Integration testing and support',
        'Documentation and training'
      ],
      revenue: '₹75,000 - ₹4,00,000',
      duration: '2-8 weeks'
    },
    {
      title: 'Revenue Analytics & Reporting',
      description: 'Set up revenue analytics, reporting dashboards, and business intelligence tools',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        'Custom dashboard development',
        'Revenue reporting setup',
        'Analytics and insights',
        'Forecasting and predictions',
        'KPI tracking and monitoring',
        'Executive reporting'
      ],
      revenue: '₹1,00,000 - ₹5,00,000',
      duration: '3-6 weeks'
    },
    {
      title: 'CRM Training & Support',
      description: 'Comprehensive CRM training, support, and optimization services for your clients',
      icon: <BookOpen className="h-8 w-8" />,
      features: [
        'User training and workshops',
        'Best practices implementation',
        'Ongoing support and maintenance',
        'System optimization',
        'Feature adoption programs',
        'Success management'
      ],
      revenue: '₹50,000 - ₹3,00,000',
      duration: 'Ongoing'
    }
  ];

  const revenueTools = [
    {
      title: 'Revenue Dashboard',
      description: 'Real-time revenue visibility with comprehensive dashboards and analytics',
      icon: <LineChart className="h-8 w-8" />,
      benefits: [
        'Track revenue across all channels',
        'Monitor sales performance in real-time',
        'Forecast revenue and pipeline',
        'Identify revenue opportunities'
      ]
    },
    {
      title: 'Sales Forecasting',
      description: 'Accurate sales forecasting and revenue prediction based on pipeline data',
      icon: <TrendingUp className="h-8 w-8" />,
      benefits: [
        'Predict future revenue accurately',
        'Plan resources and budgets',
        'Identify at-risk deals',
        'Optimize sales strategies'
      ]
    },
    {
      title: 'Revenue Attribution',
      description: 'Track revenue attribution across marketing channels and campaigns',
      icon: <Target className="h-8 w-8" />,
      benefits: [
        'Measure marketing ROI',
        'Optimize marketing spend',
        'Identify high-value channels',
        'Improve campaign performance'
      ]
    },
    {
      title: 'Deal Management',
      description: 'Manage deals, opportunities, and revenue-generating activities efficiently',
      icon: <Briefcase className="h-8 w-8" />,
      benefits: [
        'Track deals through pipeline',
        'Manage opportunities effectively',
        'Close deals faster',
        'Increase win rates'
      ]
    },
    {
      title: 'Customer Revenue Tracking',
      description: 'Track customer lifetime value, revenue per customer, and customer profitability',
      icon: <Wallet className="h-8 w-8" />,
      benefits: [
        'Identify high-value customers',
        'Maximize customer lifetime value',
        'Improve customer retention',
        'Optimize pricing strategies'
      ]
    },
    {
      title: 'Revenue Reporting',
      description: 'Comprehensive revenue reports and analytics for data-driven decisions',
      icon: <FileText className="h-8 w-8" />,
      benefits: [
        'Generate custom revenue reports',
        'Analyze revenue trends',
        'Share insights with stakeholders',
        'Make informed business decisions'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹50,000',
      period: 'per month',
      description: 'Perfect for small businesses starting with CRM services',
      features: [
        'Up to 1,000 contacts',
        'Basic CRM features',
        'Email support',
        'Standard integrations',
        'Basic reporting',
        'Up to 5 users',
        'Mobile app access',
        'Basic training'
      ],
      highlighted: false,
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '₹1,25,000',
      period: 'per month',
      description: 'Comprehensive CRM for growing businesses with advanced features',
      features: [
        'Up to 10,000 contacts',
        'Advanced CRM features',
        'Marketing automation',
        'Sales automation',
        'Priority support',
        'Advanced integrations',
        'Custom reporting',
        'Up to 25 users',
        'Advanced training',
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
      description: 'Full-featured CRM for large organizations with custom requirements',
      features: [
        'Unlimited contacts',
        'All CRM features',
        'Advanced automation',
        'Custom development',
        '24/7 priority support',
        'Unlimited integrations',
        'Custom analytics',
        'Unlimited users',
        'Enterprise training',
        'Dedicated support team',
        'SLA guarantees',
        'On-premise options'
      ],
      highlighted: false,
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: <Building2 className="h-6 w-6" />, category: 'CRM' },
    { name: 'HubSpot', icon: <Network className="h-6 w-6" />, category: 'CRM' },
    { name: 'Microsoft Dynamics', icon: <Building2 className="h-6 w-6" />, category: 'CRM' },
    { name: 'Zoho CRM', icon: <Database className="h-6 w-6" />, category: 'CRM' },
    { name: 'Google Workspace', icon: <Globe className="h-6 w-6" />, category: 'Productivity' },
    { name: 'Microsoft 365', icon: <Building2 className="h-6 w-6" />, category: 'Productivity' },
    { name: 'Mailchimp', icon: <MailIcon className="h-6 w-6" />, category: 'Email' },
    { name: 'SendGrid', icon: <MailIcon className="h-6 w-6" />, category: 'Email' },
    { name: 'Stripe', icon: <CreditCard className="h-6 w-6" />, category: 'Payment' },
    { name: 'PayPal', icon: <CreditCard className="h-6 w-6" />, category: 'Payment' },
    { name: 'Shopify', icon: <ShoppingCart className="h-6 w-6" />, category: 'E-commerce' },
    { name: 'WooCommerce', icon: <ShoppingCart className="h-6 w-6" />, category: 'E-commerce' },
    { name: 'Slack', icon: <Slack className="h-6 w-6" />, category: 'Communication' },
    { name: 'Microsoft Teams', icon: <Users className="h-6 w-6" />, category: 'Communication' },
    { name: 'Zapier', icon: <Zap className="h-6 w-6" />, category: 'Automation' },
    { name: 'Google Analytics', icon: <BarChart className="h-6 w-6" />, category: 'Analytics' }
  ];

  return (
    <PageSEO config={seoConfig}>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(147,51,234,0.05)_50%,transparent_70%)] bg-[length:100px_100px] animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
                <Cloud className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Complete CRM Services Platform</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Hire Revenue Cloud FX Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Complete CRM services platform to sell to your clients. Drive revenue generation with comprehensive 
                customer relationship management, sales automation, marketing automation, and revenue tools.
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
                  { value: '₹3,021+', label: 'Crores Revenue Generated' },
                  { value: '500+', label: 'Clients Served' },
                  { value: '45%', label: 'Revenue Growth' },
                  { value: '98%', label: 'Client Satisfaction' }
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
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">₹3,021+</div>
                <div className="text-gray-300">Crores Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-gray-300">Clients Using RevenueMTR</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">98%</div>
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
                RevenueMTR - Complete CRM Services Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                RevenueMTR is a comprehensive CRM services platform designed for agencies and businesses to sell 
                to their clients. Drive revenue generation with powerful CRM features, sales automation, marketing 
                automation, and revenue tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Sell to Clients</h3>
                <p className="text-gray-300 leading-relaxed">
                  Complete CRM services platform ready to sell to your clients. White-label options available 
                  for agencies and resellers.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Generate Revenue</h3>
                <p className="text-gray-300 leading-relaxed">
                  Powerful revenue generation tools including sales automation, marketing automation, 
                  and revenue analytics to drive business growth.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Complete Solution</h3>
                <p className="text-gray-300 leading-relaxed">
                  All-in-one CRM platform with customer management, sales pipeline, marketing automation, 
                  and revenue tools in one place.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-2xl border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Choose RevenueMTR?</h3>
                  <ul className="space-y-3">
                    {[
                      'Complete CRM services platform ready to sell to clients',
                      'Comprehensive features for revenue generation',
                      'Sales and marketing automation built-in',
                      'Revenue analytics and reporting tools',
                      'White-label options for agencies',
                      'Scalable platform for businesses of all sizes'
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
                        <div className="text-3xl font-bold text-purple-300 mb-1">45%</div>
                        <div className="text-xs text-gray-400">Revenue Growth</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">38%</div>
                        <div className="text-xs text-gray-400">Sales Efficiency</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">62%</div>
                        <div className="text-xs text-gray-400">Marketing ROI</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">91%</div>
                        <div className="text-xs text-gray-400">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CRM Features Section */}
          <section id="features" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Complete CRM Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful CRM features designed for revenue generation and customer relationship management
              </p>
            </div>

            <div className="space-y-6">
              {crmFeatures.map((feature, index) => (
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

          {/* CRM Services Section */}
          <section id="services" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                CRM Services to Sell
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete range of CRM services you can offer to your clients for revenue generation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {crmServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20 border border-purple-500/30">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-purple-300">{service.revenue}</div>
                      <div className="text-xs text-gray-400">{service.duration}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Revenue Tools Section */}
          <section id="revenue" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Revenue Generation Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools designed to generate revenue and drive business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {revenueTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20 border border-purple-500/30 mb-4 inline-block">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  <ul className="space-y-2">
                    {tool.benefits.map((benefit, benefitIndex) => (
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

          {/* Pricing Plans Section */}
          <section id="pricing" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trial.
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

          {/* Integrations Section */}
          <section id="integrations" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Platform Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect RevenueMTR with popular platforms and tools your clients already use
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-purple-300 mb-2">{integration.icon}</div>
                    <div className="text-sm font-medium text-white text-center">{integration.name}</div>
                    <div className="text-xs text-gray-400 mt-1">{integration.category}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-4">Need a custom integration? We can build it for you.</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Request Custom Integration
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* Success Stories Section */}
          <section id="case-studies" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from businesses using RevenueMTR CRM services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  company: 'Digital Marketing Agency',
                  industry: 'Marketing Services',
                  challenge: 'Needed CRM services to offer clients',
                  solution: 'Implemented RevenueMTR CRM services platform for client offerings',
                  results: [
                    { metric: '₹2.5Cr', label: 'Additional Revenue' },
                    { metric: '85%', label: 'Client Retention' },
                    { metric: '120+', label: 'New Clients' }
                  ],
                  testimonial: 'RevenueMTR helped us offer complete CRM services to our clients. We generated ₹2.5 crores in additional revenue within the first year.'
                },
                {
                  company: 'B2B Services Company',
                  industry: 'Professional Services',
                  challenge: 'Manual sales and customer management',
                  solution: 'Deployed RevenueMTR with sales automation and CRM features',
                  results: [
                    { metric: '45%', label: 'Revenue Growth' },
                    { metric: '38%', label: 'Sales Efficiency' },
                    { metric: '62%', label: 'Marketing ROI' }
                  ],
                  testimonial: 'RevenueMTR transformed our sales process. We saw 45% revenue growth and 38% improvement in sales efficiency within 6 months.'
                },
                {
                  company: 'E-commerce Business',
                  industry: 'Retail',
                  challenge: 'Customer relationship and revenue tracking',
                  solution: 'Integrated RevenueMTR CRM with e-commerce platform',
                  results: [
                    { metric: '73%', label: 'Customer Retention' },
                    { metric: '42%', label: 'Repeat Purchase Rate' },
                    { metric: '35%', label: 'Revenue per Customer' }
                  ],
                  testimonial: 'RevenueMTR gave us complete visibility into customer relationships. Customer retention improved by 73% and revenue per customer increased by 35%.'
                },
                {
                  company: 'SaaS Startup',
                  industry: 'Technology',
                  challenge: 'Scaling sales and customer management',
                  solution: 'Implemented RevenueMTR with full sales and marketing automation',
                  results: [
                    { metric: '88%', label: 'Sales Productivity' },
                    { metric: '55%', label: 'Lead Conversion' },
                    { metric: '51%', label: 'Revenue Growth' }
                  ],
                  testimonial: 'RevenueMTR scaled with our business. Sales productivity increased by 88% and we achieved 51% revenue growth in one year.'
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
                Common questions about RevenueMTR CRM services platform
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What is RevenueMTR?',
                  answer: 'RevenueMTR is a complete CRM services platform designed for agencies and businesses to sell to their clients. It includes comprehensive customer relationship management, sales automation, marketing automation, and revenue generation tools to help businesses drive revenue growth.'
                },
                {
                  question: 'Can I sell RevenueMTR services to my clients?',
                  answer: 'Yes! RevenueMTR is specifically designed for agencies and businesses to sell CRM services to their clients. We offer white-label options, reseller programs, and complete service packages that you can offer to your clients for revenue generation.'
                },
                {
                  question: 'What CRM features are included?',
                  answer: 'RevenueMTR includes complete CRM features such as customer relationship management, sales pipeline management, marketing automation, lead management and scoring, revenue analytics and reporting, customer support and service, and integrations with popular platforms.'
                },
                {
                  question: 'How does RevenueMTR help generate revenue?',
                  answer: 'RevenueMTR helps generate revenue through sales automation, marketing automation, lead management, revenue analytics, deal management, customer revenue tracking, and comprehensive reporting. These tools help businesses close more deals, retain customers, and optimize revenue performance.'
                },
                {
                  question: 'What services can I offer to clients?',
                  answer: 'You can offer a complete range of CRM services including CRM implementation and setup, sales process automation, marketing automation setup, CRM integration services, revenue analytics and reporting, and CRM training and support. Each service can generate significant revenue for your business.'
                },
                {
                  question: 'Is RevenueMTR customizable?',
                  answer: 'Yes, RevenueMTR is highly customizable. You can customize dashboards, reports, workflows, automation rules, integrations, and more to match your clients\' specific needs. We also offer custom development services for unique requirements.'
                },
                {
                  question: 'What integrations are available?',
                  answer: 'RevenueMTR integrates with 50+ popular platforms including Salesforce, HubSpot, Microsoft Dynamics, Zoho CRM, Google Workspace, Microsoft 365, email marketing platforms, payment gateways, e-commerce platforms, and more. We also support custom integrations.'
                },
                {
                  question: 'How do I get started with RevenueMTR?',
                  answer: 'Getting started is easy! Contact us to schedule a demo, discuss your requirements, and choose a pricing plan. We offer 14-day free trials, comprehensive onboarding, training, and ongoing support to help you successfully sell RevenueMTR services to your clients.'
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
              Ready to Start Selling CRM Services?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Start your 14-day free trial today. No credit card required. 
              Experience the power of RevenueMTR CRM services platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Rocket className="h-5 w-5 mr-2" />
                Start Free Trial
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
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageSEO>
  );
};

export default RevenueCloudFXPlatform;
