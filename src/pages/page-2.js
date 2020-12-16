import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundImage from "gatsby-background-image"

import { Container } from "react-bootstrap"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />

    <BackgroundImage
    tag="section"
    id="mybg"
    fluid={data.indexBGimage.childImageSharp.fluid}
    className="masthead"
    >
      <Container>
        Add text inside of the background image
      </Container>
    </BackgroundImage>

    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Container>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius non velit quis feugiat. Proin vitae orci semper, pellentesque tellus ut, efficitur felis. Cras imperdiet risus scelerisque leo congue porttitor. Mauris urna nulla, viverra in leo tincidunt, ornare accumsan tortor. Proin varius, nunc et ultricies facilisis, eros elit gravida risus, eget elementum felis augue a risus. Praesent imperdiet eleifend dui, sit amet venenatis urna lobortis ac. Aliquam placerat rhoncus nisl, eget varius orci dictum eget. Praesent scelerisque cursus dignissim. Cras ultrices lobortis mi, at sollicitudin purus efficitur eget. Duis mauris sem, sagittis non imperdiet nec, posuere a metus. Integer nec ultricies velit. Suspendisse molestie arcu quis laoreet gravida. Pellentesque id leo sapien. Aenean sit amet erat a mi tincidunt maximus. Donec in aliquet lorem. Mauris et urna est.</p>

      <p>Ut interdum condimentum felis ut vulputate. Aliquam id blandit arcu. Mauris nisi libero, scelerisque in metus id, gravida facilisis sem. Curabitur pellentesque sem et vulputate ornare. Morbi non euismod libero. Fusce in rutrum libero, a lacinia est. Pellentesque felis erat, porta ac sodales nec, mollis feugiat turpis. Donec nec faucibus tortor. Nullam lacus arcu, feugiat vel feugiat nec, volutpat vitae nibh. Sed elementum vitae sapien at maximus. Maecenas id magna a tellus pellentesque dapibus viverra vel elit. Donec convallis, massa et ornare maximus, lacus nulla ullamcorper leo, vitae eleifend eros lorem nec metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque sit amet metus at felis lacinia fermentum ac eget nulla. Sed vulputate placerat faucibus. Nulla vitae sollicitudin nisi.

      </p>
      <p>Ut interdum condimentum felis ut vulputate. Aliquam id blandit arcu. Mauris nisi libero, scelerisque in metus id, gravida facilisis sem. Curabitur pellentesque sem et vulputate ornare. Morbi non euismod libero. Fusce in rutrum libero, a lacinia est. Pellentesque felis erat, porta ac sodales nec, mollis feugiat turpis. Donec nec faucibus tortor. Nullam lacus arcu, feugiat vel feugiat nec, volutpat vitae nibh. Sed elementum vitae sapien at maximus. Maecenas id magna a tellus pellentesque dapibus viverra vel elit. Donec convallis, massa et ornare maximus, lacus nulla ullamcorper leo, vitae eleifend eros lorem nec metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque sit amet metus at felis lacinia fermentum ac eget nulla. Sed vulputate placerat faucibus. Nulla vitae sollicitudin nisi.
        
      </p>
      <p>Ut interdum condimentum felis ut vulputate. Aliquam id blandit arcu. Mauris nisi libero, scelerisque in metus id, gravida facilisis sem. Curabitur pellentesque sem et vulputate ornare. Morbi non euismod libero. Fusce in rutrum libero, a lacinia est. Pellentesque felis erat, porta ac sodales nec, mollis feugiat turpis. Donec nec faucibus tortor. Nullam lacus arcu, feugiat vel feugiat nec, volutpat vitae nibh. Sed elementum vitae sapien at maximus. Maecenas id magna a tellus pellentesque dapibus viverra vel elit. Donec convallis, massa et ornare maximus, lacus nulla ullamcorper leo, vitae eleifend eros lorem nec metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque sit amet metus at felis lacinia fermentum ac eget nulla. Sed vulputate placerat faucibus. Nulla vitae sollicitudin nisi.
        
      </p>
    </Container>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

export const pageQuery = graphql`
  query {
    indexBGimage: file(relativePath: {eq: "ocean.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;