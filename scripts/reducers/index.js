import {combineReducers} from 'redux';
import posts from './postReducers';

const rootReducer = combineReducers({
  board: posts
})

export default rootReducer;
