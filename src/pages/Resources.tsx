import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Download } from 'lucide-react';

const resources = [
  {
    category: 'Guides & Tutorials',
    items: [
      {
        icon: BookOpen,
        title: 'Getting Started with Legaleaze',
        description: 'Learn the basics of using our AI-powered legal research platform.',
        link: '#',
      },
      {
        icon: FileText,
        title: 'Advanced Search Techniques',
        description: 'Master the art of efficient legal research with our advanced features.',
        link: '#',
      },
      {
        icon: Video,
        title: 'Video Tutorials',
        description: 'Watch step-by-step guides on using Legaleaze effectively.',
        link: '#',
      },
    ],
  },
  {
    category: 'Documentation',
    items: [
      {
        icon: Download,
        title: 'API Documentation',
        description: 'Technical documentation for integrating Legaleaze into your workflow.',
        link: '#',
      },
      {
        icon: FileText,
        title: 'Best Practices',
        description: 'Learn how to make the most of Legaleaze for your legal research.',
        link: '#',
      },
    ],
  },
];

const Resources = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Resources & Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to get started and make the most of Legaleaze.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {resources.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      href={item.link}
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;