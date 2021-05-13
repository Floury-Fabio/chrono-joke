import React, { useState } from 'react';

import TimerComponent from 'components/TimerComponent';
import TimerSetting from 'components/TimerSetting';

const TimerPage = () => {
  const [duration, setDuration] = useState(0);

  return (
    <>
      { /* set key at duration in order to force re render of the component. */ }
      <TimerComponent key={duration} duration={duration} />
      <TimerSetting duration={duration} setDuration={setDuration} />
    </>
  );
};
export default TimerPage;
