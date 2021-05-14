import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import 'styles/TimeController.css';

const TimeController = ({
  start, pause, reset, setDuration,
}) => (
  <div>
    <Button id="start-control-button" className="rounded-circle" variant="success" onClick={start}>Start</Button>
    <Button id="pause-control-button" className="rounded-circle" variant="primary" onClick={pause}>Pause</Button>
    <Button id="reset-control-button" className="rounded-circle" variant="warning" onClick={reset}>Reset</Button>
    <Button id="restart-control-button" className="rounded-circle" variant="danger" onClick={() => setDuration(0)}>Stop</Button>
  </div>
);

export default TimeController;

TimeController.propTypes = {
  start: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  setDuration: PropTypes.func.isRequired,
};
