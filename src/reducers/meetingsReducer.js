const initialState = {
  meetings: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_MEETINGS":
      return action.payload;
    default:
      return state;
  }
};
