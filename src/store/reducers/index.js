import {combineReducers} from 'redux';
import newslist from './newslist';
import topnews from './topnews';

const reducers = combineReducers({
  newslist,
  topnews,
});

export default reducers;
