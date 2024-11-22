import { NextResponse } from 'next/server'
import combinedIndex from 'combined_index.json'

const searchDocuments = (searchTerm: string): any[] => {
  const results = []

  for (const key in combinedIndex) {
    const document = combinedIndex[key]
    if (
      key.includes(searchTerm) ||
      document.description.includes(searchTerm) ||
      document.tags.includes(searchTerm)
    ) {
      results.push({ url: key, ...document })
    }
  }

  return results
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const searchTerm = searchParams.get('term')

  if (!searchTerm) {
    return NextResponse.json({ error: 'Search term is required' }, { status: 400 })
  }

  const searchResults = searchDocuments(searchTerm)
  return NextResponse.json(searchResults)
}
