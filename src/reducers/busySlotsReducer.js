const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_BUSYSLOTS":
      return action.payload;
    default:
      return state;
  }
};
