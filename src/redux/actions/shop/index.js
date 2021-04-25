import axios from 'axios';
import { loadavg } from 'os';


const baseUrl = process.env.REACT_APP_BASE_URL;



export const getMembership = () => {
    const userData = JSON.parse(localStorage.getItem("userdata"))
    return async dispatch => {
        try {
            let response = await axios.get(`${baseUrl}/api/membership/membership_list/${localStorage.getItem("user_id")}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("access_token")}`
                }
            });
            if (response.data && response.status === 200) {
                dispatch({
                    type: "GET_MEMBERSHIP_LIST",
                    payload: response.data
                })
            }
        }
        catch (error) {
            console.log("something went wrong");
        }
    }
}

export const createMembership = (data) => {
    const userData = JSON.parse(localStorage.getItem("userdata"))
    let formData = new FormData();
    // console.log("?????????????????????",data)
    let dataEntries = Object.entries(data);
    dataEntries.map((v, i) => {
        formData.append(v[0], v[1]);
        return v;
    })
    return async dispatch => {
        try {
            let response = await axios.post(`${baseUrl}/api/membership/add_membership/${localStorage.getItem("user_id")}`, formData, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
                    "content-type": "multipart/form-data",
                }
            })
            if (response.data && response.status === 200) {
                dispatch(getMembership())
            }
            
           
        }
        catch(error){
            console.log(error);
            console.log("something went wrong");
        }
    }
} 

export const editMembership = (data,id) => {
    const userData = JSON.parse(localStorage.getItem("userdata"))
    let formData = new FormData();
    let dataEntries = Object.entries(data);
    dataEntries.map((v,i) => {
        formData.append(v[0], v[1]);
        return v;
    })
    return async dispatch => {
        try{
            if(userData.data.role === 1){
                let response = await axios.put(`${baseUrl}/api/update_user_membership/${userData.data._id}/${id}`, data, {
                    headers : {
                        "Authorization" : `Bearer ${userData.token}`,
                        "content-type" : "application/json",
                    }
                })
                console.log(response);
                if(response.data && response.status === 200){
                    dispatch(getMembership())
                }
            }
        }
        catch(error){
            console.log("something went wrong");
        }
    }
}


export const buyMembership = ({ data, membershipId }) => {
    return async dispatch => {
        try {
            let response = await axios.post(`${baseUrl}/api/membership/buy_membership/${localStorage.getItem("user_id")}/${membershipId}`, data, {
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

export const updateMembership = ({ data, membershipId }) => {
    return async dispatch => {
        try {
            let response = await axios.put(`${baseUrl}/api/membership/update_membership/${localStorage.getItem("user_id")}/${membershipId}`, data, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("access_token")}`
                }
            })
            if (response.data && response.status === 200) {
                console.log(response.data);
            }
        }
        catch (error) {
            console.log(error)
        }
    }
}


export const getMembershipInfo = ({ membershipId }) => {
    return async dispatch => {
        try {
            let response = await axios.get(`${baseUrl}/api/membership/info_membership/${localStorage.getItem("user_id")}/${membershipId}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("access_token")}`
                }
            })
            if (response.data && response.status === 200) {
                console.log(response.data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
export const trashMembership = (id) => {
    const userData = JSON.parse(localStorage.getItem("userdata"))

    return dispatch => {
        if(userData.data.role === 1){
            axios.delete(`${baseUrl}/api/remove_user_membership/${userData.data._id}/${id}`, {
                headers : {
                  "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
                }
              }).then(res => {
                dispatch(getMembership());
              })
        }else{
            axios.delete(`${baseUrl}/api/membership/delete_membership/${localStorage.getItem("user_id")}/${id}`, {
                headers : {
                  "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
                }
              }).then(res => {
                dispatch(getMembership());
            })
        }
    }
}


//   test section 


export const getTests = () => {
    return async dispatch => {
        try {
            let response = await axios.get(`${baseUrl}/api/test/fees_list/${localStorage.getItem("user_id")}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("access_token")}`
                }
            });
            if (response.data && response.status === 200) {
                dispatch({
                    type: "GET_TESTPAPER_LIST",
                    payload: response.data
                })
            }
        }
        catch (error) {
            console.log("something went wrong");
        }
    }
}

export const createTestpaper = task => {
    return dispatch => {
        axios.post(`${baseUrl}/api/test_fees/${localStorage.getItem("user_id")}`, { ...task }, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`
            }
        }).then(res => {
            dispatch(getTests());
        })
    }
}

export const trashTestPaper = (id) => {
    console.log("coming here ")
    return dispatch => {
        axios.delete(`${baseUrl}/api/test/feesdelete/${localStorage.getItem("user_id")}/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`
            }
        }).then(res => {
            dispatch(getTests());
        })

    }
}

export const getStudentsList = () => {
    return async dispatch => {
        try {
            let response = await axios.get(`${baseUrl}/api/member/active_student/${localStorage.getItem("user_id")}`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("access_token")}`
                    }
                })
            if (response.data && response.status === 200) {
                dispatch({
                    type: "GET_STUDENT_LIST",
                    payload: response.data
                })
            }
        } catch (error) {
            console.log("something went wrong")
        }
    }
}

export const buyStudentMembership = (data, studentId, type) => {
    let url = `${baseUrl}/api/membership/buy_membership/${localStorage.getItem("user_id")}`
    if (type == "student profile") {
        delete data.student_name
        url = `${baseUrl}/api/membership/buy_membership/${localStorage.getItem("user_id")}/${studentId}`
    } else {
        delete data.membership_name
    }
    return async dispatch => {
        try {
            let response = await axios.post(url, data, {
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

export const getStudentPurchaseList = (studentId) => {
    return async dispatch => {
        try {
            let response = await axios.get(`${baseUrl}/api/member/member_info/${localStorage.getItem("user_id")}/${studentId}`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("access_token")}`
                    }
                })
            if (response.data && response.status === 200) {
                dispatch({
                    type: "GET_STUDENT_PURCHASE_LIST",
                    payload: response.data.membership_details
                })
            }
        } catch (error) {
            console.log("something went wrong")
        }
    }
}
