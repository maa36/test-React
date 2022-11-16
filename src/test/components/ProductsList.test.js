import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from '../../components/Products/ProductsList';
import products from '../../mocks/products'


test('should test ProductForm component', () => {
  const onSubmitSpy = jest.fn();
   
  const wrapper = shallow(<ProductsList products={products} onDelete={onSubmitSpy}  />);
  expect(wrapper).toMatchSnapshot();
});




