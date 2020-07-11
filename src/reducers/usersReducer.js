const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return action.payload;
    default:
      return state;
  }
};
