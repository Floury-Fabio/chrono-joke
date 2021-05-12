import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import 'styles/TimeController.css';

const TimeController = ({
  start, pause, resume, stop, reset,
}) => (
  <div>
    <Button id="start-control-button" className="rounded-circle" variant="success" onClick={start}>Start</Button>
    <Button id="pause-control-button" className="rounded-circle" variant="primary" onClick={pause}>Pause</Button>
    <Button id="resume-control-button" className="rounded-circle" variant="info" onClick={resume}>Resume</Button>
    <Button id="stop-control-button" className="rounded-circle" variant="danger" onClick={stop}>Stop</Button>
    <Button id="reset-control-button" className="rounded-circle" variant="warning" onClick={reset}>Reset</Button>
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
