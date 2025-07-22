import { Card, CardText } from 'react-bootstrap'
import { RecentProjectType } from '../types'
import Image from 'next/image'
import Link from 'next/link'

type ProjectCardPropType = {
  project: RecentProjectType
}
const ProjectCard = ({ project }: ProjectCardPropType) => {
  return (
    <Card className="card-element-hover card-metro-hover">
      <Image src={project.image} alt="portfolio-image" />
      <div className="card-img-overlay hover-element d-flex">
        <CardText as={'div'} className="mt-auto">
          <h6 className="mb-0">
            <Link href={project.url} className="text-white stretched-link">
              {project.name}
            </Link>
          </h6>
          <small className="text-white">{project.category}</small>
        </CardText>
      </div>
    </Card>
  )
}

export default ProjectCard
