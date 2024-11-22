'use client'
import React, { useState } from 'react'
import meta from 'public/meta.json'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export default function FileSearch() {
  const { yearCount, tagCount, regionCount } = meta

  // Sort tags and regions by count, and years by year
  const sortedTags = Object.entries(tagCount).sort((a, b) => b[1] - a[1])
  const sortedYears = Object.entries(yearCount).sort((a, b) => a[0].localeCompare(b[0]))
  const sortedRegions = Object.entries(regionCount).sort((a, b) => b[1] - a[1])

  const [showAllTags, setShowAllTags] = useState(false)

  const visibleTags = sortedTags.filter(([tag, count]) => count >= 30)
  const hiddenTags = sortedTags.filter(([tag, count]) => count < 30)

  // Filter out unknown years and years greater than the current year
  const currentYear = new Date().getFullYear()
  const yearData = sortedYears
    .filter(([year]) => year !== '未知' && parseInt(year) <= currentYear)
    .map(([year, count]) => ({ year, count }))

  return (
    <div className="mx-auto max-w-7xl p-8">
      <div className="mb-8 rounded-md bg-amber-50 p-4 text-center text-amber-800">
        🚧 This feature is currently under development 🚧
      </div>

      <div className="w-full">
        <h2 className="mb-4 text-2xl font-bold">Years</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={yearData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="w-full">
          <h2 className="mb-4 text-2xl font-bold">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {visibleTags.map(([tag, count]) => (
              <div key={tag} className="rounded-md bg-gray-100 p-2 shadow-md">
                {tag}: {count}
              </div>
            ))}
            {showAllTags &&
              hiddenTags.map(([tag, count]) => (
                <div key={tag} className="rounded-md bg-gray-100 p-2 shadow-md">
                  {tag}: {count}
                </div>
              ))}
          </div>
          {hiddenTags.length > 0 && (
            <button onClick={() => setShowAllTags(!showAllTags)} className="mt-4 text-blue-500">
              {showAllTags ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>

        <div className="w-full">
          <h2 className="mb-4 text-2xl font-bold">Regions</h2>
          <div className="flex flex-wrap gap-2">
            {sortedRegions.map(([region, count]) => (
              <div key={region} className="rounded-md bg-gray-100 p-2 shadow-md">
                {region}: {count}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
