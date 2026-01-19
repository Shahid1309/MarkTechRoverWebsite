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
  Gauge,
  Timer,
  FastForward,
  CheckCircle2
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const RapidWebDesign = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Zap className="h-4 w-4" /> },
    { id: 'features', label: 'Features', icon: <Sparkle className="h-4 w-4" /> },
    { id: 'timeline', label: 'Timeline', icon: <Timer className="h-4 w-4" /> },{ id: 'process', label: 'Process', icon: <Rocket className="h-4 w-4" /> },
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
    title: "Rapid Web Design Services | Fast Website Development | MarkTechRover",
    description: "Professional rapid web design services. Get your website designed and launched quickly without compromising quality. Fast-track website design and development.",
    keywords: ["rapid web design","services","professional","expert","business","fast website"],
    url: "/services/ux-interactive/rapid-web-design",
    type: "website" as const,
    publishedAt: "2025-08-05T06:37:20.351Z",
    modifiedAt: "2025-08-05T06:37:20.351Z",
    author: "MarkTechRover",
    section: "Services",
    tags: ["rapid web design","services"],
    image: "/images/services/rapid-web-design.jpg"
  };

  const features = [
    {
      id: 1,
      title: 'Lightning Fast Delivery',
      description: 'Get your website live in record time without sacrificing quality',
      icon: <FastForward className="h-8 w-8" />,
      color: 'from-purple-500 to-indigo-500',
      timeline: '2-3 Weeks',
      benefits: ['Quick turnaround', 'No quality compromise', 'Efficient workflow', 'Fast deployment']
    },
    {
      id: 2,
      title: 'Streamlined Process',
      description: 'Optimized workflow that eliminates delays and bottlenecks',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      timeline: 'Efficient',
      benefits: ['Parallel workflows', 'Quick approvals', 'Agile methodology', 'Real-time updates']
    },
    {
      id: 3,
      title: 'Modern Templates',
      description: 'Premium templates customized to your brand for rapid deployment',
      icon: <Layout className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-500',
      timeline: 'Customized',
      benefits: ['Premium templates', 'Brand customization', 'Quick setup', 'Professional design']
    },
    {
      id: 4,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect experience on all devices',
      icon: <Smartphone className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-500',
      timeline: 'Included',
      benefits: ['Mobile optimized', 'Tablet ready', 'Desktop perfect', 'Cross-browser']
    },
    {
      id: 5,
      title: 'SEO Ready',
      description: 'Built-in SEO optimization for immediate search engine visibility',
      icon: <Search className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-500',
      timeline: 'Built-in',
      benefits: ['SEO optimized', 'Fast indexing', 'Meta tags', 'Schema markup']
    },
    {
      id: 6,
      title: 'Quick Support',
      description: 'Rapid response times and fast issue resolution',
      icon: <MessageSquare className="h-8 w-8" />,
      color: 'from-red-500 to-rose-500',
      timeline: '24/7',
      benefits: ['Fast response', 'Quick fixes', 'Priority support', 'Always available']
    }
  ];

  const timeline = [
    {
      week: 'Week 1',
      title: 'Discovery & Design',
      description: 'Quick discovery session and initial design concepts',
      deliverables: ['Brand analysis', 'Design concepts', 'Layout approval', 'Content planning']
    },
    {
      week: 'Week 2',
      title: 'Development & Review',
      description: 'Rapid development with continuous review cycles',
      deliverables: ['Frontend development', 'Content integration', 'Review sessions', 'Revisions']
    },
    {
      week: 'Week 3',
      title: 'Testing & Launch',
      description: 'Final testing and smooth launch process',
      deliverables: ['Quality testing', 'Performance optimization', 'Final approvals', 'Go live']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Quick Brief',
      description: 'Fast discovery session to understand your needs',
      detailedDescription: 'We conduct an efficient discovery session to understand your business goals, target audience, and requirements. This streamlined approach ensures we capture all essential information without lengthy delays.',
      icon: <MessageSquare className="h-6 w-6" />,
      deliverables: ['Requirements gathering', 'Brand understanding', 'Goal definition', 'Timeline confirmation'],
      duration: '1-2 days',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20'
    },
    {
      step: '02',
      title: 'Rapid Design',
      description: 'Quick design iterations with immediate feedback',
      detailedDescription: 'Our design team creates modern, professional designs using proven templates and frameworks. We focus on rapid iterations with immediate feedback loops to ensure designs meet your vision quickly.',
      icon: <PenTool className="h-6 w-6" />,
      deliverables: ['Design concepts', 'Layout mockups', 'Brand integration', 'Responsive designs'],
      duration: '3-5 days',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-500/20 to-indigo-600/20'
    },
    {
      step: '03',
      title: 'Fast Build',
      description: 'Efficient development with parallel workflows',
      detailedDescription: 'Development happens in parallel with design reviews. We use modern frameworks and efficient workflows to build your website quickly while maintaining high quality standards.',
      icon: <Code className="h-6 w-6" />,
      deliverables: ['Frontend development', 'Backend setup', 'Content integration', 'Performance optimization'],
      duration: '1-2 weeks',
      color: 'from-purple-600 to-indigo-600',
      bgColor: 'from-purple-600/20 to-indigo-600/20'
    },
    {
      step: '04',
      title: 'Quick Launch',
      description: 'Smooth deployment and immediate go-live',
      detailedDescription: 'We handle seamless deployment with zero downtime. Post-launch, we provide immediate support and quick fixes to ensure everything works perfectly from day one.',
      icon: <Rocket className="h-6 w-6" />,
      deliverables: ['Seamless deployment', 'Quality assurance', 'Performance testing', 'Go live support'],
      duration: '1-2 days',
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.25),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(147,51,234,0.06)_50%,transparent_70%)] bg-[length:100px_100px] animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
                <FastForward className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Fast-Track Website Design</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  Hire Rapid Web Design Agency
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Get a professional, high-quality website in record time. 
                Fast-track website design and development without compromising on quality or features.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Start Fast Track
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <Timer className="h-5 w-5 mr-2" />
                  See Timeline
                </button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { value: '2-3', label: 'Weeks Delivery' },
                  { value: '100%', label: 'Quality Guaranteed' },
                  { value: '24/7', label: 'Fast Support' },
                  { value: '500+', label: 'Fast Launches' }
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
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Rapid Web Design</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Perfect for businesses that need a professional website fast without compromising quality
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Timer className="h-6 w-6" />,
                  title: 'Time-Sensitive Projects',
                  description: 'Need a website urgently? We deliver professional results in weeks, not months',
                  color: 'from-purple-500 to-indigo-500'
                },
                {
                  icon: <CheckCircle2 className="h-6 w-6" />,
                  title: 'Quality Assured',
                  description: 'Fast doesn\'t mean rushed. We maintain the highest quality standards',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: <DollarSign className="h-6 w-6" />,
                  title: 'Cost-Effective',
                  description: 'Get more value with our streamlined process and efficient workflows',
                  color: 'from-blue-500 to-cyan-500'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
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

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Rapid Design <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Everything you need, delivered fast
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
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-200 rounded-full">{feature.timeline}</span>
                      </div>
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

        {/* Timeline Section */}
        <section id="timeline" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Fast <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Timeline</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From concept to launch in just 2-3 weeks
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {timeline.map((phase, index) => (
                <div key={index} className="relative">
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 transform translate-x-4 z-0" />
                  )}
                  
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-200 mb-2">{phase.week}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                      <p className="text-gray-400 text-sm">{phase.description}</p>
                    </div>
                    <ul className="space-y-1">
                      {phase.deliverables.map((item, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
                Streamlined <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                How we deliver fast without cutting corners
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
                      <span className="text-gray-300">Speed</span>
                      <span className="text-green-400 font-semibold">2-3 Weeks</span>
                      </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Quality</span>
                      <span className="text-purple-300 font-semibold">Premium</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Satisfaction</span>
                      <span className="text-indigo-300 font-semibold">100%</span>
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

          {/* FAQs Section */}
        <section id="faqs" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'How fast can you deliver a website?',
                  answer: 'Our rapid web design service typically delivers websites in 2-3 weeks. Express packages can be completed in 2 weeks, while more complex projects take 3-4 weeks.'
                },
                {
                  question: 'Will quality be compromised for speed?',
                  answer: 'Absolutely not. We use efficient workflows, proven templates, and streamlined processes to maintain high quality while delivering fast. Quality is never compromised.'
                },
                {
                  question: 'What if I need changes after launch?',
                  answer: 'All packages include post-launch support. We offer quick revision cycles and fast response times to address any changes or issues.'
                },
                {
                  question: 'Can I get custom features in rapid design?',
                  answer: 'Yes, our Rapid Pro and Turbo packages include custom features. We work efficiently to integrate custom functionality without significantly extending timelines.'
                },
                {
                  question: 'What happens if the project takes longer?',
                  answer: 'We maintain clear communication throughout. If scope changes significantly, we\'ll discuss timeline adjustments. However, our streamlined process ensures we meet deadlines.'
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
              Need a Website Fast?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get started today and have your professional website live in weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Zap className="h-5 w-5 mr-2" />
                Start Fast Track
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                <Timer className="h-5 w-5 mr-2" />
                See Timeline
              </button>
            </div>
          </div>
        </section>
      </div>
      </PageSEO>
  );
};

export default RapidWebDesign; 
