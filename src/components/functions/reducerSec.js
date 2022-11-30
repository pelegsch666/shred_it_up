import {TYPES} from "../../dataObjects/dataObjects";

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
  export default reducerSec