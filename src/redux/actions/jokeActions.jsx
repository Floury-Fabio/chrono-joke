import UPDATE_CURRENT_NOTE from '../types/jokeTypes';

const updateCurrentJoke = (currentJoke) => (
  {
    type: UPDATE_CURRENT_NOTE,
    currentJoke,
  }
);

export default updateCurrentJoke;
