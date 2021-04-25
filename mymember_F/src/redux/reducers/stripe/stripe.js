const initState = {
    stripeList : [],
}

export const stripeReducer = (state = initState, action) => {
     switch(action.type){
         case "GET_STRIPE_LIST" : return {...state, stripeList : action.payload};
         default: return state;
     }
}