import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Service page configurations
const servicePages = {
  'ux-interactive': [
    'WebsiteRedesign',
    'RapidWebDesign', 
    'SocialMediaDesign',
    'EcommerceWebsiteDesign',
    'EmailMarketingDesign',
    'SeoCopywriting',
    'ContentMarketing',
    'InfographicsMotionGraphics',
    'WebVideoProduction',
    'YouTubeAdvertising',
    'DigitalExperienceDevelopment',
    'ShopifyEcommerceDevelopment',
    'WebInfrastructureMaintenance',
    'ContentManagementSystems',
    'AIGPTIntegration',
    'ADAComplianceServices',
    'WebsiteLeadGeneration',
    'WebsiteTrafficRecovery',
    'WebsiteConversionOptimization',
    'WebsiteROIImprovement',
    'WebsiteSeoFix',
    'AgencyPerformanceImprovement'
  ],
  'ai-technology': [
    'RevenueCloudFXPlatform',
    'CRMIntegrations',
    'CustomerDataPlatform',
    'LeadManagementScheduling',
    'CRMRetargeting',
    'ContactEnrichment',
    'AISeoServices',
    'AIDigitalMarketing',
    'AICostGuide',
    'AIConsulting',
    'AIGPTIntegrationTech',
    'ClosedLoopAnalytics',
    'AIAdGeneration',
    'AIWebsiteGeneration',
    'AIAdEditing',
    'AISoftwareDevelopment',
    'AIContentCreation',
    'AIVideoProduction',
    'WhatIsCRM',
    'DataDrivenMarketingGuide',
    'HowToWriteAIPrompts',
    'TrackAISearchVisibility',
    'WhatIsAIMarketing',
    'WhatAreCRMIntegrations'
  ]
};

// Read the template file
const templatePath = path.join(__dirname, '../src/pages/services/ux-interactive/WebsiteDesign.tsx');
const template = fs.readFileSync(templatePath, 'utf8');

// Function to generate service page content
function generateServicePage(serviceName, category) {
  const serviceNameLower = serviceName.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
  const serviceNameFormatted = serviceName.replace(/([A-Z])/g, ' $1').trim();
  
  let content = template
    .replace(/const WebsiteDesign = \(\) => {/g, `const ${serviceName} = () => {`)
    .replace(/WebsiteDesign/g, serviceName)
    .replace(/website design/gi, serviceNameLower)
    .replace(/Website Design/gi, serviceNameFormatted)
    .replace(/website-design/gi, serviceNameLower)
    .replace(/website-design/gi, serviceNameLower);

  // Fix the PageSEO import path based on category
  const importPath = category === 'ux-interactive' || category === 'ai-technology' 
    ? '../../../components/seo/PageSEO'
    : '../../components/seo/PageSEO';
    
  content = content.replace(
    /import PageSEO from '\.\.\/\.\.\/components\/seo\/PageSEO';/g,
    `import PageSEO from '${importPath}';`
  );

  // Add Server icon to imports if not already present
  if (!content.includes('Server')) {
    content = content.replace(
      /} from 'lucide-react';/,
      `  Server,
} from 'lucide-react';`
    );
  }

  // Update SEO configuration
  const seoConfig = {
    title: `${serviceNameFormatted} Services | MarkTechRover`,
    description: `Professional ${serviceNameFormatted.toLowerCase()} services. Expert solutions for your business needs. Get started today.`,
    keywords: [`${serviceNameFormatted.toLowerCase()}`, 'services', 'professional', 'expert', 'business'],
    url: `/services/${category}/${serviceNameLower}`,
    type: 'website',
    publishedAt: new Date().toISOString(),
    modifiedAt: new Date().toISOString(),
    author: 'MarkTechRover',
    section: 'Services',
    tags: [serviceNameFormatted.toLowerCase(), 'services'],
    image: `/images/services/${serviceNameLower}.jpg`
  };

  // Replace the SEO config with proper TypeScript typing
  const seoConfigRegex = /const seoConfig = \{[\s\S]*?\};/;
  const seoConfigString = `const seoConfig = {
    title: "${seoConfig.title}",
    description: "${seoConfig.description}",
    keywords: ${JSON.stringify(seoConfig.keywords)},
    url: "${seoConfig.url}",
    type: "website" as const,
    publishedAt: "${seoConfig.publishedAt}",
    modifiedAt: "${seoConfig.modifiedAt}",
    author: "${seoConfig.author}",
    section: "${seoConfig.section}",
    tags: ${JSON.stringify(seoConfig.tags)},
    image: "${seoConfig.image}"
  };`;
  
  content = content.replace(seoConfigRegex, seoConfigString);

  return content;
}

// Generate all service pages
Object.entries(servicePages).forEach(([category, services]) => {
  const categoryDir = path.join(__dirname, `../src/pages/services/${category}`);
  
  // Ensure directory exists
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }

  services.forEach(serviceName => {
    const filePath = path.join(categoryDir, `${serviceName}.tsx`);
    
    // Always regenerate to fix Server icon import
    const content = generateServicePage(serviceName, category);
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
  });
});

console.log('Service page generation complete!'); 