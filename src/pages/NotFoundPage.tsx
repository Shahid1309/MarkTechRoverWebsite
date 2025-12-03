import { Link } from 'react-router-dom';
import AnimatedElement from '../components/ui/AnimatedElement';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black">
      <AnimatedElement animation="fadeInUp" className="text-center px-4">
        <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-400">404</h1>
        <h2 className="text-3xl font-semibold text-gray-400 dark:text-gray-200 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-300 dark:text-gray-400 mt-2 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-200"
        >
          Go Back Home
        </Link>
      </AnimatedElement>
    </div>
  );
};

export default NotFoundPage; 