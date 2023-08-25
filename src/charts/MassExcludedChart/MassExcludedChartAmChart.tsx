import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useLineChart } from './Hooks/useLineChart';

import { generateFakeDate } from './utils';
import useSciChartHook from './Hooks/useSciChartHook';
import { SciChartSurface } from 'scichart';

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
      height: '600px',
      width: '100%',
   },
}));
export interface Props {
   data: any;
}
const MassExcludedChartAmChart: React.FC<Props> = (props) => {
   const { data } = props;
   SciChartSurface.useWasmFromCDN();
   // Android, JavaScript

   SciChartSurface.setRuntimeLicenseKey(
      'eeRIa/9iasDtN254YyftuIq/tvIh1xMOEH/pTohKQZG1KnogCq46ZY7kqUJGMOV6JB7bVlHaD91piwN8W13DbXbipa4XyOSnh0raeJALCLctAVzyzgrkhqOTAdxKru+FpCcfqgnQWp1fpEGLvtY/TVIpLmZFnwm52FpVBvzxsmJxVV3a33c1JAUi3GOPQKDBs4BWl262qPhf9qsExCYynKuMcs4Qc/sF0VVtXdcAfQFi4PQHCDcwHyH11UY+qbIKZBrrGnygYwDug4aIpBBV/5qmYhMme4JJspWNyFVqTAnPX71fV4mnT2BhBbv+bOhlh5fLzhzt9GNWpThrbx1XjoqikBFpjZIAjGsZJpVy3wI/KO2pe63iO3/1Y9uJE6cgIYnM7cB4J1qsnQDPkx1CSs31c5xaXsfSpeCr9nj3Q8O7HiyBigG/arEwdqiZvzbS3q3aNOb2V/iD/6UGsLprd6cbmrZdE65t7XsjuqKy0eoGtQ2KS0n+O0dFiI4WJcr3SBMp5Oi3fjNj6Dz/uqK/lS6OJ/7iiohcdaUUMJQWymu/QKXG6tYYkkDWe0vW0+m+cpkBGzOdcR+v+8egTOj9JiqcdrkSJcE4Vg+UrFByriWL3na0m48ezTn8g0XT4Bmo/rHEWhtG2rKQUkpVY9K6jSZj7BP3Z0mTFowRfFudSXhVHqqY/mxVf2WfrOBWlNH2hodMFLDlxIFy6wX2NYXriiydTwehAjGSzYsBtlyvvPuhN6BFUfMemW5J6AJ6tpt/Txo+mK84Lz5NecpepG0ovEnUsch0Tb3oOEMBmguW+k5tifgdLcEOKKwp3l0kQ/6j6TjxYfZMhzFmAoRWWCQd2F7AkCU5LbxsMSz+Ig4='
   );
   const divId = 'massExcludeChart-amChart';
   const classes = useStyles();

   // Example usage
   // const arrayOfObjects = generateFakeDate(22, 5000);

   // const sciChartData = arrayOfObjects.map((data: any) => ({
   //    x: data.data.map((d: any) => d.date) as Array<number>,
   //    y: data.data.map((d: any) => d.value) as Array<number>,
   // }));

   // @ts-ignore
   useLineChart(divId, data);

   // useSciChartHook(divId, sciChartData);

   return (
      // parent of amChart needs to be position:absolute to resolve scroll issues when screen or containers change shape
      <>
         <h1>AmChart Chart</h1>
         <div className={classes.wrapper}>
            <div className={classes.chart}>
               <div className={classes.chartOuterContainer}>
                  <div id={divId} className={classes.chartContainer} />
               </div>
               <div className={classes.controls}></div>
            </div>
         </div>
      </>
   );
};

export default MassExcludedChartAmChart;
