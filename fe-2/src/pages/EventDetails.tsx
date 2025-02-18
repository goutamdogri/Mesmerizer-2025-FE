import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

function EventDetails() {
  const { id } = useParams();

  // Dummy event data (replace with actual data fetching)
  const event = {
    id,
    title: 'Cosplay Championship',
    description: 'Show off your best superhero costume and compete for amazing prizes!',
    date: '2024-04-15',
    venue: 'Main Auditorium',
    maxTeamSize: 4,
    image: 'https://images.unsplash.com/photo-1535970793482-07de93762dc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rules: [
      'Original costumes only',
      'Pre-registration required',
      'Maximum 5 minutes on stage',
      'Props must be safe and approved'
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 md:h-96 object-cover comic-border mb-8"
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <p className="text-lg mb-6">{event.description}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="text-primary-500" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-primary-500" />
                <span>{event.venue}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-primary-500" />
                <span>Team Size: up to {event.maxTeamSize} members</span>
              </div>
            </div>

            <div className="comic-border p-6 bg-white dark:bg-gray-800 mb-8">
              <h2 className="text-2xl font-bold mb-4">Rules</h2>
              <ul className="list-disc list-inside space-y-2">
                {event.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="comic-border p-6 bg-white dark:bg-gray-800 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Ready to Participate?</h2>
              <p className="mb-4">Join this epic event and showcase your talent!</p>
              <Link
                to={`/register/${event.id}`}
                className="comic-button w-full text-center"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default EventDetails;