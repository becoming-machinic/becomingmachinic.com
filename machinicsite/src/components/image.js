import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"
import Img from "../assets/logo.svg"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {

//Commented out since we're importing the svg image directly in header.js

 /*
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "machinic.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  */

  return 
}

export default Image
