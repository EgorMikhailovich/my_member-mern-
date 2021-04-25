import { combineReducers } from "redux"
import { login } from "./loginReducer"
import { register } from "./registerReducers"

const authReducers = combineReducers({
  login,
  register
})

export default authReducers
