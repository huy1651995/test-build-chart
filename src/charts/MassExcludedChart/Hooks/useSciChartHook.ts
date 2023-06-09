import React, { useRef, useLayoutEffect, useEffect } from 'react';

import * as amCore from '@amcharts/amcharts5';
import * as amLine from '@amcharts/amcharts5/xy';
import { useTheme } from '@material-ui/core';
import amAnimatedTheme from '@amcharts/amcharts5/themes/Animated';
import amMaterialTheme from '@amcharts/amcharts5/themes/Material';
import amDarkTheme from '@amcharts/amcharts5/themes/Dark';
import {
   SciChartSurface,
   NumericAxis,
   FastLineRenderableSeries,
   XyDataSeries,
   LegendModifier,
   MouseWheelZoomModifier,
   RubberBandXyZoomModifier,
   ZoomExtentsModifier,
} from 'scichart';

import { generateFakeDate } from '../utils';

// Call useWasmFromCDN once before SciChart.js is initialised to load Wasm files from our CDN
// Alternative methods for serving wasm from webpack or offline are available on our website

// Apply your licese key once before startup
// SciChartSurface.useWasmFromCDN();
// // Android, JavaScript

// SciChartSurface.setRuntimeLicenseKey(
//    'eeRIa/9iasDtN254YyftuIq/tvIh1xMOEH/pTohKQZG1KnogCq46ZY7kqUJGMOV6JB7bVlHaD91piwN8W13DbXbipa4XyOSnh0raeJALCLctAVzyzgrkhqOTAdxKru+FpCcfqgnQWp1fpEGLvtY/TVIpLmZFnwm52FpVBvzxsmJxVV3a33c1JAUi3GOPQKDBs4BWl262qPhf9qsExCYynKuMcs4Qc/sF0VVtXdcAfQFi4PQHCDcwHyH11UY+qbIKZBrrGnygYwDug4aIpBBV/5qmYhMme4JJspWNyFVqTAnPX71fV4mnT2BhBbv+bOhlh5fLzhzt9GNWpThrbx1XjoqikBFpjZIAjGsZJpVy3wI/KO2pe63iO3/1Y9uJE6cgIYnM7cB4J1qsnQDPkx1CSs31c5xaXsfSpeCr9nj3Q8O7HiyBigG/arEwdqiZvzbS3q3aNOb2V/iD/6UGsLprd6cbmrZdE65t7XsjuqKy0eoGtQ2KS0n+O0dFiI4WJcr3SBMp5Oi3fjNj6Dz/uqK/lS6OJ/7iiohcdaUUMJQWymu/QKXG6tYYkkDWe0vW0+m+cpkBGzOdcR+v+8egTOj9JiqcdrkSJcE4Vg+UrFByriWL3na0m48ezTn8g0XT4Bmo/rHEWhtG2rKQUkpVY9K6jSZj7BP3Z0mTFowRfFudSXhVHqqY/mxVf2WfrOBWlNH2hodMFLDlxIFy6wX2NYXriiydTwehAjGSzYsBtlyvvPuhN6BFUfMemW5J6AJ6tpt/Txo+mK84Lz5NecpepG0ovEnUsch0Tb3oOEMBmguW+k5tifgdLcEOKKwp3l0kQ/6j6TjxYfZMhzFmAoRWWCQd2F7AkCU5LbxsMSz+Ig4='
// );

export async function initSciChart(
   chartDiv: string,
   chartData: Array<{ x: Array<number>; y: Array<number> }>
) {
   // Create the SciChartSurface in the div 'scichart-root'
   const { sciChartSurface, wasmContext } = await SciChartSurface.create(chartDiv);
   // console.log('🚀 ~ file: useSciChartHook.ts:44 ~ wasmContext:', wasmContext);
   // console.log(
   //   '🚀 ~ file: useSciChartHook.ts:46 ~ sciChartSurface:',
   //   sciChartSurface,
   // );

   sciChartSurface.chartModifiers.add(
      new RubberBandXyZoomModifier(),
      new MouseWheelZoomModifier(),
      new ZoomExtentsModifier(),
      new LegendModifier({ showCheckboxes: false })
   );

   // Create an X,Y Axis and add to the chart
   sciChartSurface.xAxes.add(new NumericAxis(wasmContext));
   sciChartSurface.yAxes.add(new NumericAxis(wasmContext));

   // ts-ignore
   // const dataSeries = new XyDataSeries(wasmContext, {
   //   xValues: [1, 2, 5, 8, 10],
   //   yValues: [3, 1, 7, 5, 8],
   // });

   chartData.forEach((seriesData) => {
      sciChartSurface.renderableSeries.add(
         new FastLineRenderableSeries(wasmContext, {
            dataSeries: new XyDataSeries(wasmContext, {
               xValues: seriesData.x,
               yValues: seriesData.y,
            }),
         })
      );
   });
   return sciChartSurface;
}

const useSciChartHook = (chartDiv: string, data: any) => {
   const [sciChartSurface, setSciChartSurface] = React.useState<SciChartSurface>();

   const run = async () => {
      const sciChart = await initSciChart(chartDiv, data);

      setSciChartSurface(sciChart);
   };

   useEffect(() => {
      run();
      return () => {
         // sciChart.then(sciChart => {
         //   console.log(
         //     '🚀 ~ file: useSciChartHook.ts:100 ~ return ~ sciChart:',
         //     sciChart,
         //   );

         //   sciChart.renderableSeries.clear();
         //   sciChart.yAxes.clear();
         //   sciChart.xAxes.clear();
         //   sciChart.delete();

         //   console.log(
         //     '🚀 ~ file: useSciChartHook.ts:100 ~ return ~ sciChart:',
         //     sciChart,
         //   );
         // });
         console.log('🚀 ~ file: useSciChartHook.ts:100 ~ return ~ Clean-up -------');

         sciChartSurface?.delete();
      };
   }, [chartDiv]);
};

export default useSciChartHook;
