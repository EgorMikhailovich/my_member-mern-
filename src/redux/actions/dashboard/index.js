import axios from "axios"
import { history } from "../../../history"


const baseUrl = process.env.REACT_APP_BASE_URL;

export const Get_Birthday_APPOINTMENTS = (data) => {
  return async dispatch => {
    try{
      let response = await axios.get(`${baseUrl}/api/birthday_appoinment_list/${localStorage.getItem("user_id")}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }});
        if(response.data && response.status === 200 && !response.data.msg){
          dispatch({
            type : "GET_BIRTHDAY_LIST",
            payload : response.data
          })
        }
        else{
          dispatch({
            type : "GET_BIRTHDAY_LIST",
            payload : []
          })
        }
    }
    catch(error){
       console.log(error);
       dispatch({
        type : "GET_BIRTHDAY_LIST",
        payload : []
      })
    }
  }
}

export const Get_MissYouCall_APPOINTMENTS = (data) => {
  return async dispatch => {
    try{
      let response = await axios.get(`${baseUrl}/api/missYouCall_appoinmnet/${localStorage.getItem("user_id")}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }});
        if(response.data && response.status === 200 && !response.data.msg){
          dispatch({
            type : "GET_MISSYOUCALL_LIST",
            payload : response.data
          })
        }
        else{
          dispatch({
            type : "GET_MISSYOUCALL_LIST",
            payload : []
          })
        }
    }
    catch(error){
       console.log(error);
       dispatch({
        type : "GET_MISSYOUCALL_LIST",
        payload : []
      })
    }
  }
}

export const Get_SCHOOL_APPOINTMENT = (data) => {
  return async dispatch => {
    try{
      let response = await axios.get(`${baseUrl}/api/appointment/list_of_appointments/${localStorage.getItem("user_id")}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }});
        if(response.data && response.status === 200 && !response.data.msg){
          dispatch({
            type : "GET_SCHOOL_LIST",
            payload : response.data
          })
        }
        else{
          dispatch({
            type : "GET_SCHOOL_LIST",
            payload : []
          })
        }
    }
    catch(error){
       console.log(error);
       dispatch({
        type : "GET_SCHOOL_LIST",
        payload : []
      })
    }
  }
}

export const Get_RENEWAL_APPOINTMENT = (data) => {
  return async dispatch => {
    try{
      let response = await axios.get(`${baseUrl}/api/student_appoinment_list/${localStorage.getItem("user_id")}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }});
        if(response.data && response.status === 200 && !response.data.msg){
          dispatch({
            type : "GET_RENEWAL_LIST",
            payload : response.data
          })
        }
        else{
          dispatch({
            type : "GET_RENEWAL_LIST",
            payload : []
          })
        }
    }
    catch(error){
       console.log(error);
       dispatch({
        type : "GET_RENEWAL_LIST",
        payload : []
      })
    }
  }
}

