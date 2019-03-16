import React, { Component } from 'react'
import { graphql } from 'gatsby'

// custom components
import Layout from './layout'

class postLayout extends Component {
  render () {
    const { location } = this.props
    const { markdownRemark } = this.props.data

    return (
      <Layout location={location}>
        <h2>{markdownRemark.frontmatter.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    )
  }
}

export default postLayout

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
