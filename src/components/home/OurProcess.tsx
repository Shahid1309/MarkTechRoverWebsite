import { motion } from 'framer-motion';
import { Search, BarChart, Rocket, Target, Settings, CheckCircle } from 'lucide-react';
import Section from '../ui/Section';

const OurProcess = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Discovery & Research',
      description: 'Deep analysis of your business needs, market research, and competitor analysis to create a solid foundation for your digital strategy.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Strategic Planning',
      description: 'Developing comprehensive, data-driven strategies tailored to your goals, target audience, and industry requirements.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Implementation',
      description: 'Expert execution of your digital strategy using cutting-edge tools, technologies, and industry best practices.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: 'Performance Tracking',
      description: 'Continuous monitoring of key metrics, analytics, and performance indicators to measure campaign effectiveness.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Optimization',
      description: 'Data-driven refinements and improvements to maximize ROI and achieve better results across all channels.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Growth & Scaling',
      description: 'Expanding successful strategies and exploring new opportunities to drive sustainable business growth.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <Section>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A systematic approach to digital excellence, ensuring measurable results and continuous growth for your business.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group h-full"
              >
                <div className={`h-[220px] p-6 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-80 backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-[1.02] flex flex-col justify-center border border-white/20`}>
                  <div className="text-center text-white">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurProcess;