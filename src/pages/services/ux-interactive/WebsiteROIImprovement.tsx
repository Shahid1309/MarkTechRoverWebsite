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
  BarChart,
  PieChart,
  Clock,
  Lightbulb,
  Shield,
  Phone,
  X
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const WebsiteROIImprovement = () => {
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
    title: 'Website ROI Improvement Services | MarkTech Rover',
    description: 'Improve ROI from your website with funnel optimization, pricing clarity, and revenue analytics.',
    keywords: ['ROI', 'revenue optimization', 'pricing', 'funnel efficiency', 'analytics'],
    url: '/services/ux-interactive/website-roi-improvement',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTech Rover',
    section: 'Website ROI Improvement',
    tags: ['ROI', 'Revenue', 'Optimization'],
    image: '/images/roi-improvement.webp'
  };

  const stats = [
    { value: '19%', label: 'Avg. revenue lift' },
    { value: '14%', label: 'AOV increase' },
    { value: '25%', label: 'Funnel drop-off reduction' },
    { value: '40+', label: 'Revenue experiments' }
  ];

  const features = [
    {
      id: 1,
      title: 'Revenue Diagnostics',
      description: 'Map revenue leaks across pricing, packaging, and funnels.',
      icon: <Search className="h-8 w-8" />,
      color: 'from-amber-500 to-orange-500',
      benefits: ['Funnel leak map', 'AOV + LTV review', 'Pricing & plan audit', 'Opportunity sizing']
    },
    {
      id: 2,
      title: 'Pricing & Packaging',
      description: 'Clarify value props, packages, and CTAs to boost uptake.',
      icon: <DollarSign className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Value messaging', 'Plan differentiation', 'Add-on strategy', 'Upgrade prompts']
    },
    {
      id: 3,
      title: 'Funnel Optimization',
      description: 'Reduce friction and increase velocity across journeys.',
      icon: <Monitor className="h-8 w-8" />,
      color: 'from-purple-500 to-violet-500',
      benefits: ['Journey mapping', 'Trust + clarity cues', 'Form & checkout UX', 'Retention hooks']
    },
    {
      id: 4,
      title: 'Experimentation',
      description: 'Test pricing, offers, and UX with statistical guardrails.',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-emerald-500 to-green-500',
      benefits: ['Test design', 'Holdouts/AA', 'Rollout rules', 'Learning archive']
    },
    {
      id: 5,
      title: 'Performance & Reliability',
      description: 'Faster, more stable experiences drive revenue and trust.',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-600',
      benefits: ['CWV + uptime focus', 'Speed tuning', 'UX QA', 'Accessibility']
    },
    {
      id: 6,
      title: 'Revenue Analytics',
      description: 'Dashboards for revenue, margins, and journey cohorts.',
      icon: <BarChart className="h-8 w-8" />,
      color: 'from-pink-500 to-rose-500',
      benefits: ['Revenue dashboards', 'Cohort analysis', 'Channel ROI', 'Forecast views']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Baseline & Leaks',
      description: 'Find where revenue is leaking.',
      detailedDescription: 'We map funnels, pricing, and conversion data to identify leakage and revenue upside.',
      icon: <Search className="h-6 w-6" />,
      deliverables: ['Revenue baseline', 'Leak map', 'Opportunity sizing', 'Prioritized plan'],
      duration: '1 week',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/20 to-blue-600/20'
    },
    {
      step: '02',
      title: 'Design & Prove',
      description: 'Craft pricing/UX changes and validate with tests.',
      detailedDescription: 'We design pricing and UX variants, then test to validate revenue and experience impact.',
      icon: <Target className="h-6 w-6" />,
      deliverables: ['Pricing/UX variants', 'Test plan', 'QA + tracking', 'Launch checklist'],
      duration: '2 weeks',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/20 to-purple-600/20'
    },
    {
      step: '03',
      title: 'Rollout & Hardening',
      description: 'Scale winners and stabilize performance.',
      detailedDescription: 'Winning changes are rolled into components with performance and reliability hardening.',
      icon: <Shield className="h-6 w-6" />,
      deliverables: ['Rollout plan', 'Component updates', 'Performance tuning', 'QA checks'],
      duration: '1-2 weeks',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/20 to-green-600/20'
    },
    {
      step: '04',
      title: 'Measure & Forecast',
      description: 'Track ROI and forecast impact.',
      detailedDescription: 'Dashboards and forecasting show ROI lift, informing the next wave of improvements.',
      icon: <TrendingUp className="h-6 w-6" />,
      deliverables: ['Revenue dashboards', 'Forecast views', 'Insights cadences', 'Next wave roadmap'],
      duration: 'Ongoing',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/20 to-orange-600/20'
    }
  ];

  

  const portfolio = [
    {
      title: 'Pricing Page ROI',
      description: 'Plan clarity + value framing lifted paid conversions and AOV.',
      metrics: ['+17% paid', '+12% AOV', '6 weeks'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Ecommerce Upsell',
      description: 'Bundles and post-purchase upsells grew revenue per visitor.',
      metrics: ['+19% RPV', 'Upsell + cross-sell', '7 weeks'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'B2B Funnel ROI',
      description: 'Lead routing + pricing prompts improved pipeline value.',
      metrics: ['+21% pipeline', 'Faster velocity', '8 weeks'],
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      title: 'Subscription Retention',
      description: 'Plan UX and billing clarity reduced churn and lifted LTV.',
      metrics: ['-11% churn', '+15% LTV', '10 weeks'],
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  const faqs = [
    {
      question: 'How do you measure ROI improvement?',
      answer: 'We track revenue per visitor, AOV, funnel conversion, and pipeline value with clear baselines.'
    },
    {
      question: 'Do you change pricing?',
      answer: 'We test pricing/packaging safely with guardrails and rollout plans before full adoption.'
    },
    {
      question: 'Can you work with finance/RevOps?',
      answer: 'Yes. We align with finance and RevOps on metrics, attribution, and reporting cadence.'
    },
    {
      question: 'What if traffic is limited?',
      answer: 'We prioritize high-impact changes, leverage directional tests, and use blended evidence.'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹55,000',
      period: 'per month',
      description: 'Perfect for small businesses starting with ROI improvement',
      features: [
        { text: 'Basic ROI analysis', included: true },
        { text: 'Up to 5 pages', included: true },
        { text: 'Monthly reports', included: true },
        { text: 'Email support', included: true },
        { text: 'Basic optimization', included: true },
        { text: 'Advanced analytics', included: false },
        { text: 'Custom tracking', included: false },
        { text: 'Enterprise features', included: false }
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '₹1,30,000',
      period: 'per month',
      description: 'Comprehensive ROI improvement for growing businesses',
      features: [
        { text: 'Advanced ROI analysis', included: true },
        { text: 'Up to 20 pages', included: true },
        { text: 'Weekly reports', included: true },
        { text: 'Priority support', included: true },
        { text: 'Advanced optimization', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Custom tracking', included: true },
        { text: 'Enterprise features', included: true }
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-featured ROI improvement for large organizations',
      features: [
        { text: 'Enterprise ROI analysis', included: true },
        { text: 'Unlimited pages', included: true },
        { text: 'Real-time reports', included: true },
        { text: '24/7 priority support', included: true },
        { text: 'Full optimization', included: true },
        { text: 'Enterprise analytics', included: true },
        { text: 'Advanced tracking', included: true },
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
                <span className="text-sm font-medium text-purple-200">Website ROI Improvement</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Hire Website ROI Improvement Services
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Revenue-focused optimization of pricing, funnels, and performance to drive sustainable ROI from your website.
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
          </div>
        </div>

        <section id="overview" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ROI Team?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We connect pricing, UX, and performance to deliver measurable revenue outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[{ icon: <TrendingUp className="h-6 w-6" />, title: 'Revenue First', description: 'Every change tied to ROI and payback' }, { icon: <Users className="h-6 w-6" />, title: 'Clarity & Trust', description: 'Value clarity and trust baked into journeys' }, { icon: <Zap className="h-6 w-6" />, title: 'Performance Native', description: 'Speed, stability, and accessibility included' }].map((item, index) => (
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
                ROI <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Feature Set</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">Everything needed to find leaks, prove ROI, and scale wins.</p>
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
                Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ROI Process</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From leak detection to forecasted, productized wins.
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
                      <span className="text-gray-300">Revenue Lift</span>
                      <span className="text-green-400 font-semibold">Measured</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Payback</span>
                      <span className="text-blue-400 font-semibold">Tracked</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Reliability</span>
                      <span className="text-purple-400 font-semibold">Improved</span>
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
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ROI Plan</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">Engagements tuned for quick ROI, programmatic gains, or ongoing growth.</p>
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
                ROI <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Wins</span>
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
              <p className="text-xl text-gray-400">Key details about our ROI improvement services.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Grow Profitably?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let’s optimize pricing, funnels, and performance to deliver measurable ROI gains from your website.
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

export default WebsiteROIImprovement;
