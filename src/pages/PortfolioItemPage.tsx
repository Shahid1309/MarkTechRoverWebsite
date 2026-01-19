import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects, getImageUrl } from '../utils/portfolioData';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';

const PortfolioItemPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the project by ID
  const project = projects.find(p => p.id === id);
  
  // If project not found, redirect to portfolio page
  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background dark:bg-slate-950"
    >
      <Section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          
          {/* Project Header */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 capitalize">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description}
              </p>
            </motion.div>
            
            {/* Project Image */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={getImageUrl(project.imageName)}
                alt={project.title}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </motion.div>
            
            {/* Project Details */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <h2 className="text-2xl font-bold mb-6 text-foreground">Project Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Services Provided</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-muted-foreground mb-4">
                  Interested in similar results for your business?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/25"
                >
                  Get Started
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            {/* Navigation to other projects */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
              >
                View All Portfolio Projects
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default PortfolioItemPage;

