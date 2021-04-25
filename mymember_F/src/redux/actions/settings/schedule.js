import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;


export const GET_CLASS_SCHEDULE = (class_sh_id) => {
    return async dispatch => {
        let response = await axios.post(`${baseUrl}/api/class_schedule_by_id/${localStorage.getItem("user_id")}/${class_sh_id}`, {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
            }
        })
    }
}

export const ADD_CLASS_SCHEDULE = (data) => {
    return async dispatch => {
        try{
            let response = await axios.post(`${baseUrl}/api/add_classSchedule/${localStorage.getItem("user_id")}`, data, {
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
                }
            });
            if(response.data && response.status === 200){
                dispatch(SUCCESS_SCHEDULE_STATUS("Class schedule is created successfully!"));
            }
            else{
                dispatch(ERROR_SCHEDULE_STATUS());
            }
        }
        catch(error){
            dispatch(ERROR_SCHEDULE_STATUS());
        }
    }
}


export const UPDATE_CLASS_SCHEDULE = (data, class_sh_id) => {
   return async dispatch => {
       try{
            let response = await axios.put(`${baseUrl}/api/update_classSchedule/${localStorage.getItem("user_id")}/${class_sh_id}`,data ,{
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
                }
            })
            if(response.data && response.status === 200){
                   dispatch(SUCCESS_SCHEDULE_STATUS("Class schedule is updated successfully!"));
            }
            else{
                dispatch(ERROR_SCHEDULE_STATUS());
            }
       }
       catch(error){
        dispatch(ERROR_SCHEDULE_STATUS());
       }
   }
}


export const GET_PROGRAM_LIST = () => {
  return async dispatch => {
      try{
          let response = await axios.get(`${baseUrl}/api/list_of_program/${localStorage.getItem("user_id")}`, 
          {headers : {
              "Authorization" : `Bearer ${localStorage.getItem("access_token")}`}});
          if(response.data && response.status === 200){
              dispatch({
                  type : "GET_PROGRAM_LIST",
                  payload : response.data
              })
           }
      }
      catch(error){
          console.log("something went wrong");
      }
  }
}


// SCHEDULE RESPONSE STATES

export const SUCCESS_SCHEDULE_STATUS = (msg) => {
    return dispatch => {
        dispatch({
            type : "SCHEDULE_STATUS",
            payload : {
                status : true,
                message : msg
            }
        })
    }
}


export const ERROR_SCHEDULE_STATUS = () => {
    return dispatch => {
        dispatch({
            type : "SCHEDULE_STATUS",
            payload : {
                status : true,
                message : "Something went wrong!"
            }
        })
    }
}


export const CLEAR_SCHEDULE_STATUS = () => {
    return dispatch => {
        dispatch({
            type : "CLEAR_SCHEDULE_STATUS"
        })
    }
}



export const Get_CAMP_LIST = (data) => {
    return async dispatch => {
      try{
        let response = await axios.get(`${baseUrl}/api/camp/list_camp/${localStorage.getItem("user_id")}`, {
          headers : {
            "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
          }});
          if(response.data && response.status === 200 && !response.data.msg){
            dispatch({
              type : "GET_CAMP_INFO",
              payload : response.data
            })
          }
          else{
            dispatch({
              type : "GET_CAMP_INFO",
              payload : []
            })
          }
      }
      catch(error){
         console.log(error);
         dispatch({
          type : "GET_CAMP_INFO",
          payload : []
        })
      }
    }
  }


  export const Get_SUBUSER_LIST = (data) => {
    return async dispatch => {
      try{
        let response = await axios.get(`${baseUrl}/api/users/user_list/${localStorage.getItem("user_id")}`, {
          headers : {
            "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
          }});
          if(response.data && response.status === 200 && !response.data.msg){
            dispatch({
              type : "GET_SUBUSER_INFO",
              payload : response.data
            })
          }
          else{
            dispatch({
              type : "GET_SUBUSER_INFO",
              payload : []
            })
          }
      }
      catch(error){
         console.log(error);
         dispatch({
          type : "GET_SUBUSER_INFO",
          payload : []
        })
      }
    }
  }

  export const CREATE_SUB_USER = (data) => {
    let formData = new FormData()
    let dataEntries  = Object.entries(data);
    dataEntries.map((v,i) => {
        formData.append(v[0], v[1]);
        return v;
    })
    return async dispatch => {
        try{
          let response = await axios.post(`${baseUrl}/api/users/add_user/${localStorage.getItem("user_id")}`, formData, {
              headers : {
                  "Authorization" : `Bearer ${localStorage.getItem("access_token")}`,
                  "content-type" : "multipart/form-data",
              }
          })
          if(response.data && response.status === 200){
              console.log(response.data);
              dispatch(Get_SUBUSER_LIST());
          }
        }
        catch(error){
            console.log(error?.message);
            dispatch(Get_SUBUSER_LIST());
        }
    }
  }

  export const UPDATE_STRIPE = ({data, stripeId}) => {
    let formData = new FormData();
    let dataEntries = Object.entries(data);
    dataEntries.map((v,i) => {
        formData.append(v[0], v[1]);
        return v;
    })
    return async dispatch => {
        try{
           let response = await axios.put(`${baseUrl}api/update_stripe/${localStorage.getItem("user_id")}/${stripeId}`, formData, {
               headers : {
                   "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
               }
           })
           if(response.data && response.status === 200){
            dispatch(Get_SUBUSER_LIST());
           }
        }
        catch(error){
            console.log(error?.message);
            dispatch(Get_SUBUSER_LIST());
        }
    }
  }
  
  export const trashSubUser = (id) => {
      return dispatch => {
        axios.delete(`${baseUrl}/api/users/delete_user/${localStorage.getItem("user_id")}/${id}`, {
          headers : {
            "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
          }
        }).then(res => {
          dispatch(Get_SUBUSER_LIST());
        })
        
      }
    }
    export const trashCamp = (id) => {
      return dispatch => {
        axios.delete(`${baseUrl}/api/camp/delete_camp/${localStorage.getItem("user_id")}/${id}`, {
          headers : {
            "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
          }
        }).then(res => {
          dispatch(Get_CAMP_LIST());
        })
        
      }
    }
