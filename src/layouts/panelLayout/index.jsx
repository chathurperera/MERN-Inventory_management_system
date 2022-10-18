import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import classes from "./panelLayout.module.scss";
import { Navigate } from "react-router-dom";
const PanelLayout = ({user}) => {
  
  if (!user) {
    return <Navigate to="/login" replace/>;
  }
  return (
    <main className={classes.layout}>
      <Sidebar />
      <div className={classes.outletWrapper}>
        <Outlet />
      </div>
    </main>
  );
};

export default PanelLayout;
