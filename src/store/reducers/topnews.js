import {GET_TOP_NEWS} from '../types';

const initialState = {
  top: [],
};

const topnews = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_NEWS: {
      return {
        ...state,
        top: [...state.top, ...action.payload.data.children],
      };
    }
    default:
      return state;
  }
};

export default topnews;
