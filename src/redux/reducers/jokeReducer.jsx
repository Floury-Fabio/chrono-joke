import UPDATE_CURRENT_JOKE from 'redux/types/jokeTypes';

const jokeReducer = (state = { currentJoke: '' }, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_JOKE:
      return {
        ...state,
        currentJoke: action.currentJoke,
      };
    default:
      return {
        ...state,
      };
  }
};

export default jokeReducer;
