import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import ProductSideBarContainer from './components/ProductSideBar/ProductSideBarContainer';
import ProductSalesDashboard from './components/ProductSales/ProductSalesDashboard';
import { getProduct } from './redux/actions';
import { Switch, Route, Redirect } from 'react-router-dom';

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
          {/* For convenience, currently only show ProductSalesDashboard page */}
          <Route exact path="/" component={ProductSalesDashboard} />
          <Route exact path="/product/:id" component={ProductSalesDashboard} />
          <Route exact path="/product/:id/sales" component={ProductSalesDashboard} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
