import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { BsBullseye, BsTrophy } from 'react-icons/bs'
const About = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={11} className="mx-auto">
            <Row className="g-4 g-lg-6">
              <Col xl={5}>
                <h3>
                  We&apos;re a dynamic, innovative digital agency rooted in the vibrant heart of <span className="text-primary">California</span>
                </h3>
              </Col>

              <Col md={6} xl={3}>
                <div className="bg-light rounded p-4 overflow-hidden">
                  <h6 className="mb-5 mb-sm-8">Since</h6>
                  <div className="display-1 text-primary text-end mb-n5 mb-md-n6 me-n4">1996</div>
                </div>
              </Col>

              <Col md={6} xl={4}>
                <h6 className="fw-semibold mb-5">28 Years of working experience</h6>

                <Accordion defaultActiveKey="0" className="accordion-icon accordion-border-bottom">
                  <AccordionItem eventKey="0" className="mb-3">
                    <AccordionHeader as={'span'}>
                      <BsBullseye className="text-primary  me-2" />
                      <span className="fw-semibold"> Our Mission</span>
                    </AccordionHeader>

                    <AccordionBody className="pb-0">
                      Effective design communicates your brand&apos;s identity, cultivates trust, and can significantly impact conversion rates and
                      customer loyalty.
                    </AccordionBody>
                  </AccordionItem>

                  <AccordionItem eventKey="1" className="mb-3">
                    <AccordionHeader as={'span'}>
                      <BsTrophy className="text-primary fw-semibold me-2" />
                      <span className="fw-semibold">Our Goal</span>
                    </AccordionHeader>

                    <AccordionBody className="pb-0">
                      We provide a range of tools, guides, and best practices to help you create designs, websites.
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
