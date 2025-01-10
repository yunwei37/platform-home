import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            档案集合
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            各类档案集合，包括文档、资料、新闻网页等。部分内容可能需要确认年龄。
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc || null}
                href={d.href || ''}
                contentSize={d.size}
                isRestricted={d.is_restricted}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
