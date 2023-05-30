import React from 'react';
import { SvgIcon } from '@material-ui/core';
import type { SvgIconProps } from '@material-ui/core/SvgIcon';

const CheckMarkIcon: (props: SvgIconProps) => JSX.Element = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M9.81744 20.6142C10.2374 20.6142 10.5694 20.4286 10.8038 20.0674L20.0322 5.536C20.208 5.2528 20.2862 5.038 20.2862 4.8134C20.2862 4.2764 19.9248 3.9248 19.3878 3.9248C19.007 3.9248 18.7822 4.0516 18.548 4.4228L9.77844 18.3974L5.22764 12.4404C4.98364 12.0986 4.74904 11.9618 4.38784 11.9618C3.84104 11.9618 3.45044 12.3428 3.45044 12.8798C3.45044 13.1044 3.54804 13.3584 3.73364 13.5928L8.80184 20.0478C9.10464 20.4286 9.39744 20.6142 9.81744 20.6142' />

  </SvgIcon>
);

export default CheckMarkIcon;
