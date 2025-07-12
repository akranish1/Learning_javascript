import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);       // stores time in seconds

  let timeRef = useRef(null);          // stores interval ID

function startTimer(){
  timeRef.current=setInterval(()=>{
    setTime(time=>time+1)
  },1000);
}

function stopTimer(){
  clearInterval(timeRef.current)
  timeRef.current=null
}

function resetTimer(){
  stopTimer()
  setTime(0)
}

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>⏱️ Stopwatch</h1>
      <h2>{time} s</h2>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer} >Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;
