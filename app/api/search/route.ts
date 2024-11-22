import { NextResponse } from 'next/server'
import combinedIndex from 'combined_index.json'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const searchTerm = searchParams.get('term')

  if (!searchTerm) {
    return NextResponse.json({ error: 'Search term is required' }, { status: 400 })
  }

  const searchResults = []
  for (const key in combinedIndex) {
    const document = combinedIndex[key]
    if (
      key.includes(searchTerm) ||
      document.description.includes(searchTerm) ||
      document.tags.includes(searchTerm)
    ) {
      searchResults.push({ url: key, ...document })
    }
  }
  return NextResponse.json(searchResults)
}
