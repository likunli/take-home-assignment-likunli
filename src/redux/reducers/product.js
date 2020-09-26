const initialState = {
  image: '',
  title: '',
  subtitle: '',
  tags: [],
  sales: [],
};


export const ActionTypes = {
  SET_PRODUCT: 'SET_PRODUCT'
};


export default function reducer(state = initialState, action) {
  const { type, product } = action;

  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return {
        ...state,
        ...product,
      };
    default:
      return state;
  }
}