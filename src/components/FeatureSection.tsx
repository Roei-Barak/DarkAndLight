import React from 'react';
import { MonitorSmartphone, Palette, Moon, Sun, Zap } from 'lucide-react';

const features = [
  {
    title: 'Seamless Theme Switching',
    description: 'Switch between light and dark mode with a single click, with smooth transitions between states.',
    icon: (className: string) => <Sun className={className} />,
    iconDark: (className: string) => <Moon className={className} />
  },
  {
    title: 'Responsive Design',
    description: 'Our layouts automatically adapt to any screen size, from mobile to desktop workstations.',
    icon: (className: string) => <MonitorSmartphone className={className} />
  },
  {
    title: 'Beautiful Color System',
    description: 'Carefully crafted color palette that maintains perfect contrast and readability in both themes.',
    icon: (className: string) => <Palette className={className} />
  },
  {
    title: 'Optimized Performance',
    description: 'Lightweight implementation that doesn\'t slow down your application or user experience.',
    icon: (className: string) => <Zap className={className} />
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 transition-colors duration-300 ease-in-out
                          bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Designed for Both <span className="text-indigo-600 dark:text-indigo-400">Light & Dark</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our theming system adapts to your preferences with carefully designed elements that look 
            great in any environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl
                                     transition-all duration-300 ease-in-out
                                     hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-none dark:hover:bg-gray-800">
              <div className="mb-4 bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg inline-block">
                {feature.iconDark && (
                  <>
                    <span className="dark:hidden">
                      {feature.icon("h-6 w-6 text-indigo-600")}
                    </span>
                    <span className="hidden dark:inline">
                      {feature.iconDark("h-6 w-6 text-indigo-400")}
                    </span>
                  </>
                )}
                {!feature.iconDark && feature.icon("h-6 w-6 text-indigo-600 dark:text-indigo-400")}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;