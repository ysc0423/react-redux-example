import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory, IndexRoute, Link } from 'react-router';
import "../assests/site.scss";

const store = configureStore();

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/comments">Comments</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
 return (module) => cb(null, module.default);
}

const routes = {
  path: '/',
  component: App,
  childRoutes: [{
      path: '/posts',
      getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./containers/PostContainer.js').default)
        }, 'Posts');
      }
  }, {
      path: '/comments',
      getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./containers/CommentContainer.js').default)
        }, 'Comments');
      }
  }]
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
