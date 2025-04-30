import React from 'react';
import { Link } from 'react-router-dom';
import AuctionItem from '../components/AuctionItem';
import { FaGavel, FaPlus, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  // Sample auction data
  const featuredAuctions = [
    {
      id: 1,
      title: 'Vintage Rolex Submariner',
      description: '1960s Rolex Submariner in excellent condition with original box and papers. A collector\'s dream timepiece.',
      imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      currentBid: 12500,
      startingBid: 10000,
      bidCount: 24,
      endTime: new Date(Date.now() + 86400000 * 2).toISOString(), // 2 days from now
      category: 'Watches'
    },
    {
      id: 2,
      title: 'Rare Picasso Sketch',
      description: 'Original pencil sketch by Pablo Picasso from his Blue Period. Certificate of authenticity included.',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      currentBid: 8750,
      startingBid: 5000,
      bidCount: 18,
      endTime: new Date(Date.now() + 86400000 * 1).toISOString(), // 1 day from now
      category: 'Art'
    },
    {
      id: 3,
      title: 'Signed Michael Jordan Jersey',
      description: 'Game-worn and signed Chicago Bulls jersey from the 1996 championship season. Framed with COA.',
      imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      currentBid: 3200,
      startingBid: 2500,
      bidCount: 42,
      endTime: new Date(Date.now() + 86400000 * 3).toISOString(), // 3 days from now
      category: 'Sports'
    },
    {
      id: 4,
      title: 'Antique Persian Rug',
      description: '19th century hand-woven Persian rug in excellent condition. 8x10 feet with vibrant colors.',
      imageUrl: 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      currentBid: 4500,
      startingBid: 3000,
      bidCount: 15,
      endTime: new Date(Date.now() + 86400000 * 5).toISOString(), // 5 days from now
      category: 'Home'
    },
  ];

  const endingSoonAuctions = [...featuredAuctions].sort((a, b) => new Date(a.endTime) - new Date(b.endTime));

  const categories = [
    { name: 'Art', icon: '🎨', count: 124 },
    { name: 'Jewelry', icon: '💎', count: 89 },
    { name: 'Collectibles', icon: '🏆', count: 215 },
    { name: 'Electronics', icon: '📱', count: 76 },
    { name: 'Fashion', icon: '👗', count: 142 },
    { name: 'Home', icon: '🏠', count: 93 },
    { name: 'Sports', icon: '⚽', count: 67 },
    { name: 'Vehicles', icon: '🚗', count: 34 },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-700 to-amber-800 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight">
            Bid & Win with <br className="hidden md:block" /><span className="text-amber-300">QuickHammer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            The fastest way to auction rare items and collectibles. Real-time bidding with instant updates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/auctions" className="btn-primary inline-flex items-center justify-center">
              <FaGavel className="mr-2" />
              Browse Auctions
            </Link>
            <Link to="/sell" className="btn-secondary inline-flex items-center justify-center">
              <FaPlus className="mr-2" />
              Sell an Item
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Auctions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-heading text-gray-900">Featured Auctions</h2>
            <Link to="/auctions" className="text-amber-600 hover:text-amber-700 flex items-center">
              View all <FaArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAuctions.map((item) => (
              <AuctionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Ending Soon Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-heading text-gray-900">Ending Soon</h2>
            <Link to="/auctions?filter=ending-soon" className="text-amber-600 hover:text-amber-700 flex items-center">
              View all <FaArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {endingSoonAuctions.map((item) => (
              <AuctionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading text-gray-900 mb-8 text-center">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                to={`/categories/${category.name.toLowerCase()}`}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="bg-amber-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-100 transition-colors duration-300">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">{category.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{category.count} items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Ready to Start Selling?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            List your items for auction and reach thousands of potential buyers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/sell" className="btn-primary inline-flex items-center justify-center bg-white text-amber-700 hover:bg-gray-100">
              <FaPlus className="mr-2" />
              Sell an Item Now
            </Link>
            <Link to="/how-it-works" className="btn-secondary inline-flex items-center justify-center border-white text-white hover:bg-white hover:text-amber-700">
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-amber-400 mb-2">10,000+</div>
              <div className="text-gray-300">Active Bidders</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-amber-400 mb-2">95%</div>
              <div className="text-gray-300">Seller Success Rate</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-amber-400 mb-2">$50M+</div>
              <div className="text-gray-300">In Annual Sales</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;