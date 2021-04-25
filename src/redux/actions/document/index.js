import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;


      export const Create_DocFolder = task => {
        return dispatch => {
           axios.post(`${baseUrl}/api/document_folder/create_folder/${localStorage.getItem("user_id")}`, {...task}, {
            headers : {
              "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
            }
          }).then(res => {
            dispatch(Get_DocFolder_LIST());
          })
        }
      }
  
      export const Get_DocFolder_LIST = (data) => {
        return async dispatch => {
          try{
            let response = await axios.get(`${baseUrl}/api/document_folder/read_folder/${localStorage.getItem("user_id")}`, {
              headers : {
                "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
              }});
              if(response.data && response.status === 200 && !response.data.msg){
                dispatch({
                  type : "Get_Document_List",
                  payload : response.data
                })
              }
              else{
                dispatch({
                  type : "Get_Document_List",
                  payload : []
                })
              }
          }
          catch(error){
             console.log(error);
             dispatch({
              type : "Get_Document_List",
              payload : []
            })
          }
        }
      }

      // export const Get_DocSubFolder_LIST = (data) => {
      //   return async dispatch => {
      //     try{
      //       let response = await axios.get(`${baseUrl}/api/document_subfolder/list_docuemnt/${localStorage.getItem("user_id")}`, {
      //         headers : {
      //           "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
      //         }});
      //         if(response.data && response.status === 200 && !response.data.msg){
      //           dispatch({
      //             type : "Get_Sub_Document_List",
      //             payload : response.data
      //           })
      //         }
      //         else{
      //           dispatch({
      //             type : "Get_Sub_Document_List",
      //             payload : []
      //           })
      //         }
      //     }
      //     catch(error){
      //        console.log(error);
      //        dispatch({
      //         type : "Get_Sub_Document_List",
      //         payload : []
      //       })
      //     }
      //   }
      // }
    export const Create_DocSubFolder = (data, folderId, type) => {
       
        return async dispatch => {
            try {
              console.log("????????????????????????????",data)
                let response = await axios.post(`${baseUrl}/api/document_subfolder/create_subfolder/${localStorage.getItem("user_id")}/${folderId._id}`, data, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("access_token")}`
                    }
                });
                if (response.data && response.status === 200) {
                    console.log(response.data);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }