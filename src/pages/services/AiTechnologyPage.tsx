import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, BarChart3, MessageSquare, Database, Zap, Code, Target, Trophy, DollarSign, Cpu, Rocket } from 'lucide-react';

const AiTechnologyPage = () => {
  const [activeSection, setActiveSection] = useState('services');
  const [isNavSticky, setIsNavSticky] = useState(false);

  const navItems = [
    { id: 'services', label: 'Services', icon: <Target className="h-4 w-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <Trophy className="h-4 w-4" /> },
    { id: 'packages', label: 'Packages', icon: <DollarSign className="h-4 w-4" /> },
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
      title: 'AI-Powered Marketing',
      description: 'Leverage artificial intelligence to optimize your marketing campaigns and drive better results.',
      href: '/services/ai-technology/ai-marketing',
      icon: Brain,
      features: ['Predictive Analytics', 'Automated Optimization', 'Personalization', 'Performance Insights']
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Implement custom machine learning solutions to solve complex business problems.',
      href: '/services/ai-technology/machine-learning',
      icon: BarChart3,
      features: ['Custom ML Models', 'Data Processing', 'Model Training', 'Deployment & Monitoring']
    },
    {
      title: 'Chatbot Development',
      description: 'Create intelligent chatbots that provide 24/7 customer support and improve user engagement.',
      href: '/services/ai-technology/chatbot-development',
      icon: MessageSquare,
      features: ['Natural Language Processing', 'Multi-platform Integration', 'Custom Training', 'Analytics Dashboard']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      href: '/services/ai-technology/data-analytics',
      icon: Database,
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reporting']
    },
    {
      title: 'Marketing Technology',
      description: 'Implement and optimize marketing technology stacks to streamline your operations.',
      href: '/services/ai-technology/marketing-technology',
      icon: Zap,
      features: ['MarTech Integration', 'Automation Workflows', 'CRM Optimization', 'Performance Tracking']
    },
    {
      title: 'Custom Software Development',
      description: 'Build custom software solutions tailored to your specific business needs and requirements.',
      href: '/services/ai-technology/custom-software',
      icon: Code,
      features: ['Custom Applications', 'API Development', 'System Integration', 'Maintenance & Support']
    }
  ];

  const benefits = [
    'Increase efficiency by 300%+',
    'Reduce operational costs',
    'Improve decision making',
    'Enhance customer experience',
    'Automate repetitive tasks',
    'Gain competitive advantage'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      {/* Hero Section */}
      <div id="hero">
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI & Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence and cutting-edge technology to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gray-900 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Get Free AI Assessment
              </Link>
              <Link
                to="/services/ai-technology/ai-marketing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-primary-600 transition-colors duration-200"
              >
                Explore Solutions
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
              Our AI & Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology solutions that drive innovation and business growth
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
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI & Technology Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver innovative technology solutions that provide measurable business value
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

      {/* Packages Section */}
      <div id="packages">
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI & Technology Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect AI solution for your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Starter AI</h3>
                <p className="text-gray-300 mb-4">Basic AI implementation</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Advanced AI</h3>
                <p className="text-gray-300 mb-4">Comprehensive AI solutions</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Enterprise AI</h3>
                <p className="text-gray-300 mb-4">Custom AI development</p>
              </div>
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
                Our AI Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI and machine learning technologies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Machine Learning</h3>
                <p className="text-gray-300 mb-4">TensorFlow, PyTorch, Scikit-learn</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Natural Language</h3>
                <p className="text-gray-300 mb-4">GPT, BERT, Transformers</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Computer Vision</h3>
                <p className="text-gray-300 mb-4">OpenCV, YOLO, ResNet</p>
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
                Our AI Development Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to AI implementation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Research</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Develop</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Test</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Deploy</h3>
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
                Everything you need to know about our AI & Technology services
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">What is AI Technology?</h3>
                <p className="text-gray-300">Artificial Intelligence technology enables machines to learn, reason, and perform tasks that typically require human intelligence.</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">How long does AI implementation take?</h3>
                <p className="text-gray-300">AI project timelines vary from 4-12 weeks depending on complexity and data requirements.</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Do you provide AI maintenance?</h3>
                <p className="text-gray-300">Yes, we offer ongoing AI model maintenance and optimization services.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Embrace the Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our AI and technology services today and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gray-900 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/who-are-we/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-primary-600 transition-colors duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiTechnologyPage; 