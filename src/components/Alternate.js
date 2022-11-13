import React, { useReducer, useState } from "react";
import Metronome from "./Metronome";
import {
  TYPES,
  RHYTEM_PATTERNS,
  initSecOptions,
} from "../dataObjects/dataObjects";
import  Input  from "./styles/styled-components/Input";
import Timer from "./Timer";
import Form from "./styles/styled-components/Form";
import Button from "./styles/styled-components/Button";

const getSecState = () => {
    try {
      const data = JSON.parse(window.localStorage.getItem("secStateAlter"));
      if (data) {
        return data;
      }
      return initSecOptions;
    } catch (err) {
      return initSecOptions;
    }
  };



function reducerSec(state, payload) {
  // TODO : add 2 types, one for changing tempo, one for adding rythem
  const newState = { ...state };
  const { type, sec, tempo } = payload;
  console.log(payload);
  switch (type) {
    case TYPES.ADD_RHYTEM: {
      newState[sec] = 0;
      break;
    }
    case TYPES.UPDATE_TEMPO: {
      newState[sec] = tempo;
      break;
    }
    case TYPES.DELETE_RHYTEM: {
      delete newState[sec];
      break;
    }
    default:
      return state;
  }
  window.localStorage.setItem("secStateAlter", JSON.stringify(newState));
  return newState;
}

function Alternate() {
  const [secState, dispatch] = useReducer(reducerSec, getSecState());

  // const [objSection, setObjSection] = useState({ sec: '', tempo: 0 })
  const [section, setSection] = useState(RHYTEM_PATTERNS.SIXTH);
  const [tempo, setTempo] = useState(0);
  const [timer, setTimer] = useState(false);

  function toggleTimer() {
    if (timer) {
      setTimer(false);
    } else {
      setTimer(true);
    }
  }

  function handleSubmitTempoUpdate(e) {
    e.preventDefault();
    console.log(e);
    dispatch({ type: TYPES.UPDATE_TEMPO, sec: section, tempo });
  }
  function handleSubmitSection(e) {
    e.preventDefault();
    console.log(e);
    dispatch({ type: TYPES.ADD_RHYTEM, sec: section, tempo: 0 });
  }
  function handleSubmitDelete(e) {
    e.preventDefault();
    dispatch({ type: TYPES.DELETE_RHYTEM, sec: section, tempo: tempo });
  }

  return (
    <>
      <Form onSubmit={handleSubmitTempoUpdate}>
        <label>
          Alternate Picking:
          <select onChange={(e) => setSection(e.target.value)} value={section}>
            {Object.keys(secState).map((key, index) => {
              return (
                <option value={key} key={index}>
                  {key}
                </option>
              );
            })}
          </select>
          <br />
          <Input
            type="number"
            required
            onChange={(e) => setTempo(parseInt(e.target.value))}
            value={tempo}
          />
        </label>

        <Button type="submit">update</Button>
        <br />
        <Button onClick={handleSubmitDelete}>Delete</Button>
        <div>
          <Input type="text" onChange={(e) => setSection(e.target.value)} />
          <Button type="submit" onClick={handleSubmitSection}>
            addRhytem
          </Button>
        </div>

        {Object.keys(secState).map((key, index) => {
          return (
            <p key={index}>
              {key}:{secState[key]}
            </p>
          );
        })}
        <Button onClick={toggleTimer}>
          {timer === true ? "Hide Timer" : "Show Timer"}
        </Button>
      </Form>
      {timer === true ? <Timer /> : ""}
      <Metronome></Metronome>
    </>
  );
}

export default Alternate;
