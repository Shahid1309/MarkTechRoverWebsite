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
  Calculator,
  CreditCard,
  TrendingDown,
  Wallet,
  Package
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const AICostGuide = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<number>(0);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Rocket className="h-4 w-4" /> },
    { id: 'pricing', label: 'Pricing Guide', icon: <DollarSign className="h-4 w-4" /> },
    { id: 'factors', label: 'Cost Factors', icon: <Calculator className="h-4 w-4" /> },{ id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
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
    const sectionIds = ['overview', 'pricing', 'factors', 'faqs'];
    
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
    title: 'AI Services Cost Guide | AI Implementation Pricing | MarkTechRover',
    description: 'AI Services Cost Guide - Comprehensive pricing guide for AI services, implementation, and consulting. Understand AI service costs, pricing factors, and get transparent pricing for your AI projects. Best AI cost guide in Delhi NCR & India.',
    keywords: [
      'AI Services Cost', 'AI Pricing', 'AI Implementation Cost', 'AI Services Pricing',
      'AI Cost Guide', 'AI Services India', 'AI Cost Delhi', 'AI Pricing Guide',
      'AI Consulting Cost', 'AI Development Cost', 'AI Services Price', 'AI Cost Calculator',
      'AI Services Budget', 'AI Investment Guide'
    ],
    url: '/services/ai-technology/ai-cost-guide',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['AI Cost Guide', 'AI Pricing', 'AI Services Cost', 'AI Implementation'],
    image: '/images/ai-cost-guide.webp'
  };

  const costFactors = [
    {
      id: 1,
      title: 'Project Scope & Complexity',
      description: 'The size and complexity of your AI project significantly impacts cost',
      icon: <Layers className="h-8 w-8" />,
      factors: [
        'Number of features and functionalities',
        'Integration complexity',
        'Data volume and processing requirements',
        'Custom AI model development',
        'Third-party integrations',
        'Scalability requirements'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'AI Technology Type',
      description: 'Different AI technologies have varying implementation costs',
      icon: <Brain className="h-8 w-8" />,
      factors: [
        'Machine learning model complexity',
        'Natural language processing requirements',
        'Computer vision capabilities',
        'Predictive analytics needs',
        'Chatbot and conversational AI',
        'Custom AI algorithm development'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 3,
      title: 'Data Requirements',
      description: 'Data collection, processing, and management impact costs',
      icon: <Database className="h-8 w-8" />,
      factors: [
        'Data collection and preparation',
        'Data cleaning and preprocessing',
        'Data storage and infrastructure',
        'Data labeling and annotation',
        'Data security and compliance',
        'Data pipeline development'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 4,
      title: 'Development & Integration',
      description: 'Development time and integration complexity affect pricing',
      icon: <Code className="h-8 w-8" />,
      factors: [
        'Development team size and expertise',
        'Development timeline',
        'API and system integrations',
        'Custom development requirements',
        'Testing and quality assurance',
        'Deployment and infrastructure setup'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support services add to total cost',
      icon: <Settings className="h-8 w-8" />,
      factors: [
        'Model retraining and updates',
        'Performance monitoring',
        'Bug fixes and updates',
        'Technical support level',
        'Feature enhancements',
        'Infrastructure maintenance'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'Business Requirements',
      description: 'Specific business needs and customization requirements',
      icon: <Briefcase className="h-8 w-8" />,
      factors: [
        'Industry-specific requirements',
        'Compliance and regulatory needs',
        'Custom reporting and analytics',
        'User training and documentation',
        'White-label options',
        'SLA and performance guarantees'
      ],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-500/10 to-violet-400/10',
      borderColor: 'border-violet-500/20',
      textColor: 'text-violet-300'
    }
  ];

  const pricingRanges = [
    {
      service: 'AI SEO Services',
      range: '₹25,000 - ₹2,00,000',
      period: 'per month',
      description: 'AI-powered SEO optimization and management',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Analytics']
    },
    {
      service: 'AI Digital Marketing',
      range: '₹30,000 - ₹2,50,000',
      period: 'per month',
      description: 'AI marketing automation and campaign management',
      features: ['Campaign management', 'Audience targeting', 'Content creation', 'Analytics']
    },
    {
      service: 'AI Consulting',
      range: '₹50,000 - ₹5,00,000',
      period: 'per project',
      description: 'AI strategy and implementation consulting',
      features: ['Strategy development', 'Technology selection', 'Implementation planning', 'Training']
    },
    {
      service: 'Custom AI Development',
      range: '₹5,00,000 - ₹50,00,000',
      period: 'per project',
      description: 'Custom AI solution development',
      features: ['Custom AI models', 'Full development', 'Integration', 'Deployment']
    },
    {
      service: 'AI Integration Services',
      range: '₹2,00,000 - ₹20,00,000',
      period: 'per project',
      description: 'AI integration with existing systems',
      features: ['System integration', 'API development', 'Data migration', 'Testing']
    },
    {
      service: 'AI Maintenance & Support',
      range: '₹15,000 - ₹1,50,000',
      period: 'per month',
      description: 'Ongoing AI maintenance and support',
      features: ['Model updates', 'Performance monitoring', 'Technical support', 'Updates']
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
                <Calculator className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Transparent AI Services Pricing</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" style={{ position: 'relative', zIndex: 10 }}>
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', position: 'relative', zIndex: 10 }}>
                  AI Marketing Implementation Cost Guide
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ position: 'relative', zIndex: 10 }}>
                Comprehensive pricing guide for AI services. Understand AI implementation costs, pricing factors, 
                and get transparent pricing for your AI projects and investments.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Get Quote
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate Cost
                </button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { value: '₹25K+', label: 'Starting Price' },
                  { value: 'Flexible', label: 'Pricing Models' },
                  { value: 'Transparent', label: 'No Hidden Costs' },
                  { value: 'Custom', label: 'Tailored Solutions' }
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
                <div className="text-gray-300">AI Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">95%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">Flexible</div>
                <div className="text-gray-300">Pricing Options</div>
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
                AI Services Pricing Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Understanding AI service costs helps you make informed decisions. Our transparent pricing guide covers 
                all aspects of AI implementation, from consultation to ongoing support, with flexible pricing models 
                to fit your budget and requirements.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-2xl border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Transparent Pricing Matters</h3>
                  <ul className="space-y-3">
                    {[
                      'No hidden costs or surprise charges',
                      'Clear understanding of investment required',
                      'Flexible pricing models to fit your budget',
                      'Transparent breakdown of all costs',
                      'Custom pricing for unique requirements',
                      'Value-based pricing for maximum ROI'
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
                    <h4 className="text-lg font-bold text-white mb-4">Pricing Models</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                        <span className="text-gray-300">Monthly Subscription</span>
                        <span className="text-purple-300 font-semibold">Flexible</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                        <span className="text-gray-300">One-Time Project</span>
                        <span className="text-purple-300 font-semibold">Fixed</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                        <span className="text-gray-300">Custom Enterprise</span>
                        <span className="text-purple-300 font-semibold">Tailored</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Ranges Section */}
          <section id="pricing" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                AI Services Pricing Ranges
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing ranges for different AI services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingRanges.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{service.service}</h3>
                    <div className="text-2xl font-bold text-purple-300 mb-1">{service.range}</div>
                    <div className="text-sm text-gray-400">{service.period}</div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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

          {/* Cost Factors Section */}
          <section id="factors" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Cost Factors
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding what affects AI service pricing
              </p>
            </div>

            <div className="space-y-6">
              {costFactors.map((factor, index) => (
                <div
                  key={factor.id}
                  className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border ${factor.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                >
                  <button
                    onClick={() => setExpandedFeature(expandedFeature === index ? -1 : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${factor.color} shadow-lg`}>
                        {factor.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {factor.title}
                        </h3>
                        <p className="text-gray-300">{factor.description}</p>
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
                        {factor.factors.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className={`h-5 w-5 ${factor.textColor} flex-shrink-0 mt-0.5`} />
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

          

          {/* FAQs Section */}
          <section id="faqs" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about AI services pricing
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'How much do AI services cost?',
                  answer: 'AI service costs vary based on project scope, complexity, technology requirements, and ongoing support needs. Basic AI services start from ₹25,000/month, while custom AI development can range from ₹5,00,000 to ₹50,00,000+ depending on requirements. We provide transparent pricing with no hidden costs.'
                },
                {
                  question: 'What factors affect AI service pricing?',
                  answer: 'Key factors include project scope and complexity, AI technology type, data requirements, development and integration needs, maintenance and support level, and specific business requirements. We provide detailed cost breakdowns based on your specific needs.'
                },
                {
                  question: 'Do you offer flexible pricing models?',
                  answer: 'Yes, we offer flexible pricing models including monthly subscriptions, one-time project pricing, and custom enterprise pricing. We work with you to find a pricing model that fits your budget and requirements.'
                },
                {
                  question: 'Are there any hidden costs?',
                  answer: 'No, we provide transparent pricing with no hidden costs. All costs are clearly outlined in our proposals, including setup, development, integration, and ongoing support. We discuss all potential costs upfront before starting any project.'
                },
                {
                  question: 'Can I get a custom quote?',
                  answer: 'Yes, we provide custom quotes based on your specific requirements. Contact us with your project details, and we\'ll provide a detailed proposal with transparent pricing for your AI project.'
                },
                {
                  question: 'What is included in the pricing?',
                  answer: 'Pricing typically includes consultation, strategy development, implementation, integration, training, and support. Specific inclusions vary by package and project. We provide detailed breakdowns of what\'s included in each package or project quote.'
                },
                {
                  question: 'Do you offer payment plans?',
                  answer: 'Yes, we offer flexible payment plans for larger projects. Payment terms can be structured based on project milestones or monthly installments. We work with you to create a payment plan that fits your cash flow.'
                },
                {
                  question: 'How do I get started?',
                  answer: 'Contact us for a free consultation. We\'ll discuss your requirements, provide transparent pricing, and create a customized proposal. Once approved, we\'ll begin implementation with clear milestones and deliverables.'
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
              Ready to Get Started with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get a transparent quote for your AI project. Contact us for a free consultation 
              and detailed pricing based on your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Rocket className="h-5 w-5 mr-2" />
                Get Quote
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-900/50 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-purple-900/70 transition-all duration-300"
              >
                <Calculator className="h-5 w-5 mr-2" />
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
                <span>Transparent pricing</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>No hidden costs</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageSEO>
  );
};

export default AICostGuide;
