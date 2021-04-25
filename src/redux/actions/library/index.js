import axios from "axios"
import { history } from "../../../history"

const baseUrl = process.env.REACT_APP_BASE_URL + '/api/email_library';

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

export const GET_CATEGORIES_LIBRARY = () => { // GET ALL FOLDER

  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/category_list/${getUserId()}`, {
        headers: getHeaders()

      })
      if (response.data && response.status === 200) {
        dispatch({
          type: "GET_CATEGORIES_LIBRARY",
          payload: response.data
        })
      }
    }
    catch (error) {
      console.log(error?.message);
    }
  }
}

export const ADD_NEW_EMAIL_LIBRARY = (data) => { // ADD NEW FOLDER
  return async dispatch => {
    try {
      let response = await axios.post(`${baseUrl}/addcategory/${getUserId()}`, data, {
        headers: getHeaders()
      })
      if (response.data && response.status === 200) {
        console.log(response.data);
      }

      dispatch(GET_CATEGORIES_LIBRARY());
    }
    catch (error) {
      console.log(error?.message);
      dispatch(GET_CATEGORIES_LIBRARY());
    }
  }
}


export const ADD_NEW_SUB_EMAIL_LIBRARY = (data, folder) => { // ADD SUB FOLDER
  return async dispatch => {
    try {
      let response = await axios.post(`${baseUrl}/create_folder/${getUserId()}/${folder._id}`, data, {
        headers: getHeaders()
      })
      if (response.data && response.status === 200) {
        dispatch(GET_CATEGORIES_LIBRARY());
      }
    }
    catch (error) {
      console.log(error);
    }
  }
}
export const EDIT_MAIN_EMAIL_LIBRARY = (data, folder) => { // EDIT MAIN FOLDER  REANAME

  return async dispatch => {
    try {
      let response = await axios.put(`${baseUrl}/edit_category/${getUserId()}/${folder._id}`, data, {
        headers: getHeaders()
      })
      if (response.data && response.status === 200) {
        console.log(response.data);
      }
      dispatch(GET_CATEGORIES_LIBRARY());
    }
    catch (error) {
      console.log(error?.message);
    }
  }
}

export const EDIT_SUB_EMAIL_LIBRARY = (data, folder) => { // EDIT SUBFOLDER REANAME

  return async dispatch => {
    try {
      let response = await axios.put(`${baseUrl}/update_folder/${getUserId()}/${folder._id}`, data, {
        headers: getHeaders()
      })
      if (response.data && response.status === 200) {
        console.log(response.data);
        dispatch(GET_CATEGORIES_LIBRARY());
      }
    }
    catch (error) {
      console.log(error?.message);
    }
  }
}

export const ADD_TEMPLATE_TO_LIBRARY = (data, folderId) => { // ADD TEMPLATE TO FOLDER (MEANS SUBFOLDER )
  let url = `${baseUrl}/add_template/${getUserId()}/${folderId}`
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
export const DELETE_FOLDER = (folder) => { // DELETE MAIN FIOLDER 
  return async dispatch => {
    try {
      let response = await axios.delete(`${baseUrl}/remove_category/${getUserId()}/${folder._id}`, {
        headers: getHeaders()
      })
      if (response.data) {
        dispatch(GET_CATEGORIES_LIBRARY());
      }

    } catch (error) {

    }

  }
}
export const DELETE_SUB_FOLDER = (folder) => { // DELETE SUB FIOLDER 

  return async dispatch => {
    try {
      let response = await axios.delete(`${baseUrl}/delete_folder/${getUserId()}/${folder._id}`, {
        headers: getHeaders()
      })
      if (response.data) {
        dispatch(GET_CATEGORIES_LIBRARY());
      }

    } catch (error) {

    }

  }
}
export const GET_SCHEDULE_MAILS = (folderId) => { // GET SCHEDULES MAIL OF SELECTED FOLDER 
  return async dispatch => {
    try {
      let response = await axios.get(`${baseUrl}/list_template/${getUserId()}/${folderId}`, {
        headers: getHeaders()

      })
      if (response.data && response.status === 200) {
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
export const GET_SMARTLIST = () => { // GET EMAILS OF RECIVERS 

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

export const DELETE_SCHEDULE_MAIL = (templateId) => { // DELETE SCHEDILE MAILS
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


export const changeFilter = (filter,id) => { // MAKE SELECTED FOLDER ACTIVE 
  return dispatch => {
    dispatch(GET_SCHEDULE_MAILS(id))
    dispatch({ type: "CHANGE_FILTER", filter })
    history.push(`/app/marketing/email/library/${filter}`)
  }
}