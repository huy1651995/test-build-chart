import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const path = 'M50.5 83C34.2337 83 21 70.1664 21 54.391C21 44.3238 28.1594 37.4499 34.4764 31.3855C35.3323 30.5645 36.1783 29.7522 36.9959 28.9413C43.6152 22.3814 48.5056 17.8029 48.5547 17.758C49.6355 16.7473 51.3645 16.7473 52.4453 17.758C52.4944 17.8029 57.3848 22.3814 64.0041 28.9413C64.8217 29.7522 65.6684 30.5645 66.5236 31.3855C72.8406 37.4506 80 44.3238 80 54.391C80 70.1664 66.7663 83 50.5 83';

const WaterIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox='0 0 100 100'>
    <path fillRule='evenodd' clipRule='evenodd' d={path} />
  </SvgIcon>
);

export default WaterIcon;
