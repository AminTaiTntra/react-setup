import Glider from 'react-glider';
import 'glider-js/glider.min.css';
const Slider = function ({ children, className, settingProps = {} }) {
  const setting = {
    dots: false,
    infinite: false,
    speed: 1000,
    lazyLoad: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    skipTrack: true,
    ...settingProps,
  };

  return (
    <Glider className={className}>
      <div className="glider-track">{children}</div>
    </Glider>
  );
};

export default Slider;
