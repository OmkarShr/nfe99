import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Legal Research?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Join thousands of legal professionals who are already using Legaleaze to streamline their research process.
        </p>
        <Button
          variant="secondary"
          icon={ArrowRight}
          onClick={() => navigate('/signup')}
          className="bg-white text-blue-600 hover:bg-blue-50"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;