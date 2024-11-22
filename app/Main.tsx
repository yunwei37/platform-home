'use client'

import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import PostList from '@/components/PostList'
import MarkdownFetcher from '@/components/MarkdownFetcher'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* <div className="dark:prose-dark prose max-w-none pb-8 pt-8">
          <MarkdownFetcher url="https://raw.githubusercontent.com/transTerminus/trans-digital-cn/refs/heads/main/README.md" />
        </div> */}
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <PostList posts={posts} maxDisplay={MAX_DISPLAY} />
      </div>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
