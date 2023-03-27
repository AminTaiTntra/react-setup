import React from 'react';
import 'glider-js/glider.min.css';
import Glider from 'react-glider';

const Slider = function ({
  data,
  className,
  settingProps = {},
  hasArrow,
  hasDots,
}) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    skipTrack: true,
    ...settingProps,
  };
  return (
    <Glider
      className={className}
      {...settings}
      hasArrows={hasArrow}
      hasDots={hasDots}>
      <div className="glider-track">
        {data.map((item) => {
          return <img src={item.imgLink} />;
        })}{' '}
      </div>
    </Glider>
  );
};
export default Slider;
