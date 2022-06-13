import { INCREASE_COUNT, DECREASE_COUNT, GET_NEWS, SET_NEWS } from "../constants";

export const increaseCount = () => ({
    type: INCREASE_COUNT,
});

export const decreaseCount = () => ({
    type: DECREASE_COUNT,
});

export const getNews = () => ({
    type: GET_NEWS,
});

export const setNews = (news) => ({
    type: SET_NEWS,
    payload: news,
})