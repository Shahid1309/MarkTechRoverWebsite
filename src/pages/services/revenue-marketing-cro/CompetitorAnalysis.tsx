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
  Megaphone,
  Share2,
  Video,
  Image,
  Mail as MailIcon,
  Smartphone as MobileIcon
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const CompetitorAnalysis = () => {
  const [activeSection, setActiveSection] = useState('deliverables');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedDeliverable, setExpandedDeliverable] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const navItems = [
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },{ id: 'technology', label: 'Digital Marketing Competitor Analysis Technology', icon: <Cpu className="h-4 w-4" /> },
    { id: 'case-studies', label: 'Digital Marketing Competitor Analysis Case Studies', icon: <Trophy className="h-4 w-4" /> },
    { id: 'approach', label: 'Digital Marketing Competitor Analysis Approach', icon: <Rocket className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  // Handle scroll for sticky navigation and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 800;
      setIsNavSticky(scrollPosition > heroHeight);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    title: 'Digital Marketing Competitor Analysis Delhi | Best Competitor Analysis Agency NCR',
    description: 'Leading digital marketing competitor analysis services in Delhi NCR. Best competitor analysis agency in Delhi offering comprehensive competitive intelligence. Professional competitor analysis services India with proven results.',
    keywords: [
      'Digital Marketing Competitor Analysis Delhi', 'Best competitor analysis agency in Delhi', 'Competitor analysis services NCR', 'Best competitor analysis services in India', 'Professional competitor analysis services India', 'Competitor analysis experts in Delhi NCR', 'Competitor analysis company India', 'SEO services in Delhi', 'Competitive intelligence Delhi', 'Competitor analysis India'
    ],
    url: '/services/revenue-marketing-cro/competitor-analysis',
    type: 'website',
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'Ritik Kumar Poddar',
    section: 'Digital Marketing Competitor Analysis',
    tags: ['Competitor Analysis', 'Competitive Intelligence', 'Market Analysis', 'Competitive Research', 'Competitive Strategy'],
    image: '/images/competitor-analysis.webp'
  };

  const deliverables = [
    {
      id: 1,
      title: 'Google Local Services Ads Setup',
      description: 'Complete setup and optimization of Google Local Services Ads campaigns',
      icon: <Target className="h-6 w-6" />,
      features: [
        'Local Services Ads account setup',
        'Service area configuration',
        'Business verification and approval',
        'Ad creative optimization',
        'Budget management and optimization',
        'Performance tracking and reporting'
      ],
      expanded: true
    },
    {
      id: 2,
      title: 'Local Services Ads Management',
      description: 'Ongoing management and optimization of Local Services Ads campaigns',
      icon: <Settings className="h-6 w-6" />,
      features: [
        'Daily campaign monitoring',
        'Lead quality optimization',
        'Budget allocation and management',
        'Ad performance optimization',
        'Competitor analysis and strategy',
        'Monthly performance reporting'
      ],
      expanded: false
    },
    {
      id: 3,
      title: 'Local Services Lead Management',
      description: 'Comprehensive lead management and follow-up systems',
      icon: <Users className="h-6 w-6" />,
      features: [
        'Lead tracking and management',
        'Automated lead response systems',
        'Lead quality scoring',
        'Follow-up sequence optimization',
        'Lead conversion tracking',
        'ROI analysis and reporting'
      ],
      expanded: false
    },
    {
      id: 4,
      title: 'Local Services Optimization',
      description: 'Continuous optimization for maximum local services performance',
      icon: <TrendingUp className="h-6 w-6" />,
      features: [
        'Service area optimization',
        'Ad creative A/B testing',
        'Lead quality improvement',
        'Cost per lead optimization',
        'Conversion rate optimization',
        'Competitive positioning'
      ],
      expanded: false
    },
    {
      id: 5,
      title: 'Local Services Analytics',
      description: 'Comprehensive analytics and reporting for Local Services Ads',
      icon: <BarChart3 className="h-6 w-6" />,
      features: [
        'Real-time performance tracking',
        'Lead quality analysis',
        'Cost per lead reporting',
        'ROI calculation and analysis',
        'Competitive benchmarking',
        'Custom dashboard creation'
      ],
      expanded: false
    },
    {
      id: 6,
      title: 'Local Services Strategy',
      description: 'Strategic planning and optimization for local services success',
      icon: <Rocket className="h-6 w-6" />,
      features: [
        'Market analysis and research',
        'Competitive strategy development',
        'Service area expansion planning',
        'Seasonal campaign optimization',
        'Long-term growth planning',
        'Performance forecasting'
      ],
      expanded: false
    }
  ];

  return (
    <>
      <PageSEO config={seoConfig} />
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Animated Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 transition-all duration-1000">
                <Target className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Animated Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000">
              Hire Competitor Analysis Services
            </h1>

            {/* Animated Description */}
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300">
              Professional competitor analysis services in Delhi NCR. Get expert competitor analysis solutions with proven results and ROI.
            </p>
            
            {/* Interactive Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-500">
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  500+
                </div>
                <div className="text-gray-300 font-semibold text-sm">Happy Clients</div>
                <div className="text-gray-500 text-xs">Across India</div>
                <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  1000+
                </div>
                <div className="text-gray-300 font-semibold text-sm">Successful Campaigns</div>
                <div className="text-gray-500 text-xs">Delivered</div>
                <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  300%
                </div>
                <div className="text-gray-300 font-semibold text-sm">Average ROI</div>
                <div className="text-gray-500 text-xs">For Our Clients</div>
                <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  ₹3,021,182,299
                </div>
                <div className="text-gray-300 font-semibold text-sm">Revenue Driven</div>
                <div className="text-gray-500 text-xs">For Our Clients</div>
                <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 transition-all duration-1000 delay-700">
              <div className="flex items-center space-x-2 whitespace-nowrap flex-shrink-0 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">Google Partner</span>
              </div>
              <div className="flex items-center space-x-2 whitespace-nowrap flex-shrink-0 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300 text-sm">Certified Agency</span>
              </div>
              <div className="flex items-center space-x-2 whitespace-nowrap flex-shrink-0 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">5+ Years Experience</span>
              </div>
            </div>
            
            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Get Free Competitor Analysis Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <button
                onClick={() => scrollToSection()}
                className="group inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-500/20 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">View Packages</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Floating Action Button */}
            <div className="mt-8 transition-all duration-1000 delay-1200">
              <button className="group inline-flex items-center space-x-2 whitespace-nowrap flex-shrink-0 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-700/50">
                <Play className="h-4 w-4" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </section>

      {/* Floating Sticky Sub Menu */}
      <div className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${isNavSticky ? 'top-32 opacity-100 scale-100' : 'top-0 opacity-0 scale-95 pointer-events-none'}`}>
        {/* Floating Background Element */}
        <div className="relative">
          {/* Animated Background Ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 rounded-full"></div>
          
          {/* Main Navigation Container */}
          <div className="relative bg-black/20 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-2xl shadow-purple-500/20">
            <nav className="flex items-center space-x-1 px-6 py-3 overflow-x-auto flex-nowrap">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${activeSection === item.id ? 'text-purple-300 bg-gradient-to-r from-purple-500/30 to-purple-400/30 border border-purple-400/50 shadow-lg shadow-purple-500/25' : 'text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/20 to-purple-400/20 hover:border-purple-300/30'} px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap flex-shrink-0 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg`}
                >
                  {item.icon}
                  <span className="hidden sm:inline whitespace-nowrap">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
          
          {/* Floating Decorative Elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>
          {/* Deliverables Section */}
          <section id="deliverables" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Deliverables: What You Get Each Month
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive competitor analysis solutions designed for business growth. 
                  Best competitor analysis agency in Delhi NCR delivering measurable results.
              </p>
            </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deliverables.map((deliverable, index) => (
                <div
                  key={deliverable.id}
                    className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                      expandedDeliverable === index ? 'ring-2 ring-purple-500 shadow-lg shadow-purple-500/25' : ''
                    }`}
                    onClick={() => setExpandedDeliverable(expandedDeliverable === index ? -1 : index)}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/30">
                        {deliverable.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{deliverable.title}</h3>
                        <p className="text-purple-300 text-sm">Competitor Analysis Service</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{deliverable.description}</p>
                    
                    <div className="space-y-3">
                      {deliverable.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                </div>
              ))}
              </div>
            </div>
          </section>

          

          {/* Technology Section */}
          <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Digital Marketing Competitor Analysis Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  The tools and platforms we use to collect, compare, and visualize competitive intelligence across SEO,
                  paid, and funnels—so you always see a clear picture of your market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                    title: 'Search & SEO Intelligence',
                    description: 'Understanding how competitors win in search and where the gaps are.',
                  icon: <Search className="h-8 w-8" />,
                    features: [
                      'Keyword & Topic Research Platforms',
                      'SERP & Ranking Trackers',
                      'Content Gap Analysis',
                      'Backlink & Authority Tools',
                      'On-page & Technical Audits',
                    ],
                  },
                  {
                    title: 'Ads & Funnel Visibility',
                    description: 'Seeing competitor ads, offers, and funnel flows end-to-end.',
                    icon: <BarChart3 className="h-8 w-8" />,
                    features: [
                      'Ad Library & Creative Scraping',
                      'PPC & Display Monitoring',
                      'Landing Page & Funnel Teardowns',
                      'Offer & Messaging Benchmarking',
                      'Conversion Path Mapping',
                    ],
                },
                {
                  title: 'Analytics & Reporting',
                    description: 'Turning raw data into clear, shareable insight.',
                    icon: <Activity className="h-8 w-8" />,
                    features: [
                      'Google Analytics & Search Console',
                      'Looker Studio Dashboards',
                      'Competitor Benchmark Scorecards',
                      'Channel & Funnel Comparisons',
                      'Executive-ready Presentations',
                    ],
                  },
                  {
                    title: 'Data Integration',
                    description: 'Combining multiple data sources into a single competitive view.',
                    icon: <Database className="h-8 w-8" />,
                    features: [
                      'SEO & Ads Data Pipelines',
                      'CRM & Revenue Feeds',
                      'ETL & Data Normalization',
                      'Custom Data Models',
                      'Automated Refresh & QA',
                    ],
                  },
                  {
                    title: 'Monitoring & Alerts',
                    description: 'Staying ahead of competitor moves instead of reacting late.',
                  icon: <Eye className="h-8 w-8" />,
                    features: [
                      'Ranking & Visibility Alerts',
                      'New Page & Offer Detection',
                      'Ad Creative & Budget Shifts',
                      'Pricing & Promotion Tracking',
                      'Quarterly Landscape Reviews',
                    ],
                  },
                  {
                    title: 'Collaboration & Planning',
                    description: 'Making insights easy to act on for leadership, marketing, and sales.',
                    icon: <Users className="h-8 w-8" />,
                    features: [
                      'Shared Roadmaps & Backlogs',
                      'Cross-functional Workshops',
                      'Prioritized Opportunity Lists',
                      'Playbooks & Battlecards',
                      'Regular Strategy Reviews',
                    ],
                  },
              ].map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/60 rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                  >
                  <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-purple-300">{tech.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 whitespace-nowrap flex-shrink-0">
                          <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section
            id="case-studies"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-purple-500/25">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Success Stories That Speak
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Real results from our digital marketing competitor analysis programs. See how better intel turned
                  into smarter strategy and revenue growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                    title: 'SaaS Competitive Playbook',
                    description:
                      'Mapped competitor funnels, offers, and messaging to redesign positioning and digital strategy for a B2B SaaS brand.',
                    metrics: [
                      {
                        label: 'Demo Volume',
                        value: '260%',
                        icon: <TrendingUp className="h-5 w-5" />,
                        color: 'from-green-500 to-emerald-600',
                      },
                      {
                        label: 'Win Rate',
                        value: '35%',
                        icon: <Percent className="h-5 w-5" />,
                        color: 'from-purple-500 to-pink-600',
                      },
                      {
                        label: 'Timeframe',
                        value: '6 Months',
                        icon: <Clock className="h-5 w-5" />,
                        color: 'from-blue-500 to-cyan-600',
                      },
                    ],
                    highlight: 'Strategic Shift',
                    gradient: 'from-purple-600/20 to-blue-600/20',
                  },
                  {
                    title: 'Ecommerce Category Battle',
                    description:
                      'Built a competitor landscape for a D2C brand including pricing, creatives, and keyword share-of-voice.',
                    metrics: [
                      {
                        label: 'Share of Voice',
                        value: '210%',
                        icon: <BarChart3 className="h-5 w-5" />,
                        color: 'from-blue-500 to-indigo-600',
                      },
                      {
                        label: 'ROAS Improvement',
                        value: '48%',
                        icon: <DollarSign className="h-5 w-5" />,
                        color: 'from-yellow-500 to-amber-600',
                      },
                      {
                        label: 'Timeframe',
                        value: '4 Months',
                        icon: <Clock className="h-5 w-5" />,
                        color: 'from-blue-500 to-cyan-600',
                      },
                    ],
                    highlight: 'Category Edge',
                    gradient: 'from-blue-600/20 to-indigo-600/20',
                  },
                  {
                    title: 'Local Services Advantage',
                    description:
                      'Analyzed local competitor ads, landing pages, and SERP presence for a multi-city services company.',
                    metrics: [
                      {
                        label: 'Lead Quality',
                        value: '180%',
                        icon: <Users className="h-5 w-5" />,
                        color: 'from-green-500 to-emerald-600',
                      },
                      {
                        label: 'CPL Reduction',
                        value: '37%',
                        icon: <Activity className="h-5 w-5" />,
                        color: 'from-yellow-500 to-amber-600',
                      },
                      {
                        label: 'Cities Analyzed',
                        value: '25+',
                        icon: <MapPin className="h-5 w-5" />,
                        color: 'from-blue-500 to-cyan-600',
                      },
                    ],
                    highlight: 'Local Dominance',
                    gradient: 'from-purple-600/20 to-violet-600/20',
                  },
                  {
                    title: 'Enterprise Digital Footprint Audit',
                    description:
                      'Benchmarked global competitors on content, SEO, and paid media to guide a full-funnel roadmap.',
                    metrics: [
                      {
                        label: 'Content Gaps Closed',
                        value: '70%',
                        icon: <FileText className="h-5 w-5" />,
                        color: 'from-purple-500 to-violet-600',
                      },
                      {
                        label: 'Organic Visibility',
                        value: '220%',
                        icon: <Search className="h-5 w-5" />,
                        color: 'from-blue-500 to-indigo-600',
                      },
                      {
                        label: 'Timeframe',
                        value: '9 Months',
                        icon: <Clock className="h-5 w-5" />,
                        color: 'from-blue-500 to-cyan-600',
                      },
                    ],
                    highlight: 'Enterprise Impact',
                    gradient: 'from-purple-600/20 to-pink-600/20',
                  },
              ].map((study, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl border border-purple-500/20 overflow-hidden hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 transform hover:-translate-y-3"
                  >
                    {/* Animated Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Highlight Badge */}
                    {study.highlight && (
                      <div className="absolute top-5 right-5 z-10">
                        <div className="relative">
                          <span className="relative px-4 py-1.5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg shadow-purple-500/50 backdrop-blur-sm">
                            {study.highlight}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full blur opacity-50 animate-pulse"></div>
                  </div>
                      </div>
                    )}

                    {/* Content Container */}
                    <div className="relative z-10">
                      {/* Header Section */}
                      <div className="p-8 pb-6">
                        <div className="flex items-start gap-5 mb-6">
                          <div className="relative">
                            <div className="p-4 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-2xl border-2 border-purple-400/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-purple-500/20">
                              <Trophy className="h-7 w-7 text-purple-200" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
                          </div>
                          <div className="flex-1 pt-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-purple-100 transition-all duration-300">
                              {study.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                              {study.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Metrics Section */}
                      <div className="px-8 pb-8">
                        <div className="grid grid-cols-3 gap-3">
                      {study.metrics.map((metric, metricIndex) => (
                            <div
                              key={metricIndex}
                              className="relative group/metric overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-800/60 rounded-xl p-4 border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                            >
                              {/* Metric Gradient Background */}
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover/metric:opacity-10 transition-opacity duration-300`}
                              ></div>

                              {/* Icon */}
                              <div
                                className={`relative flex items-center justify-center mb-3 p-2 rounded-lg border ${
                                  metric.color.includes('green')
                                    ? 'bg-green-500/20 border-green-500/30'
                                    : metric.color.includes('yellow')
                                    ? 'bg-yellow-500/20 border-yellow-500/30'
                                    : metric.color.includes('blue') && !metric.color.includes('cyan')
                                    ? 'bg-blue-500/20 border-blue-500/30'
                                    : metric.color.includes('cyan')
                                    ? 'bg-cyan-500/20 border-cyan-500/30'
                                    : metric.color.includes('purple')
                                    ? 'bg-purple-500/20 border-purple-500/30'
                                    : metric.color.includes('pink')
                                    ? 'bg-pink-500/20 border-pink-500/30'
                                    : metric.color.includes('indigo')
                                    ? 'bg-indigo-500/20 border-indigo-500/30'
                                    : 'bg-violet-500/20 border-violet-500/30'
                                }`}
                              >
                                <div
                                  className={
                                    metric.color.includes('green')
                                      ? 'text-green-300'
                                      : metric.color.includes('yellow')
                                      ? 'text-yellow-300'
                                      : metric.color.includes('blue') && !metric.color.includes('cyan')
                                      ? 'text-blue-300'
                                      : metric.color.includes('cyan')
                                      ? 'text-cyan-300'
                                      : metric.color.includes('purple')
                                      ? 'text-purple-300'
                                      : metric.color.includes('pink')
                                      ? 'text-pink-300'
                                      : metric.color.includes('indigo')
                                      ? 'text-indigo-300'
                                      : 'text-violet-300'
                                  }
                                >
                                  {metric.icon}
                                </div>
                              </div>

                              {/* Value */}
                              <div className="relative">
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover/metric:text-transparent group-hover/metric:bg-clip-text group-hover/metric:bg-gradient-to-r group-hover/metric:from-purple-300 group-hover/metric:to-purple-100 transition-all duration-300">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-gray-400 font-medium">{metric.label}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Accent Bar */}
                      <div className="relative h-1.5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 group-hover:from-purple-400 group-hover:via-purple-500 group-hover:to-purple-400 transition-all duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </section>

          {/* Approach Section */}
          <section
            id="approach"
            className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-purple-500/25">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Our Proven Competitor Analysis Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  A structured methodology that turns competitor research into clear strategic moves across SEO,
                  paid media, and funnels.
              </p>
            </div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Connecting Line - Desktop Only */}
                <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                {
                  step: '01',
                      title: 'Landscape & Benchmarking',
                      description:
                        'Identify direct and indirect competitors, benchmark their traffic, ads, content, and funnel performance.',
                      icon: <Globe className="h-6 w-6" />,
                      color: 'from-blue-500 to-blue-600',
                },
                {
                  step: '02',
                      title: 'Deep Channel Analysis',
                      description:
                        'Audit competitor SEO, paid search, social ads, creatives, and messaging to reveal what truly works.',
                      icon: <Search className="h-6 w-6" />,
                      color: 'from-purple-500 to-purple-600',
                },
                {
                  step: '03',
                      title: 'Gap & Opportunity Mapping',
                      description:
                        'Translate insights into clear gaps, opportunities, and positioning plays tailored to your business.',
                      icon: <Lightbulb className="h-6 w-6" />,
                      color: 'from-green-500 to-green-600',
                },
                {
                  step: '04',
                      title: 'Strategic Roadmap',
                      description:
                        'Build a prioritized action plan across SEO, ads, content, and CRO to systematically out-perform competitors.',
                      icon: <Zap className="h-6 w-6" />,
                      color: 'from-orange-500 to-orange-600',
                    },
              ].map((step, index) => (
                    <div key={index} className="relative group">
                      {/* Step Card */}
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
                        {/* Step Number Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg border-4 border-gray-900 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                        </div>

                        {/* Icon Container */}
                        <div className="flex justify-center mb-6 mt-4">
                          <div
                            className={`p-4 rounded-2xl border border-purple-500/30 group-hover:scale-110 transition-transform duration-300 ${
                              step.color === 'from-blue-500 to-blue-600'
                                ? 'bg-blue-500/20'
                                : step.color === 'from-purple-500 to-purple-600'
                                ? 'bg-purple-500/20'
                                : step.color === 'from-green-500 to-green-600'
                                ? 'bg-green-500/20'
                                : 'bg-orange-500/20'
                            }`}
                          >
                            <div
                              className={`${
                                step.color === 'from-blue-500 to-blue-600'
                                  ? 'text-blue-300'
                                  : step.color === 'from-purple-500 to-purple-600'
                                  ? 'text-purple-300'
                                  : step.color === 'from-green-500 to-green-600'
                                  ? 'text-green-300'
                                  : 'text-orange-300'
                              }`}
                            >
                        {step.icon}
                      </div>
                    </div>
                  </div>

                        {/* Content */}
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>

                      {/* Arrow Connector - Desktop Only */}
                      {index < 3 && (
                        <div className="hidden lg:block absolute top-24 -right-3 z-20">
                          <ArrowRight className="h-6 w-6 text-purple-500/50" />
                        </div>
                      )}
                </div>
              ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section
            id="faqs"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-purple-500/25">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to know about digital marketing competitor analysis. Clear answers on scope,
                  process, and outcomes.
              </p>
            </div>

              <div className="space-y-4">
                {[
                  {
                    question: 'What is digital marketing competitor analysis and why does it matter?',
                    answer:
                      'Digital marketing competitor analysis is a structured review of your competitors’ traffic, ads, SEO, content, funnels, and offers. Instead of guessing, you see exactly what they are doing to acquire and convert customers. This helps you avoid mistakes, copy what works (ethically), and build strategies that meaningfully differentiate your brand and capture more market share.',
                  },
                  {
                    question: 'What channels and data points do you analyze?',
                    answer:
                      'We analyze search visibility (SEO and paid search), social and display ads, landing pages, pricing, messaging, content strategy, and funnel flows. Where applicable, we also review marketplaces, review profiles, and marketing automation touchpoints. The exact mix is tailored to your industry and the channels that matter most to your buyers.',
                  },
                  {
                    question: 'How long does a competitor analysis project take?',
                    answer:
                      'Most competitor analysis projects take 3–6 weeks depending on the number of competitors, channels, and markets involved. Simpler local analyses can be turned around faster, while complex multi-country B2B landscapes may require more time. We define timelines clearly upfront so you know when to expect insights and recommendations.',
                  },
                  {
                    question: 'What is the typical investment for competitor analysis?',
                    answer:
                      'Engagements typically range from ₹45,000 to ₹2,00,000 based on the depth of analysis, industry complexity, and number of competitors. Sometimes competitor analysis is a one-time strategic project; other times it becomes a quarterly program to keep your strategy current. We scope pricing transparently based on your needs and markets.',
                  },
                  {
                    question: 'What do we receive at the end of the engagement?',
                    answer:
                      'You receive a structured report and/or dashboard covering competitor benchmarks, channel-by-channel breakdowns, content and keyword gaps, funnel analysis, and prioritized recommendations. Most importantly, we translate insights into a clear roadmap: what to change, launch, stop, or double down on across your digital marketing.',
                  },
                  {
                    question: 'Can you help implement the recommendations?',
                    answer:
                      'Yes. Many clients engage us not only for competitor analysis but also for ongoing execution across SEO, paid media, content, CRO, and marketing automation. You can choose to keep us as your strategic partner to implement the roadmap or use your internal teams—we structure our deliverables so they are execution-ready either way.',
                  },
                  {
                    question: 'How often should competitor analysis be repeated?',
                    answer:
                      'In fast-moving categories we recommend at least a light refresh every quarter, with a deeper review every 6–12 months. In slower-moving B2B niches, a comprehensive analysis every 12 months may be enough. We can set up recurring programs so you always have up-to-date insight into competitor moves and market shifts.',
                  },
                  {
                    question: 'Do you work with businesses outside Delhi NCR or India?',
                    answer:
                      'Yes. We work with clients across India and internationally, including SaaS, ecommerce, and services brands. Our research tools, frameworks, and communication are all remote-friendly, which means we can analyze competitors in your target geographies whether they are local or global players.',
                  },
              ].map((faq, index) => (
                  <div
                    key={index}
                    className={`group bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl border transition-all duration-300 overflow-hidden ${
                      expandedFaq === index
                        ? 'border-purple-500/60 shadow-xl shadow-purple-500/20'
                        : 'border-purple-500/20 hover:border-purple-500/40'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                    >
                      <h3
                        className={`text-lg font-semibold pr-8 transition-colors duration-300 ${
                          expandedFaq === index ? 'text-purple-300' : 'text-white group-hover:text-purple-300'
                        }`}
                      >
                        {faq.question}
                      </h3>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center transition-all duration-300 ${
                          expandedFaq === index
                            ? 'bg-purple-500/20 border-purple-500/50 rotate-180'
                            : 'group-hover:bg-purple-500/15 group-hover:border-purple-500/40'
                        }`}
                      >
                        <ChevronDown
                          className={`h-5 w-5 text-purple-300 transition-transform duration-300 ${
                            expandedFaq === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <div className="pt-2 border-t border-purple-500/20">
                          <p className="text-gray-300 leading-relaxed mt-4">{faq.answer}</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    {expandedFaq === index && (
                      <div className="h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500"></div>
                    )}
                </div>
              ))}
              </div>
            </div>
          </section>
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Local Services?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Best local services agency in Delhi NCR offering comprehensive Google Local Services Ads management. 
              Get started with professional local services management India today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-purple-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Competitor Analysis Quote
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-purple-700 text-white font-semibold rounded-xl hover:bg-purple-600 transition-all duration-300">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompetitorAnalysis; 