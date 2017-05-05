import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import moviesReducer from './moviesReducer';

export default combineReducers({
  movies: moviesReducer,
  routing: routerReducer,
  form: formReducer,
});
