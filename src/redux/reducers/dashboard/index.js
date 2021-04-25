let initState = {
    
    birthday_appointment : [],
    misscall_appointment: [],
    school_appointment:[],
    latest_member:[],
    expired_student:[],
    months_lead_list:[],
    past3months_lead:[],
    this_month_birthday:[],
    next_month_birthday:[],



    
}
export const dashboardReducer = (state = initState, action) => {
   switch(action.type){
       
        case "GET_BIRTHDAY_LIST":
            return {...state, birthday_appointment : action.payload};   
        case "GET_MISSYOUCALL_LIST":
            return {...state, misscall_appointment : action.payload};
        case "GET_SCHOOL_LIST":
            return {...state, school_appointment : action.payload};
        case "GET_RENEWAL_LIST":
            return {...state, renewal_appointment : action.payload};
        case "GET_LATEST_MEMBER_LIST":
            return {...state, latest_member : action.payload};
        case "GET_MONTHS_ACTIVE_TRIAL":
            return {...state, months_active_trial : action.payload};
        case "GET_EXPIRED_LIST":
            return {...state, expired_student : action.payload};
        case "GET_URGENT_LIST":
            return {...state, urgent_calling : action.payload};
        case "GET_MONTHS_LEAD":
            return {...state, months_lead_list : action.payload};
        case "GET_3MONTHS_LEAD":
            return {...state, past3months_lead : action.payload};  
        case "GET_MONTHS_BIRTHDAY":
            return {...state, this_month_birthday : action.payload};
            
        case "GET_NEXT_MONTHS_BIRTHDAY":
            return {...state, next_month_birthday : action.payload};
            

        default :
           return state;
   }   
}