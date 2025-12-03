import { motion } from 'framer-motion';

const WhyUs = () => {
  const reasons = [
    {
      icon: <span className="text-4xl">🏆</span>,
      title: 'Industry Expertise',
      description: 'Over 5 years of experience delivering successful digital solutions',
      color: 'from-blue-500/10 to-cyan-500/10',
      hoverColor: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'group-hover:border-blue-500/50'
    },
    {
      icon: <span className="text-4xl">👥</span>,
      title: 'Dedicated Team',
      description: 'Expert professionals committed to your project success',
      color: 'from-purple-500/10 to-violet-500/10',
      hoverColor: 'from-purple-500/20 to-violet-500/20',
      borderColor: 'group-hover:border-purple-500/50'
    },
    {
      icon: <span className="text-4xl">⏰</span>,
      title: 'Timely Delivery',
      description: 'We respect deadlines and deliver projects on schedule',
      color: 'from-green-500/10 to-emerald-500/10',
      hoverColor: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'group-hover:border-green-500/50'
    },
    {
      icon: <span className="text-4xl">📈</span>,
      title: 'Result Driven',
      description: 'Focus on delivering measurable business outcomes',
      color: 'from-orange-500/10 to-red-500/10',
      hoverColor: 'from-orange-500/20 to-red-500/20',
      borderColor: 'group-hover:border-orange-500/50'
    },
    {
      icon: <span className="text-4xl">🛡️</span>,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes',
      color: 'from-pink-500/10 to-rose-500/10',
      hoverColor: 'from-pink-500/20 to-rose-500/20',
      borderColor: 'group-hover:border-pink-500/50'
    },
    {
      icon: <span className="text-4xl">🤝</span>,
      title: 'Customer Support',
      description: '24/7 support and maintenance for your peace of mind',
      color: 'from-indigo-500/10 to-blue-500/10',
      hoverColor: 'from-indigo-500/20 to-blue-500/20',
      borderColor: 'group-hover:border-indigo-500/50'
    }
  ];

  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">✨</span>
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, dedication, and innovation to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 border border-border rounded-lg overflow-hidden group transition-all duration-300 bg-gradient-to-br ${reason.color} ${reason.borderColor}`}
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative">
                <div className="text-center">
                  {reason.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs; 