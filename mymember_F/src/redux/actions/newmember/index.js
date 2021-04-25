import axios from "axios"
import { history } from "../../../history"

export const getTodos = routeParams => {
  return async dispatch => {
    await axios
      .get("api/get-student", {
        params: routeParams
      })
      .then(result => {
        dispatch({
          type: "GET_TODOS",
          todos: result.data,
          routeParams
        })
      })
      .catch(err => console.log(err))
  }
}
export const completeTask = todo => {
  return dispatch => {
    dispatch({ type: "COMPLETE_TASK", id: todo.id, value: todo.isCompleted })
  }
}

export const starTask = todo => {
  return dispatch => {
    Promise.all([
      dispatch({ type: "STAR_TASK", id: todo.id, value: todo.isStarred })
    ])
  }
}

export const importantTask = todo => {

  return dispatch => {
    Promise.all([
      dispatch({ type: "IMPORTANT_TASK", id: todo.id, value: todo.isImportant })
    ])
  }
}

export const trashTask = id => {
  return (dispatch, getState) => {
    const params = getState().todoApp.todo.routeParam
    axios
      .post("/api/app/todo/trash-todo", id)
      .then(response => dispatch({ type: "TRASH_TASK", id }))
      .then(dispatch(getTodos(params)))
  }
}

export const updateTodo = todo => {
  const request = axios.post("/api/apps/todo/update-todo", todo)
  return (dispatch, getState) => {
    const params = getState().todoApp.todo.routeParam
    request.then(response => {
      Promise.all([
        dispatch({
          type: "UPDATE_TODO",
          todos: response.data
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



const baseUrl = process.env.REACT_APP_BASE_URL;

export const GET_ACTIVE_MEMBER = (data) => {
  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/api/admin/user_list/${localStorage.getItem("user_id")}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      if (response.data && response.status === 200 && !response.data.msg) {
        dispatch({
          type: "GET_ACTIVE_MEMBER",
          payload: response.data
        })
      }
      else {
        dispatch({
          type: "GET_ACTIVE_MEMBER",
          payload: []
        })
      }
    }
    catch (error) {
      console.log(error);
      dispatch({
        type: "GET_ACTIVE_MEMBER",
        payload: []
      })
    }
  }
}
export const GET_ACTIVE_TRAIL_LIST = (data) => {
  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/api/member/active_trial/${localStorage.getItem("user_id")}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      if (response.data && response.status === 200 && !response.data.msg) {
        dispatch({
          type: "GET_ACTIVE_TRIAL",
          payload: response.data
        })
      }
      else {
        dispatch({
          type: "GET_ACTIVE_TRIAL",
          payload: []
        })
      }
    }
    catch (error) {
      console.log(error);
      dispatch({
        type: "GET_ACTIVE_TRIAL",
        payload: []
      })
    }
  }
}

export const GET_LEAD_LIST = (data) => {
  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/api/member/Leads/${localStorage.getItem("user_id")}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      if (response.data && response.status === 200 && !response.data.msg) {
        dispatch({
          type: "GET_LEADS_STUDENT",
          payload: response.data
        })
      }
      else {
        dispatch({
          type: "GET_LEADS_STUDENT",
          payload: []
        })
      }
    }
    catch (error) {
      console.log(error);
      dispatch({
        type: "GET_LEADS_STUDENT",
        payload: []
      })
    }
  }
}

export const GET_CAMP_LIST = (data) => {
  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/api/member/camp_member/${localStorage.getItem("user_id")}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      if (response.data && response.status === 200 && !response.data.msg) {
        dispatch({
          type: "GET_CAMP_STUDENT",
          payload: response.data
        })
      }
      else {
        dispatch({
          type: "GET_CAMP_STUDENT",
          payload: []
        })
      }
    }
    catch (error) {
      console.log(error);
      dispatch({
        type: "GET_CAMP_STUDENT",
        payload: []
      })
    }
  }
}


