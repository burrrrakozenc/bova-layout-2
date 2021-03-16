import React, { Component } from "react";
// import Slider from "react-slick";
import '../style/footer.css'
var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 6000
};

export default class Testimonial extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="footer-container">
        3
      </div>
    );
  }
}
