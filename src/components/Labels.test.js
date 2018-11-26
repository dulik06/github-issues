import React from 'react';
import { shallow } from 'enzyme';

import Labels from './Labels';

const props = {
  name: 'test name'
}

describe('Labels', () => {
  const wrapper = shallow(<Labels {...props} />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display the name of the label', () => {
    expect(wrapper.find('div.labels')).toHaveLength(1);
  });
})