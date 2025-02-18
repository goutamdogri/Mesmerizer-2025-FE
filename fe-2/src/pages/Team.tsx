import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Zap } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Festival Director',
    power: 'Master of Events',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    socialLinks: {
      instagram: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Creative Director',
    power: 'Design Wizard',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    socialLinks: {
      instagram: '#',
      linkedin: '#'
    }
  }
];

const webVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  hover: { scale: 1.1, rotate: 5 }
};

function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary-100 dark:from-background dark:to-secondary-900 relative overflow-hidden">
      {/* Decorative web background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 border-2 border-gray-300 dark:border-gray-700 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 2 + 1})`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <motion.h1 
          className="text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Superhero Team
        </motion.h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={{
                initial: { opacity: 0, y: 50 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.2 } 
                },
                hover: { y: -20 }
              }}
              className="relative"
            >
              {/* Spider web effect */}
              <motion.div
                variants={webVariants}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gray-400 dark:bg-gray-600"
                style={{ transformOrigin: 'top' }}
              />
              
              <motion.div 
                className="comic-border bg-white dark:bg-gray-800 p-8 text-center relative"
                style={{ 
                  backgroundImage: 'radial-gradient(circle at 10px 10px, rgba(0,0,0,0.05) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              >
                <div className="relative inline-block mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover comic-border"
                  />
                  <motion.div
                    className="absolute -top-4 -right-4 bg-primary-500 comic-border p-2 rounded-full"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                <p className="text-primary-500 font-bold mb-2">{member.role}</p>
                <p className="text-sm mb-4">Superpower: {member.power}</p>
                
                <div className="flex justify-center space-x-4">
                  {member.socialLinks.instagram && (
                    <motion.a 
                      href={member.socialLinks.instagram}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="hover:text-primary-500"
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                  )}
                  {member.socialLinks.linkedin && (
                    <motion.a 
                      href={member.socialLinks.linkedin}
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      className="hover:text-primary-500"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  )}
                  {member.socialLinks.twitter && (
                    <motion.a 
                      href={member.socialLinks.twitter}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="hover:text-primary-500"
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>

                {/* Comic-style decorative elements */}
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-black transform rotate-45"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-black transform rotate-45"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;