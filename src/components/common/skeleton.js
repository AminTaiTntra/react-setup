import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = function ({
 width, height, className, style 
}) {
  return (
    <Skeleton
      className={className}
      width={width}
      height={height}
      style={style}
    />
  );
};
export default SkeletonLoader;
