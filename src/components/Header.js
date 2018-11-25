import React from 'react';

import githubLogo from '../assets/svg/github-logo.svg';

const Header = () => {
  return (
    <div className='header-container'>
      <img className='header-container__icon' src={githubLogo} alt='github logo'/>
      <div className='header-container__text'>facebook/react  is:open </div>
    </div>
  )
}

export default Header;