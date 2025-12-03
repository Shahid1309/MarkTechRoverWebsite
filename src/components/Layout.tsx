import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { generateBreadcrumbSchema } from '../utils/schema';

interface LayoutProps {
  children: ReactNode;
  title: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
}

export const Layout = ({
  children,
  title,
  breadcrumbs = [],
}: LayoutProps) => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    ...breadcrumbs,
  ].map(item => ({
    name: item.name,
    item: `https://marktechrover.com${item.path}`,
  }));

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema(breadcrumbItems))}
        </script>
      </Helmet>

      {/* Breadcrumb navigation */}
      <nav aria-label="Breadcrumb" className="py-2 px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.item} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              <a
                href={item.item}
                className={index === breadcrumbItems.length - 1 ? 'text-gray-300' : 'text-blue-600 hover:text-blue-800'}
                {...(index === breadcrumbItems.length - 1 && { 'aria-current': 'page' })}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Main content with proper heading hierarchy */}
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="prose max-w-none">
          {children}
        </div>
      </main>
    </>
  );
}; 