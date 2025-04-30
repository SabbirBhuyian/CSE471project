import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-heading text-amber-700">
                Quick<span className="text-gray-800">Hammer</span>
              </span>
              <span className="ml-2 bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                BETA
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/auctions" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">
              Live Auctions
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">
              Categories
            </Link>
            <Link to="/sell" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">
              Sell Now
            </Link>
            <div className="flex space-x-4 ml-4">
              <Link to="/login" className="btn-secondary">
                Login
              </Link>
              <Link to="/register" className="btn-primary">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;