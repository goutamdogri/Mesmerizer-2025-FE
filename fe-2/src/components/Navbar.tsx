import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

function Navbar() {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-primary-500" />
            <span className="text-xl font-bold">ComicFest</span>
          </Link>

          <div className="hidden md:flex space-x-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="relative px-4 py-2"
              >
                {location.pathname === to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 comic-border bg-primary-500 -z-10"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className={location.pathname === to ? 'text-white' : ''}>
                  {label}
                </span>
              </Link>
            ))}
          </div>

          <button className="comic-button md:hidden">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;