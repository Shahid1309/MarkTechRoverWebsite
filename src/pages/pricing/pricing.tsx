import { motion } from 'framer-motion';
import {
  Smartphone,
  LineChart,
  Megaphone,
  Code,
  Video,
  Target,
  Layers,
  Calendar,
  ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PackageCard from '@/components/pricing/PackageCard';
import ProcessDescription from '@/components/process/ProcessDescription';
import Section from '@/components/ui/Section';
import WhyUs from '@/components/about/WhyUs';
import { useCart } from '@/context/CartContext';

const PricingPage = () => {
  const { addItem, itemCount } = useCart();
  const packageCategories = [
    {
      title: 'SEO Services',
      description: 'Boost your online visibility and organic traffic',
      packages: [
        {
          name: 'SEO Starter',
          price: 2999,
          description: 'Essential SEO package for small businesses',
          icon: <LineChart className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Keyword Research', included: true, description: '10 target keywords' },
            { name: 'On-Page SEO', included: true, description: 'Basic optimization' },
            { name: 'Monthly Reports', included: true },
            { name: 'Content Optimization', included: true, description: '2 pages per month' },
            { name: 'Technical SEO', included: false },
            { name: 'Link Building', included: false },
            { name: 'Local SEO', included: false }
          ],
          isMonthly: true
        },
        {
          name: 'SEO Professional',
          price: 5999,
          description: 'Comprehensive SEO solution',
          icon: <LineChart className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Keyword Research', included: true, description: '25 target keywords' },
            { name: 'On-Page SEO', included: true, description: 'Advanced optimization' },
            { name: 'Monthly Reports', included: true },
            { name: 'Content Optimization', included: true, description: '5 pages per month' },
            { name: 'Technical SEO', included: true },
            { name: 'Link Building', included: true, description: '10 quality backlinks' },
            { name: 'Local SEO', included: true }
          ],
          isMonthly: true,
          popular: true
        },
        {
          name: 'SEO Enterprise',
          price: 9999,
          description: 'Advanced SEO for large businesses',
          icon: <LineChart className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Keyword Research', included: true, description: 'Unlimited keywords' },
            { name: 'On-Page SEO', included: true, description: 'Premium optimization' },
            { name: 'Monthly Reports', included: true },
            { name: 'Content Optimization', included: true, description: '10 pages per month' },
            { name: 'Technical SEO', included: true },
            { name: 'Link Building', included: true, description: '25 quality backlinks' },
            { name: 'Local SEO', included: true },
            { name: 'International SEO', included: true }
          ],
          isMonthly: true
        }
      ]
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand presence',
      packages: [
        {
          name: 'Social Starter',
          price: 3999,
          description: 'Basic social media management',
          icon: <Megaphone className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Platform Management', included: true, description: '2 platforms' },
            { name: 'Content Creation', included: true, description: '12 posts per month' },
            { name: 'Community Management', included: true },
            { name: 'Monthly Reports', included: true },
            { name: 'Paid Advertising', included: false },
            { name: 'Influencer Marketing', included: false }
          ],
          isMonthly: true
        },
        {
          name: 'Social Pro',
          price: 7999,
          description: 'Complete social media solution',
          icon: <Megaphone className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Platform Management', included: true, description: '4 platforms' },
            { name: 'Content Creation', included: true, description: '24 posts per month' },
            { name: 'Community Management', included: true },
            { name: 'Monthly Reports', included: true },
            { name: 'Paid Advertising', included: true },
            { name: 'Influencer Marketing', included: true },
            { name: 'Story Creation', included: true }
          ],
          isMonthly: true,
          popular: true
        },
        {
          name: 'Social Enterprise',
          price: 14999,
          description: 'Premium social media management',
          icon: <Megaphone className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Platform Management', included: true, description: 'All platforms' },
            { name: 'Content Creation', included: true, description: '40 posts per month' },
            { name: 'Community Management', included: true },
            { name: 'Monthly Reports', included: true },
            { name: 'Paid Advertising', included: true },
            { name: 'Influencer Marketing', included: true },
            { name: 'Story Creation', included: true },
            { name: 'Video Content', included: true }
          ],
          isMonthly: true
        }
      ]
    },
    {
      title: 'Website Development',
      description: 'Create a powerful online presence',
      packages: [
        {
          name: 'Basic Website',
          price: 29999,
          description: 'Perfect for small businesses',
          icon: <Code className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Custom Design', included: true, description: '5 pages' },
            { name: 'Mobile Responsive', included: true },
            { name: 'Contact Form', included: true },
            { name: 'SEO Setup', included: true },
            { name: 'CMS Integration', included: false },
            { name: 'E-commerce', included: false }
          ]
        },
        {
          name: 'Professional Website',
          price: 59999,
          description: 'Advanced website solution',
          icon: <Code className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Custom Design', included: true, description: '10 pages' },
            { name: 'Mobile Responsive', included: true },
            { name: 'Contact Form', included: true },
            { name: 'SEO Setup', included: true },
            { name: 'CMS Integration', included: true },
            { name: 'E-commerce', included: true },
            { name: 'Custom Features', included: true }
          ],
          bestSeller: true
        },
        {
          name: 'Enterprise Website',
          price: 149999,
          description: 'Full-featured business solution',
          icon: <Code className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Custom Design', included: true, description: 'Unlimited pages' },
            { name: 'Mobile Responsive', included: true },
            { name: 'Contact Form', included: true },
            { name: 'SEO Setup', included: true },
            { name: 'CMS Integration', included: true },
            { name: 'E-commerce', included: true },
            { name: 'Custom Features', included: true },
            { name: 'API Integration', included: true }
          ]
        }
      ]
    },
    {
      title: 'App Development',
      description: 'Build powerful mobile applications',
      packages: [
        {
          name: 'Basic App',
          price: 99999,
          description: 'Simple mobile app solution',
          icon: <Smartphone className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Native Development', included: true },
            { name: 'Basic Features', included: true },
            { name: 'User Authentication', included: true },
            { name: 'Push Notifications', included: true },
            { name: 'API Integration', included: false },
            { name: 'Admin Dashboard', included: false }
          ]
        },
        {
          name: 'Professional App',
          price: 199999,
          description: 'Feature-rich mobile app',
          icon: <Smartphone className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Native Development', included: true },
            { name: 'Advanced Features', included: true },
            { name: 'User Authentication', included: true },
            { name: 'Push Notifications', included: true },
            { name: 'API Integration', included: true },
            { name: 'Admin Dashboard', included: true },
            { name: 'Analytics', included: true }
          ],
          popular: true
        },
        {
          name: 'Enterprise App',
          price: 499999,
          description: 'Full-scale enterprise solution',
          icon: <Smartphone className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Native Development', included: true },
            { name: 'Custom Features', included: true },
            { name: 'User Authentication', included: true },
            { name: 'Push Notifications', included: true },
            { name: 'API Integration', included: true },
            { name: 'Admin Dashboard', included: true },
            { name: 'Analytics', included: true },
            { name: 'Scalability', included: true }
          ]
        }
      ]
    },
    {
      title: 'Video Production',
      description: 'Create engaging video content',
      packages: [
        {
          name: 'Basic Video',
          price: 24999,
          description: 'Simple video production',
          icon: <Video className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Video Shooting', included: true, description: '1 day shoot' },
            { name: 'Basic Editing', included: true },
            { name: 'Music', included: true },
            { name: 'Color Correction', included: true },
            { name: 'Animation', included: false },
            { name: 'Drone Shots', included: false }
          ]
        },
        {
          name: 'Professional Video',
          price: 49999,
          description: 'Advanced video production',
          icon: <Video className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Video Shooting', included: true, description: '2 day shoot' },
            { name: 'Advanced Editing', included: true },
            { name: 'Music', included: true },
            { name: 'Color Grading', included: true },
            { name: 'Animation', included: true },
            { name: 'Drone Shots', included: true }
          ],
          popular: true
        },
        {
          name: 'Premium Video',
          price: 99999,
          description: 'Premium video production',
          icon: <Video className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Video Shooting', included: true, description: '3+ day shoot' },
            { name: 'Premium Editing', included: true },
            { name: 'Custom Music', included: true },
            { name: 'Color Grading', included: true },
            { name: 'Animation', included: true },
            { name: 'Drone Shots', included: true },
            { name: '4K Quality', included: true }
          ]
        }
      ]
    },
    {
      title: 'PPC & Paid Advertising',
      description: 'Drive targeted traffic and leads',
      packages: [
        {
          name: 'PPC Starter',
          price: 4999,
          description: 'Basic PPC management',
          icon: <Target className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Campaign Setup', included: true },
            { name: 'Keyword Research', included: true },
            { name: 'Ad Creation', included: true },
            { name: 'Monthly Reports', included: true },
            { name: 'A/B Testing', included: false },
            { name: 'Landing Pages', included: false }
          ],
          isMonthly: true
        },
        {
          name: 'PPC Professional',
          price: 9999,
          description: 'Advanced PPC management',
          icon: <Target className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Campaign Setup', included: true },
            { name: 'Keyword Research', included: true },
            { name: 'Ad Creation', included: true },
            { name: 'Monthly Reports', included: true },
            { name: 'A/B Testing', included: true },
            { name: 'Landing Pages', included: true },
            { name: 'Remarketing', included: true }
          ],
          isMonthly: true,
          popular: true
        },
        {
          name: 'PPC Enterprise',
          price: 19999,
          description: 'Full-service PPC solution',
          icon: <Target className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'Campaign Setup', included: true },
            { name: 'Keyword Research', included: true },
            { name: 'Ad Creation', included: true },
            { name: 'Monthly Reports', included: true },
            { name: 'A/B Testing', included: true },
            { name: 'Landing Pages', included: true },
            { name: 'Remarketing', included: true },
            { name: 'Custom Strategy', included: true }
          ],
          isMonthly: true
        }
      ]
    },
    {
      title: 'Complete Digital Solutions',
      description: 'All-in-one digital marketing packages',
      packages: [
        {
          name: 'Growth Starter',
          price: 14999,
          description: 'Essential digital marketing',
          icon: <Layers className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'SEO Basic', included: true },
            { name: 'Social Media Basic', included: true },
            { name: 'Content Creation', included: true },
            { name: 'Email Marketing', included: true },
            { name: 'PPC Management', included: false },
            { name: 'Website Maintenance', included: false }
          ],
          isMonthly: true
        },
        {
          name: 'Growth Pro',
          price: 29999,
          description: 'Complete digital solution',
          icon: <Layers className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'SEO Advanced', included: true },
            { name: 'Social Media Pro', included: true },
            { name: 'Content Creation', included: true },
            { name: 'Email Marketing', included: true },
            { name: 'PPC Management', included: true },
            { name: 'Website Maintenance', included: true },
            { name: 'Analytics & Reports', included: true }
          ],
          isMonthly: true,
          bestSeller: true
        },
        {
          name: 'Growth Enterprise',
          price: 49999,
          description: 'Premium digital solution',
          icon: <Layers className="h-8 w-8 mb-4 text-accent" />,
          features: [
            { name: 'SEO Premium', included: true },
            { name: 'Social Media Premium', included: true },
            { name: 'Content Creation', included: true },
            { name: 'Email Marketing', included: true },
            { name: 'PPC Management', included: true },
            { name: 'Website Maintenance', included: true },
            { name: 'Analytics & Reports', included: true },
            { name: 'Strategy Consulting', included: true }
          ],
          isMonthly: true
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-background text-foreground">
        <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/60 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Your plan builder</p>
              <h2 className="text-lg font-semibold">Curate services and add them to your cart</h2>
            </div>
            <Link
              to="/cart"
              className="inline-flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-accent text-white hover:opacity-90 transition text-sm sm:text-base"
            >
              <ShoppingCart className="h-5 w-5 sm:h-5 sm:w-5" />
              <span className="leading-none">Cart</span>
              {itemCount > 0 && (
                <span className="bg-white/15 px-2 py-0.5 rounded-full text-[11px] sm:text-sm font-semibold leading-none">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
        <Section className="pt-10 lg:pt-16 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Digital Marketing Pricing India</h1>
              <p className="text-xl text-muted-foreground">
                Transform your online presence with our comprehensive digital marketing solutions.
                Choose the perfect package tailored to your business goals.
              </p>
            </div>

            {packageCategories.map((category, index) => (
              <div key={index} className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                  <p className="text-xl text-muted-foreground">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.packages.map((pkg, pkgIndex) => (
                    <PackageCard
                      key={pkgIndex}
                      {...pkg}
                      onAddToCart={() =>
                        addItem({
                          name: pkg.name,
                          price: pkg.price,
                          description: pkg.description,
                          category: category.title,
                        })
                      }
                    />
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-20 max-w-4xl mx-auto bg-accent/10 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-accent mr-2" />
                <h2 className="text-2xl font-bold">Free Digital Marketing Consultation</h2>
              </div>
              <p className="text-lg mb-6">
                Not sure which package is right for you? Schedule a free 30-minute consultation with our digital marketing experts.
                We'll analyze your business needs and recommend the perfect solution.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-accent text-white rounded-full hover:opacity-90 transition-opacity"
              >
                Book Your Free Consultation
              </Link>
            </div>

            <div className="mt-20">
              <ProcessDescription />
            </div>

            <div className="mt-20">
              <WhyUs />
            </div>
          </div>
        </Section>
      </div>
    </motion.div>
  );
};

export default PricingPage;