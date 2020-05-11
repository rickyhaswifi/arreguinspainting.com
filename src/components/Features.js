import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import 'react-animated-slider/build/horizontal.css'
import {ReviewCard} from '../styled-components/reviews-sc'
import Fade from 'react-reveal/Fade'
// import Slider from "react-slick";

// const gridItems = {gridItems}

// class FeatureGrid extends Component {
//   render() {
//     return (
// <>

//   <div className="columns is-multiline">
//     {gridItems.map(item => (
//       <div key={item.text} className="column is-6">
//         <section className="section">
//           <div className="has-text-centered">
//             <div
//               style={{
//                 width: '240px',
//                 display: 'inline-block',
//               }}
//             >
//               <PreviewCompatibleImage imageInfo={item} />
//             </div>
//           </div>
//           <p>{item.text}</p>
//         </section>
//       </div>
//     ))}
//   </div>

//       </>
//     );
//   }
// }

const FeatureGrid = ({ gridItems }) => (

  <div className="columns is-multiline">
     {/* <Slider> */}
     {gridItems.map(item => (
        <div key={item.text} className="column is-6">
          <section style={{margin:'10px'}}>
            <div className="has-text-centered">
              <div
                style={{
                  width: '240px',
                  display: 'inline-block',
                }}
              >
                <Fade>
                <PreviewCompatibleImage imageInfo={item} />
                </Fade>
              </div>
            </div>
           <Fade>
            <ReviewCard>{item.text}</ReviewCard>
           </Fade>
          
          </section>
        </div>
      ))}
      {/* </Slider> */}
    </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
