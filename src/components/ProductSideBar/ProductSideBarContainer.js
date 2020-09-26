import React from 'react';
import ProductDetail from './ProductDetail';
import ProductTags from './ProductTags';
import ProductNav from './ProductNav';

import '../../css/ProductSideBar/ProductSideBarContainer.css';

const ProductSideBarContainer = () => {

  return (<div className="product-side-bar-container">
    <ProductDetail />
    <ProductTags />
    <ProductNav />
  </div>);
}

export default ProductSideBarContainer;