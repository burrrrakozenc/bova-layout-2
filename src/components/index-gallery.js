import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
// import '../styles/indexCarousel.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Parallax } from 'react-scroll-parallax';
import Carousel from 'react-bootstrap/Carousel'


export default function Gallery() {
    return (
        <StaticQuery
            query={graphql`
    query {
        allContentfulIndexCarousel {
            nodes {
              id
              slug
              title
              heroImage {
                
                    fluid(maxHeight:800, quality: 100 ) {
                      src
                    }
                 
              }
            }
          }
    }
    `}
            render={data => (
                <Carousel className="custom-carouse-resize">
                    {
                        data.allContentfulIndexCarousel.nodes.map((item) => {
                            return (
                                <Carousel.Item interval={3000} autoplay={true} key={item.id}>
                                    <Link to={`/${item.slug}`}>
                                        <img
                                            className="d-block w-100 custom-carousel-image"
                                            src={item.heroImage.fluid.src}
                                            alt="First slide"
                                            objectPosition="50% 50%"
                                            objectFit="cover"
                                        // style={{
                                        //     objectFit='cover'
                                        // }}
                                        />
                                        <Carousel.Caption>
                                            <h3 className="carousel-text">{item.title}</h3>
                                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                        </Carousel.Caption>
                                    </Link>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            )}
        />
    )
}