import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useLineChart } from './hooks/useLineChart';

import * as mockData from './mock-data';

export interface Props {}

const useStyles = makeStyles((theme) => ({
   chart: {
      display: 'flex',
      width: '100%',
      height: '100%',
      padding: theme.spacing(2),
      paddingTop: 0,
      paddingLeft: 0,
      position: 'relative',
      overflow: 'hidden',
   },
   chartOuterContainer: {
      height: '100%',
      position: 'relative',
      flex: 1,
   },
   chartContainer: {
      width: '100%',
      height: '100%',
      position: 'absolute',
   },
   controls: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
   },
   wrapper: {
      height: '800px',
      width: '100%',
   },
}));

const MassExcludedChart: React.FunctionComponent<Props> = () => {
   const divId = 'massExcludeChart';
   const classes = useStyles();
   const [hasMouseEvents, setHasMouseEvents] = useState(false);

   // @ts-ignore
   const {
      metricData,
      streamColors,
      legendGrayList,
      openLegend,
      connectedWells,
      labels,
      excludeLabel,
      reasons,
      labeling,
      frequency,
      scope,
      zoom,
      MEAxisMinMax,
   }: any = mockData.mockData;
   console.log('🚀 ~ file: MassExcludedChart.tsx:60 ~ metricData:', metricData);

   // @ts-ignore
   useLineChart(
      divId,
      metricData,
      streamColors,
      legendGrayList,
      openLegend,
      connectedWells,
      labels,
      excludeLabel,
      reasons,
      labeling,
      frequency,
      scope,
      zoom,
      MEAxisMinMax,
      hasMouseEvents
   );

   return (
      // parent of amChart needs to be position:absolute to resolve scroll issues when screen or containers change shape
      <>
         <h1>Mass Excluded Chart</h1>
         <div className={classes.wrapper}>
            <div className={classes.chart}>
               <div className={classes.chartOuterContainer}>
                  <div
                     id={divId}
                     onMouseEnter={() => setHasMouseEvents(true)}
                     onMouseLeave={() => setHasMouseEvents(false)}
                     className={classes.chartContainer}
                  />
               </div>
               <div className={classes.controls}>
                  {/* <ChartControls
               fullscreen={fullscreen}
               onToggleFullscreen={setFullscreen}
               legendOpen={openLegend}
               setLegend={setOpenLegend}
            /> */}
               </div>
            </div>
         </div>
      </>
   );
};

export default MassExcludedChart;
