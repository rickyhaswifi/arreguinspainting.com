import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import {ServiceCard, ServiceCTA, ServiceTitle, ServiceCardMobile} from '../styled-components/serviceCard-sc'
import {TitleMain, SubText, TitleSub} from '../styled-components/shared-sc'
import Fade from 'react-reveal/Fade'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      // <div className="columns">
      <div className="columns is-multiline">

        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} style={{margin:'auto'}}>
            <div className="column is-12 is-3" style={{margin:'auto'}}>
             <Fade up>
              <ServiceCard
                // className={`blog-list-item tile is-child ${
                //   post.frontmatter.featuredpost ? 'is-featured' : ''
                // }`}
              >
                      <Link to={post.fields.slug}>        
                  {post.frontmatter.featuredimage ? (
                    // <div className="featured-thumbnail">
                    <div>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                        />
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

                {/* MOBILE */}
                {/* <ServiceCardMobile>
                <div className='columns'>
                
                <div column is-6>
                {post.frontmatter.featuredimage ? (
                    // <div className="featured-thumbnail">
                    <div>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                        />
                    </div>
                  ) : null}
                </div>
                <div column is-6>

                </div>

                </div>
                </ServiceCardMobile> */}
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
