import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 40px;
  display: ${({ showIcon }) => (showIcon ? "grid" : "none")};
  background-color: ${({ isDesktop }) => (isDesktop ? "black" : "red")};
`;

export default Button;
