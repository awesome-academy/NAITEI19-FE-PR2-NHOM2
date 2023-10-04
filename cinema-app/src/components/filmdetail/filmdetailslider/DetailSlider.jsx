import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./DetailSlider.scss";
const DetailSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const baseUrl = "/moivedetailImg/";

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settings1 = {
    asNavFor: nav2,
    ref: (slider) => (slider1.current = slider),
    className: "slider__mother container",
  };

  const settings2 = {
    asNavFor: nav1,
    ref: (slider) => (slider2.current = slider),
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    className: "slider__child container",
  };

  return (
    <div className="slider__detail">
      <div className="slider__component">
        <Slider {...settings1}>
          <div className="test__slide slider1">
            <img src={baseUrl + "/img0.jpg"} alt="Slide 1" />
          </div>
          <div className="test__slide slider1">
            <img src={baseUrl + "/img1.jpg"} alt="Slide 2" />
          </div>
          <div className="test__slide slider1">
            <img src={baseUrl + "/img2.jpg"} alt="Slide 3" />
          </div>
          <div className="test__slide slider1">
            <img src={baseUrl + "/img3.jpg"} alt="Slide 4" />
          </div>
          <div className="test__slide slider1">
            <img src={baseUrl + "/img4.jpg"} alt="Slide 4" />
          </div>
        </Slider>
      </div>
      <div className="slider2__mother">
        <Slider {...settings2}>
          <div className="test__slide slider2">
            <img src={baseUrl + "/img0.jpg"} alt="Slide 1" />
          </div>
          <div className="test__slide slider2">
            <img src={baseUrl + "/img1.jpg"} alt="Slide 2" />
          </div>
          <div className="test__slide slider2">
            <img src={baseUrl + "/img2.jpg"} alt="Slide 3" />
          </div>
          <div className="test__slide slider2">
            <img src={baseUrl + "/img3.jpg"} alt="Slide 4" />
          </div>
          <div className="test__slide slider1">
            <img src={baseUrl + "/img4.jpg"} alt="Slide 4" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default DetailSlider;
