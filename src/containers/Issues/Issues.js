import React, { Component } from "react";
import ExternalLink from '../../utils/ExternalLink';

import SingleIssue from '../../components/SingleIssue';
import Header from '../../components/Header';

class Issues extends Component {
  componentDidMount() {
    this.props.onRequestIssues();
  }    
  render() {
    const { loading, issues, error } = this.props;
    console.log(issues)
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
