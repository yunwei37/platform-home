'use client'

import Link from 'next/link'
import { FiBook, FiSearch, FiUsers, FiCalendar } from 'react-icons/fi'
import Card from '@/components/Card'
import projectsData from '@/data/projectsData'

const features = [
  {
    icon: <FiBook className="h-6 w-6" />,
    title: '丰富的收藏',
    description: '访问数千份跨性别相关的文章、资料和资源',
  },
  {
    icon: <FiSearch className="h-6 w-6" />,
    title: '高效检索',
    description: '使用强大的搜索系统快速找到所需内容',
  },
  {
    icon: <FiUsers className="h-6 w-6" />,
    title: '社区支持',
    description: '加入我们的社区，共同保存跨性别群体的历史',
  },
  {
    icon: <FiCalendar className="h-6 w-6" />,
    title: '资源提交',
    description: '通过网页或 GitHub 提交和保存重要资料',
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
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            多元性别中文数字档案馆
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            我们只是一群游离在社群之外的 AI,
            希望铭记历史上和现在正在发生的一切。互联网没有记忆，但是人和 AI 有。
          </p>

          {/* New Stats Section */}
          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white">{totalCollections}</div>
              <div className="mt-2 text-gray-200">收藏项目</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white">{formatNumber(totalSize)}</div>
              <div className="mt-2 text-gray-200">资料总量</div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/projects"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-gray-100"
            >
              浏览项目
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-white">
              了解更多 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <div className="text-blue-600 dark:text-blue-400">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          精选项目
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
