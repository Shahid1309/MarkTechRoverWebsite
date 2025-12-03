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
  Server
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const AIAdEditing = () => {
  const [activeSection, setActiveSection] = useState('deliverables');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedDeliverable, setExpandedDeliverable] = useState<number>(0);

  const navItems = [
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'packages', label: 'Design Packages', icon: <DollarSign className="h-4 w-4" /> },
    { id: 'technology', label: 'Design Technology', icon: <Cpu className="h-4 w-4" /> },
    { id: 'case-studies', label: 'Design Case Studies', icon: <Trophy className="h-4 w-4" /> },
    { id: 'approach', label: 'Design Approach', icon: <Rocket className="h-4 w-4" /> },
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
    title: "A I Ad Editing Services | MarkTechRover",
    description: "Professional a i ad editing services. Expert solutions for your business needs. Get started today.",
    keywords: ["a i ad editing","services","professional","expert","business"],
    url: "/services/ai-technology/a-i-ad-editing",
    type: "website" as const,
    publishedAt: "2025-08-05T06:37:20.472Z",
    modifiedAt: "2025-08-05T06:37:20.472Z",
    author: "MarkTechRover",
    section: "Services",
    tags: ["a i ad editing","services"],
    image: "/images/services/a-i-ad-editing.jpg"
  };

  const deliverables = [
    {
      id: 1,
      title: 'Custom a-i-ad-editing',
      description: 'Bespoke a-i-ad-editing tailored to your brand and business objectives',
      icon: <DesignIcon className="h-6 w-6" />,
      features: [
        'Custom a-i-ad-editing and layout',
        'Brand-consistent visual design',
        'User experience (UX) optimization',
        'Mobile-first responsive design',
        'Interactive elements and animations',
        'Cross-browser compatibility'
      ],
      expanded: true
    },
    {
      id: 2,
      title: 'Responsive Web Development',
      description: 'Modern, responsive website development using latest technologies',
      icon: <Code className="h-6 w-6" />,
      features: [
        'HTML5, CSS3, and JavaScript development',
        'React.js and Next.js frameworks',
        'Progressive Web App (PWA) features',
        'SEO-optimized code structure',
        'Fast loading and performance optimization',
        'Security and SSL implementation'
      ],
      expanded: false
    },
    {
      id: 3,
      title: 'E-commerce a-i-ad-editing',
      description: 'Professional e-commerce a-i-ad-editing for online stores',
      icon: <ShoppingCart className="h-6 w-6" />,
      features: [
        'E-commerce platform integration',
        'Product catalog and inventory management',
        'Secure payment gateway integration',
        'Shopping cart and checkout optimization',
        'Order management and tracking',
        'Customer account and review systems'
      ],
      expanded: false
    },
    {
      id: 4,
      title: 'Content Management System',
      description: 'Easy-to-use CMS for content management and updates',
      icon: <FileText className="h-6 w-6" />,
      features: [
        'Custom CMS development',
        'WordPress or other CMS integration',
        'Content editing and management tools',
        'Media library and asset management',
        'User role and permission management',
        'Content versioning and backup'
      ],
      expanded: false
    },
    {
      id: 5,
      title: 'SEO-Optimized Design',
      description: 'a-i-ad-editing optimized for search engine visibility',
      icon: <Search className="h-6 w-6" />,
      features: [
        'SEO-friendly URL structure',
        'Meta tags and schema markup',
        'Fast loading speed optimization',
        'Mobile-friendly design',
        'Structured data implementation',
        'XML sitemap generation'
      ],
      expanded: false
    },
    {
      id: 6,
      title: 'Website Maintenance & Support',
      description: 'Ongoing website maintenance and technical support',
      icon: <Wrench className="h-6 w-6" />,
      features: [
        'Regular website updates and maintenance',
        'Security monitoring and updates',
        'Performance optimization',
        'Content updates and management',
        'Technical support and troubleshooting',
        'Backup and disaster recovery'
      ],
      expanded: false
    }
  ];

  const designPackages = [
    {
      name: 'Basic a-i-ad-editing',
      price: '₹45,000',
      period: 'one-time',
      description: 'Perfect for small businesses and startups',
      features: [
        '5-page custom a-i-ad-editing',
        'Responsive mobile design',
        'Basic SEO optimization',
        'Contact form integration',
        'Social media integration',
        'Basic CMS setup',
        '1 month of support'
      ],
      highlighted: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional a-i-ad-editing',
      price: '₹85,000',
      period: 'one-time',
      description: 'Comprehensive a-i-ad-editing for growing businesses',
      features: [
        '10-page custom a-i-ad-editing',
        'Advanced responsive design',
        'E-commerce functionality',
        'Advanced SEO optimization',
        'Custom animations and interactions',
        'Advanced CMS with admin panel',
        '3 months of support',
        'Performance optimization'
      ],
      highlighted: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise a-i-ad-editing',
      price: '₹1,50,000',
      period: 'one-time',
      description: 'Full-featured a-i-ad-editing for large businesses',
      features: [
        'Unlimited page custom design',
        'Advanced e-commerce platform',
        'Custom functionality development',
        'Advanced SEO and analytics',
        'Multi-language support',
        'Advanced security features',
        '6 months of support',
        'Performance monitoring',
        'Custom integrations'
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
                <Brain className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Animated Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000">
              Marktechrover: Best <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent font-extrabold">AI Ad Editing</span> in Delhi, NCR & India
            </h1>

            {/* Animated Description */}
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300">
              Professional AI ad editing services in Delhi NCR. Get expert AI-powered ad editing solutions with proven results and ROI.
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
                <span className="relative z-10">Get Free AI Ad Editing Consultation</span>
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
                a-i-ad-editing Deliverables
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive a-i-ad-editing services designed for business growth. 
                Best a-i-ad-editing company in Delhi NCR delivering modern, responsive websites.
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

          {/* Design Packages Section */}
          <section id="packages" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                a-i-ad-editing Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive a-i-ad-editing solutions. Best a-i-ad-editing services in India with flexible packages 
                designed for businesses of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {designPackages.map((pkg, index) => (
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
                      <span className="text-gray-500"> {pkg.period}</span>
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
                a-i-ad-editing Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced a-i-ad-editing technology stack powering modern websites. 
                Professional a-i-ad-editing services India with cutting-edge tools and frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Frontend Technologies',
                  description: 'Modern frontend frameworks and technologies',
                  icon: <DesktopIcon className="h-8 w-8" />,
                  features: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Sass/SCSS']
                },
                {
                  title: 'Design Tools',
                  description: 'Professional design and prototyping tools',
                  icon: <DesignIcon className="h-8 w-8" />,
                  features: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Adobe Creative Suite', 'Protopie']
                },
                {
                  title: 'Backend Technologies',
                  description: 'Robust backend development technologies',
                  icon: <Server className="h-8 w-8" />,
                  features: ['Node.js', 'Python/Django', 'PHP/Laravel', 'Ruby on Rails', 'Java/Spring', 'C#/.NET']
                },
                {
                  title: 'CMS Platforms',
                  description: 'Content management system platforms',
                  icon: <FileText className="h-8 w-8" />,
                  features: ['WordPress', 'Drupal', 'Joomla', 'Strapi', 'Contentful', 'Sanity']
                },
                {
                  title: 'E-commerce Platforms',
                  description: 'E-commerce and online store platforms',
                  icon: <ShoppingCart className="h-8 w-8" />,
                  features: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'PrestaShop', 'OpenCart']
                },
                {
                  title: 'Performance Tools',
                  description: 'Website performance and optimization tools',
                  icon: <Zap className="h-8 w-8" />,
                  features: ['Google PageSpeed', 'GTmetrix', 'WebPageTest', 'Lighthouse', 'Core Web Vitals', 'CDN']
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
                a-i-ad-editing Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from a-i-ad-editing projects. Best a-i-ad-editing company in Delhi NCR 
                delivering modern, high-performing websites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'E-commerce Website',
                  description: 'Modern e-commerce website with 300% increase in sales',
                  metrics: ['300% Sales Increase', '450% Traffic Growth', '6 Months'],
                  image: '/images/case-studies/ecommerce-design.webp'
                },
                {
                  title: 'Corporate Website',
                  description: 'Professional corporate website with 500% lead generation increase',
                  metrics: ['500% Lead Increase', '250% Engagement', '8 Months'],
                  image: '/images/case-studies/corporate-design.webp'
                },
                {
                  title: 'Restaurant Website',
                  description: 'Beautiful restaurant website with 400% online orders increase',
                  metrics: ['400% Online Orders', '300% Brand Awareness', '4 Months'],
                  image: '/images/case-studies/restaurant-design.webp'
                },
                {
                  title: 'SaaS Platform',
                  description: 'Modern SaaS platform with 600% user registration increase',
                  metrics: ['600% User Registration', '350% Conversion Rate', '12 Months'],
                  image: '/images/case-studies/saas-design.webp'
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
                a-i-ad-editing Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven methodology for a-i-ad-editing success. a-i-ad-editing experts in Delhi NCR 
                delivering comprehensive solutions for business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Planning',
                  description: 'Comprehensive analysis and website planning',
                  icon: <Search className="h-8 w-8" />
                },
                {
                  step: '02',
                  title: 'Design & Prototyping',
                  description: 'Creative design and interactive prototyping',
                  icon: <Palette className="h-8 w-8" />
                },
                {
                  step: '03',
                  title: 'Development',
                  description: 'Professional website development and coding',
                  icon: <Code className="h-8 w-8" />
                },
                {
                  step: '04',
                  title: 'Launch & Support',
                  description: 'Website launch and ongoing support',
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
                a-i-ad-editing FAQs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about a-i-ad-editing services. Best a-i-ad-editing company in Delhi 
                providing transparent answers and solutions.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'How long does it take to design and develop a website?',
                  answer: 'a-i-ad-editing and development typically takes 4-8 weeks depending on complexity, number of pages, and features required. Simple websites can be completed in 2-3 weeks, while complex e-commerce or custom applications may take 8-12 weeks.'
                },
                {
                  question: 'What is the typical cost for a-i-ad-editing services?',
                  answer: 'a-i-ad-editing costs typically range from ₹45,000 to ₹1,50,000 depending on complexity, features, and scope of work. We provide detailed quotes based on your specific requirements and business goals.'
                },
                {
                  question: 'Do you provide website maintenance and support?',
                  answer: 'Yes, we provide ongoing website maintenance and support services including regular updates, security monitoring, performance optimization, content updates, and technical support. We offer various maintenance packages to suit your needs.'
                },
                {
                  question: 'Do you work with businesses outside Delhi NCR?',
                  answer: 'Yes, we work with businesses across India and internationally. Our a-i-ad-editing services are not limited by geography and can be delivered remotely with excellent results.'
                },
                {
                  question: 'What technologies do you use for website development?',
                  answer: 'We use modern technologies including React.js, Next.js, Node.js, WordPress, and other industry-standard frameworks. We choose the best technology stack based on your specific requirements and business goals.'
                },
                {
                  question: 'Do you provide SEO optimization with a-i-ad-editing?',
                  answer: 'Yes, we include basic SEO optimization with all a-i-ad-editing packages. This includes SEO-friendly URL structure, meta tags, schema markup, fast loading speed, mobile optimization, and other SEO best practices.'
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
              Ready to Create Your Dream Website?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Best a-i-ad-editing company in Delhi NCR offering comprehensive a-i-ad-editing services. 
              Get started with professional a-i-ad-editing services India today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-purple-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get a-i-ad-editing Quote
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

export default AIAdEditing; 