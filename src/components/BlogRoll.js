import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import {ServiceCard, ServiceCTA, ServiceTitle, ServiceImage} from '../styled-components/serviceCard-sc'
import Fade from 'react-reveal/Fade'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">

        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} style={{margin:'auto'}}>
            <div className="column is-12 is-3" style={{margin:'auto'}}>
             <Fade up>
              <ServiceCard>
                      <Link to={post.fields.slug}>        
                  {post.frontmatter.featuredimage ? (
                    <div>
                        <ServiceImage src={post.frontmatter.featuredimage.publicURL} alt={`featured image thumbnail for post ${post.frontmatter.title}`}/>
                    </div>
                  ) : null}
                   <Fade up>
                  <ServiceTitle>
                  {post.frontmatter.title}
                  </ServiceTitle>
                   </Fade>
                  </Link>
                {/* <SubText>
                  {post.frontmatter.description}     
                </SubText> */}
                <Fade up>
                <Link to={post.fields.slug}>
                <ServiceCTA>
                EXPLORE
                </ServiceCTA>
                </Link>
                </Fade>
              
              </ServiceCard>
             </Fade>
            </div>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
