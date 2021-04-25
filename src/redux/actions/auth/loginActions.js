import * as firebase from "firebase/app"
import { history } from "../../../history"
import "firebase/auth"
import "firebase/database"
import axios from "axios"
import { config } from "../../../authServices/firebase/firebaseConfig"

// Init firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

// let firebaseAuth = firebase.auth()
const baseUrl = process.env.REACT_APP_BASE_URL;
// const initAuth0 = new auth0.WebAuth(configAuth)

// export const submitLoginWithFireBase = (email, password, remember) => {
//   return dispatch => {
//     let userEmail = null,
//       loggedIn = false
//     firebaseAuth
//       .signInWithEmailAndPassword(email, password)
//       .then(result => {
//         firebaseAuth.onAuthStateChanged(user => {
//           result.user.updateProfile({
//             displayName: "Admin"
//           })
//           let name = result.user.displayName
//           if (user) {
//             userEmail = user.email
//             loggedIn = true
//             dispatch({
//               type: "LOGIN_WITH_EMAIL",
//               payload: {
//                 email: userEmail,
//                 name,
//                 isSignedIn: loggedIn,
//                 loggedInWith: "firebase"
//               }
//             })
//           }
//           if (user && remember) {
//             firebase
//               .auth()
//               .setPersistence(firebase.auth.Auth.Persistence.SESSION)
//               .then(() => {
//                 dispatch({
//                   type: "LOGIN_WITH_EMAIL",
//                   payload: {
//                     email: userEmail,
//                     name,
//                     isSignedIn: loggedIn,
//                     remember: true,
//                     loggedInWith: "firebase"
//                   }
//                 })
//               })
//           }
//           history.push("/")
//         })
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
// }

// export const loginWithFB = () => {
//   return dispatch => {
//     let provider = new firebase.auth.FacebookAuthProvider()
//     provider.setCustomParameters({
//       display: "popup"
//     })
//     firebaseAuth
//       .signInWithPopup(provider)
//       .then(result => {
//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         let token = result.credential.accessToken,
//           // The signed-in user info.
//           user = result.user.email
//         dispatch({
//           type: "LOGIN_WITH_FB",
//           payload: {
//             user,
//             token,
//             loggedInWith: "firebase"
//           }
//         })
//         if (user) history.push("/")
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
// }

// export const loginWithTwitter = () => {
//   return dispatch => {
//     let provider = new firebase.auth.TwitterAuthProvider()
//     firebaseAuth
//       .signInWithPopup(provider)
//       .then(function(result) {
//         let token = result.credential.accessToken,
//           user = result.user.email,
//           name = result.user.displayName,
//           photoUrl = result.user.photoURL
//         dispatch({
//           type: "LOGIN_WITH_TWITTER",
//           payload: {
//             user,
//             name,
//             photoUrl,
//             token,
//             loggedInWith: "firebase"
//           }
//         })
//         history.push("/")
//       })
//       .catch(function(error) {
//         console.log(error)
//       })
//   }
// }

// export const loginWithGoogle = () => {
//   return dispatch => {
//     let provider = new firebase.auth.GoogleAuthProvider()
//     firebaseAuth
//       .signInWithPopup(provider)
//       .then(function(result) {
//         let token = result.credential.accessToken,
//           user = result.user.email,
//           name = result.user.displayName,
//           photoUrl = result.user.photoURL
//         dispatch({
//           type: "LOGIN_WITH_GOOGLE",
//           payload: {
//             email: user,
//             name: name,
//             photoUrl,
//             token,
//             loggedInWith: "firebase"
//           }
//         })
//         history.push("/")
//       })
//       .catch(function(error) {
//         console.log(error)
//       })
//   }
// }

// export const loginWithGithub = () => {
//   return dispatch => {
//     let provider = new firebase.auth.GithubAuthProvider()
//     firebaseAuth
//       .signInWithPopup(provider)
//       .then(function(result) {
//         let token = result.credential.accessToken,
//           user = result.user.email,
//           name = result.additionalUserInfo.username,
//           photoUrl = result.user.photoURL

//         dispatch({
//           type: "LOGIN_WITH_GITHUB",
//           payload: {
//             user,
//             name,
//             photoUrl,
//             token,
//             loggedInWith: "firebase"
//           }
//         })
//         history.push("/")
//       })
//       .catch(function(error) {
//         console.log(error)
//       })
//   }
// }

export const loginWithJWT = user => {
  return dispatch => {
    axios
      .post(`${baseUrl}/api/signin`, {
        username: user.username,
        password: user.password
      })
      .then(response => {
        var loggedInUser
        if (response.data) {
          loggedInUser = response.data.user
          dispatch({
            type: "LOGIN_WITH_JWT",
            payload: { loggedInUser, loggedInWith: "jwt" }
          })

          history.push("/app/student/list")
        }
      })
      .catch(err => console.log(err))
  }
}

export const LOGIN_WITH_JWT = ({username, password}) => {
  console.log("username", username);
  console.log("password", password);
  return async dispatch => {
    try{
        let response = await axios.post(`${baseUrl}/api/signin`, { username, password });
        if(response.data && response.status === 200){
          let loggedInUser = response.data.data;
          // console.log(">>>>>>>>>>>>>",loggedInUser)
          localStorage.setItem("user_id", response.data.data._id);
          localStorage.setItem("access_token", response.data.token);
          localStorage.setItem("userdata",JSON.stringify( response.data) );
          dispatch({
            type: "LOGIN_WITH_JWT",
            payload: { loggedInUser, loggedInWith: "jwt" }
          })
          window.location.href = loggedInUser.role ==1 ? "/app/member/list" :"/dashboard";
        }

    }
    catch(error){
      console.log(error);
    }
  }
}

export const logoutWithJWT = () => {
  return dispatch => {
    // localStorage.removeItem("access_token");
    localStorage.clear()
    dispatch({ type: "LOGOUT_WITH_JWT", payload: {} })
    history.push("/pages/login")
  }
}

export const logoutWithFirebase = user => {
  return dispatch => {
    dispatch({ type: "LOGOUT_WITH_FIREBASE", payload: {} })
    history.push("/pages/login")
  }
}

export const changeRole = role => {
  return dispatch => dispatch({ type: "CHANGE_ROLE", userRole: role })
}

export const Get_User_Info = () => {
  return async dispatch => {
      try{
          let response = await axios.get(`${baseUrl}/api/organization_setup_info/${localStorage.getItem("user_id")}`, 
          {headers : {
              "Authorization" : `Bearer ${localStorage.getItem("access_token")}`}});
          if(response.data && response.status === 200){
              dispatch({
                  type : "GET_USER_INFO",
                  payload : response.data
              })
           }
      }
      catch(error){
          console.log("something went wrong");
      }
  }
}

export const updateUserInfo = (id, task) => {
  return dispatch => {
    axios.put(`${baseUrl}/api/update_organization_setup/${localStorage.getItem("user_id")}/${id}`, {...task}, {
      headers : {
        "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
      }
    }).then(res => {
      dispatch(Get_User_Info());
    })
    
  }
}