import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PRODUCT_TABLE_COLUMN } from '../../constants/constant';
import { RiArrowDropDownLine } from 'react-icons/ri';
import '../../css/ProductSales/ProductSalesTable.css';
import cx from 'classnames';

function ProductSalesTable() {
  const { sales } = useSelector((state) => state.product);

  const [sortedField, setSortedField] = useState(PRODUCT_TABLE_COLUMN.WEEK_ENDING);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  const formatPrice = (price) => {
    return formatter.format(price);
  }

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${month}-${day}-${year.substring(year.length - 2, year.length)}`;
  };

  let sortedSales = [...sales].sort((a, b) => {
    switch (sortedField) {
      case PRODUCT_TABLE_COLUMN.RETAIL_SALES:
        return b.retailSales - a.retailSales;
      case PRODUCT_TABLE_COLUMN.WHOLESALE_SALES:
        return b.wholesaleSales - a.wholesaleSales;
      case PRODUCT_TABLE_COLUMN.UNITS_SOLD:
        return b.unitsSold - a.unitsSold;
      case PRODUCT_TABLE_COLUMN.RETAILER_MARGIN:
        return b.retailerMargin - a.retailerMargin;
      case PRODUCT_TABLE_COLUMN.WEEK_ENDING:
      default:
        return b.weekEnding - a.weekEnding;
    }
  });

  return (
    <div className="product-sales-table-container">
      <table className="product-sales-table">
        <thead>
          <tr>
            {
              Object.values(PRODUCT_TABLE_COLUMN).map(field => (
                <th onClick={() => setSortedField(field)} key={field} className={cx({ 'selected': field === sortedField })}>
                  {field}
                  <RiArrowDropDownLine className={'icon'} />
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {sortedSales.map(({ weekEnding, retailSales, wholesaleSales, unitsSold, retailerMargin }) => {
            return (
              <tr key={weekEnding}>
                <td>{formatDate(weekEnding)}</td>
                <td>{formatPrice(retailSales)}</td>
                <td>{formatPrice(wholesaleSales)}</td>
                <td>{unitsSold}</td>
                <td>{formatPrice(retailerMargin)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductSalesTable;