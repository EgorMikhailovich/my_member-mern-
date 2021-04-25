const initState = {
   status : false,
   values : ""
};

export const register = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP" :
        return {...state, status : action.payload};
    case "SIGNUP_WITH_EMAIL": {
      return { ...state, values: action.payload }
    }
    case "SIGNUP_WITH_JWT":
      return {
        ...state,
        values: action.payload
      }
    default: {
      return state
    }
  }
}
