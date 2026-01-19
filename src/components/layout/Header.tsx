import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, User, Phone, TrendingUp, Star, Target, Zap, Palette, Cpu, ShoppingCart, BookOpen, ArrowRight, CheckCircle, PenTool, Code, Lightbulb, IndianRupee } from 'lucide-react';
import Logo from '../../assets/Main.png';

interface SubmenuItem {
  name: string;
  href: string;
  description: string;
  category?: string;
}

interface Service {
  name: string;
  href: string;
  icon: React.ReactNode;
  submenu: SubmenuItem[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const location = useLocation();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const services = [
    {
      name: 'SEO & Lead Generation',
      href: '/services/seo-lead-generation',
      icon: <Target className="h-4 w-4" />,
      submenu: [
        // Organic Search
        { name: 'SEO Services', href: '/services/seo-lead-generation/seo-services', description: 'Comprehensive SEO optimization for organic growth', category: 'Organic Search' },
        { name: 'Enterprise SEO Services', href: '/services/enterprise-seo', description: 'Scalable SEO solutions for large organizations', category: 'Organic Search' },
        { name: 'Digital Marketing Services', href: '/services/digital-marketing', description: 'Full-service digital marketing solutions', category: 'Organic Search' },
        { name: 'Local SEO Services', href: '/services/local-seo-services', description: 'Local search optimization for businesses', category: 'Organic Search' },
        { name: 'Google Local Services Ads Management', href: '/services/seo-lead-generation/local-services-ads', description: 'Manage and optimize local service ads', category: 'Organic Search' },
        { name: 'SEO Audits', href: '/services/seo-lead-generation/seo-audits', description: 'Comprehensive website SEO analysis', category: 'Organic Search' },
        { name: 'Generative Engine & Chat Optimization', href: '/services/seo-lead-generation/chat-optimization', description: 'AI-powered chat and search optimization', category: 'Organic Search' },
        
        // Digital Advertising
        { name: 'PPC Management Services', href: '/services/seo-lead-generation/ppc-management', description: 'Professional PPC campaign management', category: 'Digital Advertising' },
        { name: 'Enterprise PPC Management Services', href: '/services/seo-lead-generation/enterprise-ppc', description: 'Large-scale PPC management for enterprises', category: 'Digital Advertising' },
        { name: 'Social Media Advertising', href: '/services/seo-lead-generation/social-media-ads', description: 'Targeted social media advertising campaigns', category: 'Digital Advertising' },
        { name: 'Enterprise Social Media Advertising', href: '/services/seo-lead-generation/enterprise-social-ads', description: 'Enterprise-level social media advertising', category: 'Digital Advertising' },
        { name: 'Programmatic Advertising Services', href: '/services/seo-lead-generation/programmatic-ads', description: 'Automated programmatic advertising solutions', category: 'Digital Advertising' },
        { name: 'Geofencing Services', href: '/services/seo-lead-generation/geofencing', description: 'Location-based advertising with geofencing', category: 'Digital Advertising' },
        { name: 'Connected TV & OTT', href: '/services/seo-lead-generation/connected-tv', description: 'Over-the-top and connected TV advertising', category: 'Digital Advertising' },
        
        // Ecommerce
        { name: 'Ecommerce SEO Services', href: '/services/seo-lead-generation/ecommerce-seo', description: 'SEO optimization for online stores', category: 'Ecommerce' },
        { name: 'Ecommerce PPC Services', href: '/services/seo-lead-generation/ecommerce-ppc', description: 'PPC campaigns for ecommerce businesses', category: 'Ecommerce' },
        { name: 'Ecommerce Social Media Advertising', href: '/services/seo-lead-generation/ecommerce-social', description: 'Social media ads for ecommerce', category: 'Ecommerce' },
        { name: 'B2B Ecommerce Enablement', href: '/services/seo-lead-generation/b2b-ecommerce', description: 'B2B ecommerce platform optimization', category: 'Ecommerce' },
        { name: 'Shopping Feed Automation', href: '/services/seo-lead-generation/shopping-feeds', description: 'Automated product feed management', category: 'Ecommerce' },
        { name: 'Ecommerce Digital Marketing Services', href: '/services/seo-lead-generation/ecommerce-marketing', description: 'Complete ecommerce marketing solutions', category: 'Ecommerce' },
        { name: 'Ecommerce Marketing Resources', href: '/services/seo-lead-generation/ecommerce-resources', description: 'Resources and guides for ecommerce success', category: 'Ecommerce' },
        
        // Learn
        { name: 'Our SEO Results', href: '/case-studies/seo-results', description: 'Real SEO results and case studies', category: 'Learn' },
        { name: 'Our SEO Case Studies', href: '/case-studies', description: 'Detailed SEO success stories', category: 'Learn' },
        { name: 'What Is an SEO Company?', href: '/learn/what-is-seo-company', description: 'Understanding SEO company services', category: 'Learn' },
        { name: 'Who Are the Best SEO Companies?', href: '/learn/best-seo-companies', description: 'Guide to choosing the right SEO company', category: 'Learn' },
        { name: 'SEO Guide for Marketing Managers', href: '/learn/seo-guide-marketing-managers', description: 'SEO strategies for marketing professionals', category: 'Learn' },
        { name: 'What Is Digital Marketing?', href: '/learn/what-is-digital-marketing', description: 'Comprehensive digital marketing guide', category: 'Learn' },
        { name: 'Best Digital Marketing Tools', href: '/learn/digital-marketing-tools', description: 'Essential tools for digital marketing success', category: 'Learn' }
      ]
    },
    {
      name: 'Revenue Marketing & CRO',
      href: '/services/revenue-marketing-cro',
      icon: <TrendingUp className="h-4 w-4" />,
      submenu: [
        // Digital Intelligence
        { name: 'Web Channel Call Tracking', href: '/services/web-channel-call-tracking', description: 'Track and analyze call performance across channels', category: 'Digital Intelligence' },
        { name: 'SEO Reporting & Forecasting', href: '/services/seo-reporting-forecasting', description: 'Advanced SEO analytics and future predictions', category: 'Digital Intelligence' },
        { name: 'Channel Attribution & Forecasting', href: '/services/channel-attribution', description: 'Multi-channel attribution and revenue forecasting', category: 'Digital Intelligence' },
        { name: 'Digital Marketing Competitor Analysis', href: '/services/competitor-analysis', description: 'Comprehensive competitive intelligence', category: 'Digital Intelligence' },
        { name: 'Private Equity Due Diligence', href: '/services/private-equity-due-diligence', description: 'Marketing due diligence for PE investments', category: 'Digital Intelligence' },
        { name: 'Revenue Operations', href: '/services/revenue-operations', description: 'Optimize revenue operations and processes', category: 'Digital Intelligence' },
        
        // Conversion
        { name: 'Conversion Rate Optimization', href: '/services/conversion-rate-optimization', description: 'Systematic CRO to boost conversion rates', category: 'Conversion' },
        { name: 'User Experience Testing', href: '/services/ux-testing', description: 'A/B testing and UX optimization', category: 'Conversion' },
        { name: 'Landing Pages & Funnels', href: '/services/landing-pages-funnels', description: 'High-converting landing pages and sales funnels', category: 'Conversion' },
        { name: 'Online Review Acceleration', href: '/services/online-review-acceleration', description: 'Boost online reviews and reputation', category: 'Conversion' },
        { name: 'Channel Partner Sales Pipeline Management', href: '/services/channel-partner-pipeline', description: 'Optimize partner sales pipelines', category: 'Conversion' },
        { name: 'Website Personalization', href: '/services/website-personalization', description: 'Dynamic website personalization solutions', category: 'Conversion' },
        
        // Marketing Automation
        { name: 'Account-Based Marketing Services', href: '/services/account-based-marketing', description: 'Targeted ABM strategies for B2B growth', category: 'Marketing Automation' },
        { name: 'Lead Nurture Email Marketing', href: '/services/lead-nurture-email', description: 'Automated email nurturing campaigns', category: 'Marketing Automation' },
        { name: 'Email Marketing Management', href: '/services/email-marketing-management', description: 'Complete email marketing solutions', category: 'Marketing Automation' },
        { name: 'Salesforce Marketing Automation', href: '/services/salesforce-marketing-automation', description: 'Salesforce marketing automation setup', category: 'Marketing Automation' },
        { name: 'Microsoft Dynamics Marketing Automation', href: '/services/microsoft-dynamics-automation', description: 'Dynamics 365 marketing automation', category: 'Marketing Automation' },
        { name: 'Employment & Recruiting Marketing', href: '/services/recruiting-marketing', description: 'Marketing automation for recruitment', category: 'Marketing Automation' },
        
        // B2B Commerce Platforms
        { name: 'SEO for Amazon', href: '/services/amazon-seo', description: 'Amazon marketplace SEO optimization', category: 'B2B Commerce Platforms' },
        { name: 'Advertising Management for Amazon', href: '/services/amazon-advertising', description: 'Amazon PPC and advertising management', category: 'B2B Commerce Platforms' },
        { name: 'Shopify Optimization Services', href: '/services/shopify-optimization', description: 'Complete Shopify store optimization', category: 'B2B Commerce Platforms' },
        { name: 'Facebook Marketplace for Business', href: '/services/facebook-marketplace', description: 'Facebook Marketplace business solutions', category: 'B2B Commerce Platforms' },
        { name: 'Influencer Marketing Services', href: '/services/influencer-marketing', description: 'Strategic influencer marketing campaigns', category: 'B2B Commerce Platforms' },
        { name: 'Walmart Marketplace Advertising', href: '/services/walmart-marketplace', description: 'Walmart Marketplace advertising management', category: 'B2B Commerce Platforms' }
      ]
    },
    {
      name: 'UX & Interactive',
      href: '/services/ux-interactive',
      icon: <Palette className="h-4 w-4" />,
      submenu: [
        // Design
        { name: 'Website Design', href: '/services/ux-interactive/website-design', description: 'Custom website design for modern businesses', category: 'Design' },
        { name: 'Website Redesign', href: '/services/ux-interactive/website-redesign', description: 'Transform your existing website with modern design', category: 'Design' },
        { name: 'Rapid Web Design', href: '/services/ux-interactive/rapid-web-design', description: 'Fast-track website design and development', category: 'Design' },
        { name: 'Social Media Design', href: '/services/ux-interactive/social-media-design', description: 'Eye-catching social media graphics and branding', category: 'Design' },
        { name: 'Ecommerce Website Design', href: '/services/ux-interactive/ecommerce-website-design', description: 'Professional ecommerce store design', category: 'Design' },
        { name: 'Email Marketing Testing & Design', href: '/services/ux-interactive/email-marketing-design', description: 'Optimized email templates and A/B testing', category: 'Design' },
        
        // Content Marketing
        { name: 'SEO Copywriting', href: '/services/ux-interactive/seo-copywriting', description: 'SEO-optimized content that ranks and converts', category: 'Content Marketing' },
        { name: 'Content Marketing Services', href: '/services/ux-interactive/content-marketing', description: 'Strategic content creation and distribution', category: 'Content Marketing' },
        { name: 'Social Media Management', href: '/services/ux-interactive/social-media-management', description: 'Complete social media strategy and management', category: 'Content Marketing' },
        { name: 'Infographics & Motion Graphics', href: '/services/ux-interactive/infographics-motion-graphics', description: 'Visual content that engages and educates', category: 'Content Marketing' },
        { name: 'Web Video Production Services', href: '/services/ux-interactive/web-video-production', description: 'Professional video content for web platforms', category: 'Content Marketing' },
        { name: 'YouTube Advertising', href: '/services/ux-interactive/youtube-advertising', description: 'YouTube ad campaigns and channel optimization', category: 'Content Marketing' },
        
        // Development
        { name: 'Digital Experience Development', href: '/services/ux-interactive/digital-experience-development', description: 'Interactive digital experiences and applications', category: 'Development' },
        { name: 'Shopify Ecommerce Development', href: '/services/ux-interactive/shopify-ecommerce-development', description: 'Custom Shopify store development', category: 'Development' },
        { name: 'Web Infrastructure & Maintenance', href: '/services/ux-interactive/web-infrastructure-maintenance', description: 'Website hosting, security, and maintenance', category: 'Development' },
        { name: 'Content Management Systems', href: '/services/ux-interactive/content-management-systems', description: 'Custom CMS development and optimization', category: 'Development' },
        { name: 'AI & GPT Integration', href: '/services/ux-interactive/ai-gpt-integration', description: 'AI-powered features and chatbot integration', category: 'Development' },
        { name: 'ADA Compliance Services', href: '/services/ux-interactive/ada-compliance-services', description: 'Website accessibility and ADA compliance', category: 'Development' },
        
        // Learn (Challenges We Solve)
        { name: 'My Website Doesn\'t Drive Leads', href: '/services/ux-interactive/website-lead-generation', description: 'Transform your website into a lead generation machine', category: 'Learn' },
        { name: 'My Website Traffic Is Going Down', href: '/services/ux-interactive/website-traffic-recovery', description: 'Reverse declining traffic and boost visibility', category: 'Learn' },
        { name: 'My Website Doesn\'t Convert', href: '/services/ux-interactive/website-conversion-optimization', description: 'Improve conversion rates and user experience', category: 'Learn' },
        { name: 'My Website Isn\'t Driving ROI', href: '/services/ux-interactive/website-roi-improvement', description: 'Maximize return on investment from your website', category: 'Learn' },
        { name: 'My Website Isn\'t Showing Up on Google', href: '/services/ux-interactive/website-seo-fix', description: 'Get your website ranking on search engines', category: 'Learn' },
        { name: 'My Agency Isn\'t Driving Results', href: '/services/ux-interactive/agency-performance-improvement', description: 'Switch to an agency that delivers real results', category: 'Learn' }
      ]
    },
    {
      name: 'AI & Technology',
      href: '/services/ai-technology',
      icon: <Cpu className="h-4 w-4" />,
      submenu: [
        // Revenue Acceleration Platform
        { name: 'RevenueCloudFX Revenue Platform', href: '/services/ai-technology/revenuecloudfx-platform', description: 'Complete revenue acceleration and management platform', category: 'Revenue Acceleration Platform' },
        { name: 'CRM Integrations', href: '/services/ai-technology/crm-integrations', description: 'Seamless CRM integration and automation', category: 'Revenue Acceleration Platform' },
        { name: 'Customer Data Platform (CDP)', href: '/services/ai-technology/customer-data-platform', description: 'Unified customer data management and insights', category: 'Revenue Acceleration Platform' },
        { name: 'Lead Management & Scheduling Solutions', href: '/services/ai-technology/lead-management-scheduling', description: 'Automated lead management and appointment scheduling', category: 'Revenue Acceleration Platform' },
        { name: 'CRM Retargeting Technology', href: '/services/ai-technology/crm-retargeting', description: 'Advanced CRM-based retargeting campaigns', category: 'Revenue Acceleration Platform' },
        { name: 'Contact Enrichment', href: '/services/ai-technology/contact-enrichment', description: 'AI-powered contact data enhancement', category: 'Revenue Acceleration Platform' },
        
        // AI
        { name: 'AI SEO Services', href: '/services/ai-technology/ai-seo-services', description: 'AI-powered search engine optimization', category: 'AI' },
        { name: 'AI Digital Marketing Services', href: '/services/ai-technology/ai-digital-marketing', description: 'Intelligent digital marketing automation', category: 'AI' },
        { name: 'How Much Does AI Cost?', href: '/services/ai-technology/ai-cost-guide', description: 'Comprehensive AI pricing and ROI analysis', category: 'AI' },
        { name: 'AI Consulting', href: '/services/ai-technology/ai-consulting', description: 'Strategic AI implementation consulting', category: 'AI' },
        { name: 'AI & GPT Integration', href: '/services/ai-technology/ai-gpt-integration', description: 'Custom GPT and AI model integration', category: 'AI' },
        { name: 'Closed Loop Analytics', href: '/services/ai-technology/closed-loop-analytics', description: 'End-to-end marketing attribution and analytics', category: 'AI' },
        
        // Creative AI Tools
        { name: 'AI Ad Generation', href: '/services/ai-technology/ai-ad-generation', description: 'Automated ad creative generation and optimization', category: 'Creative AI Tools' },
        { name: 'AI Website Generation', href: '/services/ai-technology/ai-website-generation', description: 'AI-powered website design and development', category: 'Creative AI Tools' },
        { name: 'AI Ad Editing', href: '/services/ai-technology/ai-ad-editing', description: 'Intelligent ad creative editing and optimization', category: 'Creative AI Tools' },
        { name: 'AI Software Development', href: '/services/ai-technology/ai-software-development', description: 'Custom AI software and application development', category: 'Creative AI Tools' },
        { name: 'AI Content Creation', href: '/services/ai-technology/ai-content-creation', description: 'AI-generated content for marketing and branding', category: 'Creative AI Tools' },
        { name: 'AI Video Production', href: '/services/ai-technology/ai-video-production', description: 'Automated video creation and editing', category: 'Creative AI Tools' },
        
        // Learn
        { name: 'What Is a CRM?', href: '/services/ai-technology/what-is-crm', description: 'Complete guide to Customer Relationship Management', category: 'Learn' },
        { name: 'Data-Driven Marketing Guide', href: '/services/ai-technology/data-driven-marketing-guide', description: 'Master data-driven marketing strategies', category: 'Learn' },
        { name: 'How To Write AI Prompts', href: '/services/ai-technology/how-to-write-ai-prompts', description: 'Expert guide to effective AI prompt engineering', category: 'Learn' },
        { name: 'How To Track AI Search Visibility', href: '/services/ai-technology/track-ai-search-visibility', description: 'Monitor and optimize AI search performance', category: 'Learn' },
        { name: 'What Is AI Marketing?', href: '/services/ai-technology/what-is-ai-marketing', description: 'Understanding AI in modern marketing', category: 'Learn' },
        { name: 'What are CRM Integrations?', href: '/services/ai-technology/what-are-crm-integrations', description: 'Guide to CRM integration and automation', category: 'Learn' }
      ]
    },
    {
      name: 'Who Are We',
      href: '/about',
      icon: <User className="h-4 w-4" />,
      submenu: [
        // Who We Are
        { name: 'Our Approach', href: '/about/our-approach', description: 'Discover our unique methodology and process', category: 'Who We Are' },
        { name: 'About Us', href: '/about', description: 'Learn about our story and mission', category: 'Who We Are' },
        { name: 'Careers (We Are Hiring!)', href: '/careers', description: 'Join our growing team of experts', category: 'Who We Are' },
        { name: 'Contact Info', href: '/contact', description: 'Get in touch with our team', category: 'Who We Are' },
        { name: 'Marktechrover Reviews', href: '/reviews', description: 'See what our clients say about us', category: 'Who We Are' },
        { name: 'Awards', href: '/awards', description: 'Recognition and achievements', category: 'Who We Are' },
        
        // Community Impact
        { name: 'Company Values', href: '/about/company-values', description: 'Our core values and principles', category: 'Community Impact' },
        { name: 'Community Impact', href: '/about/community-impact', description: 'How we give back to the community', category: 'Community Impact' },
        { name: 'Builds', href: '/about/builds', description: 'Our projects and initiatives', category: 'Community Impact' },
        { name: 'Equality at MTR', href: '/about/equality', description: 'Our commitment to diversity and inclusion', category: 'Community Impact' },
        
        // Pricing Guides
        { name: 'How Much Should a Website Cost?', href: '/pricing/website-cost', description: 'Complete website pricing guide', category: 'Pricing Guides' },
        { name: 'How Much Does PPC Cost?', href: '/pricing/ppc-cost', description: 'PPC advertising pricing breakdown', category: 'Pricing Guides' },
        { name: 'Email Marketing Pricing', href: '/pricing/email-marketing', description: 'Email marketing service costs', category: 'Pricing Guides' },
        { name: 'Social Media Pricing', href: '/pricing/social-media', description: 'Social media management pricing', category: 'Pricing Guides' },
        { name: 'How Much Does SEO Cost?', href: '/pricing/seo-cost', description: 'SEO service pricing guide', category: 'Pricing Guides' },
        { name: 'Local SEO Pricing', href: '/pricing/local-seo', description: 'Local SEO service costs', category: 'Pricing Guides' },
        
        // Content Library
        { name: 'Our Blog', href: '/blog', description: 'Latest insights and industry news', category: 'Content Library' },
        { name: 'SEO Checker Report', href: '/tools/seo-checker', description: 'Free SEO analysis tool', category: 'Content Library' },
        { name: 'Free Keyword Suggestion Tool', href: '/tools/keyword-suggestion', description: 'Discover high-value keywords', category: 'Content Library' },
        { name: 'Fix Your Funnel', href: '/tools/fix-your-funnel', description: 'Optimize your sales funnel', category: 'Content Library' },
        { name: 'FAQFox', href: '/tools/faqfox', description: 'Generate FAQ content automatically', category: 'Content Library' },
        { name: 'View All Tools', href: '/tools', description: 'Complete collection of free tools', category: 'Content Library' }
      ]
    }
  ];

  const handleDropdownToggle = (serviceName: string) => {
    setActiveDropdown(activeDropdown === serviceName ? null : serviceName);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
    setHoveredService(null);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getCurrentService = () => {
    return services.find(service => service.name === hoveredService) || services[0];
  };

  return (
    <header className={`fixed top-0 left-0  right-0 w-full z-50 transition-all duration-500 bg-gradient-to-r from-black/90 via-black/85 via-black/85 to-purple-900/90 backdrop-blur-xl shadow-2xl p-0 relative overflow-visible`}>
      {/* Header Background Pattern (matches revenue section) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(147,51,234,0.15),transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.05)_25%,rgba(147,51,234,0.05)_75%,transparent_75%)] bg-[length:20px_20px] pointer-events-none"></div>
      {/* Top Bar - Only show when not scrolled */}
      {!isScrolled && (
        <div className="relative overflow-hidden w-full bg-gradient-to-r from-black/90 via-black/85 via-black/85 to-purple-900/90 backdrop-blur-sm border-b border-purple-500/20 px-4 py-3">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(147,51,234,0.15),transparent_60%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.05)_25%,rgba(147,51,234,0.05)_75%,transparent_75%)] bg-[length:20px_20px]"></div>
          
          <div className="relative w-full px-2 sm:px-4">
            <div className="flex justify-between items-center h-8 sm:h-10 text-xs mac-13:text-sm mac-15:text-base">
              <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 flex-1 min-w-0">
                <div className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-purple-400 via-purple-400 to-purple-300 bg-clip-text text-transparent">
                  <div className="p-0.5 sm:p-1 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-500/25 flex-shrink-0">
                    <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                  </div>
                  <span className="font-bold tracking-wide truncate">
                    <span className="hidden sm:inline">REVENUE DRIVEN: </span>
                    <span className="sm:hidden">₹3,021Cr</span>
                    <span className="hidden sm:inline">₹3,021,182,299</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 flex-shrink-0">
                <Link
                  to="/pricing"
                  className="flex sm:hidden items-center justify-center p-1 ml-auto rounded-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-purple-500/20 to-purple-400/20 hover:from-purple-500/30 hover:to-purple-400/30 border border-purple-500/30 shadow-lg backdrop-blur-sm"
                  aria-label="Pricing"
                >
                  <IndianRupee className="h-5 w-5 text-purple-300" />
                </Link>
                <Link
                  to="/pricing"
                  className="hidden sm:flex items-center space-x-1 sm:space-x-2 font-medium transition-all duration-300 hover:scale-105 text-purple-300 hover:text-purple-200"
                >
                  <IndianRupee className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">Pricing</span>
                </Link>
                <Link
                  to="/client-login"
                  className="hidden md:flex items-center space-x-1 sm:space-x-2 font-medium transition-all duration-300 hover:scale-105 text-purple-300 hover:text-purple-200"
                >
                  <User className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">Client Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Header - 80% black, 20% purple gradient flowing right */}
      <div className={`relative w-full ${
        isScrolled 
          ? 'bg-gradient-to-r from-black/95 via-black/95 via-black/95 to-purple-900/95 backdrop-blur-xl border-b border-purple-500/20' 
          : 'bg-gradient-to-r from-black/70 via-black/70 via-black/70 to-purple-900/70 backdrop-blur-md'
      } transition-all duration-500`}>
        {/* Animated Background - Only when not scrolled */}
        {!isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-purple-900/20"></div>
        )}
        
        <div className="relative w-full px-3 sm:px-4 lg:px-6">
          <div className={`flex justify-between items-center overflow-visible transition-all duration-500 h-14 sm:h-16`}>
            {/* Logo - Keeping original */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl blur-lg transition-all duration-300 group-hover:blur-xl bg-gradient-to-r from-purple-500/30 to-purple-400/30"></div>
                  <img
                    src={Logo}
                    alt="MarkTechRover - Digital Marketing Agency India"
                    className="relative h-7 w-auto sm:h-9 transition-all duration-500"
                  />
                </div>
              </Link>
            </div>

        {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 relative">
              {services.map((service) => (
                <div key={service.name} className="relative group">
                  <button
                    onMouseEnter={() => {
                      if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                      }
                      setHoveredService(service.name);
                    }}
                    onMouseLeave={() => {
                      // Simple delay to allow moving to mega menu
                      hoverTimeoutRef.current = setTimeout(() => setHoveredService(null), 150);
                    }}
                    className={`${
                      location.pathname.startsWith(service.href)
                        ? 'text-purple-300 bg-gradient-to-r from-purple-500/20 to-purple-400/20 border-purple-400' 
                        : hoveredService === service.name
                        ? 'text-purple-300 bg-gradient-to-r from-purple-500/20 to-purple-400/20 border-purple-400'
                        : 'text-white hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/10 to-purple-400/10'
                    } px-4 py-2.5 text-sm font-medium transition-all duration-300 flex items-center space-x-1.5 rounded-lg mx-0.5 backdrop-blur-sm border border-transparent hover:border-purple-300/30 focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 whitespace-nowrap`}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                </div>
              ))}
              
              {/* Fixed Position Mega Menu - Centered */}
              {hoveredService && (
                <div 
                  className="fixed left-1/2 transform -translate-x-1/2 top-full bg-black/95 backdrop-blur-xl border border-purple-500/20 shadow-2xl rounded-b-2xl w-full max-w-7xl z-50 mega-menu"
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    setHoveredService(hoveredService);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => setHoveredService(null), 100);
                  }}
                >
                  <div className="w-full px-6 sm:px-8 lg:px-10 py-8">
                    <div className="max-w-none mx-auto">
                      {/* Service Header */}
                      <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-purple-500/20">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
                          {getCurrentService().icon}
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-white mb-0.5">{getCurrentService().name}</h2>
                          <p className="text-gray-400 text-sm">Comprehensive solutions to drive your business growth</p>
                        </div>
                      </div>

                      {/* Professional & Creative SEO Services Layout */}
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {hoveredService === 'SEO & Lead Generation' && (
                          <>
                            {/* Column 1: Organic Search */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-green-500 via-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/25">
                                  <Target className="h-3.5 w-3.5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Organic Search</h3>
                                  <p className="text-gray-400 text-xs">Drive sustainable traffic growth</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Organic Search')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-lg p-2 border border-transparent hover:border-green-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-green-500/30 group-hover/item:to-green-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-green-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-green-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-green-500/30 group-hover/item:to-green-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-green-300" />
                                      </div>
                                    </div>
                                  </Link>
              ))}
            </div>
          </div>

                            {/* Column 2: Digital Advertising */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25">
                                  <TrendingUp className="h-3.5 w-3.5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Digital Advertising</h3>
                                  <p className="text-gray-400 text-xs">Maximize ROI with targeted campaigns</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Digital Advertising')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-lg p-2 border border-transparent hover:border-blue-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-blue-500/30 group-hover/item:to-blue-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-blue-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-blue-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-blue-500/30 group-hover/item:to-blue-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-blue-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 3: Ecommerce */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
                                  <ShoppingCart className="h-3.5 w-3.5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Ecommerce</h3>
                                  <p className="text-gray-400 text-xs">Boost online sales & conversions</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Ecommerce')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-orange-500/10 to-orange-400/10 rounded-lg p-2 border border-transparent hover:border-orange-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-orange-500/30 group-hover/item:to-orange-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-orange-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-orange-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-orange-500/30 group-hover/item:to-orange-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-orange-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 4: Learn */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 via-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/25">
                                  <BookOpen className="h-3.5 w-3.5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Learn</h3>
                                  <p className="text-gray-400 text-xs">Resources & insights</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Learn')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-indigo-500/10 to-indigo-400/10 rounded-lg p-2 border border-transparent hover:border-indigo-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-500/20 to-indigo-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-indigo-500/30 group-hover/item:to-indigo-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-indigo-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-indigo-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-indigo-500/20 to-indigo-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-indigo-500/30 group-hover/item:to-indigo-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-indigo-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                          </>
                        )}

