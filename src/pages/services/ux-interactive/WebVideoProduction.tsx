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

const WebVideoProduction = () => {
  const [activeSection, setActiveSection] = useState('deliverables');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedDeliverable, setExpandedDeliverable] = useState<number>(0);

  const navItems = [
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },{ id: 'technology', label: 'Design Technology', icon: <Cpu className="h-4 w-4" /> },
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
    title: "Web Video Production Services | MarkTechRover",
    description: "Professional web video production services. Expert solutions for your business needs. Get started today.",
    keywords: ["web video production","services","professional","expert","business"],
    url: "/services/ux-interactive/web-video-production",
    type: "website" as const,
    publishedAt: "2025-08-05T06:37:20.388Z",
    modifiedAt: "2025-08-05T06:37:20.388Z",
    author: "MarkTechRover",
    section: "Services",
    tags: ["web video production","services"],
    image: "/images/services/web-video-production.jpg"
  };

  const deliverables = [
    {
      id: 1,
      title: 'Custom web-video-production',
      description: 'Bespoke web-video-production tailored to your brand and business objectives',
      icon: <DesignIcon className="h-6 w-6" />,
      features: [
        'Custom web-video-production and layout',
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
      title: 'E-commerce web-video-production',
      description: 'Professional e-commerce web-video-production for online stores',
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
      description: 'web-video-production optimized for search engine visibility',
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
                <Layout className="h-4 w-4 mr-2" />
                web-video-production Services
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                Hire Web Video Production Services
              </h1>
              
              <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Best web-video-production company in Delhi NCR offering custom web-video-production. 
                Professional web-video-production services India with modern, responsive designs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  <Target className="h-5 w-5 mr-2" />
                  Get web-video-production Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                
                <button className="inline-flex items-center px-8 py-4 bg-gray-900/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-900/20 hover:scale-105">
                  <Play className="h-5 w-5 mr-2" />
                  View Portfolio
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
                <div className="text-4xl font-bold text-purple-300 mb-2">500+</div>
                <div className="text-gray-300">Websites Designed & Developed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">24/7</div>
                <div className="text-gray-300">Support & Maintenance</div>
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
                web-video-production Deliverables
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive web-video-production services designed for business growth. 
                Best web-video-production company in Delhi NCR delivering modern, responsive websites.
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
                web-video-production Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced web-video-production technology stack powering modern websites. 
                Professional web-video-production services India with cutting-edge tools and frameworks.
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
                web-video-production Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from web-video-production projects. Best web-video-production company in Delhi NCR 
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
                web-video-production Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven methodology for web-video-production success. web-video-production experts in Delhi NCR 
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
                web-video-production FAQs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about web-video-production services. Best web-video-production company in Delhi 
                providing transparent answers and solutions.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'How long does it take to design and develop a website?',
                  answer: 'web-video-production and development typically takes 4-8 weeks depending on complexity, number of pages, and features required. Simple websites can be completed in 2-3 weeks, while complex e-commerce or custom applications may take 8-12 weeks.'
                },
                {
                  question: 'What is the typical cost for web-video-production services?',
                  answer: 'web-video-production costs typically range from ₹45,000 to ₹1,50,000 depending on complexity, features, and scope of work. We provide detailed quotes based on your specific requirements and business goals.'
                },
                {
                  question: 'Do you provide website maintenance and support?',
                  answer: 'Yes, we provide ongoing website maintenance and support services including regular updates, security monitoring, performance optimization, content updates, and technical support. We offer various maintenance packages to suit your needs.'
                },
                {
                  question: 'Do you work with businesses outside Delhi NCR?',
                  answer: 'Yes, we work with businesses across India and internationally. Our web-video-production services are not limited by geography and can be delivered remotely with excellent results.'
                },
                {
                  question: 'What technologies do you use for website development?',
                  answer: 'We use modern technologies including React.js, Next.js, Node.js, WordPress, and other industry-standard frameworks. We choose the best technology stack based on your specific requirements and business goals.'
                },
                {
                  question: 'Do you provide SEO optimization with web-video-production?',
                  answer: 'Yes, we include basic SEO optimization with all web-video-production packages. This includes SEO-friendly URL structure, meta tags, schema markup, fast loading speed, mobile optimization, and other SEO best practices.'
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
              Ready to Create Your Dream Website?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Best web-video-production company in Delhi NCR offering comprehensive web-video-production services. 
              Get started with professional web-video-production services India today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-purple-300 font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get web-video-production Quote
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

export default WebVideoProduction; 