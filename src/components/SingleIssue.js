import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Labels from './Labels';
import Timestamp from 'react-timestamp';

import openIssueSign from '../assets/svg/attention-sign-outline.svg'

class SingleIssue extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    labels: PropTypes.array.isRequired,
    time: PropTypes.string.isRequired,
  }

  render() {
    return (
      <li>
        <div className='single-issue__title--container'>
          <img src={openIssueSign} alt='open issues sign' className='single-issue__title--icon'/>
          <div className='single-issue__title--text'>{this.props.title}</div>
        </div>
        <div className='single-issue__info'>
          <span className='single-issue__info--text'>
            #{this.props.number} opened
            <Timestamp time={this.props.time}/>
            by {this.props.author}
          </span>
         {
           this.props.labels.length > 0 ? 
            this.props.labels.map(label =>
              <Labels name={label.name} color={label.color} key={label.id} id="labels"/>
            ) 
            :
            null
          }
        </div>
      </li>
     
    )
  }
}
export default SingleIssue;