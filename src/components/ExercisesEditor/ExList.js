import styled from "styled-components";
import Button from "../styles/styled-components/Button";

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
  width: 100%;
  
`;
const StyledLi = styled.li`
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
`;
const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function ExList({ list }) {
  return (
    <StyledUl>
      {list.map((item, index) => {
        const { name, tempo, type } = item;
        return (
          <StyledLi key={index}>
            <DataContainer>
              <span>{name}</span>
              <span>{tempo}</span>
              <span>{type}</span>
            </DataContainer>
             <button>X</button>          
          </StyledLi>
        );
      })}
    </StyledUl>
  );
}
