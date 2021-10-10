import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Container = styled.select`
  padding: 10px 6px;
  width: auto;
  border-radius: 0.4rem;
  background: ${COLORS.gray50};
  border-color: transparent;
  color: ${COLORS.gray500};

  &:hover {
    color: black;
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Container value={value} onChange={onChange}>
      {children}
    </Container>
  );
};

export default Select;
