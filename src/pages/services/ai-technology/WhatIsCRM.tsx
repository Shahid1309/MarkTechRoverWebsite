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
  GraduationCap
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const WhatIsCRM = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<number>(0);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Rocket className="h-4 w-4" /> },
    { id: 'features', label: 'Key Features', icon: <Zap className="h-4 w-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'types', label: 'CRM Types', icon: <Layers className="h-4 w-4" /> },
    { id: 'implementation', label: 'Implementation', icon: <Settings className="h-4 w-4" /> },
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
    const sectionIds = ['overview', 'features', 'benefits', 'types', 'implementation', 'faqs'];
    
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
    title: 'What is CRM? | Complete Guide to Customer Relationship Management | MarkTechRover',
    description: 'Learn what CRM is, how it works, and why businesses need it. Complete guide to Customer Relationship Management systems, features, benefits, and implementation. Best CRM guide in Delhi NCR & India.',
    keywords: [
      'What is CRM', 'CRM System', 'Customer Relationship Management', 'CRM Software',
      'CRM Guide', 'CRM Benefits', 'CRM Features', 'CRM Implementation',
      'CRM Delhi', 'Best CRM India', 'CRM Solutions', 'CRM Platform',
      'Sales CRM', 'Marketing CRM', 'CRM Tools', 'CRM Technology'
    ],
    url: '/services/ai-technology/what-is-crm',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['CRM', 'Customer Relationship Management', 'CRM Guide', 'Business Technology'],
    image: '/images/what-is-crm.webp'
  };

  const keyFeatures = [
    {
      id: 1,
      title: 'Contact Management',
      description: 'Centralized database to store and manage all customer information and interactions',
      icon: <Users className="h-8 w-8" />,
      features: [
        'Centralized customer database',
        'Contact history tracking',
        'Communication logs',
        'Customer profile management',
        'Relationship mapping',
        'Data import and export'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'Sales Pipeline Management',
      description: 'Track and manage sales opportunities through every stage of the sales process',
      icon: <TrendingUp className="h-8 w-8" />,
      features: [
        'Sales opportunity tracking',
        'Pipeline visualization',
        'Deal stage management',
        'Sales forecasting',
        'Activity tracking',
        'Sales reporting and analytics'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 3,
      title: 'Marketing Automation',
      description: 'Automate marketing campaigns and nurture leads through the customer journey',
      icon: <Zap className="h-8 w-8" />,
      features: [
        'Email marketing automation',
        'Lead nurturing campaigns',
        'Campaign tracking',
        'Marketing analytics',
        'A/B testing',
        'Customer segmentation'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 4,
      title: 'Customer Service',
      description: 'Manage customer support tickets, inquiries, and service requests efficiently',
      icon: <MessageSquare className="h-8 w-8" />,
      features: [
        'Ticket management',
        'Support case tracking',
        'Knowledge base',
        'Customer satisfaction surveys',
        'Service level agreements',
        'Support analytics'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting to track performance and make data-driven decisions',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        'Sales performance reports',
        'Marketing campaign analytics',
        'Customer behavior insights',
        'Custom dashboards',
        'Forecasting and predictions',
        'Data visualization'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'Integration Capabilities',
      description: 'Integrate with email, calendar, social media, and other business tools',
      icon: <Link2 className="h-8 w-8" />,
      features: [
        'Email integration',
        'Calendar synchronization',
        'Social media integration',
        'E-commerce platform integration',
        'Accounting software integration',
        'API and webhook support'
      ],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-500/10 to-violet-400/10',
      borderColor: 'border-violet-500/20',
      textColor: 'text-violet-300'
    }
  ];

  const benefits = [
    {
      title: 'Improved Customer Relationships',
      description: 'Build stronger relationships with customers through better communication and personalized interactions',
      icon: <Heart className="h-8 w-8" />,
      metric: '85%',
      label: 'Customer Satisfaction'
    },
    {
      title: 'Increased Sales Revenue',
      description: 'Boost sales revenue through better lead management and sales process optimization',
      icon: <DollarSign className="h-8 w-8" />,
      metric: '47%',
      label: 'Revenue Growth'
    },
    {
      title: 'Better Team Collaboration',
      description: 'Improve team collaboration with shared customer data and communication history',
      icon: <Users2 className="h-8 w-8" />,
      metric: '62%',
      label: 'Productivity Increase'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed business decisions with comprehensive analytics and reporting',
      icon: <BarChart className="h-8 w-8" />,
      metric: '73%',
      label: 'Better Decisions'
    }
  ];

  const crmTypes = [
    {
      type: 'Cloud-Based CRM',
      description: 'Hosted in the cloud, accessible from anywhere with internet connection',
      icon: <Cloud className="h-8 w-8" />,
      pros: [
        'Easy to access from anywhere',
        'Automatic updates and maintenance',
        'Scalable and flexible',
        'Lower upfront costs',
        'Mobile access',
        'Automatic backups'
      ],
      cons: [
        'Requires internet connection',
        'Ongoing subscription costs',
        'Data stored off-premises'
      ],
      bestFor: 'Small to medium businesses, remote teams'
    },
    {
      type: 'On-Premise CRM',
      description: 'Installed and hosted on your own servers and infrastructure',
      icon: <Server className="h-8 w-8" />,
      pros: [
        'Full control over data',
        'Customizable to specific needs',
        'No ongoing subscription fees',
        'Works offline',
        'Enhanced security control',
        'Compliance with strict regulations'
      ],
      cons: [
        'Higher upfront costs',
        'Requires IT infrastructure',
        'Manual updates and maintenance',
        'Limited remote access'
      ],
      bestFor: 'Large enterprises, regulated industries'
    },
    {
      type: 'Industry-Specific CRM',
      description: 'Tailored CRM solutions designed for specific industries',
      icon: <Briefcase className="h-8 w-8" />,
      pros: [
        'Industry-specific features',
        'Pre-configured workflows',
        'Compliance built-in',
        'Industry best practices',
        'Specialized reporting',
        'Industry templates'
      ],
      cons: [
        'Less flexible than generic CRM',
        'May have limited customization',
        'Higher costs'
      ],
      bestFor: 'Healthcare, real estate, financial services'
    }
  ];

  const implementationSteps = [
    {
      step: '01',
      title: 'Planning & Assessment',
      description: 'Assess your business needs and plan CRM implementation strategy',
      icon: <Search className="h-6 w-6" />,
      details: [
        'Identify business requirements',
        'Assess current processes',
        'Define goals and objectives',
        'Plan implementation timeline'
      ]
    },
    {
      step: '02',
      title: 'CRM Selection',
      description: 'Choose the right CRM platform that fits your business needs',
      icon: <Target className="h-6 w-6" />,
      details: [
        'Research CRM options',
        'Compare features and pricing',
        'Evaluate integrations',
        'Select best-fit CRM'
      ]
    },
    {
      step: '03',
      title: 'Data Migration',
      description: 'Migrate existing customer data to the new CRM system',
      icon: <Database className="h-6 w-6" />,
      details: [
        'Clean and organize data',
        'Map data fields',
        'Import customer data',
        'Verify data accuracy'
      ]
    },
    {
      step: '04',
      title: 'Configuration & Customization',
      description: 'Configure CRM settings and customize for your business processes',
      icon: <Settings className="h-6 w-6" />,
      details: [
        'Configure workflows',
        'Customize fields and forms',
        'Set up automation',
        'Configure integrations'
      ]
    },
    {
      step: '05',
      title: 'Training & Adoption',
      description: 'Train your team and ensure successful CRM adoption',
      icon: <GraduationCap className="h-6 w-6" />,
      details: [
        'Conduct user training',
        'Create documentation',
        'Provide ongoing support',
        'Monitor adoption rates'
      ]
    },
    {
      step: '06',
      title: 'Launch & Optimization',
      description: 'Launch CRM and continuously optimize for better results',
      icon: <Rocket className="h-6 w-6" />,
      details: [
        'Go live with CRM',
        'Monitor performance',
        'Gather user feedback',
        'Continuously optimize'
      ]
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
                <Info className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Complete CRM Guide</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  What Is CRM System Explained
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Learn everything about CRM systems - what they are, how they work, key features, benefits, 
                and how to implement them for your business success.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Get CRM Consultation
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <Book className="h-5 w-5 mr-2" />
                  Read More
                </button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { value: '85%', label: 'Customer Satisfaction' },
                  { value: '47%', label: 'Revenue Growth' },
                  { value: '62%', label: 'Productivity Increase' },
                  { value: '73%', label: 'Better Decisions' }
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
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">91%</div>
                <div className="text-gray-300">Businesses Using CRM</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">$87B</div>
                <div className="text-gray-300">Global CRM Market Size</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">300+</div>
                <div className="text-gray-300">CRM Platforms Available</div>
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
                What is CRM?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                CRM (Customer Relationship Management) is a technology and strategy for managing all your company's 
                relationships and interactions with customers and potential customers. A CRM system helps businesses 
                stay connected to customers, streamline processes, and improve profitability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Centralized Data</h3>
                <p className="text-gray-300 leading-relaxed">
                  Store all customer information, interactions, and history in one centralized database.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Better Relationships</h3>
                <p className="text-gray-300 leading-relaxed">
                  Build stronger customer relationships through personalized interactions and better communication.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Increased Sales</h3>
                <p className="text-gray-300 leading-relaxed">
                  Boost sales revenue through better lead management, sales tracking, and process optimization.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-2xl border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Businesses Need CRM</h3>
                  <ul className="space-y-3">
                    {[
                      'Centralize customer data and interactions',
                      'Improve customer service and satisfaction',
                      'Increase sales revenue and productivity',
                      'Automate marketing and sales processes',
                      'Make data-driven business decisions',
                      'Enhance team collaboration and communication'
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
                        <div className="text-3xl font-bold text-purple-300 mb-1">91%</div>
                        <div className="text-xs text-gray-400">Businesses Using CRM</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">47%</div>
                        <div className="text-xs text-gray-400">Revenue Growth</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">62%</div>
                        <div className="text-xs text-gray-400">Productivity Increase</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">85%</div>
                        <div className="text-xs text-gray-400">Customer Satisfaction</div>
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
                Key CRM Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Essential features that make CRM systems powerful tools for business growth
              </p>
            </div>

            <div className="space-y-6">
              {keyFeatures.map((feature, index) => (
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
                Key Benefits of CRM
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                How CRM systems transform businesses and drive growth
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

          {/* CRM Types Section */}
          <section id="types" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Types of CRM Systems
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Different types of CRM solutions to meet various business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {crmTypes.map((crm, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20 border border-purple-500/30 mb-6 inline-block">
                    {crm.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{crm.type}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{crm.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-300 mb-3">Pros:</h4>
                    <ul className="space-y-2">
                      {crm.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-rose-300 mb-3">Cons:</h4>
                    <ul className="space-y-2">
                      {crm.cons.map((con, conIndex) => (
                        <li key={conIndex} className="flex items-start space-x-2">
                          <AlertCircle className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold text-purple-300">Best for: </span>
                      {crm.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation Section */}
          <section id="implementation" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                CRM Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Step-by-step guide to successfully implementing CRM in your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {implementationSteps.map((step, index) => (
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
                Common questions about CRM systems
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What is CRM and why do I need it?',
                  answer: 'CRM (Customer Relationship Management) is a technology for managing all your company\'s relationships and interactions with customers. You need it to centralize customer data, improve customer service, increase sales, automate processes, and make data-driven decisions.'
                },
                {
                  question: 'What are the main types of CRM systems?',
                  answer: 'The main types are Cloud-Based CRM (hosted online, accessible anywhere), On-Premise CRM (installed on your servers), and Industry-Specific CRM (tailored for specific industries like healthcare or real estate).'
                },
                {
                  question: 'How much does a CRM system cost?',
                  answer: 'CRM costs vary widely. Cloud-based CRM typically ranges from ₹500 to ₹5,000 per user per month. On-premise CRM can cost ₹5 lakhs to ₹50 lakhs upfront. Enterprise solutions can cost more. Many CRMs offer free or low-cost starter plans.'
                },
                {
                  question: 'How long does it take to implement CRM?',
                  answer: 'Implementation time varies based on complexity. Simple cloud CRM can be set up in 1-2 weeks. Complex enterprise CRM with customizations can take 3-6 months. Data migration and training add additional time.'
                },
                {
                  question: 'What data should I put in CRM?',
                  answer: 'You should include customer contact information, communication history, sales opportunities, purchase history, support tickets, marketing interactions, notes, documents, and any other customer-related data that helps you serve them better.'
                },
                {
                  question: 'Can CRM integrate with other business tools?',
                  answer: 'Yes, most modern CRM systems integrate with email, calendar, accounting software, e-commerce platforms, marketing tools, social media, and other business applications through APIs and pre-built integrations.'
                },
                {
                  question: 'Is CRM secure and compliant?',
                  answer: 'Reputable CRM providers use enterprise-grade security including encryption, secure data centers, regular backups, access controls, and compliance with regulations like GDPR, CCPA, and industry-specific requirements.'
                },
                {
                  question: 'How do I ensure my team adopts CRM?',
                  answer: 'Ensure adoption by providing comprehensive training, demonstrating value, starting with essential features, getting leadership buy-in, making CRM easy to use, providing ongoing support, and showing success stories and ROI.'
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
              Ready to Implement CRM for Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get expert CRM consultation and implementation services. Choose the right CRM, 
              migrate your data, and transform your customer relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Rocket className="h-5 w-5 mr-2" />
                Get CRM Consultation
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
                <span>Expert guidance</span>
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

export default WhatIsCRM;
