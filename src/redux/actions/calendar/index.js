import axios from "axios"
const baseUrl = process.env.REACT_APP_BASE_URL;


// export const fetchEvents = () => {
//   return async dispatch => {
//     await axios
//       .get("/api/apps/calendar/events")
//       .then(response => {
//         dispatch({ type: "FETCH_EVENTS", events: response.data })
//       })
//       .catch(err => console.log(err))
//   }
// }
export const fetchEvents = () => {
  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/api/list_of_classSchedule/${localStorage.getItem("user_id")}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      if (response.data && response.status === 200) {
        dispatch({
          type: "FETCH_EVENTS",
          events: response.data
        })
      }
    }
    catch (error) {
      console.log("something went wrong");
    }
  }
}

export const handleSidebar = bool => {
  console.log("bool", bool)
  return dispatch => dispatch({ type: "HANDLE_SIDEBAR", status: bool })
}

export const addEvent = event => {
  return dispatch => {
    dispatch({ type: "ADD_EVENT", event })
  }
}
export const updateEvent = event => {
  return dispatch => {
    dispatch({ type: "UPDATE_EVENT", event })
  }
}

export const updateDrag = event => {
  return dispatch => {
    dispatch({ type: "UPDATE_DRAG", event })
  }
}

export const updateResize = event => {
  return dispatch => {
    dispatch({ type: "EVENT_RESIZE", event })
  }
}

export const handleSelectedEvent = event => {
  return dispatch => dispatch({ type: "HANDLE_SELECTED_EVENT", event })
}

export const FETCH_ATTENDEE_LIST = () => {
  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/api/attendence/attendence_list/${localStorage.getItem("user_id")}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      console.log("##############", response)
      if (response.data && response.status === 200) {
        dispatch({
          type: "FETCH_ATTENDEE_LIST",
          event: response.data
        })
      }
    }
    catch (error) {
      console.log("something went wrong");
    }
  }
}
