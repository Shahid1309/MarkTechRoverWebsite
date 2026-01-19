import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  TrendingUp, 
  Search, 
  BarChart3, 
  Users, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Star,
  Award,
  Clock,
  Brain,
  Code,
  Globe,
  MessageSquare,
  FileText,
  Settings,
  Monitor,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Rocket,
  Lightbulb,
  ChevronDown,
  Play,
  ExternalLink,
  Calendar,
  DollarSign,
  Percent,
  Users2,
  BarChart,
  PieChart,
  Activity,
  PenTool,
  Palette,
  Cpu,
  ShoppingCart,
  BookOpen,
  Eye,
  MousePointer,
  Layers,
  GitBranch,
  Wrench,
  AlertCircle,
  ThumbsUp,
  Heart,
  Trophy,
  Medal,
  Crown,
  Sparkles,
  Infinity,
  Lock,
  Unlock,
  RefreshCw,
  RotateCcw,
  Maximize2,
  Minimize2,
  Plus,
  Minus,
  X,
  Menu,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Slack,
  Figma,
  Chrome,
  Apple,
  Layout,
  Smartphone as MobileIcon,
  Monitor as DesktopIcon,
  Palette as DesignIcon,
  Server,
  Building2,
  Briefcase,
  Network,
  Link2,
  Workflow,
  Filter,
  Bell,
  Mail as MailIcon,
  Repeat,
  RefreshCcw as RefreshIcon,
  MousePointerClick,
  Eye as EyeIcon,
  Info,
  Book,
  GraduationCap,
  PenTool as PenToolIcon,
  Type,
  Command
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const HowToWriteAIPrompts = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<number>(0);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Rocket className="h-4 w-4" /> },
    { id: 'features', label: 'Key Principles', icon: <Zap className="h-4 w-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'types', label: 'Prompt Types', icon: <Layers className="h-4 w-4" /> },
    { id: 'implementation', label: 'Best Practices', icon: <Settings className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, []);

  // Handle scroll for sticky navigation and active section detection
  useEffect(() => {
    const sectionIds = ['overview', 'features', 'benefits', 'types', 'implementation', 'faqs'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 600;
      setIsNavSticky(scrollPosition > heroHeight);

      let currentSection = sectionIds[0];
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150;
          if (rect.top <= offset) {
            currentSection = sectionIds[i];
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const seoConfig = {
    title: 'How to Write AI Prompts | Complete Guide to AI Prompt Writing | MarkTechRover',
    description: 'Learn how to write effective AI prompts that get better results. Complete guide to AI prompt engineering, best practices, techniques, and examples. Best AI prompt writing guide in Delhi NCR & India.',
    keywords: [
      'How to Write AI Prompts', 'AI Prompt Writing', 'Prompt Engineering', 'AI Prompts Guide',
      'Writing AI Prompts', 'AI Prompt Best Practices', 'Prompt Engineering Techniques', 'AI Prompt Examples',
      'AI Prompts India', 'Prompt Writing Delhi', 'Best AI Prompt Guide', 'ChatGPT Prompts',
      'AI Prompt Optimization', 'Effective AI Prompts', 'AI Prompt Writing Tips'
    ],
    url: '/services/ai-technology/how-to-write-ai-prompts',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'MarkTechRover',
    section: 'AI & Technology',
    tags: ['AI Prompts', 'Prompt Engineering', 'AI Guide', 'AI Writing'],
    image: '/images/how-to-write-ai-prompts.webp'
  };

  const keyPrinciples = [
    {
      id: 1,
      title: 'Be Specific and Clear',
      description: 'Provide clear, specific instructions to get the exact output you need',
      icon: <Target className="h-8 w-8" />,
      features: [
        'Use specific language and terms',
        'Define the desired output format',
        'Specify length, tone, and style',
        'Include relevant context',
        'Avoid vague or ambiguous terms',
        'Provide concrete examples'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-400/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300'
    },
    {
      id: 2,
      title: 'Provide Context',
      description: 'Give AI enough context to understand the task and generate relevant responses',
      icon: <Info className="h-8 w-8" />,
      features: [
        'Explain the background',
        'Define the target audience',
        'Specify the purpose',
        'Include relevant information',
        'Set the scenario',
        'Provide necessary details'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-400/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-300'
    },
    {
      id: 3,
      title: 'Use Examples',
      description: 'Include examples to show AI the desired format, style, or structure',
      icon: <FileText className="h-8 w-8" />,
      features: [
        'Show desired output format',
        'Provide style examples',
        'Demonstrate structure',
        'Include sample responses',
        'Show tone and voice',
        'Illustrate complexity level'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-400/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300'
    },
    {
      id: 4,
      title: 'Set Constraints',
      description: 'Define constraints and limitations to guide AI output',
      icon: <Lock className="h-8 w-8" />,
      features: [
        'Specify word or character limits',
        'Define format requirements',
        'Set style guidelines',
        'Include do\'s and don\'ts',
        'Specify tone requirements',
        'Define quality standards'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-500/10 to-rose-400/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-300'
    },
    {
      id: 5,
      title: 'Iterate and Refine',
      description: 'Refine prompts through iteration to improve results',
      icon: <RefreshCw className="h-8 w-8" />,
      features: [
        'Test different phrasings',
        'Adjust specificity',
        'Add or remove details',
        'Modify tone and style',
        'Experiment with structure',
        'Learn from outputs'
      ],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-500/10 to-amber-400/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-300'
    },
    {
      id: 6,
      title: 'Use Role-Playing',
      description: 'Assign roles to AI to get specialized, expert-level responses',
      icon: <Users className="h-8 w-8" />,
      features: [
        'Define AI\'s role or expertise',
        'Specify perspective',
        'Set professional level',
        'Assign character traits',
        'Define knowledge domain',
        'Specify communication style'
      ],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-500/10 to-violet-400/10',
      borderColor: 'border-violet-500/20',
      textColor: 'text-violet-300'
    }
  ];

  const benefits = [
    {
      title: 'Better AI Output Quality',
      description: 'Get higher quality, more relevant responses from AI systems',
      icon: <Star className="h-8 w-8" />,
      metric: '85%',
      label: 'Quality Improvement'
    },
    {
      title: 'Time Savings',
      description: 'Reduce time spent on revisions and iterations',
      icon: <Clock className="h-8 w-8" />,
      metric: '70%',
      label: 'Time Saved'
    },
    {
      title: 'More Accurate Results',
      description: 'Achieve more accurate and relevant AI-generated content',
      icon: <Target className="h-8 w-8" />,
      metric: '78%',
      label: 'Accuracy Increase'
    },
    {
      title: 'Enhanced Productivity',
      description: 'Increase productivity by getting better results faster',
      icon: <Zap className="h-8 w-8" />,
      metric: '65%',
      label: 'Productivity Boost'
    }
  ];

  const promptTypes = [
    {
      type: 'Instructional Prompts',
      description: 'Direct instructions that tell AI exactly what to do',
      icon: <Command className="h-8 w-8" />,
      examples: [
        'Write a 500-word blog post about digital marketing',
        'Create a marketing plan for a new product launch',
        'Generate 10 social media post ideas',
        'Summarize this article in 3 bullet points',
        'Translate this text to Spanish',
        'Format this data as a table'
      ],
      bestFor: 'Simple, straightforward tasks'
    },
    {
      type: 'Creative Prompts',
      description: 'Prompts that encourage creative and original output',
      icon: <Lightbulb className="h-8 w-8" />,
      examples: [
        'Write a creative story about a time traveler',
        'Design a logo concept for a tech startup',
        'Create a catchy tagline for a product',
        'Generate creative marketing campaign ideas',
        'Write a poem about innovation',
        'Brainstorm unique product names'
      ],
      bestFor: 'Creative content generation'
    },
    {
      type: 'Analytical Prompts',
      description: 'Prompts that require analysis, comparison, or evaluation',
      icon: <BarChart className="h-8 w-8" />,
      examples: [
        'Analyze the pros and cons of remote work',
        'Compare two marketing strategies',
        'Evaluate the effectiveness of this campaign',
        'Identify trends in this data',
        'Break down this complex topic',
        'Assess the risks and benefits'
      ],
      bestFor: 'Analysis and evaluation tasks'
    },
    {
      type: 'Conversational Prompts',
      description: 'Prompts that engage AI in a dialogue or conversation',
      icon: <MessageSquare className="h-8 w-8" />,
      examples: [
        'Act as a marketing consultant and advise me',
        'Help me understand this concept',
        'Explain this like I\'m a beginner',
        'Have a conversation about industry trends',
        'Guide me through this process',
        'Answer my questions about this topic'
      ],
      bestFor: 'Interactive learning and guidance'
    }
  ];

  const bestPractices = [
    {
      step: '01',
      title: 'Start with Clear Intent',
      description: 'Define what you want to achieve with your prompt',
      icon: <Target className="h-6 w-6" />,
      details: [
        'Identify your goal',
        'Define success criteria',
        'Consider the output format',
        'Plan the prompt structure'
      ]
    },
    {
      step: '02',
      title: 'Structure Your Prompt',
      description: 'Organize your prompt with clear sections and logical flow',
      icon: <Layers className="h-6 w-6" />,
      details: [
        'Use clear headings',
        'Separate instructions',
        'Organize information logically',
        'Use formatting for clarity'
      ]
    },
    {
      step: '03',
      title: 'Add Context and Examples',
      description: 'Provide relevant context and examples to guide AI',
      icon: <FileText className="h-6 w-6" />,
      details: [
        'Include background information',
        'Provide relevant examples',
        'Show desired format',
        'Set expectations'
      ]
    },
    {
      step: '04',
      title: 'Specify Requirements',
      description: 'Clearly state all requirements and constraints',
      icon: <Settings className="h-6 w-6" />,
      details: [
        'Define length limits',
        'Specify style and tone',
        'Set quality standards',
        'Include do\'s and don\'ts'
      ]
    },
    {
      step: '05',
      title: 'Test and Iterate',
      description: 'Test your prompt and refine based on results',
      icon: <RefreshCw className="h-6 w-6" />,
      details: [
        'Test with sample inputs',
        'Evaluate outputs',
        'Identify improvements',
        'Refine and optimize'
      ]
    },
    {
      step: '06',
      title: 'Document and Share',
      description: 'Document successful prompts for future use',
      icon: <Book className="h-6 w-6" />,
      details: [
        'Save effective prompts',
        'Document what works',
        'Share with team',
        'Build prompt library'
      ]
    }
  ];

  return (
    <PageSEO config={seoConfig}>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-visible">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, opacity: 0.5 }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(147,51,234,0.02)_50%,transparent_70%)] bg-[length:100px_100px] animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 10, isolation: 'isolate' }}>
            <div className="text-center max-w-5xl mx-auto" style={{ position: 'relative', zIndex: 10 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm mb-8" style={{ position: 'relative', zIndex: 10 }}>
                <PenToolIcon className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Complete AI Prompt Writing Guide</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  AI Prompt Writing Guide for Marketing
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Learn how to write effective AI prompts that get better results. Master prompt engineering, 
                best practices, and techniques to maximize AI output quality.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Get AI Consultation
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <Book className="h-5 w-5 mr-2" />
                  Read More
                </button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { value: '85%', label: 'Quality Improvement' },
                  { value: '70%', label: 'Time Saved' },
                  { value: '78%', label: 'Accuracy Increase' },
                  { value: '65%', label: 'Productivity Boost' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 backdrop-blur-sm">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-16 bg-gradient-to-r from-gray-900 via-purple-900/20 to-gray-900 border-y border-purple-500/10">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">92%</div>
                <div className="text-gray-300">Better Results with Good Prompts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">3x</div>
                <div className="text-gray-300">Faster Output Generation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-gray-300">Prompt Templates Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        {isNavSticky && (
          <div className="fixed top-20 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-2 overflow-x-auto py-3 scrollbar-hide">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25 scale-105'
                        : 'text-gray-300 hover:text-purple-300 hover:bg-purple-500/10'
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Overview Section */}
          <section id="overview" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                What is AI Prompt Writing?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                AI prompt writing is the art and science of crafting effective instructions for AI systems to 
                generate desired outputs. A well-written prompt can dramatically improve the quality, relevance, 
                and accuracy of AI-generated content, making it a crucial skill in the age of AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <PenToolIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Clear Instructions</h3>
                <p className="text-gray-300 leading-relaxed">
                  Write clear, specific instructions that tell AI exactly what you want.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Info className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Provide Context</h3>
                <p className="text-gray-300 leading-relaxed">
                  Give AI enough context to understand the task and generate relevant responses.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Use Examples</h3>
                <p className="text-gray-300 leading-relaxed">
                  Include examples to show AI the desired format, style, or structure.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-2xl border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Prompt Writing Matters</h3>
                  <ul className="space-y-3">
                    {[
                      'Get better quality AI-generated content',
                      'Save time on revisions and iterations',
                      'Achieve more accurate and relevant results',
                      'Increase productivity and efficiency',
                      'Reduce costs by getting it right the first time',
                      'Unlock the full potential of AI tools'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-600/20 to-purple-500/20 rounded-xl p-6 border border-purple-500/30">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">92%</div>
                        <div className="text-xs text-gray-400">Better Results</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">85%</div>
                        <div className="text-xs text-gray-400">Quality Improvement</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">70%</div>
                        <div className="text-xs text-gray-400">Time Saved</div>
                      </div>
                      <div className="text-center p-4 bg-black/30 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-1">78%</div>
                        <div className="text-xs text-gray-400">Accuracy Increase</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Key Prompt Writing Principles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Essential principles for writing effective AI prompts
              </p>
            </div>

            <div className="space-y-6">
              {keyPrinciples.map((principle, index) => (
                <div
                  key={principle.id}
                  className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border ${principle.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                >
                  <button
                    onClick={() => setExpandedFeature(expandedFeature === index ? -1 : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${principle.color} shadow-lg`}>
                        {principle.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-gray-300">{principle.description}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        expandedFeature === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {expandedFeature === index && (
                    <div className="px-8 pb-6 border-t border-gray-700 pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {principle.features.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className={`h-5 w-5 ${principle.textColor} flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Benefits of Good Prompt Writing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                How effective prompt writing transforms AI interactions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20 border border-purple-500/30 mb-4 inline-block">
                    {benefit.icon}
                  </div>
                  <div className="text-right mb-3">
                    <div className="text-2xl font-bold text-purple-300">{benefit.metric}</div>
                    <div className="text-xs text-gray-400">{benefit.label}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Prompt Types Section */}
          <section id="types" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Types of AI Prompts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Different types of prompts for various use cases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {promptTypes.map((promptType, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20 border border-purple-500/30 mb-6 inline-block">
                    {promptType.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{promptType.type}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{promptType.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-300 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {promptType.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-sm italic">"{example}"</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold text-purple-300">Best for: </span>
                      {promptType.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Best Practices Section */}
          <section id="implementation" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Prompt Writing Best Practices
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Step-by-step guide to writing effective AI prompts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bestPractices.map((practice, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">{practice.step}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20 border border-purple-500/30">
                        <div className="text-purple-300">
                          {practice.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{practice.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{practice.description}</p>
                    <ul className="space-y-2">
                      {practice.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs Section */}
          <section id="faqs" className="relative mb-20 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about AI prompt writing
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'What makes a good AI prompt?',
                  answer: 'A good AI prompt is clear, specific, provides context, includes examples when helpful, sets constraints, and defines the desired output format. It should be well-structured and leave little room for ambiguity.'
                },
                {
                  question: 'How long should an AI prompt be?',
                  answer: 'Prompt length varies based on complexity. Simple tasks may need 1-2 sentences, while complex tasks might require several paragraphs. The key is including all necessary information without being unnecessarily verbose.'
                },
                {
                  question: 'Should I use examples in prompts?',
                  answer: 'Yes, examples are highly effective. They show AI the desired format, style, tone, and complexity level. Examples help AI understand exactly what you want, leading to better results.'
                },
                {
                  question: 'How do I improve my prompts?',
                  answer: 'Improve prompts by testing different phrasings, adding more context, being more specific, including examples, setting clear constraints, and iterating based on results. Learn from what works and refine accordingly.'
                },
                {
                  question: 'Can I reuse prompts?',
                  answer: 'Yes, you can reuse and adapt prompts. Create templates for common tasks, save effective prompts, and modify them for similar use cases. Building a prompt library can save significant time.'
                },
                {
                  question: 'What if AI doesn\'t understand my prompt?',
                  answer: 'If AI doesn\'t understand, try: being more specific, adding context, using simpler language, providing examples, breaking down complex tasks, or rephrasing the prompt. Iteration is key to improvement.'
                },
                {
                  question: 'Should I use technical jargon in prompts?',
                  answer: 'Use technical jargon only when necessary and when AI understands it. If using specialized terms, provide definitions or context. Balance technical accuracy with clarity.'
                },
                {
                  question: 'How do I get consistent results from AI?',
                  answer: 'Get consistent results by: being specific and detailed, setting clear constraints, providing examples, using consistent formatting, testing and refining prompts, and documenting what works.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Master AI Prompt Writing?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get expert AI prompt writing consultation and training. Learn to write effective prompts 
              that get better results from AI systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Rocket className="h-5 w-5 mr-2" />
                Get AI Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-900/50 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-purple-900/70 transition-all duration-300"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Training
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-purple-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Expert guidance</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Ongoing support</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageSEO>
  );
};

export default HowToWriteAIPrompts;
