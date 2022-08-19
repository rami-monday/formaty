import styled from "styled-components";

const Header = styled.div`
  display: grid;
  grid-template-columns: ${({ items }) => `repeat(${items.length},1fr)`};

  & span {
  }
  & .mainContainer {
    width: 100%;
   & span {
    
    }
  }
  & .rightContainer {

  }
`;

export default Header;
