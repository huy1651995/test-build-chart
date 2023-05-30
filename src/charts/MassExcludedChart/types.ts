import * as amCore from '@amcharts/amcharts5';

export interface Series {
   name: string;
   displayName: string;
   data: SeriesData[];
   rightAxis: boolean;
}

export interface SeriesColor {
   hex: string;
   r: number;
   g: number;
   b: number;
   opacity?: number;
}
export type SeriesData = {
   value: string | number;
   date: Date | number;
};

export type Label = {
   id: string;
   name: string;
   color: string;
   icon?: keyof typeof import('../icons');
   availableForLabeling: boolean;
   isTestPeriod: boolean;
   displayLabeledData: boolean;
};

//import { Label,LabelReason,StreamMetric} from '../../../../Containers/WellView/types';

export type LabelReason = {
   id: string;
   labelItemId: string;
   reason: string;
};

export type StreamMetric = {
   displayName: string;
   name: string;
   color: SeriesColor;
   colorOptions?: string[];
   helperText?: string;
};

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

export enum SagaActions {
   GET_ALL_FACILITIES = 'facilityDashboard/getAllFacilities',
   GET_WELL_STATUS_DETAIL = 'facilityView/getWellStatusDetail',
   SAVE_EQUIPMENT_LABEL = 'facilityView/saveNewEquipmentLabel',
   HANDLE_MASS_EXCLUDE_LABEL_CLICK = 'facilityView/massExcludeLabelClick',
   UPDATE_MASS_EXCLUDE_LABEL = 'facilityView/massExcludeLabelUpdate',
   DELETE_MASS_EXCLUDE_LABEL = 'facilityView/deleteMassExcludeLabel',
   SET_SERIES_BLACK_LIST = 'facilityView/setSeriesBlackList',
}

//import { MassExcludeLabel, YAxesMinMax } from '../../../../Containers/Common/types';
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
export type BaseYAxisMinMax = {
   calculated: MinMax;
};

export type DisabledCalculatedMinMax = BaseYAxisMinMax & {
   disableCalculated: true;
   userInput: MinMax;
};

export type EnabledCalculatedMinMax = BaseYAxisMinMax & {
   disableCalculated: false;
   userInput?: MinMax;
};

export type YAxisMinMax = DisabledCalculatedMinMax | EnabledCalculatedMinMax;

export type MinMax = {
   min: number;
   max: number;
};
export type YAxesMinMax = {
   left: YAxisMinMax;
   right: YAxisMinMax;
};

export interface UISeriesData {
   icon: string;
   tagName: string;
   isLineSeries: boolean;
}
export type TimePeriod = {
   start: number;
   end: number;
};

export enum DataFrequencyOptions {
   '1s' = '1second',
   '2s' = '2second',
   '5s' = '5second',
   '15s' = '15second',
   '30s' = '30second',
   '1m' = '1minute',
   '2m' = '2minutes',
   '5m' = '5minutes',
   '10m' = '10minutes',
   '15m' = '15minutes',
   '30m' = '30minutes',
   '1h' = '1hour',
}

export type UIRangeLabelData = {
   isTP: boolean;
   tpInProgress?: boolean;
   start: number;
   end: number;
   label: Label;
};
export type ScrollbarUIRangeLabelData = UIRangeLabelData & {
   id: string;
};
export interface InitDateRangeBase {
   start: number;
   end: number;
}

export interface UISeriesData {
   icon: string;
   tagName: string;
   type: string;
   id?: string;
}

export enum ChartZoom {
   '15M' = '15M',
   '1H' = '1H',
   '3H' = '3H',
   '24H' = '24H',
   '7D' = '7D',
   ALL = 'All',
}
