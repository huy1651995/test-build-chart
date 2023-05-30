import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const WindIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon viewBox='0 0 100 100' {...props}>
    <path d='M46.7728 13.5683L20.6211 80.704C19.3117 84.0656 22.7711 87.3063 26.0402 85.7804L48.8082 75.1533C49.8805 74.6528 51.1195 74.6528 52.1918 75.1533L74.9599 85.7804C78.229 87.3063 81.6883 84.0656 80.3789 80.704L54.2272 13.5683C52.9038 10.1708 48.0962 10.1708 46.7728 13.5683Z' />
  </SvgIcon>
);

export default WindIcon;
