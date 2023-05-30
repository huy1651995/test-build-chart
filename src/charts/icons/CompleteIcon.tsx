import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const CompleteIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon viewBox='0 0 17 17' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.6086 3.78763C14.9203 5.09926 15.6426 6.8432 15.6426 8.69813C15.6426 10.5531 14.9203 12.297 13.6086 13.6086C12.297 14.9203 10.5531 15.6426 8.69812 15.6426C6.84318 15.6426 5.09926 14.9203 3.78763 13.6086C2.476 12.297 1.75365 10.5531 1.75365 8.69813C1.75365 6.8432 2.476 5.09926 3.78763 3.78763C5.09926 2.476 6.8432 1.75362 8.69812 1.75362C10.5531 1.75362 12.297 2.476 13.6086 3.78763M14.5282 14.5282C16.0855 12.971 16.9431 10.9004 16.9431 8.69812C16.9431 6.49584 16.0855 4.42531 14.5282 2.86802C12.9709 1.31076 10.9004 0.453125 8.69812 0.453125C6.49581 0.453125 4.42531 1.31076 2.86802 2.86802C1.31076 4.42531 0.453125 6.49584 0.453125 8.69812C0.453125 10.9004 1.31076 12.971 2.86802 14.5282C4.42531 16.0855 6.49581 16.9431 8.69812 16.9431C10.9004 16.9431 12.9709 16.0855 14.5282 14.5282M7.67714 12.7633C7.48012 12.7633 7.29236 12.6759 7.16551 12.5233L4.57616 9.40898C4.34121 9.12639 4.3798 8.7068 4.66242 8.47187C4.94503 8.23689 5.3646 8.27554 5.59955 8.55812L7.60832 10.9742L11.3012 5.22731C11.4999 4.9181 11.9117 4.82855 12.2208 5.02724C12.53 5.2259 12.6196 5.63761 12.4209 5.94679L8.23702 12.4576C8.12238 12.6361 7.92958 12.7491 7.71791 12.7621C7.70432 12.7629 7.69068 12.7633 7.67714 12.7633'
    />
  </SvgIcon>
);

export default CompleteIcon;