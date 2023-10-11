import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}



// import React, { useState } from "react";

// const Carousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const images = [
//     {
//       src: "https://via.placeholder.com/350x150",
//       alt: "Image 1",
//     },
//     {
//       src: "https://via.placeholder.com/350x150",
//       alt: "Image 2",
//     },
//     {
//       src: "https://via.placeholder.com/350x150",
//       alt: "Image 3",
//     },
//   ];

//   return (
//     <div>
//       <ul>
//         {images.map((image, index) => (
//           <li key={index}>
//             <img src={image.src} alt={image.alt} />
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => setActiveIndex((activeIndex + 1) % images.length)}>
//         Next
//       </button>
//       <button onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)}>
//         Previous
//       </button>
//     </div>
//   );
// };

// export default Carousel;