import * as firebase from "firebase/app"
import { history } from "../../../history"
// import "firebase/auth"
// import "firebase/database"
import axios from "axios"

const baseUrl = process.env.REACT_APP_BASE_URL;


export const signupWithJWT = (email,
  password,
  firstname,
  lastname,
  phone,
  bussinessname,
  bussinessaddress,
  industrytype,
  username) => {
  return dispatch => {
    axios
      .post(`https://www.mymember.com:8080/api/signup`, {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        bussinessname: bussinessname,
        bussinessaddress: bussinessaddress,
        industrytype: industrytype,
        username: username
      })
      .then(response => {
        var loggedInUser
        if (response.data) {
          loggedInUser = response.data.user

          localStorage.setItem("token", response.data.token)
          localStorage.setItem("userdata",JSON.stringify( response.data) );

          dispatch({
            type: "LOGIN_WITH_JWT",
            payload: { loggedInUser, loggedInWith: "jwt" }
          })

          history.push("/")
        }

      })
      .catch(err => console.log(err))

  }
}
export const SIGN_UP_JWT = (data) => {
  return async dispatch => {
    console.log(">>>>>", data)
    try {
      let response = await axios.post(`${baseUrl}/api/signup`, data);
      console.log("response payload", response);
      if (response.data && response.status === 200) {
        window.scrollTo(0, 0);
        dispatch({
          type: "SIGNUP",
          payload: true
        })
        setTimeout(() => {
          dispatch({
            type: "SIGNUP",
            payload: false
          })
          window.location.href = "/thank-you-registration";
        }, 2000)
      }
    }
    catch (error) {
      console.log(error);
    }
  }
}   
