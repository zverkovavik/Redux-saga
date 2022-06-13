import { combineReducers } from "redux";

const testReducer = (state = {}, action) => {
    return state;
}

export const reducer = combineReducers({
    testReducer,
});