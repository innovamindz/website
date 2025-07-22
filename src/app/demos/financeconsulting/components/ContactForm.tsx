'use client'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { currency } from '@/states/constants'
import Link from 'next/link'

const ContactForm = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small mx-auto">
          <div className="text-center mb-6">
            <h2 className="mb-">We&apos;ve been waiting for you</h2>
            <p className="mb-0">You can watch your business bloom and glow, achieving new heights of success and radiating prosperity.</p>
          </div>
        </div>

        <Row>
          <Col lg={8} className="mx-auto">
            <Row as={Form} className="g-4">
              <Col md={6}>
                <FormGroup>
                  <FormLabel className="heading-color">Your name *</FormLabel>
                  <FormControl size="lg" type="text" placeholder="Full name" />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <FormLabel className="heading-color">Email address *</FormLabel>
                  <FormControl size="lg" type="email" placeholder="name@example.com" />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <FormLabel className="heading-color">Phone number *</FormLabel>
                  <FormControl size="lg" type="text" placeholder="(xxx) xx xxxx" />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <FormLabel className="heading-color">Company *</FormLabel>
                  <FormControl size="lg" type="text" placeholder="Company name" />
                </FormGroup>
              </Col>

              <Col xs={12}>
                <FormGroup>
                  <FormLabel className="heading-color">Message *</FormLabel>
                  <FormControl as="textarea" placeholder="Write your message here...." style={{ height: '150px' }} />
                </FormGroup>
              </Col>

              <Col xs={12} className="d-grid">
                <Button variant="primary" size="lg" className="mb-0">
                  Send a message
                </Button>
              </Col>
            </Row>

            <div className="bg-light border rounded py-4 px-5 mt-6">
              <Row className="align-items-center">
                <Col md={7}>
                  <h5 className="mb-">Need finance guidance?</h5>
                  <p className="mb-0">We&apos;ve always worked very hard to give our customers the best experience.</p>
                </Col>

                <Col md={4} className="ms-auto text-end">
                  <div className="mb-2 text-center">
                    <span className="heading-color fs-3 fw-bold">{currency}20</span> /per hour
                  </div>
                  <Link href="" className="btn btn-white border mb-0 w-100">
                    Book call!
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactForm
