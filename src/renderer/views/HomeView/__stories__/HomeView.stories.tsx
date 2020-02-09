import React from "react";
import { storiesOf } from "@storybook/react";

import HomeView from "../HomeView";

const handleScanForDevices = () => alert("Scan clicked.");

storiesOf("Views|HomeView", module).add("default", () => (
  <HomeView handleScanForDevices={handleScanForDevices} />
));
