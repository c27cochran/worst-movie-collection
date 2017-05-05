const initialState = {
  movies: [],
  currentMovie: false,
  editing: false,
  fetching: false,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_MOVIES':
      return { ...state, fetching: true };
    case 'FETCHED_MOVIES':
      return { ...state, movies: action.payload, fetching: false };
    case 'FETCHING_MOVIE':
      return { ...state, fetching: true };
    case 'FETCHED_MOVIE':
      return { ...state, currentMovie: action.payload, fetching: false };
    case 'SUBMIT_START':
      return { ...state, fetching: true };
    case 'SUBMIT_END':
      return { ...state, currentMovie: action.payload, fetching: false };
    case 'EDIT_MOVIE':
      return { ...state, editing: true };
    case 'EDIT_START':
      return { ...state, fetching: true };
    case 'CANCEL_EDIT':
      return { ...state, editing: false };
    case 'EDIT_COMPLETE':
      return { ...state, editing: false, currentMovie: action.payload, fetching: false };
    case 'DELETE_START':
      return { ...state, fetching: true };
    case 'DELETE_COMPLETE':
      return { ...state, currentMovie: false, fetching: false };
    case 'MOVIE_ERROR':
      return { ...state, fetching: false };
    default:
      return state;
  }
}
