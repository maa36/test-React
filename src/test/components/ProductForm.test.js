import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import ProductForm from '../../components/Products/Update/ProductForm';
import categories from '../../mocks/categories'

test('should test ProductForm component', () => {
  const onSubmitSpy = jest.fn();
   
  const wrapper = shallow(<ProductForm categories={categories} onSave={onSubmitSpy }   />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit handler', () => {
  const onSubmitSpy = jest.fn();
  const onSaveSpy = jest.fn();
  const preventDefault = jest.fn();
  const wrapper = shallow(<ProductForm categories={categories} onSave={onSaveSpy}  onSubmit={onSubmitSpy} />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('Form').simulate('submit',{ preventDefault });
  expect(onSubmitSpy).toHaveBeenCalled();
});

