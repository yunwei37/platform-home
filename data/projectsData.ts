import digitalYml from '../digital.yml'

interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = digitalYml.independence.map((repo) => ({
  title: repo.name,
  description: repo.description,
  imgSrc: '/static/images/time-machine.jpg',
  href: repo.url,
}))

export default projectsData
