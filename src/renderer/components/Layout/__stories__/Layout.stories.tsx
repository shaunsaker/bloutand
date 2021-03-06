import React from "react";
import { storiesOf } from "@storybook/react";

import Layout from "..";
import { colors } from "../../../config";

storiesOf("Components|Layout", module).add("default", () => (
  <Layout>
    <div
      style={{
        margin: "auto",
        width: "100%",
        height: "100vh",
        backgroundColor: colors.lightGrey
      }}
    />
  </Layout>
));
