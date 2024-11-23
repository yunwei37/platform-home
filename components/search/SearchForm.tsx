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
        className="flex-grow rounded-md border border-gray-300 border-gray-300 bg-white 
          p-3 text-base 
          text-gray-900 placeholder-gray-500
          focus:outline-none focus:ring-2
          focus:ring-blue-500 disabled:cursor-not-allowed 
          disabled:opacity-60 dark:border-gray-600
          dark:bg-gray-800 dark:text-gray-100
          dark:placeholder-gray-400 dark:focus:ring-blue-400"
        placeholder="Enter your search query"
        disabled={isSearching}
      />
      <button
        type="submit"
        disabled={isSearching}
        className="rounded-md bg-blue-600 px-6 
          py-3 text-base font-medium text-white 
          transition-colors duration-200 hover:bg-blue-700
          disabled:cursor-not-allowed disabled:opacity-60
          dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        {isSearching ? 'Searching...' : 'Search'}
      </button>
    </form>
  )
}
