import { useReducer } from "react";

import Button from "../styles/styled-components/Button";
import InputBlock from "./InputBlock";
import Card from "../Card";
import ExList from "./ExList";
import { useEffect } from "react";

export const ACTIONS = {
  DELETE_RHYTEM: "delete",
  UPDATE_TEMPO: "update tempo",
  UPDATE_CURR_EX_NAME: "update exercise name",
  UPDATE_CURR_EX_TYPE: "update exercise type",
  UPDATE_CURR_EX_TEMPO: "update exercise tempo",
  GET_LOCAL_STORAGE: "get local storage",
  SET_LOCAL_STORAGE: "set local storage",
  ADD_EXERCISE: "add exercise",
  EDIT_TEMPO: "edit tempo",
};

const initialState = {
  exList: [], // [{name: string, tempo:number, type:string}]
  currExType: "",
  currExTempo: 0,
  currExName: "",
};

export function reducer(state, payload) {
  const newState = { ...state };
  const { action, sec, tempo, value, itemIndex } = payload;

  switch (action) {
    case ACTIONS.GET_LOCAL_STORAGE: {
      try {
        const data = JSON.parse(window.localStorage.getItem("exList"));
        console.log("data", data);
        newState.exList = data;
        if (data) {
          return newState;
        } else {
          return state;
        }
      } catch (err) {
        return newState;
      }
    }
    case ACTIONS.SET_LOCAL_STORAGE: {
      window.localStorage.setItem("exList", JSON.stringify(newState.exList));
      console.log("the data that needs to be", JSON.stringify(newState.exList));
      return state;
    }

    case ACTIONS.DELETE_EXERCISE: {
      const list = newState.exList;
      const firstSlice = list.slice(0, itemIndex);
      const secondSlice = list.slice(itemIndex + 1);
      newState.exList = [...firstSlice, ...secondSlice];
      return newState;
    }
    case ACTIONS.UPDATE_CURR_EX_NAME: {
      newState.currExName = value;
      return newState;
    }
    case ACTIONS.UPDATE_CURR_EX_TYPE: {
      newState.currExType = value;
      return newState;
    }
    case ACTIONS.UPDATE_CURR_EX_TEMPO: {
      newState.currExTempo = value;
      return newState;
    }
    case ACTIONS.ADD_EXERCISE: {
      const {
        currExName: name,
        currExTempo: tempo,
        currExType: type,
      } = newState;
      const newExercise = { name, tempo, type };
      newState.exList.push(newExercise);
      newState.currExName = initialState.currExName;
      newState.currExTempo = initialState.currExTempo;
      newState.currExType = initialState.currExType;

      return newState;
    }
    case ACTIONS.EDIT_TEMPO: {
      const list = newState.exList;

      list[itemIndex].currExTempo = value;
    }

    default:
      return state;
  }
}

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

  function handleAddExercise(e) {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      action: ACTIONS.ADD_EXERCISE,
    });
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
            handleAddExercise(e);
          }}
        >
          Add Exercise
        </Button>
        <ExList list={state.exList} state={state} dispatch={dispatch} />
      </Card>
    </>
  );
}
