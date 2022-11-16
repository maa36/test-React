import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from '../../components/Products/ProductsList';
import products from '../../mocks/products'


test('should test ProductForm component', () => {
  const onSubmitSpy = jest.fn();
   
  const wrapper = shallow(<ProductsList products={products} onDelete={onSubmitSpy}  />);
  expect(wrapper).toMatchSnapshot();
});



// test('test Products List component', () => {

  
//   expect(wrapper).toMatchSnapshot();
// });

// test('should call handleAddTodo method', () => {
//   const instance = wrapper.instance();
//   const value = 'Publish Article';
//   instance.handleAddTodo({
//     preventDefault: () => {},
//     target: {
//       todo: {
//         value
//       }
//     }
//   });
// });