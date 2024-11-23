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
      {error && <p className="text-center text-red-600 dark:text-red-400">{error}</p>}
      <p className="text-center text-gray-600 dark:text-gray-400">
        Total Results: {results.length}
      </p>
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
                <li key={index} className="border-b border-gray-300 pb-4 dark:border-gray-700">
                  <a
                    href={result.url}
                    className="text-lg font-bold text-blue-600 hover:underline 
                      dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {result.title || fileName}
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{result.url}</p>
                  <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                    {result.description}
                  </p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>
                      <strong className="dark:text-gray-300">Author:</strong> {result.author}
                    </span>{' '}
                    |
                    <span>
                      <strong className="dark:text-gray-300"> Date:</strong> {result.date}
                    </span>{' '}
                    |
                    <span>
                      <strong className="dark:text-gray-300"> Region:</strong> {result.region}
                    </span>{' '}
                    |
                    <span>
                      <strong className="dark:text-gray-300"> Format:</strong> {result.format}
                    </span>{' '}
                    |
                    <span>
                      <strong className="dark:text-gray-300"> Size:</strong> {result.size} bytes
                    </span>{' '}
                    |
                    <span>
                      <strong className="dark:text-gray-300"> Tags:</strong>{' '}
                      {result.tags.join(', ')}
                    </span>{' '}
                    |
                    <span>
                      <strong className="dark:text-gray-300"> Path:</strong> {filePath}
                    </span>{' '}
                    |
                    <span>
                      <strong className="dark:text-gray-300"> Domain:</strong> {domainName}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <strong className="dark:text-gray-300">Original:</strong>
                    {result.link.startsWith('http') ? (
                      <a
                        href={result.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline dark:text-blue-400 
                          dark:hover:text-blue-300"
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
              className="rounded bg-gray-300 px-4 py-2 text-gray-700 
                transition-colors duration-200 
                hover:bg-gray-400 disabled:opacity-50
                dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Previous
            </button>
            <p className="text-gray-600 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </p>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="rounded bg-gray-300 px-4 py-2 text-gray-700 
                transition-colors duration-200 
                hover:bg-gray-400 disabled:opacity-50
                dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}
