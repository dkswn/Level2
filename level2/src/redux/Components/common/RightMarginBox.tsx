import React from "react";
import styled from "styled-components";

interface ActionType {
  margin: number;
  children: React.ReactNode;
}
function RightMarginBox({ margin, children }: ActionType) {
  return <StyledDiv margin={margin}>{children}</StyledDiv>;
}

export default RightMarginBox;

const StyledDiv = styled.div<{ margin: number }>`
  margin-right: ${(props) => props.margin}px;
`;
