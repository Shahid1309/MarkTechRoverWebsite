const fs = require('fs');
const path = require('path');

// List of files that need fixing
const filesToFix = [
  'src/pages/services/seo-lead-generation/PPCManagementServices.tsx',
  'src/pages/services/ux-interactive/EmailMarketingDesign.tsx',
  'src/pages/services/ux-interactive/AgencyPerformanceImprovement.tsx',
  'src/pages/services/ux-interactive/WebsiteTrafficRecovery.tsx',
  'src/pages/services/ux-interactive/InfographicsMotionGraphics.tsx',
  'src/pages/services/ux-interactive/DigitalExperienceDevelopment.tsx',
  'src/pages/services/ux-interactive/WebInfrastructureMaintenance.tsx',
  'src/pages/services/ux-interactive/ContentMarketing.tsx',
  'src/pages/services/ux-interactive/YouTubeAdvertising.tsx',
  'src/pages/services/ux-interactive/AIGPTIntegration.tsx',
  'src/pages/services/ux-interactive/WebsiteDesign.tsx',
  'src/pages/services/ux-interactive/SocialMediaManagement.tsx',
  'src/pages/services/ux-interactive/WebsiteRedesign.tsx',
  'src/pages/services/ux-interactive/WebsiteConversionOptimization.tsx',
  'src/pages/services/ux-interactive/SocialMediaDesign.tsx',
  'src/pages/services/ux-interactive/WebsiteLeadGeneration.tsx',
  'src/pages/services/ux-interactive/ShopifyEcommerceDevelopment.tsx',
  'src/pages/services/ux-interactive/ADAComplianceServices.tsx',
  'src/pages/services/ux-interactive/WebVideoProduction.tsx',
  'src/pages/services/ux-interactive/SeoCopywriting.tsx',
  'src/pages/services/ux-interactive/WebsiteROIImprovement.tsx',
  'src/pages/services/ux-interactive/WebsiteSeoFix.tsx',
  'src/pages/services/ux-interactive/RapidWebDesign.tsx',
  'src/pages/services/ux-interactive/EcommerceWebsiteDesign.tsx',
  'src/pages/services/ux-interactive/ContentManagementSystems.tsx'
];

function fixPageSEO(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the PageSEO opening tag
    if (content.includes('<PageSEO config={seoConfig}>')) {
      // Find the last occurrence of </> before the export statement
      const lines = content.split('\n');
      let lastFragmentIndex = -1;
      
      for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].trim() === '</>') {
          lastFragmentIndex = i;
          break;
        }
      }
      
      if (lastFragmentIndex !== -1) {
        // Replace the last </> with </PageSEO>
        lines[lastFragmentIndex] = '      </PageSEO>';
        content = lines.join('\n');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${filePath}`);
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all files
let fixedCount = 0;
filesToFix.forEach(filePath => {
  if (fixPageSEO(filePath)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} out of ${filesToFix.length} files.`);

