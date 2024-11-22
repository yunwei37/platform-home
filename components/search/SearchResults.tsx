import React, { useState } from 'react'

export interface Result {
  url: string
  title: string
  description: string
  author: string
  date: string
  region: string
  format: string
  size: number
  tags: string[]
  link: string
}

interface SearchResultsProps {
  results: Result[]
  error: string | null
}

const RESULTS_PER_PAGE = 20

export default function SearchResults({ results, error }: SearchResultsProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(results.length / RESULTS_PER_PAGE)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE
  const currentResults = results.slice(startIndex, startIndex + RESULTS_PER_PAGE)

  return (
    <div className="mx-auto w-full max-w-2xl">
      {error && <p className="text-center text-red-600">{error}</p>}
      <p className="text-center text-gray-600">Total Results: {results.length}</p>
      {results.length > 0 && (
        <>
          <ul className="mt-6 space-y-6">
            {currentResults.map((result, index) => {
              const urlParts = result.url.split('/')
              const fileName = urlParts[urlParts.length - 1]
              const filePath = urlParts.slice(3, urlParts.length - 1).join('/')
              const getDomainName = (url: string) => {
                try {
                  return new URL(url).hostname
                } catch (e) {
                  return 'Invalid URL'
                }
              }

              const domainName = getDomainName(result.url)

              return (
                <li key={index} className="border-b border-gray-300 pb-4">
                  <a href={result.url} className="text-lg font-bold text-blue-600 hover:underline">
                    {result.title || fileName}
                  </a>
                  <p className="text-sm text-gray-600">{result.url}</p>
                  <p className="mt-2 text-sm text-gray-800">{result.description}</p>
                  <div className="mt-2 text-sm text-gray-600">
                    <span>
                      <strong>Author:</strong> {result.author}
                    </span>{' '}
                    |
                    <span>
                      <strong> Date:</strong> {result.date}
                    </span>{' '}
                    |
                    <span>
                      <strong> Region:</strong> {result.region}
                    </span>{' '}
                    |
                    <span>
                      <strong> Format:</strong> {result.format}
                    </span>{' '}
                    |
                    <span>
                      <strong> Size:</strong> {result.size} bytes
                    </span>{' '}
                    |
                    <span>
                      <strong> Tags:</strong> {result.tags.join(', ')}
                    </span>{' '}
                    |
                    <span>
                      <strong> Path:</strong> {filePath}
                    </span>{' '}
                    |
                    <span>
                      <strong> Domain:</strong> {domainName}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Original:</strong>
                    {result.link.startsWith('http') ? (
                      <a
                        href={result.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {result.link}
                      </a>
                    ) : (
                      'Unknown'
                    )}
                  </p>
                </li>
              )
            })}
          </ul>
          <div className="mt-6 flex justify-between">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="rounded bg-gray-300 px-4 py-2 text-gray-700 disabled:opacity-50"
            >
              Previous
            </button>
            <p className="text-gray-600">
              Page {currentPage} of {totalPages}
            </p>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="rounded bg-gray-300 px-4 py-2 text-gray-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}
