import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HomePortfolioPage from './HomePortfolioPage';
import Section from '../components/ui/Section';
import { ArrowRight, Star, Users, Globe, Zap, Target, Trophy, Palette, BarChart3 } from 'lucide-react';
import FloatingMenu from '../components/ui/FloatingMenu';

const PortfolioPage = () => {
  const navItems = [
    { id: 'hero', label: 'Portfolio', icon: <Target className="h-4 w-4" /> },
    { id: 'projects', label: 'Projects', icon: <Trophy className="h-4 w-4" /> },
    { id: 'process', label: 'Process', icon: <Palette className="h-4 w-4" /> },
    { id: 'achievements', label: 'Achievements', icon: <BarChart3 className="h-4 w-4" /> }
  ];

  const stats = [
    { number: '250+', label: 'Projects Completed', emoji: '🏆', icon: <Star className="w-5 h-5" /> },
    { number: '180+', label: 'Happy Clients', emoji: '😊', icon: <Users className="w-5 h-5" /> },
    { number: '15+', label: 'Industries Served', emoji: '🌎', icon: <Globe className="w-5 h-5" /> },
    { number: '98%', label: 'Client Satisfaction', emoji: '⭐', icon: <Zap className="w-5 h-5" /> }
  ];

  const processSteps = [
    {
      emoji: '💡',
      title: 'Discovery',
      description: 'We dive deep into understanding your business goals and target audience.'
    },
    {
      emoji: '🎯',
      title: 'Strategy',
      description: 'Develop a tailored plan to achieve your specific objectives.'
    },
    {
      emoji: '⚡',
      title: 'Development',
      description: 'Transform ideas into reality with cutting-edge technology.'
    },
    {
      emoji: '🚀',
      title: 'Launch',
      description: 'Deploy your solution and ensure everything runs smoothly.'
    }
  ];

  const achievements = [
    { text: 'Increased client conversion rates by 150%', emoji: '📈' },
    { text: 'Reduced loading times by 60%', emoji: '⚡' },
    { text: 'Improved user engagement by 200%', emoji: '❤️' },
    { text: 'Enhanced SEO rankings for 90% of clients', emoji: '🎯' },
    { text: 'Decreased bounce rates by 45%', emoji: '👍' },
    { text: 'Boosted mobile traffic by 180%', emoji: '📱' }
  ];

  const expertise = [
    { title: 'Creative Design', emoji: '🎨' },
    { title: 'Fast Development', emoji: '⚡' },
    { title: 'SEO Optimization', emoji: '📈' },
    { title: '24/7 Support', emoji: '💬' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-background dark:bg-slate-950"
    >
      {/* Floating Menu */}
      <FloatingMenu navItems={navItems} heroHeight={600} />
      {/* Combined Hero & Stats Section */}
      <div id="hero">
        <Section className="relative overflow-hidden pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Expertise Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm text-accent hover:bg-accent/20 transition-colors duration-300"
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="font-medium">{item.title}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Digital Marketing Results and Case Studies
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how we've helped businesses transform their digital presence and achieve exceptional results through innovative solutions and strategic thinking.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/25 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-accent/10 hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-bold text-accent">{stat.number}</span>
                  </div>
                  <p className="text-muted-foreground font-medium text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>
      </div>

      {/* Main Portfolio Section */}
      <div id="projects">
      <HomePortfolioPage />
      </div>

      {/* Our Process Section */}
      <div id="process">
      <Section className="bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container relative">
          <div className="text-center mb-16">
            <span className="text-4xl mb-4 block">🎯</span>
            <h2 className="text-3xl font-bold mb-4 text-white dark:text-white">Our Development Process</h2>
            <p className="text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project's success from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="relative p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-center mb-4">
                  <span className="text-4xl">{step.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white dark:text-white group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 dark:text-gray-300">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <span className="text-2xl">➡️</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      </div>

      {/* Achievements Section */}
      <div id="achievements">
      <Section className="bg-gradient-to-br from-black via-purple-900 to-black relative overflow-hidden">
        <div className="container relative">
          <div className="text-center mb-16">
            <span className="text-4xl mb-4 block">🏆</span>
            <h2 className="text-3xl font-bold mb-4 text-white dark:text-white">Key Achievements</h2>
            <p className="text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
              Real results that have made a significant impact for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-6 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg group hover:scale-105 transition-transform duration-300"
              >
                <span className="text-3xl flex-shrink-0">{achievement.emoji}</span>
                <span className="text-lg text-gray-400 dark:text-gray-200 group-hover:text-primary transition-colors">
                  {achievement.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      </div>

      {/* CTA Section */}
      <Section className="bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-4xl mb-6 block">🚀</span>
            <h2 className="text-3xl font-bold mb-6 text-white dark:text-white">Ready to Transform Your Digital Presence?</h2>
            <p className="text-gray-300 dark:text-gray-300 mb-8">
              Let's discuss how we can help your business achieve exceptional results with our proven strategies.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 rounded-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Your Project
              <span className="ml-2 text-xl group-hover:translate-x-1 transition-transform">➡️</span>
            </Link>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default PortfolioPage;