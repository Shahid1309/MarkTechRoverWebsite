import { motion } from 'framer-motion';
import Section from '../ui/Section';

// Import dummy client logos
const dummyLogos = Array.from({ length: 20 }, (_, i) => ({
  name: `Company ${i + 1}`,
  logo: `/ClientLogos/company${i + 1}.png`
}));

const ClientsSection = () => {
  const clients = dummyLogos;

  return (
    <Section>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white dark:text-white mb-4">
              Our Trusted Clients
            </h2>
            <p className="text-gray-300 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Empowering businesses across industries with innovative digital solutions
            </p>
          </motion.div>
        </div>

        <div className="relative overflow-hidden py-10">
          {/* First row - moving left */}
          <div className="flex animate-scroll-left">
            {[...clients.slice(0, 10), ...clients.slice(0, 10)].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-none mx-8 w-[150px] h-[80px] client-logo"
              >
                <picture>
                  <source srcSet={client.logo.replace('.png', '.webp')} type="image/webp" />
                <motion.img
                  src={client.logo}
                  alt={client.name}
                  title={client.name}
                  className="w-full h-full object-contain"
                    width={200}
                    height={100}
                    loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                </picture>
              </div>
            ))}
          </div>

          {/* Second row - moving right */}
          <div className="flex animate-scroll-right mt-12">
            {[...clients.slice(10), ...clients.slice(10)].map((client, index) => (
              <div
                key={`${client.name}-${index}-reverse`}
                className="flex-none mx-8 w-[150px] h-[80px] client-logo"
              >
                <picture>
                  <source srcSet={client.logo.replace('.png', '.webp')} type="image/webp" />
                <motion.img
                  src={client.logo}
                  alt={client.name}
                  title={client.name}
                  className="w-full h-full object-contain"
                    width={200}
                    height={100}
                    loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ClientsSection; 