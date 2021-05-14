import React from 'react';
import PropTypes from 'prop-types';

const JokeDisplayer = ({ joke }) => (
  <div className={`bg-secondary mb-5 p-3 rounded-125 ${joke ? '' : 'd-none'}`}>
    <p>
      { joke.question }
    </p>
    <p>
      { joke.answer }
    </p>
  </div>
);

export default JokeDisplayer;

JokeDisplayer.propTypes = {
  joke: PropTypes.shape({
    answer: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
};
