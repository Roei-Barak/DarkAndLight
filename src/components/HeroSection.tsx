import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 transition-colors duration-300 ease-in-out
                        bg-gradient-to-b from-indigo-50 to-white
                        dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6
                        text-gray-900 dark:text-white">
            Experience Both <span className="text-indigo-600 dark:text-indigo-400">Worlds</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
            Seamlessly switch between light and dark mode with our beautiful theme system.
            Designed for maximum readability and aesthetic appeal in any environment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 
                             text-white font-medium transition-colors duration-300 ease-in-out
                             dark:bg-indigo-500 dark:hover:bg-indigo-600 flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-300 
                             hover:bg-gray-100 text-gray-900 font-medium transition-colors duration-300 ease-in-out
                             dark:border-gray-700 dark:hover:bg-gray-800 dark:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;