'use client'

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-8 text-3xl font-bold">社区</h1>

      <div className="space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <ul className="space-y-2">
            <li>
              <a
                href="https://t.me/+QKIMPMhcwJFjOTBl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                TG 群组
              </a>
            </li>
            <li>
              <a
                href="https://t.me/transchinese"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                TG channel
              </a>
            </li>
            <li>
              <a
                href="https://github.com/project-polymorph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@transchinese"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Medium
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">联系我们</h2>
          <p>Email: <a href="mailto:admin@transchinese.org" className="text-blue-600 hover:text-blue-800">admin@transchinese.org</a></p>
          <p className="mt-2">Website: <a href="http://transchinese.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">transchinese.org</a></p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">相关社区</h2>
          <p>性与多元性别成人图书馆：{' '}
            <a
              href="https://github.com/cdtsf-library"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              https://github.com/cdtsf-library
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
