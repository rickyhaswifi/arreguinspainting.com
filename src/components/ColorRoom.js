import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
import Room from '../shared/images/transparent-living.png';
import { ColorRoomWrap, ColorRoomImageA } from "../styled-components/colorRoom-sc";
import {TitleMain, CenterDis, Spacer} from '../styled-components/shared-sc';
import Fade from 'react-reveal/Fade'

class ColorRoom extends Component {
  state = {
    background: '#CF5055',
  };

  handleChange = (color, event) => {
    this.setState({ background: color.hex });
  };

  render() { 
    const {background} = this.state
    return ( 
      <>
      <div className="columns">
        <div className="column is-6">
          <Fade left>
      <TitleMain>Choose your color
      </TitleMain>
          </Fade>
      <CenterDis>
        <Fade left>   
         <SwatchesPicker onChange={ this.handleChange } />
        </Fade>
      </CenterDis>
      <Spacer />
      <Fade left>
      <TitleMain>
      We will make it happen.
      </TitleMain>
      </Fade>
        </div>
        <div className="column is-6">
          <Fade right>
        <ColorRoomWrap style={{backgroundColor: background }}>
         <ColorRoomImageA src={Room}/>
        </ColorRoomWrap>
          </Fade>
        </div>
      </div>
      </>
    );
  }
}

export default ColorRoom;