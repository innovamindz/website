import { BsArrowRight } from 'react-icons/bs'
import { Card, CardBody, CardTitle } from 'react-bootstrap'
import { BlogType } from '../types'
import Image from 'next/image'
import Link from 'next/link'

type BlogCardPropsType = {
  blog: BlogType
}

const BlogCard = ({ blog }: BlogCardPropsType) => {
  return (
    <Card as={'article'} className="bg-transparent">
      {blog.image && <Image src={blog.image} className="card-img" alt="blog-image" />}
      <CardBody className="px-0 pb-0">
        <CardTitle as={'h6'}>{blog.title}</CardTitle>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">
            By {blog.publishedBy?.firstName} {blog.publishedBy?.lastName}
          </p>
          <Link className="icon-link icon-link-hover stretched-link me-1" href={blog.url}>
            Read more
            <BsArrowRight className="bi" />
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}

export default BlogCard
