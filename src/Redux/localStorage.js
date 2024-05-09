export const LoadState = () => {
    try {
      const getState = localStorage.getItem("state");
      if (getState === null) {
        return undefined;
      }
      return JSON.parse(getState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const SaveState = (state) => {
    try {
      const stateSave = JSON.stringify(state);
      localStorage.setItem("state", stateSave);
    } catch (err) {
      console.error(err);
    }
  };
  