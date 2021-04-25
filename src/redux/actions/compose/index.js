import axios from "axios"
import { history } from "../../../history"

const baseUrl = process.env.REACT_APP_BASE_URL + '/api/email_compose';

const getUserId = () => {
  return localStorage.getItem("user_id")
}

const getHeaders = () => {
  return {
    "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
    "content-type": "application/json",
  }
}

export const SENT_EMAIL_COMPOSE = task => {
  
  return async dispatch => {
    console.log(task);
    let response = await axios.post(`${baseUrl}/send_email/${getUserId()}`, {...task}, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
        'content-type': 'application/json'
      }
    })
    if(response.data && response.status === 200){
      console.log(response.data,"send email");
    }
    else{
      console.log("Something went wrong");
    }
  }
}

export const GET_CATEGORIES = () => {

  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/category_list/${getUserId()}`, {
        headers: getHeaders()

      })
      if (response.data && response.status === 200) {
        dispatch({
          type: "GET_CATEGORIES",
          payload: response.data
        })
      }
    }
    catch (error) {
      console.log(error?.message);
    }
  }
}

export const ADD_NEW_EMAIL_COMPOSE = (data) => {
  return async dispatch => {
    try {
      let response = await axios.post(`${baseUrl}/addCategory/${getUserId()}`, data, {
        headers: getHeaders()
      })
      if (response.data && response.status === 200) {
        console.log(response.data);
      }

      dispatch(GET_CATEGORIES());
    }
    catch (error) {
      console.log(error?.message);
      dispatch(GET_CATEGORIES());
    }
  }
}


export const ADD_NEW_SUB_EMAIL_COMPOSE = (data, folder) => {
  return async dispatch => {
    try {
      let response = await axios.post(`${baseUrl}/create_folder/${getUserId()}/${folder._id}`, data, {
        headers: getHeaders()
      })
      if (response.data && response.status === 200) {
        dispatch(GET_CATEGORIES());
      }
    }
    catch (error) {
      console.log(error);
    }
  }
}
export const EDIT_MAIN_EMAIL_COMPOSE = (data, folder) => {

  return async dispatch => {
    try {
      let response = await axios.put(`${baseUrl}/edit_category/${getUserId()}/${folder._id}`, data, {
        headers: getHeaders()
      })
      if (response.data && response.status === 200) {
        console.log(response.data);
      }
      dispatch(GET_CATEGORIES());
    }
    catch (error) {
      console.log(error?.message);
    }
  }
}

export const DESELECT_MAIL_STATUS = (id) => {
var data = {
    "email_status":false
}
  return async dispatch => {
    try {
      let response = await axios.put(`${baseUrl}/single_template_status_change/${getUserId()}/${id}`, data, {
        headers: getHeaders()
      })
      if (response.data && response.status === 200) {
        console.log(response.data);
      }
      dispatch(GET_CATEGORIES());
    }
    catch (error) {
      console.log(error?.message);
    }
  }
}



export const SELECT_MAIL_STATUS = (id) => {
  var data = {
      "email_status":true
  }
    return async dispatch => {
      try {
        let response = await axios.put(`${baseUrl}/single_template_status_change/${getUserId()}/${id}`, data, {
          headers: getHeaders()
        })
        if (response.data && response.status === 200) {
          console.log(response.data);
        }
        dispatch(GET_CATEGORIES());
      }
      catch (error) {
        console.log(error?.message);
      }
    }
  }


  export const SELECT_MAIL_STATUS_ALL = (id,datamain) => {
    var data = {
        "email_status":datamain
    }
      return async dispatch => {
        try {
          let response = await axios.put(`${baseUrl}/update_template_status/${getUserId()}/${id}`, data, {
            headers: getHeaders()
          })
          if (response.data && response.status === 200) {
            console.log(response.data);
          }
          dispatch(GET_CATEGORIES());
        }
        catch (error) {
          console.log(error?.message);
        }
      }
    }


export const EDIT_SUB_EMAIL_COMPOSE = (data, folder) => {
  return async dispatch => {
    try {
      let response = await axios.put(`${baseUrl}/update_folder/${getUserId()}/${folder._id}`, data, {
        headers: getHeaders()
      })
      if (response.data && response.status === 200) {
        console.log(response.data);
        dispatch(GET_CATEGORIES());
      }
    }
    catch (error) {
      console.log(error?.message);
    }
  }
}

export const ADD_TEMPLATE_TO_COMPOSE = (data, id) => {
  let url = `${baseUrl}/add_template/${getUserId()}/${id}`
  return async dispatch => {
    try {
      let response = await axios.post(url, data, {
        headers: getHeaders()
      })
      if (response.data && response.status === 200) {
        dispatch(GET_SCHEDULE_MAILS(response.data.result.folderId))
      }
    }
    catch (error) {
      console.log(error?.message);
    }
  }
}





export const DELETE_FOLDER = (folder) => {
  return async dispatch => {
    try {
      let response = await axios.delete(`${baseUrl}/remove_category/${getUserId()}/${folder._id}`, {
        headers: getHeaders()
      })
      if (response.data) {
        dispatch(GET_CATEGORIES());
      }

    } catch (error) {

    }

  }
}
export const DELETE_SUB_FOLDER = (folder) => {

  return async dispatch => {
    try {
      let response = await axios.delete(`${baseUrl}/delete_folder/${getUserId()}/${folder._id}`, {
        headers: getHeaders()
      })
      if (response.data) {
        dispatch(GET_CATEGORIES());
      }

    } catch (error) {

    }

  }
}
export const GET_SCHEDULE_MAILS = (folderId) => {
  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/list_template/${getUserId()}/${folderId}`, {
        headers: getHeaders()

      })
      if (response.data && response.status === 200) {
        console.log(response.data)
        dispatch({
          type: "GET_SCHEDULE_MAILS",
          payload: response.data
        })
      }
    }
    catch (error) {
      console.log(error?.message);
    }
  }
}

export const GET_SMARTLIST = () => {

  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/smart_list/${getUserId()}`, {
        headers: getHeaders()
      })
      if (response.data && response.status === 200) {
        dispatch({
          type: "GET_SMARTLIST",
          payload: response.data
        })
      }
    }
    catch (error) {
      console.log(error?.message);
    }
  }
}

export const GET_TEMPLIST = () => {

  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/student_email_temp_list/${getUserId()}`, {
        headers: getHeaders()
      })
      if (response.data && response.status === 200) {
        dispatch({
          type: "GET_TEMPLIST",
          payload: response.data
        })
      }
    }
    catch (error) {
      console.log(error?.message);
    }
  }
}




export const DELETE_SCHEDULE_MAIL = (templateId) => {
  return async dispatch => {
    try {
      let response = await axios.delete(`${baseUrl}/remove_template/${getUserId()}/${templateId}`, {
        headers: getHeaders()
      })
      if (response.data && response.status === 200) {
        dispatch({
          type: "REMOVE_SCHEDULE_MAILS",
          payload: templateId
        })
      }
    }
    catch (error) {
      console.log(error?.message);
    }
  }
}

export const CHANGE_FILTER = (filter,id) => {
  return dispatch => {
    dispatch(GET_SCHEDULE_MAILS(id))
    dispatch({ type: "CHANGE_FILTER", filter })
    history.push(`/app/marketing/email/compose/${filter}`)
  }
}