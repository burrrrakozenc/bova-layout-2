import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Footer from '../components/footer'
// import Banner from "../components/banner";
// import About from "../components/about";
import Service from "../components/service";
// import Work from "../components/work";
import Blogs from "../components/blogs";
// import Testimonial from "../components/testimonial";
// import Contact from "../components/contact";
import Photos from "../components/photos";
import Gallery from '../components/index-gallery'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/custom.css'

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title={data.contentfulAboutMe.designation}
      keywords={[`Rohit Gupta`, `Frontend Developer`, `Developer`]}
    />
    {/* <Banner data={data.contentfulAboutMe}></Banner> */}
    <Gallery />

    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Service")
      .map(t => {
        return <Service key="Service" data={data.allContentfulService}></Service>;
      })} */}
        <Blogs key="Blogs" data={data.allContentfulBlogs}></Blogs>
    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Work")
      .map(t => {
        return <Work key="Work" data={data.allContentfulWorks}></Work>;
      })} */}

    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Testimonials")
      .map(t => {
        return (
          <Testimonial key="Testimonial" data={data.allContentfulTestimonials}></Testimonial>
        );
      })} */}

        <Photos key="Photos" data={data.allContentfulPhotosCategory}></Photos>
        <Service key="Service" data={data.allContentfulService}></Service>

        {/* <About key="About" data={data.contentfulAboutMe}></About>; */}

    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Contact")
      .map(t => {
        return <Contact key="Contact" data={data.contentfulAboutMe.gmail}></Contact>;
      })} */}
      
      <Footer key="footer"></Footer>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      designation
      age
      facebook
      github
      gmail
      id
      instagram
      linkdin
      twitter
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerList
    }
    allContentfulService {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulBlogs(limit: 5, sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          createdAt
        }
      }
    }
    allContentfulTestimonials {
      edges {
        node {
          name
          subTitle
          description {
            childMarkdownRemark {
              html
            }
          }
          avatarImage {
            fluid(maxWidth: 200) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    allContentfulWorks {
      edges {
        node {
          siteName
          url
          image {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    contentfulPhotos {
      photos {
        fluid(maxWidth: 600) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
    allContentfulPhotosCategory(limit: 2) {
      edges {
        node {
          title
          id
          cover {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
            }
            id
          }
        }
      }
    }
    allContentfulMaps {
      edges {
        node {
          title
          id
          mapimage {
            id
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
