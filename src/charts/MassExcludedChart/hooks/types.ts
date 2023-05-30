import { useRef, useLayoutEffect } from 'react';
import * as amCore from '@amcharts/amcharts5';
import * as amLine from '@amcharts/amcharts5/xy';
import amAnimatedTheme from '@amcharts/amcharts5/themes/Animated';
import amMaterialTheme from '@amcharts/amcharts5/themes/Material';
import amDarkTheme from '@amcharts/amcharts5/themes/Dark';
import am5themes_Micro from '@amcharts/amcharts5/themes/Micro';

export type ConnectedWell = {
   wellPrimoPrprty: string;
   wellName: string;
   startdatetime: number;
   enddatetime: number;
   wellColor: string | null;
   wellShortName: string | null;
};

export type ConnectedWellForChart = ConnectedWell & {
   category: '';
   text: string;
   settings: {
      fill: amCore.Color;
   };
};

export type MassExcludeLabel = {
   id: number;
   guid: string;
   equipmentId: number;
   labelItemId: string;
   startdatetime: number;
   enddatetime: number;
   comment: string | null;
   createdAt: string;
   createdBy: string;
   updatedAt: string;
   updatedBy: string;
   labelReasonId: number;
};

export interface SeriesColor {
   hex: string;
   r: number;
   g: number;
   b: number;
   opacity?: number;
}

export type StreamMetric = {
   displayName: string;
   name: string;
   color: SeriesColor;
   colorOptions?: string[];
   helperText?: string;
};

export type Label = {
   id: string;
   name: string;
   color: string;
   icon?: any;
   availableForLabeling: boolean;
   isTestPeriod: boolean;
   displayLabeledData: boolean;
};

export type LabelReason = {
   id: string;
   labelItemId: string;
   reason: string;
};

export enum DataFrequencyOptions {
   '1s' = '1second',
   // '2s' = '2second',
   // '5s' = '5second',
   '10s' = '10second',
   // '15s' = '15second',
   // '30s' = '30second',
   '1m' = '1minute',
   // '2m' = '2minutes',
   '5m' = '5minutes',
   '10m' = '10minutes',
   // '15m' = '15minutes',
   '30m' = '30minutes',
   '1h' = '1hour',
   '1d' = '1day',
}

export type TimePeriod = {
   start: number;
   end: number;
};
export enum ChartZoom {
   '15M' = '15M',
   '1H' = '1H',
   '3H' = '3H',
   '24H' = '24H',
   '7D' = '7D',
   ALL = 'All',
}
