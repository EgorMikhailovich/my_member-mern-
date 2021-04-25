import axios from 'axios';


const baseUrl = process.env.REACT_APP_BASE_URL;



export const getStripeList = () => {
    return async dispatch => {
        try{
            let response = await axios.get(`${baseUrl}/api/list_of_stripe/${localStorage.getItem("user_id")}`, 
            {headers : {
                "Authorization" : `Bearer ${localStorage.getItem("access_token")}`}});
            if(response.data && response.status === 200){
                dispatch({
                    type : "GET_STRIPE_LIST",
                    payload : response.data
                })
             }
        }
        catch(error){
            console.log("something went wrong");
        }
    }
}

export const CREATE_STRIPES = (data) => {
  let formData = new FormData()
  let dataEntries  = Object.entries(data);
  dataEntries.map((v,i) => {
      formData.append(v[0], v[1]);
      return v;
  })
  return async dispatch => {
      try{
        let response = await axios.post(`${baseUrl}/api/add_stripe/${localStorage.getItem("user_id")}`, formData, {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem("access_token")}`,
                "content-type" : "multipart/form-data",
            }
        })
        if(response.data && response.status === 200){
            console.log(response.data);
            dispatch(getStripeList());
        }
      }
      catch(error){
          console.log(error?.message);
          dispatch(getStripeList());
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
          dispatch(getStripeList());
         }
      }
      catch(error){
          console.log(error?.message);
          dispatch(getStripeList());
      }
  }
}

export const trashStripe = (id) => {
    return dispatch => {
        if(window.confirm("Are you Sure to delete this record?")==true){
            axios.delete(`${baseUrl}/api/delete_stripe/${localStorage.getItem("user_id")}/${id}`, {
                headers : {
                  "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
                }
              }).then(res => {
                dispatch(getStripeList());
              })
        }
      
      
    }
  }
