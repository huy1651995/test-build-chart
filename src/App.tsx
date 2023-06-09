import React from 'react';
import './App.css';

import {
   FormControl,
   FormLabel,
   RadioGroup,
   FormControlLabel,
   Radio,
   Button,
} from '@material-ui/core';
import MassExcludedChartSciChart from './charts/MassExcludedChart/MassExcludedChartSciChart';
import MassExcludedChartAmChart from './charts/MassExcludedChart/MassExcludedChartAmChart';

function App() {
   const [show, setShow] = React.useState(true);
   const [selectedChart, setSelectedChart] = React.useState('sciChart');
   return (
      <>
         <div>
            <div>
               <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">Select Chart</FormLabel>
                  <RadioGroup
                     aria-labelledby="demo-controlled-radio-buttons-group"
                     name="controlled-radio-buttons-group"
                     value={selectedChart}
                     onChange={(_, value) => {
                        setSelectedChart(value);
                        console.log(value);
                     }}
                  >
                     <FormControlLabel value="sciChart" control={<Radio />} label="sciChart" />
                     <FormControlLabel value="amChart" control={<Radio />} label="amChart v5" />
                     <Button variant="contained" onClick={() => setShow(!show)}>
                        {show ? 'Hide Chart' : 'Show Chart'}
                     </Button>
                  </RadioGroup>
               </FormControl>
            </div>
         </div>
         {show && selectedChart === 'sciChart' && <MassExcludedChartSciChart />}
         {show && selectedChart === 'amChart' && <MassExcludedChartAmChart />}
      </>
   );
}

export default App;
