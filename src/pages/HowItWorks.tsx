import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, FileText, BookOpen, Scale, Zap } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Natural Language Queries',
    description: 'Ask questions in plain English, just like you would ask a colleague.',
  },
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Our AI understands context and finds relevant legal information instantly.',
  },
  {
    icon: FileText,
    title: 'Comprehensive Results',
    description: 'Get detailed answers with citations to relevant laws and cases.',
  },
  {
    icon: BookOpen,
    title: 'Legal Library',
    description: 'Access millions of legal documents, including statutes and case law.',
  },
  {
    icon: Scale,
    title: 'Case Analysis',
    description: 'Understand precedents and their implications for your case.',
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'Stay current with the latest legal developments and amendments.',
  },
];

const HowItWorks = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              How Legaleaze Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI-powered platform revolutionizes legal research,
              making it faster, more accurate, and more accessible than ever before.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-6">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See Legaleaze in Action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how Legaleaze transforms complex legal research into simple, actionable insights.
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-2xl overflow-hidden">
            {/* Replace with actual video embed */}
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-600">Demo Video Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;