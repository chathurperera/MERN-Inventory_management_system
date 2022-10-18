import React, { useEffect, useState } from "react";
import classes from "./StatsCard.module.scss";
import totalProductsIcon from "assets/images/products.png";
import revenueIcon from "assets/images/increasing.png";
import usersIcon from "assets/images/group.png";
import cartIcon from "assets/images/shopping-cart.png";

const StatsCard = ({ allOrders, allUsers, allProducts }) => {
  const [totalRevenue, setTotalRevenue] = useState(null);

  useEffect(() => {
    let totalRevenue = 0;
    
    if (allOrders) {
      for (let order of [...allOrders]) {
        totalRevenue += Number(order.total);
      }
    }

    setTotalRevenue(totalRevenue);
  }, []);


  return (
    <div className={classes.statsCard}>
      <div className={classes.stats}>
        <div className={classes.data}>
          <p className={classes.title}>Total Products</p>
          <h3 className={classes.count}>{allProducts?.length}</h3>
        </div>
        <div className={classes.iconWrapper}>
          <img src={totalProductsIcon} alt="total products" />
        </div>
      </div>
      <div className={classes.stats}>
        <div className={classes.data}>
          <p className={classes.title}>Revenue</p>
          <h3 className={classes.count}>${totalRevenue}</h3>
        </div>
        <div className={classes.iconWrapper}>
          <img src={revenueIcon} alt="total revenue" />
        </div>
      </div>
      <div className={classes.stats}>
        <div className={classes.data}>
          <p className={classes.title}>Total signups</p>
          <h3 className={classes.count}>{allUsers?.length}</h3>
        </div>
        <div className={classes.iconWrapper}>
          <img src={usersIcon} alt="total users" />
        </div>
      </div>
      <div className={classes.stats}>
        <div className={classes.data}>
          <p className={classes.title}>Total Orders</p>
          <h3 className={classes.count}>{allOrders?.length}</h3>
        </div>
        <div className={classes.iconWrapper}>
          <img src={cartIcon} alt="total orders" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
