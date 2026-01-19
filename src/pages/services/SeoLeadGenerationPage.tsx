import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, BarChart3, MessageSquare, Trophy } from 'lucide-react';
import FloatingMenu from '../../components/ui/FloatingMenu';

const SeoLeadGenerationPage = () => {
  const navItems = [
    { id: 'hero', label: 'Services', icon: <Target className="h-4 w-4" /> },
    { id: 'services', label: 'Services', icon: <Trophy className="h-4 w-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  const services = [
    {
      title: 'SEO Services',
      description: 'Comprehensive search engine optimization to improve your website\'s visibility and rankings.',
      href: '/services/seo-lead-generation/seo-services',
      icon: TrendingUp,
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Performance Monitoring']
    },
    {
      title: 'Local SEO',
      description: 'Dominate local search results and attract customers in your geographic area.',
      href: '/services/seo-lead-generation/local-seo',
      icon: Target,
      features: ['Google My Business', 'Local Citations', 'Review Management', 'Local Content']
    },
    {
      title: 'E-commerce SEO',
      description: 'Specialized SEO strategies for online stores to increase product visibility and sales.',
      href: '/services/seo-lead-generation/ecommerce-seo',
      icon: BarChart3,
      features: ['Product Optimization', 'Category Pages', 'Shopping Feeds', 'Conversion Optimization']
    },
    {
      title: 'Lead Generation',
      description: 'Generate high-quality leads through targeted digital marketing strategies.',
      href: '/services/seo-lead-generation/lead-generation',
      icon: Users,
      features: ['Lead Magnets', 'Landing Pages', 'Email Campaigns', 'Lead Nurturing']
    },
    {
      title: 'Content Marketing',
      description: 'Create valuable, relevant content that attracts and engages your target audience.',
      href: '/services/seo-lead-generation/content-marketing',
      icon: TrendingUp,
      features: ['Blog Strategy', 'Content Creation', 'Content Distribution', 'Performance Analysis']
    },
    {
      title: 'Link Building',
      description: 'Build high-quality backlinks to improve your website\'s authority and rankings.',
      href: '/services/seo-lead-generation/link-building',
      icon: ArrowRight,
      features: ['Guest Posting', 'Broken Link Building', 'Resource Pages', 'PR Outreach']
    }
  ];

  const benefits = [
    'Increase organic traffic by 200%+',
    'Improve search engine rankings',
    'Generate qualified leads',
    'Build brand authority',
    'Long-term sustainable growth',
    'Measurable ROI'
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Floating Menu */}
      <FloatingMenu navItems={navItems} heroHeight={600} />
      {/* Hero Section */}
      <div id="hero">
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hire SEO Lead Generation Agency
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Drive sustainable growth with data-driven SEO strategies and proven lead generation techniques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gray-900 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Get Free SEO Audit
              </Link>
              <Link
                to="/services/seo-lead-generation/seo-services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-primary-600 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Services Grid */}
      <div id="services">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our SEO & Lead Generation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to increase your online visibility and generate qualified leads
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
              Why Choose Our SEO & Lead Generation Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver measurable results that drive real business growth
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

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our SEO and lead generation services today and see measurable results in your business growth.
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

export default SeoLeadGenerationPage; 