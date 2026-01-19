import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, Clock } from 'lucide-react';
import Section from '../components/ui/Section';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <Section className="pt-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="mb-4">Contact Digital Marketing Agency India</h1>
            <p className="text-muted-foreground text-lg">
              Have a question or ready to get started? Reach out to our team today.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Contact Info & Form */}
      <Section className="bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you're interested in our services, have a question, or just want to say hello, 
                we'd love to hear from you. Fill out the form, and our team will get back to you shortly.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:contact@marktechrover.com" className="hover:text-accent">
                       info@marktechrover.com

                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+15551234567" className="hover:text-accent">
                        +91 8826790981
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      C-83, Shivalik Colony Malviya Nagar,
                     <br />
                      New Delhi 110017
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5 mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 3:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Google Map Embed */}
              {/* <div className="rounded-lg overflow-hidden h-64 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98255806447!2d-122.50764017948533!3d37.75781499657441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1634065779831!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="MarkTechRover Office Location"
                ></iframe>
              </div> */}
            </div>
            
            {/* Contact Form */}
            <div className="bg-secondary p-8 rounded-lg">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="h-16 w-16 rounded-full bg-success/20 flex items-center justify-center text-success mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: '',
                        message: ''
                      });
                    }}
                    className="btn-accent btn-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Full Name <span className="text-error">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address <span className="text-error">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="service" className="block text-sm font-medium mb-1">
                        Service Interested In <span className="text-error">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                      >
                        <option value="">Select a service</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="ppc">PPC & AI Ads</option>
                        <option value="web">Website Development</option>
                        <option value="social">Social Media Marketing</option>
                        <option value="email">Email Marketing</option>
                        <option value="brand">Brand Strategy</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message <span className="text-error">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn-accent btn-md w-full flex items-center justify-center">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </Section>
      
      {/* Schedule a Call Section */}
      <Section className="bg-accent text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">Schedule a Call</h2>
              <p className="text-white/90 mb-6">
                Prefer to talk directly? Schedule a call with one of our digital marketing 
                experts at a time that works for you.
              </p>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0 mr-4">
                  <Calendar className="h-5 w-5" />
                </div>
                <p className="text-white/90">
                  Select a convenient time from our calendar, and we'll confirm your appointment.
                </p>
              </div>
              <button
                onClick={() => alert('Calendar functionality would open here!')}
                className="btn-lg bg-white text-accent hover:bg-white/90"
              >
                Schedule a 30-Minute Consultation
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-white text-xl font-semibold mb-6">What to Expect</h3>
              <ul className="space-y-4">
                {[
                  'A deep dive into your business goals and challenges',
                  'Expert insights tailored to your industry and target audience',
                  'Actionable strategies you can implement right away',
                  'No pressure sales tactics - just valuable information',
                  'A clear understanding of how we can help you achieve your goals',
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-white/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default ContactPage;