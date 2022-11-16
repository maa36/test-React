import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header/Header';

test('should test Header component', () => {
  const wrapper = shallow(<Header name="test" />);
  expect(wrapper).toMatchSnapshot();
});