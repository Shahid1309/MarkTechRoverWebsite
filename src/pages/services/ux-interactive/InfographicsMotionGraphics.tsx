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
  Eye,
  Wand2,
  Image as ImageIcon,
  Video,
  Music,
  Camera
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const InfographicsMotionGraphics = () => {
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
    title: 'Infographics & Motion Graphics Services in Delhi | Visual Content Design | MarkTechRover',
    description: 'Expert infographics and motion graphics services in Delhi NCR. Professional visual content design that engages and educates. Best infographics design company in India.',
    keywords: [
      'Infographics Design Services Delhi',
      'Motion Graphics Services NCR',
      'Best Infographics Company',
      'Professional Motion Graphics',
      'Infographics Design India',
      'Visual Content Design Delhi',
      'Animated Infographics',
      'Motion Graphics Design',
      'Data Visualization',
      'Infographics Services'
    ],
    url: '/services/ux-interactive/infographics-motion-graphics',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'Infographics & Motion Graphics Services',
    tags: ['Infographics', 'Motion Graphics', 'Visual Content', 'Data Visualization'],
    image: '/images/infographics-motion-graphics-services.webp'
  };

  const features = [
    {
      id: 1,
      title: 'Static Infographics Design',
      description: 'Visually compelling infographics that simplify complex information',
      icon: <ImageIcon className="h-8 w-8" />,
      color: 'from-purple-500 to-indigo-500',
      benefits: ['Data visualization', 'Information design', 'Brand consistency', 'Multiple formats']
    },
    {
      id: 2,
      title: 'Animated Motion Graphics',
      description: 'Engaging animated graphics that bring your content to life',
      icon: <Video className="h-8 w-8" />,
      color: 'from-cyan-500 to-blue-500',
      benefits: ['2D/3D animation', 'Video graphics', 'Explainer videos', 'Social animations']
    },
    {
      id: 3,
      title: 'Interactive Infographics',
      description: 'Interactive visualizations that engage and educate your audience',
      icon: <MousePointer className="h-8 w-8" />,
      color: 'from-purple-600 to-indigo-600',
      benefits: ['Interactive elements', 'Clickable data', 'Hover effects', 'User engagement']
    },
    {
      id: 4,
      title: 'Data Visualization',
      description: 'Complex data transformed into clear, understandable visuals',
      icon: <BarChart3 className="h-8 w-8" />,
      color: 'from-indigo-600 to-purple-600',
      benefits: ['Charts & graphs', 'Data storytelling', 'Statistical visuals', 'Trend analysis']
    },
    {
      id: 5,
      title: 'Brand-Aligned Design',
      description: 'Visual content that perfectly matches your brand identity',
      icon: <Palette className="h-8 w-8" />,
      color: 'from-purple-500 to-fuchsia-500',
      benefits: ['Brand colors', 'Typography', 'Style consistency', 'Brand guidelines']
    },
    {
      id: 6,
      title: 'Multi-Format Delivery',
      description: 'Content delivered in all formats for maximum reach',
      icon: <Layers className="h-8 w-8" />,
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Multiple formats', 'Platform optimization', 'Responsive design', 'Export options']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Research & Planning',
      description: 'Comprehensive research and strategic planning for visual content',
      detailedDescription: 'We conduct in-depth research to understand your data, message, target audience, and objectives. This includes data analysis, content planning, style research, and creating a strategic visual content plan that effectively communicates your message.',
      icon: <Search className="h-6 w-6" />,
      deliverables: ['Data analysis', 'Content strategy', 'Style research', 'Visual plan'],
      duration: '1 week',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20'
    },
    {
      step: '02',
      title: 'Design & Creation',
      description: 'Professional design and creation of infographics and motion graphics',
      detailedDescription: 'Our design team creates stunning visual content including static infographics, animated motion graphics, and interactive visualizations. We focus on clarity, engagement, and brand consistency to ensure your content effectively communicates your message.',
      icon: <PenTool className="h-6 w-6" />,
      deliverables: ['Visual designs', 'Infographics', 'Motion graphics', 'Brand integration'],
      duration: '2-3 weeks',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-500/20 to-cyan-600/20'
    },
    {
      step: '03',
      title: 'Animation & Enhancement',
      description: 'Animation and enhancement to bring visuals to life',
      detailedDescription: 'We add animations, transitions, and interactive elements to enhance engagement. This includes motion graphics animation, interactive features, transitions, and effects that make your content more engaging and memorable.',
      icon: <Wand2 className="h-6 w-6" />,
      deliverables: ['Animations', 'Interactions', 'Transitions', 'Effects'],
      duration: '1-2 weeks',
      color: 'from-purple-600 to-indigo-600',
      bgColor: 'from-purple-600/20 to-indigo-600/20'
    },
    {
      step: '04',
      title: 'Delivery & Optimization',
      description: 'Final delivery and optimization for all platforms',
      detailedDescription: 'We deliver your visual content in all required formats optimized for different platforms and use cases. We also provide optimization recommendations and ensure your content is ready for distribution across all channels.',
      icon: <Rocket className="h-6 w-6" />,
      deliverables: ['Multi-format delivery', 'Platform optimization', 'Quality assurance', 'Distribution support'],
      duration: '1 week',
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
                <ImageIcon className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Professional Visual Content Design Services</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  Hire Infographic Design Agency
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Professional infographics and motion graphics services that transform complex information into engaging visual content. 
                Best visual content design company in Delhi NCR delivering stunning visuals.
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
                  { value: '1500+', label: 'Visuals Created' },
                  { value: '97%', label: 'Client Satisfaction' },
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

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Overview Section */}
          <section id="overview" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Infographics & Motion Graphics</span> Services?
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  We turn complex ideas into beautiful, clear visuals that engage and educate your audience.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: <TrendingUp className="h-6 w-6" />,
                    title: 'Impactful Visuals',
                    description: 'Designs built to simplify complexity and drive understanding'
                  },
                  {
                    icon: <Users className="h-6 w-6" />,
                    title: 'Audience-Ready',
                    description: 'Visual stories tailored to your viewers across platforms'
                  },
                  {
                    icon: <Zap className="h-6 w-6" />,
                    title: 'Multi-Format',
                    description: 'Static, animated, and interactive visuals for every channel'
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
                  Comprehensive <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Visual Content Features</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Everything you need for engaging infographics and motion graphics
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
                  Our <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Visual Content Process</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  A proven flow that keeps your visuals clear, on-brand, and on time
                </p>
              </div>

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
                      
                      {activeProcessStep === index && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    
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
                        <span className="text-gray-300">Clarity & Understanding</span>
                        <span className="text-indigo-300 font-semibold">High</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Engagement Rate</span>
                        <span className="text-purple-300 font-semibold">+220%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Shareability</span>
                        <span className="text-purple-300 font-semibold">+180%</span>
                      </div>
                    </div>
                  </div>
                </div>

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
                  Our <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Visual Success Stories</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Real results from our infographics and motion graphics work
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Data-Driven Report',
                    description: 'Interactive infographics that boosted engagement by 240%',
                    metrics: ['240% Engagement', '180% Share Rate', '6 Weeks'],
                    gradient: 'from-purple-500 to-indigo-500'
                  },
                  {
                    title: 'Product Explainer',
                    description: 'Motion graphics series increasing demo signups by 200%',
                    metrics: ['200% Signups', '170% Completion', '8 Weeks'],
                    gradient: 'from-indigo-500 to-purple-500'
                  },
                  {
                    title: 'Health Awareness',
                    description: 'Public awareness campaign with 320% higher retention',
                    metrics: ['320% Retention', '250% Shares', '10 Weeks'],
                    gradient: 'from-purple-600 to-indigo-600'
                  },
                  {
                    title: 'SaaS Onboarding',
                    description: 'Animated onboarding that cut drop-off by 45%',
                    metrics: ['45% Drop-off Cut', '210% Engagement', '12 Weeks'],
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
                  Everything you need to know about our visual content services
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    question: 'How long does an infographic or motion graphic project take?',
                    answer: 'Most projects take 2-4 weeks depending on complexity, formats, and feedback cycles. We provide clear timelines during planning.'
                  },
                  {
                    question: 'What formats do you deliver?',
                    answer: 'We deliver in all needed formats: PNG, SVG, MP4, GIF, and platform-optimized exports for web, social, and presentations.'
                  },
                  {
                    question: 'Do you handle data visualization and accuracy?',
                    answer: 'Yes. We verify data, craft clear visual hierarchies, and ensure accuracy with thoughtful labeling and annotations.'
                  },
                  {
                    question: 'Can you align with our brand guidelines?',
                    answer: 'Absolutely. We match your brand colors, typography, and style direction so every asset feels on-brand.'
                  },
                  {
                    question: 'Do you provide animated explainers?',
                    answer: 'Yes, we create motion graphics explainers, product walkthroughs, and animated social content tailored to your goals.'
                  },
                  {
                    question: 'Do you offer ongoing visual content support?',
                    answer: 'We can support on a project or retainer basis—covering new visuals, refreshes, and continuous optimization.'
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
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Create Your Dream Website?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Best infographics-motion-graphics company in Delhi NCR offering comprehensive infographics-motion-graphics services. 
              Get started with professional infographics-motion-graphics services India today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-purple-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get infographics-motion-graphics Quote
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-purple-700 text-white font-semibold rounded-xl hover:bg-purple-600 transition-all duration-300">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      </PageSEO>
  );
};

export default InfographicsMotionGraphics; 