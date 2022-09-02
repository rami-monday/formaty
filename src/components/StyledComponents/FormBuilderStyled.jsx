import styled from "styled-components";

const FormBuilderContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: #fef9ef;
  min-height: 100vh;

  & .formHeaders {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 60%;
    min-width: 500px;
    max-width: 800px;
    min-height: 200px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
    background-color: white;
    border-radius: 10px;
    align-items: center;
    justify-items: center;
    margin: 16px;
    padding: 16px;
    
    & .labelEditor {
      -webkit-appearance: none;
      border: none;
      font-size: 150%;
      height: 40px;
      font-weight: bolder;
      transition: 0.2s;
      border: 2px solid white;
    }
  }
`;

export default FormBuilderContainer;
