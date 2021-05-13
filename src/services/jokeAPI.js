const getJoke = () => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = '/api/random';
  const url = baseURL + endUrl;
  const jokeToken = process.env.REACT_APP_JOKE_TOKEN;

  const request = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${jokeToken}`,
    },
  };

  return fetch(url, request);
};

export { getJoke }; // eslint-disable-line import/prefer-default-export
