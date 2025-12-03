import { Helmet } from 'react-helmet-async';
import { generateLocalBusinessSchema } from '../utils/schema';
import { Image } from './Image';

interface LocalBusinessProps {
  name: string;
  description: string;
  logo: string;
  url: string;
  telephone: string;
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
  openingHours: string[];
  socialLinks?: string[];
}

export const LocalBusiness = ({
  name,
  description,
  logo,
  url,
  telephone,
  address,
  geo,
  openingHours,
  socialLinks = [],
}: LocalBusinessProps) => {
  const businessData = {
    name,
    description,
    logo,
    url,
    telephone,
    address,
    geo,
    openingHours,
    sameAs: socialLinks,
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateLocalBusinessSchema(businessData))}
        </script>
      </Helmet>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <Image
              src={logo}
              alt={name}
              width={200}
              height={200}
              className="rounded-lg"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-gray-300 mb-6">{description}</p>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p>
                <a
                  href={`tel:${telephone}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {telephone}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Address</h2>
              <address className="not-italic">
                {address.streetAddress}<br />
                {address.addressLocality}, {address.addressRegion} {address.postalCode}<br />
                {address.addressCountry}
              </address>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Opening Hours</h2>
              <ul className="space-y-1">
                {openingHours.map((hours, index) => (
                  <li key={index}>{hours}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="h-96 rounded-lg overflow-hidden">
            <iframe
              title="Business Location"
              width="100%"
              height="100%"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${geo.latitude},${geo.longitude}`}
              allowFullScreen
            />
          </div>

          {socialLinks.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {new URL(link).hostname.split('.')[1]}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 