import React from 'react';
import PropTypes from 'prop-types';

import Timer from 'react-compound-timer';
import TimeDisplayer from 'components/TimeDisplayer';

import TimeController from 'components/TimeController';

const TimerComponent = ({ duration }) => (
  <Timer
    formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
    lastUnit="m"
    initialTime={duration * 1000 * 60}
    direction="backward"
    startImmediately={false}
  >
    {({
      start, resume, pause, stop, reset,
    }) => (
      <div className="bg-secondary p-5" style={{ borderRadius: '125px' }}>
        <TimeDisplayer Timer={Timer} />
        <br />
        <TimeController start={start} resume={resume} pause={pause} stop={stop} reset={reset} />
      </div>
    )}
  </Timer>
);
export default TimerComponent;

TimerComponent.propTypes = {
  duration: PropTypes.number.isRequired,
};
