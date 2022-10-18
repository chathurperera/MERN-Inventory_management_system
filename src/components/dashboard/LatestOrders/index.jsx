import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./LatestOrders.module.scss";

const LatestOrders = ({ allOrders }) => {
  const headings = ["Order ID", "Total", "Status"];
  const navigate = useNavigate();
  
  return (
    <div className={classes.latestOrders}>
      <div className={classes.head}>
        <h5>Latest Orders</h5>
        <button onClick={() => navigate("/all-orders")}>View All</button>
      </div>
      <table>
        <thead>
          <tr>
            {headings.map((heading, index) => {
              return <th key={index}>{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {allOrders?.map((order) => {
            return (
              <tr key={order?._id}>
                <td className={classes.orderId}>{order._id}</td>
                <td className={classes.total}>${order.total}</td>
                <td className={classes.status}>
                  <span
                    style={{
                      backgroundColor:
                        order.status === "Not processed"
                          ? "#664dc9"
                          : order.status === "Processing"
                          ? "#ef4b4b"
                          : order.status === "Shipped"
                          ? "#38cb89"
                          : "#ffab00",
                    }}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LatestOrders;
