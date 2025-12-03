import { motion } from 'framer-motion';

const ProcessFlow = () => {
  const steps = [
    {
      icon: <span className="text-4xl">💡</span>,
      title: 'Discovery',
      description: 'Understanding your business goals and requirements',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <span className="text-4xl">🎯</span>,
      title: 'Strategy',
      description: 'Developing a customized plan for your success',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <span className="text-4xl">🎨</span>,
      title: 'Design',
      description: 'Creating engaging and effective solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <span className="text-4xl">⚙️</span>,
      title: 'Development',
      description: 'Building and implementing your solution',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <span className="text-4xl">🚀</span>,
      title: 'Launch',
      description: 'Deploying and going live with your project',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <span className="text-4xl">📊</span>,
      title: 'Growth',
      description: 'Monitoring and optimizing for continuous improvement',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
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
          <div className={`h-[200px] p-6 rounded-lg bg-gradient-to-br ${step.color} transform transition-transform duration-300 group-hover:scale-[1.02] flex flex-col justify-center`}>
            <div className="text-center text-white">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-white/90 text-sm">{step.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProcessFlow; 