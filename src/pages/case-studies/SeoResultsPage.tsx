import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Search, 
  BarChart3, 
  Globe, 
  Target, 
  Award,
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Activity,
  Star,
  Trophy,
  Calendar,
  MapPin,
  ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../../components/seo/PageSEO';

const SeoResultsPage = () => {
  const seoConfig = {
    title: 'Our SEO Results | Real Performance Metrics & Case Studies | MarkTechRover',
    description: 'Discover real SEO results from MarkTechRover. See how we\'ve helped clients achieve 312% organic traffic growth, 89% keyword ranking improvements, and 156% lead generation increases.',
    keywords: [
      'SEO results',
      'SEO performance',
      'organic traffic growth',
      'keyword rankings',
      'SEO case studies',
      'SEO success stories',
      'SEO metrics',
      'SEO results India',
      'SEO results Delhi',
      'SEO performance metrics'
    ],
    image: '/images/seo-results-hero.webp',
    url: 'https://marktechrover.com/case-studies/seo-results',
    type: 'article' as const,
    publishedAt: '2024-01-15',
    modifiedAt: new Date().toISOString(),
    author: 'MarkTechRover',
    section: 'Case Studies',
    tags: ['SEO', 'Results', 'Performance', 'Case Studies'],
    canonical: 'https://marktechrover.com/case-studies/seo-results'
  };

  // Overall Performance Metrics
  const overallMetrics = [
    {
      value: '312%',
      label: 'Average Organic Traffic Growth',
      description: 'Across all client campaigns over 12 months',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      value: '89%',
      label: 'Keyword Ranking Improvement',
      description: 'Increase in first-page keyword rankings',
      icon: <Search className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      value: '156%',
      label: 'Lead Generation Increase',
      description: 'Average increase in qualified leads',
      icon: <Target className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      value: '200+',
      label: 'Top 3 Rankings',
      description: 'High-value keywords ranking in top 3 positions',
      icon: <Trophy className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  // Client Success Stories
  const successStories = [
    {
      client: 'Dentinics Dental Clinics',
      industry: 'Healthcare',
      location: 'Multi-location',
      metrics: [
        { label: 'Organic Traffic', value: '+312%' },
        { label: 'Keyword Rankings', value: '+89%' },
        { label: 'Lead Generation', value: '+156%' }
      ],
      highlights: [
        '200+ dental keywords in top 3 positions',
        'Multi-location local SEO dominance',
        '156% increase in patient inquiries'
      ],
      duration: '12 months',
      link: '/case-studies/dentinics'
    },
    {
      client: 'iDesign.market',
      industry: 'E-commerce',
      location: 'Pan-India',
      metrics: [
        { label: 'Organic Traffic', value: '+187%' },
        { label: 'Page Load Speed', value: '4.2s' },
        { label: 'User Engagement', value: '+82%' }
      ],
      highlights: [
        '95+ Google PageSpeed Insights score',
        '187% organic traffic growth in 6 months',
        '43% increase in lead generation'
      ],
      duration: '6 months',
      link: '/case-studies/idesign'
    },
    {
      client: 'Chumbak Lifestyle',
      industry: 'E-commerce',
      location: 'Pan-India',
      metrics: [
        { label: 'Organic Traffic', value: '+245%' },
        { label: 'Conversion Rate', value: '+180%' },
        { label: 'Revenue Growth', value: '+320%' }
      ],
      highlights: [
        '245% increase in organic traffic',
        '180% improvement in conversion rates',
        '320% revenue growth from SEO'
      ],
      duration: '8 months',
      link: '/case-studies/chumbak'
    }
  ];

  // Keyword Performance by Category
  const keywordCategories = [
    {
      category: 'Local SEO',
      keywords: 450,
      top3Rankings: 180,
      avgPosition: 2.3,
      trafficGrowth: '+285%',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      category: 'E-commerce',
      keywords: 320,
      top3Rankings: 145,
      avgPosition: 2.8,
      trafficGrowth: '+267%',
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      category: 'Healthcare',
      keywords: 280,
      top3Rankings: 125,
      avgPosition: 2.5,
      trafficGrowth: '+312%',
      icon: <Activity className="w-6 h-6" />
    },
    {
      category: 'B2B Services',
      keywords: 195,
      top3Rankings: 95,
      avgPosition: 3.1,
      trafficGrowth: '+198%',
      icon: <Users className="w-6 h-6" />
    }
  ];

  // Timeline of Results
  const timelineResults = [
    {
      month: 'Month 1-3',
      achievements: [
        'Technical SEO audit and optimization',
        'Initial keyword research and strategy',
        'On-page optimization implementation'
      ],
      metrics: { traffic: '+15%', rankings: '+8%' }
    },
    {
      month: 'Month 4-6',
      achievements: [
        'Content strategy execution',
        'Link building campaign launch',
        'Local SEO optimization'
      ],
      metrics: { traffic: '+45%', rankings: '+32%' }
    },
    {
      month: 'Month 7-9',
      achievements: [
        'Advanced schema markup',
        'Performance optimization',
        'Conversion rate improvements'
      ],
      metrics: { traffic: '+125%', rankings: '+67%' }
    },
    {
      month: 'Month 10-12',
      achievements: [
        'Sustained ranking improvements',
        'Expanded keyword targeting',
        'ROI optimization'
      ],
      metrics: { traffic: '+312%', rankings: '+89%' }
    }
  ];

  // Industry Results
  const industryResults = [
    {
      industry: 'Healthcare',
      avgTrafficGrowth: '312%',
      avgRankingImprovement: '89%',
      avgLeadIncrease: '156%',
      topKeywords: 200,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      industry: 'E-commerce',
      avgTrafficGrowth: '267%',
      avgRankingImprovement: '82%',
      avgLeadIncrease: '180%',
      topKeywords: 145,
      color: 'from-purple-500 to-pink-500'
    },
    {
      industry: 'Real Estate',
      avgTrafficGrowth: '245%',
      avgRankingImprovement: '75%',
      avgLeadIncrease: '142%',
      topKeywords: 165,
      color: 'from-green-500 to-emerald-500'
    },
    {
      industry: 'B2B Services',
      avgTrafficGrowth: '198%',
      avgRankingImprovement: '68%',
      avgLeadIncrease: '125%',
      topKeywords: 95,
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "MarkTechRover's SEO expertise has transformed our online presence. We've seen a remarkable increase in quality leads and our dental practice is now ranking at the top for key local search terms.",
      author: "Dr. Rahul Sharma",
      company: "Smile Again Dental Clinic",
      rating: 5,
      metric: "312% traffic growth"
    },
    {
      quote: "The improvements led to significant gains in both technical performance and business metrics. Organic traffic increased by 187% within 6 months, leading to a 43% increase in lead generation.",
      author: "Marketing Director",
      company: "iDesign.market",
      rating: 5,
      metric: "187% traffic growth"
    },
    {
      quote: "We went from invisible to the go-to in NCR's SaaS scene. The blend of local SEO and technical fixes brought in enterprise clients—beyond our expectations.",
      author: "CEO",
      company: "NCR SaaS Firm",
      rating: 5,
      metric: "Enterprise clients"
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
                Real SEO Results
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                SEO Ranking Improvements and Traffic Growth
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-300 leading-relaxed mb-8"
              >
                Discover how we've helped clients achieve remarkable SEO success with data-driven strategies, 
                technical excellence, and proven methodologies.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Overall Metrics Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Overall Performance Metrics
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                Average results across all our SEO campaigns over the past 12 months
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {overallMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-8 bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  <div className="relative space-y-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center text-white shadow-lg`}>
                      {metric.icon}
                    </div>
                    <p className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                      {metric.value}
                    </p>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {metric.label}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Client Success Stories
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real results from real clients across different industries
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                          {story.client}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-300">
                          <MapPin className="w-4 h-4" />
                          <span>{story.location}</span>
                          <span className="mx-2">•</span>
                          <span>{story.industry}</span>
                        </div>
                      </div>
                      <Award className="w-8 h-8 text-primary" />
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {story.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-2xl font-bold text-primary mb-1">{metric.value}</p>
                          <p className="text-xs text-slate-600 dark:text-gray-400">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    <ul className="space-y-2 mb-6">
                      {story.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                      <span className="text-sm text-slate-600 dark:text-gray-400">
                        Duration: {story.duration}
                      </span>
                      <Link
                        to={story.link}
                        className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Keyword Performance by Category */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Keyword Performance by Category
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                Detailed breakdown of our keyword ranking achievements across different service categories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keywordCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-3xl font-bold text-primary mb-1">{category.keywords}</p>
                      <p className="text-sm text-slate-600 dark:text-gray-400">Total Keywords</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-200 dark:border-slate-700">
                      <div>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">{category.top3Rankings}</p>
                        <p className="text-xs text-slate-600 dark:text-gray-400">Top 3 Rankings</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">{category.avgPosition}</p>
                        <p className="text-xs text-slate-600 dark:text-gray-400">Avg Position</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                      <p className="text-2xl font-bold text-green-600 mb-1">{category.trafficGrowth}</p>
                      <p className="text-xs text-slate-600 dark:text-gray-400">Traffic Growth</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline of Results */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Typical SEO Results Timeline
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                How results progress over a 12-month SEO campaign
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary" />

                {timelineResults.map((period, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex gap-8 mb-12 last:mb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {period.month}
                        </h3>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-lg font-bold text-green-600">{period.metrics.traffic}</p>
                            <p className="text-xs text-slate-600 dark:text-gray-400">Traffic</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-blue-600">{period.metrics.rankings}</p>
                            <p className="text-xs text-slate-600 dark:text-gray-400">Rankings</p>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {period.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Results */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Results by Industry
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                Average SEO performance metrics across different industries
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryResults.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color}`} />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                      {industry.industry}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-3xl font-bold text-primary mb-1">{industry.avgTrafficGrowth}</p>
                        <p className="text-sm text-slate-600 dark:text-gray-400">Avg Traffic Growth</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                        <div>
                          <p className="text-xl font-bold text-slate-900 dark:text-white">{industry.avgRankingImprovement}</p>
                          <p className="text-xs text-slate-600 dark:text-gray-400">Ranking Improvement</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-slate-900 dark:text-white">{industry.avgLeadIncrease}</p>
                          <p className="text-xs text-slate-600 dark:text-gray-400">Lead Increase</p>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-lg font-bold text-slate-900 dark:text-white">{industry.topKeywords}</p>
                        <p className="text-xs text-slate-600 dark:text-gray-400">Top 3 Keywords</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real testimonials from clients who've experienced our SEO results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-gray-400 mb-2">
                      {testimonial.company}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 font-medium">{testimonial.metric}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Achieve Similar Results?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how we can help you achieve remarkable SEO growth for your business.
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
                  View All Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageSEO>
  );
};

export default SeoResultsPage;

