import React from 'react';
import Timer from 'react-compound-timer'
import TimeDisplayer from 'components/TimeDisplayer'
import TimeController from 'components/TimeController'

const TimerPage = () => {

  return (
    <Timer
    initialTime={55000}
    direction="backward"
    startImmediately={false}
    >
    {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
        <>
            <TimeDisplayer Timer={Timer}/>
            <br />
            <TimeController start={start} resume={resume} pause={pause} stop={stop} reset={reset} />
        </>
    )}
</Timer>
  )
}

export default TimerPage
