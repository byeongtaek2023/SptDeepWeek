import { createStore } from "redux";
import { combineReducers } from "redux";
import rerender from "redux/modules/rerender";
import members from "redux/modules/members";

const rootReducer = combineReducers({
//리듀서들!!
rerender,
members,
});
const store = createStore(rootReducer);


export default store;