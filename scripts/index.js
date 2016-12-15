import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import routes from './routes';
import PostContainer from './containers/PostContainer';

const store = configureStore();

// render(
//   <Provider store={store}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>,
//   document.getElementById('app')
// )

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={PostContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
