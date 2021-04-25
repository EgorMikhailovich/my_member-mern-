import { combineReducers } from "redux"
import calenderReducer from "./calendar/"
import emailReducer from "./email/"
import chatReducer from "./chat/"
import todoReducer from "./todo/"
import customizer from "./customizer/"
import auth from "./auth/index"
import navbar from "./navbar/Index"
import dataList from "./data-list/"
import { studentReducer } from './student/index';
import { memberReducer } from './member/index';
import { shopReducer } from './shop/shop';
import { programReducer } from './programe/programe';
import { stripeReducer } from './stripe/stripe';
import { settingReducer } from './settings/index';
import { goalReducer } from './goal/goal';
import { myMoneyReducer } from "./mymoney/mymoney"
import { dashboardReducer } from './dashboard/index';
import { userInfoReducer } from './user/userinfo'
import { EmailComposeMarketing } from './compose'
import { EmailLibraryMarketing } from './library'

const rootReducer = combineReducers({
  calendar: calenderReducer,
  emailApp: emailReducer,
  todoApp: todoReducer,
  chatApp: chatReducer,
  customizer: customizer,
  auth: auth,
  navbar: navbar,
  dataList: dataList,
  student: studentReducer,
  member: memberReducer,
  shop: shopReducer,
  program: programReducer,
  stripe: stripeReducer,
  setting: settingReducer,
  mymoney: myMoneyReducer,
  goal: goalReducer,
  dashboard: dashboardReducer,
  userinfo: userInfoReducer,
  EmailComposeMarketing: EmailComposeMarketing,
  EmailLibraryMarketing : EmailLibraryMarketing

})

export default rootReducer
