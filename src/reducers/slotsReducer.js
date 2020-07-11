const initialState = {
  slots: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_SLOTS":
      return action.payload;
    default:
      return state;
  }
};
