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

const WebsiteDesign = () => {
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
    title: 'Website Design Services in Delhi | Best Website Design Company NCR',
    description: 'Leading website design services in Delhi NCR. Best website design company in Delhi offering custom website design. Professional website design services India with modern designs.',
    keywords: [
      'Website Design Services Delhi',
      'Best website design company in Delhi',
      'Website design agency NCR',
      'Best website design services in India',
      'Professional website design services India',
      'Website design experts in Delhi NCR',
      'Website design company India',
      'Custom website design Delhi',
      'Responsive website design NCR',
      'Modern website design Delhi'
    ],
    url: '/services/ux-interactive/website-design',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'Ritik Kumar Poddar',
    section: 'Website Design Services',
    tags: ['Website Design', 'Web Development', 'UI/UX Design', 'Responsive Design'],
    image: '/images/website-design-services.webp'
  };

  const features = [
    {
      id: 1,
      title: 'Custom UI/UX Design',
      description: 'Bespoke designs tailored to your brand identity and user needs',
      icon: <Palette className="h-8 w-8" />,
      color: 'from-pink-500 to-rose-500',
      benefits: ['User-centered design', 'Brand consistency', 'Intuitive navigation', 'Accessibility compliance']
    },
    {
      id: 2,
      title: 'Responsive Development',
      description: 'Mobile-first approach ensuring perfect experience on all devices',
      icon: <Smartphone className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Mobile optimization', 'Tablet compatibility', 'Desktop experience', 'Cross-browser support']
    },
    {
      id: 3,
      title: 'Performance Optimization',
      description: 'Lightning-fast loading times and optimized user experience',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-yellow-500 to-orange-500',
      benefits: ['Fast load times', 'SEO optimization', 'Core Web Vitals', 'CDN integration']
    },
    {
      id: 4,
      title: 'E-commerce Solutions',
      description: 'Complete online store with secure payment and inventory management',
      icon: <ShoppingCart className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-500',
      benefits: ['Payment gateways', 'Product management', 'Order tracking', 'Analytics integration']
    },
    {
      id: 5,
      title: 'CMS Integration',
      description: 'Easy-to-use content management for seamless updates',
      icon: <FileText className="h-8 w-8" />,
      color: 'from-purple-500 to-violet-500',
      benefits: ['WordPress/Headless CMS', 'Content editing', 'Media library', 'User permissions']
    },
    {
      id: 6,
      title: 'Ongoing Support',
      description: '24/7 maintenance and support for your website',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-500',
      benefits: ['Security updates', 'Performance monitoring', 'Content updates', 'Technical support']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business, target audience, and goals to create a strategic roadmap',
      detailedDescription: 'We conduct comprehensive research to understand your business objectives, target market, and competitive landscape. This phase includes stakeholder interviews, user research, and technical analysis to create a strategic foundation.',
      icon: <Search className="h-6 w-6" />,
      deliverables: ['Brand analysis', 'Competitor research', 'User personas', 'Sitemap creation'],
      duration: '1-2 weeks',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/20 to-blue-600/20'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creative design process with interactive prototypes for your approval',
      detailedDescription: 'Our design team creates stunning visual designs and interactive prototypes. We focus on user experience, brand consistency, and conversion optimization. Multiple design iterations ensure we capture your vision perfectly.',
      icon: <PenTool className="h-6 w-6" />,
      deliverables: ['Wireframes', 'Visual designs', 'Interactive prototypes', 'Design system'],
      duration: '2-3 weeks',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Professional development with rigorous testing across devices and browsers',
      detailedDescription: 'Our developers bring designs to life using modern technologies. We ensure cross-browser compatibility, mobile responsiveness, and optimal performance. Rigorous testing guarantees a flawless user experience.',
      icon: <Code className="h-6 w-6" />,
      deliverables: ['Frontend development', 'Backend integration', 'Quality assurance', 'Performance testing'],
      duration: '3-4 weeks',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/20 to-green-600/20'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'Smooth launch with ongoing optimization and support',
      detailedDescription: 'We handle seamless deployment and ensure everything works perfectly. Post-launch, we monitor performance, optimize based on analytics, and provide training. Ongoing support keeps your website running smoothly.',
      icon: <Rocket className="h-6 w-6" />,
      deliverables: ['Deployment', 'SEO setup', 'Analytics integration', 'Training & documentation'],
      duration: '1 week + ongoing',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/20 to-orange-600/20'
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(147,51,234,0.05)_50%,transparent_70%)] bg-[length:100px_100px] animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
                <Sparkle className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Premium Website Design Services</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Hire Website Design Agency India
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create stunning, high-performing websites that convert. Combine with our <Link to="/services/seo-lead-generation/seo-services" className="text-purple-300 hover:text-purple-200 underline">SEO optimization services</Link> for maximum visibility and results.
              </p>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your online presence with stunning, user-friendly websites designed to drive results. 
                Best website design company in Delhi NCR delivering modern, responsive designs.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
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
                  { value: '500+', label: 'Websites Designed' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '24/7', label: 'Support Available' },
                  { value: '4.9/5', label: 'Average Rating' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
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

        {/* Floating Sticky Sub Menu */}
        <div className={`fixed left-1/2 transform -translate-x-1/2 z-[60] transition-all duration-500 ${
          isNavSticky 
            ? 'top-24 opacity-100 scale-100 pointer-events-auto' 
            : 'top-0 opacity-0 scale-95 pointer-events-none'
        }`}>
          {/* Floating Background Element */}
          <div className="relative">
            {/* Animated Background Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
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
                        ? 'text-purple-300 bg-gradient-to-r from-purple-500/30 to-blue-500/30 border border-purple-400/50 shadow-lg shadow-purple-500/25' 
                        : 'text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:border-purple-300/30'
                    } px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg`}
                  >
                    {item.icon}
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Overview Section */}
        <section id="overview" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Website Design</span> Services?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We combine creativity with strategy to deliver websites that not only look stunning but also drive real business results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: 'Results-Driven',
                  description: 'Every design decision is backed by data and focused on conversion optimization'
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: 'User-Focused',
                  description: 'We prioritize user experience to create intuitive, engaging interfaces'
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: 'Fast & Reliable',
                  description: 'Lightning-fast websites with 99.9% uptime guarantee'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
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
                Comprehensive <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Design Features</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Everything you need for a successful online presence
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
                Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Design Process</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A proven methodology that ensures your website exceeds expectations
              </p>
            </div>

            {/* Interactive Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">Progress through our process</span>
                <span className="text-sm text-purple-400 font-semibold">Step {activeProcessStep + 1} of {processSteps.length}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
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
                      activeProcessStep === index ? 'text-purple-300' : 'text-gray-500'
                    }`}>
                      {step.duration}
                      </div>
                    
                    {/* Active indicator */}
                    {activeProcessStep === index && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
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
                            ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
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
                
                <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-6 border border-purple-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 text-purple-400 mr-2" />
                    Expected Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Design Quality</span>
                      <span className="text-green-400 font-semibold">Premium</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">User Satisfaction</span>
                      <span className="text-blue-400 font-semibold">95%+</span>
                </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Performance Score</span>
                      <span className="text-purple-400 font-semibold">90+</span>
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
                      : 'text-purple-400 hover:text-white hover:bg-purple-500/20'
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
                      : 'text-purple-400 hover:text-white hover:bg-purple-500/20'
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
                Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real results from real clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'E-commerce Platform',
                  description: 'Modern online store with seamless shopping experience',
                  metrics: ['300% Sales Increase', '450% Traffic Growth', '6 Months'],
                  gradient: 'from-pink-500 to-rose-500'
                },
                {
                  title: 'Corporate Website',
                  description: 'Professional corporate presence with lead generation focus',
                  metrics: ['500% Lead Increase', '250% Engagement', '8 Months'],
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Restaurant Website',
                  description: 'Beautiful restaurant site driving online orders',
                  metrics: ['400% Online Orders', '300% Brand Awareness', '4 Months'],
                  gradient: 'from-yellow-500 to-orange-500'
                },
                {
                  title: 'SaaS Platform',
                  description: 'Modern SaaS website with user-focused design',
                  metrics: ['600% User Registration', '350% Conversion Rate', '12 Months'],
                  gradient: 'from-purple-500 to-violet-500'
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
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-200"
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
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-400">
                Everything you need to know about our website design services
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'How long does it take to design and develop a website?',
                  answer: 'Website design and development typically takes 4-8 weeks depending on complexity, number of pages, and features required. Simple websites can be completed in 2-3 weeks, while complex e-commerce or custom applications may take 8-12 weeks.'
                },
                {
                  question: 'What is the typical cost for website design services?',
                  answer: 'Website design costs typically range from ₹45,000 to ₹1,50,000 depending on complexity, features, and scope of work. We provide detailed quotes based on your specific requirements and business goals.'
                },
                {
                  question: 'Do you provide website maintenance and support?',
                  answer: 'Yes, we provide ongoing website maintenance and support services including regular updates, security monitoring, performance optimization, content updates, and technical support. We offer various maintenance packages to suit your needs.'
                },
                {
                  question: 'Do you work with businesses outside Delhi NCR?',
                  answer: 'Yes, we work with businesses across India and internationally. Our website design services are not limited by geography and can be delivered remotely with excellent results.'
                },
                {
                  question: 'What technologies do you use for website development?',
                  answer: 'We use modern technologies including React.js, Next.js, Node.js, WordPress, and other industry-standard frameworks. We choose the best technology stack based on your specific requirements and business goals.'
                },
                {
                  question: 'Do you provide SEO optimization with website design?',
                  answer: 'Yes, we include basic SEO optimization with all website design packages. This includes SEO-friendly URL structure, meta tags, schema markup, fast loading speed, mobile optimization, and other SEO best practices.'
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's create a website that not only looks amazing but also drives real business results.
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

export default WebsiteDesign; 
