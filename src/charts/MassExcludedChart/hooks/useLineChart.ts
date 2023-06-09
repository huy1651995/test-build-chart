import { useRef, useLayoutEffect } from 'react';
import * as amCore from '@amcharts/amcharts5';
import * as amLine from '@amcharts/amcharts5/xy';
import amAnimatedTheme from '@amcharts/amcharts5/themes/Animated';

import type { Series } from '../types';

amCore.addLicense('AM5C288236420');

const useLineChart = (chartDiv: string, chartData: Array<Series>) => {
   const chartRef = useRef<amLine.XYChart>();
   useLayoutEffect(() => {
      // Create chart
      const root = amCore.Root.new(chartDiv);
      root.setThemes([amAnimatedTheme.new(root)]);

      const chart = root.container.children.push(
         amLine.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: 'panX',
            wheelY: 'panX',
            maxTooltipDistance: -1,
            paddingTop: 25,
         })
      );

      chart.plotContainer.events.on('wheel', (ev) => {
         if (ev.originalEvent.ctrlKey) {
            //! If control key is pressed we change behavior to zoom Y axis
            chart.set('wheelY', 'zoomY');
         } else {
            chart.set('wheelY', 'panX');
         }
      });
      //* Creating Axes and Series
      const xAxis = chart.xAxes.push(
         amLine.DateAxis.new(root, {
            maxDeviation: 0.2,
            renderer: amLine.AxisRendererX.new(root, {
               cellStartLocation: 0.2,
               cellEndLocation: 0.8,
            }),
            // @ts-ignore
            baseInterval: {
               timeUnit: 'minute',
               count: 5,
            },
         })
      );

      const yAxis = chart.yAxes.push(
         amLine.ValueAxis.new(root, {
            renderer: amLine.AxisRendererY.new(root, {}),
         })
      );

      const rightYAxis = chart.yAxes.push(
         amLine.ValueAxis.new(root, {
            renderer: amLine.AxisRendererY.new(root, {
               opposite: true,
            }),
         })
      );

      const cursor = chart.set(
         'cursor',
         amLine.XYCursor.new(root, {
            behavior: 'zoomX',
         })
      );

      cursor.lineY.set('visible', false);
      root.numberFormatter.set('numberFormat', '#.##');
      chartRef.current = chart;

      if (chartData.length > 0) {
         const yAxesValues: Record<'left' | 'right', number[]> = {
            left: [],
            right: [],
         };
         chartData.forEach(
            ({ name: seriesName, displayName, data, rightAxis: isOnRightAxis }: Series, i) => {
               if (i < 8) {
                  const valueAxis = isOnRightAxis ? 'right' : 'left';
                  yAxesValues[valueAxis] = yAxesValues[valueAxis].concat(
                     data.map((d) => Number(d.value))
                  );

                  const axisSeries = chart.series.push(
                     amLine.SmoothedXLineSeries.new(root, {
                        name: displayName,
                        valueXField: 'date',
                        valueYField: 'value',
                        xAxis,
                        yAxis: isOnRightAxis && rightYAxis ? rightYAxis : yAxis,
                        tooltip: amCore.Tooltip.new(root, {
                           pointerOrientation: 'down',
                           autoTextColor: true,
                           labelText: '{name}:\t[bold]{valueY}',
                        }),
                     })
                  );

                  axisSeries.data.setAll(data);
                  axisSeries.appear();
                  axisSeries.strokes.template.set('strokeWidth', 2);
               }
            }
         );
      }

      return () => {
         console.log('AmChart --- Clean UP ---- ');
         root.dispose();
      };
   }, [chartDiv, chartData]);
   return chartRef.current;
};

export { useLineChart };
