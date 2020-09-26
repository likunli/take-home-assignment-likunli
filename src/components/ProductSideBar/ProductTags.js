import React from 'react';
import { useSelector } from 'react-redux';

import '../../css/ProductSideBar/ProductTags.css';

const ProductTags = () => {

  const { tags } = useSelector((state) => state.product);

  return (
    <div className="product-tags">
      {tags.map(tag => (
        <div className="tag" key={tag}>{tag}</div>
      ))}
    </div>
  );
}

export default ProductTags;