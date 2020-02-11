import React from "react";
import { storiesOf } from "@storybook/react";

import Select from "..";
import { services } from "../../../__mocks__";

const options = services.map(service => service.serviceName);
const onChange = (value: string) => alert(`${value} clicked.`);

storiesOf("Components|Select", module)
  .add("default", () => (
    <Select
      placeholder="Select a Service"
      options={options}
      handleChange={onChange}
    />
  ))
  .add("with value", () => (
    <Select
      placeholder="Select a Service"
      value={options[0]}
      options={options}
      handleChange={onChange}
    />
  ));
