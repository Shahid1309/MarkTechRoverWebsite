import { motion } from 'framer-motion';

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  category: string;
  services: string[];
  duration: string;
  heroImage: string;
}

const CaseStudyHero = ({
  title,
  subtitle,
  category,
  services,
  duration,
  heroImage
}: CaseStudyHeroProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 pt-32 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-700/[0.05] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-slate-900/20" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full"
                >
                  {category}
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                >
                  {title}
                </motion.h1>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                {subtitle}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-8 pt-4"
              >
                <div>
                  <p className="text-sm font-medium text-slate-400 mb-2">Services</p>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className="px-3 py-1.5 text-sm bg-slate-800/80 text-gray-300 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 transition-colors"
                      >
                        {service}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400 mb-2">Duration</p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="text-gray-300 bg-slate-800/80 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-slate-700/50"
                  >
                    {duration}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/20 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-slate-700/20" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHero; 