import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Target, TrendingUp, Users, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';

const LocalSeoServicesPage = () => {
  const [ready, setReady] = useState(false);
  const sectionRefs = Array.from({ length: 4 }).map(() => useRef<HTMLDivElement>(null));
  const [visible, setVisible] = useState(sectionRefs.map(() => false));

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 30);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionRefs.forEach((ref, idx) => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(([entry], o) => {
        if (entry.isIntersecting) {
          setVisible(prev => prev.map((v, i) => (i === idx ? true : v)));
          o.disconnect();
        }
      }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
      obs.observe(ref.current);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);
  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Google My Business Optimization',
      description: 'Optimize your GMB profile for maximum local visibility'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Local Keyword Research',
      description: 'Target location-specific keywords that drive local traffic'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Local Citation Building',
      description: 'Build consistent business listings across directories'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Local Link Building',
      description: 'Build local backlinks from relevant local websites'
    }
  ];

  const benefits = [
    'Dominate local search results',
    'Increase foot traffic to your business',
    'Improve Google Maps visibility',
    'Generate more local phone calls',
    'Build trust with local customers',
    'Outrank local competitors'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-500 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        {/* Animated Background Elements (mirrors SeoServicesPage) */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                <MapPin className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get Local SEO Optimization</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Dominate local search results and attract customers in your area. 
              Our local SEO services help businesses appear in "near me" searches and Google Maps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/schedule-call"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Local SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-white hover:bg-purple-500/20 rounded-xl font-semibold transition-all duration-300"
              >
                View Local Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why MarkTech Is Better */}
      <section ref={sectionRefs[3]} className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium mb-4">
              Why MarkTechRover
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why MarkTech is Better Than Any Other Agency</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Purpose‑built for India: faster GTM, lower CPL, and transparent ROI with executive‑ready reporting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/10 to-purple-800/10 border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-2">Revenue Accountability</h3>
              <p className="text-gray-300 text-sm">We track leads, calls, and revenue — not just rankings — so every local action ties to pipeline.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/10 to-purple-800/10 border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-2">LLM‑Aided Local Strategy</h3>
              <p className="text-gray-300 text-sm">AI‑assisted keyword, listing, and review insights speed up execution and improve consistency across locations.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/10 to-purple-800/10 border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-2">Enterprise‑Grade Governance</h3>
              <p className="text-gray-300 text-sm">Change control and brand safeguards ensure quality across citations, GBP updates, and on‑page local SEO.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={sectionRefs[0]} className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Local SEO Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive local search optimization to help your business dominate local search results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/25">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={sectionRefs[1]} className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/5 via-transparent to-purple-900/5 transition-all duration-700 ${visible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Local SEO Matters?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Local SEO is crucial for businesses that serve customers in specific geographic areas.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 via-blue-800/20 to-blue-900/20 border border-blue-500/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Local Search Results</h3>
                  <div className="text-4xl font-bold text-white mb-2">Top 3 Rankings</div>
                  <p className="text-gray-300">for 85% of our local SEO clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={sectionRefs[2]} className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 via-purple-800/20 to-purple-900/20 border border-purple-500/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Dominate Local Search?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our local SEO experts and start appearing in "near me" searches today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/schedule-call"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Local SEO Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services/seo-lead-generation/google-local-services"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-white hover:bg-purple-500/20 rounded-xl font-semibold transition-all duration-300"
              >
                Google Local Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalSeoServicesPage; 