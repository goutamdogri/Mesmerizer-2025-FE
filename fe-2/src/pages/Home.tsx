import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { Zap, Calendar, Users, MapPin } from 'lucide-react';

const FEST_DATE = new Date('2024-04-15');

function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeLeft({
        days: differenceInDays(FEST_DATE, now),
        hours: differenceInHours(FEST_DATE, now) % 24,
        minutes: differenceInMinutes(FEST_DATE, now) % 60,
        seconds: differenceInSeconds(FEST_DATE, now) % 60
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section with Comic Background */}
      <div 
        className="min-h-screen relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 comic-dots opacity-30"></div>
        
        <div className="container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 comic-border bg-primary-500 inline-block px-8 py-4 transform -rotate-2">
              COMICFEST 2024
            </h1>
            
            <p className="text-2xl md:text-3xl mb-12 speech-bubble inline-block">
              Where Heroes Unite & Creativity Ignites! 🚀
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="comic-border bg-white p-4 text-black transform hover:-rotate-3 transition-transform">
                  <div className="text-4xl font-bold">{value}</div>
                  <div className="text-sm uppercase">{unit}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-secondary-100 dark:bg-secondary-900"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About ComicFest</h2>
              <p className="text-lg mb-6">
                Join us for the most epic cultural festival that brings together comic lovers,
                artists, and performers from across the globe. Experience three days of
                non-stop entertainment, competitions, and celebration!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="comic-border p-4 bg-white dark:bg-gray-800">
                  <Calendar className="w-8 h-8 mb-2 text-primary-500" />
                  <h3 className="font-bold">3 Days</h3>
                  <p>Of Epic Events</p>
                </div>
                <div className="comic-border p-4 bg-white dark:bg-gray-800">
                  <Users className="w-8 h-8 mb-2 text-primary-500" />
                  <h3 className="font-bold">1000+</h3>
                  <p>Participants</p>
                </div>
                <div className="comic-border p-4 bg-white dark:bg-gray-800">
                  <Zap className="w-8 h-8 mb-2 text-primary-500" />
                  <h3 className="font-bold">50+</h3>
                  <p>Events</p>
                </div>
                <div className="comic-border p-4 bg-white dark:bg-gray-800">
                  <MapPin className="w-8 h-8 mb-2 text-primary-500" />
                  <h3 className="font-bold">1 Venue</h3>
                  <p>Endless Fun</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0501398b173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Comic Convention"
                className="comic-border rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 comic-border p-4 text-white transform rotate-6">
                <span className="text-xl font-bold">Join the Adventure!</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;