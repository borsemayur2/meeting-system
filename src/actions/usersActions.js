const baseURL = "http://localhost:3001";

export const getUsers = () => {
  return (dispatch) => {
    fetch(`${baseURL}/users`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_USERS", payload: data }))
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
};
