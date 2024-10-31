import React from 'react';
import { ArrowRight, Sparkles, Database, Brain, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero = () => {
  const stats = [
    { value: '10M+', label: 'Legal Documents', icon: Database },
    { value: '20Bn+', label: 'Data Points', icon: Brain },
    { value: '99.9%', label: 'Accuracy Rate', icon: Shield },
  ];

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-gradient" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-blue-100/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: 0 
            }}
            animate={{ 
              x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              scale: [1, 1.2, 1] 
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-8"
          >
            <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-blue-600 text-sm font-medium">Now in Beta</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600 animate-gradient bg-[length:200%_auto]">
              LLM Solution Built
              <br />
              Specifically for Law
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Trained on over 10 million legal documents with 20Bn+ tokens of data.
            Experience unparalleled accuracy in legal research with our custom-trained model.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              variant="primary" 
              icon={ArrowRight}
              className="group transform hover:scale-105 transition-all"
            >
              Sign Up for Beta Access
            </Button>
            <Button 
              variant="secondary"
              className="group transform hover:scale-105 transition-all"
            >
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100"
                >
                  <Icon className="h-8 w-8 text-blue-600 mb-2" />
                  <span className="font-bold text-3xl text-gray-900">{stat.value}</span>
                  <span className="text-gray-600">{stat.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;