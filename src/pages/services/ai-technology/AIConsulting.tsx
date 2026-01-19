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
  ClipboardCheck,
  Target as TargetIcon
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const AIConsulting = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<number>(0);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Rocket className="h-4 w-4" /> },
    { id: 'services', label: 'Services', icon: <Zap className="h-4 w-4" /> },
    { id: 'process', label: 'Process', icon: <Workflow className="h-4 w-4" /> },
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
    const sectionIds = ['overview', 'services', 'process', 'benefits', 'pricing', 'case-studies', 'faqs'];
    
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
    title: 'AI Consulting Services | AI Strategy & Implementation | MarkTechRover',
    description: 'AI Consulting Services - Expert AI strategy, implementation, and consulting services. Get AI strategy development, technology selection, implementation planning, and training. Best AI consulting services in Delhi NCR & India.',
    keywords: [
      'AI Consulting', 'AI Consulting Services', 'AI Strategy', 'AI Implementation',
      'AI Consulting India', 'AI Consulting Delhi', 'Best AI Consulting', 'AI Strategy Consulting',
      'AI Technology Consulting', 'AI Business Consulting', 'AI Transformation', 'AI Advisory',
      'AI Implementation Consulting', 'AI Consulting Services India'
    ],
    url: '/services/ai-technology/ai-consulting',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['AI Consulting', 'AI Strategy', 'AI Implementation', 'AI Advisory'],
    image: '/images/ai-consulting.webp'
  };

  const services = [
    {
      id: 1,
      title: 'AI Strategy Development',
      description: 'Comprehensive AI strategy development to align AI initiatives with business goals',
      icon: <TargetIcon className="h-8 w-8" />,
      features: [
        'Business AI assessment',
        'AI opportunity identification',
        'AI roadmap development',
        'ROI analysis and forecasting',
        'Risk assessment and mitigation',
        'Strategic AI planning'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'AI Technology Selection',
      description: 'Expert guidance on selecting the right AI technologies and platforms for your needs',
      icon: <Brain className="h-8 w-8" />,
      features: [
        'Technology evaluation',
        'Platform comparison',
        'Vendor assessment',
        'Cost-benefit analysis',
        'Scalability assessment',
        'Integration compatibility'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 3,
      title: 'AI Implementation Planning',
      description: 'Detailed implementation planning and roadmap for successful AI deployment',
      icon: <ClipboardCheck className="h-8 w-8" />,
      features: [
        'Implementation roadmap',
        'Project planning',
        'Resource allocation',
        'Timeline development',
        'Milestone definition',
        'Risk management planning'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 4,
      title: 'AI Training & Education',
      description: 'Comprehensive training programs to build AI capabilities within your organization',
      icon: <BookOpen className="h-8 w-8" />,
      features: [
        'Executive AI training',
        'Technical team training',
        'AI best practices workshops',
        'Use case development',
        'Change management',
        'Ongoing education programs'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'AI Governance & Ethics',
      description: 'Establish AI governance frameworks and ethical AI practices',
      icon: <Shield className="h-8 w-8" />,
      features: [
        'AI governance framework',
        'Ethical AI guidelines',
        'Compliance and regulations',
        'Data privacy and security',
        'AI risk management',
        'Audit and monitoring'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'AI Performance Optimization',
      description: 'Optimize existing AI implementations for better performance and ROI',
      icon: <Gauge className="h-8 w-8" />,
      features: [
        'AI performance audit',
        'Model optimization',
        'Process improvement',
        'Cost optimization',
        'Scalability enhancement',
        'Performance benchmarking'
      ],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-500/10 to-violet-400/10',
      borderColor: 'border-violet-500/20',
      textColor: 'text-violet-300'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'Understand your business, goals, and current state',
      duration: '1-2 weeks',
      deliverables: [
        'Business assessment',
        'Current state analysis',
        'Stakeholder interviews',
        'Requirements gathering'
      ]
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Develop comprehensive AI strategy aligned with business goals',
      duration: '2-3 weeks',
      deliverables: [
        'AI strategy document',
        'Opportunity identification',
        'ROI analysis',
        'Implementation roadmap'
      ]
    },
    {
      step: 3,
      title: 'Technology Selection',
      description: 'Select and evaluate appropriate AI technologies and platforms',
      duration: '1-2 weeks',
      deliverables: [
        'Technology recommendations',
        'Vendor evaluation',
        'Cost-benefit analysis',
        'Platform selection'
      ]
    },
    {
      step: 4,
      title: 'Implementation Planning',
      description: 'Create detailed implementation plan and project structure',
      duration: '1-2 weeks',
      deliverables: [
        'Implementation plan',
        'Project timeline',
        'Resource allocation',
        'Risk management plan'
      ]
    },
    {
      step: 5,
      title: 'Training & Enablement',
      description: 'Train your team and enable AI capabilities',
      duration: '2-4 weeks',
      deliverables: [
        'Training programs',
        'Documentation',
        'Best practices guide',
        'Ongoing support plan'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Access to AI experts with deep industry knowledge and experience',
      icon: <UserCheck className="h-8 w-8" />,
      metric: '15+',
      label: 'Years Experience'
    },
    {
      title: 'Faster Implementation',
      description: 'Accelerate AI implementation with proven methodologies and best practices',
      icon: <Zap className="h-8 w-8" />,
      metric: '40%',
      label: 'Faster Deployment'
    },
    {
      title: 'Better ROI',
      description: 'Maximize ROI with strategic AI planning and optimization',
      icon: <TrendingUp className="h-8 w-8" />,
      metric: '55%',
      label: 'ROI Improvement'
    },
    {
      title: 'Risk Mitigation',
      description: 'Reduce risks with comprehensive planning and expert guidance',
      icon: <Shield className="h-8 w-8" />,
      metric: '60%',
      label: 'Risk Reduction'
    }
  ];

  const pricingPlans = [
    {
      name: 'Strategy Session',
      price: '₹50,000',
      period: 'one-time',
      description: 'Single AI strategy consultation session',
      features: [
        '2-hour strategy session',
        'AI opportunity assessment',
        'Strategic recommendations',
        'Action plan document',
        '30 days email support'
      ],
      highlighted: false,
      cta: 'Book Session',
      popular: false
    },
    {
      name: 'Full Consulting',
      price: '₹2,00,000',
      period: 'per project',
      description: 'Comprehensive AI consulting and strategy development',
      features: [
        'Complete AI strategy',
        'Technology selection',
        'Implementation planning',
        'Team training',
        '3 months support',
        'Performance monitoring',
        'Optimization recommendations'
      ],
      highlighted: true,
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise Consulting',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-featured AI consulting for large organizations',
      features: [
        'Complete AI transformation',
        'Dedicated consulting team',
        'Custom strategy development',
        'Ongoing advisory',
        '24/7 support',
        'Custom training programs',
        'Governance framework',
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
                <Lightbulb className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Expert AI Strategy & Implementation Consulting</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" style={{ position: 'relative', zIndex: 10 }}>
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', position: 'relative', zIndex: 10 }}>
                  Hire AI Marketing Consulting
                </span>
                <span className="block bg-gradient-to-r from-purple-200 via-blue-200 to-purple-300 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', position: 'relative', zIndex: 10 }}>
                  Strategy & Implementation
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ position: 'relative', zIndex: 10 }}>
                Expert AI consulting to develop strategies, select technologies, and implement AI solutions. 
                Transform your business with strategic AI planning and expert guidance.
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
                  { value: '15+', label: 'Years Experience' },
                  { value: '40%', label: 'Faster Deployment' },
                  { value: '55%', label: 'ROI Improvement' },
                  { value: '60%', label: 'Risk Reduction' }
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
                <div className="text-gray-300">AI Projects Consulted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-gray-300">Years of Experience</div>
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
                Expert AI Consulting Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business with strategic AI consulting. Our expert consultants help you develop AI strategies, 
                select technologies, plan implementations, and build AI capabilities to drive innovation and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <TargetIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Strategy Development</h3>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive AI strategy development aligned with your business goals and objectives.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Technology Selection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Expert guidance on selecting the right AI technologies and platforms for your needs.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Implementation Planning</h3>
                <p className="text-gray-300 leading-relaxed">
                  Detailed implementation planning and roadmap for successful AI deployment.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-2xl border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Use AI Consulting Services?</h3>
                  <ul className="space-y-3">
                    {[
                      'Expert guidance from AI specialists with deep industry knowledge',
                      'Strategic planning aligned with business goals and objectives',
                      'Technology selection based on your specific requirements',
                      'Risk mitigation through comprehensive planning and assessment',
                      'Faster implementation with proven methodologies',
                      'Training and enablement to build internal AI capabilities'
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
                        <div className="text-3xl font-bold text-purple-300 mb-1">15+</div>
                        <div className="text-xs text-gray-400">Years Experience</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">40%</div>
                        <div className="text-xs text-gray-400">Faster Deployment</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">55%</div>
                        <div className="text-xs text-gray-400">ROI Improvement</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">60%</div>
                        <div className="text-xs text-gray-400">Risk Reduction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                AI Consulting Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI consulting services for your business transformation
              </p>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border ${service.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                >
                  <button
                    onClick={() => setExpandedFeature(expandedFeature === index ? -1 : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-300">{service.description}</p>
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
                        {service.features.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className={`h-5 w-5 ${service.textColor} flex-shrink-0 mt-0.5`} />
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

          {/* Process Section */}
          <section id="process" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Consulting Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful AI transformation
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl font-bold text-white">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <span className="text-sm text-purple-300 font-medium">{step.duration}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{step.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
                Why businesses choose AI Consulting Services
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
                Choose the consulting package that fits your needs
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
                Real results from businesses using AI Consulting Services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  company: 'Manufacturing Company',
                  industry: 'Manufacturing',
                  challenge: 'Unclear AI strategy and technology selection',
                  solution: 'Provided comprehensive AI consulting with strategy development and technology selection',
                  results: [
                    { metric: '50%', label: 'Faster Implementation' },
                    { metric: '45%', label: 'Cost Savings' },
                    { metric: '60%', label: 'ROI Improvement' }
                  ],
                  testimonial: 'AI consulting provided clear direction and strategy. We implemented AI 50% faster, saved 45% on costs, and achieved 60% ROI improvement. The expert guidance was invaluable.'
                },
                {
                  company: 'Financial Services',
                  industry: 'Finance',
                  challenge: 'Need for AI transformation strategy',
                  solution: 'Developed comprehensive AI strategy and implementation roadmap',
                  results: [
                    { metric: '55%', label: 'ROI Improvement' },
                    { metric: '40%', label: 'Faster Deployment' },
                    { metric: '50%', label: 'Risk Reduction' }
                  ],
                  testimonial: 'AI consulting helped us develop a clear transformation strategy. ROI improved by 55%, deployment was 40% faster, and we reduced risks by 50%. Highly recommended.'
                },
                {
                  company: 'Healthcare Organization',
                  industry: 'Healthcare',
                  challenge: 'Complex AI technology selection and compliance',
                  solution: 'Provided AI consulting with technology selection and compliance guidance',
                  results: [
                    { metric: '48%', label: 'Faster Implementation' },
                    { metric: '52%', label: 'Cost Optimization' },
                    { metric: '58%', label: 'ROI Improvement' }
                  ],
                  testimonial: 'AI consulting guided us through technology selection and compliance. Implementation was 48% faster, costs optimized by 52%, and ROI improved by 58%.'
                },
                {
                  company: 'Retail Chain',
                  industry: 'Retail',
                  challenge: 'AI strategy and implementation planning',
                  solution: 'Delivered comprehensive AI strategy and detailed implementation plan',
                  results: [
                    { metric: '45%', label: 'Faster Deployment' },
                    { metric: '50%', label: 'ROI Improvement' },
                    { metric: '55%', label: 'Risk Reduction' }
                  ],
                  testimonial: 'AI consulting provided excellent strategy and planning. Deployment was 45% faster, ROI improved by 50%, and we reduced risks by 55%. The consulting was top-notch.'
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
                Common questions about AI Consulting Services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What is AI consulting?',
                  answer: 'AI consulting involves expert guidance to help businesses develop AI strategies, select technologies, plan implementations, and build AI capabilities. Consultants assess your business needs, identify AI opportunities, develop strategies, and provide ongoing support for successful AI transformation.'
                },
                {
                  question: 'Why do I need AI consulting?',
                  answer: 'AI consulting helps you avoid costly mistakes, accelerate implementation, maximize ROI, and reduce risks. Consultants bring expertise, proven methodologies, and industry knowledge to help you make informed decisions and successfully implement AI solutions.'
                },
                {
                  question: 'What does AI consulting include?',
                  answer: 'AI consulting typically includes business assessment, AI strategy development, technology selection, implementation planning, team training, governance framework development, and ongoing advisory support. Specific services vary based on your needs and the consulting package selected.'
                },
                {
                  question: 'How long does AI consulting take?',
                  answer: 'AI consulting duration varies based on scope and complexity. Strategy sessions can be completed in 1-2 weeks, while comprehensive consulting projects typically take 6-12 weeks. Enterprise transformations may take 3-6 months or longer depending on requirements.'
                },
                {
                  question: 'Do I need technical expertise?',
                  answer: 'No technical expertise is required. AI consultants work with your team to understand business needs and translate them into technical requirements. They handle the technical aspects while keeping you informed and involved in strategic decisions.'
                },
                {
                  question: 'What industries do you serve?',
                  answer: 'We serve all industries including manufacturing, healthcare, finance, retail, e-commerce, technology, professional services, and more. Our consultants have experience across multiple industries and can adapt strategies to your specific industry needs.'
                },
                {
                  question: 'Can you help with AI implementation?',
                  answer: 'Yes, we provide both consulting and implementation services. We can develop your AI strategy and then help implement it, or work with your team to guide implementation. We also partner with implementation teams to ensure successful deployment.'
                },
                {
                  question: 'What is the ROI of AI consulting?',
                  answer: 'AI consulting typically delivers strong ROI by helping you avoid costly mistakes, accelerate implementation, optimize technology selection, and maximize AI value. Most clients see ROI improvements of 40-60% compared to going it alone, with faster time-to-value and reduced risks.'
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get started with AI Consulting Services today. Expert guidance to develop strategies, 
              select technologies, and implement AI solutions for your business.
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
                <Lightbulb className="h-5 w-5 mr-2" />
                Schedule Consultation
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
                <span>Proven methodologies</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageSEO>
  );
};

export default AIConsulting;
