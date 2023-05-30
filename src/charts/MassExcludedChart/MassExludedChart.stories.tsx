import MassExcludedChart from './MassExcludedChart';
import React from 'react';

export const Charts = () => {
   return <MassExcludedChart />;
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
