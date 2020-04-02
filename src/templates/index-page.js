import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import ContactScript from '../components/hooks/ContactScript'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Stroke from '../shared/images/w-stroke-1.png'
import ColorRoom from '../components/homepage/ColorRoom'
import Contact from '../pages/contact/form'

// NPM Packages
import Fade from 'react-reveal/Fade'
import TextLoop from "react-text-loop"

// Styled Components
import {TitleMain, Spacer, TitleMainWht, TitleSub, SubText} from '../styled-components/shared-sc'
import {HeroBanner, HeroTextPrime, HomeCTA,
  HeroTextSecond, CircleImg} from '../styled-components/home-sc'
import {LeftBack, RightBack} from '../styled-components/colorBacks-sc'

// IMAGES
import Deck from '../shared/images/deck.jpeg'
import HomeFeature from '../shared/images/HomeFeatureCircle.jpg'
import Princess from '../shared/images/princess.jpg'



export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <>
    <HeroBanner
      className="full-width-image margin-top-0"
      style={{
        backgroundImage:`url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          // Deck
        })`
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
          zIndex:1,
        }}
      >
        <Fade left>
        <HeroTextSecond>
          {subheading}
        </HeroTextSecond>
        </Fade>
          {/* {title} */}
          <Fade right>
          <TextLoop interval={3000} springConfig={{ stiffness: 180, damping: 12 }}>
           <HeroTextPrime>Painting Atlanta</HeroTextPrime>
           <HeroTextPrime>Painting Homes</HeroTextPrime>
           <HeroTextPrime>Painting Condos</HeroTextPrime>
           <HeroTextPrime>Painting Business</HeroTextPrime>
          </TextLoop>
          </Fade>
          <Fade up>
          <a href='#color'>
          <HomeCTA>Learn More</HomeCTA>
          </a>
          </Fade>
      </div>

    <img src={Stroke} style={{position:'absolute',zIndex:'1', bottom:'0'}}/>
    </HeroBanner>

    <section className="section section--gradient">
  <div className="columns">
  <div className="column is-10 is-offset-1">
    {/* <Spacer />
    <Spacer />
    <h1>
    {mainpitch.title}
    </h1> */}
    <Spacer id='color'/>
    <Spacer />
    <Spacer />
    <ColorRoom />
    <Spacer />
    <Spacer />
    <Spacer />
  {/* START FIRST SECTION */}
  <Fade up>
    <LeftBack style={{backgroundColor:'#01AAE2'}}>
      <Fade up>
    <TitleMainWht>
    {heading}
    </TitleMainWht>
      </Fade>
      <div className="columns">

      <div className="column is-6">
      <Fade up>
      <CircleImg style={{backgroundImage:`url(${Princess})`}}></CircleImg>
      </Fade>
      </div>
  
        <div className="column is-6">
        <Fade up>
        <TitleSub>20+ Years in our community</TitleSub>
        <SubText>{description}</SubText>
        </Fade>
        </div>

      </div>
      <Spacer />
    </LeftBack>
  </Fade>
  {/* END FIRST SECTION */}

  {/* START BLOG */}
  <Fade up>
    <RightBack style={{background:'var(--DeepBlueGrad)'}}>
    {/* <div className="columns"> */}
    <div className="column is-12">
    <Fade up>
    <TitleMainWht>
    Services
    </TitleMainWht>
    </Fade>

      <BlogRoll />
      <Fade up>
      <div className="column is-12 has-text-centered">

        <Link to="/services">
        <HomeCTA>
        All Services
        </HomeCTA>
        </Link>


      </div>
      </Fade>
    </div>
    {/* </div> */}
    </RightBack>
  </Fade>

  <Fade up>
    <LeftBack style={{backgroundColor:'#00AB33', zIndex:'2'}}>
      <Fade up>
        <TitleMainWht>
        Painting with high quality standards
        </TitleMainWht>
      <div className="columns">
      <div className="column is-6">
      <Fade up>
      <TitleSub>What can we paint for you?</TitleSub>
      </Fade>
      <Fade up>
      <SubText>{mainpitch.description}</SubText>
      </Fade>
      </div>
      <div className="column is-6">
      <Fade up>
        <CircleImg style={{backgroundImage:`url(${HomeFeature})`}}></CircleImg>
      </Fade>
      </div>
      </div>
      </Fade>
      <Spacer />
    </LeftBack>
  </Fade>
  {/* END BLOG */}
  <Fade up>
    <RightBack style={{background:'#CF5055'}}>
    <Fade up>
    <TitleMainWht>
    Community Reviews
    </TitleMainWht>
    </Fade>
  <Features gridItems={intro.blurbs} />
      </RightBack>
      </Fade>

{/* CONTACT */}
<Fade left>
    <LeftBack style={{backgroundColor:'var(--GoldCoast)', zIndex:'2'}}>
      <Fade up>
        <TitleMainWht>
        Free Estimate
        </TitleMainWht>
      <div className="columns">
      <div className="column is-6">
      <Fade up>
      <TitleSub>Contact Us</TitleSub>
      </Fade>
      <Fade up>
      <Contact />
      </Fade>
      </div>
      <div className="column is-6">
      <Fade up>
      <TitleSub>
      Arreguin's Paint Contractor Inc.
      </TitleSub>
      <p>  
      1318 Atlanta RD SE<br/>
      Marietta, GA 30060<br/>
      </p>
      <p>
      Jose Arreguin - (770) 378-6726<br/>
      Juan Espinoza - (770) 437-0736
      </p>
      <hr />
      <TitleMainWht>We service<br/> all Georgia</TitleMainWht>
      </Fade>
      </div>
      </div>
      </Fade>
    </LeftBack>
  </Fade>

    </div>
    </div>
    <ContactScript />
</section>
</>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
  blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 340, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
