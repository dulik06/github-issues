import React, { Component } from "react";
import ExternalLink from '../../utils/ExternalLink';
import PropTypes from 'prop-types';

import SingleIssue from '../../components/SingleIssue';
import Header from '../../components/Header';

class Issues extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    issues: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.props.onRequestIssues();
  }    
  render() {
    const { loading, issues, error } = this.props;
    return (
      <div>
      <Header />
        <div>
        {issues && !loading ? (
          <ul className='issues-list'>
            {issues.map(issue => 
            <ExternalLink to={`https://github.com/facebook/react/issues/${issue.number}`}  key={issue.number}>
              <SingleIssue
                title={issue.title}
                number={issue.number}
                author={issue.user.login}
                labels={issue.labels}
                time={issue.created_at}
              />
            </ExternalLink>
            )}
          </ul>
        ) : (
          <div>Loading....</div>
        )}
        </div>
        <div>
         {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}  
        </div>
      </div>
    );
  }
}

export default Issues;
