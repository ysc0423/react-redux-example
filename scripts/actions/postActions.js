import { getAllPosts } from '../api/PostsApi';

export const UPDATE_POSTS = 'UPDATE_POSTS';
export const FETCHING_POSTS = 'FETCHING_POSTS';

export function fetchingPosts() {
  return {
    type: FETCHING_POSTS,
    isLoading: true,
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
    isLoading: false,
  };
}

export function fetchPosts() {
  return (dispatch, getState) => {

    dispatch(fetchingPosts());

    getAllPosts().then(posts => {
      dispatch(updatePosts(posts));
    }).catch(error => {
      throw(error);
    });
  };
}
