const Carousel = ({ data }) => {
  console.log("data",data);
  return (
    <Carousel>
      {data.map((item) => {
        return (
          <div>
            <img
              className="d-block w-100"
              src={item.imgUrl}
              alt={item.imgUrl}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Carousel;
