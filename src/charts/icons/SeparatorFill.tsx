import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const SeparatorFill: React.FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    viewBox='0 0 24 24'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.6241 7.97753H14.0562V6.66995H12.6241V7.97753ZM14.0659 4.10454C14.0659 3.92617 14.2111 3.78097 14.3896 3.78097H17.0524C17.2308 3.78097 17.3762 3.92617 17.3762 4.10454V7.98582C17.285 7.98081 17.1934 7.97753 17.1008 7.97753H15.3372V6.66995H15.5811C15.935 6.66995 16.2217 6.3834 16.2217 6.02956C16.2217 5.67591 15.935 5.38898 15.5811 5.38898H14.0659V4.10454ZM18.6569 8.23245V4.10454C18.6569 3.21983 17.9371 2.5 17.0524 2.5H14.3896C13.5047 2.5 12.7849 3.21983 12.7849 4.10454V5.38898H11.2274C10.8736 5.38898 10.5869 5.67591 10.5869 6.02956C10.5869 6.3834 10.8736 6.66995 11.2274 6.66995H11.3431V7.97753H8.27561V5.8753C8.27561 5.45917 7.93816 5.12172 7.52184 5.12172C7.10572 5.12172 6.76827 5.45917 6.76827 5.8753V7.981C4.12729 8.0508 2 10.2194 2 12.8768V12.8866V14.3644C2 17.0658 4.19786 19.2637 6.8992 19.2637H17.1008C17.1934 19.2637 17.285 19.2606 17.3762 19.2556V20.5109C17.3762 20.8647 17.6629 21.1515 18.0165 21.1515C18.3702 21.1515 18.6569 20.8647 18.6569 20.5109V19.0088C20.5976 18.3568 22 16.5218 22 14.3644V12.8866V12.8768C22 10.7194 20.5976 8.88441 18.6569 8.23245V8.23245Z'
    />
  </SvgIcon>
);

export default SeparatorFill;