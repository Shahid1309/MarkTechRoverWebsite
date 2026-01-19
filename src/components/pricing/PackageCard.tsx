import { Check, X, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PackageFeature {
  name: string;
  included: boolean;
  description?: string;
}

interface PackageProps {
  name: string;
  price: number;
  description: string;
  features: PackageFeature[];
  icon: React.ReactNode;
  popular?: boolean;
  bestSeller?: boolean;
  isMonthly?: boolean;
  onAddToCart?: () => void;
}

const PackageCard: React.FC<PackageProps> = ({
  name,
  price,
  description,
  features,
  icon,
  popular,
  bestSeller,
  isMonthly,
  onAddToCart
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative bg-background rounded-xl overflow-hidden border-2 ${
        bestSeller ? 'border-accent' : popular ? 'border-accent/70' : 'border-border'
      } shadow-lg pt-8 transition-all duration-300 hover:shadow-2xl`}
    >
      {bestSeller && (
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-white px-6 py-2 rounded-b-xl text-sm font-medium flex items-center shadow-lg">
            <Star className="h-4 w-4 mr-2" />
            Best Seller
          </span>
        </div>
      )}
      {popular && !bestSeller && (
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-white px-6 py-2 rounded-b-xl text-sm font-medium shadow-lg">
            Popular Choice
          </span>
        </div>
      )}

      <div className="p-6">
        <div className="text-center">
          {icon}
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="mb-6">
            <span className="text-3xl font-bold text-accent">{formatPrice(price)}</span>
            <span className="text-muted-foreground">{isMonthly ? '/month' : '/project'}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div
                className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 ${
                  feature.included ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {feature.included ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              </div>
              <div>
                <span className="text-sm font-medium">{feature.name}</span>
                {feature.description && (
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        {onAddToCart ? (
          <button
            type="button"
            onClick={onAddToCart}
            className={`w-full py-2 px-4 rounded-full flex items-center justify-center ${
              bestSeller || popular ? 'bg-accent text-white' : 'bg-secondary text-foreground'
            } hover:opacity-90 transition-opacity`}
          >
            Add to Cart
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        ) : (
          <Link
            to="/pricing"
            className={`w-full py-2 px-4 rounded-full flex items-center justify-center ${
              bestSeller || popular ? 'bg-accent text-white' : 'bg-secondary text-foreground'
            } hover:opacity-90 transition-opacity`}
          >
            Add to Cart
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default PackageCard; 