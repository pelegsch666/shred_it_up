import { useEffect, useReducer } from "react";
import { ACTIONS, initialState } from "../../utils/constants";
import { reducer } from "../../utils/helpers/reducer";
import Card from "../Card";
import Button from "../styles/styled-components/Button";
import ExTable from "./ExTable";
import InputBlock from "./InputBlock";




export default function ExercisesEditor() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      action: ACTIONS.GET_LOCAL_STORAGE,
    });
  }, []);
  useEffect(() => {
    dispatch({
      action: ACTIONS.SET_LOCAL_STORAGE,
    });
  }, [state]);

  useEffect(() => {
    if (state.isEditOn) {
      dispatch({ action: ACTIONS.FILL_INPUTS_WITH_CURR_EX });
    }
  }, [state.isEditOn]);

  function handleAddEditExercise(e) {
    if (state.isEditOn) {
      dispatch({ action: ACTIONS.EDIT_EXERCISE });
    } else {
      dispatch({
        action: ACTIONS.ADD_EXERCISE,
      });
    }
  }
  function handleEditButton(index) {
    if (state.isEditOn) {
      dispatch({
        action: ACTIONS.SET_EDIT_OFF,
      });
    } else {
      dispatch({
        action: ACTIONS.SET_EDIT_ON,
      });
      dispatch({
        action: ACTIONS.SET_CURR_LIST_ITEM_INDEX,
        itemIndex: index,
      });
    }
  }

  return (
    <>
      <Card>
        <InputBlock
          label="Exercise name"
          type="text"
          placeholder="Enter Ex Name"
          value={state.currExName}
          onChange={(e) => {
            dispatch({
              action: ACTIONS.UPDATE_CURR_EX_NAME,
              value: e.target.value,
            });
          }}
        />
        <InputBlock
          label="Exercise Tempo"
          type="number"
          value={state.currExTempo}
          onChange={(e) => {
            dispatch({
              action: ACTIONS.UPDATE_CURR_EX_TEMPO,
              value: e.target.value,
            });
          }}
        />
        <InputBlock
          label="Exercise Type"
          type="text"
          placeholder="Enter Ex Type"
          value={state.currExType}
          onChange={(e) => {
            dispatch({
              action: ACTIONS.UPDATE_CURR_EX_TYPE,
              value: e.target.value,
            });
          }}
        />
        <Button
          onClick={(e) => {
            handleAddEditExercise(e);
          }}
        >
          {state.isEditOn ? "Edit Exercise" : "Add Exercise"}
        </Button>
        <ExTable
          data={state.exList}
          state={state}
          dispatch={dispatch}
          handleEditButton={handleEditButton}
        />
      </Card>
    </>
  );
}
