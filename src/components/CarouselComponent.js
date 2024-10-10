import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";

function CarouselComponent() {
  return (
    <Carousel controls={false} className="mt-n1">
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/24/banner/ft-money-machine-lead.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Card className="w-50 text-light bg-transparent border border-0">
            <Card.Body>
              <Card.Title className="fs-1">
                Infosys and The Financial Times Unveil the ‘FT Money Machine’
                Through Immersive Extended Reality Experience
              </Card.Title>
              <Card.Link href="/" className="btn btn-outline-light">
                Know more...
              </Card.Link>
            </Card.Body>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/24/banner/ai-amplified-marketing-suite-lead.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Card className="w-50 text-light bg-transparent border border-0">
            <Card.Body>
              <Card.Title className="fs-1">
                Launched Infosys Aster: The AI-amplified Marketing Suite
              </Card.Title>
              <Card.Link href="/" className="btn btn-outline-light">
                Know more...
              </Card.Link>
            </Card.Body>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/iga-swiatek-leadimg.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Card className="w-50 text-light bg-transparent border border-0">
            <Card.Body>
              <Card.Title className="fs-1">Champions Evolve.</Card.Title>
              <Card.Text>Digital-First | Cloud-First | AI-First</Card.Text>
              <Card.Link href="/" className="btn btn-outline-light">
                Know more...
              </Card.Link>
            </Card.Body>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/24/banner/reimagining-cloud-strategy-ai-first-enterprises-lead.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Card className="w-50 text-light bg-transparent border border-0">
            <Card.Body>
              <Card.Title className="fs-1">Cloud Survey Report 2024</Card.Title>
              <Card.Link href="/" className="btn btn-outline-light">
                Know more...
              </Card.Link>
            </Card.Body>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
