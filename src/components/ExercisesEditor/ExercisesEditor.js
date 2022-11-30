import  { useReducer } from "react";

import Button from "../styles/styled-components/Button";
import InputBlock from "./InputBlock";
import Card from "../Card";
import ExList from "./ExList";

const ACTIONS = {
  ADD_RHYTEM: "add",
  DELETE_RHYTEM: "delete",
  UPDATE_TEMPO: "update tempo",
  UPDATE_CURR_EX_NAME: "update exercise name",
  UPDATE_CURR_EX_TYPE: "update exercise type",
  UPDATE_CURR_EX_TEMPO: "update exercise tempo",
  GET_LOCAL_STORAGE: "get local storage",
  SET_LOCAL_STORAGE: "set local storage",
  ADD_EXERCISE: "add exercise",
};

const initialState = {
  exerciesList: [], // [{name: string, tempo:number, type:string}]
  currExType: "",
  currExTempo: 0,
  currExName: "",
};

function reducer(state, payload) {
  console.log("state", state);
  console.log("payLoad", payload);
  const newState = { ...state };
  const { action, sec, tempo, value } = payload;

  switch (action) {
    case ACTIONS.GET_LOCAL_STORAGE: {
      try {
        const data = JSON.parse(window.localStorage.getItem("secStateAlter"));
        if (data) {
          return data;
        }
        return newState;
      } catch (err) {
        return newState;
      }
    }
    case ACTIONS.SET_LOCAL_STORAGE: {
      window.localStorage.setItem("secStateAlter", JSON.stringify(newState));
    }

    case ACTIONS.ADD_RHYTEM: {
      newState[sec] = 0;
      return newState;
    }
    case ACTIONS.UPDATE_TEMPO: {
      newState[sec] = tempo;
      return newState;
    }
    case ACTIONS.DELETE_RHYTEM: {
      delete newState[sec];
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
      newState.exerciesList.push(newExercise);
      console.log(newState.exerciesList);
      newState.currExName = initialState.currExName;
      newState.currExTempo = initialState.currExTempo;
      newState.currExType = initialState.currExType;

      return newState;
    }

    default:
      return state;
  }
}

export default function ExercisesEditor() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
            e.stopPropagation();
            e.preventDefault();
            dispatch({
              action: ACTIONS.ADD_EXERCISE,
            });
          }}
        >
          Add Exercise
        </Button>
        <ExList list={state.exerciesList} />
      </Card>
    </>
  );
}
