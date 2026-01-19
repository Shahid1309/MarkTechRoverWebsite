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

const ContentManagementSystems = () => {
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

    handleScroll();
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
    title: 'Content Management Systems Services | MarkTech Rover',
    description: 'Headless and traditional CMS implementations with governance, workflows, and performance. Empower teams to ship content faster and safer.',
    keywords: [
      'CMS implementation',
      'Headless CMS services',
      'Content governance',
      'Editorial workflows',
      'CMS performance',
      'Multi-site management'
    ],
    url: '/services/ux-interactive/content-management-systems',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'Ritik Kumar Poddar',
    section: 'Content Management Systems',
    tags: ['CMS', 'Headless', 'Content Ops', 'Governance'],
    image: '/images/content-management-systems.webp'
  };

  const features = [
    {
      id: 1,
      title: 'Headless & Hybrid',
      description: 'Composable architectures with API-first delivery',
      icon: <Server className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      benefits: ['API orchestration', 'Edge delivery', 'Multi-channel', 'Scalability']
    },
    {
      id: 2,
      title: 'Editorial Workflows',
      description: 'Role-based workflows, approvals, and localization',
      icon: <FileText className="h-8 w-8" />,
      color: 'from-purple-500 to-violet-500',
      benefits: ['Role-based access', 'Approval flows', 'Localization', 'Versioning']
    },
    {
      id: 3,
      title: 'Design Systems for CMS',
      description: 'Reusable blocks, page builders, and style governance',
      icon: <Layout className="h-8 w-8" />,
      color: 'from-emerald-500 to-green-500',
      benefits: ['UI libraries', 'Content blocks', 'Brand consistency', 'Faster creation']
    },
    {
      id: 4,
      title: 'Performance & SEO',
      description: 'Core Web Vitals, structured data, and caching layers',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-yellow-500 to-orange-500',
      benefits: ['CWV optimization', 'Schema & meta', 'Image/CDN tuning', 'Perf budgets']
    },
    {
      id: 5,
      title: 'Governance & Security',
      description: 'Policies, audits, and compliance-ready content operations',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-pink-500 to-rose-500',
      benefits: ['RBAC & SSO', 'Audit trails', 'Secret management', 'Compliance checks']
    },
    {
      id: 6,
      title: 'Analytics & Experimentation',
      description: 'Instrumentation and testing to improve engagement',
      icon: <BarChart3 className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-500',
      benefits: ['Event taxonomy', 'A/B testing', 'Content scoring', 'Behavior dashboards']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Platform Fit',
      description: 'Select the right CMS and architecture',
      detailedDescription:
        'We evaluate requirements, governance, and channel needs to recommend headless, hybrid, or traditional CMS with a clear migration and rollout plan.',
      icon: <Search className="h-6 w-6" />,
      deliverables: ['Requirements & fit assessment', 'Architecture blueprint', 'Migration plan', 'Roadmap'],
      duration: '1-2 weeks',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/20 to-blue-600/20'
    },
    {
      step: '02',
      title: 'Design Systems & Workflows',
      description: 'Build reusable components and editorial processes',
      detailedDescription:
        'We create design systems, content models, and workflows with permissions and approvals. Editors get preview environments and guidelines.',
      icon: <PenTool className="h-6 w-6" />,
      deliverables: ['Content models', 'Design system blocks', 'Workflow configs', 'Localization plan'],
      duration: '2-3 weeks',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20'
    },
    {
      step: '03',
      title: 'Build & Integrate',
      description: 'Develop templates, blocks, and integrations',
      detailedDescription:
        'We implement templates, page builders, and integrations (DAM, CRM, analytics). Performance, SEO, and accessibility are validated continuously.',
      icon: <Code className="h-6 w-6" />,
      deliverables: ['Templates & blocks', 'Integrations', 'SEO setup', 'Automated QA'],
      duration: '3-5 weeks',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/20 to-green-600/20'
    },
    {
      step: '04',
      title: 'Launch & Enablement',
      description: 'Safe rollout with training and analytics',
      detailedDescription:
        'We launch with content freeze windows, finalize redirects, enable analytics, and train editors. Post-launch support ensures stability and adoption.',
      icon: <Rocket className="h-6 w-6" />,
      deliverables: ['Go-live checklist', 'Redirects & SEO', 'Training sessions', 'Post-launch support'],
      duration: '1 week + ongoing',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/20 to-orange-600/20'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹50,000',
      period: 'per month',
      description: 'Perfect for small businesses starting with CMS',
      features: [
        { text: 'Basic CMS setup', included: true },
        { text: 'Up to 50 pages', included: true },
        { text: 'Standard templates', included: true },
        { text: 'Email support', included: true },
        { text: 'Basic SEO setup', included: true },
        { text: 'Content migration', included: false },
        { text: 'Advanced workflows', included: false },
        { text: 'Multi-language support', included: false }
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '₹1,20,000',
      period: 'per month',
      description: 'Comprehensive CMS for growing businesses',
      features: [
        { text: 'Advanced CMS setup', included: true },
        { text: 'Up to 200 pages', included: true },
        { text: 'Custom templates', included: true },
        { text: 'Priority support', included: true },
        { text: 'Advanced SEO setup', included: true },
        { text: 'Content migration', included: true },
        { text: 'Advanced workflows', included: true },
        { text: 'Multi-language support', included: true }
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-featured CMS for large organizations',
      features: [
        { text: 'Enterprise CMS setup', included: true },
        { text: 'Unlimited pages', included: true },
        { text: 'Custom design system', included: true },
        { text: '24/7 priority support', included: true },
        { text: 'Advanced SEO & analytics', included: true },
        { text: 'Full content migration', included: true },
        { text: 'Custom workflows', included: true },
        { text: 'Multi-language & localization', included: true }
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <PageSEO config={seoConfig}>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(147,51,234,0.05)_50%,transparent_70%)] bg-[length:100px_100px] animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
                <Sparkle className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Content Management Systems</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">Hire CMS Development Agency</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Ship content faster with secure, performant, and editor-friendly CMS setups—headless or hybrid—backed by strong governance.
              </p>

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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { value: '200+', label: 'CMS Launches' },
                  { value: '40%', label: 'Faster Content Ops' },
                  { value: '95+', label: 'Performance Scores' },
                  { value: '4.8/5', label: 'Client Rating' }
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

        <div
          className={`fixed left-1/2 transform -translate-x-1/2 z-[60] transition-all duration-500 ${
            isNavSticky ? 'top-24 opacity-100 scale-100 pointer-events-auto' : 'top-0 opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 rounded-full"></div>

            <div className="relative bg-black/20 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-2xl shadow-purple-500/20">
              <nav className="flex items-center space-x-1 px-6 py-3">
                {navItems.map(item => (
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

            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        <section id="overview" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">CMS Team</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We blend headless architectures, design systems, and content operations so your teams publish quickly without sacrificing performance or governance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: 'Content Velocity',
                  description: 'Workflows, blocks, and previews so teams ship faster'
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: 'Governed & Secure',
                  description: 'RBAC, SSO, and auditability for compliant content ops'
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: 'Performance Native',
                  description: 'CWV, caching, and SEO baked into every template'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                >
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

        <section id="features" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Comprehensive <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">CMS Features</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">Everything you need to launch and operate content at scale</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(feature => (
                <div
                  key={feature.id}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 ${
                    hoveredFeature === feature.id ? 'border-purple-500/50 scale-105 shadow-2xl shadow-purple-500/20' : 'hover:border-gray-700'
                  }`}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 transform transition-transform duration-300 ${
                      hoveredFeature === feature.id ? 'scale-110 rotate-3' : ''
                    }`}
                  >
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

        <section id="process" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">CMS Process</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">From platform fit to launch with training and support</p>
            </div>

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

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-500 transform ${
                    activeProcessStep === index ? 'scale-105' : hoveredStep === index ? 'scale-102' : 'scale-100'
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
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                        activeProcessStep === index ? `bg-gradient-to-br ${step.color} shadow-lg` : 'bg-gray-700'
                      }`}
                    >
                      <div className={`transition-all duration-300 ${activeProcessStep === index ? 'text-white' : 'text-gray-400'}`}>{step.icon}</div>
                    </div>
                    <h3
                      className={`text-sm font-bold mb-2 transition-all duration-300 ${
                        activeProcessStep === index ? 'text-white' : 'text-gray-300'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <div
                      className={`text-xs transition-all duration-300 ${
                        activeProcessStep === index ? 'text-purple-300' : 'text-gray-500'
                      }`}
                    >
                      {step.duration}
                    </div>

                    {activeProcessStep === index && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full px-2">
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div
                        className={`h-1 rounded-full transition-all duration-500 ${
                          index <= activeProcessStep ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gray-600'
                        }`}
                        style={{ width: index <= activeProcessStep ? '100%' : '0%', animationDelay: `${index * 200}ms` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-gray-800/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-start space-x-6 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${processSteps[activeProcessStep].color} rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 flex-shrink-0`}
                >
                  <div className="text-white">{processSteps[activeProcessStep].icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {processSteps[activeProcessStep].step}: {processSteps[activeProcessStep].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">{processSteps[activeProcessStep].detailedDescription}</p>
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

                <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-6 border border-purple-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 text-purple-400 mr-2" />
                    Expected Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Time-to-Publish</span>
                      <span className="text-green-400 font-semibold">-40% faster</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Brand Consistency</span>
                      <span className="text-blue-400 font-semibold">Systemized</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Performance Score</span>
                      <span className="text-purple-400 font-semibold">95+ CWV</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-700/50">
                <button
                  onClick={() => setActiveProcessStep(Math.max(0, activeProcessStep - 1))}
                  disabled={activeProcessStep === 0}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeProcessStep === 0 ? 'text-gray-500 cursor-not-allowed' : 'text-purple-400 hover:text-white hover:bg-purple-500/20'
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
                        activeProcessStep === index ? 'bg-purple-500' : 'bg-gray-600 hover:bg-gray-500'
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

        <section className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">CMS Package</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">Options for fast launches, headless builds, and enterprise governance</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border-2 transition-all duration-300 ${
                    pkg.popular ? 'border-purple-500 scale-105 shadow-2xl shadow-purple-500/20' : 'border-gray-800 hover:border-purple-500/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {pkg.cta}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{pkg.price}</span>
                      <span className="text-gray-500 ml-2">{pkg.period}</span>
                    </div>
                    <p className="text-gray-400">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg' : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                CMS <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Success Stories</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Global Publisher',
                  description: 'Headless CMS with localization and editorial workflows',
                  metrics: ['-45% Time-to-Publish', '6 Regions', '5 Months'],
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'B2B SaaS',
                  description: 'Component-driven marketing site with experiments and SEO',
                  metrics: ['+30% Conversion', '95+ CWV', '4 Months'],
                  gradient: 'from-emerald-500 to-green-500'
                },
                {
                  title: 'Retail Multi-site',
                  description: 'Multi-brand CMS with shared design system and governance',
                  metrics: ['4 Brands', 'Consistent UI', '6 Months'],
                  gradient: 'from-yellow-500 to-orange-500'
                },
                {
                  title: 'Education Portal',
                  description: 'Workflows, SSO, and accessibility-first content templates',
                  metrics: ['AA Accessibility', 'SSO Enabled', '4 Months'],
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

        <section id="faqs" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-400">How we deliver fast, governed content systems</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'Which CMS platforms do you work with?',
                  answer:
                    'We support headless (Contentful, Strapi, Sanity), hybrid (Next.js/Headless WordPress), and traditional platforms. We choose based on your requirements and team skills.'
                },
                {
                  question: 'Can you migrate our existing site?',
                  answer:
                    'Yes. We handle content modeling, redirects, SEO preservation, and phased rollouts to minimize risk during migration.'
                },
                {
                  question: 'How do you enable editors?',
                  answer:
                    'We provide training, documentation, preview environments, workflows, and component libraries so editors can publish quickly with confidence.'
                },
                {
                  question: 'Do you ensure performance and SEO?',
                  answer:
                    'Performance budgets, CWV checks, image/CDN optimization, structured data, and metadata are baked into templates and pipelines.'
                },
                {
                  question: 'Do you offer post-launch support?',
                  answer:
                    'Yes. We offer support plans for content ops, performance, security updates, and experimentation to continuously improve results.'
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

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Modernize Your CMS?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let’s deliver a secure, high-performing CMS that empowers your teams to publish faster with confidence.
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

export default ContentManagementSystems;
