import React, { Component } from 'react';
import Labels from './Labels';
import Timestamp from 'react-timestamp';
import openIssueSign from '../assets/svg/attention-sign-outline.svg'

class SingleIssue extends Component {
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
              <Labels name={label.name} color={label.color} key={label.id}/>
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