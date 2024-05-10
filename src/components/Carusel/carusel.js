import Carousel from 'react-bootstrap/Carousel';
import caru1 from '../../assets estaticos/imgs/carusel0.jpg';
import caru2 from '../../assets estaticos/imgs/carusel.jpg';
import caru3 from '../../assets estaticos/imgs/carusel2.jpg';

export const Carusel = () => {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block"
            src={caru1}
            alt="First slide"
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={caru2}
            alt="Second slide"
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={caru3}
            alt="Third slide"
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
