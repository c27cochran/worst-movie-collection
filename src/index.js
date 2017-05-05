import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/App';
import Home from './components/Home';
import MoviesList from './components/MoviesList';
import Movie from './components/Movie';
import AddMovie from './components/AddMovie';
import store from './store';
import './assets/styles/index.css';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/movies" component={MoviesList} />
        <Route path="/movies/:id" component={Movie} />
        <Route path="/add" component={AddMovie} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
