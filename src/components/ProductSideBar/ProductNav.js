import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { AiOutlineBarChart } from 'react-icons/ai';
import { VscHome } from 'react-icons/vsc';

import '../../css/ProductSideBar/ProductNav.css';

const ProductNav = () => (
  <nav className="product-sidebar-nav">
    <ul>
      <li>
        <NavLink
          activeClassName="selected"
          className="nav-item"
          exact
          to={`/overview`}
        >
          <VscHome className="icon" />
          OVERVIEW
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="selected"
          className="nav-item"
          exact
          to={`/`}
        >
          <AiOutlineBarChart className="icon" />
          SALES
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default withRouter(ProductNav);