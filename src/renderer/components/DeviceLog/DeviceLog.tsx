import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from "react-vis";
import "react-vis/dist/style.css";
import moment from "moment";

import styles from "./styles";
import { colors } from "../../config";
import { DataPoint } from "../../types";

export interface Props {
  yAxisTitle: string;
  data: DataPoint[];
}

const DeviceLog: React.FC<Props> = ({ yAxisTitle, data }) => {
  return (
    <XYPlot
      xType="ordinal"
      yDomain={[0, 100]}
      width={552}
      height={300}
      animation
      style={styles.xyPlot}
    >
      <VerticalGridLines />

      <HorizontalGridLines />

      <LineMarkSeries color={colors.primary} data={data} animation />

      <XAxis
        title="Time"
        position="middle"
        tickFormat={value => {
          return moment(value).format("HH:mm:ss");
        }}
        style={styles.axes}
      />

      <YAxis title={yAxisTitle} position="middle" style={styles.axes} />
    </XYPlot>
  );
};

export default DeviceLog;
