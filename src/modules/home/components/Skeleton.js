import React from "react";
import { Skeleton } from "@mui/material/";
const SkeletonLoop = () => {
  const skeletonArray = [];
  for (let i = 1; i <= 10; i++) {
    skeletonArray.push(i);
  }
  return (
    <>
      {skeletonArray.map((render, index) => (
        <Skeleton key={index} wave='pulsate' variant='text' height={70} />
      ))}
    </>
  );
};

export default SkeletonLoop;
