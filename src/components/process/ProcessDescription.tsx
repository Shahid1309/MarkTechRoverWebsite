import { motion } from 'framer-motion';
import { Search, FileCheck, Code, Rocket, BarChart, Zap } from 'lucide-react';

const ProcessDescription = () => {
  const steps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: 'Discovery & Analysis',
      description: 'We begin by understanding your business goals, target audience, and current digital presence. Our team conducts thorough market research and competitor analysis.',
      color: 'from-blue-500/10 to-cyan-500/10',
      hoverColor: 'from-blue-500/20 to-cyan-500/20',
      iconBg: 'from-blue-500 to-cyan-500',
      borderColor: 'group-hover:border-blue-500/50'
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'Strategy Development',
      description: 'Based on our findings, we create a comprehensive strategy tailored to your needs, including timelines, deliverables, and expected outcomes.',
      color: 'from-green-500/10 to-emerald-500/10',
      hoverColor: 'from-green-500/20 to-emerald-500/20',
      iconBg: 'from-green-500 to-emerald-500',
      borderColor: 'group-hover:border-green-500/50'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Implementation',
      description: 'Our expert team executes the strategy using industry best practices and cutting-edge technologies to deliver high-quality results.',
      color: 'from-purple-500/10 to-violet-500/10',
      hoverColor: 'from-purple-500/20 to-violet-500/20',
      iconBg: 'from-purple-500 to-violet-500',
      borderColor: 'group-hover:border-purple-500/50'
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Launch & Testing',
      description: 'We thoroughly test all deliverables and ensure everything meets our quality standards before launch.',
      color: 'from-orange-500/10 to-red-500/10',
      hoverColor: 'from-orange-500/20 to-red-500/20',
      iconBg: 'from-orange-500 to-red-500',
      borderColor: 'group-hover:border-orange-500/50'
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Monitoring & Analysis',
      description: 'Post-launch, we continuously monitor performance metrics and gather data for optimization opportunities.',
      color: 'from-pink-500/10 to-rose-500/10',
      hoverColor: 'from-pink-500/20 to-rose-500/20',
      iconBg: 'from-pink-500 to-rose-500',
      borderColor: 'group-hover:border-pink-500/50'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Optimization',
      description: 'Using collected data and insights, we make ongoing improvements to maximize performance and ROI.',
      color: 'from-indigo-500/10 to-blue-500/10',
      hoverColor: 'from-indigo-500/20 to-blue-500/20',
      iconBg: 'from-indigo-500 to-blue-500',
      borderColor: 'group-hover:border-indigo-500/50'
    }
  ];

  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We follow a systematic approach to ensure the success of your digital projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 border border-border rounded-lg overflow-hidden group transition-all duration-300 bg-gradient-to-br ${step.color} ${step.borderColor}`}
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative">
                <div className={`h-12 w-12 rounded-lg text-white flex items-center justify-center mb-4 bg-gradient-to-br ${step.iconBg}`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessDescription; 