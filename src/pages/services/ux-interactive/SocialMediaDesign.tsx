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
  Camera,
  ArrowUpRight,
  RefreshCcw as RefreshIcon,
  TrendingDown,
  Gauge,
  Share2,
  Hash,
  AtSign,
  Image,
  Film,
  Type,
  Layers as LayersIcon
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const SocialMediaDesign = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Share2 className="h-4 w-4" /> },
    { id: 'services', label: 'Services', icon: <Sparkle className="h-4 w-4" /> },
    { id: 'platforms', label: 'Platforms', icon: <Globe className="h-4 w-4" /> },{ id: 'portfolio', label: 'Portfolio', icon: <Trophy className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavSticky(scrollPosition > 400);

      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
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
    title: "Social Media Design Services | Eye-Catching Graphics & Branding | MarkTechRover",
    description: "Professional social media design services. Eye-catching social media graphics and branding that engage your audience. Complete social media design solutions.",
    keywords: ["social media design","services","professional","expert","business","graphics","branding"],
    url: "/services/ux-interactive/social-media-design",
    type: "website" as const,
    publishedAt: "2025-08-05T06:37:20.354Z",
    modifiedAt: "2025-08-05T06:37:20.354Z",
    author: "MarkTechRover",
    section: "Services",
    tags: ["social media design","services"],
    image: "/images/services/social-media-design.jpg"
  };

  const services = [
    {
      id: 1,
      title: 'Social Media Graphics',
      description: 'Stunning visuals for all your social media posts and campaigns',
      icon: <Image className="h-8 w-8" />,
      color: 'from-purple-500 to-indigo-500',
      platforms: ['Instagram', 'Facebook', 'Twitter', 'LinkedIn'],
      deliverables: ['Post designs', 'Story graphics', 'Cover images', 'Banner designs']
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      description: 'Consistent brand identity across all social media platforms',
      icon: <Palette className="h-8 w-8" />,
      color: 'from-purple-500 to-violet-500',
      platforms: ['All Platforms', 'Brand Guidelines', 'Templates'],
      deliverables: ['Logo variations', 'Color palette', 'Typography', 'Style guide']
    },
    {
      id: 3,
      title: 'Video Content Design',
      description: 'Engaging video graphics and motion design for social media',
      icon: <Film className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      platforms: ['Instagram Reels', 'TikTok', 'YouTube', 'Stories'],
      deliverables: ['Video graphics', 'Animations', 'Templates', 'Motion design']
    },
    {
      id: 4,
      title: 'Carousel & Infographics',
      description: 'Informative and engaging carousel posts and infographics',
      icon: <LayersIcon className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-500',
      platforms: ['Instagram', 'LinkedIn', 'Facebook'],
      deliverables: ['Carousel designs', 'Infographics', 'Educational content', 'Data visualization']
    },
    {
      id: 5,
      title: 'Ad Creative Design',
      description: 'High-converting ad creatives for social media advertising',
      icon: <Target className="h-8 w-8" />,
      color: 'from-orange-500 to-red-500',
      platforms: ['Facebook Ads', 'Instagram Ads', 'LinkedIn Ads'],
      deliverables: ['Ad graphics', 'A/B variations', 'Video ads', 'Banner ads']
    },
    {
      id: 6,
      title: 'Content Templates',
      description: 'Reusable templates for consistent social media presence',
      icon: <FileText className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-500',
      platforms: ['All Platforms', 'Custom Templates'],
      deliverables: ['Post templates', 'Story templates', 'Brand templates', 'Editable files']
    }
  ];

  const platforms = [
    {
      name: 'Instagram',
      icon: <Instagram className="h-6 w-6" />,
      color: 'from-purple-500 via-indigo-500 to-purple-600',
      features: ['Posts', 'Stories', 'Reels', 'IGTV', 'Highlights']
    },
    {
      name: 'Facebook',
      icon: <Facebook className="h-6 w-6" />,
      color: 'from-blue-600 to-blue-800',
      features: ['Posts', 'Cover photos', 'Event graphics', 'Ad creatives']
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-700',
      features: ['Posts', 'Banner images', 'Company pages', 'Article graphics']
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-6 w-6" />,
      color: 'from-blue-400 to-blue-600',
      features: ['Header images', 'Tweet graphics', 'Thread visuals', 'Profile designs']
    },
    {
      name: 'YouTube',
      icon: <Youtube className="h-6 w-6" />,
      color: 'from-red-500 to-red-700',
      features: ['Thumbnails', 'Channel art', 'End screens', 'Video graphics']
    },
    {
      name: 'TikTok',
      icon: <Video className="h-6 w-6" />,
      color: 'from-black via-gray-800 to-black',
      features: ['Video graphics', 'Cover images', 'Branded content', 'Trending designs']
    }
  ];

  

  return (
    <PageSEO config={seoConfig}>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(147,51,234,0.05)_50%,transparent_60%)] bg-[length:120px_120px]"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
                <Share2 className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Eye-Catching Social Media Design</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  Hire Social Media Design Agency
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Create stunning social media graphics and branding that capture attention, 
                build your brand, and drive engagement across all platforms.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
                >
                  <Palette className="h-5 w-5 mr-2" />
                  Get Started
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <Image className="h-5 w-5 mr-2" />
                  View Portfolio
                </button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { value: '1000+', label: 'Graphics Created' },
                  { value: '50+', label: 'Brands Served' },
                  { value: '6', label: 'Platforms Covered' },
                  { value: '4.9/5', label: 'Client Rating' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        {isNavSticky && (
          <div className="sticky top-20 z-40 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-1 overflow-x-auto py-4 scrollbar-hide">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
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

        {/* Overview Section */}
        <section id="overview" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Social Media Design</span> Matters
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                In today's digital world, your social media presence is often the first touchpoint with customers. 
                Great design builds trust, increases engagement, and drives conversions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Eye className="h-6 w-6" />,
                  title: 'First Impressions',
                  description: 'Eye-catching designs stop the scroll and capture attention in crowded feeds',
                  color: 'from-purple-500 to-indigo-500'
                },
                {
                  icon: <Heart className="h-6 w-6" />,
                  title: 'Brand Recognition',
                  description: 'Consistent design builds brand identity and makes you instantly recognizable',
                  color: 'from-purple-500 to-violet-500'
                },
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: 'Higher Engagement',
                  description: 'Well-designed content gets more likes, shares, and comments',
                  color: 'from-blue-500 to-cyan-500'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Design Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive social media design solutions for all your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 ${
                    hoveredService === service.id ? 'border-purple-500/50 scale-105 shadow-2xl shadow-purple-500/20' : 'hover:border-gray-700'
                  }`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-4 transform transition-transform duration-300 ${hoveredService === service.id ? 'scale-110 rotate-3' : ''}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Platforms:</div>
                    <div className="flex flex-wrap gap-2">
                      {service.platforms.map((platform, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-900/50 rounded text-xs text-gray-300">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {service.deliverables.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                All <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Platforms</span> Covered
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We design for every major social media platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{platform.name}</h3>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Design <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Showcase</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See the impact of great social media design
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Fashion Brand',
                  description: 'Consistent visual identity across Instagram and Facebook',
                  metrics: ['+450% Engagement', '+320% Followers', '+280% Sales'],
                  gradient: 'from-purple-500 to-indigo-500'
                },
                {
                  title: 'Tech Startup',
                  description: 'Professional LinkedIn and Twitter presence',
                  metrics: ['+380% Impressions', '+290% Clicks', '+220% Leads'],
                  gradient: 'from-indigo-500 to-purple-500'
                },
                {
                  title: 'Restaurant Chain',
                  description: 'Appetizing visuals driving online orders',
                  metrics: ['+520% Engagement', '+410% Orders', '+350% Reach'],
                  gradient: 'from-purple-600 to-indigo-600'
                },
                {
                  title: 'E-commerce Store',
                  description: 'Product-focused designs boosting conversions',
                  metrics: ['+480% Engagement', '+360% Clicks', '+310% Sales'],
                  gradient: 'from-indigo-600 to-purple-600'
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <Image className="h-16 w-16 text-white opacity-50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, metricIndex) => (
                        <span
                          key={metricIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-200"
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

        {/* FAQs Section */}
        <section id="faqs" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'How many graphics do I get per month?',
                  answer: 'It depends on your package. Starter includes 15 graphics/month, Professional includes 40 graphics/month, and Enterprise includes unlimited graphics.'
                },
                {
                  question: 'Can I request revisions?',
                  answer: 'Yes! Starter includes 1 revision per design, Professional includes 3 revisions, and Enterprise includes unlimited revisions.'
                },
                {
                  question: 'Do you provide video content?',
                  answer: 'Yes, Professional and Enterprise packages include video content. Professional includes 5 videos/month, and Enterprise includes unlimited video content.'
                },
                {
                  question: 'Which platforms do you design for?',
                  answer: 'We design for all major platforms including Instagram, Facebook, LinkedIn, Twitter, YouTube, TikTok, and more. The number of platforms depends on your package.'
                },
                {
                  question: 'How quickly can I get my designs?',
                  answer: 'Turnaround time is typically 2-3 business days for standard graphics. Rush orders can be accommodated for an additional fee.'
                },
                {
                  question: 'Do you provide editable files?',
                  answer: 'Yes, we provide source files (PSD, AI, Figma) so you can make minor edits or use templates for future content.'
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

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Elevate Your Social Media?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's create stunning designs that make your brand stand out on social media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Palette className="h-5 w-5 mr-2" />
                Get Started
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                <Image className="h-5 w-5 mr-2" />
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageSEO>
  );
};

export default SocialMediaDesign;
