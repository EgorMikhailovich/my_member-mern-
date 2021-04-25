const initState = {
    
    userInfo : [],
}

export const userInfoReducer = (state = initState, action) => {
     switch(action.type){
        //  case "GET_PROGRAM_LIST" : return {...state, programList : action.payload};
         case "GET_USER_INFO": {
            return { ...state, userInfo: action.payload }
          }
         
         default: return state;
     }
}