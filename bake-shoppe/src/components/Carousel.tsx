import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "../assets/carousel1.png";
import image2 from "../assets/carousel2.png";
import image3 from "../assets/carousel3.png";
import image4 from "../assets/carousel4.png";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "./slick-theme.css";

export default class PauseOnHoverSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 300,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true  // Added pause on hover functionality
    };

    // Store images in an array
    const images = [image1, image2, image3, image4];

    return (
      <div className="fullcarousel">
        <Slider className="slider" {...settings}>
          {images.map((imageSrc, index) => (
            <div key={index} className="image-container">
              <img className="carousel-image" src={imageSrc} alt={`Carousel Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
