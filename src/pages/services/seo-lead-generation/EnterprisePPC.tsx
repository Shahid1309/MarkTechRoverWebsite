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
  Cpu,
  Menu,
  Trophy,
  Phone,
  Target as TargetIcon,
  BarChart3 as AnalyticsIcon,
  TrendingUp as PPCIcon
} from 'lucide-react';
import PageSEO from '../../../components/seo/PageSEO';

const EnterprisePPC = () => {
  const [activeSection, setActiveSection] = useState('deliverables');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [expandedDeliverable, setExpandedDeliverable] = useState<number>(0);

  const navItems = [
    { id: 'deliverables', label: 'Deliverables', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'packages', label: 'Enterprise PPC Management Packages', icon: <DollarSign className="h-4 w-4" /> },
    { id: 'technology', label: 'Enterprise PPC Management Technology', icon: <Cpu className="h-4 w-4" /> },
    { id: 'case-studies', label: 'Enterprise PPC Management Case Studies', icon: <Trophy className="h-4 w-4" /> },
    { id: 'approach', label: 'Enterprise PPC Management Approach', icon: <Rocket className="h-4 w-4" /> },
    { id: 'faqs', label: 'FAQs', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  // Handle scroll for sticky navigation and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 800; // Show nav after scrolling past hero section
      setIsNavSticky(scrollPosition > heroHeight);

      // Detect active section based on scroll position
      const sections = ['deliverables', 'packages', 'technology', 'case-studies', 'approach', 'faqs'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      let currentSection = 'deliverables';
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150; // Offset for sticky nav height
          
          if (rect.top <= offset && rect.bottom > offset) {
            currentSection = sections[index];
          }
        }
      });
      
        setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    title: 'Enterprise PPC Management Services Delhi | Best Enterprise PPC Agency NCR',
    description: 'Leading enterprise PPC management services in Delhi NCR. Best enterprise PPC agency in Delhi offering comprehensive PPC management. Professional enterprise PPC services India with proven results.',
    keywords: [
      'Enterprise PPC Management Delhi', 'Best enterprise PPC agency in Delhi', 'Enterprise PPC services NCR', 'Best enterprise PPC services in India', 'Professional enterprise PPC services India', 'Enterprise PPC experts in Delhi NCR', 'Enterprise PPC company India', 'SEO services in Delhi', 'PPC management Delhi', 'Enterprise advertising India'
    ],
    url: '/services/seo-lead-generation/enterprise-ppc',
    type: 'website' as const,
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'Ritik Kumar Poddar',
    section: 'Enterprise PPC Management',
    tags: ['Enterprise PPC', 'PPC Management', 'Enterprise Advertising', 'Google Ads', 'PPC Optimization'],
    image: '/images/enterprise-ppc.webp'
  };

  return (
    <PageSEO config={seoConfig}>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
        <h1 className="text-4xl font-bold text-white text-center py-20">
          Enterprise PPC Management Services
            </h1>
        <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto px-4">
          Leading enterprise PPC management services in Delhi NCR. Best enterprise PPC agency in Delhi offering comprehensive PPC management.
        </p>
      </div>
    </PageSEO>
  );
};

export default EnterprisePPC; 