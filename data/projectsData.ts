// Import the JSON data
import independenceRepo from '../independence_repo.json';

interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = independenceRepo.map((repo) => ({
  title: repo.name,
  description: repo.description,
  imgSrc: '/static/images/time-machine.jpg',
  href: repo.url,
}))

// Use the data
console.log(independenceRepo);

export default projectsData
