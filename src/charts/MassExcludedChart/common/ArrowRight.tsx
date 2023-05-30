import React from 'react';
import { makeStyles, SvgIcon, SvgIconProps } from '@material-ui/core';
import { renderToString } from 'react-dom/server';
import style from '../../style-helper';
import { SeriesColor } from '../types';

const { beforeAfter } = style;

interface RenderedProps extends SvgIconProps {
   seriesColor: SeriesColor;
}

export const path =
   'M8.34111 20.7569L8.34108 20.7569C7.19238 20.2589 6.18125 19.5722 5.30459 18.6954L5.30456 18.6954C4.42784 17.8187 3.74114 16.8076 3.2431 15.6589L3.24309 15.6589C2.74848 14.5183 2.5 13.3003 2.5 12C2.5 10.6997 2.74848 9.48169 3.24309 8.34106L3.2431 8.34104C3.74114 7.19238 4.42784 6.18124 5.30457 5.30453L5.30458 5.30452C6.18103 4.42804 7.19361 3.74136 8.34556 3.24324L8.14711 2.78431L8.34557 3.24324C9.48971 2.74846 10.7095 2.5 12.0098 2.5C13.3101 2.5 14.5281 2.74846 15.6687 3.24305C16.8173 3.74105 17.8265 4.42757 18.6997 5.3039C19.5734 6.18066 20.2587 7.192 20.757 8.34105C21.2515 9.48168 21.5 10.6997 21.5 12C21.5 13.3004 21.2515 14.5183 20.757 15.6589L20.757 15.6589C20.2589 16.8076 19.5722 17.8187 18.6955 18.6954L18.6955 18.6954C17.8188 19.5722 16.8076 20.2589 15.659 20.7569L15.6589 20.7569C14.5183 21.2515 13.3003 21.5 12 21.5C10.6996 21.5 9.48169 21.2515 8.34111 20.7569ZM9.32118 15.3768C8.73539 15.9626 8.73539 16.9124 9.32118 17.4982C9.90696 18.0839 10.8567 18.0839 11.4425 17.4982L15.88 13.0607C16.4658 12.4749 16.4658 11.5251 15.88 10.9393L11.4425 6.50184C10.8567 5.91605 9.90696 5.91605 9.32118 6.50184C8.73539 7.08762 8.73539 8.03737 9.32118 8.62316L12.698 12L9.32118 15.3768Z';

const ArrowRight: React.FC<SvgIconProps> = (props) => (
   <SvgIcon {...props}>
      <path d={path} />
   </SvgIcon>
);

const useStyles = makeStyles<{ color: SeriesColor }>((theme) => ({
   iconContainer: {
      paddingRight: 4,
      paddingLeft: 4,
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      '&::before': {
         ...beforeAfter,
         borderRadius: '50%',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         // background: ({ color: { r, g, b, opacity } }) =>
         //    theme.palette.getContrastText(`rgba(${r}, ${g}, ${b}, ${opacity || 1})`),
         background: 'gray',
         zIndex: -1,
         height: 16,
         width: 16,
      },
   },
}));

const RenderedArrow: React.FC<RenderedProps> = (props) => {
   const { seriesColor } = props;
   const classes = useStyles({ color: seriesColor });

   return (
      <div className={classes.iconContainer}>
         <ArrowRight {...props} htmlColor={seriesColor.hex} />
      </div>
   );
};

export const string = (props: RenderedProps) => renderToString(<RenderedArrow {...props} />);
export default ArrowRight;
