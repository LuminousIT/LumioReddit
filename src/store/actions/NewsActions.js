import {getNews, getTopNews} from '../../api';
import {GET_HOT_NEWS, GET_NEW_NEWS, GET_TOP_NEWS} from '../types';

export const reqDispatch = (type, payload) => ({
  type,
  payload,
});

export const getNewsAction = (type, query) => async dispatch => {
  try {
    const data = await getNews(type, query);
    console.log('fetched data', data);
    // TODO: Check request response if there's error, then throw

    // If fetch is successful,
    switch (type.toLowerCase()) {
      case 'top': {
        console.log('top dispatched');
        dispatch(reqDispatch(GET_TOP_NEWS, data));
        return;
      }
      case 'hot': {
        console.log('hot dispatched');
        dispatch(reqDispatch(GET_HOT_NEWS, data));
        return;
      }
      case 'new': {
        console.log('new dispatched');
        dispatch(reqDispatch(GET_NEW_NEWS, data));
        return;
      }
    }

    return 1;
  } catch (error) {
    console.log('Error: getNewsAction() - ', error);
    return -1;
  }
};
