// src/pages/Services.js
import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const servicesData = [
  {
    title: "Digital Transformation",
    description:
      "Leverage the power of AI, cloud, and automation to drive your business forward with innovative digital strategies.",
    imgSrc:
      "https://via.placeholder.com/400x200/0072c6/fff?text=Digital+Transformation"
  },
  {
    title: "Cloud Services",
    description:
      "Migrate and manage your applications in the cloud with seamless integration and scalable infrastructure.",
    imgSrc: "https://via.placeholder.com/400x200/ff5733/fff?text=Cloud+Services"
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business from evolving threats with our comprehensive cybersecurity services, including risk management and defense strategies.",
    imgSrc: "https://via.placeholder.com/400x200/28a745/fff?text=Cybersecurity"
  },
  {
    title: "Application Development",
    description:
      "Custom software development services to meet your unique business needs, from design to deployment.",
    imgSrc:
      "https://via.placeholder.com/400x200/ffcc00/fff?text=App+Development"
  },
  {
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights using our advanced data analytics and business intelligence solutions.",
    imgSrc: "https://via.placeholder.com/400x200/8e44ad/fff?text=Data+Analytics"
  },
  {
    title: "Consulting Services",
    description:
      "Expert advice and consulting to optimize your technology stack, improve business processes, and deliver better outcomes.",
    imgSrc: "https://via.placeholder.com/400x200/2c3e50/fff?text=Consulting"
  }
];

const Services = () => {
  useEffect(() => {
    const middlePosition =
      (document.documentElement.scrollHeight - window.innerHeight) / 2;

    window.scrollTo({
      top: middlePosition,
      behavior: "smooth"
    });
  }, []);
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {servicesData.map((service, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={service.imgSrc} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
