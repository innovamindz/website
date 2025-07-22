import { Card } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'
import { ProjectType } from '../types'
import Image from 'next/image'
import Link from 'next/link'

type ProjectCardPropsType = {
  project: ProjectType
}

const ProjectCard = ({ project }: ProjectCardPropsType) => {
  return (
    <Card className="card-img-scale card-element-hover card-img-blur overflow-hidden">
      <div className="card-img-scale-wrapper">
        <div className="card-img-overlay hover-element d-flex align-items-center">
          <div className="z-index-2 mt-auto mx-auto text-center">
            <h5 className="text-white mb-2">{project.name}</h5>
            <Link href={project.url} className="btn btn-sm btn-white mb-0">
              View detail
              <FaArrowRightLong className="fa-fw ms-2" />
            </Link>
          </div>
        </div>
        <Image src={project.image} className="img-scale img-blur card-img-top" alt="portfolio-img" />
      </div>
    </Card>
  )
}

export default ProjectCard
