import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGavel } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <FaGavel className="text-amber-600 text-2xl mr-2" />
              <span className="text-2xl font-heading text-white">
                Quick<span className="text-amber-600">Hammer</span>
              </span>
            </div>
            <p className="mb-4">
              The premier online auction platform for unique items and collectibles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Live Auctions', 'Categories', 'Sell Now'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Art', 'Jewelry', 'Collectibles', 'Electronics', 'Fashion'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <address className="not-italic">
              <p className="mb-2">123 Auction Street</p>
              <p className="mb-2">New York, NY 10001</p>
              <p className="mb-2">Email: info@quickhammer.com</p>
              <p>Phone: (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} QuickHammer. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-amber-500">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-amber-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;