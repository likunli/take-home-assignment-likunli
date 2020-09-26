import React from 'react';
import { useSelector } from 'react-redux';

import '../../css/ProductSideBar/ProductDetail.css';

const ProductDetail = () => {
  const {image, title, subtitle} = useSelector((state) => state.product);

  return (
    <div className="product-info">
      <img className="product-image" src={image} alt={title} />
      <h3 className="product-title">{title}</h3>
      <p className="product-subtitle">{subtitle}</p>
    </div>
  );
}

export default ProductDetail;