let initState = {
    categories : [],
    allScheduleMails : [],
    smartlist : [],
    selectedSmartList : [],
    templist : [],
    selectedtemplist:[]
}
export const EmailComposeMarketing = (state = initState, action) => {
   switch(action.type){
        case "GET_CATEGORIES" : return {...state, categories : action.payload};
        case "GET_SCHEDULE_MAILS": return {...state, allScheduleMails : action.payload};
        case "GET_SMARTLIST": return {...state, smartlist : action.payload};
        case "GET_TEMPLIST": return {...state, templist : action.payload};
        case "REMOVE_SCHEDULE_MAILS": 
              const afterdelete = 
               state.allScheduleMails.template.
               filter(template=> template._id != action.payload)
               return {...state, allScheduleMails : {template : afterdelete}};

        default :
           return state;
   }  
}