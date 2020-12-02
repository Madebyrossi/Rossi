import React from "react"
import { graphql } from "gatsby"

import SEO from "../helpers/seo"

const WorkPage = ({ data }) => {
  // const item = data.allMarkdownRemark.edges
  // const Items = item.map(({ node }) => <Item key={node.id} item={node} />)

  return (
    <>
      <SEO title="Work" />
      {/* <div>{Items}</div> */}
    </>
  )
}
export default WorkPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
