import { motion } from 'framer-motion';

interface Metric {
  value: string;
  label: string;
  description: string;
}

interface CaseStudyMetricsProps {
  metrics: Metric[];
}

const CaseStudyMetrics = ({ metrics }: CaseStudyMetricsProps) => {
  return (
    <div className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative p-8 bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent dark:from-primary/[0.02] rounded-2xl" />
              <div className="relative space-y-4">
                <motion.p 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                >
                  {metric.value}
                </motion.p>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="text-xl font-semibold text-slate-900 dark:text-white"
                >
                  {metric.label}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="text-slate-600 dark:text-gray-300 leading-relaxed"
                >
                  {metric.description}
                </motion.p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent dark:via-primary/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyMetrics; 