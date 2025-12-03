import { motion } from 'framer-motion';
import { Search, BarChart3, Globe, MessageSquare, Mail, PenTool, Star, Users, Trophy, ArrowRight, ChevronDown, Code, Zap, Target, Award, Megaphone, Video, Palette } from 'lucide-react';
import Section from '../components/ui/Section';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CountUp from 'react-countup';
import { useState } from 'react';
import { cn } from '../lib/utils';

interface ServiceResult {
  metric: string;
  label: string;
}

interface ServiceTestimonial {
  text: string;
  author: string;
  company: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
  benefits: string;
  image: string;
  results?: ServiceResult[];
  testimonial?: ServiceTestimonial;
}

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('websites');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: 200, label: 'Projects Completed', icon: <Trophy className="h-6 w-6" /> },
    { value: 95, label: 'Client Satisfaction', suffix: '%', icon: <Star className="h-6 w-6" /> },
    { value: 500, label: 'Clients Served', icon: <Users className="h-6 w-6" /> },
  ];

  const caseStudies = [
    {
      title: 'E-commerce Revenue Growth',
      metric: '156%',
      description: 'Increased online sales through SEO and PPC optimization',
      duration: '6 months',
      industry: 'Retail'
    },
    {
      title: 'B2B Lead Generation',
      metric: '3x',
      description: 'Tripled qualified leads through content marketing',
      duration: '4 months',
      industry: 'Technology'
    },
    {
      title: 'Local Business Visibility',
      metric: '200%',
      description: 'Doubled local search visibility and store visits',
      duration: '3 months',
      industry: 'Restaurant'
    }
  ];

  const services: Service[] = [
    {
      id: 'websites',
      title: 'Website Development',
      description: 'Create stunning, high-performing websites that convert visitors into customers with our expert development team.',
      icon: <Globe className="h-8 w-8" />,
      features: [
        'Custom Website Design',
        'Responsive Development',
        'E-commerce Solutions',
        'CMS Implementation',
        'Speed Optimization',
        'Conversion Rate Optimization',
      ],
      benefits: 'Professional online presence, improved user experience, higher conversion rates, and a platform optimized for growth.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      results: [
        { metric: '99%', label: 'Page Load Speed' },
        { metric: '80%', label: 'Conversion Rate Increase' },
        { metric: '100%', label: 'Mobile Responsive' }
      ],
      testimonial: {
        text: "The website they developed exceeded our expectations. It's fast, beautiful, and has significantly improved our conversion rates. Their attention to detail and responsive design has helped us reach more customers.",
        author: "Dr. Manish Vishen",
        company: "The Whiteys Dental"
      }
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      description: 'Enhance your online visibility and drive organic traffic with our data-driven SEO strategies.',
      icon: <Search className="h-8 w-8" />,
      features: [
        'Keyword Research & Strategy',
        'On-Page SEO Optimization',
        'Technical SEO Audits',
        'Content Strategy & Creation',
        'Link Building',
        'Local SEO',
      ],
      benefits: 'Improved search engine rankings, increased organic traffic, higher quality leads, and better ROI.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      results: [
        { metric: '250%', label: 'Organic Traffic Increase' },
        { metric: '85%', label: 'Keyword Ranking Improvement' },
        { metric: '3x', label: 'Lead Generation Growth' }
      ],
      testimonial: {
        text: "Their SEO expertise has transformed our online presence. We've seen a remarkable increase in quality leads and our dental practice is now ranking at the top for key local search terms.",
        author: "Dr. Rahul Sharma",
        company: "Smile Again Dental Clinic"
      }
    },
    {
      id: 'ppc',
      title: 'PPC & AI-Powered Ads',
      description: 'Maximize your ROI with data-driven, AI-optimized advertising campaigns across multiple platforms.',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        'Google Ads Management',
        'Meta Ads (Facebook & Instagram)',
        'LinkedIn Advertising',
        'AI-Powered Campaign Optimization',
        'A/B Testing',
        'Detailed Performance Analytics',
      ],
      benefits: 'Immediate visibility, precise targeting, cost-effective lead generation, and measurable results with continuous optimization.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      description: 'Build your brand presence, engage with your audience, and drive traffic through strategic social media marketing.',
      icon: <MessageSquare className="h-8 w-8" />,
      features: [
        'Social Media Strategy',
        'Content Creation & Curation',
        'Community Management',
        'Platform-Specific Campaigns',
        'Influencer Collaborations',
        'Performance Analytics',
      ],
      benefits: 'Increased brand awareness, improved customer engagement, stronger brand loyalty, and additional traffic sources.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'email',
      title: 'Email Marketing',
      description: 'Nurture leads and maintain customer relationships with personalized, automated email marketing campaigns.',
      icon: <Mail className="h-8 w-8" />,
      features: [
        'Email Strategy Development',
        'Campaign Design & Copywriting',
        'Automation Sequences',
        'List Segmentation',
        'A/B Testing',
        'Performance Analytics',
      ],
      benefits: 'High ROI, direct communication with customers, increased conversions, and valuable customer insights.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'brand',
      title: 'Brand Strategy',
      description: 'Develop a cohesive brand identity that resonates with your target audience and differentiates you in the market.',
      icon: <PenTool className="h-8 w-8" />,
      features: [
        'Brand Positioning',
        'Visual Identity Development',
        'Messaging & Voice',
        'Style Guides',
        'Brand Storytelling',
        'Competitive Analysis',
      ],
      benefits: 'Consistent brand experience, stronger market positioning, increased customer trust, and improved customer loyalty.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const faqs = [
    {
      question: "What makes your web development services unique?",
      answer: "We combine cutting-edge technology with user-centric design principles to create websites that not only look stunning but also drive results. Our development process includes extensive research, custom design, and continuous optimization."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "While initial improvements can be seen within 3-6 months, sustainable SEO results typically take 6-12 months to achieve. We focus on building a strong foundation with technical SEO while simultaneously implementing content and link-building strategies."
    },
    {
      question: "Do you provide website maintenance services?",
      answer: "Yes, we offer comprehensive website maintenance packages that include regular updates, security monitoring, performance optimization, and content updates to ensure your website remains secure and performs optimally."
    }
  ];

  const technologies = [
    {
      icon: <Code className="h-6 w-6" />,
      name: 'Development',
      items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      name: 'Marketing',
      items: ['Google Ads', 'Meta Ads', 'SEMrush', 'Ahrefs', 'Mailchimp', 'HubSpot']
    },
    {
      icon: <Video className="h-6 w-6" />,
      name: 'Production',
      items: ['Adobe Premiere', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro', 'Canva Pro', 'Figma']
    },
    {
      icon: <Palette className="h-6 w-6" />,
      name: 'Design',
      items: ['Adobe XD', 'Photoshop', 'Illustrator', 'Sketch', 'InDesign', 'Lightroom']
    },
    {
      icon: <Zap className="h-6 w-6" />,
      name: 'Backend',
      items: ['Node.js', 'Python', 'Java', 'PHP', 'MongoDB', 'PostgreSQL']
    },
    {
      icon: <Target className="h-6 w-6" />,
      name: 'Tools & DevOps',
      items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Jenkins']
    }
  ];

  const awards = [
    {
      year: '2023',
      title: 'Best Web Development Company',
      organization: 'Tech Excellence Awards',
      description: 'Recognized for innovative web solutions and exceptional client satisfaction'
    },
    {
      year: '2022',
      title: 'Digital Innovation Award',
      organization: 'Digital Impact Awards',
      description: 'Awarded for groundbreaking digital transformation projects'
    },
    {
      year: '2023',
      title: 'Top SEO Agency',
      organization: 'SEO Masters',
      description: 'Ranked among top 10 SEO agencies in India'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We dive deep into understanding your business goals, target audience, and unique challenges.',
      color: 'bg-blue-500'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Our experts craft a comprehensive digital strategy tailored to your specific needs.',
      color: 'bg-green-500'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We bring your vision to life with cutting-edge technology and best practices.',
      color: 'bg-purple-500'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization to ensure maximum performance.',
      color: 'bg-orange-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>Professional Web Development & Digital Marketing Services | Best Website Developers in India</title>
        <meta name="description" content="Transform your online presence with our expert web development and digital marketing services. Top-rated website developers in India delivering exceptional results." />
        <meta name="keywords" content="website developers in India, web development services, SEO services, digital marketing agency, best web developers" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Digital Growth Agency",
              "description": "Professional web development and digital marketing services in India",
              "areaServed": "India",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Development",
                      "description": "Custom website development services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Services",
                      "description": "Search engine optimization services"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Section className="pt-32 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="mb-4">Transform Your Digital Presence</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Award-winning web development and digital marketing services that drive real business results.
              Trusted by leading brands across India.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 bg-background rounded-lg">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix || ''} duration={2} />
                  </h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies Section */}
      <Section className="bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">Real Results, Real Impact</h2>
            <p className="text-muted-foreground text-lg">
              See how we've helped businesses achieve their digital goals through our comprehensive services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-4">{study.metric}</div>
                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{study.duration}</span>
                  <span>{study.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 bg-secondary rounded-lg overflow-hidden"
              >
                <div className={cn("absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10", step.color)} />
                <div className="text-4xl font-bold text-accent mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technologies Section */}
      <Section className="bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">Technologies We Master</h2>
            <p className="text-muted-foreground text-lg">
              Cutting-edge technologies to power your digital success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Awards Section */}
      <Section className="bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground text-lg">
              Excellence recognized by industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-accent" />
                  <div className="text-sm font-semibold text-accent">{award.year}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <div className="text-sm text-muted-foreground mb-3">{award.organization}</div>
                <p className="text-muted-foreground">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services Tabs */}
      <Section className="bg-secondary">
        <div className="container">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={cn(
                  "px-6 py-3 rounded-full transition-all",
                  activeTab === service.id
                    ? "bg-accent text-white"
                    : "bg-background hover:bg-accent/10"
                )}
              >
                {service.title}
              </button>
            ))}
          </div>

          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "transition-all",
                activeTab === service.id ? "block" : "hidden"
              )}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-md bg-accent/10 flex items-center justify-center text-accent">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>

                  {service.results && (
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {service.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-accent mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-success/20 flex items-center justify-center text-success flex-shrink-0 mt-0.5 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Client Testimonial */}
                  {service.testimonial && (
                    <div className="bg-background p-6 rounded-lg mb-6">
                      <p className="italic mb-4">{service.testimonial.text}</p>
                      <div className="flex items-center">
                        <div>
                          <div className="font-semibold">{service.testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{service.testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <Link
                    to="/contact"
                    className="btn btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                  >
                    Get Started <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                <div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section with Dropdowns */}
      <Section className="bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Get answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-accent/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-left">{faq.question}</h3>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      activeFaq === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {activeFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-secondary/50 rounded-b-lg mt-1"
                  >
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Consultation Section */}
      <Section className="bg-accent text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Book a free consultation with our experts to discuss your project and get a customized strategy.
              No obligations, just pure value.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-accent px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Schedule Your Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default ServicesPage;