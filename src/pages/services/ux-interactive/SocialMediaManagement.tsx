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
  Share2,
  MessageCircle,
  Camera,
  Video as VideoIcon
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const SocialMediaManagement = () => {
  const [activeSection, setActiveSection] = useState('deliverables');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedDeliverable, setExpandedDeliverable] = useState<number>(0);

  const navItems = [
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'packages', label: 'Social Media Packages', icon: <DollarSign className="h-4 w-4" /> },
    { id: 'technology', label: 'Social Media Technology', icon: <Cpu className="h-4 w-4" /> },
    { id: 'case-studies', label: 'Social Media Case Studies', icon: <Trophy className="h-4 w-4" /> },
    { id: 'approach', label: 'Social Media Approach', icon: <Rocket className="h-4 w-4" /> },
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
    title: 'Social Media Management Services in Delhi | Best Social Media Agency NCR',
    description: 'Leading social media management services in Delhi NCR. Best social media agency in Delhi offering comprehensive social media management. Professional social media services India with proven results.',
    keywords: [
      'Social Media Management Services Delhi',
      'Best social media agency in Delhi',
      'Social media agency NCR',
      'Best social media services in India',
      'Professional social media services India',
      'Social media experts in Delhi NCR',
      'Social media agency India',
      'Social media marketing Delhi',
      'Social media management NCR',
      'Social media advertising Delhi'
    ],
    url: '/services/ux-interactive/social-media-management',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'Ritik Kumar Poddar',
    section: 'Social Media Management Services',
    tags: ['Social Media Management', 'Social Media Marketing', 'Content Creation', 'Community Management'],
    image: '/images/social-media-management-services.webp'
  };

  const deliverables = [
    {
      id: 1,
      title: 'Social Media Strategy Development',
      description: 'Comprehensive social media strategy tailored to your brand and business goals',
      icon: <Target className="h-6 w-6" />,
      features: [
        'Platform-specific strategy development',
        'Content calendar planning and scheduling',
        'Audience research and targeting',
        'Competitive analysis and benchmarking',
        'Brand voice and tone guidelines',
        'Performance metrics and KPIs'
      ],
      expanded: true
    },
    {
      id: 2,
      title: 'Content Creation & Curation',
      description: 'Engaging content creation and curation across all social media platforms',
      icon: <FileText className="h-6 w-6" />,
      features: [
        'Original content creation (posts, images, videos)',
        'Content curation and repurposing',
        'Visual design and graphics creation',
        'Video content production and editing',
        'Copywriting and caption creation',
        'Hashtag research and optimization'
      ],
      expanded: false
    },
    {
      id: 3,
      title: 'Community Management',
      description: 'Active community management and engagement across all platforms',
      icon: <Users className="h-6 w-6" />,
      features: [
        'Daily community monitoring and engagement',
        'Comment and message response management',
        'User-generated content management',
        'Influencer collaboration and outreach',
        'Crisis management and reputation monitoring',
        'Community guidelines and moderation'
      ],
      expanded: false
    },
    {
      id: 4,
      title: 'Social Media Advertising',
      description: 'Strategic social media advertising campaigns for maximum reach and engagement',
      icon: <TrendingUp className="h-6 w-6" />,
      features: [
        'Facebook and Instagram advertising',
        'LinkedIn advertising campaigns',
        'Twitter advertising management',
        'TikTok and YouTube advertising',
        'Audience targeting and optimization',
        'Ad performance tracking and reporting'
      ],
      expanded: false
    },
    {
      id: 5,
      title: 'Influencer Marketing',
      description: 'Strategic influencer marketing campaigns to amplify your brand reach',
      icon: <Star className="h-6 w-6" />,
      features: [
        'Influencer research and identification',
        'Campaign strategy and planning',
        'Influencer outreach and collaboration',
        'Content creation and approval',
        'Campaign performance tracking',
        'ROI analysis and reporting'
      ],
      expanded: false
    },
    {
      id: 6,
      title: 'Analytics & Reporting',
      description: 'Comprehensive social media analytics and performance reporting',
      icon: <BarChart3 className="h-6 w-6" />,
      features: [
        'Social media performance tracking',
        'Engagement rate analysis',
        'Follower growth monitoring',
        'Content performance analysis',
        'Competitive benchmarking',
        'Monthly performance reports'
      ],
      expanded: false
    }
  ];

  const socialMediaPackages = [
    {
      name: 'Social Media Starter',
      price: '₹25,000',
      period: '/month',
      description: 'Perfect for small businesses starting their social media journey',
      features: [
        'Social media strategy development',
        'Content creation (15 posts/month)',
        'Community management (2 platforms)',
        'Basic social media advertising',
        'Monthly performance reporting',
        'Dedicated social media specialist',
        'Quarterly strategy reviews'
      ],
      highlighted: false,
      cta: 'Get Started'
    },
    {
      name: 'Social Media Professional',
      price: '₹45,000',
      period: '/month',
      description: 'Comprehensive social media management for growing businesses',
      features: [
        'Everything in Starter, plus:',
        'Advanced content creation (30 posts/month)',
        'Community management (4 platforms)',
        'Advanced social media advertising',
        'Influencer marketing campaigns',
        'Video content production',
        'Weekly performance calls',
        'Priority support'
      ],
      highlighted: true,
      cta: 'Most Popular'
    },
    {
      name: 'Social Media Enterprise',
      price: '₹75,000',
      period: '/month',
      description: 'Full-service social media management for large businesses',
      features: [
        'Everything in Professional, plus:',
        'Unlimited content creation',
        'Community management (all platforms)',
        'Advanced influencer marketing',
        'Crisis management and monitoring',
        'Custom social media tools',
        'Dedicated social media team',
        '24/7 priority support',
        'Custom reporting dashboard'
      ],
      highlighted: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <PageSEO config={seoConfig}>
      <div className="min-h-screen ">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.2),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-6">
                <Share2 className="h-4 w-4 mr-2" />
                Social Media Management Services
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                Social Media Management Services in Delhi
              </h1>
              
              <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Best social media agency in Delhi NCR offering comprehensive social media management. 
                Professional social media services India with proven results and engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  <Target className="h-5 w-5 mr-2" />
                  Get Social Media Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                
                <button className="inline-flex items-center px-8 py-4 bg-gray-900/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-900/20 hover:scale-105">
                  <Play className="h-5 w-5 mr-2" />
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">₹1.5B+</div>
                <div className="text-gray-300">Revenue Generated from Social Media</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">850%</div>
                <div className="text-gray-300">Average Engagement Rate Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">95%</div>
                <div className="text-gray-300">Client Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        {isNavSticky && (
          <div className="sticky top-20 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-8 overflow-x-auto py-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                      activeSection === item.id
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-300 hover:text-purple-300 hover:bg-purple-50'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Deliverables Section */}
          <section id="deliverables" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Social Media Management Deliverables
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive social media management services designed for brand growth. 
                Best social media agency in Delhi NCR delivering measurable engagement and results.
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

          {/* Social Media Packages Section */}
          <section id="packages" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Social Media Management Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive social media solutions. Best social media services in India with flexible packages 
                designed for businesses of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {socialMediaPackages.map((pkg, index) => (
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
                Social Media Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced social media technology stack powering engagement. 
                Professional social media services India with cutting-edge tools and platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Social Media Platforms',
                  description: 'Comprehensive social media platform management',
                  icon: <Share2 className="h-8 w-8" />,
                  features: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok', 'YouTube']
                },
                {
                  title: 'Content Creation Tools',
                  description: 'Professional content creation and design tools',
                  icon: <Camera className="h-8 w-8" />,
                  features: ['Canva', 'Adobe Creative Suite', 'Figma', 'CapCut', 'InShot', 'VSCO']
                },
                {
                  title: 'Social Media Management',
                  description: 'Advanced social media management platforms',
                  icon: <Settings className="h-8 w-8" />,
                  features: ['Hootsuite', 'Buffer', 'Sprout Social', 'Later', 'Socialbakers', 'Agorapulse']
                },
                {
                  title: 'Analytics & Reporting',
                  description: 'Comprehensive social media analytics tools',
                  icon: <BarChart3 className="h-8 w-8" />,
                  features: ['Google Analytics', 'Facebook Insights', 'Instagram Analytics', 'LinkedIn Analytics', 'Twitter Analytics', 'Socialbakers']
                },
                {
                  title: 'Influencer Marketing',
                  description: 'Influencer marketing and collaboration platforms',
                  icon: <Star className="h-8 w-8" />,
                  features: ['AspireIQ', 'Upfluence', 'NeoReach', 'Influencer.co', 'BuzzSumo', 'Klear']
                },
                {
                  title: 'Advertising Platforms',
                  description: 'Social media advertising and campaign management',
                  icon: <TrendingUp className="h-8 w-8" />,
                  features: ['Facebook Ads Manager', 'Instagram Ads', 'LinkedIn Campaign Manager', 'Twitter Ads', 'TikTok Ads', 'YouTube Ads']
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
                Social Media Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from social media campaigns. Best social media agency in Delhi NCR 
                delivering measurable engagement and brand growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'E-commerce Brand',
                  description: '500% increase in social media engagement and 300% sales growth',
                  metrics: ['500% Engagement', '300% Sales Growth', '6 Months'],
                  image: '/images/case-studies/ecommerce-social.webp'
                },
                {
                  title: 'B2B Technology Company',
                  description: '400% increase in LinkedIn leads and 250% brand awareness',
                  metrics: ['400% LinkedIn Leads', '250% Brand Awareness', '8 Months'],
                  image: '/images/case-studies/b2b-social.webp'
                },
                {
                  title: 'Restaurant Chain',
                  description: '600% increase in Instagram followers and 450% online orders',
                  metrics: ['600% Followers', '450% Online Orders', '4 Months'],
                  image: '/images/case-studies/restaurant-social.webp'
                },
                {
                  title: 'Fashion Brand',
                  description: '800% increase in TikTok engagement and 350% website traffic',
                  metrics: ['800% TikTok Engagement', '350% Website Traffic', '12 Months'],
                  image: '/images/case-studies/fashion-social.webp'
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
                Social Media Management Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven methodology for social media success. Social media experts in Delhi NCR 
                delivering comprehensive solutions for brand growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Strategy Development',
                  description: 'Comprehensive social media strategy and planning',
                  icon: <Target className="h-8 w-8" />
                },
                {
                  step: '02',
                  title: 'Content Creation',
                  description: 'Engaging content creation and curation',
                  icon: <FileText className="h-8 w-8" />
                },
                {
                  step: '03',
                  title: 'Community Management',
                  description: 'Active community engagement and management',
                  icon: <Users className="h-8 w-8" />
                },
                {
                  step: '04',
                  title: 'Growth & Optimization',
                  description: 'Continuous optimization and growth strategies',
                  icon: <TrendingUp className="h-8 w-8" />
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
                Social Media Management FAQs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about social media management services. Best social media agency in Delhi 
                providing transparent answers and solutions.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What social media platforms do you manage?',
                  answer: 'We manage all major social media platforms including Facebook, Instagram, LinkedIn, Twitter, TikTok, YouTube, and Pinterest. We choose the best platforms based on your target audience and business goals.'
                },
                {
                  question: 'How long does it take to see results from social media management?',
                  answer: 'Social media results typically start showing within 1-2 months, with significant improvements in 3-6 months. Engagement and brand awareness can improve quickly, while lead generation and sales may take longer.'
                },
                {
                  question: 'What is the typical investment for social media management?',
                  answer: 'Social media management services typically range from ₹25,000 to ₹75,000 per month depending on the number of platforms, content volume, and scope of work. We provide custom quotes based on your specific needs.'
                },
                {
                  question: 'Do you work with businesses outside Delhi NCR?',
                  answer: 'Yes, we work with businesses across India and internationally. Our social media management services are not limited by geography and can be delivered remotely with excellent results.'
                },
                {
                  question: 'How do you measure social media success?',
                  answer: 'We track comprehensive KPIs including engagement rates, follower growth, reach and impressions, click-through rates, lead generation, and ROI. We provide detailed monthly reports with actionable insights.'
                },
                {
                  question: 'Do you provide social media advertising services?',
                  answer: 'Yes, we provide comprehensive social media advertising services including campaign strategy, ad creation, audience targeting, optimization, and performance tracking across all major platforms.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-900 rounded-xl border border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Best social media agency in Delhi NCR offering comprehensive social media management services. 
              Get started with professional social media services India today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-purple-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Social Media Quote
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-purple-700 text-white font-semibold rounded-xl hover:bg-purple-600 transition-all duration-300">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      </PageSEO>
  );
};

export default SocialMediaManagement; 