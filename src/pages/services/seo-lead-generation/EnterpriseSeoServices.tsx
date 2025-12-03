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
  Pause,
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
  AlertTriangle,
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
  Apple
} from 'lucide-react';

const EnterpriseSeoServices = () => {
  const [activeSection, setActiveSection] = useState('deliverables');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedDeliverable, setExpandedDeliverable] = useState<number>(0);
  const [activeApproachStep, setActiveApproachStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set([0]));
  const [faqSearchTerm, setFaqSearchTerm] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState('all');
  const [heroAnimationComplete, setHeroAnimationComplete] = useState(false);
  const [statsCount, setStatsCount] = useState({ retention: 0, satisfaction: 0, awards: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showTrustBadges, setShowTrustBadges] = useState(false);

  const navItems = [
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'packages', label: 'Enterprise Packages', icon: <DollarSign className="h-4 w-4" /> },
    { id: 'technology', label: 'Enterprise Technology', icon: <Cpu className="h-4 w-4" /> },
    { id: 'approach', label: 'Enterprise Approach', icon: <Rocket className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  const packages = [
    {
      name: 'Enterprise Starter',
      price: '₹89,000',
      monthlyPrice: '₹44,500/mo',
      keyphrases: 'Up to 500',
      pages: 'Up to 100',
      contentAssets: '30',
      originalPrice: '₹99,000',
      savings: '₹10,000',
      features: [
        'Enterprise Technical SEO Audit',
        'Advanced Keyword Research (500+ keywords)',
        'Multi-site SEO Strategy',
        'Enterprise Content Strategy',
        'Advanced Analytics & Custom Reports',
        'Weekly Performance Reviews',
        'Dedicated SEO Team (3 specialists)',
        '24/7 Priority Support',
        'Custom SEO Tools & Integrations',
        'Advanced Schema Implementation',
        'Voice Search Optimization',
        'Video SEO Optimization'
      ],
      bestFor: 'Large enterprises starting with SEO',
      limitations: ['Higher investment required', 'Complex implementation timeline']
    },
    {
      name: 'Enterprise Professional',
      price: '₹149,000',
      monthlyPrice: '₹74,500/mo',
      keyphrases: 'Up to 1000',
      pages: 'Up to 200',
      contentAssets: '60',
      originalPrice: '₹159,000',
      savings: '₹10,000',
      features: [
        'Everything in Enterprise Starter',
        'Advanced Technical SEO Audit',
        'Comprehensive Keyword Research (1000+ keywords)',
        'Full-Scale Content Strategy',
        'Advanced Link Building Campaigns',
        'International SEO Setup',
        'E-commerce SEO Optimization',
        'Advanced Analytics & Custom Reports',
        'Weekly Performance Reviews',
        'Dedicated SEO Team (5 specialists)',
        '24/7 Priority Support',
        'Custom SEO Tools & Integrations',
        'Advanced Schema Implementation',
        'Voice Search Optimization',
        'Video SEO Optimization',
        'AI-Powered Content Optimization',
        'Advanced Competitor Tracking',
        'Custom SEO Dashboard'
      ],
      bestFor: 'Growing enterprises serious about SEO results',
      exclusiveFeatures: ['Exclusive: AI-Powered Content Optimization', 'Exclusive: Advanced Competitor Tracking', 'Exclusive: Custom SEO Dashboard']
    },
    {
      name: 'Enterprise Premium',
      price: '₹299,000',
      monthlyPrice: '₹149,500/mo',
      keyphrases: 'Unlimited',
      pages: 'Unlimited',
      contentAssets: '120',
      originalPrice: '₹309,000',
      savings: '₹10,000',
      features: [
        'Everything in Enterprise Professional',
        'Unlimited Keyword Research',
        'Unlimited Content Creation',
        'Advanced Link Building Campaigns',
        'International SEO Setup',
        'E-commerce SEO Optimization',
        'Advanced Analytics & Custom Reports',
        'Daily Performance Reviews',
        'Dedicated SEO Team (10 specialists)',
        '24/7 Priority Support',
        'Custom SEO Tools & Integrations',
        'Advanced Schema Implementation',
        'Voice Search Optimization',
        'Video SEO Optimization'
      ],
      bestFor: 'Fortune 500 companies requiring maximum SEO impact',
      limitations: ['Premium investment required', 'Complex enterprise implementation']
    }
  ];

  const deliverables = [
    {
      id: 1,
      title: 'Enterprise SEO Audit & Strategy',
      description: 'Comprehensive technical and content audit for large-scale websites with actionable roadmap',
      icon: <Search className="h-6 w-6" />,
      features: [
        'Multi-site technical SEO audit',
        'Enterprise content gap analysis',
        'Competitive intelligence report',
        'Scalable SEO roadmap (12-24 months)',
        'Stakeholder presentation materials',
        'ROI projection and KPIs'
      ],
      expanded: true
    },
    {
      id: 2,
      title: 'Enterprise Technical SEO',
      description: 'Advanced technical optimization for complex enterprise websites and applications',
      icon: <Code className="h-6 w-6" />,
      features: [
        'Enterprise site architecture optimization',
        'Advanced schema markup implementation',
        'Enterprise-level crawl optimization',
        'International SEO setup (hreflang)',
        'Enterprise security and performance optimization',
        'API and dynamic content optimization'
      ],
      expanded: false
    },
    {
      id: 3,
      title: 'Enterprise Content Strategy',
      description: 'Scalable content creation and optimization for enterprise audiences',
      icon: <FileText className="h-6 w-6" />,
      features: [
        'Enterprise content calendar (quarterly)',
        'Thought leadership content creation',
        'Enterprise keyword research and mapping',
        'Content performance optimization',
        'Multi-language content strategy',
        'Enterprise content governance'
      ],
      expanded: false
    },
    {
      id: 4,
      title: 'Enterprise Link Building',
      description: 'Strategic link building campaigns designed for enterprise credibility and authority',
      icon: <Globe className="h-6 w-6" />,
      features: [
        'Enterprise PR and media outreach',
        'Industry partnership link building',
        'Enterprise resource page targeting',
        'Thought leadership link building',
        'Enterprise directory optimization',
        'Link monitoring and disavowal'
      ],
      expanded: false
    },
    {
      id: 5,
      title: 'Enterprise Analytics & Reporting',
      description: 'Advanced analytics and comprehensive reporting for enterprise stakeholders',
      icon: <BarChart3 className="h-6 w-6" />,
      features: [
        'Enterprise SEO dashboard setup',
        'Custom KPI tracking and reporting',
        'Executive-level reporting (monthly)',
        'Competitive analysis and benchmarking',
        'ROI tracking and attribution modeling',
        'Stakeholder communication materials'
      ],
      expanded: false
    },
    {
      id: 6,
      title: 'Enterprise SEO Training',
      description: 'Comprehensive training programs for enterprise teams and stakeholders',
      icon: <Users className="h-6 w-6" />,
      features: [
        'Enterprise SEO workshop series',
        'Stakeholder training sessions',
        'Team certification programs',
        'Best practices documentation',
        'Ongoing support and consultation',
        'Knowledge transfer sessions'
      ],
      expanded: false
    }
  ];

  const approachSteps = [
    {
      id: 1,
      title: 'Enterprise Discovery & Analysis',
      description: 'Comprehensive analysis of your enterprise structure, goals, and current SEO performance',
      detailedDescription: 'We conduct a thorough analysis of your enterprise\'s digital presence, including multi-site audits, competitive analysis, and stakeholder interviews to understand your unique challenges and opportunities.',
      duration: '2-3 weeks',
      deliverables: ['Enterprise SEO Audit Report', 'Competitive Analysis', 'Stakeholder Requirements Document'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/20 to-blue-600/20',
      icon: <Search className="h-6 w-6" />
    },
    {
      id: 2,
      title: 'Enterprise Strategy Development',
      description: 'Creating a scalable, enterprise-wide SEO strategy aligned with business objectives',
      detailedDescription: 'Develop a comprehensive SEO strategy that addresses enterprise complexity, including multi-site coordination, international markets, and stakeholder alignment.',
      duration: '3-4 weeks',
      deliverables: ['Enterprise SEO Roadmap', 'Multi-site Strategy', 'Implementation Timeline'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20',
      icon: <Target className="h-6 w-6" />
    },
    {
      id: 3,
      title: 'Enterprise Implementation',
      description: 'Executing the SEO strategy across all enterprise touchpoints and systems',
      detailedDescription: 'Implement enterprise SEO across all digital properties, ensuring consistency, scalability, and integration with existing enterprise systems and workflows.',
      duration: '8-12 weeks',
      deliverables: ['Technical Implementation', 'Content Creation', 'System Integration'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/20 to-green-600/20',
      icon: <Code className="h-6 w-6" />
    },
    {
      id: 4,
      title: 'Enterprise Optimization',
      description: 'Continuous optimization and performance monitoring for enterprise-scale results',
      detailedDescription: 'Ongoing optimization and monitoring across all enterprise properties, with advanced analytics, A/B testing, and performance reporting for stakeholders.',
      duration: 'Ongoing',
      deliverables: ['Performance Reports', 'Optimization Recommendations', 'Stakeholder Updates'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/20 to-orange-600/20',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      id: 5,
      title: 'Enterprise Scale & Growth',
      description: 'Scaling successful strategies across new markets, products, and business units',
      detailedDescription: 'Scale successful SEO strategies across new markets, products, and business units, ensuring consistent growth and ROI across the entire enterprise.',
      duration: 'Ongoing',
      deliverables: ['Scale Strategy', 'Market Expansion', 'ROI Optimization'],
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-500/20 to-red-600/20',
      icon: <Rocket className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: 'What makes Enterprise SEO different from regular SEO?',
      answer: 'Enterprise SEO is specifically designed for large organizations with multiple websites, complex structures, and diverse stakeholder requirements. It includes multi-site coordination, enterprise-level technical optimization, stakeholder management, and scalable strategies that can grow with your business.',
      category: 'Enterprise SEO',
      tags: ['Enterprise', 'Multi-site', 'Scalability']
    },
    {
      question: 'How long does it take to see results with Enterprise SEO?',
      answer: 'Enterprise SEO typically shows initial results within 3-6 months, with significant improvements in 6-12 months. However, the timeline depends on your enterprise size, complexity, and current SEO performance. We provide detailed progress reports and stakeholder updates throughout the process.',
      category: 'Results',
      tags: ['Timeline', 'Results', 'Reporting']
    },
    {
      question: 'Do you work with enterprise-level budgets and stakeholders?',
      answer: 'Yes, we specialize in enterprise-level SEO with dedicated account managers, stakeholder presentations, and enterprise-grade reporting. We understand the complexity of large organizations and provide the level of service and communication that enterprise clients require.',
      category: 'Enterprise',
      tags: ['Enterprise', 'Stakeholders', 'Account Management']
    },
    {
      question: 'Can you handle multi-site and international SEO?',
      answer: 'Absolutely. Our enterprise SEO services include multi-site coordination, international SEO setup (hreflang), and global market optimization. We ensure consistent SEO performance across all your digital properties and international markets.',
      category: 'Multi-site',
      tags: ['Multi-site', 'International', 'Global']
    },
    {
      question: 'What enterprise tools and integrations do you use?',
      answer: 'We use enterprise-grade SEO tools including SEMrush Enterprise, Ahrefs Enterprise, Google Analytics 360, and custom enterprise dashboards. We also integrate with your existing enterprise systems and provide API access for seamless data flow.',
      category: 'Technology',
      tags: ['Tools', 'Integrations', 'Enterprise']
    },
    {
      question: 'How do you measure ROI for enterprise SEO?',
      answer: 'We provide comprehensive ROI measurement including organic traffic growth, lead generation, conversion rates, and revenue attribution. Our enterprise reporting includes stakeholder presentations, executive summaries, and detailed analytics dashboards.',
      category: 'ROI',
      tags: ['ROI', 'Analytics', 'Reporting']
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Questions', count: faqs.length },
    { id: 'Enterprise SEO', name: 'Enterprise SEO', count: faqs.filter(faq => faq.category === 'Enterprise SEO').length },
    { id: 'Results', name: 'Results & Timeline', count: faqs.filter(faq => faq.category === 'Results').length },
    { id: 'Enterprise', name: 'Enterprise Services', count: faqs.filter(faq => faq.category === 'Enterprise').length },
    { id: 'Multi-site', name: 'Multi-site SEO', count: faqs.filter(faq => faq.category === 'Multi-site').length },
    { id: 'Technology', name: 'Technology & Tools', count: faqs.filter(faq => faq.category === 'Technology').length },
    { id: 'ROI', name: 'ROI & Analytics', count: faqs.filter(faq => faq.category === 'ROI').length }
  ];

  // Auto-play approach steps
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveApproachStep((prev) => (prev + 1) % approachSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, approachSteps.length]);

  // Hero animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimationComplete(true);
    }, 500);

    const statsTimer = setTimeout(() => {
      setStatsCount({ retention: 95, satisfaction: 98, awards: 15 });
    }, 1500);

    const trustTimer = setTimeout(() => {
      setShowTrustBadges(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(statsTimer);
      clearTimeout(trustTimer);
    };
  }, []);

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

  const toggleFaq = (index: number) => {
    const newExpandedFaqs = new Set(expandedFaqs);
    if (newExpandedFaqs.has(index)) {
      newExpandedFaqs.delete(index);
    } else {
      newExpandedFaqs.add(index);
    }
    setExpandedFaqs(newExpandedFaqs);
  };

  const expandAllFaqs = () => {
    const allFaqIndices = new Set(faqs.map((_, index) => index));
    setExpandedFaqs(allFaqIndices);
  };

  const collapseAllFaqs = () => {
    setExpandedFaqs(new Set());
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(faqSearchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(faqSearchTerm.toLowerCase());
    const matchesCategory = selectedFaqCategory === 'all' || faq.category === selectedFaqCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 via-purple-950 via-purple-900 to-purple-900 text-white">
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
              <div className={`w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 transition-all duration-1000 ${
                heroAnimationComplete ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
              }`}>
                <Target className={`h-10 w-10 text-white transition-all duration-1000 ${
                  heroAnimationComplete ? 'scale-100' : 'scale-0'
                }`} />
              </div>
            </div>

            {/* Animated Title */}
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              MarkTechRover: Enterprise <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent font-extrabold">SEO Agency</span> for Delhi, NCR & India
            </h1>

            {/* Animated Description */}
            <p className={`text-xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Grow at enterprise scale with a Delhi-based team blending AI insights and full-funnel SEO. We prioritize revenue impact, executive-ready reporting, and scalable programs tailored to India’s search landscape.
            </p>

            {/* Interactive Stats Row */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-500 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  {statsCount.retention}%
                </div>
                <div className="text-gray-300 font-semibold">Retention Rate</div>
                <div className="text-gray-500 text-sm">Industry average: 50%</div>
                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  {statsCount.satisfaction}%
                </div>
                <div className="text-gray-300 font-semibold">Client Satisfaction</div>
                <div className="text-gray-500 text-sm">Industry average: 72%</div>
                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  {statsCount.awards}
                </div>
                <div className="text-gray-300 font-semibold">SEO Awards</div>
                <div className="text-gray-500 text-sm">Won in 2024 Alone</div>
                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className={`flex flex-wrap justify-center gap-6 mb-8 transition-all duration-1000 delay-700 ${
              showTrustBadges ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
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
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Get Free SEO Consultation</span>
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
            <div className={`mt-8 transition-all duration-1000 delay-1200 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why MarkTechRover Enterprise (new layout with animations) */}
        <section className="py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
              <Trophy className="h-4 w-4 mr-2" />
              Why MarkTechRover Enterprise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Built For Complex, High‑Scale SEO</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Dedicated team, executive reporting, and AI‑powered insights — engineered for multi‑site, multi‑market organizations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Cpu className="h-5 w-5" />, title: 'AI + Data Advantage', desc: 'LLM‑aided research and forecasting with transparent dashboards your execs will love.' },
              { icon: <Users className="h-5 w-5" />, title: 'Enterprise Pods', desc: 'Cross‑functional pod: strategist, technical lead, content lead, and analyst on every account.' },
              { icon: <Shield className="h-5 w-5" />, title: 'Governance & Security', desc: 'Change control, reviews, and enterprise‑grade practices that scale across brands.' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-purple-400/30"
                style={{ animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: `${idx * 120}ms` }}
              >
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl transition-all duration-500 group-hover:translate-y-6" />
                <div className="flex items-center space-x-3 mb-3 text-purple-300">
                  {card.icon}
                  <h3 className="text-white font-semibold">{card.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Deliverables Section */}
        <section id="deliverables" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Deliverables: What You Get Each Month
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                At Marktechrover, our enterprise deliverables are crafted to help large organizations outrank the competition, win qualified traffic, and convert more leads—month after month:
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Side - Navigation */}
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-br from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm p-6">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                    <Menu className="h-5 w-5 text-purple-400" />
                    <span>Our Enterprise Deliverables</span>
                  </h3>
                  
                  <div className="space-y-2">
                    {deliverables.map((deliverable, index) => (
                      <button
                        key={index}
                        onClick={() => setExpandedDeliverable(index)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                          expandedDeliverable === index
                            ? 'bg-gradient-to-r from-purple-500/20 to-purple-400/20 border border-purple-400/50 shadow-lg shadow-purple-500/25'
                            : 'bg-gradient-to-r from-gray-800/20 to-gray-700/20 border border-gray-600/20 hover:border-purple-400/30 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-purple-400/10'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            expandedDeliverable === index
                              ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/25'
                              : 'bg-gradient-to-br from-gray-600 to-gray-700 group-hover:from-purple-500 group-hover:to-purple-600'
                          }`}>
                            {deliverable.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-semibold transition-colors duration-300 ${
                              expandedDeliverable === index ? 'text-purple-300' : 'text-gray-300 group-hover:text-purple-300'
                            }`}>
                              {deliverable.title}
                            </h4>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                            expandedDeliverable === index
                              ? 'border-purple-400 bg-purple-500'
                              : 'border-gray-400 group-hover:border-purple-400'
                          }`}>
                            {expandedDeliverable === index && (
                              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-br from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm p-8">
                  {deliverables.map((deliverable, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        expandedDeliverable === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute pointer-events-none'
                      }`}
                    >
                      {/* Header */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                          {deliverable.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-2">{deliverable.title}</h2>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-8 p-6 bg-gradient-to-r from-purple-900/10 to-purple-800/10 rounded-xl border border-purple-500/20">
                        <p className="text-purple-200 text-lg leading-relaxed">{deliverable.description}</p>
                      </div>

                      {/* Content Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* What's Included */}
                        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/20">
                          <h3 className="text-lg font-semibold text-purple-300 mb-4 flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span>What's Included</span>
                          </h3>
                          <ul className="space-y-3 text-gray-300">
                            {deliverable.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Enterprise Benefits */}
                        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/20">
                          <h3 className="text-lg font-semibold text-purple-300 mb-4 flex items-center space-x-2">
                            <TrendingUp className="h-5 w-5 text-purple-400" />
                            <span>Enterprise Benefits</span>
                          </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm">Scalability</span>
                            <span className="text-purple-300 font-semibold text-sm">Enterprise‑Grade</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm">Security</span>
                            <span className="text-purple-300 font-semibold text-sm">SOC 2 Compliant</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm">Support</span>
                            <span className="text-purple-300 font-semibold text-sm">24/7 Dedicated</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm">Integration</span>
                            <span className="text-purple-300 font-semibold text-sm">API Ready</span>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Packages Section */}
        <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/5 via-transparent to-purple-900/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
                <BarChart3 className="h-4 w-4 mr-2" />
                Enterprise Pricing
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Enterprise SEO Plans Built for Scale</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">Transparent monthly packages tailored for large organizations in Delhi, NCR, and pan‑India. Each plan includes executive reporting, dashboards, and quarterly strategy reviews.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  index === 1 
                    ? 'bg-transparent border-white/40 shadow-lg' 
                    : index === 0
                    ? 'bg-transparent border-white/25'
                    : 'bg-transparent border-white/25'
                }`}
              >
                {/* Popular Badge */}
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 text-white py-2 text-center text-xs font-bold border-b border-white/30 backdrop-blur-sm">
                    🔥 MOST POPULAR - 67% CHOOSE THIS
                  </div>
                )}

                {/* Discount Badge */}
                <div className="absolute top-8 right-3">
                  <div className="bg-transparent text-white px-2 py-1 rounded-full text-xs font-bold border border-white/40">SAVE ₹10,000</div>
                </div>

                {/* Package Header */}
                <div className={`p-6 ${index === 1 ? 'pt-12' : 'pt-10'}`}>
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-white/10`}>
                      {index === 0 && <Target className="h-8 w-8 text-white" />}
                      {index === 1 && <Crown className="h-8 w-8 text-white" />}
                      {index === 2 && <Trophy className="h-8 w-8 text-white" />}
                    </div>
                    <h3 className={`text-2xl font-bold mb-3 ${index === 1 ? 'text-white' : 'text-gray-200'}`}>
                      {pkg.name}
                    </h3>
                    
                    {/* Best For */}
                    <div className="mb-3">
                      <p className="text-xs text-gray-300 italic">{pkg.bestFor}</p>
                    </div>
                    
                    {/* Pricing with Psychological Anchoring */}
                    <div className="mb-5">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-sm text-gray-400 line-through">{pkg.originalPrice}</span>
                        <span className="text-xs text-white bg-transparent border border-white/40 px-2 py-1 rounded font-bold">SAVE {pkg.savings}</span>
                      </div>
                      <div className="text-4xl font-bold text-white mb-2">
                        {pkg.price}
                      </div>
                      <div className="text-xs text-gray-300 mb-1">Initial Setup</div>
                      <div className="text-lg font-semibold text-white mb-1">{pkg.monthlyPrice}</div>
                      <div className="text-xs text-gray-300">Monthly After Setup</div>
                    </div>
                  </div>
                  
                  {/* Package Details */}
                  <div className="space-y-4">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-3 p-3 bg-transparent rounded-lg border border-white/20">
                      <div className="text-center">
                        <div className="text-sm font-bold text-white">{pkg.keyphrases}</div>
                        <div className="text-xs text-gray-300">Keywords</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-white">{pkg.pages}</div>
                        <div className="text-xs text-gray-300">Pages</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-white">{pkg.contentAssets}</div>
                        <div className="text-xs text-gray-300">Assets</div>
                      </div>
                    </div>
                    
                    {/* Expected Results */}
                    <div className="p-3 bg-transparent rounded-lg border border-white/20">
                      <h4 className="text-xs font-semibold text-white mb-2 flex items-center space-x-2">
                        <TrendingUp className="h-3 w-3" />
                        <span>Expected Results (3 months)</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-2 bg-transparent rounded border border-white/15">
                          <div className="text-sm font-bold text-white">
                            {index === 0 ? '+80%' : index === 1 ? '+150%' : '+200%'}
                          </div>
                          <div className="text-xs text-gray-300">Organic Traffic</div>
                        </div>
                        <div className="text-center p-2 bg-transparent rounded border border-white/15">
                          <div className="text-sm font-bold text-white">
                            {index === 0 ? '+120%' : index === 1 ? '+200%' : '+300%'}
                          </div>
                          <div className="text-xs text-gray-300">Lead Generation</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3">What's Included:</h4>
                      <div className="space-y-2">
                        {pkg.features.slice(0, 6).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-gray-200 text-xs leading-relaxed">{feature}</span>
                          </div>
                        ))}
                        {pkg.features.length > 6 && (
                          <div className="text-center pt-1">
                            <span className="text-xs text-white/80">+{pkg.features.length - 6} more features</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Exclusive Features for Middle Option */}
                    {index === 1 && pkg.exclusiveFeatures && (
                      <div className="p-3 bg-transparent rounded-lg border border-white/20">
                        <h4 className="text-xs font-semibold text-white mb-2 flex items-center space-x-2">
                          <Star className="h-3 w-3" />
                          <span>Professional Exclusive Features</span>
                        </h4>
                        <div className="space-y-1">
                          {pkg.exclusiveFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-gray-200 text-xs leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="p-6 pt-0">
                  <Link
                    to="/contact"
                    className={`block w-full text-center px-4 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 ${
                      index === 1
                        ? 'bg-white/10 hover:bg-white/20 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    {index === 1 ? '🔥 Get Started Now - Most Popular' : 'Choose This Plan'}
                  </Link>
                  
                  {/* Trust Elements */}
                  <div className="mt-4 text-center">
                    <div className="flex items-center justify-center space-x-1 text-xs text-gray-400">
                      <Shield className="h-3 w-3" />
                      <span>Enterprise Security</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300 mb-2">500+</div>
                <div className="text-gray-400 text-sm">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300 mb-2">₹3.2B+</div>
                <div className="text-gray-400 text-sm">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300 mb-2">98%</div>
                <div className="text-gray-400 text-sm">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Enterprise Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Our Approach Section */}
        <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Approach: Transparent, Holistic, Results-Driven
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven 5-step process that delivers consistent results
              </p>
            </div>

            {/* Interactive Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">Progress through our process</span>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`flex items-center space-x-2 px-3 py-1 rounded-lg text-sm transition-all duration-300 ${
                      isAutoPlaying
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {isAutoPlaying ? (
                      <>
                        <X className="h-4 w-4" />
                        <span>Stop Auto-Play</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        <span>Auto-Play</span>
                      </>
                    )}
                  </button>
                  <span className="text-sm text-purple-400 font-semibold">Step {activeApproachStep + 1} of 5</span>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((activeApproachStep + 1) / 5) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {/* Interactive Steps Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
              {approachSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-500 transform ${
                    activeApproachStep === index 
                      ? 'scale-105' 
                      : hoveredStep === index 
                      ? 'scale-102' 
                      : 'scale-100'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                  onClick={() => setActiveApproachStep(index)}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div 
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 relative ${
                      activeApproachStep === index
                        ? `bg-gradient-to-br ${step.bgColor} border-purple-400 shadow-lg shadow-purple-500/25`
                        : 'bg-gray-800/50 border-gray-600 hover:border-purple-500/50'
                    }`}
                    onMouseEnter={() => setShowTooltip(index)}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      activeApproachStep === index
                        ? `bg-gradient-to-br ${step.color} shadow-lg`
                        : 'bg-gray-700'
                    }`}>
                      <div className={`transition-all duration-300 ${
                        activeApproachStep === index ? 'text-white' : 'text-gray-400'
                      }`}>
                        {step.icon}
                      </div>
                    </div>
                    <h3 className={`text-sm font-bold mb-2 transition-all duration-300 ${
                      activeApproachStep === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {step.title}
                    </h3>
                    <div className={`text-xs transition-all duration-300 ${
                      activeApproachStep === index ? 'text-purple-300' : 'text-gray-500'
                    }`}>
                      {step.duration}
                    </div>
                    
                    {/* Tooltip */}
                    {showTooltip === index && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg border border-gray-700 z-10 whitespace-nowrap">
                        Click to learn more about {step.title}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Active indicator */}
                  {activeApproachStep === index && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  )}
                  
                  {/* Progress indicator */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full px-2">
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div 
                        className={`h-1 rounded-full transition-all duration-500 ${
                          index <= activeApproachStep 
                            ? 'bg-gradient-to-r from-purple-500 to-purple-600' 
                            : 'bg-gray-600'
                        }`}
                        style={{ 
                          width: index <= activeApproachStep ? '100%' : '0%',
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
                <div className={`w-16 h-16 bg-gradient-to-br ${approachSteps[activeApproachStep].color} rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 flex-shrink-0`}>
                  <div className="text-white">
                    {approachSteps[activeApproachStep].icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {approachSteps[activeApproachStep].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">
                    {approachSteps[activeApproachStep].detailedDescription}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Duration: {approachSteps[activeApproachStep].duration}</span>
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
                    {approachSteps[activeApproachStep].deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-2xl p-6 border border-purple-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 text-purple-400 mr-2" />
                    Expected Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Traffic Growth</span>
                      <span className="text-green-400 font-semibold">+150-300%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Ranking Improvement</span>
                      <span className="text-blue-400 font-semibold">Top 10</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Lead Generation</span>
                      <span className="text-purple-400 font-semibold">+200-400%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">ROI Timeline</span>
                      <span className="text-yellow-400 font-semibold">3-6 Months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Technology Section (anchor target for sticky nav) */}
        <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
                <Cpu className="h-4 w-4 mr-2" />
                Enterprise Technology
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Data, Automation, Visibility</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">Executive dashboards, automated monitoring, and LLM‑aided insights keep your program proactive and accountable.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Activity className="h-6 w-6" />, title: 'Realtime Rank & Issue Alerts', desc: 'Daily rank tracking, crawl health, and alerting across brands and markets.' },
                { icon: <BarChart className="h-6 w-6" />, title: 'Executive Dashboards', desc: 'One view for traffic, conversions, and revenue with multi‑site rollups.' },
                { icon: <Brain className="h-6 w-6" />, title: 'AI Research & Forecasting', desc: 'LLM‑assisted keyword and content planning with outcome projections.' },
              ].map((card, i) => (
                <div key={i} className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/10 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl" />
                  <div className="flex items-center space-x-3 mb-3 text-purple-300">
                    {card.icon}
                    <h3 className="text-white font-semibold">{card.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise SEO FAQs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about enterprise SEO services and solutions.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={faqSearchTerm}
                  onChange={(e) => setFaqSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={expandAllFaqs}
                  className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300"
                >
                  Expand All
                </button>
                <button
                  onClick={collapseAllFaqs}
                  className="px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300"
                >
                  Collapse All
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedFaqCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedFaqCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <AlertTriangle className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No FAQs Found</h3>
                <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const originalIndex = faqs.indexOf(faq);
                const isExpanded = expandedFaqs.has(originalIndex);
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                      isExpanded
                        ? 'bg-gray-900/50 border-purple-500/30 shadow-lg'
                        : 'bg-gray-800/30 border-gray-700 hover:border-gray-600'
                    }`}>
                    <button
                      onClick={() => toggleFaq(originalIndex)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                        <div className="flex flex-wrap gap-2">
                          {faq.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className={`ml-4 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}>
                        <ChevronDown className="h-5 w-5 transition-transform duration-300" />
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className="px-6 pb-4">
                        <div className="pt-4 border-t border-gray-700">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* FAQ Summary */}
          <div className="mt-12 text-center">
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our enterprise SEO experts are here to help. Get personalized answers to your specific enterprise SEO needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contact Enterprise Team
                </Link>
                <button className="inline-flex items-center px-6 py-3 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-500/20 rounded-lg font-semibold transition-all duration-300">
                  <Phone className="h-5 w-5 mr-2" />
                  Schedule Enterprise Call
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EnterpriseSeoServices;
