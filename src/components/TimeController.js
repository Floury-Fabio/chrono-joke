const TimeController = ({start, pause, resume, stop, reset}) => (
  <div>
    <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={resume}>Resume</button>
    <button onClick={stop}>Stop</button>
    <button onClick={reset}>Reset</button>
  </div>
)

export default TimeController
