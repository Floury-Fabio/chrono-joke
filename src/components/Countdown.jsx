import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Timer from 'react-compound-timer';
import useSound from 'use-sound';

import TimeController from 'components/TimeController';
import TimeDisplayer from 'components/TimeDisplayer';

import getJoke from 'redux/middlewares/jokeMiddlewares';

import ding from 'assets/sounds/ding.wav';

const Countdown = ({ duration, setDuration }) => {
  const dispatch = useDispatch();
  const [countdownIsEnd, setCountdownIsEnd] = useState(false);

  const [play] = useSound(ding, { volume: 0.30 });

  const fireJoke = () => {
    dispatch(getJoke());
    setCountdownIsEnd(true);
    setCountdownIsEnd(false);
  };

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
          callback: fireJoke,
        },
      ]}
    >
      {({
        start, pause, reset,
      }) => (
        <div className="bg-secondary p-5 rounded-125">
          {countdownIsEnd && play()}
          <TimeDisplayer Timer={Timer} />
          <br />
          <TimeController start={start} pause={pause} reset={reset} setDuration={setDuration} />
        </div>
      )}
    </Timer>
  );
};

export default Countdown;

Countdown.propTypes = {
  duration: PropTypes.number.isRequired,
  setDuration: PropTypes.func.isRequired,
};
