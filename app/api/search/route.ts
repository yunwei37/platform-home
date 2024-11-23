import { NextResponse } from 'next/server'
import combinedIndex from 'combined_search_index.json'

interface Document {
  type: string
  format: string
  size: number
  md5: string
  link: string
  description: string
  'archived date': string
  author: string
  date: string
  region: string
  tags: string[]
}

interface SearchIndex {
  [domain: string]: {
    [key: string]: Document
  }
}

interface SearchResult {
  url: string
  description: string
  tags: string[]
  type: string
  author: string
  date: string
  region: string
  format: string
  size: number
  link: string
}

function searchDocuments(index: SearchIndex, searchTerm: string): SearchResult[] {
  const searchResults: SearchResult[] = []

  for (const domain in index) {
    const domainIndex = index[domain]
    for (const key in domainIndex) {
      const document = domainIndex[key]
      if (
        key.toLowerCase().includes(searchTerm.toLowerCase()) ||
        document.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        document.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      ) {
        searchResults.push({
          url: `https://${domain}/${key}`,
          ...document,
        })
      }
    }
  }

  return searchResults
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const searchTerm = searchParams.get('term')

  if (!searchTerm) {
    return NextResponse.json({ error: 'Search term is required' }, { status: 400 })
  }

  const results = searchDocuments(combinedIndex as SearchIndex, searchTerm)
  return NextResponse.json(results)
}
