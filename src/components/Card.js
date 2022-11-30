import { useState } from "react";
import styled from "styled-components";

import CardContainer from "./styles/styled-components/CardContainer";

const CardButton = styled.button`
position: absolute;
top: 10px;
right: 10px;

`


function Card({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  
  function handleClick() {
    setIsOpen(!isOpen);
  }
  
  
  
  
  return <CardContainer>
    <CardButton onClick={handleClick}>{isOpen ? '☠️' : '🤘'}</CardButton>
    {isOpen && children}
    </CardContainer>;
}

export default Card;
