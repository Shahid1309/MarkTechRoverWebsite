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
  Building2,
  Briefcase,
  Network,
  Link2,
  Workflow,
  Filter,
  Bell,
  Mail as MailIcon,
  Repeat,
  RefreshCcw as RefreshIcon,
  MousePointerClick,
  Eye as EyeIcon,
  Info,
  Book,
  GraduationCap,
  LineChart
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const DataDrivenMarketingGuide = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<number>(0);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Rocket className="h-4 w-4" /> },
    { id: 'features', label: 'Key Features', icon: <Zap className="h-4 w-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'strategies', label: 'Strategies', icon: <Target className="h-4 w-4" /> },
    { id: 'implementation', label: 'Implementation', icon: <Settings className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, []);

  // Handle scroll for sticky navigation and active section detection
  useEffect(() => {
    const sectionIds = ['overview', 'features', 'benefits', 'strategies', 'implementation', 'faqs'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 600;
      setIsNavSticky(scrollPosition > heroHeight);

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
    title: 'Data-Driven Marketing Guide | Complete Guide to Data-Driven Marketing | MarkTechRover',
    description: 'Learn what data-driven marketing is, how it works, and why businesses need it. Complete guide to data-driven marketing strategies, features, benefits, and implementation. Best data-driven marketing guide in Delhi NCR & India.',
    keywords: [
      'Data-Driven Marketing', 'Data-Driven Marketing Guide', 'Marketing Analytics', 'Marketing Data',
      'Data-Driven Strategy', 'Marketing Intelligence', 'Customer Data Analytics', 'Marketing Metrics',
      'Data-Driven Marketing India', 'Marketing Analytics Delhi', 'Best Data-Driven Marketing',
      'Marketing Data Analysis', 'Customer Insights', 'Marketing Performance Analytics'
    ],
    url: '/services/ai-technology/data-driven-marketing-guide',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['Data-Driven Marketing', 'Marketing Analytics', 'Marketing Strategy', 'Data Analytics'],
    image: '/images/data-driven-marketing-guide.webp'
  };

  const keyFeatures = [
    {
      id: 1,
      title: 'Data Collection & Integration',
      description: 'Collect and integrate data from multiple marketing channels and customer touchpoints',
      icon: <Database className="h-8 w-8" />,
      features: [
        'Multi-channel data collection',
        'Customer behavior tracking',
        'Campaign performance data',
        'Website analytics integration',
        'Social media metrics',
        'Email marketing data'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'Advanced Analytics & Insights',
      description: 'Analyze marketing data to uncover insights and identify optimization opportunities',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        'Customer segmentation analysis',
        'Campaign performance analysis',
        'ROI and attribution modeling',
        'Predictive analytics',
        'Trend identification',
        'Competitive benchmarking'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 3,
      title: 'Customer Journey Mapping',
      description: 'Map customer journeys using data to understand touchpoints and optimize experiences',
      icon: <Network className="h-8 w-8" />,
      features: [
        'Journey visualization',
        'Touchpoint analysis',
        'Conversion funnel tracking',
        'Drop-off identification',
        'Path optimization',
        'Experience enhancement'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 4,
      title: 'Marketing Attribution',
      description: 'Measure marketing attribution and calculate ROI across all channels and campaigns',
      icon: <DollarSign className="h-8 w-8" />,
      features: [
        'Multi-touch attribution',
        'Channel ROI analysis',
        'Campaign effectiveness',
        'Budget optimization',
        'Revenue attribution',
        'Cost per acquisition tracking'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'Real-Time Dashboards',
      description: 'Access real-time marketing dashboards and automated reports for data-driven decisions',
      icon: <Monitor className="h-8 w-8" />,
      features: [
        'Real-time dashboards',
        'Custom report generation',
        'Automated reporting',
        'KPI tracking',
        'Performance monitoring',
        'Executive summaries'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'Predictive Analytics',
      description: 'Use predictive analytics to forecast trends and optimize future marketing efforts',
      icon: <TrendingUp className="h-8 w-8" />,
      features: [
        'Trend forecasting',
        'Customer lifetime value prediction',
        'Churn prediction',
        'Demand forecasting',
        'Campaign performance prediction',
        'Market opportunity analysis'
      ],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-500/10 to-violet-400/10',
      borderColor: 'border-violet-500/20',
      textColor: 'text-violet-300'
    }
  ];

  const benefits = [
    {
      title: 'Improved Marketing ROI',
      description: 'Increase marketing ROI by making data-driven decisions and optimizing campaigns',
      icon: <TrendingUp className="h-8 w-8" />,
      metric: '65%',
      label: 'ROI Improvement'
    },
    {
      title: 'Better Customer Targeting',
      description: 'Target the right customers with precision using data-driven segmentation',
      icon: <Target className="h-8 w-8" />,
      metric: '58%',
      label: 'Targeting Accuracy'
    },
    {
      title: 'Enhanced Campaign Performance',
      description: 'Improve campaign performance through data-driven optimization and insights',
      icon: <BarChart className="h-8 w-8" />,
      metric: '72%',
      label: 'Performance Boost'
    },
    {
      title: 'Informed Decision Making',
      description: 'Make informed marketing decisions backed by comprehensive data and analytics',
      icon: <Brain className="h-8 w-8" />,
      metric: '80%',
      label: 'Better Decisions'
    }
  ];

  const strategies = [
    {
      type: 'Customer Segmentation',
      description: 'Divide your customer base into distinct groups based on data-driven insights',
      icon: <Users className="h-8 w-8" />,
      benefits: [
        'Personalized marketing messages',
        'Improved targeting accuracy',
        'Better resource allocation',
        'Higher conversion rates',
        'Increased customer satisfaction',
        'Optimized marketing spend'
      ],
      challenges: [
        'Requires quality data',
        'Needs regular updates',
        'Can be complex to implement'
      ],
      bestFor: 'Businesses with diverse customer bases'
    },
    {
      type: 'Attribution Modeling',
      description: 'Understand which marketing touchpoints contribute to conversions',
      icon: <Link2 className="h-8 w-8" />,
      benefits: [
        'Accurate ROI measurement',
        'Better budget allocation',
        'Optimized channel mix',
        'Improved campaign planning',
        'Data-driven decisions',
        'Reduced wasted spend'
      ],
      challenges: [
        'Complex to set up',
        'Requires multiple data sources',
        'Needs ongoing refinement'
      ],
      bestFor: 'Multi-channel marketing campaigns'
    },
    {
      type: 'Predictive Analytics',
      description: 'Use machine learning to predict customer behavior and optimize marketing',
      icon: <Brain className="h-8 w-8" />,
      benefits: [
        'Forecast trends',
        'Predict customer lifetime value',
        'Identify churn risks',
        'Optimize timing',
        'Improve targeting',
        'Increase efficiency'
      ],
      challenges: [
        'Requires technical expertise',
        'Needs historical data',
        'Ongoing model refinement'
      ],
      bestFor: 'Businesses with sufficient historical data'
    }
  ];

  const implementationSteps = [
    {
      step: '01',
      title: 'Data Collection Setup',
      description: 'Set up data collection from all marketing channels and touchpoints',
      icon: <Database className="h-6 w-6" />,
      details: [
        'Configure data sources',
        'Set up tracking tools',
        'Integrate marketing platforms',
        'Establish data pipelines'
      ]
    },
    {
      step: '02',
      title: 'Data Analysis & Processing',
      description: 'Analyze collected data to extract insights and identify patterns',
      icon: <BarChart className="h-6 w-6" />,
      details: [
        'Data cleaning and processing',
        'Statistical analysis',
        'Pattern identification',
        'Insight extraction'
      ]
    },
    {
      step: '03',
      title: 'Strategy Development',
      description: 'Develop data-driven marketing strategies based on insights',
      icon: <Target className="h-6 w-6" />,
      details: [
        'Strategy formulation',
        'Channel optimization',
        'Budget allocation',
        'Campaign planning'
      ]
    },
    {
      step: '04',
      title: 'Implementation & Testing',
      description: 'Implement strategies and test their effectiveness',
      icon: <Rocket className="h-6 w-6" />,
      details: [
        'Campaign execution',
        'A/B testing',
        'Performance monitoring',
        'Initial optimization'
      ]
    },
    {
      step: '05',
      title: 'Measurement & Analysis',
      description: 'Measure results and analyze performance data',
      icon: <LineChart className="h-6 w-6" />,
      details: [
        'KPI tracking',
        'Performance analysis',
        'ROI calculation',
        'Attribution analysis'
      ]
    },
    {
      step: '06',
      title: 'Optimization & Scaling',
      description: 'Continuously optimize based on data and scale successful strategies',
      icon: <TrendingUp className="h-6 w-6" />,
      details: [
        'Performance optimization',
        'Strategy refinement',
        'Scale successful campaigns',
        'Continuous improvement'
      ]
    }
  ];

  return (
    <PageSEO config={seoConfig}>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-visible">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, opacity: 0.5 }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(59,130,246,0.02)_50%,transparent_70%)] bg-[length:100px_100px] animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 10, isolation: 'isolate' }}>
            <div className="text-center max-w-5xl mx-auto" style={{ position: 'relative', zIndex: 10 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-8" style={{ position: 'relative', zIndex: 10 }}>
                <BarChart className="h-4 w-4 text-blue-300" />
                <span className="text-sm font-medium text-blue-200">Complete Data-Driven Marketing Guide</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Data Driven Marketing Strategy Guide
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Learn everything about data-driven marketing - what it is, how it works, key strategies, 
                and how to implement it for your business success.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Get Marketing Consultation
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <Book className="h-5 w-5 mr-2" />
                  Read More
                </button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { value: '65%', label: 'ROI Improvement' },
                  { value: '58%', label: 'Targeting Accuracy' },
                  { value: '72%', label: 'Performance Boost' },
                  { value: '80%', label: 'Better Decisions' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 backdrop-blur-sm">
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

        {/* Stats Section */}
        <section className="relative py-16 bg-gradient-to-r from-gray-900 via-blue-900/20 to-gray-900 border-y border-blue-500/10">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent mb-2">73%</div>
                <div className="text-gray-300">Marketers Using Data-Driven Approach</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent mb-2">$45B</div>
                <div className="text-gray-300">Marketing Analytics Market Size</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent mb-2">3x</div>
                <div className="text-gray-300">Better ROI vs Traditional Marketing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        {isNavSticky && (
          <div className="fixed top-20 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-blue-500/20 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-2 overflow-x-auto py-3 scrollbar-hide">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 scale-105'
                        : 'text-gray-300 hover:text-blue-300 hover:bg-blue-500/10'
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                What is Data-Driven Marketing?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Data-driven marketing is an approach that uses data analytics, customer insights, and marketing 
                intelligence to create and optimize marketing strategies. It involves collecting data from various 
                sources, analyzing it to extract insights, and using those insights to make informed marketing decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data Collection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Collect and integrate data from multiple marketing channels and customer touchpoints.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Analytics & Insights</h3>
                <p className="text-gray-300 leading-relaxed">
                  Analyze marketing data to uncover insights and identify optimization opportunities.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Strategy Optimization</h3>
                <p className="text-gray-300 leading-relaxed">
                  Use data insights to optimize marketing strategies and improve campaign performance.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-900/40 rounded-2xl border border-blue-500/30 p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Businesses Need Data-Driven Marketing</h3>
                  <ul className="space-y-3">
                    {[
                      'Make informed marketing decisions based on data',
                      'Improve ROI through optimization',
                      'Better understand your customers',
                      'Optimize marketing spend and budget allocation',
                      'Measure and track marketing performance',
                      'Identify trends and opportunities'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/20 rounded-xl p-6 border border-blue-500/30">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-blue-300 mb-1">73%</div>
                        <div className="text-xs text-gray-400">Using Data-Driven</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-blue-300 mb-1">65%</div>
                        <div className="text-xs text-gray-400">ROI Improvement</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-blue-300 mb-1">72%</div>
                        <div className="text-xs text-gray-400">Performance Boost</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-blue-300 mb-1">80%</div>
                        <div className="text-xs text-gray-400">Better Decisions</div>
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
                Key Data-Driven Marketing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Essential features that make data-driven marketing powerful for business growth
              </p>
            </div>

            <div className="space-y-6">
              {keyFeatures.map((feature, index) => (
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

          {/* Benefits Section */}
          <section id="benefits" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Key Benefits of Data-Driven Marketing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                How data-driven marketing transforms businesses and drives growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-blue-500/20 p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/20 border border-blue-500/30 mb-4 inline-block">
                    {benefit.icon}
                  </div>
                  <div className="text-right mb-3">
                    <div className="text-2xl font-bold text-blue-300">{benefit.metric}</div>
                    <div className="text-xs text-gray-400">{benefit.label}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Strategies Section */}
          <section id="strategies" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Data-Driven Marketing Strategies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key strategies to implement data-driven marketing effectively
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strategies.map((strategy, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-blue-500/20 p-8 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/20 border border-blue-500/30 mb-6 inline-block">
                    {strategy.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{strategy.type}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{strategy.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-300 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {strategy.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-rose-300 mb-3">Challenges:</h4>
                    <ul className="space-y-2">
                      {strategy.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="flex items-start space-x-2">
                          <AlertCircle className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold text-blue-300">Best for: </span>
                      {strategy.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation Section */}
          <section id="implementation" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Data-Driven Marketing Implementation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Step-by-step guide to successfully implementing data-driven marketing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {implementationSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-blue-500/20 p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/20 border border-blue-500/30">
                        <div className="text-blue-300">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
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
                Common questions about data-driven marketing
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What is data-driven marketing and why do I need it?',
                  answer: 'Data-driven marketing is an approach that uses data analytics, customer insights, and marketing intelligence to create and optimize marketing strategies. You need it to make informed decisions, improve ROI, better understand customers, optimize marketing spend, and measure performance effectively.'
                },
                {
                  question: 'What data sources are used in data-driven marketing?',
                  answer: 'Data-driven marketing uses data from multiple sources including website analytics, CRM systems, social media platforms, email marketing tools, advertising platforms, customer surveys, sales data, and third-party data providers. The key is integrating all these sources for a comprehensive view.'
                },
                {
                  question: 'How does data-driven marketing improve ROI?',
                  answer: 'Data-driven marketing improves ROI by enabling better targeting, optimizing campaign performance, reducing wasted spend, identifying high-value customers, improving conversion rates, and making informed budget allocation decisions based on actual performance data.'
                },
                {
                  question: 'What metrics are important in data-driven marketing?',
                  answer: 'Important metrics include customer acquisition cost (CAC), customer lifetime value (CLV), return on ad spend (ROAS), conversion rates, attribution metrics, engagement rates, retention rates, and various channel-specific performance metrics. The specific metrics depend on your business goals.'
                },
                {
                  question: 'How long does it take to see results from data-driven marketing?',
                  answer: 'Results can vary, but most businesses start seeing improvements within 4-8 weeks of implementing data-driven marketing. Significant improvements typically occur within 3-6 months as data accumulates and strategies are optimized based on insights.'
                },
                {
                  question: 'Do I need technical expertise for data-driven marketing?',
                  answer: 'While technical expertise helps, it\'s not always required. Many data-driven marketing platforms provide user-friendly interfaces and automated analytics. However, working with experts can help you get the most value from your data and avoid common pitfalls.'
                },
                {
                  question: 'How is data privacy handled in data-driven marketing?',
                  answer: 'Data privacy is critical. We ensure compliance with GDPR, CCPA, and other privacy regulations. This includes obtaining proper consent, implementing data security measures, providing transparency about data usage, and giving users control over their data.'
                },
                {
                  question: 'Can data-driven marketing work for small businesses?',
                  answer: 'Yes, data-driven marketing can work for businesses of all sizes. While large enterprises may have more data, small businesses can start with basic analytics and gradually build their data-driven capabilities. The key is starting with available data and tools.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-blue-500/20 p-6 hover:border-blue-500/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Implement Data-Driven Marketing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get expert data-driven marketing consultation and implementation services. 
              Transform your marketing with data intelligence and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Rocket className="h-5 w-5 mr-2" />
                Get Marketing Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-900/50 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-blue-900/70 transition-all duration-300"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Expert guidance</span>
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

export default DataDrivenMarketingGuide;
