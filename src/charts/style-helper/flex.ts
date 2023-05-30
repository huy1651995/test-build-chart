import { CreateCSSProperties } from '@material-ui/styles';

export const displayFlex: CreateCSSProperties = { display: 'flex' };

// flexDirection
export const row: CreateCSSProperties = {
  ...displayFlex,
  flexDirection: 'row',
};
export const column: CreateCSSProperties = {
  ...displayFlex,
  flexDirection: 'column',
};
export const rowReverse: CreateCSSProperties = {
  ...displayFlex,
  flexDirection: 'row-reverse',
};
export const columnReverse: CreateCSSProperties = {
  ...displayFlex,
  flexDirection: 'column-reverse',
};

// justifyContent
export const rowStart: CreateCSSProperties = {
  ...row,
  justifyContent: 'flex-start',
};
export const rowCenter: CreateCSSProperties = {
  ...row,
  justifyContent: 'center',
};
export const rowEnd: CreateCSSProperties = {
  ...row,
  justifyContent: 'flex-end',
};
export const rowBetween: CreateCSSProperties = {
  ...row,
  justifyContent: 'space-between',
};
export const rowAround: CreateCSSProperties = {
  ...row,
  justifyContent: 'space-around',
};

export const columnStart: CreateCSSProperties = {
  ...column,
  justifyContent: 'flex-start',
};
export const columnCenter: CreateCSSProperties = {
  ...column,
  justifyContent: 'center',
};
export const columnEnd: CreateCSSProperties = {
  ...column,
  justifyContent: 'flex-end',
};
export const columnBetween: CreateCSSProperties = {
  ...column,
  justifyContent: 'space-between',
};
export const columnAround: CreateCSSProperties = {
  ...column,
  justifyContent: 'space-around',
};
export const columnStretch: CreateCSSProperties = {
  ...column,
  justifyContent: 'stretch',
};

// withAlignItems
// rowStart
export const rowStartStart: CreateCSSProperties = {
  ...rowStart,
  alignItems: 'flex-start',
};
export const rowStartCenter: CreateCSSProperties = {
  ...rowStart,
  alignItems: 'center',
};
export const rowStartEnd: CreateCSSProperties = {
  ...rowStart,
  alignItems: 'flex-end',
};
export const rowStartAround: CreateCSSProperties = {
  ...rowStart,
  alignItems: 'space-around',
};
export const rowStartBetween: CreateCSSProperties = {
  ...rowStart,
  alignItems: 'space-between',
};
export const rowStartStretch: CreateCSSProperties = {
  ...rowStart,
  alignItems: 'stretch',
};

// rowCenter
export const rowCenterStart: CreateCSSProperties = {
  ...rowCenter,
  alignItems: 'flex-start',
};
export const rowCenterCenter: CreateCSSProperties = {
  ...rowCenter,
  alignItems: 'center',
};
export const rowCenterEnd: CreateCSSProperties = {
  ...rowCenter,
  alignItems: 'flex-end',
};
export const rowCenterBetween: CreateCSSProperties = {
  ...rowCenter,
  justifyContent: 'space-between',
};
export const rowCenterStretch: CreateCSSProperties = {
  ...rowCenter,
  justifyContent: 'stretch',
};
export const rowCenterAround: CreateCSSProperties = {
  ...rowCenter,
  justifyContent: 'space-around',
};

// rowEnd
export const rowEndStart: CreateCSSProperties = {
  ...rowEnd,
  alignItems: 'flex-start',
};
export const rowEndCenter: CreateCSSProperties = {
  ...rowEnd,
  alignItems: 'center',
};
export const rowEndEnd: CreateCSSProperties = {
  ...rowEnd,
  alignItems: 'flex-end',
};
export const rowEndBetween: CreateCSSProperties = {
  ...rowEnd,
  alignItems: 'space-between',
};
export const rowEndStretch: CreateCSSProperties = {
  ...rowEnd,
  alignItems: 'stretch',
};
export const rowEndAround: CreateCSSProperties = {
  ...rowEnd,
  alignItems: 'space-around',
};

// rowAround
export const rowAroundStart: CreateCSSProperties = {
  ...rowAround,
  alignItems: 'flex-start',
};
export const rowAroundCenter: CreateCSSProperties = {
  ...rowAround,
  alignItems: 'center',
};
export const rowAroundEnd: CreateCSSProperties = {
  ...rowAround,
  alignItems: 'flex-end',
};
export const rowAroundBetween: CreateCSSProperties = {
  ...rowAround,
  justifyContent: 'space-between',
};
export const rowAroundStretch: CreateCSSProperties = {
  ...rowAround,
  justifyContent: 'stretch',
};
export const rowAroundAround: CreateCSSProperties = {
  ...rowAround,
  justifyContent: 'space-around',
};

