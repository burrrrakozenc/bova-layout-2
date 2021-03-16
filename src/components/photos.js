import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "gatsby";
import Img from "gatsby-image";
var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
};

export default class Photos extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="photos section" id="Photos">
        <div className="container">
          <div className="section-head">
            <h2>Fotograflar</h2>
          </div>
          <div className="slider-section photos-list">

            {/* <Slider {...settings}> */}
            <div className="category-cover-container">
              {data.edges.map((item, index) => {
                return (
                  <div key={index} className="photos-item category-cover-item">
                    <a href="/photos">
                      <Img
                        fluid={item.node.cover.fluid}
                        // objectFit="cover"
                        // objectPosition="50% 50%"
                      />
                      <h3>
                          {item.node.title}
                        </h3>
                    </a>
                  </div>
                )
              })}
            </div>
            {/* </Slider> */}
            {/* {data.photos.slice(0, 9).map((item, index) => {
                return (
                  <div key={index} className="photos-item">
                    <Img
                      fluid={item.fluid}
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                  </div>
                );
              })} */}
          </div>
          <div className="see-more">
            {/* <Link to="/photos">
              <span>More Photo</span>
            </Link> */}
          </div>
        </div>
      </div >
    );
  }
}
