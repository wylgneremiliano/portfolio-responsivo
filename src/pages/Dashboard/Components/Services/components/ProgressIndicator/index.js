import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Container, CardIndicator, Ball, Line } from "./styles";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));
export default function ProgressIndicator() {
  return (
    <Container>
      <BootstrapTooltip title="Indicador de nível " arrow placement="top">
        <CardIndicator status="complete">
          <Ball status="complete">
            <p>1</p>
          </Ball>
          <p>COMPLETO</p>
        </CardIndicator>
      </BootstrapTooltip>
      <Line />
      <BootstrapTooltip title="Indicador de nível" arrow placement="top">
        <CardIndicator status="active">
          <Ball status="active">
            <p>2</p>
          </Ball>
          <p>ATUAL</p>
        </CardIndicator>
      </BootstrapTooltip>
      <Line />
      <BootstrapTooltip title="Indicador de nível " arrow placement="top">
        <CardIndicator status="next">
          <Ball status="next">
            <p>3</p>
          </Ball>
          <p>PRÓXIMO</p>
        </CardIndicator>
      </BootstrapTooltip>
    </Container>
  );
}
