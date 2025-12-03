const fs = require('fs');
const path = require('path');

// Get all service pages
const servicePagesDir = 'src/pages/services';
const pages = [];

function getAllServicePages(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllServicePages(fullPath);
    } else if (item.endsWith('.tsx') && !item.includes('Page.tsx')) {
      pages.push(fullPath);
    }
  });
}

getAllServicePages(servicePagesDir);

console.log(`Found ${pages.length} service pages to update`);

// Function to update a single page
function updatePage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already updated (has the new hero section)
    if (content.includes('Marktechrover: Best')) {
      console.log(`Skipping ${filePath} - already updated`);
      return;
    }
    
    // Extract service name from file path
    const fileName = path.basename(filePath, '.tsx');
    const serviceName = fileName.replace(/([A-Z])/g, ' $1').trim();
    
    // Determine appropriate icon based on service name
    let icon = 'Target';
    if (serviceName.toLowerCase().includes('ecommerce')) icon = 'ShoppingCart';
    else if (serviceName.toLowerCase().includes('seo')) icon = 'Search';
    else if (serviceName.toLowerCase().includes('ppc')) icon = 'TrendingUp';
    else if (serviceName.toLowerCase().includes('social')) icon = 'Users';
    else if (serviceName.toLowerCase().includes('call')) icon = 'Phone';
    else if (serviceName.toLowerCase().includes('email')) icon = 'Mail';
    else if (serviceName.toLowerCase().includes('content')) icon = 'FileText';
    else if (serviceName.toLowerCase().includes('design')) icon = 'Palette';
    else if (serviceName.toLowerCase().includes('ai')) icon = 'Brain';
    else if (serviceName.toLowerCase().includes('analytics')) icon = 'BarChart3';
    else if (serviceName.toLowerCase().includes('crm')) icon = 'Database';
    else if (serviceName.toLowerCase().includes('website')) icon = 'Globe';
    else if (serviceName.toLowerCase().includes('video')) icon = 'Video';
    else if (serviceName.toLowerCase().includes('resources')) icon = 'BookOpen';
    
    // Replace the old hero section with new one
    const oldHeroPattern = /return \(\s*<PageSEO config={seoConfig}>\s*<div className="min-h-screen " >\s*{\/\* Hero Section \*\/}\s*<section className="relative overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black text-white">[\s\S]*?{\/\* Main Content \*\/}\s*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">/;
    
    const newHeroSection = `return (
    <>
      <PageSEO config={seoConfig} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Animated Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 transition-all duration-1000">
                <${icon} className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Animated Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000">
              Marktechrover: Best <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent font-extrabold">${serviceName}</span> in Delhi, NCR & India
            </h1>

            {/* Animated Description */}
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300">
              Professional ${serviceName.toLowerCase()} services in Delhi NCR. Get expert ${serviceName.toLowerCase()} solutions with proven results and ROI.
            </p>
            
            {/* Interactive Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-500">
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  500+
                </div>
                <div className="text-gray-300 font-semibold text-sm">Happy Clients</div>
                <div className="text-gray-500 text-xs">Across India</div>
                <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  1000+
                </div>
                <div className="text-gray-300 font-semibold text-sm">Successful Campaigns</div>
                <div className="text-gray-500 text-xs">Delivered</div>
                <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  300%
                </div>
                <div className="text-gray-300 font-semibold text-sm">Average ROI</div>
                <div className="text-gray-500 text-xs">For Our Clients</div>
                <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  ₹3,021,182,299
                </div>
                <div className="text-gray-300 font-semibold text-sm">Revenue Driven</div>
                <div className="text-gray-500 text-xs">For Our Clients</div>
                <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 transition-all duration-1000 delay-700">
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">Google Partner</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300 text-sm">Certified Agency</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">5+ Years Experience</span>
              </div>
            </div>
            
            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Get Free ${serviceName} Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <button
                onClick={() => scrollToSection('packages')}
                className="group inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-500/20 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">View Packages</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Floating Action Button */}
            <div className="mt-8 transition-all duration-1000 delay-1200">
              <button className="group inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-700/50">
                <Play className="h-4 w-4" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </section>

      {/* Floating Sticky Sub Menu */}
      <div className={\`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 \${isNavSticky ? 'top-32 opacity-100 scale-100' : 'top-0 opacity-0 scale-95 pointer-events-none'}\`}>
        {/* Floating Background Element */}
        <div className="relative">
          {/* Animated Background Ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 rounded-full"></div>
          
          {/* Main Navigation Container */}
          <div className="relative bg-black/20 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-2xl shadow-purple-500/20">
            <nav className="flex items-center space-x-1 px-6 py-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={\`\${activeSection === item.id ? 'text-purple-300 bg-gradient-to-r from-purple-500/30 to-purple-400/30 border border-purple-400/50 shadow-lg shadow-purple-500/25' : 'text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/20 to-purple-400/20 hover:border-purple-300/30'} px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg\`}
                >
                  {item.icon}
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
          
          {/* Floating Decorative Elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>`;
    
    // Replace the old hero section
    if (oldHeroPattern.test(content)) {
      content = content.replace(oldHeroPattern, newHeroSection);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${filePath}`);
    } else {
      console.log(`⚠️  Could not find hero section pattern in ${filePath}`);
    }
    
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

// Update all pages
console.log('Starting to update all service pages...');
pages.forEach(updatePage);
console.log('Finished updating service pages!');

