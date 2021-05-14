import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import JokeDisplayer from 'components/JokeDisplayer';
import TimerComponent from 'components/TimerComponent';
import TimerSetting from 'components/TimerSetting';

const TimerPage = () => {
  const [duration, setDuration] = useState(0);
  const currentJoke = useSelector((state) => state.jokeReducer.currentJoke);

  return (
    <>
      <JokeDisplayer joke={currentJoke} />
      { /* set key at duration in order to force re render of the component. */ }
      <TimerComponent key={duration} duration={duration} />
      <TimerSetting duration={duration} setDuration={setDuration} />
    </>
  );
};
export default TimerPage;
