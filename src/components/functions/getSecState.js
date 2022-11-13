import {initSecOptions} from "./dataObjects/dataObjects";

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

  export default getSecState