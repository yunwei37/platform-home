import React, { useState } from 'react'
import { SearchParams } from '@/components/search/SearchResult'
import projectsData from '@/data/projectsData'

const DOMAIN_OPTIONS = projectsData.map((project) => ({
  name: project.title,
  value: new URL(project.href || '').host,
}))

const ALL_DOMAINS = DOMAIN_OPTIONS.map((option) => option.value)

interface SearchFormProps {
  onSearch: (params: SearchParams) => void
  isSearching: boolean
}

export default function SearchForm({ onSearch, isSearching }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [selectedDomains, setSelectedDomains] = useState<string[]>(ALL_DOMAINS)
  const [tag, setTag] = useState('')
  const [year, setYear] = useState('')
  const [region, setRegion] = useState('')

  const handleDomainChange = (domain: string) => {
    setSelectedDomains((prev) =>
      prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch({
      query: searchQuery,
      domain: selectedDomains.length ? selectedDomains.join(',') : undefined,
      tag: tag || undefined,
      year: year || undefined,
      region: region || undefined,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl space-y-2">
      <div className="flex gap-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow rounded-md border border-gray-300 bg-white 
            p-3 text-base text-gray-900 placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-blue-500 
            disabled:cursor-not-allowed disabled:opacity-60
            dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100
            dark:placeholder-gray-400 dark:focus:ring-blue-400"
          placeholder="请输入搜索关键词"
          disabled={isSearching}
        />
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="rounded-md bg-gray-100 px-4 py-3 text-sm
            text-gray-700 hover:bg-gray-200 dark:bg-gray-700
            dark:text-gray-200 dark:hover:bg-gray-600"
        >
          {showAdvanced ? '隐藏筛选' : '显示筛选'}
        </button>
        <button
          type="submit"
          disabled={isSearching}
          className="rounded-md bg-blue-600 px-6 py-3 
            text-base font-medium text-white transition-colors
            duration-200 hover:bg-blue-700 disabled:cursor-not-allowed
            disabled:opacity-60 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {isSearching ? '搜索中...' : '搜索'}
        </button>
      </div>

      {showAdvanced && (
        <div className="flex flex-wrap gap-4 rounded-md border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">归档：</label>
            <div className="flex flex-wrap gap-3">
              {DOMAIN_OPTIONS.map(({ name, value }) => (
                <label key={value} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedDomains.includes(value)}
                    onChange={() => handleDomainChange(value)}
                    className="rounded border-gray-300 text-blue-600 
                      focus:ring-blue-500 dark:border-gray-600"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-200">{name}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">标签：</label>
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="w-32 rounded-md border border-gray-300 p-1.5 text-sm
                dark:border-gray-600 dark:bg-gray-700"
              placeholder="标签"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">年份：</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-20 rounded-md border border-gray-300 p-1.5 text-sm
                dark:border-gray-600 dark:bg-gray-700"
              placeholder="2024"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">地区：</label>
            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-32 rounded-md border border-gray-300 p-1.5 text-sm
                dark:border-gray-600 dark:bg-gray-700"
              placeholder="地区"
            />
          </div>
        </div>
      )}
    </form>
  )
}
