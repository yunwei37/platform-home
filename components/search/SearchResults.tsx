import React from 'react'

interface SearchResultsProps {
  results: any[]
  error: string | null
}

export default function SearchResults({ results, error }: SearchResultsProps) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      {error && <p className="text-center text-red-600">{error}</p>}
      {results.length > 0 && (
        <ul className="mt-6 space-y-6">
          {results.map((result, index) => {
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
      )}
    </div>
  )
}
