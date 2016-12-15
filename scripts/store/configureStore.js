import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk)
    )
  );
}
