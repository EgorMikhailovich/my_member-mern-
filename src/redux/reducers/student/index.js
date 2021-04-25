let initState = {
    categories : [],
    active_student : [],
    active_trail :[],
    lead_student :[],
    camp_list: [],
    former_student:[],
    former_trial_student: [],
    after_school_student:[]
}
export const studentReducer = (state = initState, action) => {
   switch(action.type){
        case "GET_CATEGORIES" :
            return {...state, categories : action.payload};
        case "GET_ACTIVE_STUDENT":
            return {...state, active_student : action.payload};   
        case "GET_ACTIVE_TRIAL":
            return {...state, active_trail : action.payload};   
        case "GET_LEADS_STUDENT":
            return {...state, lead_student : action.payload}; 
        case "GET_CAMP_STUDENT":
            return {...state, camp_student : action.payload};
        case "GET_FORMER_STUDENT":
            return {...state, former_student : action.payload};
        case "GET_FORMER_TRIAL_STUDENT":
            return {...state, former_trial_student : action.payload};
        case "GET_AFTER_SCHOOL_STUDENT":
            return {...state, after_school_student : action.payload};
        
            
        default :
           return state;
   }   
}