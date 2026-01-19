import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Star,
  Award,
  Clock,
  Brain,
  Globe,
  MessageSquare,
  FileText,
  Settings,
  Monitor,
  Shield,
  Rocket,
  Lightbulb,
  BarChart3,
  Building2,
  Briefcase,
  ShoppingCart,
  Activity,
  Link2,
  Eye,
  Code,
  Layers,
  DollarSign,
  MapPin
} from 'lucide-react';
import PageSEO from '../../components/seo/PageSEO';

const WhatIsSeoCompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoConfig = {
    title: 'What Is an SEO Company? | Complete Guide to SEO Services | MarkTechRover',
    description: 'Learn what an SEO company is, what services they provide, and how they help businesses improve search engine rankings. Complete guide to SEO companies, their services, and how to choose the right one.',
    keywords: [
      'What is an SEO company',
      'SEO company definition',
      'SEO services company',
      'SEO agency',
      'SEO company services',
      'Best SEO company',
      'SEO company India',
      'SEO company Delhi',
      'How SEO companies work',
      'SEO company benefits',
      'Professional SEO services',
      'SEO consulting company'
    ],
    url: '/learn/what-is-seo-company',
    type: 'article' as const,
    publishedAt: '2024-01-15',
    modifiedAt: new Date().toISOString(),
    author: 'MarkTechRover',
    section: 'Learn',
    tags: ['SEO', 'SEO Company', 'SEO Services', 'Digital Marketing'],
    image: '/images/what-is-seo-company.webp',
    canonical: 'https://marktechrover.com/learn/what-is-seo-company'
  };

  const services = [
    {
      title: 'On-Page SEO',
      description: 'Optimizing individual web pages to rank higher and earn more relevant traffic',
      icon: <FileText className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Keyword optimization',
        'Meta tags and descriptions',
        'Content optimization',
        'Internal linking structure',
        'Image optimization',
        'URL structure'
      ]
    },
    {
      title: 'Technical SEO',
      description: 'Improving the technical aspects of your website for better search engine crawling and indexing',
      icon: <Code className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Site speed optimization',
        'Mobile responsiveness',
        'Schema markup',
        'XML sitemaps',
        'Robots.txt optimization',
        'HTTPS implementation'
      ]
    },
    {
      title: 'Content Marketing',
      description: 'Creating valuable, relevant content to attract and engage your target audience',
      icon: <FileText className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Blog content creation',
        'SEO-optimized articles',
        'Content strategy',
        'Keyword-focused content',
        'Content calendar',
        'Content promotion'
      ]
    },
    {
      title: 'Link Building',
      description: 'Acquiring high-quality backlinks from authoritative websites to improve domain authority',
      icon: <Link2 className="h-8 w-8" />,
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Outreach campaigns',
        'Guest posting',
        'Resource page links',
        'Broken link building',
        'Digital PR',
        'Link quality analysis'
      ]
    },
    {
      title: 'Local SEO',
      description: 'Optimizing your online presence to attract more local customers',
      icon: <MapPin className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-600',
      features: [
        'Google Business Profile',
        'Local citations',
        'Location-based content',
        'Local link building',
        'Review management',
        'NAP consistency'
      ]
    },
    {
      title: 'SEO Analytics & Reporting',
      description: 'Tracking and analyzing SEO performance with detailed reports and insights',
      icon: <BarChart3 className="h-8 w-8" />,
      color: 'from-red-500 to-pink-600',
      features: [
        'Keyword ranking tracking',
        'Traffic analysis',
        'Conversion tracking',
        'Competitor analysis',
        'Monthly reports',
        'Performance dashboards'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Increased Organic Traffic',
      description: 'Drive more qualified visitors to your website without paid advertising',
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-600',
      metric: '312% average traffic growth'
    },
    {
      title: 'Better Search Rankings',
      description: 'Appear higher in search results for relevant keywords',
      icon: <Target className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-600',
      metric: '89% ranking improvement'
    },
    {
      title: 'Higher Quality Leads',
      description: 'Attract visitors who are actively searching for your products or services',
      icon: <Users className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-600',
      metric: '156% lead increase'
    },
    {
      title: 'Long-term Results',
      description: 'Build sustainable organic growth that continues to deliver over time',
      icon: <Clock className="h-8 w-8" />,
      color: 'from-yellow-500 to-orange-600',
      metric: 'Ongoing ROI'
    },
    {
      title: 'Cost-Effective Marketing',
      description: 'Achieve better ROI compared to paid advertising campaigns',
      icon: <DollarSign className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-600',
      metric: 'Lower cost per lead'
    },
    {
      title: 'Competitive Advantage',
      description: 'Outrank competitors and establish market dominance',
      icon: <Award className="h-8 w-8" />,
      color: 'from-red-500 to-pink-600',
      metric: 'Market leadership'
    }
  ];

  const choosingFactors = [
    {
      title: 'Experience & Track Record',
      description: 'Look for companies with proven results and case studies in your industry',
      icon: <Award className="h-6 w-6" />
    },
    {
      title: 'Transparent Reporting',
      description: 'Choose companies that provide clear, regular reports on your SEO performance',
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: 'Customized Strategies',
      description: 'Ensure they create tailored strategies based on your business goals',
      icon: <Target className="h-6 w-6" />
    },
    {
      title: 'White-Hat Techniques',
      description: 'Verify they use ethical, Google-approved SEO practices',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Communication & Support',
      description: 'Select companies that maintain regular communication and provide support',
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      title: 'Industry Expertise',
      description: 'Consider companies with experience in your specific industry',
      icon: <Briefcase className="h-6 w-6" />
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your current SEO performance, technical issues, and opportunities'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Creating a customized SEO strategy based on your business goals and target audience'
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'Executing on-page, technical, and content optimizations across your website'
    },
    {
      step: '4',
      title: 'Content Creation',
      description: 'Developing high-quality, SEO-optimized content that attracts and engages your audience'
    },
    {
      step: '5',
      title: 'Link Building',
      description: 'Acquiring quality backlinks from authoritative websites to boost domain authority'
    },
    {
      step: '6',
      title: 'Monitoring & Optimization',
      description: 'Continuously tracking performance, analyzing data, and optimizing strategies for better results'
    }
  ];

  const faqs = [
    {
      question: 'What exactly does an SEO company do?',
      answer: 'An SEO company helps improve your website\'s visibility in search engine results pages (SERPs) through various techniques including keyword optimization, content creation, technical improvements, link building, and ongoing monitoring and optimization.'
    },
    {
      question: 'How long does it take to see SEO results?',
      answer: 'SEO is a long-term strategy. Typically, you may start seeing initial improvements in 3-6 months, with significant results appearing in 6-12 months. However, this varies based on competition, current website state, and the strategies implemented.'
    },
    {
      question: 'How much does SEO company services cost?',
      answer: 'SEO pricing varies widely based on the scope of work, competition level, and company expertise. Monthly SEO services can range from ₹10,000 to ₹1,00,000+ depending on your needs. It\'s important to consider ROI rather than just cost.'
    },
    {
      question: 'What\'s the difference between SEO and paid advertising?',
      answer: 'SEO focuses on organic (unpaid) search results and provides long-term, sustainable traffic. Paid advertising (PPC) provides immediate results but stops when you stop paying. Both strategies work well together for comprehensive digital marketing.'
    },
    {
      question: 'Do I need an SEO company if I have a small business?',
      answer: 'Yes, SEO is especially valuable for small businesses as it provides cost-effective marketing that can compete with larger competitors. Local SEO, in particular, can help small businesses attract nearby customers effectively.'
    },
    {
      question: 'How do I know if an SEO company is legitimate?',
      answer: 'Look for companies with transparent reporting, proven case studies, ethical practices (white-hat SEO), clear communication, and realistic promises. Avoid companies that guarantee #1 rankings or use black-hat techniques.'
    }
  ];

  return (
    <PageSEO config={seoConfig}>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-grid-slate-700/[0.05] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-slate-900/20" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6"
              >
                SEO Guide
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                What Is SEO Company Explained
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-300 leading-relaxed mb-8"
              >
                A comprehensive guide to understanding SEO companies, their services, benefits, 
                and how they can help your business achieve better search engine visibility and organic growth.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Understanding SEO Companies
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-slate-600 dark:text-gray-300 mb-6">
                  An SEO (Search Engine Optimization) company is a specialized agency that helps businesses 
                  improve their visibility in search engine results pages (SERPs) through organic, unpaid methods. 
                  These companies employ various strategies and techniques to help websites rank higher for 
                  relevant keywords, ultimately driving more organic traffic and potential customers.
                </p>
                <p className="text-lg text-slate-600 dark:text-gray-300 mb-6">
                  SEO companies work by analyzing your website, understanding your business goals, and implementing 
                  a comprehensive strategy that includes technical optimization, content creation, link building, 
                  and ongoing monitoring to ensure continuous improvement in search rankings.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Key Characteristics of SEO Companies:
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Specialized expertise in search engine algorithms and ranking factors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Data-driven approach using analytics and performance tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Comprehensive services covering all aspects of SEO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ongoing optimization and strategy adjustments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Services Provided by SEO Companies
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive SEO services that help improve your search engine visibility
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Benefits of Working with an SEO Company
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                Why partnering with a professional SEO company can transform your online presence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 mb-3">
                    {benefit.description}
                  </p>
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                    <p className={`text-sm font-semibold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>{benefit.metric}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Choosing Section */}
        <section id="choosing" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                How to Choose the Right SEO Company
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                Key factors to consider when selecting an SEO company for your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {choosingFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {factor.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm">
                    {factor.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Typical SEO Company Process
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                How SEO companies work to improve your search engine rankings
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                Common questions about SEO companies and their services
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work with an SEO Company?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let MarkTechRover help you achieve better search engine rankings and drive organic growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services/seo-lead-generation"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 backdrop-blur-sm"
                >
                  View SEO Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageSEO>
  );
};

export default WhatIsSeoCompany;

