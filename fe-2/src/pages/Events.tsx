import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Users, Calendar, Trophy } from 'lucide-react';

const events = [
  {
    id: '1',
    title: 'Cosplay Championship',
    description: 'Transform into your favorite superhero and compete for glory!',
    image: 'https://images.unsplash.com/photo-1535970793482-07de93762dc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Competition',
    date: '2024-04-15',
    maxParticipants: 100,
    prizePool: '$1000'
  },
  {
    id: '2',
    title: 'Comic Art Battle',
    description: 'Real-time art creation showdown between talented artists!',
    image: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Competition',
    date: '2024-04-16',
    maxParticipants: 50,
    prizePool: '$500'
  },
  {
    id: '3',
    title: 'Superhero Movie Marathon',
    description: 'Back-to-back screenings of epic superhero films!',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Entertainment',
    date: '2024-04-17',
    maxParticipants: 200,
    prizePool: null
  }
];

const categories = ['All', 'Competition', 'Entertainment'];

function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const filteredEvents = events.filter(event => 
    selectedCategory === 'All' || event.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary-100 dark:from-background dark:to-secondary-900">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Epic Events
        </motion.h1>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`comic-button ${
                selectedCategory === category 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-white dark:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05, rotate: hoveredEvent === event.id ? -2 : 0 }}
                onHoverStart={() => setHoveredEvent(event.id)}
                onHoverEnd={() => setHoveredEvent(null)}
                className="relative comic-border bg-white dark:bg-gray-800 overflow-hidden transform transition-all duration-300"
                style={{
                  boxShadow: hoveredEvent === event.id 
                    ? '8px 8px 0px 0px rgba(0,0,0,1)' 
                    : '4px 4px 0px 0px rgba(0,0,0,1)'
                }}
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 comic-border px-3 py-1 bg-primary-500 text-white transform rotate-3">
                    {event.category}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">{event.title}</h2>
                  <p className="mb-4">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-primary-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="text-primary-500" />
                      <span>Max {event.maxParticipants}</span>
                    </div>
                    {event.prizePool && (
                      <div className="flex items-center gap-2">
                        <Trophy className="text-primary-500" />
                        <span>{event.prizePool}</span>
                      </div>
                    )}
                  </div>

                  <Link
                    to={`/events/${event.id}`}
                    className="comic-button w-full flex items-center justify-center gap-2 group"
                  >
                    <span>Join Now</span>
                    <Zap className="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>

                {/* Comic-style decorative elements */}
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-black transform rotate-45"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-black transform rotate-45"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Events;