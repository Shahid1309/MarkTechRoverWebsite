import React from 'react';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  ArrowRight,
  Target,
  TrendingUp,
  Palette,
  Cpu,
  Star,
  Zap,
  Globe,
  Award,
  Users,
  Clock,
  CheckCircle,
  ArrowUpRight,
  ChevronUp,
  Sparkles,
  ExternalLink,
  Shield,
  Heart,
  Rocket,
  Brain,
  Code,
  BarChart3
} from 'lucide-react';
import MainLogo from '../../assets/Main.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  const serviceCategories = [
    {
      title: 'SEO & Lead Generation',
      icon: <Target className="h-5 w-5" />,
      gradient: 'from-purple-500 to-purple-600',
      services: [
        { name: 'SEO Services', path: '/services/seo-services' },
        { name: 'Local SEO', path: '/services/local-seo-services' },
        { name: 'PPC Advertising', path: '/services/ppc-advertising' },
        { name: 'Google Ads Management', path: '/services/google-ads' }
      ]
    },
    {
      title: 'Revenue Marketing',
      icon: <TrendingUp className="h-5 w-5" />,
      gradient: 'from-emerald-500 to-emerald-600',
      services: [
        { name: 'Conversion Rate Optimization', path: '/services/cro' },
        { name: 'Email Marketing', path: '/services/email-marketing' },
        { name: 'Lead Generation', path: '/services/lead-generation' },
        { name: 'Marketing Automation', path: '/services/marketing-automation' }
      ]
    },
    {
      title: 'UX & Design',
      icon: <Palette className="h-5 w-5" />,
      gradient: 'from-blue-500 to-blue-600',
      services: [
        { name: 'Web Design', path: '/services/web-design' },
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        { name: 'Brand Identity', path: '/services/brand-design' },
        { name: 'Mobile App Design', path: '/services/mobile-design' }
      ]
    },
    {
      title: 'AI & Technology',
      icon: <Cpu className="h-5 w-5" />,
      gradient: 'from-orange-500 to-orange-600',
      services: [
        { name: 'AI-Powered Solutions', path: '/services/ai-solutions' },
        { name: 'Custom Software', path: '/services/custom-software' },
        { name: 'Data Analytics', path: '/services/data-analytics' },
        { name: 'Chatbot Development', path: '/services/chatbot' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com', label: 'Instagram' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const footerOffset = 400; // Increased offset to show button above footer
      
      if (scrollY > 300 && (scrollY + windowHeight) < (documentHeight - footerOffset)) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative w-full bg-gradient-to-r from-black/80 via-black/80 via-black/80 to-purple-900/80 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.15),transparent_50%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="relative w-full">
        {/* Newsletter Section */}
        <div className="w-full px-3 sm:px-4 lg:px-8 py-8 sm:py-12">
          <div className="w-full">
            <div className="bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-purple-500/20 backdrop-blur-sm relative overflow-hidden">
              {/* Newsletter Background Elements */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.1),transparent_50%)]"></div>
              <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/10 rounded-full blur-xl"></div>
              
              <div className="relative text-center">
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                    <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">Stay Ahead of the Curve</h2>
                </div>
                <p className="text-purple-200 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed px-2">
                  Get the latest insights on digital marketing, SEO trends, and AI innovations delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto px-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white text-sm sm:text-base placeholder-purple-300 backdrop-blur-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center font-semibold group shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
                  >
                    Subscribe
                    <ArrowUpRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="w-full px-3 sm:px-4 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
              {/* Company Info */}
              <div className="lg:col-span-4">
                <Link to="/" className="inline-block mb-6 sm:mb-8 group">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl blur-lg transition-all duration-300 group-hover:blur-xl bg-gradient-to-r from-purple-500/30 to-purple-400/30"></div>
                    <img src={MainLogo} alt="MarkTechRover" className="relative h-10 sm:h-12 md:h-14 w-auto" loading="lazy" />
                  </div>
                </Link>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  Transform your business with next-gen digital solutions. We specialize in SEO, AI-powered marketing, and conversion-focused design that drives exceptional results.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <a href="mailto:info@marktechrover.com" 
                     className="flex items-center text-gray-300 hover:text-purple-300 transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-purple-400/20 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:from-purple-500/30 group-hover:to-purple-400/30 transition-all duration-300 border border-purple-500/30 flex-shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="font-medium text-sm sm:text-base break-all">info@marktechrover.com</span>
                  </a>
                  
                  <a href="tel:918826790981" 
                     className="flex items-center text-gray-300 hover:text-purple-300 transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-purple-400/20 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:from-purple-500/30 group-hover:to-purple-400/30 transition-all duration-300 border border-purple-500/30 flex-shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">+91 8826790981</span>
                  </a>
                  
                  <div className="flex items-start text-gray-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-purple-400/20 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 border border-purple-500/30">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">1st floor Adarsh house, Nai Basti, Lado Sarai, New Delhi, Delhi 110030</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-14 bg-gradient-to-br from-purple-500/20 to-purple-400/20 hover:from-purple-500/30 hover:to-purple-400/30 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 group border border-purple-500/30"
                      aria-label={social.label}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-4 sm:space-y-6 group">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${category.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                          <div className="text-white">
                            {category.icon}
                          </div>
                        </div>
                        <h3 className="text-white font-bold text-lg sm:text-xl">{category.title}</h3>
                      </div>
                      <ul className="space-y-3 sm:space-y-4">
                        {category.services.map((service, serviceIndex) => (
                          <li key={serviceIndex}>
                            <Link
                              to={service.path}
                              className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group font-medium text-sm sm:text-base"
                            >
                              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 opacity-0 -ml-4 sm:-ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-purple-400 flex-shrink-0" />
                              <span className="break-words">{service.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button - Positioned above bottom section */}
        {showScrollButton && (
          <div className="w-full px-4 lg:px-8 mb-4">
            <div className="w-full max-w-7xl mx-auto flex justify-end">
              <button
                onClick={scrollToTop}
                className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center border border-purple-500/30"
                title="Scroll to top"
              >
                <ChevronUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Bottom Section - Full Width */}
        <div className="w-full px-3 sm:px-4 lg:px-8 mb-6 sm:mb-8">
          <div className="w-full border-t border-purple-500/20 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
              {/* Copyright */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-slate-400 text-xs sm:text-sm text-center sm:text-left">
                <span>© {currentYear} MarkTechRover. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center justify-center sm:justify-start">
                  Made with <Heart className="inline h-3 w-3 sm:h-4 sm:w-4 text-red-500 mx-1" /> in India
                </span>
              </div>
              
              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-slate-400 hover:text-purple-300 transition-colors text-xs sm:text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/privacy-policy" className="text-slate-400 hover:text-purple-300 transition-colors text-xs sm:text-sm font-medium">
                  Privacy Policy
                </Link>
                <span className="text-slate-400 text-xs sm:text-sm font-medium cursor-pointer hover:text-purple-300 transition-colors">
                  Terms of Service
                </span>
                <span className="text-slate-400 text-xs sm:text-sm font-medium cursor-pointer hover:text-purple-300 transition-colors">
                  Cookie Policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;