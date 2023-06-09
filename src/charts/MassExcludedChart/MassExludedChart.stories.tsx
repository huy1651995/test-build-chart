import MassExcludedChart from './MassExcludedChartAmChart';
import React from 'react';

export const Charts = () => {
   return <MassExcludedChart data={[]} />;
};

export default {
   title: 'Charts/Mass Excluded Chart',
   component: Charts,
   parameters: {
      layout: 'fullscreen', // fullscreen, centered, padded
      actions: { disabled: true },
      options: { showPanel: false },
   },
};
