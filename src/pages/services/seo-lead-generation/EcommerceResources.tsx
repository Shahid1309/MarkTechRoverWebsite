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

const EcommerceResources = () => {
  const [activeSection, setActiveSection] = useState('deliverables');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedDeliverable, setExpandedDeliverable] = useState<number>(0);

  const navItems = [
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'packages', label: 'Ecommerce Marketing Resources Packages', icon: <DollarSign className="h-4 w-4" /> },
    { id: 'technology', label: 'Ecommerce Marketing Resources Technology', icon: <Cpu className="h-4 w-4" /> },
    { id: 'case-studies', label: 'Ecommerce Marketing Resources Case Studies', icon: <Trophy className="h-4 w-4" /> },
    { id: 'approach', label: 'Ecommerce Marketing Resources Approach', icon: <Rocket className="h-4 w-4" /> },
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
    title: 'Ecommerce Marketing Resources Delhi | Best Ecommerce Resources Agency NCR',
    description: 'Leading ecommerce marketing resources in Delhi NCR. Best ecommerce resources agency in Delhi offering comprehensive ecommerce marketing resources. Professional ecommerce resources services India with proven results.',
    keywords: [
      'Ecommerce Marketing Resources Delhi', 'Best ecommerce resources agency in Delhi', 'Ecommerce marketing resources NCR', 'Best ecommerce marketing resources in India', 'Professional ecommerce resources services India', 'Ecommerce marketing resources experts in Delhi NCR', 'Ecommerce resources company India', 'SEO services in Delhi', 'Ecommerce marketing resources Delhi', 'Ecommerce resources India'
    ],
    url: '/services/seo-lead-generation/ecommerce-resources',
    type: 'website',
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'Ritik Kumar Poddar',
    section: 'Ecommerce Marketing Resources',
    tags: ['Ecommerce Marketing Resources', 'Ecommerce Resources', 'Ecommerce Guides', 'Ecommerce Education', 'Ecommerce Training'],
    image: '/images/ecommerce-resources.webp'
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

  const localServicesPackages = [
    {
      name: 'Local Services Starter',
      price: '₹45,000',
      period: '/month',
      description: 'Perfect for small businesses starting with Local Services Ads',
      features: [
        'Local Services Ads setup',
        'Basic campaign management',
        'Lead tracking and reporting',
        'Monthly optimization',
        'Email support',
        'Basic analytics dashboard'
      ],
      highlighted: false,
      cta: 'Get Started'
    },
    {
      name: 'Local Services Professional',
      price: '₹85,000',
      period: '/month',
      description: 'Comprehensive Local Services management for growing businesses',
      features: [
        'Everything in Starter, plus:',
        'Advanced campaign optimization',
        'Daily monitoring and management',
        'Lead quality optimization',
        'Competitive analysis',
        'Weekly progress calls',
        'Priority support'
      ],
      highlighted: true,
      cta: 'Most Popular'
    },
    {
      name: 'Local Services Enterprise',
      price: '₹1,50,000',
      period: '/month',
      description: 'Full-service Local Services management for large businesses',
      features: [
        'Everything in Professional, plus:',
        'Multi-location management',
        'Advanced analytics and reporting',
        'Custom lead management systems',
        'Strategic consulting',
        'Dedicated account manager',
        '24/7 priority support'
      ],
      highlighted: false,
      cta: 'Contact Sales'
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
                <BookOpen className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Animated Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000">
              Marktechrover: Best <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent font-extrabold">Ecommerce Marketing Resources</span> in Delhi, NCR & India
            </h1>

            {/* Animated Description */}
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300">
              Comprehensive ecommerce marketing resources and guides. Get expert insights, strategies, and tools to grow your online business with our proven ecommerce resources.
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
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">Google Partner</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300 text-sm">Certified Agency</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
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
                <span className="relative z-10">Get Free Ecommerce Resources Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <button
                onClick={() => scrollToSection('packages')}
                className="group inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-500/20 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">View Packages</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Floating Action Button */}
            <div className="mt-8 transition-all duration-1000 delay-1200">
              <button className="group inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-700/50">
                <Play className="h-4 w-4" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </section>

      {/* Floating Sticky Sub Menu */}
      <div className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isNavSticky 
          ? 'top-32 opacity-100 scale-100' 
          : 'top-0 opacity-0 scale-95 pointer-events-none'
      }`}>
        {/* Floating Background Element */}
        <div className="relative">
          {/* Animated Background Ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
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
                      ? 'text-purple-300 bg-gradient-to-r from-purple-500/30 to-purple-400/30 border border-purple-400/50 shadow-lg shadow-purple-500/25' 
                      : 'text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/20 to-purple-400/20 hover:border-purple-300/30'
                  } px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg`}
                >
                  {item.icon}
                  <span className="hidden sm:inline">{item.label}</span>
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
          <section id="deliverables" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ecommerce Marketing Resources Deliverables
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive Google Local Services Ads management designed for business growth. 
                Best local services agency in Delhi NCR delivering measurable results.
              </p>
            </div>

            <div className="space-y-6">
              {deliverables.map((deliverable, index) => (
                <div
                  key={deliverable.id}
                  className="bg-gray-900 rounded-2xl border border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedDeliverable(expandedDeliverable === index ? -1 : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-purple-100 text-purple-300">
                        {deliverable.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {deliverable.title}
                        </h3>
                        <p className="text-gray-300">{deliverable.description}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
                        expandedDeliverable === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {expandedDeliverable === index && (
                    <div className="px-8 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {deliverable.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Local Services Packages Section */}
          <section id="packages" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ecommerce Marketing Resources Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive Google Local Services Ads management. Best local services agency in India with flexible packages 
                designed for businesses of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {localServicesPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-900 rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                    pkg.highlighted
                      ? 'border-purple-500 shadow-lg scale-105'
                      : 'border-gray-700 hover:border-purple-300'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {pkg.cta}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-purple-300">{pkg.price}</span>
                      <span className="text-gray-500">{pkg.period}</span>
                    </div>
                    <p className="text-gray-300">{pkg.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-100 text-white hover:bg-gray-200'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Section */}
          <section id="technology" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ecommerce Marketing Resources Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced Google Local Services technology stack powering results. 
                Professional local services management India with cutting-edge tools and platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Google Local Services',
                  description: 'Advanced Google Local Services platform management',
                  icon: <Target className="h-8 w-8" />,
                  features: ['Google Local Services Ads', 'Business Profile Optimization', 'Local Services Verification', 'Lead Management', 'Performance Tracking']
                },
                {
                  title: 'Local SEO Tools',
                  description: 'Comprehensive local SEO and optimization tools',
                  icon: <Search className="h-8 w-8" />,
                  features: ['Google My Business', 'Local Citation Management', 'Review Management', 'Local Keyword Research', 'Local Analytics']
                },
                {
                  title: 'Lead Management',
                  description: 'Advanced lead management and tracking systems',
                  icon: <Users className="h-8 w-8" />,
                  features: ['CRM Integration', 'Lead Scoring', 'Automated Follow-up', 'Lead Tracking', 'Conversion Analytics']
                },
                {
                  title: 'Analytics & Reporting',
                  description: 'Comprehensive analytics and reporting solutions',
                  icon: <BarChart3 className="h-8 w-8" />,
                  features: ['Google Analytics 4', 'Local Services Analytics', 'Custom Dashboards', 'ROI Tracking', 'Performance Reports']
                },
                {
                  title: 'Competitive Analysis',
                  description: 'Local competitive intelligence and analysis',
                  icon: <Eye className="h-8 w-8" />,
                  features: ['Competitor Monitoring', 'Market Analysis', 'Pricing Intelligence', 'Strategy Development', 'Performance Benchmarking']
                },
                {
                  title: 'Local Marketing',
                  description: 'Integrated local marketing solutions',
                  icon: <MapPin className="h-8 w-8" />,
                  features: ['Local PPC Campaigns', 'Local Social Media', 'Local Content Marketing', 'Local Email Marketing', 'Local Influencer Marketing']
                }
              ].map((tech, index) => (
                <div key={index} className="bg-gray-900 rounded-xl border border-gray-700 p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-purple-100 text-purple-300">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-purple-300">{tech.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Case Studies Section */}
          <section id="case-studies" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ecommerce Marketing Resources Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from Google Local Services Ads campaigns. Best local services agency in Delhi NCR 
                delivering measurable ROI for businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Plumbing Services Success',
                  description: '300% increase in local leads through Google Local Services Ads',
                  metrics: ['300% Lead Increase', '450% ROI Growth', '6 Months'],
                  image: '/images/case-studies/plumbing-local.webp'
                },
                {
                  title: 'Electrical Services Growth',
                  description: '500% increase in qualified local leads for electrical company',
                  metrics: ['500% Lead Increase', '250% Conversion Rate', '8 Months'],
                  image: '/images/case-studies/electrical-local.webp'
                },
                {
                  title: 'HVAC Services Expansion',
                  description: '400% increase in local service calls and bookings',
                  metrics: ['400% Service Calls', '300% Revenue Growth', '12 Months'],
                  image: '/images/case-studies/hvac-local.webp'
                },
                {
                  title: 'Cleaning Services Success',
                  description: '600% increase in local bookings and customer acquisition',
                  metrics: ['600% Bookings', '350% Revenue Growth', '10 Months'],
                  image: '/images/case-studies/cleaning-local.webp'
                }
              ].map((study, index) => (
                <div key={index} className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                    <Trophy className="h-16 w-16 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 mb-4">{study.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.metrics.map((metric, metricIndex) => (
                        <span key={metricIndex} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Approach Section */}
          <section id="approach" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ecommerce Marketing Resources Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven methodology for Google Local Services success. Local services experts in Delhi NCR 
                delivering comprehensive solutions for business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Account Setup',
                  description: 'Complete Google Local Services account setup and verification',
                  icon: <Target className="h-8 w-8" />
                },
                {
                  step: '02',
                  title: 'Campaign Launch',
                  description: 'Launch and optimize Local Services Ads campaigns',
                  icon: <Rocket className="h-8 w-8" />
                },
                {
                  step: '03',
                  title: 'Lead Management',
                  description: 'Implement comprehensive lead management and follow-up',
                  icon: <TrendingUp className="h-8 w-8" />
                },
                {
                  step: '04',
                  title: 'Scale & Optimize',
                  description: 'Scale successful campaigns and optimize for growth',
                  icon: <Zap className="h-8 w-8" />
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <div className="text-purple-300">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs Section */}
          <section id="faqs" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ecommerce Marketing Resources FAQs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about Google Local Services Ads. Best local services agency in Delhi 
                providing transparent answers and solutions.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What are Google Local Services Ads and how do they work?',
                  answer: 'Google Local Services Ads are pay-per-lead advertising that connects local service businesses with customers searching for their services. They appear at the top of Google search results and only charge for qualified leads that contact your business.'
                },
                {
                  question: 'How long does it take to get approved for Local Services Ads?',
                  answer: 'The approval process typically takes 1-2 weeks. We handle the entire setup process including business verification, background checks, and insurance verification to ensure quick approval.'
                },
                {
                  question: 'What is the typical investment for Local Services Ads?',
                  answer: 'Local Services Ads typically range from ₹45,000 to ₹1,50,000 per month depending on service type, location, and competition. We provide custom quotes based on your specific business and goals.'
                },
                {
                  question: 'Do you work with businesses outside Delhi NCR?',
                  answer: 'Yes, we work with businesses across India. Our Local Services Ads management is not limited by geography and can be delivered remotely with excellent results.'
                },
                {
                  question: 'How do you measure Local Services Ads success?',
                  answer: 'We track comprehensive KPIs including lead volume, lead quality, cost per lead, conversion rates, ROI, and customer lifetime value. We provide detailed monthly reports with actionable insights.'
                },
                {
                  question: 'What service categories do you specialize in for Local Services Ads?',
                  answer: 'We specialize in all major Local Services categories including plumbing, electrical, HVAC, cleaning, landscaping, locksmith, and more. We have expertise in optimizing campaigns for any service category.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-900 rounded-xl border border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
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
                Get Ecommerce Resources Quote
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

export default EcommerceResources; 