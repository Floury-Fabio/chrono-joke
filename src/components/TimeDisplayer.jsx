import React from 'react';
import PropTypes from 'prop-types';

const TimeDisplayer = ({ Timer }) => (
  <div>
    <Timer.Days />
    days
    <Timer.Hours />
    hours
    <Timer.Minutes />
    minutes
    <Timer.Seconds />
    seconds
  </div>
);

export default TimeDisplayer;

TimeDisplayer.propTypes = {
  Timer: PropTypes.func.isRequired,
};
