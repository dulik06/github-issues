import React, { Component } from 'react';

class Labels extends Component {
  render() {
    return (
      <div className='labels' style={{backgroundColor:`#${this.props.color}`}}>
        {this.props.name}
      </div>
    )
  }
}
export default Labels;