interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '文档与各类资料存档库',
    description: `保存各类文档、资料、书籍、论文、报告、演示文稿等与跨性别相关的独立文件，方便查找、下载、分享。`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://digital.transchinese.org/',
  },
  {
    title: '新闻网页存档库',
    description: `保存各类新闻网页存档和相关图片。`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://news.transchinese.org/',
  },
]

export default projectsData
