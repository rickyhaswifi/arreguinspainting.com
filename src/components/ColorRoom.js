import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
import Room from '../shared/images/transparent-living.png';
import { ColorRoomWrap, ColorRoomImageA } from "../styled-components/colorRoom-sc";
import {TitleMain, CenterDis} from '../styled-components/shared-sc';

class ColorRoom extends Component {
  state = {
    background: '#F89100',
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
      <TitleMain>Choose your color<br/>
      We will make it happen.
      </TitleMain>
      <CenterDis>
         <SwatchesPicker onChange={ this.handleChange } />
      </CenterDis>
        </div>
        <div className="column is-6">
        <ColorRoomWrap style={{backgroundColor: background }}>
         <ColorRoomImageA src={Room}/>
        </ColorRoomWrap>
        </div>
      </div>
      </>
    );
  }
}

export default ColorRoom;