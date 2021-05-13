import * as jokeAPI from 'services/jokeAPI';
import updateCurrentJoke from 'redux/actions/jokeActions';

const getJoke = () => async (dispatch) => {
  try {
    const response = await jokeAPI.getJoke();
    const body = await response.json();

    if (!response.ok) { throw new Error(body); }

    dispatch(updateCurrentJoke({ question: body.joke, answer: body.answer }));
    return true;
  } catch (error) {
    return false;
  }
};

export default getJoke;
