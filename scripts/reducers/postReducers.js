import * as types from '../actions/postActions';

const initialState = {
  posts: [],
  isLoading: false
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCHING_POSTS:
          return Object.assign({}, state, {isLoading: action.isLoading});
        case types.UPDATE_POSTS:
            return Object.assign({}, state, {isLoading: action.isLoading, posts: action.posts});
        default:
            return state;
    }
}
