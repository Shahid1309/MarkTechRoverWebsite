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
  Camera,
  ArrowUpRight,
  RefreshCcw as RefreshIcon,
  TrendingDown,
  Gauge
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const WebsiteRedesign = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <RefreshIcon className="h-4 w-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'process', label: 'Our Process', icon: <Rocket className="h-4 w-4" /> },{ id: 'results', label: 'Results', icon: <Trophy className="h-4 w-4" /> },
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
    title: "Website Redesign Services | Transform Your Online Presence | MarkTechRover",
    description: "Professional website redesign services. Transform your existing website with modern design, improved UX, and better performance. Expert solutions for your business needs.",
    keywords: ["website redesign","services","professional","expert","business","transform"],
    url: "/services/ux-interactive/website-redesign",
    type: "website" as const,
    publishedAt: "2025-08-05T06:37:20.324Z",
    modifiedAt: "2025-08-05T06:37:20.324Z",
    author: "MarkTechRover",
    section: "Services",
    tags: ["website redesign","services"],
    image: "/images/services/website-redesign.jpg"
  };

  const benefits = [
    {
      id: 1,
      title: 'Improved User Experience',
      description: 'Modern, intuitive design that keeps visitors engaged',
      icon: <Users className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      metrics: ['+250% Engagement', '+180% Time on Site', '+320% Pages per Visit'],
      beforeAfter: { before: 'Outdated navigation', after: 'Intuitive user flow' }
    },
    {
      id: 2,
      title: 'Better Performance',
      description: 'Faster loading times and optimized user experience',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-yellow-500 to-orange-500',
      metrics: ['-65% Load Time', '+95% Speed Score', '+280% Mobile Performance'],
      beforeAfter: { before: 'Slow loading', after: 'Lightning fast' }
    },
    {
      id: 3,
      title: 'Increased Conversions',
      description: 'Strategic design focused on driving business results',
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-500',
      metrics: ['+400% Conversions', '+350% Lead Generation', '+220% Sales'],
      beforeAfter: { before: 'Low conversion rate', after: 'Optimized funnels' }
    },
    {
      id: 4,
      title: 'Mobile Optimization',
      description: 'Perfect experience across all devices and screen sizes',
      icon: <Smartphone className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-500',
      metrics: ['+450% Mobile Traffic', '+380% Mobile Conversions', '100% Responsive'],
      beforeAfter: { before: 'Poor mobile experience', after: 'Mobile-first design' }
    },
    {
      id: 5,
      title: 'SEO Enhancement',
      description: 'Improved search engine visibility and rankings',
      icon: <Search className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-500',
      metrics: ['+280% Organic Traffic', '+195% Keyword Rankings', '+420% Backlinks'],
      beforeAfter: { before: 'Low search visibility', after: 'SEO optimized' }
    },
    {
      id: 6,
      title: 'Modern Technology',
      description: 'Latest frameworks and security features',
      icon: <Code className="h-8 w-8" />,
      color: 'from-red-500 to-rose-500',
      metrics: ['Latest Frameworks', 'Enhanced Security', 'Future-Proof Code'],
      beforeAfter: { before: 'Outdated tech stack', after: 'Modern architecture' }
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Audit & Analysis',
      description: 'Comprehensive analysis of your current website to identify improvement opportunities',
      detailedDescription: 'We conduct a thorough audit of your existing website, analyzing performance, user experience, SEO, and technical issues. This includes competitor benchmarking and user behavior analysis to identify key improvement areas.',
      icon: <Search className="h-6 w-6" />,
      deliverables: ['Website audit', 'Competitor analysis', 'User behavior study', 'Performance metrics'],
      duration: '1-2 weeks',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/20 to-blue-600/20'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Strategic roadmap for transformation based on data and best practices',
      detailedDescription: 'Based on audit findings, we create a comprehensive redesign strategy. This includes information architecture restructuring, user journey optimization, content strategy, and a detailed implementation roadmap.',
      icon: <Target className="h-6 w-6" />,
      deliverables: ['Redesign strategy', 'Information architecture', 'User journey mapping', 'Content strategy'],
      duration: '1 week',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20'
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Modern design implementation with cutting-edge development practices',
      detailedDescription: 'Our team creates modern, user-focused designs and implements them using the latest technologies. We ensure responsive design, performance optimization, and seamless functionality across all devices.',
      icon: <PenTool className="h-6 w-6" />,
      deliverables: ['UI/UX design', 'Responsive development', 'Performance optimization', 'Quality assurance'],
      duration: '4-6 weeks',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/20 to-green-600/20'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'Smooth migration and continuous optimization for maximum results',
      detailedDescription: 'We handle seamless migration from your old site to the new one, preserving SEO rankings and ensuring zero downtime. Post-launch, we monitor performance and continuously optimize for better results.',
      icon: <Rocket className="h-6 w-6" />,
      deliverables: ['Seamless migration', 'SEO preservation', 'Analytics setup', 'Ongoing optimization'],
      duration: '1 week + ongoing',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/20 to-orange-600/20'
    }
  ];

  

  const results = [
    {
      client: 'E-commerce Brand',
      before: { traffic: '12K', conversions: '2.1%', speed: '3.2s' },
      after: { traffic: '48K', conversions: '8.7%', speed: '0.9s' },
      improvement: '+300% Traffic, +314% Conversions',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      client: 'Corporate Company',
      before: { traffic: '8K', conversions: '1.5%', speed: '4.1s' },
      after: { traffic: '32K', conversions: '6.8%', speed: '1.1s' },
      improvement: '+300% Traffic, +353% Conversions',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      client: 'SaaS Platform',
      before: { traffic: '15K', conversions: '3.2%', speed: '2.8s' },
      after: { traffic: '75K', conversions: '12.4%', speed: '0.7s' },
      improvement: '+400% Traffic, +288% Conversions',
      gradient: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <PageSEO config={seoConfig}>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(59,130,246,0.05)_50%,transparent_60%)] bg-[length:120px_120px]"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
                <RefreshIcon className="h-4 w-4 text-blue-300" />
                <span className="text-sm font-medium text-blue-200">Transform Your Existing Website</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Hire Website Redesign Agency
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  That Drives Results
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your outdated website into a modern, high-performing digital asset. 
                Expert website redesign services that boost conversions, improve user experience, and drive growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
                >
                  <Target className="h-5 w-5 mr-2" />
                  Get Free Audit
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <Play className="h-5 w-5 mr-2" />
                  See Case Studies
                </button>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { value: '+300%', label: 'Avg. Traffic Increase' },
                  { value: '+250%', label: 'Conversion Boost' },
                  { value: '-70%', label: 'Load Time Reduction' },
                  { value: '4.8/5', label: 'Client Rating' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 rounded-full"></div>
              
              {/* Main Navigation Container */}
              <div className="relative bg-black/20 backdrop-blur-xl border border-blue-500/30 rounded-full shadow-2xl shadow-blue-500/20">
                <nav className="flex items-center space-x-1 px-6 py-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                      className={`${
                      activeSection === item.id
                          ? 'text-blue-300 bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/50 shadow-lg shadow-blue-500/25' 
                          : 'text-gray-300 hover:text-blue-300 hover:bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:border-blue-300/30'
                      } px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg`}
                  >
                    {item.icon}
                      <span className="hidden sm:inline">{item.label}</span>
                  </button>
                ))}
              </nav>
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>

        {/* Overview Section */}
        <section id="overview" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Redesign</span> Your Website?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Your website is often the first impression customers have of your business. 
                A modern, well-designed site builds trust and drives conversions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <TrendingDown className="h-6 w-6" />,
                  title: 'Outdated Design',
                  description: 'Old designs can hurt your credibility and drive visitors away',
                  color: 'from-red-500 to-orange-500'
                },
                {
                  icon: <Gauge className="h-6 w-6" />,
                  title: 'Poor Performance',
                  description: 'Slow websites lose customers and hurt search rankings',
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  icon: <Smartphone className="h-6 w-6" />,
                  title: 'Not Mobile-Friendly',
                  description: 'Mobile users make up majority of web traffic today',
                  color: 'from-blue-500 to-cyan-500'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Transformation <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Benefits</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See the measurable impact of a professional website redesign
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  onMouseEnter={() => setHoveredBenefit(benefit.id)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 ${
                    hoveredBenefit === benefit.id ? 'border-blue-500/50 scale-105 shadow-2xl shadow-blue-500/20' : 'hover:border-gray-700'
                  }`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center text-white mb-4 transform transition-transform duration-300 ${hoveredBenefit === benefit.id ? 'scale-110 rotate-3' : ''}`}>
                    {benefit.icon}
                      </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 mb-4">{benefit.description}</p>
                  
                  {/* Before/After */}
                  <div className="mb-4 p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-red-400">Before</span>
                      <ArrowRight className="h-3 w-3 text-gray-500" />
                      <span className="text-green-400">After</span>
                      </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">{benefit.beforeAfter.before}</span>
                      <span className="text-gray-300 text-xs">{benefit.beforeAfter.after}</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-2">
                    {benefit.metrics.map((metric, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
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
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Redesign Process</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A strategic approach to transforming your website
              </p>
            </div>

            {/* Interactive Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">Progress through our process</span>
                <span className="text-sm text-blue-400 font-semibold">Step {activeProcessStep + 1} of {processSteps.length}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
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
                        ? `bg-gradient-to-br ${step.bgColor} border-blue-400 shadow-lg shadow-blue-500/25`
                        : 'bg-gray-800/50 border-gray-600 hover:border-blue-500/50'
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
                      activeProcessStep === index ? 'text-blue-300' : 'text-gray-500'
                    }`}>
                      {step.duration}
                      </div>
                    
                    {/* Active indicator */}
                    {activeProcessStep === index && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
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
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
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
                <div className={`w-16 h-16 bg-gradient-to-br ${processSteps[activeProcessStep].color} rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 flex-shrink-0`}>
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
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                      </div>
                
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-6 border border-blue-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-400 mr-2" />
                    Expected Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Performance Improvement</span>
                      <span className="text-green-400 font-semibold">+200%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">User Engagement</span>
                      <span className="text-blue-400 font-semibold">+150%</span>
                </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Conversion Rate</span>
                      <span className="text-purple-400 font-semibold">+180%</span>
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
                      : 'text-blue-400 hover:text-white hover:bg-blue-500/20'
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
                          ? 'bg-blue-500'
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
                      : 'text-blue-400 hover:text-white hover:bg-blue-500/20'
                  }`}
                >
                  <span>Next Step</span>
                  <ChevronDown className="h-4 w-4 -rotate-90" />
                </button>
              </div>
            </div>
            </div>
          </section>

        

        {/* Results Section */}
        <section id="results" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Real <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Results</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See the transformation impact from our redesign projects
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">{result.client}</h3>
                    
                    {/* Before/After Comparison */}
                    <div className="space-y-4">
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <div className="text-xs text-red-400 mb-2 font-semibold">BEFORE</div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <div className="text-gray-400">Traffic</div>
                            <div className="text-white font-semibold">{result.before.traffic}</div>
                    </div>
                          <div>
                            <div className="text-gray-400">Conv. Rate</div>
                            <div className="text-white font-semibold">{result.before.conversions}</div>
                  </div>
                          <div>
                            <div className="text-gray-400">Speed</div>
                            <div className="text-white font-semibold">{result.before.speed}</div>
                </div>
            </div>
                </div>

                      <div className="flex justify-center">
                        <ArrowUpRight className="h-6 w-6 text-blue-400" />
            </div>

                      <div className={`p-4 bg-gradient-to-r ${result.gradient} rounded-lg`}>
                        <div className="text-xs text-white mb-2 font-semibold">AFTER</div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <div className="text-white/80">Traffic</div>
                            <div className="text-white font-semibold">{result.after.traffic}</div>
                  </div>
                          <div>
                            <div className="text-white/80">Conv. Rate</div>
                            <div className="text-white font-semibold">{result.after.conversions}</div>
                    </div>
                          <div>
                            <div className="text-white/80">Speed</div>
                            <div className="text-white font-semibold">{result.after.speed}</div>
                  </div>
                </div>
            </div>
                    </div>
            </div>

                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex items-center text-sm text-green-400">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      {result.improvement}
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
                Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'How long does a website redesign take?',
                  answer: 'A typical website redesign takes 6-12 weeks depending on the scope and complexity. Simple visual refreshes can be completed in 4-6 weeks, while complete transformations may take 10-16 weeks.'
                },
                {
                  question: 'Will my SEO rankings be affected?',
                  answer: 'No, we ensure SEO preservation during redesign. We maintain all important URLs, redirects, and metadata. In fact, most clients see improved rankings due to better performance and user experience.'
                },
                {
                  question: 'Do I need to provide new content?',
                  answer: 'Not necessarily. We can work with your existing content and optimize it, or help create new content as part of the redesign process. Content strategy is included in our packages.'
                },
                {
                  question: 'Can you redesign while keeping my current CMS?',
                  answer: 'Yes, we can redesign your website while maintaining your current CMS platform. We work with WordPress, Shopify, custom CMS, and other platforms.'
                },
                {
                  question: 'What happens to my existing website during redesign?',
                  answer: 'Your current website remains live and functional throughout the redesign process. We develop the new design on a staging environment and only switch over when you\'re ready.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Website?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get a free website audit and discover how a redesign can boost your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Free Audit
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
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

export default WebsiteRedesign; 
