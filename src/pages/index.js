import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"

import lakePhoto from "../images/lake.jpg"

import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="This the Home Page" />
    <Container>
      <h1>Hi people</h1>
      <Row>
        <Col lg={6}>
          <p>
            <img 
              src={lakePhoto} 
              alt="lake in fall surround by multi-color trees" 
              className="img-fluid"
            />
          </p>
        </Col>
        <Col lg={6}>
          <p>
            <Img 
              fluid={data.indexImage.childImageSharp.fluid}
              alt="mountains with snow and a lake at the bottom"
            />
          </p>
        </Col>
      </Row>
      <Link to="/page-2">Gatsby Background Image</Link>
    </Container>

  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(base: {eq: "mountains.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;