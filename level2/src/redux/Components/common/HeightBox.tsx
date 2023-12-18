import styled from "styled-components";

interface HeightBoxProps {
  height: number;
}
function HeightBox({ height }: HeightBoxProps) {
  return <StyledDiv height={height} />;
}

export default HeightBox;

const StyledDiv = styled.div<HeightBoxProps>`
  height: ${(props) => props.height}px;
`;
