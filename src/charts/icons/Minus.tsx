import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const MinusIcon: React.FC<SvgIconProps> = props => (
  <SvgIcon {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.72957 12.88H19.2701C19.7446 12.88 20.1598 12.4796 20.1598 12.001C20.1598 11.5226 19.7446 11.132 19.2701 11.132H4.72957C4.25505 11.132 3.83984 11.5226 3.83984 12.001C3.83984 12.4796 4.25505 12.88 4.72957 12.88'
    />
  </SvgIcon>
);

export default MinusIcon;
