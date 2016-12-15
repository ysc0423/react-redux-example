import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostContainer from './containers/PostContainer';

export default routes => (
  <Route path="/" component={PostContainer} />
);
