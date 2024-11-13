'use client'
import Link from 'next/link'

export default function DataInputPage() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-6 flex items-center border-l-4 border-amber-400 bg-amber-50 p-4">
        <svg
          className="mr-3 h-6 w-6 text-amber-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span className="text-amber-700">该功能正在开发中，敬请期待！</span>
      </div>

      <h1 className="mb-8 text-3xl font-bold">数据采集</h1>

      <div className="space-y-6">
        <Link
          href="/add/url-crawling"
          className="group block rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-md"
        >
          <div className="flex items-center">
            <svg
              className="mr-4 h-8 w-8 text-gray-400 group-hover:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <div>
              <h2 className="text-xl font-semibold group-hover:text-blue-500">URL 采集</h2>
              <p className="mt-2 text-gray-600">从指定URL抓取数据并进行分析处理</p>
            </div>
          </div>
        </Link>

        <Link
          href="/add/file-upload"
          className="group block rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-md"
        >
          <div className="flex items-center">
            <svg
              className="mr-4 h-8 w-8 text-gray-400 group-hover:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <div>
              <h2 className="text-xl font-semibold group-hover:text-blue-500">文件上传</h2>
              <p className="mt-2 text-gray-600">上传本地文件进行数据分析和处理</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
