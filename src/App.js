import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import PanelLayout from "./layouts/panelLayout";
import Products from "./pages/products";
import EditProduct from "pages/edit-product";
import CreateProduct from "pages/create-product";
import AllOrders from "pages/all-orders";
import AllUsers from "pages/all-users";
import "../src/App.scss";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state => state.user);
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<PanelLayout user={user.currentUser} />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="create-product" element={<CreateProduct />} />
        <Route path="all-orders" element={<AllOrders />} />
        <Route path="all-users" element={<AllUsers />} />
        <Route path="products/edit/:id" element={<EditProduct />} />
      </Route>
    </Routes>
  );
};

export default App;
