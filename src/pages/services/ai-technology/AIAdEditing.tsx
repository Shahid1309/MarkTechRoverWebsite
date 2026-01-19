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
  Scissors,
  Edit3,
  Crop,
  ImageIcon,
  Upload
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const AIAdEditing = () => {
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
    title: 'AI Ad Editing | AI-Powered Ad Enhancement & Optimization | Automated Ad Editing | MarkTechRover',
    description: 'AI Ad Editing - Enhance and optimize your ads automatically using artificial intelligence. Improve ad performance with AI-powered editing, enhancement, and optimization. Best AI ad editing services in Delhi NCR & India.',
    keywords: [
      'AI Ad Editing', 'AI-Powered Ad Enhancement', 'Automated Ad Editing', 'AI Ad Optimization',
      'AI Ad Improvement', 'Smart Ad Editing', 'AI Ad Enhancement', 'AI Ad Refinement',
      'AI Ad Editing Delhi', 'Best AI Ad Editing India', 'AI Ad Services', 'Automated Ad Enhancement',
      'AI Ad Performance', 'Machine Learning Ads', 'AI Ad Optimization', 'Intelligent Ad Editing'
    ],
    url: '/services/ai-technology/ai-ad-editing',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['AI Ad Editing', 'AI Ad Enhancement', 'Automated Ad Editing', 'AI Ad Optimization'],
    image: '/images/ai-ad-editing.webp'
  };

  const features = [
    {
      id: 1,
      title: 'AI-Powered Image Enhancement',
      description: 'Automatically enhance ad images with AI-powered editing, color correction, and optimization',
      icon: <Image className="h-8 w-8" />,
      features: [
        'Automatic image enhancement',
        'Color correction and adjustment',
        'Background removal and replacement',
        'Image resizing and cropping',
        'Quality optimization',
        'Format conversion'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'Smart Copy Editing',
      description: 'AI-powered copy editing to improve ad text, headlines, and descriptions for better performance',
      icon: <Edit3 className="h-8 w-8" />,
      features: [
        'Automatic copy optimization',
        'Headline improvement suggestions',
        'Grammar and spelling correction',
        'Tone and style adjustment',
        'A/B testing variations',
        'Performance-based editing'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 3,
      title: 'Video Ad Editing',
      description: 'Enhance video ads with AI-powered editing, trimming, effects, and optimization',
      icon: <Video className="h-8 w-8" />,
      features: [
        'Automatic video enhancement',
        'Smart trimming and cutting',
        'Effect and filter application',
        'Audio optimization',
        'Thumbnail generation',
        'Format optimization'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 4,
      title: 'Performance-Based Optimization',
      description: 'Automatically optimize ads based on performance data and AI insights',
      icon: <TrendingUp className="h-8 w-8" />,
      features: [
        'Performance data analysis',
        'Automatic optimization suggestions',
        'A/B testing automation',
        'Conversion rate optimization',
        'ROI-based improvements',
        'Predictive performance modeling'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'Multi-Platform Formatting',
      description: 'Automatically format and optimize ads for different platforms and sizes',
      icon: <Layout className="h-8 w-8" />,
      features: [
        'Platform-specific formatting',
        'Automatic size optimization',
        'Aspect ratio adjustment',
        'Platform best practices',
        'Multi-format export',
        'Batch processing'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'Real-Time Collaboration',
      description: 'Collaborate with team members in real-time with AI-powered editing suggestions',
      icon: <Users className="h-8 w-8" />,
      features: [
        'Real-time collaboration tools',
        'AI-powered suggestions',
        'Version control and history',
        'Comment and feedback system',
        'Approval workflows',
        'Team management'
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
      title: 'Upload Your Ads',
      description: 'Upload your existing ads or provide ad assets for AI editing',
      icon: <Upload className="h-6 w-6" />,
      details: [
        'Upload ad images or videos',
        'Provide ad copy and content',
        'Set editing preferences',
        'Define optimization goals'
      ]
    },
    {
      step: '02',
      title: 'AI Analysis & Editing',
      description: 'AI analyzes your ads and applies intelligent editing and enhancements',
      icon: <Brain className="h-6 w-6" />,
      details: [
        'AI analyzes ad performance',
        'Applies enhancement algorithms',
        'Optimizes copy and visuals',
        'Generates improvement suggestions'
      ]
    },
    {
      step: '03',
      title: 'Review & Customize',
      description: 'Review AI-edited ads and customize them to match your preferences',
      icon: <Eye className="h-6 w-6" />,
      details: [
        'Review edited versions',
        'Compare before and after',
        'Customize edits',
        'Apply additional changes'
      ]
    },
    {
      step: '04',
      title: 'Export & Deploy',
      description: 'Export optimized ads and deploy them across your advertising platforms',
      icon: <Rocket className="h-6 w-6" />,
      details: [
        'Export in multiple formats',
        'Deploy to ad platforms',
        'Monitor performance',
        'Continuously optimize'
      ]
    }
  ];

  const benefits = [
    {
      title: '8x Faster Editing',
      description: 'Edit and enhance ads 8x faster with AI-powered automation',
      icon: <Zap className="h-8 w-8" />,
      metric: '8x',
      label: 'Faster Editing'
    },
    {
      title: 'Better Performance',
      description: 'AI-optimized ads perform 2.8x better with improved visuals and copy',
      icon: <TrendingUp className="h-8 w-8" />,
      metric: '2.8x',
      label: 'Better Performance'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce ad editing costs by up to 60% with automated processes',
      icon: <DollarSign className="h-8 w-8" />,
      metric: '60%',
      label: 'Cost Savings'
    },
    {
      title: 'Consistent Quality',
      description: 'Maintain consistent ad quality across all campaigns and platforms',
      icon: <Award className="h-8 w-8" />,
      metric: '100%',
      label: 'Quality Consistency'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹20,000',
      period: 'per month',
      description: 'Perfect for small businesses starting with AI ad editing',
      features: [
        'Up to 50 ads per month',
        'Basic image enhancement',
        'Copy editing',
        'Standard formats',
        'Email support',
        'Basic analytics'
      ],
      highlighted: false,
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '₹55,000',
      period: 'per month',
      description: 'Comprehensive AI ad editing for growing businesses',
      features: [
        'Up to 500 ads per month',
        'Advanced image and video editing',
        'AI copy optimization',
        'All format support',
        'Performance optimization',
        'Priority support',
        'Advanced analytics',
        'A/B testing',
        'Batch processing'
      ],
      highlighted: true,
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-featured AI ad editing for large organizations',
      features: [
        'Unlimited ads',
        'Custom AI models',
        'White-label solutions',
        'Advanced automation',
        'Dedicated account manager',
        '24/7 support',
        'Custom integrations',
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
                <Scissors className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">AI-Powered Ad Editing Technology</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Hire AI Ad Editing Services
                </span>
                  <span className="block bg-gradient-to-r from-purple-200 via-blue-200 to-purple-300 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', position: 'relative', zIndex: 10 }}>
                    Technology
                  </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Enhance and optimize your ads automatically using artificial intelligence. Improve ad performance 
                with AI-powered editing, enhancement, and optimization across all platforms.
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
                  { value: '8x', label: 'Faster Editing' },
                  { value: '2.8x', label: 'Better Performance' },
                  { value: '60%', label: 'Cost Savings' },
                  { value: '100%', label: 'Quality Consistency' }
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
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">₹250+</div>
                <div className="text-gray-300">Crores Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">160+</div>
                <div className="text-gray-300">Clients Using AI Ad Editing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">93%</div>
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
                AI-Powered Ad Editing Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                AI Ad Editing Technology uses advanced artificial intelligence to automatically enhance and optimize 
                your ads. Improve ad performance with AI-powered editing, enhancement, and optimization across images, 
                videos, and copy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI-Powered Enhancement</h3>
                <p className="text-gray-300 leading-relaxed">
                  Advanced AI algorithms automatically enhance ad images, videos, and copy for better performance.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">8x Faster</h3>
                <p className="text-gray-300 leading-relaxed">
                  Edit and enhance ads 8x faster with AI-powered automation, saving time and resources.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Better Performance</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI-optimized ads perform 2.8x better with improved visuals, copy, and targeting.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-2xl border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Use AI Ad Editing?</h3>
                  <ul className="space-y-3">
                    {[
                      'Edit and enhance ads 8x faster than manual editing',
                      '2.8x better ad performance with AI optimization',
                      'Reduce ad editing costs by up to 60%',
                      'Maintain consistent quality across all ads',
                      'Automated optimization based on performance data',
                      'Support for images, videos, and copy editing'
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
                        <div className="text-3xl font-bold text-purple-300 mb-1">8x</div>
                        <div className="text-xs text-gray-400">Faster Editing</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">2.8x</div>
                        <div className="text-xs text-gray-400">Better Performance</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">60%</div>
                        <div className="text-xs text-gray-400">Cost Savings</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">100%</div>
                        <div className="text-xs text-gray-400">Quality Consistency</div>
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
                Complete AI Ad Editing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful features designed to automate and optimize your ad editing process
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
                How AI Ad Editing Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Simple 4-step process to enhance and optimize your ads
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
                Why businesses choose AI Ad Editing Technology
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
                Real results from businesses using AI Ad Editing Technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  company: 'E-commerce Brand',
                  industry: 'Retail',
                  challenge: 'Slow ad editing process and inconsistent quality',
                  solution: 'Implemented AI ad editing to automate enhancement process',
                  results: [
                    { metric: '10x', label: 'Faster Editing' },
                    { metric: '3.2x', label: 'Performance' },
                    { metric: '58%', label: 'Cost Reduction' }
                  ],
                  testimonial: 'AI ad editing transformed our workflow. We now edit ads 10x faster with 3.2x better performance and 58% cost reduction.'
                },
                {
                  company: 'Marketing Agency',
                  industry: 'Agency',
                  challenge: 'High editing costs and time constraints',
                  solution: 'Deployed AI ad editing to streamline client ad production',
                  results: [
                    { metric: '8x', label: 'Faster Processing' },
                    { metric: '2.8x', label: 'Performance' },
                    { metric: '62%', label: 'Time Saved' }
                  ],
                  testimonial: 'AI ad editing enabled us to process client ads 8x faster. We achieved 2.8x better performance and saved 62% of our time.'
                },
                {
                  company: 'SaaS Startup',
                  industry: 'Technology',
                  challenge: 'Limited resources for ad optimization',
                  solution: 'Used AI ad editing to optimize ads automatically',
                  results: [
                    { metric: '7x', label: 'Faster Editing' },
                    { metric: '2.5x', label: 'Conversion Rate' },
                    { metric: '55%', label: 'Cost Savings' }
                  ],
                  testimonial: 'AI ad editing helped us optimize ads 7x faster. We saw 2.5x higher conversion rates and 55% cost savings.'
                },
                {
                  company: 'B2B Enterprise',
                  industry: 'Enterprise',
                  challenge: 'Inconsistent ad quality across campaigns',
                  solution: 'Implemented AI ad editing for consistent quality',
                  results: [
                    { metric: '9x', label: 'Faster Editing' },
                    { metric: '3.1x', label: 'Performance' },
                    { metric: '60%', label: 'Quality Improvement' }
                  ],
                  testimonial: 'AI ad editing ensured consistent quality across all our campaigns. We edited ads 9x faster with 3.1x better performance and 60% quality improvement.'
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
                Common questions about AI Ad Editing Technology
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What is AI Ad Editing Technology?',
                  answer: 'AI Ad Editing Technology uses advanced artificial intelligence to automatically enhance and optimize your ads. It improves ad performance with AI-powered editing, enhancement, and optimization across images, videos, and copy.'
                },
                {
                  question: 'How does AI ad editing work?',
                  answer: 'AI analyzes your ads and applies intelligent editing algorithms to enhance images, optimize copy, and improve overall ad performance. It uses machine learning to learn from successful ads and applies those insights to your campaigns.'
                },
                {
                  question: 'What types of ads can AI edit?',
                  answer: 'AI can edit various types of ads including image ads, video ads, display ads, social media ads, and more. It supports all major ad formats and platforms including Google Ads, Facebook, Instagram, LinkedIn, and others.'
                },
                {
                  question: 'Can I customize AI edits?',
                  answer: 'Yes, you have full control over AI edits. You can review all changes, customize edits, approve or reject modifications, and apply additional manual edits as needed.'
                },
                {
                  question: 'How accurate are AI edits?',
                  answer: 'AI edits are highly accurate and improve ad performance by an average of 2.8x. The AI learns from millions of successful ads and continuously optimizes based on performance data.'
                },
                {
                  question: 'How long does AI editing take?',
                  answer: 'AI editing is very fast, typically processing ads in seconds to minutes depending on complexity. Batch processing allows you to edit multiple ads simultaneously, making it 8x faster than manual editing.'
                },
                {
                  question: 'What kind of results can I expect?',
                  answer: 'Most businesses see 8x faster editing, 2.8x better ad performance, 60% cost reduction, and 100% quality consistency. Results vary based on your industry, ad types, and optimization efforts.'
                },
                {
                  question: 'Do you provide ongoing support?',
                  answer: 'Yes, we provide complete support including setup, training, optimization, and ongoing assistance. Our team helps you get the most out of AI ad editing technology.'
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
              Ready to Enhance Your Ads with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get started with AI Ad Editing Technology today. Enhance and optimize your ads automatically 
              and improve performance.
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

export default AIAdEditing;
