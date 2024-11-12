"use client"
import React, { useState } from 'react';

export default function FileSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSearching(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Search query:', searchQuery);
    } catch (err) {
      setError('Search failed. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="bg-amber-50 text-amber-800 p-4 text-center rounded-md mb-8">
        🚧 This feature is currently under development 🚧
      </div>

      <div className="flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold">File Search</h1>
        <form onSubmit={handleSearch} className="flex gap-4 w-full max-w-2xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter file name to search..."
            className="flex-1 p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isSearching}
          />
          <button 
            type="submit" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md text-base font-medium hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
            disabled={isSearching || !searchQuery.trim()}
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>
        </form>
        {error && <div className="text-red-600 text-center">{error}</div>}
      </div>
    </div>
  );
}
