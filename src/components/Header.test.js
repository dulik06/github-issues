import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import githubLogo from '../assets/svg/github-logo.svg';

describe('Header', () => {
  const wrapper = shallow(<Header />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display the github logo', () => {
    expect(wrapper.find('img').prop('src')).toEqual(githubLogo);
  });

  it('should display once the title', () => {
    expect(wrapper.find('div.header-container__text')).toHaveLength(1);
  });
})