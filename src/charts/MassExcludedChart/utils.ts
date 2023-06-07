import * as amCore from "@amcharts/amcharts5";
import type { ITimeInterval } from "@amcharts/amcharts5/.internal/core/util/Time";
import moment from "moment";
import { DataFrequencyOptions } from "./types";

export function getBaseIntervalByDownsample(downsample: DataFrequencyOptions) {
  let interval: ITimeInterval;

  /*
  '1s' = '1second',
  '5s' = '5second',
  '15s' = '15second',
  '30s' = '30second',
  '1m' = '1minute',
  '5m' = '5minutes',
  '10m' = '10minutes',
  '15m' = '15minutes',
  '30m' = '30minutes',
  '1h' = '1hour',
*/

  switch (downsample) {
    case DataFrequencyOptions["1s"]:
      interval = {
        timeUnit: "second",
        count: 1,
      };
      break;
    case DataFrequencyOptions["2s"]:
      interval = {
        timeUnit: "second",
        count: 2,
      };
      break;
    case DataFrequencyOptions["5s"]:
      interval = {
        timeUnit: "second",
        count: 5,
      };
      break;
    case DataFrequencyOptions["15s"]:
      interval = {
        timeUnit: "second",
        count: 15,
      };
      break;
    case DataFrequencyOptions["30s"]:
      interval = {
        timeUnit: "second",
        count: 30,
      };
      break;
    case DataFrequencyOptions["1m"]:
      interval = {
        timeUnit: "minute",
        count: 1,
      };
      break;
    case DataFrequencyOptions["2m"]:
      interval = {
        timeUnit: "minute",
        count: 2,
      };
      break;
    case DataFrequencyOptions["5m"]:
      interval = {
        timeUnit: "minute",
        count: 5,
      };
      break;
    case DataFrequencyOptions["10m"]:
      interval = {
        timeUnit: "minute",
        count: 10,
      };
      break;
    // case DataFrequencyOptions['15m']:
    //   interval = {
    //     timeUnit: 'minute',
    //     count: 15,
    //   };
    //   break;
    // case DataFrequencyOptions['30m']:
    //   interval = {
    //     timeUnit: 'minute',
    //     count: 30,
    //   };
    //   break;
    // case DataFrequencyOptions['1h']:
    //   interval = {
    //     timeUnit: 'hour',
    //     count: 1,
    //   };
    //   break;

    default:
      interval = {
        timeUnit: "hour",
        count: 1,
      };
      break;
  }

  return interval;
}

export function customizeScrollbarGrips(grip: amCore.Button) {
  grip.get("background")?.setAll({
    fill: amCore.color("#668093"),
  });
  grip.get("icon")?.setAll({
    stroke: amCore.color("#FFFFFF"),
    strokeWidth: 2,
  });
}

export function isBetweenDates(
  date: number,
  initialDate: number,
  endDate: number
) {
  return date >= initialDate && date <= endDate;
}

export const formatDateFromEpochInMillisec = (dateNumber: number): string =>
  moment(dateNumber).format("MMMM Do, YYYY h:mm:ss A");

function generateArrayOfObjects(random: boolean) {
  const array = [];
  const startDate = 1683058545000;
  const step = 5 * 60 * 1000; // 5 minutes in milliseconds
  const valueRange = random ? 800 : 6000;
  const minValue = random ? 10 : 1000;
  const maxNum = random ? 5000 : 10000;
  for (let i = 0; i < maxNum; i++) {
    const timestamp = startDate + i * step;

    const value = Math.floor(Math.random() * valueRange) + minValue;

    const object = {
      date: timestamp,
      value,
    };

    array.push(object);
  }

  return array;
}

export function generateFakeDate() {
  const array = [];
  for (let i = 0; i < 11; i++) {
    const fakeName = `series-${i}`;
    const random = i % 2 === 0;
    const object = {
      name: fakeName,
      displayName: fakeName,
      rightAxis: random,
      data: generateArrayOfObjects(random),
    };
    array.push(object);
  }
  return array;
}
