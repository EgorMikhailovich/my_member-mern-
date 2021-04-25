const initState = {
    stripes : [],
    campInfolist:[],
    subuserlist:[],
    programList: [],
    stripeInfo : null,
    //class schedule state
    class_schedule : {
        status : false,
        msg : ""
    }
}

export const settingReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_STRIPES":
            return {...state, stripes : action.payload};
        case "GET_STRIPE_INFO":
            return {...state, stripeInfo : action.payload};    
        case "GET_CAMP_INFO":
            return {...state, campInfolist : action.payload};  
        case "GET_SUBUSER_INFO":
            return {...state, subuserlist : action.payload};  
        case "GET_PROGRAM_LIST":
            return {...state, programList : action.payload}
        case "SCHEDULE_STATUS":
            return {...state, class_schedule : {
                ...state.class_schedule,
                status : action.payload.status,
                msg : action.payload.message
            }};
        case "CLEAR_SCHEDULE_STATUS" :
             return {...state, class_schedule : {
                 status : false,
                 msg : ""
             }};    
        default:
            return state;
    }
}