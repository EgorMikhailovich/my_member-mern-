let initState = {
    categories : [],
    active_member : [],
    active_trail :[],
    lead_member :[],
    camp_list: [],
    former_member:[],
    former_trial_member: [],
    after_school_member:[]
}
export const memberReducer = (state = initState, action) => {
   switch(action.type){
        case "GET_CATEGORIES" :
            return {...state, categories : action.payload};
        case "GET_ACTIVE_MEMBER":
            return {...state, active_member : action.payload};   
        case "GET_ACTIVE_TRIAL":
            return {...state, active_trail : action.payload};   
        case "GET_LEADS_MEMBER":
            return {...state, lead_member : action.payload}; 
        case "GET_CAMP_MEMBER":
            return {...state, camp_member : action.payload};
        case "GET_FORMER_MEMBER":
            return {...state, former_member : action.payload};
        case "GET_FORMER_TRIAL_MEMBER":
            return {...state, former_trial_member : action.payload};
        case "GET_AFTER_SCHOOL_MEMBER":
            return {...state, after_school_member : action.payload};
        default :
           return state;
   }   
}