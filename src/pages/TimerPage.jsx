import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Countdown from 'components/Countdown';
import JokeDisplayer from 'components/JokeDisplayer';
import TimerSetting from 'components/TimerSetting';

const TimerPage = () => {
  const [duration, setDuration] = useState(0);
  const currentJoke = useSelector((state) => state.jokeReducer.currentJoke);

  return (
    <>
      <JokeDisplayer joke={currentJoke} />
      { /* set key at duration in order to force re render of the component. */ }
      <Countdown key={duration} duration={duration} />
      <TimerSetting duration={duration} setDuration={setDuration} />
    </>
  );
};
export default TimerPage;
