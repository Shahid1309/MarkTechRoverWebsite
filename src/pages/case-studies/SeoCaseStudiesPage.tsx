import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  TrendingUp, 
  Award, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Globe,
  Target,
  Users,
  Calendar,
  MapPin,
  Activity,
  ShoppingCart,
  Building2,
  Briefcase
} from 'lucide-react';
import PageSEO from '../../components/seo/PageSEO';

const SeoCaseStudiesPage = () => {
  const seoConfig = {
    title: 'Our SEO Case Studies | Real SEO Success Stories & Results | MarkTechRover',
    description: 'Explore detailed SEO case studies showcasing real results. See how we\'ve helped clients achieve 312% organic traffic growth, 89% keyword ranking improvements, and 156% lead generation increases.',
    keywords: [
      'SEO case studies',
      'SEO success stories',
      'SEO results',
      'SEO case study examples',
      'SEO transformation case studies',
      'SEO results India',
      'SEO case studies Delhi',
      'Local SEO case studies',
      'E-commerce SEO case studies',
      'Healthcare SEO case studies'
    ],
    image: '/images/seo-case-studies-hero.webp',
    url: 'https://marktechrover.com/case-studies',
    type: 'article' as const,
    publishedAt: '2024-01-15',
    modifiedAt: new Date().toISOString(),
    author: 'MarkTechRover',
    section: 'Case Studies',
    tags: ['SEO', 'Case Studies', 'Success Stories', 'SEO Results'],
    canonical: 'https://marktechrover.com/case-studies'
  };

  const caseStudies = [
    {
      id: 'dentinics',
      title: 'Dentinics SEO Transformation',
      subtitle: 'Multi-location Dental Clinic SEO Success',
      industry: 'Healthcare',
      location: 'Multi-location',
      duration: '12 months',
      metrics: [
        { label: 'Organic Traffic', value: '+312%' },
        { label: 'Keyword Rankings', value: '+89%' },
        { label: 'Lead Generation', value: '+156%' }
      ],
      highlights: [
        '200+ dental keywords in top 3 positions',
        'Multi-location local SEO dominance',
        '156% increase in patient inquiries',
        'Comprehensive local SEO strategy'
      ],
      services: ['Local SEO', 'Content Marketing', 'Technical SEO'],
      image: '/images/case-studies/dentinics-hero.webp',
      link: '/case-studies/dentinics'
    },
    {
      id: 'idesign',
      title: 'iDesign.market Platform Transformation',
      subtitle: 'E-commerce SEO & Development Success',
      industry: 'E-commerce',
      location: 'Pan-India',
      duration: '6 months',
      metrics: [
        { label: 'Organic Traffic', value: '+187%' },
        { label: 'Page Load Speed', value: '4.2s' },
        { label: 'User Engagement', value: '+82%' }
      ],
      highlights: [
        '95+ Google PageSpeed Insights score',
        '187% organic traffic growth in 6 months',
        '43% increase in lead generation',
        'Complete platform rebuild with SEO focus'
      ],
      services: ['Web Development', 'SEO Optimization', 'UI/UX Design'],
      image: '/images/case-studies/idesign-hero.webp',
      link: '/case-studies/idesign'
    },
    {
      id: 'chumbak',
      title: 'Chumbak E-commerce Transformation',
      subtitle: 'Lifestyle Brand SEO & E-commerce Success',
      industry: 'E-commerce',
      location: 'Pan-India',
      duration: '8 months',
      metrics: [
        { label: 'Organic Traffic', value: '+245%' },
        { label: 'Conversion Rate', value: '+180%' },
        { label: 'Revenue Growth', value: '+320%' }
      ],
      highlights: [
        '245% increase in organic traffic',
        '180% improvement in conversion rates',
        '320% revenue growth from SEO',
        'Scalable e-commerce platform'
      ],
      services: ['Platform Development', 'UI/UX Design', 'Marketing Integration'],
      image: '/images/case-studies/chumbak-hero.webp',
      link: '/case-studies/chumbak'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      caseStudies: 1,
      avgTrafficGrowth: '312%',
      icon: <Activity className="w-6 h-6" />
    },
    {
      name: 'E-commerce',
      caseStudies: 2,
      avgTrafficGrowth: '216%',
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      name: 'Real Estate',
      caseStudies: 0,
      avgTrafficGrowth: '245%',
      icon: <Building2 className="w-6 h-6" />
    },
    {
      name: 'B2B Services',
      caseStudies: 0,
      avgTrafficGrowth: '198%',
      icon: <Briefcase className="w-6 h-6" />
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
                SEO Case Studies
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Digital Marketing Success Stories with Results
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-300 leading-relaxed mb-8"
              >
                Discover how we've transformed businesses across industries with data-driven SEO strategies, 
                technical excellence, and proven methodologies that deliver measurable results.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-200/50 dark:border-slate-700/50 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Search className="w-16 h-16 text-primary/30" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {study.industry}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-600 dark:text-gray-400">
                        <MapPin className="w-3 h-3" />
                        {study.location}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300 mb-4">
                      {study.subtitle}
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-xl font-bold text-primary mb-1">{metric.value}</p>
                          <p className="text-xs text-slate-600 dark:text-gray-400">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {study.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                      <span className="text-sm text-slate-600 dark:text-gray-400 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {study.duration}
                      </span>
                      <Link
                        to={study.link}
                        className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium group-hover:gap-3"
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

        {/* Industry Performance */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                SEO Results by Industry
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                Average SEO performance metrics across different industries
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {industry.name}
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-2xl font-bold text-primary mb-1">{industry.avgTrafficGrowth}</p>
                      <p className="text-sm text-slate-600 dark:text-gray-400">Avg Traffic Growth</p>
                    </div>
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">{industry.caseStudies}</p>
                      <p className="text-xs text-slate-600 dark:text-gray-400">Case Studies</p>
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
                Ready to Create Your Own SEO Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how we can help you achieve similar results for your business.
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
                  to="/case-studies/seo-results"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 backdrop-blur-sm"
                >
                  View SEO Results
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageSEO>
  );
};

export default SeoCaseStudiesPage;

