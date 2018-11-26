import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Labels extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div className='labels' style={{backgroundColor:`#${this.props.color}`}}>
        {this.props.name}
      </div>
    )
  }
}
export default Labels;