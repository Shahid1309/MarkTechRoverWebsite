import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, BarChart } from 'lucide-react';
import Section from '../components/ui/Section';
import { Link } from 'react-router-dom';
import { getImagePath } from '../utils/imageUtils';

const caseStudies = {
  'modern-architects': {
    title: 'Modern Architects Studio',
    subtitle: 'Digital Transformation Success Story',
    industry: 'Architecture',
    duration: '6 months',
    challenge: 'Modern Architects Studio needed to establish a stronger online presence and generate more qualified leads for their high-end architectural services.',
    solution: 'We implemented a comprehensive digital transformation strategy including a new responsive website, SEO optimization, and targeted content marketing.',
    results: [
      '200% increase in organic leads',
      '150% improvement in website conversion rate',
      '85% increase in organic search traffic',
      '45% reduction in cost per lead'
    ],
    services: [
      'Website Redesign',
      'SEO Optimization',
      'Content Strategy',
      'Lead Generation'
    ],
    testimonial: {
      quote: "MarkTechRover transformed our online presence completely. Their SEO and website work helped us double our leads within just a few months.",
      author: "Amanda Richards",
      role: "Marketing Director",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=300"
    },
    images: {
      main: getImagePath('project1.jpg'),
      additional: [
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    }
  },
  'dental-care': {
    title: 'Dental Care Clinic',
    subtitle: 'Digital Marketing Excellence',
    industry: 'Healthcare',
    duration: '4 months',
    challenge: 'Dental Care Clinic struggled to attract new patients and compete effectively in their local market despite offering premium dental services.',
    solution: 'We developed a multi-channel digital marketing strategy focusing on local SEO, PPC advertising, and social media engagement.',
    results: [
      'Doubled monthly patient acquisitions',
      '180% increase in website traffic',
      '95% improvement in Google Ads conversion rate',
      '60% increase in social media engagement'
    ],
    services: [
      'Local SEO',
      'Google Ads Management',
      'Social Media Marketing',
      'Content Creation'
    ],
    testimonial: {
      quote: "The ROI from our digital marketing campaigns has been exceptional. They understand our industry and deliver results that matter.",
      author: "Dr. James Wilson",
      role: "Owner",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=300"
    },
    images: {
      main: getImagePath('project2.jpg'),
      additional: [
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    }
  },
  'luxury-interiors': {
    title: 'Luxury Interior Design',
    subtitle: 'Brand Transformation Journey',
    industry: 'Interior Design',
    duration: '5 months',
    challenge: 'Luxury Interior Design needed to establish themselves as a premium service provider and attract high-end clients in a competitive market.',
    solution: 'We executed a complete brand overhaul including website redesign, premium content creation, and targeted social media campaigns.',
    results: [
      '250% increase in premium client inquiries',
      '200% growth in social media following',
      '175% improvement in website engagement',
      '80% increase in average project value'
    ],
    services: [
      'Brand Strategy',
      'Website Design',
      'Social Media Marketing',
      'Content Creation'
    ],
    testimonial: {
      quote: "Working with MarkTechRover helped us establish a premium brand identity that truly captures our essence. The results have exceeded our expectations.",
      author: "Maria Sanchez",
      role: "Founder",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=300"
    },
    images: {
      main: getImagePath('project3.jpg'),
      additional: [
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    }
  }
};

const CaseStudyPage = () => {
  const { slug } = useParams();
  const caseStudy = caseStudies[slug as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <Section className="pt-32">
        <div className="container text-center">
          <h2>Case Study Not Found</h2>
          <p className="mt-4">The requested case study could not be found.</p>
          <Link to="/portfolio" className="btn-accent btn-md mt-8">
            View All Case Studies
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <Section className="pt-32 bg-secondary">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
              {caseStudy.industry}
            </span>
            <h1 className="mb-4">{caseStudy.title}</h1>
            <p className="text-muted-foreground text-lg mb-6">
              {caseStudy.subtitle}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Duration: {caseStudy.duration}</span>
              <span>•</span>
              <span>Services: {caseStudy.services.join(', ')}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Main Image */}
      <Section className="bg-background pt-0">
        <div className="container">
          <div className="rounded-lg overflow-hidden">
            <img
              src={caseStudy.images.main}
              alt={caseStudy.title}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Challenge & Solution */}
      <Section className="bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground">{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
              <p className="text-muted-foreground">{caseStudy.solution}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Results */}
      <Section className="bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">The Results</h2>
            <p className="text-muted-foreground text-lg">
              Our strategy delivered exceptional results across key metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Key Achievements</h3>
              <div className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-success/20 flex items-center justify-center text-success flex-shrink-0 mt-0.5 mr-3">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Services Provided</h3>
              <div className="space-y-4">
                {caseStudy.services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5 mr-3">
                      <BarChart className="h-4 w-4" />
                    </div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Additional Images */}
      <Section className="bg-background">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.images.additional.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${caseStudy.title} - Gallery ${index + 1}`}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section className="bg-accent text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <svg
                className="h-12 w-12 text-white/80 mx-auto mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-white/90 mb-6">{caseStudy.testimonial.quote}</p>
              <div className="flex items-center justify-center">
                <img
                  src={caseStudy.testimonial.image}
                  alt={caseStudy.testimonial.author}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <p className="font-semibold">{caseStudy.testimonial.author}</p>
                  <p className="text-white/80">{caseStudy.testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-6">Ready to Achieve Similar Results?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can help your business reach its full potential with our proven digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-accent btn-lg">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/calculator" className="btn-secondary btn-lg">
                Try Our Calculator
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default CaseStudyPage;