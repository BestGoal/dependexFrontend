import { combineReducers } from "redux";

import auth from "./auth/index";
import base from "./base/index";

const rootReducer = combineReducers({
  auth,
  base
});

export default rootReducer;