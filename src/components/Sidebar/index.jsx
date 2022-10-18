import React from "react";
import classes from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import dashboardIcon from "../../assets/images/sidebar/dashboard.png";
import ordersIcon from "../../assets/images/sidebar/shopping-cart.png";
import groupIcon from "../../assets/images/sidebar/group.png";
import shoppingBag from "../../assets/images/shoppingBag.svg";
import addProducts from "../../assets/images/addProducts.svg";
import logoutIcon from "../../assets/images/sidebar/logout.png";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "features/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  return (
    <div className={classes.sidebar}>
      <div className={classes.head}>
        <div className={classes.avatar}>
          <p>{user.currentUser?.user.firstName[0].toUpperCase()}</p>
        </div>
        <div className={classes.adminName}>
          <p>Welcome back</p>
          <p>
            {user.currentUser?.user.firstName +
              " " +
              user.currentUser?.user.lastName}
          </p>
        </div>
      </div>
      <div className={classes.sidebar__option}>
        <Link to="/">
          <img src={dashboardIcon} alt="dashboard icon" /> Dashboard
        </Link>
      </div>
      <div className={classes.sidebar__option}>
        <Link to="/products">
          <img src={shoppingBag} alt="shopping cart" /> Products
        </Link>
      </div>
      <div className={classes.sidebar__option}>
        <Link to="/create-product">
          <img src={addProducts} alt="add icon" /> Add Product
        </Link>
      </div>
      <div className={classes.sidebar__option}>
        <Link to="/all-orders">
          <img src={ordersIcon} alt="all orders icon" /> Orders
        </Link>
      </div>
      <div className={classes.sidebar__option}>
        <Link to="/all-users">
          <img src={groupIcon} alt="all users icon" /> Users
        </Link>
      </div>
      <div
        className={classes.sidebar__option}
        onClick={() => dispatch(logOut())}
      >
        <img src={logoutIcon} alt="all users icon" /> Logout
      </div>
    </div>
  );
};

export default Sidebar;
