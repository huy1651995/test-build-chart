import * as React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { renderToString } from 'react-dom/server';

import { CommentIcon } from '../../icons';

import { TimePeriod } from '../types';

type LabelReasonTooltipProps = TimePeriod & {
   reason: string;
   comment: string;
   labelType: string;
};

const useStyles = makeStyles((theme) => ({
   labelReasonTooltip: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
   },
   container: {
      width: '100%',
   },
   commentContainer: {
      display: 'flex',
      gap: theme.spacing(1),

      '& > .icon, .comment': {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
      },
   },
   labelType: {
      fontWeight: 'bold',
   },
   dateRange: {
      fontStyle: 'italic',
      fontWeight: 'bold',
   },
}));

const LabelReasonTooltip: React.FC<LabelReasonTooltipProps> = ({
   reason,
   comment,
   labelType,
   start,
   end,
}) => {
   const classes = useStyles();

   return (
      <div className={classes.labelReasonTooltip}>
         <div className={classes.labelType}>{labelType}</div>
         <div className={classes.dateRange}>
            {moment(start).format('MM/DD/yyyy HH:mm:ss')} &#8594;{' '}
            {moment(end).format('MM/DD/yyyy HH:mm:ss')}
         </div>
         <div className={classes.container}>{`Label reason: ${reason}`}</div>
         {comment && comment.length && (
            <div className={classes.commentContainer}>
               <div className="icon">
                  <CommentIcon />
               </div>
               <div className="comment">{comment}</div>
            </div>
         )}
      </div>
   );
};

const labelReasonTooltip = (props: LabelReasonTooltipProps) =>
   renderToString(<LabelReasonTooltip {...props} />);

export default labelReasonTooltip;
