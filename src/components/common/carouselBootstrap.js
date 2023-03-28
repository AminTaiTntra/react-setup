import Carousel from 'react-bootstrap/Carousel';

function DataCarousel({ data }) {
  return (
    <Carousel>
      {data.map((item) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.imgLink}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default DataCarousel;
