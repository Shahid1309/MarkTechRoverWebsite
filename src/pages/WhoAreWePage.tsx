import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, Award, Heart, Zap, Globe } from 'lucide-react';

const WhoAreWePage = () => {
  const sections = [
    {
      title: 'About Our Company',
      description: 'Learn about our mission, values, and the story behind MarkTechRover.',
      href: '/who-are-we/about',
      icon: Target,
      features: ['Company History', 'Mission & Vision', 'Core Values', 'Industry Expertise']
    },
    {
      title: 'Our Team',
      description: 'Meet the talented professionals who make MarkTechRover a success.',
      href: '/who-are-we/team',
      icon: Users,
      features: ['Leadership Team', 'Expert Consultants', 'Creative Designers', 'Technical Specialists']
    },
    {
      title: 'Our Process',
      description: 'Discover our proven methodology for delivering exceptional results.',
      href: '/who-are-we/process',
      icon: Zap,
      features: ['Discovery Phase', 'Strategy Development', 'Implementation', 'Optimization']
    },
    {
      title: 'Case Studies',
      description: 'Explore real-world examples of our successful client projects.',
      href: '/who-are-we/case-studies',
      icon: Award,
      features: ['Success Stories', 'Results & Metrics', 'Client Testimonials', 'Project Details']
    },
    {
      title: 'Client Testimonials',
      description: 'Hear directly from our satisfied clients about their experience.',
      href: '/who-are-we/testimonials',
      icon: Heart,
      features: ['Client Reviews', 'Video Testimonials', 'Success Metrics', 'Long-term Partnerships']
    },
    {
      title: 'Careers',
      description: 'Join our team and be part of an innovative, growth-focused company.',
      href: '/who-are-we/careers',
      icon: Globe,
      features: ['Open Positions', 'Company Culture', 'Benefits & Perks', 'Growth Opportunities']
    }
  ];

  const values = [
    'Innovation & Excellence',
    'Client Success Focus',
    'Data-Driven Approach',
    'Transparent Communication',
    'Continuous Learning',
    'Results-Oriented'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Who We Are Digital Marketing Agency
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              A team of passionate digital marketing experts dedicated to driving your business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/who-are-we/about"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Learn About Us
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About MarkTechRover
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We are a full-service digital marketing agency that combines creativity, technology, and data-driven strategies to help businesses achieve their growth objectives.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                With years of experience in the digital marketing industry, our team of experts has helped hundreds of businesses across various industries increase their online presence, generate qualified leads, and drive sustainable growth.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We believe in building long-term partnerships with our clients, focusing on delivering measurable results that directly impact their bottom line.
              </p>
              <Link
                to="/who-are-we/about"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg"
              >
                Learn More About Our Story
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-400">SEO & Lead Generation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-400">Revenue Marketing & CRO</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-400">UX & Interactive Design</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-400">AI & Technology Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Learn More About Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover what makes MarkTechRover the right partner for your digital marketing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <section.icon className="h-8 w-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{section.description}</p>
                <ul className="space-y-2 mb-6">
                  {section.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={section.href}
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

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital marketing goals and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/who-are-we/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoAreWePage; 