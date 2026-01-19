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
  MessageSquare,
  FileText,
  Settings,
  Shield,
  Rocket,
  BarChart3,
  Building2,
  Briefcase,
  Globe,
  Eye,
  Code,
  Layers,
  DollarSign,
  MapPin,
  Trophy,
  TrendingDown,
  AlertCircle,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import PageSEO from '../../components/seo/PageSEO';

const BestSeoCompanies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoConfig = {
    title: 'Who Are the Best SEO Companies? | Guide to Top SEO Agencies | MarkTechRover',
    description: 'Discover how to identify the best SEO companies. Learn what makes a top SEO agency, key features to look for, red flags to avoid, and how to choose the right SEO company for your business.',
    keywords: [
      'Best SEO companies',
      'Top SEO agencies',
      'Best SEO company India',
      'Best SEO company Delhi',
      'Top SEO services',
      'Best SEO agency',
      'SEO company ranking',
      'How to choose SEO company',
      'Top SEO companies list',
      'Best SEO services India',
      'Professional SEO companies',
      'Reputable SEO agencies'
    ],
    url: '/learn/best-seo-companies',
    type: 'article' as const,
    publishedAt: '2024-01-15',
    modifiedAt: new Date().toISOString(),
    author: 'MarkTechRover',
    section: 'Learn',
    tags: ['SEO', 'SEO Companies', 'SEO Agencies', 'Digital Marketing'],
    image: '/images/best-seo-companies.webp',
    canonical: 'https://marktechrover.com/learn/best-seo-companies'
  };

  const criteria = [
    {
      title: 'Proven Track Record',
      description: 'Companies with documented case studies, client testimonials, and measurable results',
      icon: <Trophy className="h-8 w-8" />,
      color: 'from-yellow-500 to-orange-600',
      importance: 'Critical'
    },
    {
      title: 'Transparent Reporting',
      description: 'Regular, detailed reports showing progress, rankings, traffic, and conversions',
      icon: <BarChart3 className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-600',
      importance: 'Critical'
    },
    {
      title: 'White-Hat Techniques',
      description: 'Ethical SEO practices that comply with search engine guidelines',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-600',
      importance: 'Critical'
    },
    {
      title: 'Industry Experience',
      description: 'Familiarity with your specific industry and its unique SEO challenges',
      icon: <Briefcase className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-600',
      importance: 'High'
    },
    {
      title: 'Customized Strategies',
      description: 'Tailored approaches based on your business goals, not one-size-fits-all solutions',
      icon: <Target className="h-8 w-8" />,
      color: 'from-indigo-500 to-blue-600',
      importance: 'High'
    },
    {
      title: 'Communication & Support',
      description: 'Responsive communication, dedicated account managers, and ongoing support',
      icon: <MessageSquare className="h-8 w-8" />,
      color: 'from-pink-500 to-rose-600',
      importance: 'High'
    },
    {
      title: 'Technical Expertise',
      description: 'Strong technical SEO capabilities including site audits and optimization',
      icon: <Code className="h-8 w-8" />,
      color: 'from-cyan-500 to-blue-600',
      importance: 'High'
    },
    {
      title: 'Content Capabilities',
      description: 'Ability to create high-quality, SEO-optimized content',
      icon: <FileText className="h-8 w-8" />,
      color: 'from-emerald-500 to-teal-600',
      importance: 'Medium'
    },
    {
      title: 'Link Building Expertise',
      description: 'Proven ability to acquire high-quality, relevant backlinks',
      icon: <Layers className="h-8 w-8" />,
      color: 'from-violet-500 to-purple-600',
      importance: 'Medium'
    }
  ];

  const topFeatures = [
    {
      title: 'Comprehensive SEO Audits',
      description: 'Thorough analysis of technical, on-page, and off-page SEO factors',
      icon: <Eye className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Keyword Research & Strategy',
      description: 'Data-driven keyword research and strategic targeting',
      icon: <Search className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Content Strategy & Creation',
      description: 'SEO-optimized content that engages users and ranks well',
      icon: <FileText className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Technical SEO Optimization',
      description: 'Site speed, mobile optimization, schema markup, and more',
      icon: <Settings className="h-6 w-6" />,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Local SEO Services',
      description: 'Google Business Profile optimization and local search strategies',
      icon: <MapPin className="h-6 w-6" />,
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Link Building Campaigns',
      description: 'Ethical link acquisition from authoritative websites',
      icon: <Layers className="h-6 w-6" />,
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive tracking and regular performance reports',
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Ongoing Optimization',
      description: 'Continuous monitoring and strategy adjustments',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const redFlags = [
    {
      title: 'Guaranteed Rankings',
      description: 'No legitimate SEO company can guarantee #1 rankings. SEO results depend on many factors.',
      icon: <AlertCircle className="h-6 w-6" />
    },
    {
      title: 'Unrealistic Promises',
      description: 'Promises of instant results or overnight success are red flags.',
      icon: <TrendingDown className="h-6 w-6" />
    },
    {
      title: 'Black-Hat Techniques',
      description: 'Companies using spammy tactics, keyword stuffing, or link farms.',
      icon: <ThumbsDown className="h-6 w-6" />
    },
    {
      title: 'Lack of Transparency',
      description: 'Unwillingness to share strategies, reports, or case studies.',
      icon: <Eye className="h-6 w-6" />
    },
    {
      title: 'No Contract or Unclear Terms',
      description: 'Vague service agreements or refusal to provide written contracts.',
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: 'Suspiciously Low Pricing',
      description: 'Prices that seem too good to be true often indicate poor quality service.',
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: 'No Portfolio or Case Studies',
      description: 'Inability to show previous work or client success stories.',
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: 'Poor Communication',
      description: 'Slow responses, unprofessional communication, or lack of dedicated support.',
      icon: <MessageSquare className="h-6 w-6" />
    }
  ];

  const comparisonFactors = [
    {
      factor: 'Experience & Track Record',
      best: '5+ years, proven case studies',
      average: '2-5 years, some results',
      poor: 'Less than 2 years, no proof'
    },
    {
      factor: 'Reporting & Transparency',
      best: 'Monthly detailed reports',
      average: 'Quarterly basic reports',
      poor: 'No regular reporting'
    },
    {
      factor: 'SEO Techniques',
      best: 'White-hat only',
      average: 'Mix of techniques',
      poor: 'Black-hat practices'
    },
    {
      factor: 'Client Communication',
      best: 'Dedicated account manager',
      average: 'Team communication',
      poor: 'Limited communication'
    },
    {
      factor: 'Customization',
      best: 'Fully customized strategy',
      average: 'Semi-customized approach',
      poor: 'One-size-fits-all'
    },
    {
      factor: 'Pricing',
      best: 'Transparent, value-based',
      average: 'Competitive pricing',
      poor: 'Unclear or suspiciously low'
    }
  ];

  const faqs = [
    {
      question: 'What makes an SEO company the "best"?',
      answer: 'The best SEO companies have proven track records, use ethical practices, provide transparent reporting, offer customized strategies, maintain excellent communication, and deliver measurable results. They should have case studies, client testimonials, and industry recognition.'
    },
    {
      question: 'How do I verify if an SEO company is legitimate?',
      answer: 'Check their portfolio and case studies, read client testimonials and reviews, verify their certifications and awards, ask for references, review their website\'s own SEO performance, and ensure they use white-hat techniques. Legitimate companies are transparent about their methods.'
    },
    {
      question: 'Should I choose a local or national SEO company?',
      answer: 'It depends on your needs. Local SEO companies may better understand regional markets and can provide in-person meetings. National companies often have more resources and broader expertise. For local businesses, a company with local SEO expertise is crucial regardless of location.'
    },
    {
      question: 'What questions should I ask before hiring an SEO company?',
      answer: 'Ask about their experience in your industry, their SEO methodology, what results you can expect and when, how they measure success, what reporting you\'ll receive, who will work on your account, their pricing structure, and if they can provide case studies or references.'
    },
    {
      question: 'How much should I pay for SEO services?',
      answer: 'SEO pricing varies based on scope, competition, and company expertise. Monthly SEO services typically range from ₹10,000 to ₹1,00,000+ in India. Focus on ROI rather than just cost - a more expensive company that delivers better results is often more cost-effective.'
    },
    {
      question: 'Can I do SEO myself instead of hiring a company?',
      answer: 'While basic SEO can be done in-house, professional SEO companies bring expertise, tools, experience, and time that most businesses lack. For competitive industries or complex technical issues, professional help is usually necessary for significant results.'
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
                Best SEO Companies in India
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-300 leading-relaxed mb-8"
              >
                A comprehensive guide to identifying top SEO companies, understanding what makes them great, 
                and choosing the right partner for your business's search engine optimization needs.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Understanding the Best SEO Companies
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-slate-600 dark:text-gray-300 mb-6">
                  The best SEO companies distinguish themselves through proven expertise, ethical practices, 
                  transparent communication, and measurable results. They combine technical knowledge with 
                  strategic thinking to deliver sustainable growth for their clients.
                </p>
                <p className="text-lg text-slate-600 dark:text-gray-300 mb-6">
                  Top SEO companies don't just implement tactics—they develop comprehensive strategies 
                  tailored to each client's unique business goals, industry, and competitive landscape. 
                  They stay current with search engine algorithm updates and continuously adapt their 
                  approaches to maintain and improve rankings.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Characteristics of Top SEO Companies:
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Proven track record with documented case studies and client testimonials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Transparent reporting and clear communication about strategies and results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ethical white-hat SEO practices that comply with search engine guidelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Customized strategies tailored to each client's specific needs and goals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Comprehensive services covering all aspects of SEO</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Criteria Section */}
        <section id="criteria" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Criteria for the Best SEO Companies
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                Key factors that separate top SEO companies from the rest
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {criteria.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                  <div className="flex items-start justify-between mb-4 relative">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                      {item.icon}
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      item.importance === 'Critical' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                      item.importance === 'High' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {item.importance}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Features of Top SEO Companies
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                Essential services and capabilities offered by leading SEO agencies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 shadow-lg relative`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Red Flags Section */}
        <section id="red-flags" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Red Flags to Avoid
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                Warning signs that indicate you should look elsewhere
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {redFlags.map((flag, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 shadow-lg border border-red-200 dark:border-red-800/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
                    {flag.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {flag.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm">
                    {flag.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Best vs Average vs Poor SEO Companies
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                How to distinguish between different levels of SEO service providers
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">Factor</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-green-600 dark:text-green-400">Best</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-yellow-600 dark:text-yellow-400">Average</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-red-600 dark:text-red-400">Poor</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFactors.map((factor, index) => (
                    <tr key={index} className="border-b border-slate-200 dark:border-slate-700 last:border-0">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{factor.factor}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-300 text-center">{factor.best}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-300 text-center">{factor.average}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-300 text-center">{factor.poor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                Common questions about finding and choosing the best SEO companies
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
                Looking for a Top SEO Company?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                MarkTechRover combines proven expertise, ethical practices, and transparent reporting 
                to deliver exceptional SEO results. See why we're considered among the best.
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
                  to="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 backdrop-blur-sm"
                >
                  View Our Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageSEO>
  );
};

export default BestSeoCompanies;

