import React from 'react'

interface SearchResultsProps {
  results: any[]
  error: string | null
}

export default function SearchResults({ results, error }: SearchResultsProps) {
  return (
    <div className="w-full max-w-2xl">
      {error && <p className="text-center text-red-600">{error}</p>}
      {results.length > 0 && (
        <ul className="mt-6 space-y-4">
          {results.map((result, index) => (
            <li key={index} className="rounded-md border border-gray-300 p-4">
              <h2 className="text-lg font-bold">{result.url}</h2>
              <p className="text-sm text-gray-600">{result.description}</p>
              <p className="text-sm text-gray-600">
                <strong>Author:</strong> {result.author}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Date:</strong> {result.date}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Region:</strong> {result.region}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Format:</strong> {result.format}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Size:</strong> {result.size} bytes
              </p>
              <p className="text-sm text-gray-600">
                <strong>Tags:</strong> {result.tags.join(', ')}
              </p>
              <a href={result.link} className="text-blue-600 hover:underline">
                View Document
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
