import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Search, Zap, Layout, FileText, Brain, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Scale,
    title: 'Legal Document Analysis',
    description: 'Upload multiple legal documents and get instant summaries, insights, and cross-references.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Brain,
    title: 'AI-Powered Research',
    description: 'Natural language processing understands complex legal queries and provides accurate, relevant results.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Shield,
    title: 'Explainable AI (XAI)',
    description: 'Transparent reasoning with citations to source documents, ensuring reliability and trust.',
    image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: FileText,
    title: 'Document Generation',
    description: 'Draft legal documents effortlessly with AI assistance, including appeals, contracts, and submissions.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
  },
];

const stats = [
  { label: 'Legal Documents', value: '10M+' },
  { label: 'Parameters', value: '7-70Bn' },
  { label: 'Tokens of Data', value: '20Bn+' },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Legal Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the next generation of legal research with our custom-trained LLM,
            specifically built for the legal domain.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-blue-50 rounded-2xl text-center transform hover:scale-105 transition-all"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  />
                </div>
                <div className="relative p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transparent AI Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-blue-600 text-sm font-medium">
              Transparent & Reliable AI
            </span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            How Legaleaze Ensures Reliability
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI provides clear explanations of its reasoning, including citations
            to source documents and consideration of opposing views.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;