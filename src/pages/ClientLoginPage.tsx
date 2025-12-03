import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles, Target, TrendingUp, Palette, Cpu, CheckCircle, Star } from 'lucide-react';
import { auth } from '../services/api';
import { useAuth } from '../context/AuthContext';
import Logo from '../assets/Main.png';

const ClientLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { authState, setAuthState } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentQuote, setCurrentQuote] = useState(0);

  // Wise words for the right side
  const wiseWords = [
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    }
  ];

  // Rotate quotes every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % wiseWords.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Check if user is already authenticated
  useEffect(() => {
    if (authState.isAuthenticated && authState.user) {
      if (authState.user.role === 'client') {
        navigate('/client-dashboard');
      } else {
        navigate('/admin-dashboard', { replace: true });
      }
    }
  }, [authState, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Try to login with the provided credentials
      // First try as client, then as admin if that fails
      let response;
      try {
        response = await auth.login(formData.email, formData.password, 'client');
      } catch (clientError) {
        // If client login fails, try admin login
        try {
          response = await auth.login(formData.email, formData.password, 'admin');
        } catch (adminError) {
          // Both failed, throw the last error
          throw adminError;
        }
      }
      
      setAuthState({
        isAuthenticated: true,
        token: response.token,
        user: response.user
      });

      // Redirect based on role
      if (response.user.role === 'client') {
        navigate('/client-dashboard');
      } else {
        navigate('/admin-dashboard', { replace: true });
      }
    } catch (error: any) {
      console.error('Login error:', error);
      setError(error.response?.data?.error || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center pt-20 pb-8 px-8 bg-gradient-to-br from-black via-slate-900 via-purple-950 to-purple-900">
        <div className="w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={Logo} alt="MarkTechRover" className="h-16 w-auto mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-purple-200">Sign in to your dashboard</p>
            </motion.div>
          </div>

          {/* Login Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-purple-200 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 text-red-300 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-purple-900/30 border border-purple-500/30 rounded-lg">
              <h3 className="text-sm font-semibold text-purple-200 mb-2">Demo Credentials:</h3>
              <div className="space-y-1 text-xs text-purple-300">
                <p><strong>Client:</strong> client@marktechrover.com / client123</p>
                <p><strong>Admin:</strong> admin@marktechrover.com / admin123</p>
                <p className="text-purple-400 mt-2">💡 Both client and admin users can login here!</p>
              </div>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Right Side - Animated Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-4 h-4 bg-purple-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full opacity-50"
          />
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 left-32 w-2 h-2 bg-emerald-400 rounded-full opacity-70"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-12 w-full">
          {/* Wise Words */}
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Sparkles className="h-12 w-12 mx-auto mb-6 text-purple-300" />
            <blockquote className="text-2xl font-light text-white mb-4 leading-relaxed">
              "{wiseWords[currentQuote].text}"
            </blockquote>
            <cite className="text-purple-300 text-lg">— {wiseWords[currentQuote].author}</cite>
          </motion.div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Target className="h-8 w-8 mx-auto mb-3 text-purple-300" />
              <h3 className="text-white font-semibold mb-2">Strategic Planning</h3>
              <p className="text-purple-200 text-sm">Data-driven marketing strategies</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-purple-300" />
              <h3 className="text-white font-semibold mb-2">Growth Focused</h3>
              <p className="text-purple-200 text-sm">Scalable business solutions</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <Palette className="h-8 w-8 mx-auto mb-3 text-purple-300" />
              <h3 className="text-white font-semibold mb-2">Creative Excellence</h3>
              <p className="text-purple-200 text-sm">Innovative design solutions</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <Cpu className="h-8 w-8 mx-auto mb-3 text-purple-300" />
              <h3 className="text-white font-semibold mb-2">Tech Innovation</h3>
              <p className="text-purple-200 text-sm">Cutting-edge technology</p>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center justify-center space-x-6"
          >
            <div className="flex items-center text-purple-300">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="text-sm">500+ Projects</span>
            </div>
            <div className="flex items-center text-purple-300">
              <Star className="h-5 w-5 mr-2" />
              <span className="text-sm">98% Success Rate</span>
            </div>
            <div className="flex items-center text-purple-300">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientLoginPage; 