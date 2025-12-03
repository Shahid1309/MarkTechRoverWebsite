interface RedirectRule {
  from: string | RegExp;
  to: string;
  type?: 301 | 302;
  condition?: (pathname: string) => boolean;
}

// Define your redirect rules here
export const redirectRules: RedirectRule[] = [
  {
    from: '/old-services',
    to: '/services',
    type: 301,
  },
  {
    from: '/blog/old-slug-format-:id',
    to: '/blog/:id',
    type: 301,
  },
  {
    from: /^\/articles\/(\d+)\/.*$/,
    to: '/blog/$1',
    type: 301,
  },
];

/**
 * Check if the current path matches any redirect rules
 * @param pathname Current pathname
 * @returns Redirect URL if a match is found, null otherwise
 */
export const checkRedirect = (pathname: string): { url: string; type: number } | null => {
  for (const rule of redirectRules) {
    if (rule.condition && !rule.condition(pathname)) {
      continue;
    }

    if (typeof rule.from === 'string') {
      // Handle parameterized routes
      const fromParts = rule.from.split('/');
      const pathParts = pathname.split('/');

      if (fromParts.length === pathParts.length) {
        const params: Record<string, string> = {};
        let matches = true;

        for (let i = 0; i < fromParts.length; i++) {
          if (fromParts[i].startsWith(':')) {
            const param = fromParts[i].slice(1);
            params[param] = pathParts[i];
          } else if (fromParts[i] !== pathParts[i]) {
            matches = false;
            break;
          }
        }

        if (matches) {
          let redirectUrl = rule.to;
          Object.entries(params).forEach(([key, value]) => {
            redirectUrl = redirectUrl.replace(`:${key}`, value);
          });
          return { url: redirectUrl, type: rule.type || 301 };
        }
      }
    } else if (rule.from instanceof RegExp) {
      const match = pathname.match(rule.from);
      if (match) {
        const redirectUrl = rule.to.replace(/\$(\d+)/g, (_, n) => match[n] || '');
        return { url: redirectUrl, type: rule.type || 301 };
      }
    }
  }

  return null;
};

/**
 * Handle redirects in React components
 * @param pathname Current pathname
 * @returns JSX element for redirect or null
 */
export const useRedirect = (pathname: string) => {
  const redirect = checkRedirect(pathname);
  if (redirect) {
    window.location.href = redirect.url;
    return null;
  }
  return null;
}; 