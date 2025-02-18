import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Cosplay'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1594736797933-d0501398b173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Events'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1535970793482-07de93762dc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Performances'
  }
];

function Gallery() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="comic-border overflow-hidden"
          >
            <img
              src={image.src}
              alt={`Gallery ${image.id}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white dark:bg-gray-800">
              <span className="comic-border px-2 py-1 text-sm">
                {image.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;