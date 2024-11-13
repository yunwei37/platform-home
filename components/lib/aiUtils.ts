// aiUtils.ts
import { CrawlResult } from './types'

export const cleanContent = (content: string): string => {
  return content.replace(/来源：.*\n/, '').replace(/[*]本文内容仅作示例使用[*]/, '')
}

export const tagContent = (crawlResults: CrawlResult, cleanedContent: string): string => {
  return cleanedContent + '\n\n' + `来源：${crawlResults.source} 日期：${crawlResults.date}`
}
