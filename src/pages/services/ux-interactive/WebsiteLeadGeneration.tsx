import React, { useEffect, useState } from 'react';
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
  Rocket,
  Sparkle,
  Eye,
  DollarSign,
  MessageSquare,
  Play,
  Calendar,
  Trophy,
  Monitor,
  Cpu,
  ShoppingCart,
  BarChart,
  PieChart,
  Clock,
  Lightbulb,
  Shield,
  Phone,
  X
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const WebsiteLeadGeneration = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Eye className="h-4 w-4" /> },
    { id: 'features', label: 'Features', icon: <Sparkle className="h-4 w-4" /> },
    { id: 'process', label: 'Process', icon: <Rocket className="h-4 w-4" /> },{ id: 'portfolio', label: 'Proof', icon: <Trophy className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldShow = scrollPosition > 200;
      setIsNavSticky(shouldShow);

      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 200;
          return rect.top <= offset && rect.bottom >= offset;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

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
    title: 'Website Lead Generation Services | MarkTech Rover',
    description:
      'Full-funnel website lead generation: traffic strategy, conversion UX, lead capture, and analytics to scale qualified pipeline.',
    keywords: [
      'website lead generation',
      'conversion funnels',
      'lead magnets',
      'b2b lead gen',
      'landing pages',
      'marketing ops'
    ],
    url: '/services/ux-interactive/website-lead-generation',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTech Rover',
    section: 'Website Lead Generation',
    tags: ['Lead Gen', 'Conversion', 'Growth'],
    image: '/images/lead-generation.webp'
  };

  const stats = [
    { value: '3.2x', label: 'Avg. pipeline lift' },
    { value: '42%', label: 'Form CVR improvement' },
    { value: '50+', label: 'Funnels launched' },
    { value: '92%', label: 'SQL quality match' }
  ];

  const features = [
    {
      id: 1,
      title: 'Offer Strategy',
      description: 'Lead magnets, intent offers, and value props tailored to ICPs.',
      icon: <Lightbulb className="h-8 w-8" />,
      color: 'from-amber-500 to-orange-500',
      benefits: ['ICP-led messaging', 'Offer hypothesis backlog', 'A/B tested hooks', 'Personalized CTAs']
    },
    {
      id: 2,
      title: 'Conversion UX',
      description: 'High-velocity landing pages optimized for clarity and momentum.',
      icon: <Monitor className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Above-the-fold clarity', 'Risk-reversal cues', 'Social proof design', 'Speed + accessibility']
    },
    {
      id: 3,
      title: 'Capture & Routing',
      description: 'Form design, progressive profiling, scoring, and sales-ready routing.',
      icon: <BarChart className="h-8 w-8" />,
      color: 'from-purple-500 to-violet-500',
      benefits: ['Multi-step forms', 'Enrichment', 'Lead scoring models', 'Routing + alerts']
    },
    {
      id: 4,
      title: 'Intent Analytics',
      description: 'Events, funnels, and attribution to double-down on winners.',
      icon: <PieChart className="h-8 w-8" />,
      color: 'from-emerald-500 to-green-500',
      benefits: ['Event taxonomy', 'Funnel drop-off views', 'Channel attribution', 'Weekly insights']
    },
    {
      id: 5,
      title: 'MarTech Integration',
      description: 'CRM/MAP workflows, scoring, and SLAs built in.',
      icon: <Cpu className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-600',
      benefits: ['CRM + MAP sync', 'Scoring rules', 'Lead SLAs', 'Pipeline QA']
    },
    {
      id: 6,
      title: 'Experimentation',
      description: 'Structured testing to keep compounding gains.',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-pink-500 to-rose-500',
      benefits: ['A/B and multivariate', 'Rapid rollout cadence', 'Stat sig guardrails', 'Learning library']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'ICP & Offers',
      description: 'Clarify ICPs, pain, and the offers that earn attention.',
      detailedDescription:
        'We map audiences, problems, and desired outcomes, then craft a prioritized offer backlog that matches buying intent.',
      icon: <Search className="h-6 w-6" />,
      deliverables: ['ICP clarity', 'Offer backlog', 'Messaging pillars', 'Test plan'],
      duration: '1 week',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/20 to-blue-600/20'
    },
    {
      step: '02',
      title: 'Pages & UX',
      description: 'Design and build conversion-focused pages.',
      detailedDescription:
        'We ship fast, modular landing pages with clear hierarchy, trust, and friction-free capture patterns.',
      icon: <Target className="h-6 w-6" />,
      deliverables: ['Wireframes & copy', 'UI build', 'Speed + accessibility QA', 'Variants ready'],
      duration: '2 weeks',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20'
    },
    {
      step: '03',
      title: 'Data & Routing',
      description: 'Instrument, score, and route to sales.',
      detailedDescription:
        'Events, form data, scoring, and routing rules go live with alerts and SLA tracking.',
      icon: <Shield className="h-6 w-6" />,
      deliverables: ['Event schema', 'Scoring + routing rules', 'Alerts + QA', 'Dashboard'],
      duration: '1 week',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/20 to-green-600/20'
    },
    {
      step: '04',
      title: 'Optimize & Scale',
      description: 'Test, learn, and scale winners across channels.',
      detailedDescription:
        'We run experiments, ship improvements weekly, and roll proven plays across campaigns and audiences.',
      icon: <TrendingUp className="h-6 w-6" />,
      deliverables: ['Weekly experiments', 'Insights reports', 'Scaled rollouts', 'Retention playbook'],
      duration: 'Ongoing',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/20 to-orange-600/20'
    }
  ];

  

  const portfolio = [
    {
      title: 'B2B SaaS Funnel',
      description: 'Multi-offer funnel with 2.8x SQLs and 38% CVR lift.',
      metrics: ['2.8x SQLs', '38% CVR lift', '6 weeks'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Demand Gen Hub',
      description: 'Resource hub + progressive forms driving 3.4x MQLs.',
      metrics: ['3.4x MQLs', '22% faster routing', '8 weeks'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'ABM Landing System',
      description: 'ABM-specific pages with 44% acceptance and 19% win-rate lift.',
      metrics: ['44% accept', '19% win-rate lift', '10 weeks'],
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      title: 'Lead Magnet Engine',
      description: 'Offer backlog with automated nurture, 2.1x pipeline velocity.',
      metrics: ['2.1x velocity', '26% AOV lift', '12 weeks'],
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  const faqs = [
    {
      question: 'How fast can we launch?',
      answer: 'We ship a launch sprint in 4 weeks including offers, pages, tracking, and routing.'
    },
    {
      question: 'Do you handle CRM/MAP integration?',
      answer: 'Yes. We set up scoring, routing, alerts, and QA across Salesforce/HubSpot and common MAPs.'
    },
    {
      question: 'What about content and creative?',
      answer: 'We provide copy, UX, and creative for offers and landing pages aligned to your brand system.'
    },
    {
      question: 'How do you measure success?',
      answer: 'We track CVR, pipeline value, velocity, and QA score. We share weekly insight reports.'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹50,000',
      period: 'per month',
      description: 'Perfect for small businesses starting with lead generation',
      features: [
        { text: 'Basic lead generation setup', included: true },
        { text: 'Up to 3 landing pages', included: true },
        { text: 'Basic forms', included: true },
        { text: 'Email support', included: true },
        { text: 'Basic analytics', included: true },
        { text: 'Advanced automation', included: false },
        { text: 'CRM integration', included: false },
        { text: 'Enterprise features', included: false }
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '₹1,25,000',
      period: 'per month',
      description: 'Comprehensive lead generation for growing businesses',
      features: [
        { text: 'Advanced lead generation setup', included: true },
        { text: 'Up to 10 landing pages', included: true },
        { text: 'Advanced forms', included: true },
        { text: 'Priority support', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Advanced automation', included: true },
        { text: 'CRM integration', included: true },
        { text: 'Enterprise features', included: true }
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-featured lead generation for large organizations',
      features: [
        { text: 'Enterprise lead generation setup', included: true },
        { text: 'Unlimited landing pages', included: true },
        { text: 'Custom forms & workflows', included: true },
        { text: '24/7 priority support', included: true },
        { text: 'Enterprise analytics', included: true },
        { text: 'Full automation', included: true },
        { text: 'All CRM integrations', included: true },
        { text: 'All enterprise features', included: true }
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <PageSEO config={seoConfig}>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(147,51,234,0.05)_50%,transparent_70%)] bg-[length:100px_100px] animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
                <Sparkle className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Website Lead Generation</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Hire Website Lead Generation Services
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Full-funnel landing systems that attract, capture, and route the right leads with speed, clarity, and measurable impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
                >
                  <Target className="h-5 w-5 mr-2" />
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <Play className="h-5 w-5 mr-2" />
                  View Portfolio
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div
          className={`fixed left-1/2 transform -translate-x-1/2 z-[60] transition-all duration-500 ${
            isNavSticky ? 'top-24 opacity-100 scale-100 pointer-events-auto' : 'top-0 opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 rounded-full"></div>

            <div className="relative bg-black/20 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-2xl shadow-purple-500/20">
              <nav className="flex items-center space-x-1 px-6 py-3">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`${
                      activeSection === item.id
                        ? 'text-purple-300 bg-gradient-to-r from-purple-500/30 to-blue-500/30 border border-purple-400/50 shadow-lg shadow-purple-500/25'
                        : 'text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:border-purple-300/30'
                    } px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg`}
                  >
                    {item.icon}
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        <section id="overview" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Lead Gen Team?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We blend conversion-first UX, sharp offers, and RevOps rigor to create predictable, high-quality pipeline from your website.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[{ icon: <TrendingUp className="h-6 w-6" />, title: 'Outcome First', description: 'Pipeline, velocity, and quality tracked weekly' }, { icon: <Users className="h-6 w-6" />, title: 'User Obsessed', description: 'Clarity, friction removal, and trust built into every flow' }, { icon: <Zap className="h-6 w-6" />, title: 'Performance Native', description: 'Speed, accessibility, and data baked into launch' }].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Conversion-Ready <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Feature Set</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">Everything needed to attract, capture, and qualify the right leads.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(feature => (
                <div
                  key={feature.id}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 ${
                    hoveredFeature === feature.id ? 'border-purple-500/50 scale-105 shadow-2xl shadow-purple-500/20' : 'hover:border-gray-700'
                  }`}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 transform transition-transform duration-300 ${
                      hoveredFeature === feature.id ? 'scale-110 rotate-3' : ''
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Delivery Process</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A proven path from offer to optimized funnel.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">Progress through our process</span>
                <span className="text-sm text-purple-400 font-semibold">Step {activeProcessStep + 1} of {processSteps.length}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((activeProcessStep + 1) / processSteps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-500 transform ${
                    activeProcessStep === index ? 'scale-105' : 'scale-100'
                  }`}
                  onClick={() => setActiveProcessStep(index)}
                >
                  <div
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 relative ${
                      activeProcessStep === index
                        ? `bg-gradient-to-br ${step.bgColor} border-purple-400 shadow-lg shadow-purple-500/25`
                        : 'bg-gray-800/50 border-gray-600 hover:border-purple-500/50'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                        activeProcessStep === index ? `bg-gradient-to-br ${step.color} shadow-lg` : 'bg-gray-700'
                      }`}
                    >
                      <div className={`transition-all duration-300 ${activeProcessStep === index ? 'text-white' : 'text-gray-400'}`}>{step.icon}</div>
                    </div>
                    <h3
                      className={`text-sm font-bold mb-2 transition-all duration-300 ${
                        activeProcessStep === index ? 'text-white' : 'text-gray-300'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <div
                      className={`text-xs transition-all duration-300 ${
                        activeProcessStep === index ? 'text-purple-300' : 'text-gray-500'
                      }`}
                    >
                      {step.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-gray-800/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-start space-x-6 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${processSteps[activeProcessStep].color} rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 flex-shrink-0`}
                >
                  <div className="text-white">{processSteps[activeProcessStep].icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {processSteps[activeProcessStep].step}: {processSteps[activeProcessStep].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">{processSteps[activeProcessStep].detailedDescription}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Duration: {processSteps[activeProcessStep].duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Key Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {processSteps[activeProcessStep].deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-6 border border-purple-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <BarChart3 className="h-5 w-5 text-purple-400 mr-2" />
                    Expected Outcomes
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Conversion Lift</span>
                      <span className="text-green-400 font-semibold">+35% avg</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Lead Quality</span>
                      <span className="text-blue-400 font-semibold">+1 tier</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Velocity</span>
                      <span className="text-purple-400 font-semibold">Faster SLAs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Program</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">Flexible models for launch, growth, and scale.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border-2 transition-all duration-300 ${
                    pkg.popular ? 'border-purple-500 scale-105 shadow-2xl shadow-purple-500/20' : 'border-gray-800 hover:border-purple-500/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {pkg.cta}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{pkg.price}</span>
                      <span className="text-gray-500 ml-2">{pkg.period}</span>
                    </div>
                    <p className="text-gray-400">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg' : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Recent <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Wins</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {portfolio.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <Trophy className="h-16 w-16 text-white opacity-50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, metricIndex) => (
                        <span
                          key={metricIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-200"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-400">Key details about our website lead generation services.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Grow Your Pipeline?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let’s build and optimize the landing systems that convert your traffic into qualified opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Free Consultation
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageSEO>
  );
};

export default WebsiteLeadGeneration;
