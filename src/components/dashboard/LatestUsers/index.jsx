import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "../LatestOrders/LatestOrders.module.scss";
import moment from "moment";
const LatestUsers = ({ allUsers }) => {
  const navigate = useNavigate();
  const headings = ["Name", "Email", "Date"];
  return (
    <div className={classes.latestOrders}>
      <div className={classes.head}>
        <h5>Latest Users</h5>
        <button onClick={() => navigate("/all-users")}>View All</button>
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
          {allUsers?.map((user) => {
            return (
              <tr key={user?._id}>
                <td className={classes.orderId}>
                  {user.firstName + " " + user.lastName}
                </td>
                <td className={classes.email}>{user.email}</td>
                <td className={classes.status}>
                  {moment(user.createdAt).format("LL")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LatestUsers;
