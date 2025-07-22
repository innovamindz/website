import { Col, Container, Row } from 'react-bootstrap'
import { projects } from '../data'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

const Showcase = () => {
  return (
    <section className="pb-0">
      <Container>
        <div className="d-sm-flex justify-content-between align-items-center text-center text-sm-start mb-4 mb-md-6">
          <h2 className="mb-3 mb-sm-0">Our creative showcase</h2>
          <Link href="" className="btn btn-lg btn-dark mb-0">
            View all projects
          </Link>
        </div>

        <Row className="g-4">
          {projects.map((project, idx) => (
            <Col sm={6} md={4} key={idx}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Showcase
