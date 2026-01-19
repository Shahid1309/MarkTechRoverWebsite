import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Target, BarChart3, Mail, Zap, Users, MessageSquare, Trophy, DollarSign, Cpu, Rocket } from 'lucide-react';

const RevenueMarketingCroPage = () => {
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
      title: 'Conversion Rate Optimization',
      description: 'Optimize your website to convert more visitors into customers and increase revenue.',
      href: '/services/revenue-marketing-cro/cro',
      icon: TrendingUp,
      features: ['A/B Testing', 'User Experience Analysis', 'Conversion Funnel Optimization', 'Performance Tracking']
    },
    {
      title: 'PPC Management',
      description: 'Expert management of your pay-per-click campaigns to maximize ROI and drive qualified traffic.',
      href: '/services/revenue-marketing-cro/ppc-management',
      icon: Target,
      features: ['Campaign Strategy', 'Keyword Research', 'Ad Copy Optimization', 'Budget Management']
    },
    {
      title: 'Google Ads',
      description: 'Comprehensive Google Ads management to reach your target audience and drive conversions.',
      href: '/services/revenue-marketing-cro/google-ads',
      icon: BarChart3,
      features: ['Search Campaigns', 'Display Advertising', 'Shopping Ads', 'Remarketing']
    },
    {
      title: 'Social Media Advertising',
      description: 'Targeted social media ads across multiple platforms to reach your ideal customers.',
      href: '/services/revenue-marketing-cro/social-media-ads',
      icon: Users,
      features: ['Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Audience Targeting']
    },
    {
      title: 'Email Marketing',
      description: 'Build relationships and drive sales with strategic email marketing campaigns.',
      href: '/services/revenue-marketing-cro/email-marketing',
      icon: Mail,
      features: ['Email Strategy', 'List Building', 'Campaign Design', 'Performance Analysis']
    },
    {
      title: 'Marketing Automation',
      description: 'Streamline your marketing processes and nurture leads automatically.',
      href: '/services/revenue-marketing-cro/marketing-automation',
      icon: Zap,
      features: ['Lead Nurturing', 'Workflow Automation', 'CRM Integration', 'Analytics & Reporting']
    }
  ];

  const benefits = [
    'Increase conversion rates by 150%+',
    'Reduce customer acquisition costs',
    'Improve ROI on ad spend',
    'Generate qualified leads',
    'Automate marketing processes',
    'Data-driven optimization'
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div id="hero">
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hire CRO Agency India
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Maximize your marketing ROI with data-driven strategies and conversion optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gray-900 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Get Free CRO Audit
              </Link>
              <Link
                to="/services/revenue-marketing-cro/cro"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-primary-600 transition-colors duration-200"
              >
                Learn More
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
              Our Revenue Marketing & CRO Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive marketing solutions designed to increase your revenue and optimize conversions
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
              Why Choose Our Revenue Marketing & CRO Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We focus on delivering measurable results that directly impact your bottom line
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
                Our Marketing Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced tools and platforms for maximum ROI
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Analytics</h3>
                <p className="text-gray-300 mb-4">Google Analytics, Hotjar, Mixpanel</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Testing</h3>
                <p className="text-gray-300 mb-4">Optimizely, VWO, Google Optimize</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Automation</h3>
                <p className="text-gray-300 mb-4">HubSpot, Marketo, Pardot</p>
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
                Our CRO & Marketing Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A data-driven approach to maximize conversions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Analyze</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimize</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Test</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Scale</h3>
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
                Everything you need to know about our Revenue Marketing & CRO services
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">What is CRO?</h3>
                <p className="text-gray-300">Conversion Rate Optimization (CRO) is the process of improving your website to increase the percentage of visitors who take desired actions.</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">How long does CRO take to show results?</h3>
                <p className="text-gray-300">CRO results typically start showing within 2-4 weeks, with significant improvements seen in 2-3 months.</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Do you provide ongoing optimization?</h3>
                <p className="text-gray-300">Yes, we provide continuous optimization and monitoring to ensure sustained improvements.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Increase Your Revenue?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our revenue marketing and CRO services today and see immediate improvements in your conversion rates.
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

export default RevenueMarketingCroPage; 