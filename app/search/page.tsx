'use client'
import React, { useState } from 'react'

export default function FileSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSearching(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Search query:', searchQuery)
    } catch (err) {
      setError('Search failed. Please try again.')
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <div className="mx-auto max-w-7xl p-8">
      <div className="mb-8 rounded-md bg-amber-50 p-4 text-center text-amber-800">
        🚧 This feature is currently under development 🚧
      </div>

      <div className="flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold">File Search</h1>
        <form onSubmit={handleSearch} className="w-full max-w-2xl gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-md border border-gray-300 p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            placeholder="Enter your search query"
            disabled={isSearching}
          />
          <button
            type="submit"
            disabled={isSearching}
            className="rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>
          {error && <p className="text-center text-red-600">{error}</p>}
        </form>
      </div>
    </div>
  )
}
