import { React, useState, useEffect } from 'react';

const Timer = () => {
  const [counter, setCounter] = useState(30);
  
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="App">
      <div className="timer">{counter}</div>
    </div>
  );
};
export default Timer;
