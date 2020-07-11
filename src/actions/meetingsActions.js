const baseURL = "http://localhost:3001";

export const getMeetings = () => {
  return (dispatch) => {
    fetch(`${baseURL}/meetings`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_MEETINGS", payload: data }))
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
};

export const addMeeting = (data, successCallback) => {
  return (dispatch) => {
    fetch(`${baseURL}/meetings`, {
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
