import React from 'react';
import PropTypes from 'prop-types';

const TimeDisplayer = ({ Timer }) => (
  <div>
    <Timer.Minutes />
    :
    <Timer.Seconds />
  </div>
);

export default TimeDisplayer;

TimeDisplayer.propTypes = {
  Timer: PropTypes.func.isRequired,
};