                        {hoveredService === 'Revenue Marketing & CRO' && (
                          <>
                            {/* Column 1: Digital Intelligence */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25">
                                  <Cpu className="h-3.5 w-3.5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Digital Intelligence</h3>
                                  <p className="text-gray-400 text-xs">Data-driven insights & analytics</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Digital Intelligence')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-lg p-2 border border-transparent hover:border-blue-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-blue-500/30 group-hover/item:to-blue-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-blue-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-blue-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-blue-500/30 group-hover/item:to-blue-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-blue-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 2: Conversion */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-green-500 via-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/25">
                                  <TrendingUp className="h-3.5 w-3.5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Conversion</h3>
                                  <p className="text-gray-400 text-xs">Optimize conversion rates</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Conversion')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-lg p-2 border border-transparent hover:border-green-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-green-500/30 group-hover/item:to-green-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-green-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-green-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-green-500/30 group-hover/item:to-green-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-green-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 3: Marketing Automation */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                                  <Palette className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Marketing Automation</h3>
                                  <p className="text-gray-400 text-xs">Automate & scale marketing</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Marketing Automation')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-orange-500/10 to-orange-400/10 rounded-lg p-2 border border-transparent hover:border-orange-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-orange-500/30 group-hover/item:to-orange-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-orange-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-orange-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-orange-500/30 group-hover/item:to-orange-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-orange-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 4: B2B Commerce Platforms */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 via-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
                                  <ShoppingCart className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">B2B Commerce Platforms</h3>
                                  <p className="text-gray-400 text-xs">Marketplace optimization</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'B2B Commerce Platforms')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-indigo-500/10 to-indigo-400/10 rounded-lg p-2 border border-transparent hover:border-indigo-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-500/20 to-indigo-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-indigo-500/30 group-hover/item:to-indigo-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-indigo-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-indigo-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-indigo-500/20 to-indigo-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-indigo-500/30 group-hover/item:to-indigo-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-indigo-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                          </>
                        )}