export const Get_Latest_Member = (data) => {
  return async dispatch => {
    try{
      let response = await axios.get(`${baseUrl}/api/member/latest_member/${localStorage.getItem("user_id")}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }});
        if(response.data && response.status === 200 && !response.data.msg){
          dispatch({
            type : "GET_LATEST_MEMBER_LIST",
            payload : response.data
          })
        }
        else{
          dispatch({
            type : "GET_LATEST_MEMBER_LIST",
            payload : []
          })
        }
    }
    catch(error){
       console.log(error);
       dispatch({
        type : "GET_LATEST_MEMBER_LIST",
        payload : []
      })
    }
  }
}

export const Get_Months_Active_Trail = (data) => {
  return async dispatch => {
    try{
      let response = await axios.get(`${baseUrl}/api/member/this_month_active_trial/${localStorage.getItem("user_id")}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }});
        if(response.data && response.status === 200 && !response.data.msg){
          dispatch({
            type : "GET_MONTHS_ACTIVE_TRIAL",
            payload : response.data
          })
        }
        else{
          dispatch({
            type : "GET_MONTHS_ACTIVE_TRIAL",
            payload : []
          })
        }
    }
    catch(error){
       console.log(error);
       dispatch({
        type : "GET_MONTHS_ACTIVE_TRIAL",
        payload : []
      })
    }
  }
}
export const Get_Expired_Student = (data) => {
  return async dispatch => {
    try{
      let response = await axios.get(`${baseUrl}/api/member/expire_member/${localStorage.getItem("user_id")}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }});
        if(response.data && response.status === 200 && !response.data.msg){
          dispatch({
            type : "GET_EXPIRED_LIST",
            payload : response.data
          })
        }
        else{
          dispatch({
            type : "GET_EXPIRED_LIST",
            payload : []
          })
        }
    }
    catch(error){
       console.log(error);
       dispatch({
        type : "GET_EXPIRED_LIST",
        payload : []
      })
    }
  }
}

export const Get_Urgent_Student = (data) => {
  return async dispatch => {
    try{
      let response = await axios.get(`${baseUrl}/api/member/miss_you_call/${localStorage.getItem("user_id")}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }});
        if(response.data && response.status === 200 && !response.data.msg){
          dispatch({
            type : "GET_URGENT_LIST",
            payload : response.data
          })
        }
        else{
          dispatch({
            type : "GET_URGENT_LIST",
            payload : []
          })
        }
    }
    catch(error){
       console.log(error);
       dispatch({
        type : "GET_URGENT_LIST",
        payload : []
      })
    }
  }
}

export const Months_Lead = (data) => {
  return async dispatch => {
    try{
      let response = await axios.get(`${baseUrl}/api/member/lead_this_month/${localStorage.getItem("user_id")}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }});
        if(response.data && response.status === 200 && !response.data.msg){
          dispatch({
            type : "GET_MONTHS_LEAD",
            payload : response.data
          })
        }
        else{
          dispatch({
            type : "GET_MONTHS_LEAD",
            payload : []
          })
        }
    }
    catch(error){
       console.log(error);
       dispatch({
        type : "GET_MONTHS_LEAD",
        payload : []
      })
    }
  }
}
export const Get_Past3_Month = (data) => {
  return async dispatch => {
    try{
      let response = await axios.get(`${baseUrl}/api/member/lead_past_three_month/${localStorage.getItem("user_id")}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }});
        if(response.data && response.status === 200 && !response.data.msg){
          dispatch({
            type : "GET_3MONTHS_LEAD",
            payload : response.data
          })
        }
        else{
          dispatch({
            type : "GET_3MONTHS_LEAD",
            payload : []
          })
        }
    }
    catch(error){
       console.log(error);
       dispatch({
        type : "GET_3MONTHS_LEAD",
        payload : []
      })
    }
  }
}

export const Get_Months_Birthday = (data) => {
  return async dispatch => {
    try{
      let response = await axios.get(`${baseUrl}/api/member/this_month_birth/${localStorage.getItem("user_id")}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }});
        if(response.data && response.status === 200 && !response.data.msg){
          dispatch({
            type : "GET_MONTHS_BIRTHDAY",
            payload : response.data
          })
        }
        else{
          dispatch({
            type : "GET_MONTHS_BIRTHDAY",
            payload : []
          })
        }
    }
    catch(error){
       console.log(error);
       dispatch({
        type : "GET_MONTHS_BIRTHDAY",
        payload : []
      })
    }
  }
}
export const Get_Next_Months_Birthday = (data) => {
  return async dispatch => {
    try{
      let response = await axios.get(`${baseUrl}/api/member/next_month_birth/${localStorage.getItem("user_id")}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }});
        if(response.data && response.status === 200 && !response.data.msg){
          dispatch({
            type : "GET_NEXT_MONTHS_BIRTHDAY",
            payload : response.data
          })
        }
        else{
          dispatch({
            type : "GET_NEXT_MONTHS_BIRTHDAY",
            payload : []
          })
        }
    }
    catch(error){
       console.log(error);
       dispatch({
        type : "GET_NEXT_MONTHS_BIRTHDAY",
        payload : []
      })
    }
  }
}