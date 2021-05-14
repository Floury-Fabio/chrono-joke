import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';

const TimerSetting = ({ duration, setDuration }) => {
  const handleInput = (e) => {
    if (!e.target.value) { return setDuration(0); }

    const newString = e.target.value.replaceAll(/\D/g, '');
    return setDuration(parseInt(newString, 10));
  };

  return (
    <>
      <div className="bg-secondary mt-5 p-2 w-25 rounded-125">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Durée en minutes</Form.Label>
          <Form.Control type="text" className="w-50 mt-2 m-auto text-center" onChange={(e) => { handleInput(e); }} value={duration} />
        </Form.Group>
      </div>
    </>
  );
};

export default TimerSetting;

TimerSetting.propTypes = {
  setDuration: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
};
