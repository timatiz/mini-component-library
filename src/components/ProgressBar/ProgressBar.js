/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const Container = styled.div`
  width: auto;
  background: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  width: var(--width);
  background: ${COLORS.primary};
  height: var(--height);
  border-radius: 4px 0 0 4px;
`;

const BarWrapper = styled.div`
  /* trim off corners when the bar is near full */
  overflow: hidden;
  border-radius: 4px;
`;

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Container
      size={size}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            "--height": styles.height + "px",
            "--width": value + "%",
          }}
        />
      </BarWrapper>
    </Container>
  );
};

export default ProgressBar;
