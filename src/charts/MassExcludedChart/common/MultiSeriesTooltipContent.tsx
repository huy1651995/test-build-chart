import React from 'react';
import { renderToString } from 'react-dom/server';
import * as amLine from '@amcharts/amcharts5/xy';
import { makeStyles } from '@material-ui/core';
import htmlParser from 'html-react-parser';

import { UISeriesData } from '../types';

interface MultiSeriesTooltipContentProps {
   html: string | undefined;
   series: amLine.XYSeries[];
}

const useStyles = makeStyles((theme) => ({
   seriesTooltip: {
      padding: theme.spacing(1, 0, 0, 0),
      minWidth: '450px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'space-between',
   },
   seriesRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontWeight: 600,
   },
   icon: {
      flex: '1 1 70%',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
   },
   value: {
      margin: theme.spacing(0, 1),
      flex: '1 1 30%',
      fontWeight: 'normal',
      display: 'flex',
      justifyContent: 'flex-end',
   },
}));

type Styles = ReturnType<typeof useStyles>;

const SeriesRow: React.FC<{ series: amLine.XYSeries; classes: Styles }> = ({ series, classes }) => {
   const tooltipDataItem = series.get('tooltipDataItem');
   const hidden = series.isHidden();
   const value = tooltipDataItem?.get('valueY');

   if (typeof value !== 'undefined' && !hidden) {
      const name = series.get('name');
      const { icon } = series.get('userData') as UISeriesData;

      return (
         <div className={classes.seriesRow}>
            <div className={classes.icon}>
               {htmlParser(icon)}
               {name}
            </div>
            <div className={classes.value}>{value}</div>
         </div>
      );
   }

   return null;
};

const MultiSeriesTooltipContent: React.FC<MultiSeriesTooltipContentProps> = ({ series }) => {
   const classes = useStyles();

   return (
      <div className={classes.seriesTooltip}>
         {series.map((s, i) => (
            <SeriesRow key={i} series={s} classes={classes} />
         ))}
      </div>
   );
};

export const string = (props: MultiSeriesTooltipContentProps) =>
   (props.html ?? '') + renderToString(<MultiSeriesTooltipContent {...props} />);

export default MultiSeriesTooltipContent;
