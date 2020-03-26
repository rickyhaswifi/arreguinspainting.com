import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import {ReviewCard} from '../styled-components/reviews-sc'
import {Spacer} from '../styled-components/shared-sc'

// class FeatureGrid extends Component {
//   render({ gridItems }) {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
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
  <div className="columns">
    <Slider>
    {gridItems.map(item => (
      <div key={item.text} className="column is-12">
       <Spacer/>
       <Spacer/>
       <Spacer/>
        <ReviewCard>
        {/* <img src={item} /> */}
        <p>{item.text}</p>
        {/* <PreviewCompatibleImage imageInfo={item} /> */}
        </ReviewCard>
   


      </div>
    ))}
    </Slider>
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
