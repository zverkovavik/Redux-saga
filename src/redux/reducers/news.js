import { SET_NEWS } from "../constants";

const initialState = {
    news: [],
}
export const news = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: action.payload,
            }
        default:
            return state;
    }
}