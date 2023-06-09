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
import { generateFakeDate } from './charts/MassExcludedChart/utils';

function App() {
   const [show, setShow] = React.useState(true);
   const [selectedChart, setSelectedChart] = React.useState('sciChart');
   const [dataSize, setDataSize] = React.useState(0);

   let arrayOfObjects = [];

   switch (dataSize) {
      case 0:
         arrayOfObjects = generateFakeDate(20, 5000);
         break;
      case 1:
         arrayOfObjects = generateFakeDate(20, 10000);
         break;
      case 2:
         arrayOfObjects = generateFakeDate(50, 5000);
         break;
      case 3:
         arrayOfObjects = generateFakeDate(50, 10000);
         break;

      default:
         arrayOfObjects = generateFakeDate(20, 5000);
         break;
   }

   return (
      <>
         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <FormControl
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',

                  alignItems: 'flex-start',
                  flexGrow: 1,
               }}
            >
               <div>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                     Select Chart Library
                  </FormLabel>
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
                  </RadioGroup>
               </div>

               <div>
                  <FormLabel id="demo-controlled-radio-buttons-group">Select Data Size</FormLabel>
                  <RadioGroup
                     aria-labelledby="demo-controlled-radio-buttons-group"
                     name="controlled-radio-buttons-group"
                     value={dataSize}
                     onChange={(_, value) => {
                        setDataSize(Number(value));
                        console.log(value);
                     }}
                  >
                     <FormControlLabel
                        value={0}
                        control={<Radio />}
                        label="20 lines x 5000 points"
                     />
                     <FormControlLabel
                        value={1}
                        control={<Radio />}
                        label="20 lines x 10000 points"
                     />
                     <FormControlLabel
                        value={2}
                        control={<Radio />}
                        label="50 lines x 5000 points"
                     />
                     <FormControlLabel
                        value={3}
                        control={<Radio />}
                        label="50 lines x 10000 points"
                     />
                  </RadioGroup>
               </div>
            </FormControl>
            <Button variant="contained" onClick={() => setShow(!show)}>
               {show ? 'Hide Chart' : 'Show Chart'}
            </Button>
         </div>
         {show && selectedChart === 'sciChart' && (
            <MassExcludedChartSciChart data={arrayOfObjects} />
         )}
         {show && selectedChart === 'amChart' && <MassExcludedChartAmChart data={arrayOfObjects} />}
      </>
   );
}

export default App;
