import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;



export const GetExpenseList = () => {
  return async dispatch => {
      try{
          let response = await axios.get(`${baseUrl}/api/list_of_expenses/${localStorage.getItem("user_id")}`, 
          {headers : {
              "Authorization" : `Bearer ${localStorage.getItem("access_token")}`}});
          if(response.data && response.status === 200){
              dispatch({
                  type : "GET_EXP_LIST",
                  payload : response.data
              })
           }
      }
      catch(error){
          console.log("something went wrong");
      }
  }
}
export const CREATE_EXPENSE = (data) => {
  let formData = new FormData()
  let dataEntries  = Object.entries(data);
  dataEntries.map((v,i) => {
      formData.append(v[0], v[1]);
      return v;
  })
  return async dispatch => {
      try{
        let response = await axios.post(`${baseUrl}/api/add_expenses/${localStorage.getItem("user_id")}`, formData, {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem("access_token")}`,
                "content-type" : "multipart/form-data",
            }
        })
        if(response.data && response.status === 200){
            console.log(response.data);
            dispatch(GetExpenseList());
        }
      }
      catch(error){
          console.log(error?.message);
          dispatch(GetExpenseList());
      }
  }
}

export const trashExpense = (id) => {
  // console.log(">>>>>>>>>>",id)
  return dispatch => {
    axios.delete(`${baseUrl}/api/delete_expenses/${localStorage.getItem("user_id")}/${id}`, {
      headers : {
        "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
      }
    }).then(res => {
      dispatch(GetExpenseList());
    })
    
  }
}
/*************************************expense category ********************* */
export const ExpenseCategoryList = () => {
    return async dispatch => {
        try{
            let response = await axios.get(`${baseUrl}/api/expenses/list_category/${localStorage.getItem("user_id")}`, 
            {headers : {
                "Authorization" : `Bearer ${localStorage.getItem("access_token")}`}});
            if(response.data && response.status === 200){
                dispatch({
                    type : "GET_EXP_CATEGORY_LIST",
                    payload : response.data
                })
             }
        }
        catch(error){
            console.log("something went wrong");
        }
    }
}


export const CREATE_EXPENSE_CATEGORY = task => {
    return dispatch => {
       axios.post(`${baseUrl}/api/expenses/add_category/${localStorage.getItem("user_id")}`, {...task}, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }
      }).then(res => {
        dispatch(ExpenseCategoryList());
      })
    }
  }
  // export const editExpenseCategory  = (id, data) => {
  //   return dispatch => {
  //      axios.put(`${baseUrl}/api/expenses/update_category/${localStorage.getItem("user_id")}/${id}`, data, {
  //       headers : {
  //         "Authorization" : `Bearer ${localStorage.getItem("access_token")}`,
  //         "content-type" : "application/json",
  //       }
  //     }).then(res => {
  //       dispatch(ExpenseCategoryList());
  //     })
  //   }
  // }
export const editExpenseCategory = (data,id) => {
    return async dispatch => {
        try{
            
                let response = await axios.put(`${baseUrl}/api/expenses/update_category/${localStorage.getItem("user_id")}/${id}`, data, {
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("access_token")}`,
                        "content-type" : "application/json",
                    }
                })
                console.log(response);
                if(response.data && response.status === 200){
                    dispatch(ExpenseCategoryList())
                }
            
        }
        catch(error){
            console.log(error);
        }
    }
} 
  
  

  
  export const trashCategory = (id) => {
    return dispatch => {
      axios.delete(`${baseUrl}/api/expenses/remove_category/${localStorage.getItem("user_id")}/${id}`, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
        }
      }).then(res => {
        dispatch(ExpenseCategoryList());
      })
      
    }
  }



/**********************************finance mymoney********************************* */
export const GetMonthlyPaymentList = () => {
  return async dispatch => {
      try{
          let response = await axios.get(`${baseUrl}/api/finance/monthly_pay_list/${localStorage.getItem("user_id")}`, 
          {headers : {
              "Authorization" : `Bearer ${localStorage.getItem("access_token")}`}});
          if(response.data && response.status === 200){
              dispatch({
                  type : "GET_MONTHLY_PAYMENTS_LIST",
                  payload : response.data
              })
           }
      }
      catch(error){
          console.log("something went wrong");
      }
  }
}

export const ExpenseBreakDownList = () => {
  return async dispatch => {
      try{
        console.log("coming here ")
          let response = await axios.get(`${baseUrl}/api/finance/expense_breakdown/${localStorage.getItem("user_id")}`, 
          {headers : {
              "Authorization" : `Bearer ${localStorage.getItem("access_token")}`}});
          if(response.data && response.status === 200){
              dispatch({
                  type : "GET_EXPENSE_BREAKDOWN_LIST",
                  payload : response.data
              })
           }
      }
      catch(error){
          console.log("something went wrong");
      }
  }
}

export const CCExpiringList = () => {
  return async dispatch => {
      try{
          let response = await axios.get(`${baseUrl}/api/finance/cc_expire/${localStorage.getItem("user_id")}`, 
          {headers : {
              "Authorization" : `Bearer ${localStorage.getItem("access_token")}`}});
          if(response.data && response.status === 200){
              dispatch({
                  type : "GET_MONTHLY_CCExpiring",
                  payload : response.data
              })
           }
      }
      catch(error){
          console.log(error);
      }
  }
}


  
/**************************************************************marketing ************************** */

export const GetAllEmailList = () => {
  return async dispatch => {
      try{
          let response = await axios.get(`${baseUrl}/api/all_email_list/${localStorage.getItem("user_id")}`, 
          {headers : {
              "Authorization" : `Bearer ${localStorage.getItem("access_token")}`}});
          if(response.data && response.status === 200){
              dispatch({
                  type : "GET_ALL_EMAIL_LIST",
                  payload : response.data
              })
           }
      }
      catch(error){
          console.log("something went wrong");
      }
  }
}

export const SENT_EMAIL_COMPOSE = task => {
  
  return async dispatch => {
    console.log(task);
    let response = await axios.post(`${baseUrl}/api/email_compose/send_email/${localStorage.getItem("user_id")}`, {...task}, {
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

export const moveMail = (id) => {
  return dispatch => {
    // console.log("hey there i ma coming>>>>>",id)
    axios.delete(`${baseUrl}/api/email_compose/remove_template/${localStorage.getItem("user_id")}/${id}`, {
      headers : {
        "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
      }
    }).then(res => {
      dispatch(GetAllEmailList());
    })
    
  }
}

export const CREATE_FOLDER_CATEGORY = task => {
  return dispatch => {
     axios.post(`${baseUrl}/api/email_compose/addCategory/${localStorage.getItem("user_id")}`, {...task}, {
      headers : {
        "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
      }
    }).then(res => {
      dispatch(GetFolderList());
    })
  }
}
export const GetFolderList = () => {
  return async dispatch => {
      try{
          let response = await axios.get(`${baseUrl}/api/email_compose/category_list/${localStorage.getItem("user_id")}`, 
          {headers : {
              "Authorization" : `Bearer ${localStorage.getItem("access_token")}`}});
          if(response.data && response.status === 200){
              dispatch({
                  type : "GET_FOLDER_LIST",
                  payload : response.data
              })
           }
      }
      catch(error){
          console.log("something went wrong");
      }
  }
}
