import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import isExternal from 'is-url-external';
import PropTypes from 'prop-types';
/**
 * Link that also works for external URL's
 */
class ExternalLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
  }
  render() {
    return isExternal(this.props.to) ?
    // eslint-disable-next-line
      <a
        href={this.props.to}
        {...this.props}
      />
      :
      <Link {...this.props} />;
  }
}


export default ExternalLink;