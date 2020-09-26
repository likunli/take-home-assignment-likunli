import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import { useSelector } from 'react-redux';
import { LABELS, MONTHS } from '../../constants/constant';

import '../../css/ProductSales/ProductSalesChart.css';

const ProductSalesChart = () => {

  const { sales } = useSelector((state) => state.product);

  const svgRef = useRef(null);

  const [width, setWidth] = useState(0);

  const onWindowSizeChange = () => {
    if (svgRef.current) {
      const svgWidth = svgRef.current.getBoundingClientRect().width;
      setWidth(svgWidth);
    }
  }

  useEffect(() => {
    if (svgRef != null) {
      const svgWidth = svgRef.current.getBoundingClientRect().width;
      setWidth(svgWidth);
    }
  }, [svgRef]);

  // make d3 chart responsive on width
  useEffect(() => {
    window.addEventListener('resize', onWindowSizeChange);
    return (() => {
      window.removeEventListener('resize', onWindowSizeChange);
    })
  }, []);

  const parseDate = d3.timeParse('%Y-%m-%d');

  const x = d3.scaleLinear()
    .domain(d3.extent(sales, record => parseDate(record.weekEnding)))
    .range([0, width]);

  const y_retail = d3.scaleLinear()
    .domain([100, d3.max(sales, record => record.retailSales)])
    .range([150, 100]);

  const y_wholesale = d3.scaleLinear()
    .domain([150, d3.max(sales, record => record.wholesaleSales)])
    .range([200, 150]);

  const retailLine = d3.line()
    .x(record => x(parseDate(record.weekEnding)))
    .y(record => y_retail(record.retailSales))
    .curve(d3.curveCatmullRom.alpha(0.1));

  const wholesaleLine = d3.line()
    .x(record => x(parseDate(record.weekEnding)))
    .y(record => y_wholesale(record.wholesaleSales))
    .curve(d3.curveCatmullRom.alpha(0.1));

  return (
    <div className="product-sales-chart">
      <div className="sales-chart-container">
        <label className="sales-chart-label">{LABELS.RETAIL_SALES}</label>
        <svg className="sales-chart" ref={svgRef} >
          <path className="retail-sales" d={retailLine(sales)} />
          <path className="wholesale-sales" d={wholesaleLine(sales)} />
        </svg>
      </div>
      <div className="months">
        {MONTHS.map(month => <span key={month}>{month}</span>)}
      </div>
    </div>);
}

export default ProductSalesChart;