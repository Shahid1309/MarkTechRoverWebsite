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
  Code,
  MessageSquare,
  FileText,
  Rocket,
  ChevronDown,
  Play,
  Pause,
  Calendar,
  DollarSign,
  Cpu,
  Menu,
  Trophy,
  Phone,
  Target as TargetIcon,
  BarChart3 as AnalyticsIcon,
  TrendingUp as PPCIcon,
  X,
  Maximize2,
  Minimize2
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const PPCManagementServices = () => {
  const [activeSection, setActiveSection] = useState('deliverables');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedDeliverable, setExpandedDeliverable] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Video playing state
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set([0])); // First FAQ expanded by default
  const [faqSearchTerm, setFaqSearchTerm] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState('all');

  const navItems = [
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'packages', label: 'PPC Packages', icon: <DollarSign className="h-4 w-4" /> },
    { id: 'technology', label: 'PPC Technology', icon: <Cpu className="h-4 w-4" /> },
    { id: 'case-studies', label: 'PPC Case Studies', icon: <Trophy className="h-4 w-4" /> },
    { id: 'approach', label: 'PPC Approach', icon: <Rocket className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  // Handle scroll for sticky navigation and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 600; // Show nav after scrolling past hero section
      setIsNavSticky(scrollPosition > heroHeight);

      // Detect active section based on scroll position
      const sections = ['deliverables', 'packages', 'technology', 'case-studies', 'approach', 'faqs'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      let currentSection = 'deliverables';
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150; // Offset for sticky nav height
          
          if (rect.top <= offset && rect.bottom > offset) {
            currentSection = sections[index];
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
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

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const expandAllFaqs = () => {
    setExpandedFaqs(new Set(faqs.map((_, index) => index)));
  };

  const collapseAllFaqs = () => {
    setExpandedFaqs(new Set());
  };

  const faqs = [
    {
      question: 'What is PPC and how does it work?',
      answer: 'PPC (Pay-Per-Click) is a digital advertising model where advertisers pay a fee each time their ad is clicked. Google Ads is the most popular PPC platform.',
      category: 'basics',
      tags: ['PPC', 'Google Ads']
    },
    {
      question: 'How long does it take to see results from PPC?',
      answer: 'PPC can show immediate results - you can start seeing traffic and conversions within hours. Optimal ROI typically takes 1-3 months of continuous optimization.',
      category: 'timeline',
      tags: ['Results', 'ROI']
    },
    {
      question: 'What is the typical investment for PPC services?',
      answer: 'PPC services range from ₹35,000 to ₹1,25,000 per month depending on campaign complexity and ad spend budget.',
      category: 'pricing',
      tags: ['Pricing', 'Investment']
    },
    {
      question: 'What platforms do you manage PPC campaigns on?',
      answer: 'We manage campaigns across Google Ads, Microsoft Advertising, Facebook Ads, Instagram Ads, LinkedIn Ads, and specialized platforms like Amazon Advertising.',
      category: 'platforms',
      tags: ['Platforms', 'Google Ads']
    },
    {
      question: 'How do you measure PPC campaign success?',
      answer: 'We track CTR, conversion rate, CPA, ROAS, quality score, and overall ROI with detailed monthly reports.',
      category: 'measurement',
      tags: ['Analytics', 'ROI']
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Questions', count: faqs.length },
    { id: 'basics', name: 'PPC Basics', count: faqs.filter(f => f.category === 'basics').length },
    { id: 'timeline', name: 'Timeline & Results', count: faqs.filter(f => f.category === 'timeline').length },
    { id: 'pricing', name: 'Pricing & Investment', count: faqs.filter(f => f.category === 'pricing').length },
    { id: 'platforms', name: 'Platforms & Channels', count: faqs.filter(f => f.category === 'platforms').length },
    { id: 'measurement', name: 'Analytics & Reporting', count: faqs.filter(f => f.category === 'measurement').length }
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(faqSearchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(faqSearchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(faqSearchTerm.toLowerCase()));
    const matchesCategory = selectedFaqCategory === 'all' || faq.category === selectedFaqCategory;
    return matchesSearch && matchesCategory;
  });

  const seoConfig = {
    title: 'PPC Management Services That Turn Ad Spend Into Qualified Leads',
    description: 'MarkTechRover delivers PPC services focused on revenue, not just clicks — predictable pipeline growth with lower CPL and higher ROI using human strategy + AI efficiency.',
    keywords: [
      'PPC Management Services Delhi',
      'Best PPC company in Delhi',
      'PPC agency NCR',
      'Best PPC services in India',
      'Professional PPC services India',
      'PPC experts in Delhi NCR',
      'PPC company India',
      'Google Ads management Delhi',
      'Pay per click services NCR',
      'PPC advertising Delhi'
    ],
    url: '/services/seo-lead-generation/ppc-management',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'Ritik Kumar Poddar',
    section: 'PPC Management Services',
    tags: ['PPC', 'Google Ads', 'Pay Per Click', 'Digital Advertising'],
    image: '/images/ppc-management-services.webp'
  };

  const deliverables = [
    {
      id: 1,
      title: 'Campaign Setup & Management',
      description: 'Complete Google Ads campaign creation and ongoing optimization',
      icon: <TargetIcon className="h-6 w-6" />,
      features: [
        'Google Ads account setup',
        'Search & Display campaigns',
        'Shopping & Video ads',
        'Campaign optimization'
      ],
      expanded: true
    },
    {
      id: 2,
      title: 'Keyword Research & Targeting',
      description: 'Strategic keyword research for maximum reach and relevance',
      icon: <Search className="h-6 w-6" />,
      features: [
        'Keyword research & analysis',
        'Long-tail keyword targeting',
        'Negative keyword management',
        'Bid optimization'
      ],
      expanded: false
    },
    {
      id: 3,
      title: 'Ad Creation & Testing',
      description: 'Compelling ad copy and continuous A/B testing for better performance',
      icon: <FileText className="h-6 w-6" />,
      features: [
        'Ad copy creation',
        'A/B testing',
        'Ad extensions',
        'Performance analysis'
      ],
      expanded: false
    },
    {
      id: 4,
      title: 'Analytics & Reporting',
      description: 'Detailed performance tracking and monthly reports',
      icon: <AnalyticsIcon className="h-6 w-6" />,
      features: [
        'Google Analytics setup',
        'Conversion tracking',
        'ROI analysis',
        'Monthly reports'
      ],
      expanded: false
    }
  ];

  const ppcPackages = [
    {
      name: 'PPC Starter',
      price: '₹35,000',
      period: '/month',
      description: 'Perfect for small businesses starting their PPC journey',
      features: [
        'Google Ads account setup',
        'Basic campaign management',
        'Keyword research and optimization',
        'Ad copy creation and testing',
        'Monthly performance reporting',
        'Dedicated PPC specialist',
        '₹50,000 ad spend management'
      ],
      highlighted: false,
      cta: 'Get Started'
    },
    {
      name: 'PPC Professional',
      price: '₹65,000',
      period: '/month',
      description: 'Comprehensive PPC solutions for growing businesses',
      features: [
        'Everything in Starter, plus:',
        'Advanced campaign optimization',
        'Remarketing campaigns',
        'Display network advertising',
        'Shopping campaigns',
        'Video advertising',
        '₹1,00,000 ad spend management',
        'Weekly optimization calls'
      ],
      highlighted: true,
      cta: 'Most Popular'
    },
    {
      name: 'PPC Enterprise',
      price: '₹1,25,000',
      period: '/month',
      description: 'Full-service PPC management for large businesses',
      features: [
        'Everything in Professional, plus:',
        'Multi-platform PPC management',
        'Advanced audience targeting',
        'Custom automation scripts',
        'Competitive analysis',
        'Custom reporting dashboard',
        'Unlimited ad spend management',
        '24/7 priority support'
      ],
      highlighted: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <PageSEO config={seoConfig}>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-purple-900">
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <PPCIcon className="h-10 w-10 text-white" />
                </div>
              </div>

              {/* Animated Title */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                PPC Management Services in <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent font-extrabold">Delhi</span>
              </h1>

              {/* Animated Description */}
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Best PPC company in Delhi NCR offering Google Ads management. 
                Professional PPC services India with proven ROI and immediate results.
              </p>
              
              {/* Interactive CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 via-blue-600 to-blue-700 hover:from-teal-500 hover:via-blue-500 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">Get PPC Quote</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <button
                  onClick={() => scrollToSection('packages')}
                  className="group inline-flex items-center px-8 py-4 border border-blue-500/40 text-blue-200 hover:text-white hover:bg-blue-500/20 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">View Packages</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Floating Action Button */}
              <div className="mt-8">
                <button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="group inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-700/50"
                >
                  {isVideoPlaying ? (
                    <>
                      <Pause className="h-4 w-4" />
                      <span>Pause Demo</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      <span>Watch Demo</span>
                    </>
                  )}
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

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  ₹1.8B+
                </div>
                <div className="text-gray-300 font-semibold">Revenue Generated from PPC</div>
                <div className="text-gray-500 text-sm">Industry average: ₹500M</div>
                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  450%
                </div>
                <div className="text-gray-300 font-semibold">Average PPC ROI</div>
                <div className="text-gray-500 text-sm">Industry average: 200%</div>
                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  98%
                </div>
                <div className="text-gray-300 font-semibold">Client Satisfaction Rate</div>
                <div className="text-gray-500 text-sm">Industry average: 72%</div>
                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why MarkTechRover Delhi Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/40 via-purple-900/10 to-black/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
                <Trophy className="h-4 w-4 mr-2" />
                Why MarkTechRover Delhi for PPC
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Delhi's Premier PPC Management Agency
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine local market expertise with cutting-edge PPC technology to deliver exceptional results for Delhi businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10">
                <div className="flex items-center space-x-3 mb-3">
                  <Cpu className="h-5 w-5 text-purple-300" />
                  <h3 className="text-white font-semibold">AI-Powered PPC Optimization</h3>
                </div>
                <p className="text-gray-300 text-sm">Advanced AI tools for bid optimization, audience targeting, and performance prediction.</p>
              </div>
              <div className="rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="h-5 w-5 text-purple-300" />
                  <h3 className="text-white font-semibold">Dedicated Delhi Team</h3>
                </div>
                <p className="text-gray-300 text-sm">Local PPC experts who understand Delhi's market dynamics and consumer behavior.</p>
              </div>
              <div className="rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10">
                <div className="flex items-center space-x-3 mb-3">
                  <BarChart3 className="h-5 w-5 text-purple-300" />
                  <h3 className="text-white font-semibold">Revenue-Focused Reporting</h3>
                </div>
                <p className="text-gray-300 text-sm">Transparent reporting that tracks revenue impact, not just clicks and impressions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Sticky Sub Menu */}
        <div className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isNavSticky 
            ? 'top-32 opacity-100 scale-100 pointer-events-auto' 
            : 'top-0 opacity-0 scale-95 pointer-events-none'
        }`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 rounded-full"></div>
            <div className="relative bg-black/20 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-2xl shadow-purple-500/20">
              <nav className="flex items-center space-x-1 px-6 py-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`${activeSection === item.id ? 'text-purple-300 bg-gradient-to-r from-purple-500/30 to-purple-400/30 border border-purple-400/50 shadow-lg shadow-purple-500/25' : 'text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/20 to-purple-400/20 hover:border-purple-300/30'} px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg`}
                  >
                    {item.icon}
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${isNavSticky ? 'pt-24' : ''}` }>
          {/* Deliverables Section - Circular Blocks */}
          <section id="deliverables" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  PPC Management Deliverables
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive PPC management services designed for immediate results. 
                  Best PPC company in Delhi NCR delivering measurable ROI and performance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {deliverables.map((deliverable, index) => (
                  <div
                    key={deliverable.id}
                    className="relative group"
                  >
                    {/* Circular Block */}
                    <div className="w-64 h-64 mx-auto rounded-full border-2 transition-all duration-500 transform group-hover:scale-105 bg-gradient-to-br from-gray-900/20 via-gray-800/20 to-gray-900/20 border-gray-600 hover:border-purple-400/50">
                      {/* Icon Circle */}
                      <div className="w-16 h-16 mx-auto mt-8 rounded-full flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-purple-500 to-purple-600 group-hover:from-purple-400 group-hover:to-purple-500">
                        <div className="text-white group-hover:text-purple-100 transition-colors duration-300">
                          {deliverable.icon}
                        </div>
                      </div>

                      {/* Title */}
                      <div className="text-center mt-4 px-4">
                        <h3 className="text-base font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                          {deliverable.title}
                        </h3>
                        <p className="text-xs leading-tight text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {deliverable.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PPC Packages Section */}
          <section id="packages" className="mb-20 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
                  <DollarSign className="h-4 w-4 mr-2" />
                  PPC Management Packages
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Choose Your PPC Package
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive PPC solutions designed for businesses of all sizes and budgets. 
                  Best PPC services in India with flexible packages.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ppcPackages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${
                      pkg.highlighted
                        ? 'bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-900/30 border-purple-400/50 shadow-lg shadow-purple-500/25'
                        : 'bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 border-gray-600/50 hover:border-purple-400/30'
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/25">
                          {pkg.cta}
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">{pkg.price}</span>
                        <span className="text-gray-400 ml-2">{pkg.period}</span>
                      </div>
                      <p className="text-gray-300">{pkg.description}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        pkg.highlighted
                          ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 shadow-lg shadow-purple-500/25'
                          : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700 border border-gray-600'
                      }`}
                    >
                      {pkg.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technology Section */}
          <section id="technology" className="mb-20 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
                  <Cpu className="h-4 w-4 mr-2" />
                  PPC Technology Stack
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Advanced PPC Technology
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Cutting-edge PPC technology stack powering exceptional results. 
                  Professional PPC services India with advanced tools and platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Google Ads Platform',
                    description: 'Comprehensive Google Ads management and optimization tools',
                    icon: <TargetIcon className="h-8 w-8" />,
                    features: ['Google Ads Editor', 'Google Ads API', 'Google Ads Scripts', 'Google Ads Manager', 'Google Ads Recommendations']
                  },
                  {
                    title: 'Analytics & Tracking',
                    description: 'Advanced analytics and conversion tracking platforms',
                    icon: <AnalyticsIcon className="h-8 w-8" />,
                    features: ['Google Analytics 4', 'Google Tag Manager', 'Conversion Tracking', 'Enhanced Ecommerce', 'Custom Dashboards']
                  },
                  {
                    title: 'Keyword Research',
                    description: 'Advanced keyword research and analysis tools',
                    icon: <Search className="h-8 w-8" />,
                    features: ['Google Keyword Planner', 'SEMrush', 'Ahrefs', 'Keyword Tool', 'SpyFu']
                  },
                  {
                    title: 'Ad Creation & Testing',
                    description: 'Ad creation and A/B testing platforms',
                    icon: <FileText className="h-8 w-8" />,
                    features: ['Google Ads Editor', 'Ad Preview Tool', 'Responsive Search Ads', 'Ad Extensions', 'Dynamic Ads']
                  },
                  {
                    title: 'Bid Management',
                    description: 'Advanced bid management and automation tools',
                    icon: <TrendingUp className="h-8 w-8" />,
                    features: ['Automated Bidding', 'Smart Bidding', 'Bid Adjustments', 'Bid Strategies', 'Bid Optimization']
                  },
                  {
                    title: 'Performance Monitoring',
                    description: 'Real-time performance monitoring and reporting',
                    icon: <BarChart3 className="h-8 w-8" />,
                    features: ['Real-time Monitoring', 'Performance Alerts', 'Custom Reports', 'ROI Tracking', 'Competitive Analysis']
                  }
                ].map((tech, index) => (
                  <div key={index} className="group bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 rounded-2xl border border-gray-600/50 p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105 hover:border-purple-400/30">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                        <div className="text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                          {tech.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">{tech.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">{tech.description}</p>
                    <ul className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full group-hover:from-purple-300 group-hover:to-purple-400 transition-all duration-300"></div>
                          <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies Section (styled like "Our Digital Marketing Approach") */}
          <section id="case-studies" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">PPC Case Studies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real PPC wins from e‑commerce, B2B, local and SaaS — designed for ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: '01',
                  title: 'E‑commerce Scale Up',
                  description: 'Performance Max + feed optimization drove profitable growth.',
                  points: [
                    ['Revenue', '+300%'],
                    ['ROAS', 'x4.5'],
                    ['Timeframe', '6 months']
                  ]
                },
                {
                  step: '02',
                  title: 'B2B Lead Engine',
                  description: 'High‑intent keywords + smart forms lifted SQL volume.',
                  points: [
                    ['Qualified Leads', '+500%'],
                    ['CPL', '-45%'],
                    ['Timeframe', '8 months']
                  ]
                },
                {
                  step: '03',
                  title: 'Local Services Domination',
                  description: 'Geo segmented ads + call tracking grew booked jobs.',
                  points: [
                    ['Local Calls', '+400%'],
                    ['ROAS', 'x2.8'],
                    ['Timeframe', '4 months']
                  ]
                },
                {
                  step: '04',
                  title: 'SaaS Trials Expansion',
                  description: 'Asset refresh + exclusions improved PMax efficiency.',
                  points: [
                    ['Trials', '+600%'],
                    ['CPL', '-52%'],
                    ['Timeframe', '12 months']
                  ]
                }
              ].map((cs, index) => (
                <div key={index} className="relative cursor-pointer transition-all duration-500">
                  <div className="p-6 rounded-2xl border-2 transition-all duration-300 relative bg-gray-800/50 border-gray-600 hover:border-purple-500/50">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                        <Trophy className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-purple-300">Case Study {cs.step}</div>
                        <h3 className="text-xl font-semibold text-white">{cs.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{cs.description}</p>

                    <div className="grid grid-cols-3 gap-3">
                      {cs.points.map(([label, value], i) => (
                        <div key={i} className="text-center p-3 bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-lg border border-purple-500/20">
                          <div className="text-sm text-gray-400">{label}</div>
                          <div className="text-lg font-bold text-purple-300">{value}</div>
                        </div>
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
                PPC Management Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven methodology for PPC success. PPC experts in Delhi NCR 
                delivering comprehensive solutions for immediate results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  step: '01',
                  title: 'Strategy Development',
                  description: 'Comprehensive PPC strategy and campaign planning',
                  icon: <Target className="h-8 w-8" />
                },
                {
                  step: '02',
                  title: 'Campaign Setup',
                  description: 'Professional campaign setup and optimization',
                  icon: <Rocket className="h-8 w-8" />
                },
                {
                  step: '03',
                  title: 'Optimization',
                  description: 'Continuous monitoring and optimization for maximum performance',
                  icon: <TrendingUp className="h-8 w-8" />
                },
                {
                  step: '04',
                  title: 'Scale & Grow',
                  description: 'Scale successful campaigns and expand to new opportunities',
                  icon: <Zap className="h-8 w-8" />
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-purple-600 rounded-full border-2 border-purple-400/50 flex items-center justify-center mx-auto mb-6 relative z-20">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-100 rounded-full border-2 border-purple-300/50 flex items-center justify-center z-10">
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
          <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/5 via-transparent to-purple-900/5">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Frequently Asked Questions (FAQs)
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Everything you need to know about our PPC management services
                </p>
                
                {/* FAQ Search and Controls */}
                <div className="space-y-6 mb-8">
                  {/* Search Bar */}
                  <div className="relative max-w-md mx-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      value={faqSearchTerm}
                      onChange={(e) => setFaqSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                    />
                    {faqSearchTerm && (
                      <button
                        onClick={() => setFaqSearchTerm('')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  {/* Category Filters */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {faqCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedFaqCategory(category.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedFaqCategory === category.id
                            ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                            : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600'
                        }`}
                      >
                        {category.name}
                        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-600/50">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* FAQ Controls */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={expandAllFaqs}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <Maximize2 className="h-4 w-4" />
                      <span>Expand All</span>
                    </button>
                    <button
                      onClick={collapseAllFaqs}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105"
                    >
                      <Minimize2 className="h-4 w-4" />
                      <span>Collapse All</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredFaqs.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No FAQs Found</h3>
                    <p className="text-gray-400 mb-4">
                      Try adjusting your search terms or category filter
                    </p>
                    <button
                      onClick={() => {
                        setFaqSearchTerm('');
                        setSelectedFaqCategory('all');
                      }}
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      Clear all filters
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="text-sm text-gray-400 text-center mb-4">
                      Showing {filteredFaqs.length} of {faqs.length} FAQs
                    </div>
                    {filteredFaqs.map((faq, index) => {
                      const originalIndex = faqs.findIndex(f => f.question === faq.question);
                      const isExpanded = expandedFaqs.has(originalIndex);
                      return (
                        <div
                          key={index}
                          className={`rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                            isExpanded
                              ? 'bg-gradient-to-r from-purple-900/20 via-purple-800/20 to-purple-900/20 border-purple-400/40 shadow-lg shadow-purple-500/25'
                              : 'bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border-purple-500/20 hover:border-purple-400/30'
                          }`}
                        >
                          <button
                            onClick={() => toggleFaq(originalIndex)}
                            className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-2xl"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className={`text-lg font-bold transition-all duration-300 ${
                                isExpanded ? 'text-white' : 'text-gray-300'
                              }`}>
                                {faq.question}
                              </h3>
                              <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                                isExpanded
                                  ? 'bg-purple-500 text-white rotate-180'
                                  : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                              }`}>
                                <ChevronDown className="h-5 w-5 transition-transform duration-300" />
                              </div>
                            </div>
                          </button>
                          
                          {/* Expandable Content */}
                          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <div className="px-6 pb-6">
                              <div className="border-t border-purple-500/20 pt-4">
                                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                  {faq.tags.map((tag, tagIndex) => (
                                    <span
                                      key={tagIndex}
                                      className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </section>

          {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your PPC Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Best PPC company in Delhi NCR offering comprehensive PPC management services. 
              Get started with professional PPC services India today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gray-900 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Get PPC Quote
              </Link>
              <Link
                to="/who-are-we/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-purple-300 transition-colors duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
      </div>
    </PageSEO>
  );
};

export default PPCManagementServices; 