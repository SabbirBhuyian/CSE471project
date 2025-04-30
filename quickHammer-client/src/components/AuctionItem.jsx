import React from 'react';
import CountdownTimer from './CountdownTimer';
import { FaHeart, FaEye, FaGavel } from 'react-icons/fa';

const AuctionItem = ({ item }) => {
  return (
    <div className="auction-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-amber-200">
      <div className="relative">
        <img 
          src={item.imageUrl || 'https://via.placeholder.com/300x200'} 
          alt={item.title} 
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          <button className="bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-amber-600">
            <FaHeart className="w-4 h-4" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-amber-600">
            <FaEye className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center pulse-live">
          <FaGavel className="mr-1" />
          <span>LIVE</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{item.title}</h3>
          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
            {item.category || 'Antique'}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-500">Current Bid</span>
            <span className="text-sm font-medium text-gray-700">{item.bidCount} bids</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-amber-600">${item.currentBid?.toLocaleString() || item.startingBid?.toLocaleString()}</span>
            <CountdownTimer endTime={item.endTime} />
          </div>
        </div>
        
        <button className="w-full btn-primary flex items-center justify-center">
          <FaGavel className="mr-2" />
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default AuctionItem;