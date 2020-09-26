import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import ProductSideBarContainer from './components/ProductSideBar/ProductSideBarContainer';
import ProductSalesDashboard from './components/ProductSales/ProductSalesDashboard';
import { getProduct } from './redux/actions';
import { Switch, Route } from 'react-router-dom';

import './css/App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(dispatch))
  }, [dispatch]);

  return (
    <div className="page-wrapper">
      <Header />
      <section className="product-section">
        <ProductSideBarContainer />
        <Switch>
          <Route exact path="/product/:id/sales" component={ProductSalesDashboard} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
