import React from 'react';
import PropTypes from 'prop-types';

const TimeController = ({
  start, pause, resume, stop, reset,
}) => (
  <div>
    <button type="button" onClick={start}>Start</button>
    <button type="button" onClick={pause}>Pause</button>
    <button type="button" onClick={resume}>Resume</button>
    <button type="button" onClick={stop}>Stop</button>
    <button type="button" onClick={reset}>Reset</button>
  </div>
);

export default TimeController;

TimeController.propTypes = {
  start: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  resume: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
