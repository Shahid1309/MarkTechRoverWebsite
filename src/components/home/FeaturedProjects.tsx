import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'iDesign.market Platform',
      description: 'Complete platform transformation with 187% growth in organic traffic and enhanced user engagement.',
      imageName: 'idesign',
      category: 'Development & SEO',
      link: '/case-studies/idesign',
    },
    {
      title: 'Dentinics SEO Growth',
      description: 'Comprehensive SEO optimization leading to 312% increase in organic traffic and improved patient acquisition.',
      imageName: 'dental1',
      category: 'Healthcare',
      link: '/case-studies/dentinics',
    },
    {
      title: 'Chumbak E-commerce',
      description: 'Scalable e-commerce platform development resulting in 245% revenue growth and enhanced mobile experience.',
      imageName: 'Chumbak',
      category: 'E-commerce',
      link: '/case-studies/chumbak',
    }
  ];

  return (
    <Section className="relative overflow-hidden" id="featured-projects">
      {/* Removed background elements for transparency */}

      <div className="container relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4 sm:gap-0">
          <div className="max-w-2xl mb-4 sm:mb-6 md:mb-0 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              Featured Case Studies
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Explore how we've helped businesses achieve exceptional results through innovative solutions and strategic implementation.
            </p>
          </div>
          <Link to="/portfolio" className="flex-shrink-0">
            <Button variant="ghost" size="sm" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageName={project.imageName}
                category={project.category}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProjects;