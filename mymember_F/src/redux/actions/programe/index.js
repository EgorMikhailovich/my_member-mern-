import axios from 'axios';


const baseUrl = process.env.REACT_APP_BASE_URL;



export const getProgramList = () => {
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

export const updateProgram = (id, task) => {
    return dispatch => {
      axios.put(`${baseUrl}/api/update_task/${localStorage.getItem("user_id")}/${id}`, {...task}, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }
      }).then(res => {
        dispatch(getProgramList());
      })
      
    }
  }


export const trashPrograme = (id) => {
    return dispatch => {
      axios.delete(`${baseUrl}/api/delete_program/${localStorage.getItem("user_id")}/${id}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }
      }).then(res => {
        dispatch(getProgramList());
      })
      
    }
  }
  export const GET_CATEGORIES = () => {
    return async dispatch => {
      let response = await axios.get(`${baseUrl}/api/list_of_program/${localStorage.getItem("user_id")}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      if(response.data && response.status === 200){
        dispatch({
          type : "GET_CATEGORIES_LIST",
          payload : response.data
        })
      }
    }
  }


export const createCategory = task => {
    return dispatch => {
       axios.post(`${baseUrl}/api/program_createCategory/${localStorage.getItem("user_id")}`, {...task}, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }
      }).then(res => {
        dispatch(GET_CATEGORIES());
      })
    }
  }