                        {hoveredService === 'UX & Interactive' && (
                          <>
                            {/* Column 1: Design */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-pink-500 via-pink-400 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/25">
                                  <Palette className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Design</h3>
                                  <p className="text-gray-400 text-xs">Visual & interactive design</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Design')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-pink-500/10 to-pink-400/10 rounded-lg p-2 border border-transparent hover:border-pink-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-pink-500/20 to-pink-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-pink-500/30 group-hover/item:to-pink-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-pink-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-pink-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-pink-500/20 to-pink-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-pink-500/30 group-hover/item:to-pink-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-pink-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 2: Content Marketing */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-teal-500 via-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/25">
                                  <PenTool className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Content Marketing</h3>
                                  <p className="text-gray-400 text-xs">Engaging content & storytelling</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Content Marketing')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-teal-500/10 to-teal-400/10 rounded-lg p-2 border border-transparent hover:border-teal-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-teal-500/20 to-teal-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-teal-500/30 group-hover/item:to-teal-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-teal-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-teal-300 transition-colors duration-300 text-sm mb-1">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-teal-500/20 to-teal-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-teal-500/30 group-hover/item:to-teal-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-teal-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 3: Development */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-cyan-500 via-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                                  <Code className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Development</h3>
                                  <p className="text-gray-400 text-xs">Technical implementation</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Development')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-cyan-500/10 to-cyan-400/10 rounded-lg p-2 border border-transparent hover:border-cyan-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-cyan-500/30 group-hover/item:to-cyan-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-cyan-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-cyan-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-cyan-500/30 group-hover/item:to-cyan-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-cyan-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 4: Learn (Challenges We Solve) */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/25">
                                  <Lightbulb className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Challenges We Solve</h3>
                                  <p className="text-gray-400 text-xs">Common website problems</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Learn')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 rounded-lg p-2 border border-transparent hover:border-yellow-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-yellow-500/20 to-yellow-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-yellow-500/30 group-hover/item:to-yellow-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-yellow-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-yellow-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-yellow-500/20 to-yellow-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-yellow-500/30 group-hover/item:to-yellow-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-yellow-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                          </>
                        )}

                        {hoveredService === 'AI & Technology' && (
                          <>
                            {/* Column 1: Revenue Acceleration Platform */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-emerald-500 via-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                                  <TrendingUp className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Revenue Acceleration Platform</h3>
                                  <p className="text-gray-400 text-xs">Boost revenue with AI-powered tools</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Revenue Acceleration Platform')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 rounded-lg p-2 border border-transparent hover:border-emerald-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-500/20 to-emerald-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-emerald-500/30 group-hover/item:to-emerald-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-emerald-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-emerald-300 transition-colors duration-300 text-sm mb-1">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-emerald-500/20 to-emerald-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-emerald-500/30 group-hover/item:to-emerald-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-emerald-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 2: AI */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-violet-500 via-violet-400 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                                  <Cpu className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">AI</h3>
                                  <p className="text-gray-400 text-xs">Intelligent automation & insights</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'AI')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-violet-500/10 to-violet-400/10 rounded-lg p-2 border border-transparent hover:border-violet-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-violet-500/20 to-violet-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-violet-500/30 group-hover/item:to-violet-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-violet-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-violet-300 transition-colors duration-300 text-sm mb-1">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-violet-500/20 to-violet-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-violet-500/30 group-hover/item:to-violet-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-violet-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 3: Creative AI Tools */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-rose-500 via-rose-400 to-rose-600 rounded-xl flex items-center justify-center shadow-lg shadow-rose-500/25">
                                  <Palette className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Creative AI Tools</h3>
                                  <p className="text-gray-400 text-xs">AI-powered creative solutions</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Creative AI Tools')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-rose-500/10 to-rose-400/10 rounded-lg p-2 border border-transparent hover:border-rose-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-rose-500/20 to-rose-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-rose-500/30 group-hover/item:to-rose-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-rose-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-rose-300 transition-colors duration-300 text-sm mb-1">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-rose-500/20 to-rose-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-rose-500/30 group-hover/item:to-rose-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-rose-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 4: Learn */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25">
                                  <Lightbulb className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Learn</h3>
                                  <p className="text-gray-400 text-xs">AI & tech education</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Learn')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-amber-500/10 to-amber-400/10 rounded-lg p-2 border border-transparent hover:border-amber-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-amber-500/20 to-amber-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-amber-500/30 group-hover/item:to-amber-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-amber-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-amber-300 transition-colors duration-300 text-sm mb-1">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-amber-500/20 to-amber-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-amber-500/30 group-hover/item:to-amber-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-amber-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                          </>
                        )}

                        {hoveredService === 'Who Are We' && (
                          <>
                            {/* Column 1: Who We Are */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                                  <User className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Who We Are</h3>
                                  <p className="text-gray-400 text-xs">Our story & mission</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Who We Are')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-lg p-2 border border-transparent hover:border-blue-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-blue-500/30 group-hover/item:to-blue-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-blue-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-blue-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-blue-500/30 group-hover/item:to-blue-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-blue-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 2: Community Impact */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-green-500 via-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25">
                                  <Star className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Community Impact</h3>
                                  <p className="text-gray-400 text-xs">Values & social responsibility</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Community Impact')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-lg p-2 border border-transparent hover:border-green-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-green-500/30 group-hover/item:to-green-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-green-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-green-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-green-500/30 group-hover/item:to-green-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-green-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 3: Pricing Guides */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                                  <TrendingUp className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Pricing Guides</h3>
                                  <p className="text-gray-400 text-xs">Transparent pricing information</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Pricing Guides')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-orange-500/10 to-orange-400/10 rounded-lg p-2 border border-transparent hover:border-orange-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-orange-500/30 group-hover/item:to-orange-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-orange-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-orange-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-orange-500/30 group-hover/item:to-orange-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-orange-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 4: Content Library */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                                  <BookOpen className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-white">Content Library</h3>
                                  <p className="text-gray-400 text-xs">Free tools & resources</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {getCurrentService().submenu
                                  .filter(item => item.category === 'Content Library')
                                  .slice(0, 4)
                                  .map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group/item block transition-all duration-300 hover:bg-gradient-to-r from-purple-500/10 to-purple-400/10 rounded-lg p-2 border border-transparent hover:border-purple-500/20"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500/20 to-purple-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-purple-500/30 group-hover/item:to-purple-400/30 transition-all duration-300 flex-shrink-0">
                                        <Zap className="h-3 w-3 text-purple-300" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-white font-medium group-hover/item:text-purple-300 transition-colors duration-300 text-sm">
                                          {item.name}
                                        </h4>
                                      </div>
                                      <div className="w-5 h-5 bg-gradient-to-br from-purple-500/20 to-purple-400/20 rounded-md flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-purple-500/30 group-hover/item:to-purple-400/30 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0">
                                        <ArrowRight className="h-3 w-3 text-purple-300" />
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                          </>
                        )}

                        {hoveredService !== 'SEO & Lead Generation' && hoveredService !== 'Revenue Marketing & CRO' && hoveredService !== 'UX & Interactive' && hoveredService !== 'AI & Technology' && hoveredService !== 'Who Are We' && (
                          <>
                            {/* Column 1: Core Services */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                                  <Target className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Core Services</h3>
                              </div>
                              <div className="space-y-4">
                                {getCurrentService().submenu.slice(0, 3).map((item) => (
          <Link 
                                    key={item.name}
                                    to={item.href}
                                    className="block group/item transition-all duration-300 hover:bg-gradient-to-r from-purple-500/10 to-purple-400/10 rounded-lg p-3"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-center space-x-3">
                                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-400/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-purple-500/30 group-hover/item:to-purple-400/30 transition-all duration-300">
                                        <Zap className="h-4 w-4 text-purple-300" />
                                      </div>
                                      <div>
                                        <h4 className="text-white font-semibold group-hover/item:text-purple-300 transition-colors duration-300">{item.name}</h4>
                                      </div>
                                    </div>
          </Link>
                                ))}
                              </div>
        </div>

                            {/* Column 2: Advanced Solutions */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                                  <TrendingUp className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Advanced Solutions</h3>
                              </div>
                              <div className="space-y-4">
                                {getCurrentService().submenu.slice(3, 6).map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block group/item transition-all duration-300 hover:bg-gradient-to-r from-purple-500/10 to-purple-400/10 rounded-lg p-3"
                                    onClick={handleDropdownClose}
                                  >
                                    <div className="flex items-center space-x-3">
                                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-400/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-purple-500/30 group-hover/item:to-purple-400/30 transition-all duration-300">
                                        <Zap className="h-4 w-4 text-purple-300" />
                                      </div>
                                      <div>
                                        <h4 className="text-white font-semibold group-hover/item:text-purple-300 transition-colors duration-300">{item.name}</h4>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 3: CTA Section */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                                  <Star className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Get Started</h3>
                              </div>
                              
                              {/* Highlight Box */}
                              <div className="p-6 rounded-2xl shadow-2xl border bg-gradient-to-r from-purple-900/20 via-purple-800/20 to-purple-900/20 border-purple-500/30 backdrop-blur-sm">
                                <div className="text-center">
                                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                                    <Target className="h-8 w-8 text-white" />
                                  </div>
                                  <h4 className="text-xl font-bold text-white mb-2">198% Increase in Results</h4>
                                  <p className="text-gray-300 text-sm mb-6">Join our success stories and transform your business</p>
                                  <Link
                                    to="/case-studies"
                                    className="inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 shadow-purple-500/25"
                                  >
                                    View Case Studies
                                  </Link>
                                </div>
                              </div>

                              {/* Quick Links */}
                              <div className="space-y-3">
                                <Link
                                  to="/schedule-call"
                                  className="block w-full text-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 shadow-purple-500/25"
                                >
                                  Get Free Proposal
                                </Link>
                                <div className="text-center">
                                  <p className="text-gray-400 text-sm">Ready to start?</p>
                                  <p className="text-purple-300 font-semibold">Call us: +1 (555) 123-4567</p>
                                </div>
                              </div>
                            </div>

                            {/* Column 4: Empty for balance */}
                            <div></div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </nav>

            {/* Desktop CTA Button - Purple theme */}
             <div className="hidden lg:flex items-center">
              <Link
                to="/schedule-call"
                className="px-5 py-2.5 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform shadow-purple-500/25 text-sm whitespace-nowrap"
              >
                Schedule a Call
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg transition-all duration-200 hover:scale-105 bg-gradient-to-r from-purple-500/20 to-purple-400/20 hover:from-purple-500/30 hover:to-purple-400/30 border border-purple-500/30 shadow-md backdrop-blur-sm"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-purple-200" />
                ) : (
                  <Menu className="h-5 w-5 text-purple-200" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden absolute left-0 right-0 top-full origin-top transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? 'opacity-100 translate-y-0 max-h-[calc(100vh-90px)] pointer-events-auto'
                : 'opacity-0 -translate-y-3 max-h-0 pointer-events-none'
            }`}
          >
            <div className="bg-black/95 backdrop-blur-xl border-t border-purple-500/20 shadow-2xl overflow-hidden w-full">
              <div className="px-4 sm:px-5 py-5 sm:py-6 space-y-3 sm:space-y-4">
                {services.map((service) => (
                  <div key={service.name}>
                    <button
                      onClick={() => handleDropdownToggle(service.name)}
                      className={`${
                        location.pathname.startsWith(service.href)
                          ? 'bg-gradient-to-r from-purple-500/20 to-purple-400/20 text-purple-300'
                          : 'text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/10 to-purple-400/10'
                      } w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-between backdrop-blur-sm border border-transparent hover:border-purple-300/30`}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                        <div className="flex-shrink-0">{service.icon}</div>
                        <span className="truncate">{service.name}</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 flex-shrink-0 ml-2 ${
                          activeDropdown === service.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {activeDropdown === service.name && (
                      <div className="ml-1 sm:ml-2 mt-2 sm:mt-3 space-y-2 sm:space-y-3 rounded-xl p-3 sm:p-4 shadow-lg backdrop-blur-sm border bg-black/80 border-purple-500/20 max-h-[60vh] overflow-y-auto">
                        {service.submenu.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block p-3 sm:p-4 rounded-lg transition-all duration-300 font-medium text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/10 to-purple-400/10"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            <div className="flex items-start space-x-2 sm:space-x-3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-white mb-1 text-sm sm:text-base break-words">{item.name}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-6 border-t border-purple-300/30">
                  <Link
                    to="/schedule-call"
                    className="block text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 shadow-purple-500/25"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Schedule a Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;