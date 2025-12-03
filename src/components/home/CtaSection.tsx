


import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const CtaSection = () => {
  return (
    <Section className="text-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss how our tailored digital marketing strategies can help your business reach its full potential. Schedule a call with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white text-accent hover:bg-white/90 w-full sm:w-auto"
                >
                  Schedule a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link> */}

              <Link to="/contact" aria-label="Schedule a call with our team">
  <Button
    variant="primary"
    size="lg"
    className="group bg-white text-accent hover:bg-white/90 transition-all duration-300 ease-in-out w-full sm:w-auto flex items-center"
  >
    <span className="font-semibold">Schedule a Call</span>
    <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
  </Button>
</Link>


              {/* Optional Calculator Button */}
              {/* <Link to="/calculator">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Try Our Calculator
                </Button>
              </Link> */}
            </div>
          </motion.div>

          {/* Right Content (Features List) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20"
          >
            <h3 className="text-xl font-semibold mb-6 text-purple-300">Why Choose MarkTechRover?</h3>
            <ul className="space-y-5">
              {[
                'Data-driven strategies tailored to your business goals',
                'Transparent reporting and measurable results',
                'Expert team with specialized knowledge in various industries',
                'Cutting-edge tools and technologies',
                'Continuous optimization for maximum ROI',
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
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
                  <span className="text-gray-300 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default CtaSection;
