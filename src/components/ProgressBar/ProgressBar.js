/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Container = styled.div`
  width: auto;
  background: ${COLORS.gray50};
  border-radius: 1rem;
  padding: ${(props) => (props.size === "large" ? "3px" : "0px")};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  width: ${(props) => props.value}%;
  background: ${COLORS.primary};
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: ${({ size }) => {
    if (size === "large") {
      return "8px 0px";
    } else if (size === "medium") {
      return "6px 0px";
    } else {
      return "4px 0px";
    }
  }};
  border-radius: ${(props) => {
    if (props.value >= 98) {
      return "1rem";
    }
  }};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Container
      size={size}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
    >
      <Bar size={size} value={value} />
    </Container>
  );
};

export default ProgressBar;
