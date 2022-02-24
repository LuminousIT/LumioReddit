import {GET_HOT_NEWS, GET_NEW_NEWS, GET_TOP_NEWS, RESET} from '../types';

const initialState = {
  news: [],
};
const newslist = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOT_NEWS: {
      return {
        ...state,
        news: [...state.news, ...action.payload.data.children],
      };
    }
    case GET_NEW_NEWS: {
      return {
        ...state,
        news: [...state.news, ...action.payload.data.children],
      };
    }
    case GET_TOP_NEWS: {
      return {
        ...state,
        news: [...state.news, ...action.payload.data.children],
      };
    }
    case RESET: {
      return {
        ...state,
        news: action.payload,
      };
    }
    default:
      return state;
  }
};

export default newslist;
