import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Timer from 'react-compound-timer';

import TimeController from 'components/TimeController';
import TimeDisplayer from 'components/TimeDisplayer';

import getJoke from 'redux/middlewares/jokeMiddlewares';

const TimerComponent = ({ duration }) => {
  const dispatch = useDispatch();

  return (
    <Timer
      formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
      lastUnit="m"
      initialTime={duration * 1000 * 60}
      direction="backward"
      startImmediately={false}
      checkpoints={[
        {
          time: (0),
          callback: () => dispatch(getJoke()),
        },
      ]}
    >
      {({
        start, resume, pause, stop, reset,
      }) => (
        <div className="bg-secondary p-5 rounded-125">
          <TimeDisplayer Timer={Timer} />
          <br />
          <TimeController start={start} resume={resume} pause={pause} stop={stop} reset={reset} />
        </div>
      )}
    </Timer>
  );
};

export default TimerComponent;

TimerComponent.propTypes = {
  duration: PropTypes.number.isRequired,
};
