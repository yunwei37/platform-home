// page.tsx
'use client'
import { useState } from 'react'

export default function DataInputPage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCrawl = async () => {
    setLoading(true)
    // Crawling logic will be implemented later
    setLoading(false)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    // File handling logic will be implemented later
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Warning Banner */}
      <div className="mb-6 bg-amber-50 border-l-4 border-amber-400 p-4 flex items-center">
        <svg className="h-6 w-6 text-amber-400 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span className="text-amber-700">该功能正在开发中，敬请期待！</span>
      </div>

      <h1 className="text-2xl font-bold mb-6">数据采集</h1>
      
      <div className="space-y-8">
        {/* URL Crawling Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">网站存档</h2>
          <div className="flex gap-4">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL"
              className="flex-1 px-4 py-2 border rounded"
            />
            <button
              onClick={handleCrawl}
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Crawling...' : 'Start Crawl'}
            </button>
          </div>
        </div>

        {/* File Upload Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">上传文件</h2>
          <div className="space-y-4">
            <input
              type="file"
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>
        </div>
      </div>
    </div>
  )
}