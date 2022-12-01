import styled from "styled-components";
import { ACTIONS, reducer } from "./ExercisesEditor";

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

export default function ExList({ list, state, dispatch, handleEditButton }) {
  return (
    <StyledUl>
      {list?.map((item, index) => {
        const { name, tempo, type } = item;
        return (
          <StyledLi key={index}>
            <DataContainer>
              <span>ex:{name}</span>
              <span>bpm:{tempo}</span>
              <span>{type}</span>
            </DataContainer>
            <button
              onClick={() =>
                dispatch({
                  action: ACTIONS.DELETE_EXERCISE,
                  itemIndex: index,
                })
              }
            >
              X
            </button>
            <button
              onClick={() => handleEditButton(index)}
              style={state.isEditOn ? { outline: "solid blue 1px" } : null}
            >
              ✍️
            </button>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
}
