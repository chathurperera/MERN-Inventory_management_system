import API from "api";
import React, { useEffect, useState } from "react";
import classes from "./all-orders.module.scss";
import moment from "moment";
import deleteIcon from "assets/images/delete.png";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState();

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = async () => {
    await API.get("/order")
      .then((res) => {
        setAllOrders(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = async (e, orderId) => {
    const value = e.target.value;
    console.log(value);
    console.log(orderId);
    await API.patch(`/order/${orderId}`, { status: value })
      .then((res) => {
        console.log(res);
        toast.success("Order updated Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  const deleteOrder = async (orderId, cartId) => {
    console.log("typeof orderId === 'string'", typeof orderId === "string");
    console.log("typeof cartId === 'string'", typeof cartId === "string");
    await API.delete(`/order/${orderId}`)
      .then((res) => {
        toast.success("Order deleted Successfully");
        getAllOrders();
      })
      .catch((error) => {
        toast.success("Something went wrong");
        console.log(error);
      });
  };

  const headings = ["Order ID", "User ID", "Date", "total", "status"];

  return (
    <div className={classes.addOrders}>
      <div className={classes.head}>
        <h3>All Orders</h3>
      </div>
      <div className={classes.tableCard}>
        <table className={classes.allOrdersTable}>
          <thead>
            <tr>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allOrders?.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.userId}</td>
                  <td>{moment(item.createdAt).format("LL")}</td>
                  <td>${item.total}</td>
                  <td className={classes.status}>
                    {/* {item.status} */}
                    <Select
                      fullWidth
                      defaultValue={item.status}
                      id="demo-select-small"
                      size="small"
                      onChange={(e) => handleChange(e, item._id)}
                    >
                      <MenuItem value="Not processed">Not processed</MenuItem>
                      <MenuItem value="Processing">Processing</MenuItem>
                      <MenuItem value="Shipped">Shipped</MenuItem>
                      <MenuItem value="Delivered">Delivered</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <div className={classes.actionButtons}>
                      <img
                        src={deleteIcon}
                        onClick={() => deleteOrder(item._id, item.cartId)}
                        alt="delete item"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
            {allOrders?.length < 1 && (
              <tr>
                <h4>No orders found</h4>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AllOrders;