// rowBetween
export const rowBetweenStart: CreateCSSProperties = {
  ...rowBetween,
  alignItems: 'flex-start',
};
export const rowBetweenCenter: CreateCSSProperties = {
  ...rowBetween,
  alignItems: 'center',
};
export const rowBetweenEnd: CreateCSSProperties = {
  ...rowBetween,
  alignItems: 'flex-end',
};
export const rowBetweenBetween: CreateCSSProperties = {
  ...rowBetween,
  alignItems: 'space-between',
};
export const rowBetweenStretch: CreateCSSProperties = {
  ...rowBetween,
  alignItems: 'stretch',
};
export const rowBetweenAround: CreateCSSProperties = {
  ...rowBetween,
  alignItems: 'space-around',
};

// columnStart
export const columnStartStart: CreateCSSProperties = {
  ...columnStart,
  alignItems: 'flex-start',
};
export const columnStartCenter: CreateCSSProperties = {
  ...columnStart,
  alignItems: 'center',
};
export const columnStartEnd: CreateCSSProperties = {
  ...columnStart,
  alignItems: 'flex-end',
};
export const columnStartBetween: CreateCSSProperties = {
  ...columnStart,
  alignItems: 'space-between',
};
export const columnStartStretch: CreateCSSProperties = {
  ...columnStart,
  alignItems: 'stretch',
};
export const columnStartAround: CreateCSSProperties = {
  ...columnStart,
  alignItems: 'space-around',
};
// columnCenter
export const columnCenterStart: CreateCSSProperties = {
  ...columnCenter,
  alignItems: 'flex-start',
};
export const columnCenterCenter: CreateCSSProperties = {
  ...columnCenter,
  alignItems: 'center',
};
export const columnCenterEnd: CreateCSSProperties = {
  ...columnCenter,
  alignItems: 'flex-end',
};
export const columnCenterBetween: CreateCSSProperties = {
  ...columnCenter,
  alignItems: 'space-between',
};
export const columnCenterStretch: CreateCSSProperties = {
  ...columnCenter,
  alignItems: 'stretch',
};
export const columnCenterAround: CreateCSSProperties = {
  ...columnCenter,
  alignItems: 'space-around',
};
// columnEnd
export const columnEndStart: CreateCSSProperties = {
  ...columnEnd,
  alignItems: 'flex-start',
};
export const columnEndCenter: CreateCSSProperties = {
  ...columnEnd,
  alignItems: 'center',
};
export const columnEndEnd: CreateCSSProperties = {
  ...columnEnd,
  alignItems: 'flex-end',
};
export const columnEndBetween: CreateCSSProperties = {
  ...columnEnd,
  alignItems: 'space-between',
};
export const columnEndStretch: CreateCSSProperties = {
  ...columnEnd,
  alignItems: 'stretch',
};
export const columnEndAround: CreateCSSProperties = {
  ...columnEnd,
  alignItems: 'space-around',
};
// columnAround
export const columnAroundStart: CreateCSSProperties = {
  ...columnAround,
  alignItems: 'flex-start',
};
export const columnAroundCenter: CreateCSSProperties = {
  ...columnAround,
  alignItems: 'center',
};
export const columnAroundEnd: CreateCSSProperties = {
  ...columnAround,
  alignItems: 'flex-end',
};
export const columnAroundBetween: CreateCSSProperties = {
  ...columnAround,
  alignItems: 'space-between',
};
export const columnAroundStretch: CreateCSSProperties = {
  ...columnAround,
  alignItems: 'stretch',
};
export const columnAroundAround: CreateCSSProperties = {
  ...columnAround,
  alignItems: 'space-around',
};
// columnBetween
export const columnBetweenStart: CreateCSSProperties = {
  ...columnBetween,
  alignItems: 'flex-start',
};
export const columnBetweenCenter: CreateCSSProperties = {
  ...columnBetween,
  alignItems: 'center',
};
export const columnBetweenEnd: CreateCSSProperties = {
  ...columnBetween,
  alignItems: 'flex-end',
};
export const columnBetweenBetween: CreateCSSProperties = {
  ...columnBetween,
  alignItems: 'space-between',
};
export const columnBetweenStretch: CreateCSSProperties = {
  ...columnBetween,
  alignItems: 'stretch',
};
export const columnBetweenAround: CreateCSSProperties = {
  ...columnCenter,
  alignItems: 'space-around',
};
