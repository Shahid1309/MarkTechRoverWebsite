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

const LocalSeoServices = () => {
  const [activeSection, setActiveSection] = useState('deliverables');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedDeliverable, setExpandedDeliverable] = useState<number>(0); // First item always expanded
  const [activeApproachStep, setActiveApproachStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set([0])); // First FAQ expanded by default
  const [faqSearchTerm, setFaqSearchTerm] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState('all');
  const [heroAnimationComplete, setHeroAnimationComplete] = useState(false);
  const [statsCount, setStatsCount] = useState({ retention: 0, satisfaction: 0, awards: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showTrustBadges, setShowTrustBadges] = useState(false);

  const navItems = [
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'packages', label: 'Local SEO Packages', icon: <DollarSign className="h-4 w-4" /> },
    { id: 'approach', label: 'Local SEO Approach', icon: <Rocket className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  const deliverables = [
    {
      id: 1,
      title: 'Local SEO Strategy & Planning',
      description: 'Comprehensive local SEO strategy development including market research, competitor analysis, and location-based keyword planning tailored to your local business goals.',
      icon: <Target className="h-6 w-6" />,
      features: [
        'Local market research and competitor analysis',
        'Location-based keyword strategy development',
        'Local business listing optimization plan',
        'Target audience identification by location',
        'Local KPI and goal setting',
        'Local performance tracking setup'
      ]
    },
    {
      id: 2,
      title: 'Google My Business Optimization',
      description: 'Complete Google My Business profile optimization including listing management, review management, and local search visibility enhancement.',
      icon: <Search className="h-6 w-6" />,
      features: [
        'Google My Business profile setup and optimization',
        'Business listing management across platforms',
        'Review management and response strategy',
        'Local photo and video optimization',
        'Local post creation and management',
        'Local search visibility enhancement'
      ]
    },
    {
      id: 3,
      title: 'Local Keyword Research & Optimization',
      description: 'Strategic local keyword research and on-page optimization to target location-specific search terms and improve local rankings.',
      icon: <TrendingUp className="h-6 w-6" />,
      features: [
        'Local keyword research and analysis',
        'On-page local SEO optimization',
        'Local content strategy development',
        'Local schema markup implementation',
        'Local link building strategies',
        'Local SEO performance reporting'
      ]
    },
    {
      id: 4,
      title: 'Local Citation Building & Management',
      description: 'Comprehensive local citation building and management across all major directories and local business platforms.',
      icon: <Users className="h-6 w-6" />,
      features: [
        'Local business directory submissions',
        'Citation consistency management',
        'NAP (Name, Address, Phone) optimization',
        'Local business listing cleanup',
        'Citation monitoring and maintenance',
        'Local directory relationship building'
      ]
    },
    {
      id: 5,
      title: 'Local Content Marketing',
      description: 'High-quality local content creation including location-specific blog posts, local guides, and community-focused content.',
      icon: <PenTool className="h-6 w-6" />,
      features: [
        'Local content strategy development',
        'Location-specific blog post creation',
        'Local business guides and resources',
        'Community-focused content creation',
        'Local email marketing campaigns',
        'Local content performance analysis'
      ]
    },
    {
      id: 6,
      title: 'Local Analytics & Performance Tracking',
      description: 'Comprehensive local analytics setup and reporting to track local search performance, local traffic, and local business metrics.',
      icon: <BarChart3 className="h-6 w-6" />,
      features: [
        'Local search analytics setup',
        'Local traffic tracking and analysis',
        'Local conversion tracking implementation',
        'Local performance reporting',
        'Local competitor analysis',
        'Local ROI tracking and attribution'
      ]
    }
  ];

  const packages = [
    {
      name: 'Local SEO Starter',
      price: '₹25,000',
      monthlyPrice: '₹12,500/mo',
      keyphrases: 'Up to 50',
      pages: 'Up to 15',
      contentAssets: '6',
      originalPrice: '₹35,000',
      savings: '₹10,000',
      features: [
        'Basic Local SEO Strategy',
        'Google My Business Setup',
        'Local Keyword Research (50 keywords)',
        'Basic Local Citation Building',
        'Local Content Creation (3 pieces/month)',
        'Basic Local Analytics Setup',
        'Monthly Local Performance Reports',
        'Email Support'
      ],
      bestFor: 'Small local businesses starting with local SEO',
      limitations: ['Limited location coverage', 'Basic reporting only', 'No priority support']
    },
    {
      name: 'Local SEO Professional',
      price: '₹45,000',
      monthlyPrice: '₹22,500/mo',
      keyphrases: 'Up to 100',
      pages: 'Up to 30',
      contentAssets: '15',
      originalPrice: '₹55,000',
      savings: '₹10,000',
      features: [
        'Comprehensive Local SEO Strategy',
        'Advanced Google My Business Management',
        'Local Keyword Research (100 keywords)',
        'Complete Local Citation Building',
        'Local Content Marketing Strategy',
        'Local Link Building Campaigns',
        'Advanced Local Analytics & Reporting',
        'Local Competitor Analysis',
        'Dedicated Local SEO Manager',
        'Priority Phone & Email Support',
        'Local Review Management',
        'Local Schema Implementation',
        'Local Social Media Integration',
        'Local Mobile Optimization',
        'Local Voice Search Optimization'
      ],
      bestFor: 'Growing local businesses serious about local SEO results',
      exclusiveFeatures: ['Exclusive: AI-Powered Local Optimization', 'Exclusive: Advanced Local Competitor Tracking', 'Exclusive: Custom Local SEO Dashboard']
    },
    {
      name: 'Local SEO Enterprise',
      price: '₹85,000',
      monthlyPrice: '₹42,500/mo',
      keyphrases: 'Up to 200',
      pages: 'Up to 60',
      contentAssets: '30',
      originalPrice: '₹95,000',
      savings: '₹10,000',
      features: [
        'Everything in Professional',
        'Enterprise Local SEO Strategy',
        'Advanced Local Keyword Research (200+ keywords)',
        'Multi-location Local SEO Management',
        'Advanced Local Content Marketing',
        'Local PR and Community Building',
        'Advanced Local Analytics & Custom Reports',
        'Weekly Local Performance Reviews',
        'Dedicated Local SEO Team (3 specialists)',
        '24/7 Priority Support',
        'Custom Local SEO Tools & Integrations',
        'Advanced Local Schema Implementation',
        'Local Voice Search Strategy',
        'Local Video SEO Optimization',
        'Local Influencer Marketing'
      ],
      bestFor: 'Large local businesses requiring maximum local SEO impact',
      limitations: ['Higher investment required', 'Complex implementation timeline']
    }
  ];

  const approachSteps = [
    {
      id: 1,
      title: 'Local SEO Discovery & Analysis',
      description: 'Comprehensive analysis of your local presence, goals, and current local search performance',
      detailedDescription: 'We conduct a thorough analysis of your current local SEO performance, local competitor strategies, and market opportunities. This includes local technical audits, local keyword gap analysis, and local content performance review.',
      duration: '2-3 weeks',
      deliverables: ['Local SEO Audit Report', 'Local Competitor Analysis', 'Local Keyword Research', 'Local Content Gap Analysis'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/20 to-blue-600/20',
      icon: <Search className="h-6 w-6" />
    },
    {
      id: 2,
      title: 'Local SEO Strategy Development',
      description: 'Custom local SEO roadmap aligned with your local business objectives',
      detailedDescription: 'Based on our analysis findings, we create a personalized local SEO roadmap that aligns with your local business objectives. This includes local keyword prioritization, local content planning, and local timeline projections.',
      duration: '1-2 weeks',
      deliverables: ['Local SEO Strategy', 'Local Keyword List', 'Local Content Calendar', 'Local Timeline Projections'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20',
      icon: <Target className="h-6 w-6" />
    },
    {
      id: 3,
      title: 'Local Implementation',
      description: 'Simultaneous execution across local citations, content, and technical local SEO',
      detailedDescription: 'Our comprehensive local implementation covers all aspects of local SEO simultaneously. We optimize your local business listings, create location-specific content, build local citations, and ensure local technical excellence.',
      duration: 'Ongoing',
      deliverables: ['Local Citation Building', 'Local Content Creation', 'Local Link Building', 'Local Technical Improvements'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/20 to-green-600/20',
      icon: <Layers className="h-6 w-6" />
    },
    {
      id: 4,
      title: 'Local Performance Optimization',
      description: 'Continuous monitoring, testing, and optimization based on local data insights',
      detailedDescription: 'We continuously monitor your local performance, conduct local A/B testing, and optimize based on local data insights. Regular local strategy reviews ensure we stay ahead of local competition.',
      duration: 'Monthly',
      deliverables: ['Local Performance Monitoring', 'Local A/B Testing', 'Local Strategy Refinement', 'Local ROI Optimization'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/20 to-orange-600/20',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      id: 5,
      title: 'Local Scale & Growth',
      description: 'Strategic scaling of successful local campaigns and expansion to new locations',
      detailedDescription: 'We identify successful local campaigns and strategies, then scale them systematically while exploring new local opportunities and locations to maximize your local SEO ROI.',
      duration: 'Quarterly',
      deliverables: ['Local Campaign Scaling', 'New Location Expansion', 'Advanced Local Analytics', 'Local Growth Strategy'],
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-500/20 to-red-600/20',
      icon: <Rocket className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: 'What is local SEO and why is it important?',
      answer: 'Local SEO is the practice of optimizing your online presence to attract more business from relevant local searches. It\'s crucial for businesses that serve specific geographic areas as it helps you appear in local search results and Google Maps.',
      category: 'basics',
      tags: ['basics', 'importance']
    },
    {
      question: 'How long does it take to see local SEO results?',
      answer: 'Local SEO typically shows results within 1-3 months, with significant improvements in 3-6 months. Google My Business optimization can show immediate results, while citation building and content creation take longer to impact rankings.',
      category: 'timeline',
      tags: ['timeline', 'results']
    },
    {
      question: 'What is the cost of local SEO services?',
      answer: 'Our local SEO packages start from ₹25,000 for initial setup with monthly fees from ₹12,500. Pricing depends on your business size, target locations, and the level of local competition in your area.',
      category: 'pricing',
      tags: ['pricing', 'cost']
    },
    {
      question: 'Do you work with businesses in multiple locations?',
      answer: 'Yes, we specialize in multi-location local SEO. Our Enterprise package is specifically designed for businesses with multiple locations, providing comprehensive local SEO management across all your business locations.',
      category: 'multi-location',
      tags: ['multi-location', 'enterprise']
    },
    {
      question: 'What is Google My Business optimization?',
      answer: 'Google My Business optimization involves creating and optimizing your business profile on Google to improve local search visibility. This includes managing business information, photos, reviews, and local posts.',
      category: 'google-my-business',
      tags: ['google-my-business', 'optimization']
    },
    {
      question: 'How do you measure local SEO success?',
      answer: 'We track key local metrics including local search rankings, Google My Business views, local website traffic, local phone calls, local reviews, and local business inquiries. We provide detailed monthly reports.',
      category: 'analytics',
      tags: ['analytics', 'measurement']
    },
    {
      question: 'Do you provide local content creation services?',
      answer: 'Yes, we offer comprehensive local content creation including location-specific blog posts, local business guides, community-focused content, and local email marketing campaigns.',
      category: 'content',
      tags: ['content', 'creation']
    },
    {
      question: 'Can you help with local citation building?',
      answer: 'Absolutely! We provide complete local citation building including business directory submissions, NAP consistency management, citation cleanup, and ongoing citation monitoring and maintenance.',
      category: 'citations',
      tags: ['citations', 'directories']
    },
    {
      question: 'What makes your local SEO services different?',
      answer: 'Our data-driven local approach, experienced local SEO team, comprehensive local service offering, and proven local track record set us apart. We focus on delivering measurable local results.',
      category: 'differentiation',
      tags: ['differentiation', 'approach']
    },
    {
      question: 'Do you offer local review management?',
      answer: 'Yes, we specialize in local review management including review monitoring, review response strategies, review generation campaigns, and review reputation management.',
      category: 'reviews',
      tags: ['reviews', 'management']
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Questions', count: faqs.length },
    { id: 'basics', name: 'Basics', count: faqs.filter(faq => faq.category === 'basics').length },
    { id: 'pricing', name: 'Pricing', count: faqs.filter(faq => faq.category === 'pricing').length },
    { id: 'timeline', name: 'Timeline', count: faqs.filter(faq => faq.category === 'timeline').length },
    { id: 'google-my-business', name: 'Google My Business', count: faqs.filter(faq => faq.category === 'google-my-business').length },
    { id: 'analytics', name: 'Analytics', count: faqs.filter(faq => faq.category === 'analytics').length }
  ];

  // Helper functions
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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

  // Handle scroll for sticky navigation and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsNavSticky(scrollY > 200);

      // Determine active section based on scroll position
      const sections = ['deliverables', 'packages', 'approach', 'faqs'];
      let currentSection = 'deliverables';

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play approach steps
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveApproachStep(prev => (prev + 1) % approachSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, approachSteps.length]);

  // Hero section animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimationComplete(true);
    }, 500);

    // Animate stats counting
    const statsTimer = setTimeout(() => {
      setStatsCount({ retention: 95, satisfaction: 98, awards: 15 });
    }, 1500);

    // Show trust badges
    const trustTimer = setTimeout(() => {
      setShowTrustBadges(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(statsTimer);
      clearTimeout(trustTimer);
    };
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 via-purple-950 via-purple-900 to-purple-900">
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
              Marktechrover: Best <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent font-extrabold">Local SEO Services</span> in Delhi, NCR & India
            </h1>

            {/* Animated Description */}
            <p className={`text-xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
              heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Dominate your local market with Marktechrover—your results-driven partner for the best local SEO services in Delhi, NCR, and pan-India. Our process is transparent, tech-powered, and proven to create local ranking breakthroughs for businesses of all sizes.
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
                <div className="text-gray-300 font-semibold">Local SEO Awards</div>
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
                <span className="relative z-10">Get Free Local SEO Consultation</span>
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
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Local SEO Services</h2>
          <p className="text-gray-300">Professional local SEO services to boost your local visibility.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default LocalSeoServices;
