import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { formatCurrency } from '../../lib/utils';

interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  options?: {
    id: string;
    name: string;
    price: number;
  }[];
}

const CostCalculator = () => {
  const services: Service[] = [
    {
      id: 'website',
      name: 'Website Development',
      description: 'Professional, responsive website design and development',
      basePrice: 2500,
      options: [
        { id: 'basic', name: 'Basic (5 pages)', price: 0 },
        { id: 'standard', name: 'Standard (10 pages)', price: 1500 },
        { id: 'premium', name: 'Premium (15+ pages)', price: 3000 },
      ],
    },
    {
      id: 'seo',
      name: 'SEO Optimization',
      description: 'On-page and off-page SEO to improve search engine ranking',
      basePrice: 800,
      options: [
        { id: 'basic', name: 'Basic', price: 0 },
        { id: 'standard', name: 'Standard', price: 700 },
        { id: 'premium', name: 'Premium', price: 1200 },
      ],
    },
    {
      id: 'ppc',
      name: 'PPC Advertising',
      description: 'Paid advertising campaigns on Google, Meta, and other platforms',
      basePrice: 1000,
      options: [
        { id: 'basic', name: 'Basic', price: 0 },
        { id: 'standard', name: 'Standard', price: 500 },
        { id: 'premium', name: 'Premium', price: 1000 },
      ],
    },
    {
      id: 'social',
      name: 'Social Media Management',
      description: 'Content creation and management for social media platforms',
      basePrice: 600,
      options: [
        { id: 'basic', name: 'Basic (2 platforms)', price: 0 },
        { id: 'standard', name: 'Standard (4 platforms)', price: 400 },
        { id: 'premium', name: 'Premium (6+ platforms)', price: 900 },
      ],
    },
    {
      id: 'email',
      name: 'Email Marketing',
      description: 'Email campaign setup, automation, and management',
      basePrice: 500,
      options: [
        { id: 'basic', name: 'Basic', price: 0 },
        { id: 'standard', name: 'Standard', price: 300 },
        { id: 'premium', name: 'Premium', price: 700 },
      ],
    },
  ];

  const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({});
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const TAX_RATE = 0.18; // 18% GST

  useEffect(() => {
    // Calculate total based on selected services and options
    let calculatedTotal = 0;
    
    Object.entries(selectedServices).forEach(([serviceId, isSelected]) => {
      if (isSelected) {
        const service = services.find(s => s.id === serviceId);
        if (service) {
          calculatedTotal += service.basePrice;
          
          // Add option price if selected
          const selectedOption = selectedOptions[serviceId];
          if (selectedOption && service.options) {
            const option = service.options.find(o => o.id === selectedOption);
            if (option) {
              calculatedTotal += option.price;
            }
          }
        }
      }
    });
    
    const calculatedTax = calculatedTotal * TAX_RATE;
    const calculatedGrandTotal = calculatedTotal + calculatedTax;
    
    setTotal(calculatedTotal);
    setTax(calculatedTax);
    setGrandTotal(calculatedGrandTotal);
  }, [selectedServices, selectedOptions]);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
    
    // If service is deselected, also reset its option
    if (selectedServices[serviceId]) {
      setSelectedOptions(prev => {
        const newOptions = { ...prev };
        delete newOptions[serviceId];
        return newOptions;
      });
    } else {
      // If service is selected, set default option to 'basic'
      setSelectedOptions(prev => ({
        ...prev,
        [serviceId]: 'basic'
      }));
    }
  };

  const handleOptionChange = (serviceId: string, optionId: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [serviceId]: optionId
    }));
  };

  return (
    <div className="bg-background border border-border rounded-lg overflow-hidden shadow-sm">
      <div className="p-6 border-b border-border">
        <h3 className="text-xl font-semibold mb-2">Project Cost Calculator</h3>
        <p className="text-muted-foreground">
          Select the services you're interested in to get an estimated cost for your project.
        </p>
      </div>
      
      <div className="p-6">
        <div className="space-y-6 mb-8">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-border rounded-md p-4"
            >
              <div className="flex items-start mb-3">
                <div className="flex items-center h-5">
                  <input
                    id={`service-${service.id}`}
                    type="checkbox"
                    checked={selectedServices[service.id] || false}
                    onChange={() => handleServiceToggle(service.id)}
                    className="h-4 w-4 text-accent rounded border-border focus:ring-accent"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <label htmlFor={`service-${service.id}`} className="font-medium">
                    {service.name} - {formatCurrency(service.basePrice)}
                  </label>
                  <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                </div>
              </div>
              
              {/* Options */}
              {selectedServices[service.id] && service.options && (
                <div className="ml-7 mt-3 space-y-2">
                  <p className="text-sm font-medium mb-2">Select an option:</p>
                  {service.options.map((option) => (
                    <div key={option.id} className="flex items-center">
                      <input
                        id={`option-${service.id}-${option.id}`}
                        name={`option-${service.id}`}
                        type="radio"
                        checked={selectedOptions[service.id] === option.id}
                        onChange={() => handleOptionChange(service.id, option.id)}
                        className="h-4 w-4 text-accent border-border focus:ring-accent"
                      />
                      <label
                        htmlFor={`option-${service.id}-${option.id}`}
                        className="ml-2 text-sm"
                      >
                        {option.name}
                        {option.price > 0 && ` (+${formatCurrency(option.price)})`}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Summary */}
        <div className="bg-secondary p-4 rounded-md">
          <h4 className="font-medium mb-3">Cost Summary</h4>
          <div className="space-y-2 mb-3">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax (18% GST):</span>
              <span>{formatCurrency(tax)}</span>
            </div>
            <div className="h-px bg-border my-2"></div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>{formatCurrency(grandTotal)}</span>
            </div>
          </div>
          
          <button
            className="w-full btn-accent btn-md mt-4"
            onClick={() => alert('Thank you for your interest! A detailed quote has been prepared. Please schedule a call to discuss further.')}
          >
            Get Detailed Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;