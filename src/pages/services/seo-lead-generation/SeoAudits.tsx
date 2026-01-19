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

const SeoAudits = () => {
  const [activeSection, setActiveSection] = useState('deliverables');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedDeliverable, setExpandedDeliverable] = useState<number>(0);

  const navItems = [
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },{ id: 'technology', label: 'SEO Audit Technology', icon: <Cpu className="h-4 w-4" /> },
    { id: 'case-studies', label: 'SEO Audit Case Studies', icon: <Trophy className="h-4 w-4" /> },
    { id: 'approach', label: 'SEO Audit Approach', icon: <Rocket className="h-4 w-4" /> },
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
    title: 'SEO Audits Delhi | Best SEO Audit Company NCR | Professional SEO Analysis India',
    description: 'Leading SEO audit services in Delhi NCR. Best SEO audit company in Delhi offering comprehensive website SEO analysis. Professional SEO audit services India with detailed reports and actionable insights.',
    keywords: [
      'SEO Audits Delhi',
      'Best SEO audit company in Delhi',
      'SEO audit services NCR',
      'Best SEO audit services in India',
      'Professional SEO audit services India',
      'SEO audit experts in Delhi NCR',
      'SEO audit company India',
      'SEO services in Delhi',
      'Website SEO analysis Delhi',
      'SEO audit report India'
    ],
    url: '/services/seo-lead-generation/seo-audits',
    type: 'website',
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'Ritik Kumar Poddar',
    section: 'SEO Audits',
    tags: ['SEO Audits', 'Website Analysis', 'SEO Analysis', 'Technical SEO', 'SEO Reports'],
    image: '/images/seo-audits.webp'
  };

  const deliverables = [
    {
      id: 1,
      title: 'Technical SEO Audit',
      description: 'Comprehensive technical SEO analysis and optimization recommendations',
      icon: <Code className="h-6 w-6" />,
      features: [
        'Website crawlability analysis',
        'Site structure and architecture review',
        'Page speed and performance analysis',
        'Mobile optimization assessment',
        'Schema markup implementation',
        'Technical SEO recommendations'
      ],
      expanded: true
    },
    {
      id: 2,
      title: 'On-Page SEO Audit',
      description: 'Detailed on-page SEO analysis and optimization opportunities',
      icon: <FileText className="h-6 w-6" />,
      features: [
        'Title tag and meta description analysis',
        'Header tag optimization review',
        'Content quality and keyword analysis',
        'Internal linking structure audit',
        'Image optimization assessment',
        'On-page SEO recommendations'
      ],
      expanded: false
    },
    {
      id: 3,
      title: 'Content SEO Audit',
      description: 'Comprehensive content analysis and optimization strategy',
      icon: <PenTool className="h-6 w-6" />,
      features: [
        'Content quality and relevance analysis',
        'Keyword research and optimization',
        'Content gap analysis',
        'Competitive content analysis',
        'Content strategy recommendations',
        'Content optimization roadmap'
      ],
      expanded: false
    },
    {
      id: 4,
      title: 'Local SEO Audit',
      description: 'Local SEO analysis and optimization for local businesses',
      icon: <MapPin className="h-6 w-6" />,
      features: [
        'Google My Business optimization',
        'Local citation analysis and cleanup',
        'Local keyword research and optimization',
        'Review management analysis',
        'Local link building opportunities',
        'Local SEO strategy development'
      ],
      expanded: false
    },
    {
      id: 5,
      title: 'Competitive SEO Audit',
      description: 'Competitive analysis and benchmarking against competitors',
      icon: <Eye className="h-6 w-6" />,
      features: [
        'Competitor keyword analysis',
        'Competitor backlink analysis',
        'Competitive content analysis',
        'Market positioning analysis',
        'Competitive advantage identification',
        'Strategic recommendations'
      ],
      expanded: false
    },
    {
      id: 6,
      title: 'SEO Performance Audit',
      description: 'Comprehensive SEO performance analysis and reporting',
      icon: <BarChart3 className="h-6 w-6" />,
      features: [
        'SEO performance metrics analysis',
        'Traffic and ranking analysis',
        'Conversion rate optimization review',
        'ROI analysis and reporting',
        'SEO goal tracking and measurement',
        'Performance improvement roadmap'
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
                <Search className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Animated Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000">
              Hire SEO Audit Services
            </h1>

            {/* Animated Description */}
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300">
              Professional seo audits services in Delhi NCR. Get expert seo audits solutions with proven results and ROI.
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
                <span className="relative z-10">Get Free Seo Audits Consultation</span>
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
                  className={`${activeSection === item.id ? 'text-purple-300 bg-gradient-to-r from-purple-500/30 to-purple-400/30 border border-purple-400/50 shadow-lg shadow-purple-500/25' : 'text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/20 to-purple-400/20 hover:border-purple-300/30'} px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg whitespace-nowrap flex-shrink-0`}
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
          <section id="deliverables" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                SEO Audit Deliverables
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive SEO audit services designed for business growth. 
                Best SEO audit company in Delhi NCR delivering detailed analysis and actionable insights.
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

          

          {/* Technology Section */}
          <section id="technology" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                SEO Audit Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced SEO audit technology stack powering results. 
                Professional SEO audit services India with cutting-edge tools and platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'SEO Analysis Tools',
                  description: 'Advanced SEO analysis and auditing platforms',
                  icon: <Search className="h-8 w-8" />,
                  features: ['Ahrefs', 'SEMrush', 'Moz Pro', 'Screaming Frog', 'Google Search Console']
                },
                {
                  title: 'Technical Analysis',
                  description: 'Comprehensive technical SEO analysis tools',
                  icon: <Code className="h-8 w-8" />,
                  features: ['PageSpeed Insights', 'GTmetrix', 'WebPageTest', 'Lighthouse', 'Core Web Vitals']
                },
                {
                  title: 'Content Analysis',
                  description: 'Advanced content analysis and optimization tools',
                  icon: <FileText className="h-8 w-8" />,
                  features: ['Clearscope', 'Surfer SEO', 'MarketMuse', 'Frase', 'Topic Research']
                },
                {
                  title: 'Competitive Analysis',
                  description: 'Comprehensive competitive intelligence tools',
                  icon: <Eye className="h-8 w-8" />,
                  features: ['SpyFu', 'SimilarWeb', 'iSpionage', 'Competitive Analysis', 'Market Research']
                },
                {
                  title: 'Local SEO Tools',
                  description: 'Local SEO analysis and optimization tools',
                  icon: <MapPin className="h-8 w-8" />,
                  features: ['BrightLocal', 'Moz Local', 'Whitespark', 'Local SEO Tools', 'Citation Management']
                },
                {
                  title: 'Analytics & Reporting',
                  description: 'Comprehensive analytics and reporting solutions',
                  icon: <BarChart3 className="h-8 w-8" />,
                  features: ['Google Analytics 4', 'Google Data Studio', 'Custom Dashboards', 'ROI Tracking', 'Performance Reports']
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
                SEO Audit Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from SEO audit implementations. Best SEO audit company in Delhi NCR 
                delivering measurable ROI for businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'E-commerce SEO Audit',
                  description: '300% increase in organic traffic through comprehensive SEO audit',
                  metrics: ['300% Traffic Increase', '450% Sales Growth', '6 Months'],
                  image: '/images/case-studies/ecommerce-audit.webp'
                },
                {
                  title: 'B2B Website Audit',
                  description: '500% increase in qualified leads through SEO audit implementation',
                  metrics: ['500% Lead Increase', '250% Conversion Rate', '8 Months'],
                  image: '/images/case-studies/b2b-audit.webp'
                },
                {
                  title: 'Local Business Audit',
                  description: '400% increase in local search visibility and inquiries',
                  metrics: ['400% Local Growth', '300% Brand Awareness', '12 Months'],
                  image: '/images/case-studies/local-audit.webp'
                },
                {
                  title: 'SaaS Company Audit',
                  description: '600% increase in trial signups through SEO optimization',
                  metrics: ['600% Trial Increase', '350% Revenue Growth', '15 Months'],
                  image: '/images/case-studies/saas-audit.webp'
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
                SEO Audit Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven methodology for SEO audit success. SEO audit experts in Delhi NCR 
                delivering comprehensive analysis for business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'Comprehensive website analysis and data collection',
                  icon: <Search className="h-8 w-8" />
                },
                {
                  step: '02',
                  title: 'Technical Audit',
                  description: 'Deep technical SEO analysis and optimization',
                  icon: <Code className="h-8 w-8" />
                },
                {
                  step: '03',
                  title: 'Content & Strategy',
                  description: 'Content analysis and strategic recommendations',
                  icon: <FileText className="h-8 w-8" />
                },
                {
                  step: '04',
                  title: 'Implementation',
                  description: 'Detailed implementation plan and roadmap',
                  icon: <Rocket className="h-8 w-8" />
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
                SEO Audit FAQs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about SEO audit services. Best SEO audit company in Delhi 
                providing transparent answers and solutions.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What is an SEO audit and why is it important?',
                  answer: 'An SEO audit is a comprehensive analysis of your website\'s search engine optimization performance. It identifies technical issues, content gaps, and optimization opportunities to improve your search rankings and organic traffic.'
                },
                {
                  question: 'How long does an SEO audit take to complete?',
                  answer: 'The duration depends on the package: Basic audits take 3-5 days, Comprehensive audits take 7-10 days, and Enterprise audits take 2-3 weeks. We provide detailed timelines and regular updates throughout the process.'
                },
                {
                  question: 'What is included in an SEO audit report?',
                  answer: 'Our SEO audit reports include technical analysis, on-page optimization recommendations, content analysis, competitive analysis, keyword research, performance metrics, and a detailed implementation roadmap with priorities.'
                },
                {
                  question: 'Do you provide implementation support after the audit?',
                  answer: 'Yes, we provide implementation support based on your package. Basic includes email support, Comprehensive includes 30-day support, and Enterprise includes 90-day support with consultation calls.'
                },
                {
                  question: 'How do you measure the success of an SEO audit?',
                  answer: 'We measure success through improved search rankings, increased organic traffic, better conversion rates, improved page speed, and enhanced user experience. We provide before-and-after comparisons and ongoing tracking.'
                },
                {
                  question: 'Do you work with businesses outside Delhi NCR?',
                  answer: 'Yes, we work with businesses across India and internationally. Our SEO audit services are not limited by geography and can be delivered remotely with excellent results.'
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
              Ready to Transform Your SEO Performance?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Best SEO audit company in Delhi NCR offering comprehensive SEO audit services. 
              Get started with professional SEO audit services India today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-purple-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get SEO Audit Quote
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

export default SeoAudits; 