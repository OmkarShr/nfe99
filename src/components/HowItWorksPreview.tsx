import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, FileText, ArrowRight } from 'lucide-react';
import Button from './Button';

const steps = [
  {
    icon: MessageSquare,
    title: 'Ask Your Question',
    description: 'Input your legal query in plain English. Our AI understands context and legal terminology.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Search,
    title: 'AI Analysis',
    description: 'Advanced algorithms analyze millions of legal documents to find relevant information.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: FileText,
    title: 'Get Results',
    description: 'Receive comprehensive answers with citations to relevant laws and cases.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
  },
];

const HowItWorksPreview = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Legaleaze Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-driven legal research in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-6">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link to="/how-it-works">
            <Button variant="primary" icon={ArrowRight}>
              Learn More About How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPreview;