const baseURL = "http://localhost:3001";

export const getSlots = () => {
  return (dispatch) => {
    fetch(`${baseURL}/slots`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GET_SLOTS", payload: data });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
};

export const addSlot = (data, successCallback) => {
  return (dispatch) => {
    fetch(`${baseURL}/slots`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => successCallback(data))
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
};
