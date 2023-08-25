import React from "react";
import "./App.css";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
} from "@material-ui/core";
import MassExcludedChartSciChart from "./charts/MassExcludedChart/MassExcludedChartSciChart";
import MassExcludedChartAmChart from "./charts/MassExcludedChart/MassExcludedChartAmChart";
import { generateFakeDate } from "./charts/MassExcludedChart/utils";

function App() {
  const [show, setShow] = React.useState(true);
  const [selectedChart, setSelectedChart] = React.useState("both");
  const [dataSize, setDataSize] = React.useState(0);

  const [showSciChart, setShowSciChart] = React.useState(true);
  const [showAmChart, setShowAmChart] = React.useState(true);

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <FormControl
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",

            alignItems: "flex-start",
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
              <FormControlLabel
                value="sciChart"
                control={<Radio />}
                label="sciChart"
              />
              <FormControlLabel
                value="amChart"
                control={<Radio />}
                label="amChart v5"
              />
              <FormControlLabel
                value="both"
                control={<Radio />}
                label="Show both charts"
              />
            </RadioGroup>
          </div>

          <div>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Select Data Size
            </FormLabel>
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
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={selectedChart === "both" ? 6 : 12}>
            {(selectedChart === "sciChart" || selectedChart === "both") && (
              <Button
                variant="contained"
                onClick={() => setShowSciChart(!showSciChart)}
              >
                {show ? "Hide Scichart" : "Show Scichart "}
              </Button>
            )}

            {showSciChart && selectedChart !== "amChart" && (
              <MassExcludedChartSciChart data={arrayOfObjects} />
            )}
          </Grid>
          <Grid item xs={selectedChart === "both" ? 6 : 12}>
            {(selectedChart === "amChart" || selectedChart === "both") && (
              <Button
                variant="contained"
                onClick={() => setShowAmChart(!showAmChart)}
              >
                {show ? "Hide AmChart" : "Show AmChart"}
              </Button>
            )}

            {showAmChart && selectedChart !== "sciChart" && (
              <MassExcludedChartAmChart data={arrayOfObjects} />
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
