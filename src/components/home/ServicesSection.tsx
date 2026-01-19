import { motion } from 'framer-motion';
import Section from '../ui/Section';
import ServiceCard from '../ui/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: 'SEO Optimization',
      description: 'Boost your website\'s visibility in search engines with our data-driven SEO strategies that drive organic traffic.',
      icon: <span className="text-3xl">🔍</span>,
      link: '/services/seo-lead-generation/seo-services'
    },
    {
      title: 'PPC & AI Ads',
      description: 'Maximize ROAS with AI-powered PPC campaigns on Google, Meta, and other platforms to reach your target audience.',
      icon: <span className="text-3xl">📈</span>,
      link: '/services/seo-lead-generation/ppc-management'
    },
    {
      title: 'Web Development',
      description: 'Create stunning, responsive websites with modern technologies that engage visitors and drive conversions.',
      icon: <span className="text-3xl">🌐</span>,
      link: '/services/ux-interactive/website-design'
    },
    {
      title: 'Social Media',
      description: 'Build and engage your community with strategic social media marketing that increases brand awareness.',
      icon: <span className="text-3xl">💬</span>,
      link: '/services/ux-interactive/social-media-management'
    },
    {
      title: 'Email Marketing',
      description: 'Drive customer engagement and retention with personalized email campaigns that deliver results.',
      icon: <span className="text-3xl">📧</span>,
      link: '/services/revenue-marketing-cro/email-marketing-management'
    },
    {
      title: 'Content Creation',
      description: 'Develop compelling content that resonates with your audience and establishes thought leadership.',
      icon: <span className="text-3xl">✍️</span>,
      link: '/services/ux-interactive/content-marketing'
    }
  ];

  return (
    <Section className="relative overflow-hidden" id="services">
      {/* Removed background elements for transparency */}
      
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-4xl mb-4 block">⚡</span>
            <h2 className="mb-4 text-3xl font-bold text-white">Our Services</h2>
            <p className="text-gray-300 text-lg">
              We offer comprehensive digital marketing solutions to help your business grow online.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;