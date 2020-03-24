import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
import Room from '../shared/images/transparent-living.png';

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
     <SwatchesPicker onChange={ this.handleChange } />
                  </div>
                  <div className="column is-6">
     <section style={{
       backgroundColor: background, width:'100%', height:'100%', marginBottom:'-8px' }}>
      <img src={Room}/>
      </section>
                  </div>

                  </div>
      </>
    );
  }
}

export default ColorRoom;