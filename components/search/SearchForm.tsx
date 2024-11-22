import React, { useState } from 'react'

interface SearchFormProps {
  onSearch: (query: string) => void
  isSearching: boolean
}

export default function SearchForm({ onSearch, isSearching }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl gap-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-grow rounded-md border border-gray-300 p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
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
    </form>
  )
}
