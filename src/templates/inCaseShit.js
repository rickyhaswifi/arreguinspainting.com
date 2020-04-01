// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'

// import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
// import Stroke from '../shared/images/w-stroke-1.png'

// import Fade from 'react-reveal/Fade'

// import {TitleMain, Spacer, TitleMainWht} from '../styled-components/shared-sc'
// import {HeroBanner, HeroTextPrime, HeroTextSecond, CircleImg} from '../styled-components/home-sc'

// import Deck from '../shared/images/deck.jpeg'
// import HomeFeature from '../shared/images/HomeFeatureCircle.jpg'
// import Princess from '../shared/images/princess.jpg'

// import ColorRoom from '../components/ColorRoom'

// import {LeftBack, RightBack} from '../styled-components/colorBacks-sc';

// export const IndexPageTemplate = ({
//   image,
//   title,
//   heading,
//   subheading,
//   mainpitch,
//   description,
//   intro,
// }) => (
//   <>
//     <HeroBanner
//       className="full-width-image margin-top-0"
//       style={{
//         backgroundImage:`url(${
//           !!image.childImageSharp ? image.childImageSharp.fluid.src : image
//           // Deck
//         })`
//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           height: '150px',
//           lineHeight: '1',
//           justifyContent: 'space-around',
//           alignItems: 'left',
//           flexDirection: 'column',
//           zIndex:1,
//         }}
//       >
//         <HeroTextPrime>
//           {/* {title} */}
//           Painting<br/>
//           Atlanta
//         </HeroTextPrime>
//         <HeroTextSecond>
//           {subheading}
//         </HeroTextSecond>
//         <button>Call Now</button>
//       </div>

//     <img src={Stroke} style={{position:'absolute',zIndex:'1', bottom:'0'}}/>
//     </HeroBanner>

//     <section className="section section--gradient">
//       {/* <div className="container">
//         <div className="section">
//           <div className="columns"> */}
//             {/* <div className="column is-12"> */}
// {/* 
//             <div> */}
//             <div className="columns">
//             <div>
//             <div>

//             <div className="column is-10 is-offset-1">
//               <div className="content">
//                 {/* CTA Section */}
//                 <div className="content">
//                   {/* <Fade right>
//                   <div className="tile">
//                     <h1 className="title">{mainpitch.title}</h1>
//                   </div>
//                   <div className="tile">
//                     <h3 className="subtitle">{mainpitch.description}</h3>
//                   </div>
//                </Fade> */}
//                <Spacer />
//                <ColorRoom />
//                <Spacer />
//                 </div>
//                 {/* END CTA SECTION */}
//                 {/* START FIRST SECTION */}
//                 <Fade>
//                 <LeftBack style={{backgroundColor:'#F89101'}}>
//                     <TitleMainWht>
//                       {heading}
//                     </TitleMainWht>
//                 <div className="columns">

//                     <div className="column is-6">
//                     <CircleImg style={{backgroundImage:`url(${Princess})`}}></CircleImg>
//                     </div>

//                     <div className="column is-6">
//                     <p className="subtitle">{description}</p>
//                     </div>

                 
//                 </div>
//                 </LeftBack>
//                 </Fade>
//                 {/* END FIRST SECTION */}
//                 {/* 4 Features */}
               
//                 {/* <div className="columns">
//                   <div className="column is-12 has-text-centered">
//                     <Link className="btn" to="/products">
//                       +
//                     </Link>
//                   </div>
//                 </div> */}
//                 {/* END 4 Features */}
//                 {/* START BLOG */}
//                 <Fade right>
//                 <RightBack style={{background:'var(--DeepBlueGrad)'}}>
//                 <div className="column is-12">
//                 <TitleMainWht>
//                 Services
//                 </TitleMainWht>
//                   <BlogRoll />
//                   <div className="column is-12 has-text-centered">
//                     <Link className="btn" to="/services">
//                       All Services
//                     </Link>
//                   </div>
//                 </div>
//                 </RightBack>
//                 </Fade>

//                 <Fade left>
//                   <LeftBack style={{backgroundColor:'#00AB33', zIndex:'2'}}>
//                     <Fade>
//                       <TitleMainWht>{mainpitch.title}
//                       </TitleMainWht>
//                     <div className="columns">
//                     <div className="column is-6">
//                     <p className="subtitle">{mainpitch.description}</p>
//                     </div>
//                     <div className="column is-6">
//                       <CircleImg style={{backgroundImage:`url(${HomeFeature})`}}></CircleImg>
//                     </div>
//                     </div>
//                     </Fade>
//                   </LeftBack>
//                 </Fade>
//                 {/* END BLOG */}

//                 <Features gridItems={intro.blurbs} />

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </>
// )

// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
// }

// const IndexPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark

//   return (
//     <Layout>
//       <IndexPageTemplate
//         image={frontmatter.image}
//         title={frontmatter.title}
//         heading={frontmatter.heading}
//         subheading={frontmatter.subheading}
//         mainpitch={frontmatter.mainpitch}
//         description={frontmatter.description}
//         intro={frontmatter.intro}
//       />
//     </Layout>
//   )
// }

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

// export default IndexPage

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         heading
//         subheading
//         mainpitch {
//           title
//           description
//         }
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `
