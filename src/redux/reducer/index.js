import { combineReducers } from "redux";

import auth from "./auth/index";

const rootReducer = combineReducers({
  auth
});

export default rootReducer;