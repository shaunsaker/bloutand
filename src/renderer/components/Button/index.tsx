import React from "react";

import Button, { Props as ButtonProps } from "./Button";

interface Props extends ButtonProps {}

const ButtonContainer: React.FC<Props> = ({ ...props }) => {
  return <Button {...props} />;
};

export default ButtonContainer;
