let initState = {
       weekly : [],
       monthly : [],
       quarterly : [],
       annual : [],
       all : [],
       goal_status : {
           status : false,
           msg :  "",
           type : "",
           title : ""
       },
       filter : "all",
}
export const goalReducer = (state = initState, {type, payload}) => {
    switch(type){
        case "GET_GOALS" : 
            return {
                ...state, 
                weekly :  payload.weekly,
                monthly :  payload.monthly,
                quarterly :  payload.quarterly,
                annual :  payload.annual,
                all :  payload.all
            }
        case "SET_GOALS_STATUS" : 
            return {
                ...state, 
                goal_status : {
                    ...state.goal_status,
                    status : payload.status,
                    msg : payload.message,
                    type : payload.type,
                    title : payload.title
                }
            }
        case "CLEAR_GOALS_STATUS":
            return {
                ...state, 
                goal_status : {
                    ...state.goal_status,
                    status : false,
                    msg : "",
                    type : "",
                    title : ""
                }
            }  
        case "CHANGE_FILTER":
            return {
                ...state,
                filter : payload
            }           
        default :
            return state;
    }
}