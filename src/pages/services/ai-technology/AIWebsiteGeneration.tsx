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
  Eye as EyeIcon,
  Wand2,
  Image,
  Video,
  Sparkles as SparklesIcon,
  Globe2,
  LayoutGrid,
  MonitorSmartphone
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const AIWebsiteGeneration = () => {
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
    title: 'AI Website Generation | AI-Powered Website Builder | Automated Website Creation | MarkTechRover',
    description: 'AI Website Generation - Create professional websites automatically using artificial intelligence. Generate complete websites with design, content, and functionality in minutes. Best AI website generation services in Delhi NCR & India.',
    keywords: [
      'AI Website Generation', 'AI Website Builder', 'Automated Website Creation', 'AI Web Design',
      'AI Website Maker', 'Smart Website Builder', 'AI Web Development', 'AI Website Platform',
      'AI Website Generation Delhi', 'Best AI Website Builder India', 'AI Website Services', 'Automated Web Design',
      'AI Website Creator', 'Machine Learning Websites', 'AI Website Development', 'Intelligent Website Builder'
    ],
    url: '/services/ai-technology/ai-website-generation',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['AI Website Generation', 'AI Website Builder', 'Automated Website Creation', 'AI Web Development'],
    image: '/images/ai-website-generation.webp'
  };

  const features = [
    {
      id: 1,
      title: 'AI-Powered Design Generation',
      description: 'Automatically generate beautiful, modern website designs based on your brand and industry',
      icon: <Palette className="h-8 w-8" />,
      features: [
        'Automatic layout and design generation',
        'Brand color and style matching',
        'Industry-specific templates',
        'Responsive design optimization',
        'Modern UI/UX best practices',
        'Custom design variations'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'Intelligent Content Creation',
      description: 'AI generates compelling website content including copy, headlines, and descriptions',
      icon: <FileText className="h-8 w-8" />,
      features: [
        'SEO-optimized content generation',
        'Brand voice and tone matching',
        'Automatic page content creation',
        'Product/service descriptions',
        'Blog post generation',
        'Multi-language content support'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 3,
      title: 'Complete Website Functionality',
      description: 'Generate fully functional websites with forms, navigation, and interactive elements',
      icon: <Code className="h-8 w-8" />,
      features: [
        'Contact forms and lead capture',
        'Navigation and menu systems',
        'Interactive elements and animations',
        'E-commerce functionality',
        'Blog and CMS integration',
        'Third-party integrations'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 4,
      title: 'Responsive & Mobile-First',
      description: 'Automatically generate mobile-responsive websites that work perfectly on all devices',
      icon: <MonitorSmartphone className="h-8 w-8" />,
      features: [
        'Mobile-first design approach',
        'Automatic responsive breakpoints',
        'Touch-optimized interfaces',
        'Cross-device testing',
        'Performance optimization',
        'Mobile SEO optimization'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'SEO Optimization',
      description: 'Built-in SEO optimization with meta tags, structured data, and performance optimization',
      icon: <Search className="h-8 w-8" />,
      features: [
        'Automatic SEO meta tags',
        'Structured data markup',
        'Page speed optimization',
        'Mobile-friendly optimization',
        'XML sitemap generation',
        'SEO-friendly URLs'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'Analytics & Performance',
      description: 'Built-in analytics and performance monitoring to track website performance and user behavior',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        'Real-time analytics integration',
        'Performance monitoring',
        'User behavior tracking',
        'Conversion tracking',
        'Custom dashboards',
        'Performance insights'
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
      title: 'Define Requirements',
      description: 'Provide your business information, industry, and website goals',
      icon: <Target className="h-6 w-6" />,
      details: [
        'Input business details and industry',
        'Define website goals and objectives',
        'Specify brand colors and style',
        'Set content requirements'
      ]
    },
    {
      step: '02',
      title: 'AI Generation',
      description: 'AI analyzes your requirements and generates complete website',
      icon: <Brain className="h-6 w-6" />,
      details: [
        'AI generates website design',
        'Creates all page content',
        'Builds navigation structure',
        'Implements functionality'
      ]
    },
    {
      step: '03',
      title: 'Review & Customize',
      description: 'Review generated website and customize design and content',
      icon: <Eye className="h-6 w-6" />,
      details: [
        'Review generated website',
        'Customize design elements',
        'Edit content and copy',
        'Add custom features'
      ]
    },
    {
      step: '04',
      title: 'Launch & Optimize',
      description: 'Launch your website and continuously optimize for better performance',
      icon: <Rocket className="h-6 w-6" />,
      details: [
        'Launch website live',
        'Monitor performance',
        'Optimize based on data',
        'Scale and improve'
      ]
    }
  ];

  const benefits = [
    {
      title: '10x Faster Development',
      description: 'Generate complete websites in hours instead of weeks, dramatically reducing development time',
      icon: <Zap className="h-8 w-8" />,
      metric: '10x',
      label: 'Faster Development'
    },
    {
      title: 'Cost Effective',
      description: 'Reduce website development costs by up to 70% compared to traditional development',
      icon: <DollarSign className="h-8 w-8" />,
      metric: '70%',
      label: 'Cost Savings'
    },
    {
      title: 'Professional Quality',
      description: 'AI-generated websites match professional design standards with modern UI/UX',
      icon: <Award className="h-8 w-8" />,
      metric: '100%',
      label: 'Professional Quality'
    },
    {
      title: 'SEO Optimized',
      description: 'Built-in SEO optimization ensures your website ranks well in search engines',
      icon: <TrendingUp className="h-8 w-8" />,
      metric: '3x',
      label: 'Better Rankings'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹45,000',
      period: 'one-time',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Basic design templates',
        'AI content generation',
        'Mobile responsive',
        'Basic SEO optimization',
        'Contact form',
        'Email support'
      ],
      highlighted: false,
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '₹95,000',
      period: 'one-time',
      description: 'Comprehensive website generation for growing businesses',
      features: [
        'Up to 15 pages',
        'Custom design generation',
        'Advanced AI content',
        'E-commerce functionality',
        'Advanced SEO optimization',
        'Blog and CMS',
        'Analytics integration',
        'Priority support',
        '3 months maintenance'
      ],
      highlighted: true,
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-featured website generation for large organizations',
      features: [
        'Unlimited pages',
        'Custom AI models',
        'White-label solutions',
        'Advanced integrations',
        'Custom development',
        'Dedicated account manager',
        '24/7 support',
        'Ongoing maintenance',
        'SLA guarantees',
        'Custom features'
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
                <Globe2 className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">AI-Powered Website Generation Technology</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Hire AI Website Generation Services
                </span>
                  <span className="block bg-gradient-to-r from-purple-200 via-blue-200 to-purple-300 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', position: 'relative', zIndex: 10 }}>
                    Technology
                  </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Create professional websites automatically using artificial intelligence. Generate complete websites 
                with design, content, and functionality in hours instead of weeks.
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
                  { value: '10x', label: 'Faster Development' },
                  { value: '70%', label: 'Cost Savings' },
                  { value: '100%', label: 'Professional Quality' },
                  { value: '3x', label: 'Better Rankings' }
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
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">₹200+</div>
                <div className="text-gray-300">Crores Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">150+</div>
                <div className="text-gray-300">Websites Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">92%</div>
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
                AI-Powered Website Generation Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                AI Website Generation Technology uses advanced artificial intelligence to automatically create professional 
                websites. Generate complete websites with modern design, compelling content, and full functionality in hours 
                instead of weeks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI-Powered Creation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Advanced AI algorithms generate beautiful designs, compelling content, and complete website functionality automatically.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">10x Faster</h3>
                <p className="text-gray-300 leading-relaxed">
                  Create complete websites in hours instead of weeks, dramatically reducing development time and costs.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Professional Quality</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI-generated websites match professional design standards with modern UI/UX and best practices.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-2xl border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Use AI Website Generation?</h3>
                  <ul className="space-y-3">
                    {[
                      'Generate websites 10x faster than traditional development',
                      'Reduce development costs by up to 70%',
                      'Professional quality designs and content',
                      'Built-in SEO optimization for better rankings',
                      'Mobile-responsive and modern UI/UX',
                      'Complete functionality out of the box'
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
                        <div className="text-3xl font-bold text-purple-300 mb-1">10x</div>
                        <div className="text-xs text-gray-400">Faster Development</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">70%</div>
                        <div className="text-xs text-gray-400">Cost Savings</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">100%</div>
                        <div className="text-xs text-gray-400">Professional Quality</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">3x</div>
                        <div className="text-xs text-gray-400">Better Rankings</div>
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
                Complete AI Website Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful features designed to automate and optimize your website creation process
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
                How AI Website Generation Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Simple 4-step process to generate your AI-powered website
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
                Why businesses choose AI Website Generation Technology
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
                Real results from businesses using AI Website Generation Technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  company: 'E-commerce Startup',
                  industry: 'Retail',
                  challenge: 'High website development costs and long timelines',
                  solution: 'Used AI website generation to create professional e-commerce site',
                  results: [
                    { metric: '12x', label: 'Faster Launch' },
                    { metric: '68%', label: 'Cost Savings' },
                    { metric: '4.2x', label: 'Traffic Growth' }
                  ],
                  testimonial: 'AI website generation helped us launch our e-commerce site 12x faster with 68% cost savings. We saw 4.2x traffic growth within 3 months.'
                },
                {
                  company: 'Professional Services',
                  industry: 'Services',
                  challenge: 'Need for professional website quickly',
                  solution: 'Deployed AI website generation for complete website creation',
                  results: [
                    { metric: '10x', label: 'Faster Development' },
                    { metric: '72%', label: 'Cost Reduction' },
                    { metric: '3.5x', label: 'Lead Generation' }
                  ],
                  testimonial: 'AI website generation delivered a professional website 10x faster. We reduced costs by 72% and increased lead generation by 3.5x.'
                },
                {
                  company: 'SaaS Company',
                  industry: 'Technology',
                  challenge: 'Limited budget for website development',
                  solution: 'Implemented AI website generation for cost-effective solution',
                  results: [
                    { metric: '8x', label: 'Faster Launch' },
                    { metric: '65%', label: 'Cost Savings' },
                    { metric: '2.8x', label: 'Conversion Rate' }
                  ],
                  testimonial: 'AI website generation provided a cost-effective solution. We launched 8x faster with 65% cost savings and achieved 2.8x higher conversion rates.'
                },
                {
                  company: 'Marketing Agency',
                  industry: 'Agency',
                  challenge: 'Client demand for quick website delivery',
                  solution: 'Used AI website generation to deliver websites faster',
                  results: [
                    { metric: '15x', label: 'Faster Delivery' },
                    { metric: '55%', label: 'Time Saved' },
                    { metric: '42%', label: 'Client Satisfaction' }
                  ],
                  testimonial: 'AI website generation enabled us to deliver client websites 15x faster. We saved 55% of our time and increased client satisfaction by 42%.'
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
                Common questions about AI Website Generation Technology
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What is AI Website Generation Technology?',
                  answer: 'AI Website Generation Technology uses advanced artificial intelligence to automatically create professional websites. It generates complete websites with modern design, compelling content, and full functionality in hours instead of weeks.'
                },
                {
                  question: 'How does AI website generation work?',
                  answer: 'AI analyzes your business information, industry, and website goals to generate a complete website. It creates design layouts, generates content, builds navigation, and implements functionality automatically. You review and customize the generated website before launching.'
                },
                {
                  question: 'Can I customize the AI-generated website?',
                  answer: 'Yes, you have full control over the AI-generated website. You can customize design elements, edit content, add custom features, and modify any aspect of the website to match your exact requirements.'
                },
                {
                  question: 'How long does it take to generate a website?',
                  answer: 'AI can generate a complete website in hours instead of weeks. Typically, you can have a fully functional website ready in 24-48 hours, compared to 4-8 weeks for traditional development.'
                },
                {
                  question: 'What kind of websites can AI generate?',
                  answer: 'AI can generate various types of websites including business websites, e-commerce sites, portfolio sites, blog websites, landing pages, and more. The AI adapts to your industry and requirements.'
                },
                {
                  question: 'Is the generated website SEO optimized?',
                  answer: 'Yes, AI-generated websites include built-in SEO optimization with meta tags, structured data, mobile optimization, fast loading speeds, and SEO-friendly URLs. This helps your website rank better in search engines.'
                },
                {
                  question: 'What kind of results can I expect?',
                  answer: 'Most businesses see 10x faster development, 70% cost savings, professional quality designs, and 3x better search rankings. Results vary based on your industry, requirements, and optimization efforts.'
                },
                {
                  question: 'Do you provide hosting and maintenance?',
                  answer: 'Yes, we can provide hosting and maintenance services. We offer various hosting options and ongoing maintenance packages to keep your website updated, secure, and performing optimally.'
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
              Ready to Generate Your AI-Powered Website?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get started with AI Website Generation Technology today. Create professional websites automatically 
              and launch faster than ever before.
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

export default AIWebsiteGeneration;