export const GET_FORMER_LIST = (data) => {
  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/api/member/Former_member/${localStorage.getItem("user_id")}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      if (response.data && response.status === 200 && !response.data.msg) {
        dispatch({
          type: "GET_FORMER_STUDENT",
          payload: response.data
        })
      }
      else {
        dispatch({
          type: "GET_FORMER_STUDENT",
          payload: []
        })
      }
    }
    catch (error) {
      console.log(error);
      dispatch({
        type: "GET_FORMER_STUDENT",
        payload: []
      })
    }
  }
}
export const GET_FORMER_TRAIL_LIST = (data) => {
  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/api/member/Former_trial/${localStorage.getItem("user_id")}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      if (response.data && response.status === 200 && !response.data.msg) {
        dispatch({
          type: "GET_FORMER_TRIAL_STUDENT",
          payload: response.data
        })
      }
      else {
        dispatch({
          type: "GET_FORMER_TRIAL_STUDENT",
          payload: []
        })
      }
    }
    catch (error) {
      console.log(error);
      dispatch({
        type: "GET_FORMER_TRIAL_STUDENT",
        payload: []
      })
    }
  }
}

export const GET_AFTER_SCHOOL_LIST = (data) => {
  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/api/member/after_school_member/${localStorage.getItem("user_id")}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      if (response.data && response.status === 200 && !response.data.msg) {
        dispatch({
          type: "GET_AFTER_SCHOOL_STUDENT",
          payload: response.data
        })
      }
      else {
        dispatch({
          type: "GET_AFTER_SCHOOL_STUDENT",
          payload: []
        })
      }
    }
    catch (error) {
      console.log(error);
      dispatch({
        type: "GET_AFTER_SCHOOL_STUDENT",
        payload: []
      })
    }
  }
}

export const ADD_NEW_MEMBER = (data) => {
  let dataEntries = Object.entries(data);
  let formData = new FormData();
  dataEntries.map(v => {
    formData.append(v[0], v[1]);
    return v;
  })
  return async dispatch => {
    try {
      let response = await axios.post(`${baseUrl}/api/admin/user_create/${localStorage.getItem("user_id")}`, formData, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
          "content-type": "multipart/form-data",
        }
      })
       if(response.data && response.status === 200){
         console.log(response.data);
       }
       else{
         console.log("Something went wrong");
       }
      dispatch(GET_ACTIVE_MEMBER());
       setTimeout(() => {
         window.location.href = "/app/member/list";
       },500)
    }
    catch (error) {
      console.log(error?.message);
      dispatch(GET_ACTIVE_MEMBER());
      setTimeout(() => {
        window.location.href = "/app/member/list";
      },500)
    }
  }
}
export const EDIT_MEMBER = (data,userid) => {
 
  return async dispatch => {
    try {
      let response = await axios.put(`${baseUrl}/api/admin/update_user/${localStorage.getItem("user_id")}/${userid}`, data, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
          'content-type': 'application/json'
        }
      })
       if(response.data && response.status === 200){
         console.log(response.data);
       }
       else{
         console.log("Something went wrong");
       }
      dispatch(GET_ACTIVE_MEMBER());
       setTimeout(() => {
         window.location.href = "/app/member/list";
       },500)
    }
    catch (error) {
      console.log(error?.message);
      dispatch(GET_ACTIVE_MEMBER());
      setTimeout(() => {
        window.location.href = "/app/member/list";
      },500)
    }
  }
}

export const GET_CATEGORIES = () => {
  return async dispatch => {
    let response = await axios.get(`${baseUrl}/api/list_of_program/5fe479798c4bf205c764402a`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    if (response.data && response.status === 200) {
      dispatch({
        type: "GET_CATEGORIES",
        payload: response.data
      })
    }
  }
}


export const CREATE_FINANCE_INFO = ({ memberId, data }) => {
  return async dispatch => {
    try {
      let response = await axios.post(`${baseUrl}/api/finance_info/create_finance_info/${localStorage.getItem("user_id")}/${memberId}`, data, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`
        }
      })
      if (response.data && response.status === 200) {
        console.log(response.data);
      }
      dispatch(GET_ACTIVE_MEMBER());
      setTimeout(() => {
        window.location.href = "/app/member/list";
      }, 500)
    }
    catch (error) {
      console.log(error);
      dispatch(GET_ACTIVE_MEMBER());
      setTimeout(() => {
        window.location.href = "/app/member/list";
      }, 500)
    }
  }
}
