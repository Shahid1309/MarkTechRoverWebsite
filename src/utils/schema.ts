interface Organization {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
}

interface Article {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface LocalBusiness extends Organization {
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  telephone: string;
  openingHours: string[];
}

export const generateOrganizationSchema = (data: Organization) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: data.name,
  url: data.url,
  logo: data.logo,
  description: data.description,
  ...(data.sameAs && { sameAs: data.sameAs }),
});

export const generateArticleSchema = (data: Article) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: data.title,
  description: data.description,
  image: data.image,
  datePublished: data.datePublished,
  dateModified: data.dateModified,
  author: {
    '@type': 'Person',
    name: data.author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'MarkTechRover',
    logo: {
      '@type': 'ImageObject',
      url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': data.url,
  },
});

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.item,
  })),
});

export const generateFAQSchema = (items: FAQItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const generateLocalBusinessSchema = (data: LocalBusiness) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': data.url,
  name: data.name,
  image: data.logo,
  description: data.description,
  url: data.url,
  telephone: data.telephone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: data.address.streetAddress,
    addressLocality: data.address.addressLocality,
    addressRegion: data.address.addressRegion,
    postalCode: data.address.postalCode,
    addressCountry: data.address.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: data.geo.latitude,
    longitude: data.geo.longitude,
  },
  openingHours: data.openingHours,
  ...(data.sameAs && { sameAs: data.sameAs }),
}); 