import React from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { Layers } from 'lucide-react';

const Header: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out
                       bg-white/90 dark:bg-gray-900/90 backdrop-blur-md
                       border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Layers className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">ThemeSwitch</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
            Features
          </a>
          <a href="#cards" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
            Cards
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button className="hidden md:inline-flex px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 
                           text-white font-medium transition-colors duration-300 ease-in-out
                           dark:bg-indigo-500 dark:hover:bg-indigo-600">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;