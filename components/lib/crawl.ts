// lib/crawl.ts
import { CrawlResult } from './types'

export async function crawlUrl(url: string): Promise<CrawlResult> {
  // Mock implementation for now
  const mockResult: CrawlResult = {
    content: '# Sample Content\n\nThis is a mock crawl result.',
    date: new Date().toLocaleDateString(),
    source: 'example.com',
  }
  return mockResult
}