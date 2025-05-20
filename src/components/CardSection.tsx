import React from 'react';

const cards = [
  {
    title: 'Design System',
    description: 'A comprehensive design system with components that adapt beautifully to both light and dark modes.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'Design'
  },
  {
    title: 'Color Theory',
    description: 'Learn how we select complementary colors that work perfectly across different themes and scenarios.',
    image: 'https://images.pexels.com/photos/1927574/pexels-photo-1927574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'Education'
  },
  {
    title: 'Accessibility',
    description: 'Our themes are built with accessibility in mind, ensuring everyone can use your application effectively.',
    image: 'https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'Features'
  }
];

const CardSection: React.FC = () => {
  return (
    <section id="cards" className="py-16 md:py-24 transition-colors duration-300 ease-in-out
                        bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Content That <span className="text-indigo-600 dark:text-indigo-400">Adapts</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            From cards to content blocks, everything adjusts perfectly to match your selected theme.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
                                     shadow-md hover:shadow-xl transition-all duration-300 ease-in-out
                                     dark:shadow-gray-900/30">
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out
                           hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 
                                  text-xs font-medium rounded-full">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {card.description}
                </p>
                <a 
                  href="#" 
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 
                           dark:hover:text-indigo-300 transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;