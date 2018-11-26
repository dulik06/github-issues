import React from 'react';
import { shallow } from 'enzyme';

import SingleIssue from './SingleIssue';
import openIssueSign from '../assets/svg/attention-sign-outline.svg'

const props = {
  title: "test title",
  number: 2018,
  labels: [],
  time: "2018-11-18T22:53:22Z"
}
describe('SingleIssue', () => {
  const wrapper = shallow(<SingleIssue {...props} />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should not display <Labels /> component if labels array is empty', () => {
    expect(wrapper.find('#labels')).toHaveLength(0);
  });

  it('should display the open issues sign', () => {
    expect(wrapper.find('img').prop('src')).toEqual(openIssueSign);
  });

  it('should display the issue title', () => {
    expect(wrapper.find('div.single-issue__title--text').text()).toEqual("test title");
  });

  it('should display issue details', () => {
    expect(wrapper.find('div.single-issue__info')).toHaveLength(1);
  });
})