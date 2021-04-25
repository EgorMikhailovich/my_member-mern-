import { stat } from "fs";

const initState = {
    membershipList : [],
    testpaperList: [],
    studentList: [],
    purchaseList: []
}

export const shopReducer = (state = initState, action) => {
     switch(action.type){
         case "GET_MEMBERSHIP_LIST" : return {...state, membershipList : action.payload};
         case "GET_TESTPAPER_LIST" : return {...state, testpaperList : action.payload};
         case "GET_STUDENT_LIST" : return {...state, studentList: action.payload};
         case "GET_STUDENT_PURCHASE_LIST": return {...state, purchaseList:action.payload};
         default: return state;
     }
}