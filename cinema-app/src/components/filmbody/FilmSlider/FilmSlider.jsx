import React from "react";
import Slider from "react-slick";
import "./FilmSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CenterMode = () => {
  const baseUrl = "/carouselImg/";
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="slider">
      <h2>Phim hot</h2>
      <Slider {...settings}>
        <div className="test__slide">
          <img src={baseUrl + "/img0.jpg"} alt="Slide 1" />
        </div>
        <div className="test__slide">
          <img src={baseUrl + "/img1.jpg"} alt="Slide 2" />
        </div>
        <div className="test__slide">
          <img src={baseUrl + "/img2.jpg"} alt="Slide 3" />
        </div>
        <div className="test__slide">
          <img src={baseUrl + "/img3.jpg"} alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};

export default CenterMode;
