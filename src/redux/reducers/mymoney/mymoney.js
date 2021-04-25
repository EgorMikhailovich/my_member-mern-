const initState = {
    expenseCategoryList : [],
    expnseList:[],
    allEmailList:[],
    allComposeFolderList:[],
    monthlyPaymentList:[],
    monthlyBreakDownList:[],
    monthlyCCexpiryList:[]
}

export const myMoneyReducer = (state = initState, action) => {
     switch(action.type){
         case "GET_EXP_CATEGORY_LIST" : return {...state, expenseCategoryList : action.payload};
         case "GET_EXP_LIST" : return {...state, expenseList : action.payload};
         case "GET_ALL_EMAIL_LIST": return {...state, allEmailList : action.payload};
         case "GET_FOLDER_LIST": return {...state, allComposeFolderList : action.payload};
         case "GET_MONTHLY_PAYMENTS_LIST": return {...state, monthlyPaymentList : action.payload};
         case "GET_EXPENSE_BREAKDOWN_LIST": return {...state, monthlyBreakDownList : action.payload};
         case "GET_MONTHLY_CCExpiring": return {...state, monthlyCCexpiryList : action.payload};
         default: return state;
     }
}