import React from 'react';
import ProductSalesChart from './ProductSalesChart';
import ProductSalesTable from './ProductSalesTable';

import '../../css/ProductSales/ProductSalesDashboard.css';

const ProductSalesDashboard = () => (
  <div className="product-sales-dashboard">
    <ProductSalesChart />
    <ProductSalesTable />
  </div>
);

export default ProductSalesDashboard;