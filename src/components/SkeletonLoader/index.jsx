import React from "react";
import Skeleton from "@mui/material/Skeleton";
import classes from "./SkeletonLoader.module.scss";

const SkeletonLoader = () => {
  return (
    <div className={classes.skeletonLoader}>
      <div className={classes.skeletonCard}>
        <div>
          <Skeleton variant="rectangular" width={80} height={8} />
          <Skeleton
            variant="rectangular"
            sx={{ marginTop: "7px" }}
            width={60}
            height={30}
          />
        </div>
        <Skeleton variant="circular" width={55} height={55} />
      </div>
      <div className={classes.skeletonCard}>
        <div>
          <Skeleton variant="rectangular" width={80} height={8} />
          <Skeleton
            variant="rectangular"
            sx={{ marginTop: "7px" }}
            width={60}
            height={30}
          />
        </div>
        <Skeleton variant="circular" width={55} height={55} />
      </div>
      <div className={classes.skeletonCard}>
        <div>
          <Skeleton variant="rectangular" width={80} height={8} />
          <Skeleton
            variant="rectangular"
            sx={{ marginTop: "7px" }}
            width={60}
            height={30}
          />
        </div>
        <Skeleton variant="circular" width={55} height={55} />
      </div>
      <div className={classes.skeletonCard}>
        <div>
          <Skeleton variant="rectangular" width={80} height={8} />
          <Skeleton
            variant="rectangular"
            sx={{ marginTop: "7px" }}
            width={60}
            height={30}
          />
        </div>
        <Skeleton variant="circular" width={55} height={55} />
      </div>
    </div>
  );
};

export default SkeletonLoader;
