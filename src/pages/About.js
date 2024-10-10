import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-black">About Us</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="fs-5">Purpose</Card.Title>
              <Card.Text>
                At Infosys, our purpose is to empower businesses with
                cutting-edge technology solutions that drive innovation,
                efficiency, and growth. We strive to bridge the gap between
                complex technical challenges and strategic business goals by
                delivering tailored IT services that enhance operational
                performance. With a commitment to excellence, security, and
                customer-centricity, we aim to be a trusted partner in
                transforming businesses through digital transformation, cloud
                solutions, cybersecurity, and software development. Our purpose
                is to help organizations leverage the full potential of
                technology, enabling them to thrive in an ever-evolving digital
                landscape.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Overview Section */}
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Overview</Card.Title>
              <Card.Text>
                Infosys is a leading provider of comprehensive IT solutions,
                serving clients across various industries with a focus on
                innovation, reliability, and scalability. Founded with the
                vision to deliver high-quality technology services, we
                specialize in digital transformation, software development,
                cloud computing, cybersecurity, and IT infrastructure
                management. Our team of experienced professionals is dedicated
                to understanding the unique needs of each client, offering
                customized solutions that align with their business objectives.
                From startups to large enterprises, we help organizations of all
                sizes harness the power of technology to drive success. With a
                strong emphasis on collaboration, cutting-edge tools, and
                continuous improvement, [Your IT Firm's Name] remains at the
                forefront of technological advancements, ensuring that our
                clients stay competitive in an ever-changing market. We are
                committed to delivering solutions that not only solve current
                challenges but also position businesses for future growth.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
