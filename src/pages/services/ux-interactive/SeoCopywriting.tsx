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
  Sparkle,
  Wand2,
  Image as ImageIcon,
  Video,
  Music,
  Camera
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const SeoCopywriting = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Eye className="h-4 w-4" /> },
    { id: 'features', label: 'Features', icon: <Sparkle className="h-4 w-4" /> },
    { id: 'process', label: 'Our Process', icon: <Rocket className="h-4 w-4" /> },{ id: 'portfolio', label: 'Portfolio', icon: <Trophy className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show nav after scrolling past 200px
      const shouldShow = scrollPosition > 200;
      setIsNavSticky(shouldShow);

      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 200;
          return rect.top <= offset && rect.bottom >= offset;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Initial check on mount
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

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
    title: 'SEO Copywriting Services in Delhi | Professional SEO Content Writing | MarkTechRover',
    description: 'Expert SEO copywriting services in Delhi NCR. Professional SEO content writing that ranks and converts. Best SEO copywriting company in India.',
    keywords: [
      'SEO Copywriting Services Delhi',
      'SEO Content Writing NCR',
      'Best SEO Copywriting Company',
      'Professional SEO Writing Services',
      'SEO Content Writing India',
      'SEO Copywriting Experts Delhi',
      'Content Writing for SEO',
      'SEO Optimized Content',
      'SEO Content Strategy',
      'SEO Writing Services'
    ],
    url: '/services/ux-interactive/seo-copywriting',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'SEO Copywriting Services',
    tags: ['SEO Copywriting', 'Content Writing', 'SEO Content', 'Content Marketing'],
    image: '/images/seo-copywriting-services.webp'
  };

  const features = [
    {
      id: 1,
      title: 'Keyword-Optimized Content',
      description: 'Strategic keyword integration that ranks without compromising readability',
      icon: <Search className="h-8 w-8" />,
      color: 'from-purple-500 to-indigo-500',
      benefits: ['Keyword research', 'Natural integration', 'SEO-friendly structure', 'Search intent matching']
    },
    {
      id: 2,
      title: 'Conversion-Focused Writing',
      description: 'Content that not only ranks but also drives action and conversions',
      icon: <Target className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-500',
      benefits: ['CTA optimization', 'Persuasive copy', 'User journey mapping', 'Conversion tracking']
    },
    {
      id: 3,
      title: 'Content Strategy & Planning',
      description: 'Comprehensive content strategies aligned with your business goals',
      icon: <Brain className="h-8 w-8" />,
      color: 'from-purple-600 to-indigo-600',
      benefits: ['Content calendar', 'Topic research', 'Competitor analysis', 'Content gap analysis']
    },
    {
      id: 4,
      title: 'On-Page SEO Optimization',
      description: 'Complete on-page SEO including meta tags, headers, and structure',
      icon: <FileText className="h-8 w-8" />,
      color: 'from-indigo-600 to-purple-600',
      benefits: ['Meta optimization', 'Header structure', 'Internal linking', 'Schema markup']
    },
    {
      id: 5,
      title: 'Content Performance Tracking',
      description: 'Analytics and reporting to measure content performance and ROI',
      icon: <BarChart3 className="h-8 w-8" />,
      color: 'from-purple-500 to-fuchsia-500',
      benefits: ['Performance metrics', 'Ranking tracking', 'Traffic analysis', 'ROI reporting']
    },
    {
      id: 6,
      title: 'Ongoing Content Support',
      description: 'Continuous content updates and optimization for sustained results',
      icon: <RefreshCw className="h-8 w-8" />,
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Regular updates', 'Content refresh', 'Performance optimization', 'Strategy refinement']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Research & Strategy',
      description: 'Comprehensive keyword and competitor research to create winning content strategy',
      detailedDescription: 'We conduct in-depth keyword research, analyze competitor content, and understand your target audience to create a strategic content plan. This includes identifying content gaps, keyword opportunities, and creating a content calendar aligned with your business goals.',
      icon: <Search className="h-6 w-6" />,
      deliverables: ['Keyword research', 'Competitor analysis', 'Content strategy', 'Content calendar'],
      duration: '1 week',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20'
    },
    {
      step: '02',
      title: 'Content Creation',
      description: 'High-quality, SEO-optimized content creation that ranks and converts',
      detailedDescription: 'Our expert copywriters create compelling, SEO-optimized content that balances search engine requirements with user engagement. We focus on creating valuable, informative content that answers user queries while naturally incorporating target keywords.',
      icon: <PenTool className="h-6 w-6" />,
      deliverables: ['SEO-optimized content', 'Meta tags & descriptions', 'Header optimization', 'Internal linking'],
      duration: '2-3 weeks',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-500/20 to-indigo-600/20'
    },
    {
      step: '03',
      title: 'Optimization & Review',
      description: 'Thorough optimization and quality review to ensure maximum impact',
      detailedDescription: 'We optimize all content for search engines and user experience. This includes on-page SEO optimization, readability improvements, conversion optimization, and quality assurance to ensure every piece of content meets our high standards.',
      icon: <Settings className="h-6 w-6" />,
      deliverables: ['SEO optimization', 'Quality review', 'Conversion optimization', 'Final edits'],
      duration: '1 week',
      color: 'from-purple-600 to-indigo-600',
      bgColor: 'from-purple-600/20 to-indigo-600/20'
    },
    {
      step: '04',
      title: 'Publish & Monitor',
      description: 'Content publication and continuous monitoring for performance optimization',
      detailedDescription: 'We handle content publication and set up tracking to monitor performance. Post-publication, we continuously monitor rankings, traffic, and engagement metrics, making data-driven optimizations to improve results over time.',
      icon: <Rocket className="h-6 w-6" />,
      deliverables: ['Content publication', 'Performance tracking', 'Analytics setup', 'Ongoing optimization'],
      duration: 'Ongoing',
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'from-indigo-600/20 to-purple-600/20'
    }
  ];

  

  return (
    <PageSEO config={seoConfig}>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(147,51,234,0.05)_50%,transparent_70%)] bg-[length:100px_100px] animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
                <PenTool className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Professional SEO Copywriting Services</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  Hire SEO Copywriting Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Expert SEO copywriting services that combine search optimization with compelling storytelling. 
                Best SEO copywriting company in Delhi NCR delivering content that ranks and converts.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
                >
                  <Target className="h-5 w-5 mr-2" />
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <Play className="h-5 w-5 mr-2" />
                  View Portfolio
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { value: '1000+', label: 'Articles Written' },
                  { value: '95%', label: 'Client Satisfaction' },
                  { value: '24/7', label: 'Support Available' },
                  { value: '4.9/5', label: 'Average Rating' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Floating Sticky Sub Menu */}
        <div className={`fixed left-1/2 transform -translate-x-1/2 z-[60] transition-all duration-500 ${
          isNavSticky 
            ? 'top-24 opacity-100 scale-100 pointer-events-auto' 
            : 'top-0 opacity-0 scale-95 pointer-events-none'
        }`}>
          {/* Floating Background Element */}
          <div className="relative">
            {/* Animated Background Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 rounded-full"></div>
            
            {/* Main Navigation Container */}
            <div className="relative bg-black/20 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-2xl shadow-purple-500/20">
              <nav className="flex items-center space-x-1 px-6 py-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`${
                      activeSection === item.id
                        ? 'text-purple-200 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border border-purple-400/50 shadow-lg shadow-purple-500/25' 
                        : 'text-gray-300 hover:text-purple-200 hover:bg-gradient-to-r from-purple-500/20 to-indigo-500/20 hover:border-purple-300/30'
                    } px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg`}
                  >
                    {item.icon}
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-bounce"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Overview Section */}
        <section id="overview" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">SEO Copywriting</span> Services?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We combine SEO expertise with compelling storytelling to create content that ranks and converts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: 'Results-Driven',
                  description: 'Every piece of content is optimized for rankings and conversions'
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: 'User-Focused',
                  description: 'Content that answers user queries while ranking for target keywords'
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: 'Fast Turnaround',
                  description: 'Quick content delivery without compromising quality'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Comprehensive <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Content Features</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Everything you need for successful SEO content marketing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 ${
                    hoveredFeature === feature.id ? 'border-purple-500/50 scale-105 shadow-2xl shadow-purple-500/20' : 'hover:border-gray-700'
                  }`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 transform transition-transform duration-300 ${hoveredFeature === feature.id ? 'scale-110 rotate-3' : ''}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Content Process</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A proven methodology that ensures your content ranks and converts
              </p>
            </div>

            {/* Interactive Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">Progress through our process</span>
                <span className="text-sm text-purple-300 font-semibold">Step {activeProcessStep + 1} of {processSteps.length}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((activeProcessStep + 1) / processSteps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Interactive Steps Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-500 transform ${
                    activeProcessStep === index 
                      ? 'scale-105' 
                      : hoveredStep === index 
                      ? 'scale-102' 
                      : 'scale-100'
                  }`}
                  onClick={() => setActiveProcessStep(index)}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div 
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 relative ${
                      activeProcessStep === index
                        ? `bg-gradient-to-br ${step.bgColor} border-purple-400 shadow-lg shadow-purple-500/25`
                        : 'bg-gray-800/50 border-gray-600 hover:border-purple-500/50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      activeProcessStep === index
                        ? `bg-gradient-to-br ${step.color} shadow-lg`
                        : 'bg-gray-700'
                    }`}>
                      <div className={`transition-all duration-300 ${
                        activeProcessStep === index ? 'text-white' : 'text-gray-400'
                      }`}>
                        {step.icon}
                      </div>
                    </div>
                    <h3 className={`text-sm font-bold mb-2 transition-all duration-300 ${
                      activeProcessStep === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {step.title}
                    </h3>
                    <div className={`text-xs transition-all duration-300 ${
                      activeProcessStep === index ? 'text-purple-200' : 'text-gray-500'
                    }`}>
                      {step.duration}
                    </div>
                    
                    {/* Active indicator */}
                    {activeProcessStep === index && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full px-2">
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div 
                        className={`h-1 rounded-full transition-all duration-500 ${
                          index <= activeProcessStep 
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-500' 
                            : 'bg-gray-600'
                        }`}
                        style={{ 
                          width: index <= activeProcessStep ? '100%' : '0%',
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Step Content */}
            <div className="bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-gray-800/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-start space-x-6 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${processSteps[activeProcessStep].color} rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 flex-shrink-0`}>
                  <div className="text-white">
                    {processSteps[activeProcessStep].icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {processSteps[activeProcessStep].step}: {processSteps[activeProcessStep].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">
                    {processSteps[activeProcessStep].detailedDescription}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Duration: {processSteps[activeProcessStep].duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deliverables Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Key Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {processSteps[activeProcessStep].deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-2xl p-6 border border-purple-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 text-purple-300 mr-2" />
                    Expected Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Ranking Improvement</span>
                      <span className="text-green-400 font-semibold">Top 10</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Traffic Growth</span>
                      <span className="text-indigo-300 font-semibold">+200%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Conversion Rate</span>
                      <span className="text-purple-300 font-semibold">+150%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-700/50">
                <button
                  onClick={() => setActiveProcessStep(Math.max(0, activeProcessStep - 1))}
                  disabled={activeProcessStep === 0}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeProcessStep === 0
                      ? 'text-gray-500 cursor-not-allowed'
                      : 'text-purple-300 hover:text-white hover:bg-purple-500/20'
                  }`}
                >
                  <ChevronDown className="h-4 w-4 rotate-90" />
                  <span>Previous Step</span>
                </button>
                
                <div className="flex space-x-2">
                  {processSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProcessStep(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeProcessStep === index
                          ? 'bg-purple-500'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setActiveProcessStep(Math.min(processSteps.length - 1, activeProcessStep + 1))}
                  disabled={activeProcessStep === processSteps.length - 1}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeProcessStep === processSteps.length - 1
                      ? 'text-gray-500 cursor-not-allowed'
                      : 'text-purple-300 hover:text-white hover:bg-purple-500/20'
                  }`}
                >
                  <span>Next Step</span>
                  <ChevronDown className="h-4 w-4 -rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </section>

        

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real results from real clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'E-commerce Content',
                  description: 'SEO content strategy that increased organic traffic by 400%',
                  metrics: ['400% Traffic Increase', '250% Sales Growth', '6 Months'],
                  gradient: 'from-purple-500 to-indigo-500'
                },
                {
                  title: 'B2B Content Marketing',
                  description: 'Professional content that generated 300% more qualified leads',
                  metrics: ['300% Lead Increase', '200% Engagement', '8 Months'],
                  gradient: 'from-indigo-500 to-purple-500'
                },
                {
                  title: 'Blog Content Strategy',
                  description: 'Comprehensive blog strategy driving 500% traffic growth',
                  metrics: ['500% Traffic Growth', '350% Rankings', '12 Months'],
                  gradient: 'from-purple-600 to-indigo-600'
                },
                {
                  title: 'SaaS Content',
                  description: 'Technical content that increased user signups by 450%',
                  metrics: ['450% Signups', '280% Conversion', '10 Months'],
                  gradient: 'from-indigo-600 to-purple-600'
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <Trophy className="h-16 w-16 text-white opacity-50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, metricIndex) => (
                        <span
                          key={metricIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-200"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-400">
                Everything you need to know about our SEO copywriting services
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'How long does it take to see results from SEO copywriting?',
                  answer: 'SEO copywriting results typically start appearing within 2-4 months. Initial ranking improvements can be seen in 4-8 weeks, while significant traffic and conversion increases usually occur within 3-6 months of consistent content publication.'
                },
                {
                  question: 'What is the typical cost for SEO copywriting services?',
                  answer: 'SEO copywriting costs typically range from ₹25,000 to ₹1,00,000 per month depending on content volume, complexity, and scope. We provide detailed quotes based on your specific requirements and content goals.'
                },
                {
                  question: 'Do you provide content for all industries?',
                  answer: 'Yes, we create SEO-optimized content for all industries including technology, healthcare, finance, e-commerce, B2B, SaaS, and more. Our team has expertise across various sectors and can adapt to your industry requirements.'
                },
                {
                  question: 'Do you work with businesses outside Delhi NCR?',
                  answer: 'Yes, we work with businesses across India and internationally. Our SEO copywriting services are not limited by geography and can be delivered remotely with excellent results.'
                },
                {
                  question: 'What SEO tools do you use for content optimization?',
                  answer: 'We use industry-leading SEO tools including SEMrush, Ahrefs, Google Keyword Planner, and other advanced tools for keyword research, competitor analysis, and content optimization.'
                },
                {
                  question: 'Do you provide content in multiple languages?',
                  answer: 'Yes, we provide SEO copywriting services in multiple languages including English, Hindi, and other regional languages. We can create multilingual content strategies to target diverse audiences.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Rank Higher with Quality Content?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's create SEO-optimized content that not only ranks but also drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Free Consultation
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageSEO>
  );
};

export default SeoCopywriting;
