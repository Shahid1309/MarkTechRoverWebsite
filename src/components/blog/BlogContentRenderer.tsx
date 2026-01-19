import { Link } from 'react-router-dom';

interface LinkConfig {
  pattern: RegExp;
  route: string;
  anchorText: string;
}

// Service page link configurations with natural anchor text variations
const serviceLinks: LinkConfig[] = [
  { pattern: /\bSEO\s+(services|optimization|agency|company)\b/gi, route: '/services/seo-lead-generation/seo-services', anchorText: 'SEO services' },
  { pattern: /\b(organic\s+)?SEO\b/gi, route: '/services/seo-lead-generation/seo-services', anchorText: 'SEO' },
  { pattern: /\blocal\s+SEO\b/gi, route: '/services/local-seo', anchorText: 'local SEO' },
  { pattern: /\bPPC\s+(management|services|campaigns?|ads?)\b/gi, route: '/services/seo-lead-generation/ppc-management', anchorText: 'PPC management' },
  { pattern: /\b(paid\s+)?search\s+(ads?|campaigns?)\b/gi, route: '/services/seo-lead-generation/ppc-management', anchorText: 'paid search ads' },
  { pattern: /\bconversion\s+rate\s+optimization\b/gi, route: '/services/conversion-rate-optimization', anchorText: 'conversion rate optimization' },
  { pattern: /\bCRO\b/gi, route: '/services/conversion-rate-optimization', anchorText: 'CRO' },
  { pattern: /\bwebsite\s+(design|development|redesign)\b/gi, route: '/services/ux-interactive/website-design', anchorText: 'website design' },
  { pattern: /\bweb\s+development\b/gi, route: '/services/ux-interactive/website-design', anchorText: 'web development' },
  { pattern: /\bdigital\s+marketing\s+(services|agency)\b/gi, route: '/services/digital-marketing', anchorText: 'digital marketing services' },
  { pattern: /\bfull\s+service\s+digital\s+marketing\b/gi, route: '/services/digital-marketing', anchorText: 'full service digital marketing' },
  { pattern: /\bAI\s+(marketing|automation|tools?)\b/gi, route: '/services/ai-technology', anchorText: 'AI marketing' },
  { pattern: /\bcontent\s+marketing\b/gi, route: '/services/ux-interactive/content-marketing', anchorText: 'content marketing' },
  { pattern: /\bsocial\s+media\s+(marketing|management)\b/gi, route: '/services/ux-interactive/social-media-management', anchorText: 'social media marketing' },
  { pattern: /\bemail\s+marketing\b/gi, route: '/services/revenue-marketing-cro/email-marketing-management', anchorText: 'email marketing' },
];

interface BlogContentRendererProps {
  content: string;
  maxLinks?: number; // Limit number of links per content block to avoid over-linking
}

const BlogContentRenderer: React.FC<BlogContentRendererProps> = ({ content, maxLinks = 3 }) => {
  let processedContent = content;
  const usedRoutes = new Set<string>();
  let linkCount = 0;

  // Process each link pattern
  for (const linkConfig of serviceLinks) {
    if (linkCount >= maxLinks) break;
    
    // Skip if we've already linked to this route
    if (usedRoutes.has(linkConfig.route)) continue;

    // Find matches
    const matches = Array.from(processedContent.matchAll(linkConfig.pattern));
    
    if (matches.length > 0 && linkCount < maxLinks) {
      // Replace first occurrence only to avoid over-linking
      const firstMatch = matches[0];
      const startIndex = firstMatch.index!;
      const matchText = firstMatch[0];
      
      // Create link component
      const linkElement = `<Link to="${linkConfig.route}" className="text-accent hover:underline font-medium">${linkConfig.anchorText}</Link>`;
      
      // Replace only the first occurrence
      processedContent = 
        processedContent.substring(0, startIndex) +
        linkElement +
        processedContent.substring(startIndex + matchText.length);
      
      usedRoutes.add(linkConfig.route);
      linkCount++;
    }
  }

  // For now, return content with simple link placeholders that we'll replace
  // We'll use a different approach - render with React components
  return <div dangerouslySetInnerHTML={{ __html: processedContent }} />;
};

// Better approach: Parse and render with React components
export const renderBlogContentWithLinks = (content: string): React.ReactNode => {
  const parts: (string | JSX.Element)[] = [];
  let processedContent = content;
  const usedRoutes = new Set<string>();
  let linkCount = 0;
  const maxLinks = 2; // Limit to 2 links per content block

  // Sort links by pattern length (longer patterns first for better matching)
  const sortedLinks = [...serviceLinks].sort((a, b) => {
    const aLength = a.pattern.source.length;
    const bLength = b.pattern.source.length;
    return bLength - aLength;
  });

  // Find all matches and process them
  const matches: Array<{ start: number; end: number; config: LinkConfig; text: string }> = [];
  
  for (const linkConfig of sortedLinks) {
    if (linkCount >= maxLinks || usedRoutes.has(linkConfig.route)) continue;

    const regex = new RegExp(linkConfig.pattern.source, linkConfig.pattern.flags);
    const match = processedContent.match(regex);

    if (match && match.index !== undefined) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        config: linkConfig,
        text: match[0]
      });
      usedRoutes.add(linkConfig.route);
      linkCount++;
    }
  }

  // Sort matches by position
  matches.sort((a, b) => a.start - b.start);

  // Build parts array
  let lastIndex = 0;
  matches.slice(0, maxLinks).forEach((match, index) => {
    // Add text before match
    if (match.start > lastIndex) {
      parts.push(processedContent.substring(lastIndex, match.start));
    }

    // Add link
    parts.push(
      <Link
        key={`link-${index}`}
        to={match.config.route}
        className="text-accent hover:underline font-medium"
      >
        {match.config.anchorText}
      </Link>
    );

    lastIndex = match.end;
  });

  // Add remaining content
  if (lastIndex < processedContent.length) {
    parts.push(processedContent.substring(lastIndex));
  }

  return <>{parts.length > 0 ? parts : content}</>;
};

export default BlogContentRenderer;

