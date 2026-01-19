import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Monitor, Users, Palette, Eye, Zap, Target, MessageSquare, Trophy, DollarSign, Cpu, Rocket } from 'lucide-react';

const UxInteractivePage = () => {
  const [activeSection, setActiveSection] = useState('services');
  const [isNavSticky, setIsNavSticky] = useState(false);

  const navItems = [
    { id: 'services', label: 'Services', icon: <Target className="h-4 w-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <Trophy className="h-4 w-4" /> },
    { id: 'technology', label: 'Technology', icon: <Cpu className="h-4 w-4" /> },
    { id: 'approach', label: 'Approach', icon: <Rocket className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  // Handle scroll for sticky navigation and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 800; // Increased height to include stats and CTA
      setIsNavSticky(scrollPosition > heroHeight);

      // Detect active section
      const sectionElements = navItems.map(item => document.getElementById(item.id));
      let currentSection = navItems[0]?.id || '';
      
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150;
          if (rect.top <= offset && rect.bottom > offset) {
            currentSection = navItems[index].id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Account for sticky nav height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      title: 'Web Design',
      description: 'Create stunning, user-friendly websites that convert visitors into customers.',
      href: '/services/ux-interactive/web-design',
      icon: Monitor,
      features: ['Responsive Design', 'Custom UI/UX', 'Brand Integration', 'Performance Optimization']
    },
    {
      title: 'User Experience Design',
      description: 'Design intuitive user experiences that delight your customers and drive engagement.',
      href: '/services/ux-interactive/ux-design',
      icon: Users,
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      title: 'Interactive Design',
      description: 'Create engaging interactive elements that enhance user engagement and conversion.',
      href: '/services/ux-interactive/interactive-design',
      icon: Zap,
      features: ['Micro-interactions', 'Animation Design', 'Interactive Elements', 'Engagement Optimization']
    },
    {
      title: 'UI/UX Consulting',
      description: 'Expert guidance to improve your digital products and user experience strategy.',
      href: '/services/ux-interactive/ui-ux-consulting',
      icon: Target,
      features: ['UX Audits', 'Strategy Development', 'Best Practices', 'Performance Reviews']
    },
    {
      title: 'Prototyping',
      description: 'Build interactive prototypes to test and validate your design concepts.',
      href: '/services/ux-interactive/prototyping',
      icon: Eye,
      features: ['Wireframe Creation', 'Interactive Prototypes', 'User Testing', 'Iteration Support']
    },
    {
      title: 'Usability Testing',
      description: 'Test your designs with real users to identify and fix usability issues.',
      href: '/services/ux-interactive/usability-testing',
      icon: Users,
      features: ['User Testing', 'A/B Testing', 'Analytics Review', 'Optimization Recommendations']
    }
  ];

  const benefits = [
    'Improve user engagement by 200%+',
    'Reduce bounce rates',
    'Increase conversion rates',
    'Enhance brand perception',
    'Better user satisfaction',
    'Competitive advantage'
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div id="hero">
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hire UX Design Agency
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Create exceptional user experiences that engage, convert, and delight your customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gray-900 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Get Free UX Audit
              </Link>
              <Link
                to="/services/ux-interactive/web-design"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-primary-600 transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>

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

      {/* Services Grid */}
      <div id="services">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our UX & Interactive Design Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive design solutions that focus on user experience and engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-purple-300">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* Benefits Section */}
      <div id="benefits">
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our UX & Interactive Design Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We create user-centered designs that drive results and enhance your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>


      {/* Technology Section */}
      <div id="technology">
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge tools and technologies for exceptional design
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Design Tools</h3>
                <p className="text-gray-300 mb-4">Figma, Sketch, Adobe Creative Suite</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Prototyping</h3>
                <p className="text-gray-300 mb-4">InVision, Framer, Principle</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Development</h3>
                <p className="text-gray-300 mb-4">React, Vue, Angular</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Approach Section */}
      <div id="approach">
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Design Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for creating exceptional user experiences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Research</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Test</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Launch</h3>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQs Section */}
      <div id="faqs">
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about our UX & Interactive Design services
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">What is UX Design?</h3>
                <p className="text-gray-300">User Experience (UX) design focuses on creating meaningful and relevant experiences for users.</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">How long does a UX project take?</h3>
                <p className="text-gray-300">Project timelines vary from 2-8 weeks depending on complexity and scope.</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Do you provide ongoing support?</h3>
                <p className="text-gray-300">Yes, we offer ongoing support and maintenance for all our design projects.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your User Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our UX and interactive design services today and create experiences that users love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gray-900 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-primary-600 transition-colors duration-200"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UxInteractivePage; 