import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Scale } from 'lucide-react';
import Button from '../components/Button';

const SignUp = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <Scale className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join Legaleaze Beta
            </h1>
            <p className="text-xl text-gray-600">
              Be among the first to experience the future of legal research
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <Button
                variant="secondary"
                onClick={signInWithGoogle}
                className="w-full justify-center"
              >
                Sign up with Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Beta access includes
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-2 w-2 bg-blue-600 rounded-full" />
                  </div>
                  <p className="ml-3 text-gray-600">Early access to all features</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-2 w-2 bg-blue-600 rounded-full" />
                  </div>
                  <p className="ml-3 text-gray-600">Priority support</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-2 w-2 bg-blue-600 rounded-full" />
                  </div>
                  <p className="ml-3 text-gray-600">Exclusive beta user benefits</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            By signing up, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;