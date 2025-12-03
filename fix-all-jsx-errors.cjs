const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all service files with JSX errors
const serviceFiles = glob.sync('src/pages/services/**/*.tsx');

console.log(`Found ${serviceFiles.length} service files to check...`);

let fixedCount = 0;
let errorCount = 0;

serviceFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let hasChanges = false;

    // Fix 1: Add missing main container div if the component starts with PageSEO
    if (content.includes('<PageSEO') && !content.includes('<div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">')) {
      // Find the PageSEO closing tag and add main container after it
      const pageSeoMatch = content.match(/(<PageSEO[^>]*\/>)/);
      if (pageSeoMatch) {
        const insertPoint = content.indexOf(pageSeoMatch[0]) + pageSeoMatch[0].length;
        content = content.slice(0, insertPoint) + 
          '\n      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">' +
          content.slice(insertPoint);
        hasChanges = true;
      }
    }

    // Fix 2: Fix malformed JSX fragments and missing closing tags
    // Look for patterns like "Expected corresponding closing tag for JSX fragment"
    const lines = content.split('\n');
    let newLines = [];
    let openFragments = 0;
    let openDivs = 0;
    let inComponent = false;
    let componentStartLine = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      newLines.push(line);

      // Detect component start
      if (line.includes('const ') && line.includes('= () => {') && !inComponent) {
        inComponent = true;
        componentStartLine = i;
      }

      // Count opening and closing tags
      if (inComponent) {
        const openFragmentMatches = (line.match(/<>/g) || []).length;
        const closeFragmentMatches = (line.match(/<\/>/g) || []).length;
        const openDivMatches = (line.match(/<div[^>]*>/g) || []).length;
        const closeDivMatches = (line.match(/<\/div>/g) || []).length;

        openFragments += openFragmentMatches - closeFragmentMatches;
        openDivs += openDivMatches - closeDivMatches;

        // If we're at the end of the component and have unclosed tags
        if (line.includes('};') && (openFragments > 0 || openDivs > 0)) {
          // Add missing closing tags
          while (openDivs > 0) {
            newLines.push('      </div>');
            openDivs--;
            hasChanges = true;
          }
          while (openFragments > 0) {
            newLines.push('    </>');
            openFragments--;
            hasChanges = true;
          }
        }
      }
    }

    // Fix 3: Handle specific error patterns
    // Pattern: Missing closing div before fragment close
    if (content.includes('</div>') && content.includes('</>') && content.includes(');')) {
      const lastDivIndex = content.lastIndexOf('</div>');
      const fragmentCloseIndex = content.lastIndexOf('</>');
      const componentEndIndex = content.lastIndexOf(');');
      
      if (lastDivIndex < fragmentCloseIndex && fragmentCloseIndex < componentEndIndex) {
        // This looks correct, but let's check for missing main container
        if (!content.includes('<div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">')) {
          // Add main container
          const pageSeoMatch = content.match(/(<PageSEO[^>]*\/>)/);
          if (pageSeoMatch) {
            const insertPoint = content.indexOf(pageSeoMatch[0]) + pageSeoMatch[0].length;
            content = content.slice(0, insertPoint) + 
              '\n      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">' +
              content.slice(insertPoint);
            hasChanges = true;
          }
        }
      }
    }

    // Fix 4: Remove duplicate closing tags
    const duplicateDivPattern = /<\/div>\s*<\/div>\s*<\/>/g;
    if (duplicateDivPattern.test(content)) {
      content = content.replace(duplicateDivPattern, '</div>\n    </>');
      hasChanges = true;
    }

    // Fix 5: Ensure proper component structure
    if (content.includes('export default') && !content.includes('return (')) {
      // Find the return statement and ensure proper structure
      const returnMatch = content.match(/return\s*\(/);
      if (returnMatch) {
        const returnIndex = content.indexOf(returnMatch[0]);
        const afterReturn = content.slice(returnIndex + returnMatch[0].length);
        
        // Check if we need to add a main container
        if (!afterReturn.includes('<div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">')) {
          const pageSeoMatch = afterReturn.match(/(<PageSEO[^>]*\/>)/);
          if (pageSeoMatch) {
            const insertPoint = returnIndex + returnMatch[0].length + afterReturn.indexOf(pageSeoMatch[0]) + pageSeoMatch[0].length;
            content = content.slice(0, insertPoint) + 
              '\n      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">' +
              content.slice(insertPoint);
            hasChanges = true;
          }
        }
      }
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      fixedCount++;
    } else {
      console.log(`⏭️  No changes needed: ${filePath}`);
    }

  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`✅ Files fixed: ${fixedCount}`);
console.log(`❌ Files with errors: ${errorCount}`);
console.log(`📁 Total files processed: ${serviceFiles.length}`);

if (fixedCount > 0) {
  console.log(`\n🎉 Successfully fixed JSX errors in ${fixedCount} files!`);
} else {
  console.log(`\n✨ All files are already properly formatted!`);
}