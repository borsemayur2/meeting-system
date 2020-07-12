const baseURL = "http://localhost:3001";

export const getBusySlots = (successCallback, errorCallback) => {
  return (dispatch) => {
    fetch(`${baseURL}/busyslots`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_BUSYSLOTS", payload: data }))
      .catch((error) => console.log("GET_BUSYSLOTS", error));
  };
};

export const addBusySlot = (data, successCallback, errorCallback) => {
  return (dispatch) => {
    fetch(`${baseURL}/busyslots`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => successCallback(data))
      .catch((error) => errorCallback(error));
  };
};

export const updateBusySlot = (data, successCallback, errorCallback) => {
  return (dispatch) => {
    fetch(`${baseURL}/busyslots/${data.id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => successCallback(data))
      .catch((error) => errorCallback(error));
  };
};
