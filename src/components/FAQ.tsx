import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { generateFAQSchema } from '../utils/schema';

interface FAQProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
  title?: string;
}

export const FAQ = ({ items, title = 'Frequently Asked Questions' }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema(items))}
        </script>
      </Helmet>

      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-lg">{item.question}</span>
              <span className="transform transition-transform duration-200">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-400 whitespace-pre-wrap">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 