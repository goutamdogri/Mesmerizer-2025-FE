import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            
            <div className="flex items-center space-x-4">
              <Mail className="text-primary-500" />
              <span>contact@comicfest.com</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="text-primary-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="text-primary-500" />
              <span>123 Comic Street, Creativity City</span>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <a href="#" className="comic-button flex items-center space-x-2">
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a href="#" className="comic-button flex items-center space-x-2">
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="comic-border bg-white dark:bg-gray-800 p-6"
          >
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 comic-border"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 comic-border"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full p-2 comic-border h-32"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="comic-button w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;