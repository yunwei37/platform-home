'use client'
import React, { useState } from 'react'
import SearchForm from '@/components/search/SearchForm'
import SearchResults from '@/components/search/SearchResults'
import { SearchResult } from '@/components/search/SearchResult'

export default function FileSearch() {
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<SearchResult[]>([])

  const handleSearch = async (query: string) => {
    setError(null)
    setIsSearching(true)
    setResults([])

    try {
      const response = await fetch(`/api/search?term=${encodeURIComponent(query)}`)
      if (!response.ok) {
        throw new Error('Search failed')
      }
      const data: SearchResult[] = await response.json()
      setResults(data)
    } catch (err) {
      setError('Search failed. Please try again.')
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <div className="mx-auto max-w-7xl p-8">
      <div className="mb-8 rounded-md bg-amber-50 p-4 text-center text-amber-800">
        🚧 Experimental 🚧
      </div>

      <div className="flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold">File Search</h1>
        <SearchForm onSearch={handleSearch} isSearching={isSearching} />
        <SearchResults results={results} error={error} />
      </div>
    </div>
  )
}
