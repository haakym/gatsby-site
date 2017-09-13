import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      <section>
        <h3>Site Pages</h3>
        <ul>
          {data.allSitePage.edges.map(({node}) => 
            <li key={node.path}>
              <Link to="/{node.path}/">{node.path}</Link>
            </li>
          )}
        </ul>
      </section>
      
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allSitePage {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`