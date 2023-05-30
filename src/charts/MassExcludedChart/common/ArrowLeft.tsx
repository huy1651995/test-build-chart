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
   'M15.6589 3.24309L15.6589 3.2431C16.8076 3.74114 17.8187 4.42784 18.6954 5.30457L18.6954 5.30459C19.5722 6.18126 20.2589 7.19239 20.7569 8.34108L20.7569 8.34111C21.2515 9.48169 21.5 10.6997 21.5 12C21.5 13.3003 21.2515 14.5183 20.7569 15.6589L20.7569 15.659C20.2589 16.8076 19.5722 17.8188 18.6954 18.6955L18.6954 18.6955C17.819 19.572 16.8064 20.2586 15.6544 20.7568L15.8529 21.2157L15.6544 20.7568C14.5103 21.2515 13.2905 21.5 11.9902 21.5C10.6899 21.5 9.47188 21.2515 8.33125 20.757C7.18274 20.259 6.17348 19.5724 5.30025 18.6961C4.4266 17.8193 3.74128 16.808 3.24304 15.6589C2.74846 14.5183 2.5 13.3003 2.5 12C2.5 10.6996 2.74846 9.48168 3.24304 8.3411L3.24305 8.34109C3.74112 7.19238 4.42782 6.18125 5.30452 5.30458L5.30453 5.30457C6.18124 4.42784 7.19238 3.74114 8.34104 3.2431L8.34106 3.24309C9.48169 2.74848 10.6997 2.5 12 2.5C13.3004 2.5 14.5183 2.74848 15.6589 3.24309ZM14.6788 8.62316C15.2646 8.03738 15.2646 7.08763 14.6788 6.50184C14.093 5.91606 13.1433 5.91606 12.5575 6.50184L8.12 10.9393C7.53422 11.5251 7.53422 12.4749 8.12 13.0607L12.5575 17.4982C13.1433 18.084 14.093 18.084 14.6788 17.4982C15.2646 16.9124 15.2646 15.9626 14.6788 15.3768L11.302 12L14.6788 8.62316Z';

const ArrowLeft: React.FC<RenderedProps> = (props) => (
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
         <ArrowLeft {...props} htmlColor={seriesColor.hex} />
      </div>
   );
};

export const string = (props: RenderedProps) => renderToString(<RenderedArrow {...props} />);
export default ArrowLeft;
