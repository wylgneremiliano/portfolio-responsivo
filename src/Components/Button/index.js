import React from "react";

import { Container } from "./styles";
export default function ButtonComponent({ ...rest }) {
  return <Container {...rest} />;
}
