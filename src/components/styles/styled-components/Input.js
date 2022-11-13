import styled, { css } from "styled-components";

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;
export default Input
