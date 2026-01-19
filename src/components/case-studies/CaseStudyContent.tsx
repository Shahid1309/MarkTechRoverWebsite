import { motion } from 'framer-motion';

interface Section {
  title: string;
  content: string;
  image?: string;
  icon?: React.ReactNode;
}

interface CaseStudyContentProps {
  challenge: Section;
  solution: Section;
  approach: Section[];
  results: Section;
}

const CaseStudyContent = ({
  challenge,
  solution,
  approach,
  results
}: CaseStudyContentProps) => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {challenge.title}
            </h2>
            <div className="md:flex md:gap-8 md:items-center">
              <div className="md:w-1/2">
                <p className="text-lg text-slate-600 dark:text-gray-300">
                  {challenge.content}
                </p>
              </div>
              {challenge.image && (
                <motion.div 
                  className="md:w-1/2 mt-6 md:mt-0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <img
                    src={challenge.image}
                    alt={`${challenge.title} - Digital marketing challenge illustration`}
                    className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {solution.title}
            </h2>
            <div className="md:flex md:gap-8 md:items-center md:flex-row-reverse">
              <div className="md:w-1/2">
                <p className="text-lg text-slate-600 dark:text-gray-300">
                  {solution.content}
                </p>
              </div>
              {solution.image && (
                <motion.div 
                  className="md:w-1/2 mt-6 md:mt-0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <img
                    src={solution.image}
                    alt={`${solution.title} - Digital marketing solution implementation`}
                    className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {approach.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {step.icon && (
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      {step.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300">
                    {step.content}
                  </p>
                  {step.image && (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full mt-4 rounded-lg shadow-md"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {results.title}
            </h2>
            <div className="md:flex md:gap-8 md:items-center">
              <div className="md:w-1/2">
                <p className="text-lg text-slate-600 dark:text-gray-300">
                  {results.content}
                </p>
              </div>
              {results.image && (
                <motion.div 
                  className="md:w-1/2 mt-6 md:mt-0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <img
                    src={results.image}
                    alt={`${results.title} - Digital marketing results and metrics dashboard`}
                    className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyContent; 