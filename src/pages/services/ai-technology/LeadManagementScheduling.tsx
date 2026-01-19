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
  UserPlus,
  CalendarCheck,
  CalendarClock,
  Timer,
  CheckSquare,
  ListTodo
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const LeadManagementScheduling = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<number>(0);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Rocket className="h-4 w-4" /> },
    { id: 'features', label: 'Features', icon: <Zap className="h-4 w-4" /> },
    { id: 'scheduling', label: 'Scheduling', icon: <Calendar className="h-4 w-4" /> },
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
    const sectionIds = ['overview', 'features', 'scheduling', 'benefits', 'pricing', 'case-studies', 'faqs'];
    
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
    title: 'Lead Management & Scheduling Solutions | Automated Lead Management | MarkTechRover',
    description: 'Lead Management & Scheduling Solutions - Automated lead management and appointment scheduling. Capture, qualify, route, and schedule leads automatically. Best lead management services in Delhi NCR & India.',
    keywords: [
      'Lead Management', 'Lead Management Solutions', 'Appointment Scheduling', 'Lead Scheduling',
      'Automated Lead Management', 'Lead Qualification', 'Lead Routing', 'Lead Tracking',
      'Lead Management Delhi', 'Best Lead Management India', 'Lead Management Services', 'Scheduling Solutions',
      'Automated Scheduling', 'Lead Automation', 'Sales Lead Management', 'CRM Lead Management'
    ],
    url: '/services/ai-technology/lead-management-scheduling',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['Lead Management', 'Lead Scheduling', 'Appointment Scheduling', 'Lead Automation'],
    image: '/images/lead-management-scheduling.webp'
  };

  const features = [
    {
      id: 1,
      title: 'Lead Capture & Qualification',
      description: 'Automatically capture leads from multiple sources and qualify them using intelligent scoring',
      icon: <UserPlus className="h-8 w-8" />,
      features: [
        'Multi-channel lead capture',
        'Automatic lead qualification',
        'Lead scoring and prioritization',
        'Duplicate detection and merging',
        'Lead enrichment and validation',
        'Real-time lead notifications'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'Intelligent Lead Routing',
      description: 'Automatically route leads to the right sales rep or team based on rules and availability',
      icon: <Target className="h-8 w-8" />,
      features: [
        'Rule-based lead routing',
        'Round-robin assignment',
        'Territory-based routing',
        'Skill-based routing',
        'Load balancing',
        'Manual override options'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 3,
      title: 'Appointment Scheduling',
      description: 'Automated appointment scheduling with calendar integration and availability management',
      icon: <CalendarCheck className="h-8 w-8" />,
      features: [
        'Online appointment booking',
        'Calendar integration',
        'Availability management',
        'Automated reminders',
        'Rescheduling and cancellation',
        'Multi-timezone support'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 4,
      title: 'Lead Nurturing & Follow-up',
      description: 'Automated lead nurturing campaigns and follow-up sequences to move leads through the funnel',
      icon: <MessageSquare className="h-8 w-8" />,
      features: [
        'Automated email sequences',
        'Drip campaigns',
        'Follow-up automation',
        'Behavioral triggers',
        'Personalized messaging',
        'Campaign performance tracking'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'Lead Tracking & Analytics',
      description: 'Comprehensive lead tracking, analytics, and reporting to measure performance',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        'Lead source tracking',
        'Conversion tracking',
        'Pipeline analytics',
        'Performance dashboards',
        'Custom reports',
        'ROI analysis'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'CRM Integration',
      description: 'Seamless integration with CRM platforms for unified lead management',
      icon: <Link2 className="h-8 w-8" />,
      features: [
        'Salesforce integration',
        'HubSpot integration',
        'Microsoft Dynamics integration',
        'Other CRM integrations',
        'Bidirectional data sync',
        'Real-time updates'
      ],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-500/10 to-violet-400/10',
      borderColor: 'border-violet-500/20',
      textColor: 'text-violet-300'
    }
  ];

  const schedulingFeatures = [
    {
      title: 'Online Booking',
      description: 'Allow leads to book appointments directly through your website or landing pages',
      icon: <CalendarClock className="h-8 w-8" />,
      benefits: [
        '24/7 appointment booking',
        'Reduced no-shows',
        'Faster response times',
        'Better customer experience'
      ]
    },
    {
      title: 'Calendar Sync',
      description: 'Sync with Google Calendar, Outlook, and other calendar systems',
      icon: <Calendar className="h-8 w-8" />,
      benefits: [
        'Real-time availability',
        'Automatic conflict prevention',
        'Multi-calendar support',
        'Time zone handling'
      ]
    },
    {
      title: 'Automated Reminders',
      description: 'Send automated reminders via email and SMS to reduce no-shows',
      icon: <Bell className="h-8 w-8" />,
      benefits: [
        'Email reminders',
        'SMS notifications',
        'Customizable messages',
        'Reduced cancellations'
      ]
    },
    {
      title: 'Team Scheduling',
      description: 'Manage schedules for multiple team members and departments',
      icon: <Users className="h-8 w-8" />,
      benefits: [
        'Multi-user scheduling',
        'Department management',
        'Resource allocation',
        'Team availability'
      ]
    },
    {
      title: 'Rescheduling & Cancellations',
      description: 'Easy rescheduling and cancellation management for leads and customers',
      icon: <RefreshCw className="h-8 w-8" />,
      benefits: [
        'Self-service rescheduling',
        'Cancellation management',
        'Waitlist management',
        'Automatic rebooking'
      ]
    },
    {
      title: 'Reporting & Analytics',
      description: 'Track scheduling performance, no-shows, and appointment metrics',
      icon: <BarChart className="h-8 w-8" />,
      benefits: [
        'Appointment analytics',
        'No-show tracking',
        'Utilization reports',
        'Performance insights'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Faster Response Times',
      description: 'Automated lead routing and scheduling reduces response time significantly',
      icon: <Zap className="h-8 w-8" />,
      metric: '85%',
      label: 'Faster Response'
    },
    {
      title: 'Higher Conversion',
      description: 'Better lead management and timely follow-ups increase conversion rates',
      icon: <TrendingUp className="h-8 w-8" />,
      metric: '42%',
      label: 'Conversion Rate'
    },
    {
      title: 'Reduced No-Shows',
      description: 'Automated reminders and scheduling reduce appointment no-shows',
      icon: <CheckSquare className="h-8 w-8" />,
      metric: '58%',
      label: 'No-Show Reduction'
    },
    {
      title: 'Time Savings',
      description: 'Automation saves time on manual lead management and scheduling tasks',
      icon: <Clock className="h-8 w-8" />,
      metric: '72%',
      label: 'Time Savings'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹30,000',
      period: 'per month',
      description: 'Perfect for small businesses starting with lead management',
      features: [
        'Up to 500 leads/month',
        'Basic lead capture',
        'Email scheduling',
        'Basic routing',
        'Standard reporting',
        'Email support',
        '1 calendar integration'
      ],
      highlighted: false,
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '₹65,000',
      period: 'per month',
      description: 'Comprehensive lead management for growing businesses',
      features: [
        'Up to 5,000 leads/month',
        'Advanced lead capture',
        'Multi-channel scheduling',
        'Advanced routing',
        'Lead nurturing',
        'Priority support',
        'Multiple calendar integrations',
        'Advanced analytics',
        'CRM integration'
      ],
      highlighted: true,
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-featured lead management for large organizations',
      features: [
        'Unlimited leads',
        'All lead management features',
        'Advanced automation',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom development',
        'Advanced security',
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
                <UserPlus className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Automated Lead Management & Scheduling</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" style={{ position: 'relative', zIndex: 10 }}>
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', position: 'relative', zIndex: 10 }}>
                  Hire Lead Management Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ position: 'relative', zIndex: 10 }}>
                Automate lead capture, qualification, routing, and appointment scheduling. Streamline your sales process, 
                reduce response times, and convert more leads into customers.
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
                  { value: '85%', label: 'Faster Response' },
                  { value: '42%', label: 'Conversion Rate' },
                  { value: '58%', label: 'No-Show Reduction' },
                  { value: '72%', label: 'Time Savings' }
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
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">₹750+</div>
                <div className="text-gray-300">Crores Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">450+</div>
                <div className="text-gray-300">Clients Using Lead Management</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">95%</div>
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
                Automated Lead Management & Scheduling
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Complete lead management and scheduling solution to capture, qualify, route, and schedule leads automatically. 
                Reduce response times, improve conversion rates, and streamline your sales process with intelligent automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <UserPlus className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automated Lead Capture</h3>
                <p className="text-gray-300 leading-relaxed">
                  Capture leads automatically from multiple sources including website, forms, chat, and more.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Smart Lead Routing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Automatically route leads to the right sales rep based on rules, availability, and territory.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <CalendarCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Appointment Scheduling</h3>
                <p className="text-gray-300 leading-relaxed">
                  Allow leads to book appointments online with automated reminders and calendar sync.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-2xl border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Use Lead Management & Scheduling?</h3>
                  <ul className="space-y-3">
                    {[
                      'Automate lead capture and qualification to save time',
                      'Route leads automatically to the right sales rep',
                      'Schedule appointments online 24/7 without manual coordination',
                      'Reduce response times and improve conversion rates',
                      'Automate follow-ups and lead nurturing campaigns',
                      'Track and analyze lead performance for better insights'
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
                        <div className="text-3xl font-bold text-purple-300 mb-1">85%</div>
                        <div className="text-xs text-gray-400">Faster Response</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">42%</div>
                        <div className="text-xs text-gray-400">Conversion Rate</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">58%</div>
                        <div className="text-xs text-gray-400">No-Show Reduction</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">72%</div>
                        <div className="text-xs text-gray-400">Time Savings</div>
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
                Complete Lead Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful features for automated lead management and conversion
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

          {/* Scheduling Features Section */}
          <section id="scheduling" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Appointment Scheduling Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete scheduling solution for automated appointment booking and management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {schedulingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20 border border-purple-500/30 mb-4 inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
                Why businesses choose Lead Management & Scheduling Solutions
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
                Choose the plan that fits your lead management needs. All plans include setup and onboarding.
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
                Real results from businesses using Lead Management & Scheduling Solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  company: 'Real Estate Agency',
                  industry: 'Real Estate',
                  challenge: 'Manual lead management and scheduling causing delays',
                  solution: 'Implemented automated lead management and online scheduling system',
                  results: [
                    { metric: '85%', label: 'Faster Response' },
                    { metric: '48%', label: 'Conversion Rate' },
                    { metric: '62%', label: 'Time Savings' }
                  ],
                  testimonial: 'Lead management automation reduced our response time by 85% and increased conversion rates by 48%. Online scheduling eliminated all manual coordination.'
                },
                {
                  company: 'Healthcare Practice',
                  industry: 'Healthcare',
                  challenge: 'High no-show rates and manual appointment scheduling',
                  solution: 'Deployed automated scheduling with reminders and calendar integration',
                  results: [
                    { metric: '58%', label: 'No-Show Reduction' },
                    { metric: '72%', label: 'Time Savings' },
                    { metric: '35%', label: 'Patient Satisfaction' }
                  ],
                  testimonial: 'Automated scheduling and reminders reduced no-shows by 58% and saved 72% of time previously spent on manual scheduling. Patient satisfaction improved significantly.'
                },
                {
                  company: 'B2B Services Company',
                  industry: 'Professional Services',
                  challenge: 'Leads falling through cracks due to slow response',
                  solution: 'Automated lead routing and scheduling with instant notifications',
                  results: [
                    { metric: '82%', label: 'Faster Response' },
                    { metric: '45%', label: 'Conversion Rate' },
                    { metric: '38%', label: 'Revenue Growth' }
                  ],
                  testimonial: 'Automated lead routing ensured no lead was missed. Response time improved by 82%, conversion rates increased by 45%, and revenue grew by 38%.'
                },
                {
                  company: 'Financial Services',
                  industry: 'Finance',
                  challenge: 'Inefficient lead qualification and scheduling process',
                  solution: 'Implemented automated lead qualification, routing, and scheduling',
                  results: [
                    { metric: '55%', label: 'Lead Quality' },
                    { metric: '42%', label: 'Conversion Rate' },
                    { metric: '68%', label: 'Efficiency Gain' }
                  ],
                  testimonial: 'Automated lead management improved lead quality by 55% and conversion rates by 42%. The entire process became 68% more efficient.'
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
                Common questions about Lead Management & Scheduling Solutions
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What is Lead Management & Scheduling?',
                  answer: 'Lead Management & Scheduling is an automated system that captures, qualifies, routes, and schedules leads automatically. It includes lead capture, qualification, intelligent routing to sales reps, automated appointment scheduling, and follow-up automation to streamline the entire sales process.'
                },
                {
                  question: 'How does automated lead routing work?',
                  answer: 'Automated lead routing uses rules, availability, territory, and other criteria to automatically assign leads to the right sales rep. You can set up routing rules based on lead source, geography, product interest, sales rep availability, and more. Leads are routed instantly when captured.'
                },
                {
                  question: 'Can leads schedule appointments online?',
                  answer: 'Yes, leads can schedule appointments directly through your website, landing pages, or via email links. They can see real-time availability, select preferred times, and book appointments 24/7. Automated reminders are sent via email and SMS to reduce no-shows.'
                },
                {
                  question: 'Which calendar systems are supported?',
                  answer: 'We support integration with Google Calendar, Microsoft Outlook, Apple Calendar, and other major calendar systems. The scheduling system syncs with your calendar in real-time to show accurate availability and prevent double-booking.'
                },
                {
                  question: 'How does lead qualification work?',
                  answer: 'Lead qualification uses automated scoring based on lead behavior, demographics, firmographics, and engagement. Leads are scored and qualified automatically, then routed to the appropriate sales rep or nurturing campaign based on their score and profile.'
                },
                {
                  question: 'Can I integrate with my CRM?',
                  answer: 'Yes, we integrate with all major CRM platforms including Salesforce, HubSpot, Microsoft Dynamics, Zoho CRM, and others. Lead data, scheduling information, and activities are automatically synced with your CRM in real-time.'
                },
                {
                  question: 'What about lead nurturing?',
                  answer: 'Our system includes automated lead nurturing with email sequences, drip campaigns, and behavioral triggers. Leads are automatically enrolled in nurturing campaigns based on their status, behavior, and profile. You can track campaign performance and optimize for better results.'
                },
                {
                  question: 'How long does setup take?',
                  answer: 'Setup typically takes 2-4 weeks depending on your requirements, integrations, and customization needs. This includes lead capture setup, routing configuration, scheduling setup, CRM integration, and team training. Our team handles the entire setup process.'
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
              Ready to Automate Your Lead Management?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get started with Lead Management & Scheduling Solutions today. Automate lead capture, 
              routing, and scheduling to convert more leads into customers.
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

export default LeadManagementScheduling;
