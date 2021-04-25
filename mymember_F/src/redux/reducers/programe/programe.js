const initState = {
    programList : [],
    categoryList : [],
}

export const programReducer = (state = initState, action) => {
     switch(action.type){
         case "GET_PROGRAM_LIST" : return {...state, programList : action.payload};
         case "GET_CATEGORIES_LIST" : return {...state, categoryList : action.payload};
         
         default: return state;
     }
}