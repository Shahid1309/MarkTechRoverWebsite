import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, User, Phone, TrendingUp } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const services = [
    {
      name: 'SEO & Lead Generation',
      href: '/services/seo-lead-generation',
      submenu: [
        { name: 'SEO Services', href: '/services/seo-lead-generation/seo-services' },
        { name: 'Local SEO', href: '/services/seo-lead-generation/local-seo' },
        { name: 'E-commerce SEO', href: '/services/seo-lead-generation/ecommerce-seo' },
        { name: 'Lead Generation', href: '/services/seo-lead-generation/lead-generation' },
        { name: 'Content Marketing', href: '/services/seo-lead-generation/content-marketing' },
        { name: 'Link Building', href: '/services/seo-lead-generation/link-building' },
      ]
    },
    {
      name: 'Revenue Marketing & CRO',
      href: '/services/revenue-marketing-cro',
      submenu: [
        { name: 'Conversion Rate Optimization', href: '/services/revenue-marketing-cro/cro' },
        { name: 'PPC Management', href: '/services/revenue-marketing-cro/ppc-management' },
        { name: 'Google Ads', href: '/services/revenue-marketing-cro/google-ads' },
        { name: 'Social Media Advertising', href: '/services/revenue-marketing-cro/social-media-ads' },
        { name: 'Email Marketing', href: '/services/revenue-marketing-cro/email-marketing' },
        { name: 'Marketing Automation', href: '/services/revenue-marketing-cro/marketing-automation' },
      ]
    },
    {
      name: 'UX & Interactive',
      href: '/services/ux-interactive',
      submenu: [
        { name: 'Web Design', href: '/services/ux-interactive/web-design' },
        { name: 'User Experience Design', href: '/services/ux-interactive/ux-design' },
        { name: 'Interactive Design', href: '/services/ux-interactive/interactive-design' },
        { name: 'UI/UX Consulting', href: '/services/ux-interactive/ui-ux-consulting' },
        { name: 'Prototyping', href: '/services/ux-interactive/prototyping' },
        { name: 'Usability Testing', href: '/services/ux-interactive/usability-testing' },
      ]
    },
    {
      name: 'AI & Technology',
      href: '/services/ai-technology',
      submenu: [
        { name: 'AI-Powered Marketing', href: '/services/ai-technology/ai-marketing' },
        { name: 'Machine Learning Solutions', href: '/services/ai-technology/machine-learning' },
        { name: 'Chatbot Development', href: '/services/ai-technology/chatbot-development' },
        { name: 'Data Analytics', href: '/services/ai-technology/data-analytics' },
        { name: 'Marketing Technology', href: '/services/ai-technology/marketing-technology' },
        { name: 'Custom Software Development', href: '/services/ai-technology/custom-software' },
      ]
    },
    {
      name: 'Who Are We',
      href: '/who-are-we',
      submenu: [
        { name: 'About Our Company', href: '/who-are-we/about' },
        { name: 'Our Team', href: '/who-are-we/team' },
        { name: 'Our Process', href: '/who-are-we/process' },
        { name: 'Case Studies', href: '/who-are-we/case-studies' },
        { name: 'Client Testimonials', href: '/who-are-we/testimonials' },
        { name: 'Careers', href: '/who-are-we/careers' },
      ]
    }
  ];

  const handleDropdownToggle = (serviceName: string) => {
    setActiveDropdown(activeDropdown === serviceName ? null : serviceName);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>Revenue Generated: $2.5M+</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-1 rounded hover:bg-white/10 transition-colors"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <Link
                to="/client-login"
                className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Client Login</span>
              </Link>
              <Link
                to="/schedule-call"
                className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Schedule Call</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu Bar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">MarkTechRover</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className={`${
                  location.pathname === '/'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-900'
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                Home
              </Link>
              
              {services.map((service) => (
                <div key={service.name} className="relative group">
                  <button
                    onClick={() => handleDropdownToggle(service.name)}
                    className={`${
                      location.pathname.startsWith(service.href)
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-900'
                    } px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center`}
                  >
                    {service.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {/* Mega Menu for SEO & Lead Generation */}
                  {service.name === 'SEO & Lead Generation' && (
                    <div className="absolute top-full left-0 w-screen bg-white shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-4 gap-8">
                          {/* Organic Search Column */}
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Organic Search</h3>
                            <div className="space-y-3">
                              <Link to="/services/seo-lead-generation/seo-services" className="block text-gray-600 hover:text-blue-600 transition-colors">SEO Services</Link>
                              <Link to="/services/seo-lead-generation/local-seo" className="block text-gray-600 hover:text-blue-600 transition-colors">Local SEO</Link>
                              <Link to="/services/seo-lead-generation/ecommerce-seo" className="block text-gray-600 hover:text-blue-600 transition-colors">E-commerce SEO</Link>
                              <Link to="/services/seo-lead-generation/content-marketing" className="block text-gray-600 hover:text-blue-600 transition-colors">Content Marketing</Link>
                            </div>
                          </div>
                          
                          {/* Digital Advertising Column */}
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Digital Advertising</h3>
                            <div className="space-y-3">
                              <Link to="/services/revenue-marketing-cro/ppc-management" className="block text-gray-600 hover:text-blue-600 transition-colors">PPC Management</Link>
                              <Link to="/services/revenue-marketing-cro/google-ads" className="block text-gray-600 hover:text-blue-600 transition-colors">Google Ads</Link>
                              <Link to="/services/revenue-marketing-cro/social-media-ads" className="block text-gray-600 hover:text-blue-600 transition-colors">Social Media Ads</Link>
                              <Link to="/services/seo-lead-generation/lead-generation" className="block text-gray-600 hover:text-blue-600 transition-colors">Lead Generation</Link>
                            </div>
                          </div>
                          
                          {/* Ecommerce Column */}
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ecommerce</h3>
                            <div className="space-y-3">
                              <Link to="/services/seo-lead-generation/ecommerce-seo" className="block text-gray-600 hover:text-blue-600 transition-colors">E-commerce SEO</Link>
                              <Link to="/services/revenue-marketing-cro/cro" className="block text-gray-600 hover:text-blue-600 transition-colors">Conversion Optimization</Link>
                              <Link to="/services/ux-interactive/web-design" className="block text-gray-600 hover:text-blue-600 transition-colors">E-commerce Design</Link>
                              <Link to="/services/revenue-marketing-cro/email-marketing" className="block text-gray-600 hover:text-blue-600 transition-colors">Email Marketing</Link>
                            </div>
                          </div>
                          
                          {/* Learn Column */}
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learn</h3>
                            <div className="space-y-3">
                              <Link to="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
                              <Link to="/case-studies" className="block text-gray-600 hover:text-blue-600 transition-colors">Case Studies</Link>
                              <Link to="/resources" className="block text-gray-600 hover:text-blue-600 transition-colors">Resources</Link>
                              <Link to="/webinars" className="block text-gray-600 hover:text-blue-600 transition-colors">Webinars</Link>
                            </div>
                          </div>
                        </div>
                        
                        {/* Highlight Box */}
                        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to Boost Your Rankings?</h4>
                              <p className="text-gray-600 mb-4">Get a free SEO audit and discover opportunities to improve your search visibility.</p>
                              <Link
                                to="/free-seo-audit"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                              >
                                Get Free SEO Audit
                              </Link>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-blue-600">95%</div>
                              <div className="text-sm text-gray-600">Success Rate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Regular Dropdown for other services */}
                  {service.name !== 'SEO & Lead Generation' && (
                    <div className="absolute top-full left-0 w-80 bg-white shadow-lg border border-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {service.submenu.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                              onClick={handleDropdownClose}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/schedule-call"
                className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-medium"
              >
                Schedule Call
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                <Link
                  to="/"
                  className={`${
                    location.pathname === '/'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                {services.map((service) => (
                  <div key={service.name}>
                    <button
                      onClick={() => handleDropdownToggle(service.name)}
                      className={`${
                        location.pathname.startsWith(service.href)
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                      } w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center justify-between`}
                    >
                      {service.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === service.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === service.name && (
                      <div className="ml-4 mt-2 space-y-1">
                        {service.submenu.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4">
                  <Link
                    to="/schedule-call"
                    className="block text-center px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Schedule Call
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 