import styled from "styled-components";
import { ACTIONS,initialState } from "../../utils/constants";

import { getExListInGridFormat } from "../../utils/helpers";
import { useState } from "react";
import { useEffect } from "react";
import ExTable from "./ExTable";
import { StyledLi,StyledUl,StyledDataContainer as DataContainer } from "./styles";


export default function ExList({ list, state, dispatch, handleEditButton }) {
  const [formatedData, setFormatedData] = useState([]);

  useEffect(() => {
    setFormatedData(getExListInGridFormat(list));
  }, [list]);

  return (
    <>
      <ExTable data={formatedData} />
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
    </>
  );
}
