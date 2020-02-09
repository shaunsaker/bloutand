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

import styles from "./styles";
import { colors } from "../../config";

interface DataPoint {
  x: number;
  y: number;
}

export interface Props {
  yAxisTitle: string;
  data: DataPoint[];
}

const DeviceLog: React.FC<Props> = ({ yAxisTitle, data }) => {
  return (
    <XYPlot width={460} height={300} style={styles.xyPlot}>
      <VerticalGridLines />

      <HorizontalGridLines />

      <LineMarkSeries color={colors.primary} animation data={data} />

      <XAxis title="Time" position="middle" style={styles.axes} />

      <YAxis title={yAxisTitle} position="middle" style={styles.axes} />
    </XYPlot>
  );
};

export default DeviceLog;