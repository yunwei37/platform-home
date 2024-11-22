'use client'

import Link from 'next/link'
import { FiBook, FiSearch, FiUsers, FiCalendar } from 'react-icons/fi'
import Card from '@/components/Card'
import projectsData from '@/data/projectsData'
import HeroSection from '@/components/HeroSection'

const features = [
  {
    icon: <FiBook className="h-6 w-6" />,
    title: '丰富的收藏',
    description: '访问数万份多元性别相关的文章、资料和艺术作品',
    href: '/projects', // Add links for each feature
  },
  {
    icon: <FiSearch className="h-6 w-6" />,
    title: '高效检索',
    description: '使用强大的搜索系统快速找到所需内容',
    href: '/search',
  },
  {
    icon: <FiUsers className="h-6 w-6" />,
    title: '自动收集归档',
    description: '通过 AI 自动收集、整理和归档，欢迎社区提交',
    href: '/add',
  },
  {
    icon: <FiCalendar className="h-6 w-6" />,
    title: '分析与精选内容', // Analysis and Curated Content
    description: '提供精选内容列表与分析',
    href: '/analysis',
  },
]

export default function LandingPage() {
  const totalCollections = projectsData.length
  const totalSize = projectsData.reduce((sum, project) => sum + (project.size || 0), 0)

  // Format number to include commas and handle large numbers
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('zh-CN').format(num)
  }

  return (
    <div className="space-y-12">
      <HeroSection
        totalCollections={totalCollections}
        totalSize={totalSize}
        formatNumber={formatNumber}
      />

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="block rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <div className="text-blue-600 dark:text-blue-400">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          精选列表与博客
        </h2>
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.href}
              imgSrc={null}
              href={d.href}
              contentSize={d.size}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
