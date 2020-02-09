import React from "react";
import { storiesOf } from "@storybook/react";

import Select from "../Select";
import { services } from "../../../__mocks__";

const onChange = (value: string) => alert(`${value} clicked.`);

storiesOf("Components|Select", module)
  .add("default", () => (
    <Select
      placeholder="Select a Service"
      options={services}
      handleChange={onChange}
    />
  ))
  .add("with value", () => (
    <Select
      placeholder="Select a Service"
      value={services[0]}
      options={services}
      handleChange={onChange}
    />
  ));
