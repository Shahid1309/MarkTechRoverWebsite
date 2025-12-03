import { useState, useEffect } from 'react';
import { Building2, Home, ShoppingBag, Heart, PiggyBank, Plane, Laptop, GraduationCap, Scale, MoreHorizontal, Globe, ChevronDown, ChevronUp, Award, Star } from 'lucide-react';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../utils/portfolioData';

const niches = [
  { id: 'architects', label: 'Architecture', icon: <Building2 className="h-5 w-5 mr-2" /> },
  { id: 'healthcare', label: 'Healthcare', icon: <Heart className="h-5 w-5 mr-2" /> },
  { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingBag className="h-5 w-5 mr-2" /> },
  { id: 'luxury', label: 'Luxury', icon: <Globe className="h-5 w-5 mr-2" /> },
  { id: 'legal', label: 'Legal', icon: <Scale className="h-5 w-5 mr-2" /> },
  { id: 'finance', label: 'Finance', icon: <PiggyBank className="h-5 w-5 mr-2" /> },
  { id: 'realestate', label: 'Real Estate', icon: <Home className="h-5 w-5 mr-2" /> },
  { id: 'travel', label: 'Travel', icon: <Plane className="h-5 w-5 mr-2" /> },
  { id: 'education', label: 'Education', icon: <GraduationCap className="h-5 w-5 mr-2" /> },
  { id: 'tech', label: 'Tech', icon: <Laptop className="h-5 w-5 mr-2" /> }
];

const HomePortfolioPage = () => {
  const [activeNiche, setActiveNiche] = useState('all');
  const [shuffledProjects, setShuffledProjects] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);

  const INITIAL_CARDS = 9;

  // Fisher-Yates shuffle algorithm
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Shuffle projects when component mounts and when activeNiche changes
  useEffect(() => {
    const filtered = projects.filter(project => 
      activeNiche === 'all' || project.category === activeNiche
    );
    setShuffledProjects(shuffleArray(filtered));
    setShowAll(false); // Reset to initial state when niche changes
  }, [activeNiche]);

  const displayedProjects = showAll ? shuffledProjects : shuffledProjects.slice(0, INITIAL_CARDS);
  const hasMoreProjects = shuffledProjects.length > INITIAL_CARDS;

  const handleExpandToggle = () => {
    setIsExpanding(true);
    setShowAll(!showAll);
    setTimeout(() => setIsExpanding(false), 500);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-20 px-4">
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 text-center">
            Our Portfolio
          </h1>
          <p className="text-xl text-slate-200 text-center max-w-3xl mb-8">
            Explore our diverse collection of successful projects across various industries
          </p>
          
          {/* Industry Expert Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 rounded-full backdrop-blur-sm">
              <Award className="h-4 w-4 text-emerald-400" />
              <span className="text-emerald-300 font-medium text-sm">Architecture Expert</span>
              <Star className="h-3 w-3 text-emerald-400" />
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <Award className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 font-medium text-sm">Real Estate Expert</span>
              <Star className="h-3 w-3 text-blue-400" />
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
              <Award className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 font-medium text-sm">Healthcare Expert</span>
              <Star className="h-3 w-3 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            key="all"
            className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
              activeNiche === 'all'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:shadow-md border border-white/20'
            }`}
            onClick={() => setActiveNiche('all')}
          >
            <span className="text-base font-medium">All Projects</span>
          </button>
          {niches.filter(niche => niche.id !== 'others').map(niche => (
            <button
              key={niche.id}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeNiche === niche.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:shadow-md border border-white/20'
              }`}
              onClick={() => setActiveNiche(niche.id)}
            >
              {niche.icon}
              <span className="ml-2 text-base font-medium">{niche.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map(({ id, title, description, imageName, category, link }) => (
            <ProjectCard
              key={id}
              title={title}
              description={description}
              imageName={imageName}
              category={category}
              link={link}
            />
          ))}
        </div>

        {/* Expand/Collapse Button */}
        {hasMoreProjects && (
          <div className="flex justify-center">
            <button
              onClick={handleExpandToggle}
              disabled={isExpanding}
              className={`flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 font-semibold ${
                showAll
                  ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
                  : 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40'
              } ${isExpanding ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            >
              {showAll ? (
                <>
                  <ChevronUp className="h-5 w-5" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-5 w-5" />
                  Show All Projects ({shuffledProjects.length - INITIAL_CARDS} more)
                </>
              )}
            </button>
          </div>
        )}

        {/* Project Count Display */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            Showing {displayedProjects.length} of {shuffledProjects.length} projects
            {activeNiche !== 'all' && ` in ${niches.find(n => n.id === activeNiche)?.label}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePortfolioPage;