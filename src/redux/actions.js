import { ActionTypes } from './reducers/product';
import mockData from '../assets/Webdev_data2.json';

export const getProduct = () => {
  const product = mockData[0];
  return {
    type: ActionTypes.SET_PRODUCT,
    product
  };
};
