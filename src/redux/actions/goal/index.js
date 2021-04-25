import axios from "axios"
import { history } from "../../../history"

export const getTodos = routeParams => {
  return async dispatch => {
    await axios
      .get("api/apps/goal", {
        params: routeParams
      })
      .then(result => {
        dispatch({
          type: "GET_TODOS",
          goals: result.data,
          routeParams
        })
      })
      .catch(err => console.log(err))
  }
}
export const completeTask = goal => {
  return dispatch => {
    dispatch({ type: "COMPLETE_TASK", id: goal.id, value: goal.isCompleted })
  }
}

export const starTask = goal => {
  return dispatch => {
    Promise.all([
      dispatch({ type: "STAR_TASK", id: goal.id, value: goal.isStarred })
    ])
  }
}

export const importantTask = goal => {
  
  return dispatch => {
    Promise.all([
      dispatch({ type: "IMPORTANT_TASK", id: goal.id, value: goal.isImportant })
    ])
  }
}

export const trashTask = id => {
  return (dispatch, getState) => {
    const params = getState().goalApp.goal.routeParam
    axios
      .post("/api/app/goal/trash-goal", id)
      .then(response => dispatch({ type: "TRASH_TASK", id }))
      .then(dispatch(getTodos(params)))
  }
}

export const updateTodo = goal => {
  const request = axios.post("/api/apps/goal/update-goal", goal)
  return (dispatch, getState) => {
    const params = getState().goalApp.goal.routeParam
    request.then(response => {
      Promise.all([
        dispatch({
          type: "UPDATE_TODO",
          goals: response.data
        })
      ]).then(() => dispatch(getTodos(params)))
    })
  }
}

export const updateTask = (id, title, desc) => {
  return dispatch => {
    dispatch({ type: "UPDATE_TASK", id, title, desc })
  }
}

export const updateLabel = (id, label) => {
  return (dispatch, getState) => {
    dispatch({ type: "UPDATE_LABEL", label, id })
  }
}

export const addNewTask = task => {
  return (dispatch, getState) => {
    const params = getState().goalApp.goal.routeParam
    axios.post("/api/apps/goal/new-task", { task }).then(response => {
      dispatch({ type: "ADD_TASK", task })
      dispatch(getTodos(params))
    })
  }
}

export const searchTask = val => {
  return dispatch => {
    dispatch({
      type: "SEARCH_TASK",
      val
    })
  }
}

export const changeFilter = filter => {
  return dispatch => {
    dispatch({ type: "CHANGE_FILTER", payload : filter })
    history.push(`/goal/${filter}`)
    dispatch(GET_GOALS())
  }
}


const baseUrl = process.env.REACT_APP_BASE_URL;

// compeleting_Date: "2021-01-04"
// createdAt: "2021-01-04T12:42:26.431Z"
// goal_category: "Weekly Goal"
// goal_status: "Pending"
// notes: "first test goal"
// reminder_Date: "2021-01-21"
// subject: "First goal"
// tag: "One Time"
// updatedAt: "2021-01-04T12:42:26.444Z"
// userId: "5ff03ac1e2e2f770b815b01b"
// __v: 0
// _id: "5ff30d32a0400d73473db09d"

export const GET_GOALS = () => {
  return async dispatch => {
    try{
       let response = await axios.get(`${baseUrl}/api/list_of_goals/${localStorage.getItem("user_id")}`,{
         headers : {
           "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
         }
       })
       if(response.data && response.status === 200 && !response.data?.msg){
           dispatch({
             type : "GET_GOALS",
             payload : {
               weekly : response.data.filter(v => v.goal_category === "Weekly Goal"),
               monthly : response.data.filter(v => v.goal_category === "Monthly Goal"),
               quarterly : response.data.filter(v => v.goal_category === "Quarterly Goal"),
               annual : response.data.filter(v => v.goal_category === "Annual Goal"),
               all : response.data
             }
           })
       }
       else{
        dispatch(SET_GOALS_STATUS("Something went wrong, please refresh or try later", "warning", "warning"));
       }
    }
    catch(error){
      console.log("error", error.message);
      dispatch(SET_GOALS_STATUS("Something went wrong, please refresh or try later", "warning", "warning"));
    }
  }
}


export const CREATE_GOAL = (data) => {
  console.log(data);
  return async dispatch => {
    try{
          let response = await axios.post(`${baseUrl}/api/add_goals/${localStorage.getItem('user_id')}`, data, {
            headers : {
              "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
            }
          });
          if(response.data && response.status){
              dispatch(SET_GOALS_STATUS("Goal created successfully!", "success", "success"));
          }
          else{
            dispatch(SET_GOALS_STATUS("Something went wrong", "warning", "warning"));
          }
    }
    catch(error){
        dispatch(SET_GOALS_STATUS("Internal server error", "danger", "500"));
    }
  }
}


export const SET_GOALS_STATUS = (msg, type, title) => {
  return dispatch => {
    dispatch({
      type : "SET_GOALS_STATUS",
      payload : {
        status : true,
        message : msg,
        type,
        title
      }
    })
  }
}

export const CLEAR_GOALS_STATUS = () => {
  return dispatch => {
    dispatch({
      type : "CLEAR_GOALS_STATUS"
    })
  }
}

// {
//   "subject":"demo",
//   "goal_category":"democat",
//   "compeleting_Date":"12-15-2020",
//   "reminder_Date":"10-15-2020",
//   "tag":"demotag",
//   "goal_status":"pending",
//   "notes":"demo notes"
// }
