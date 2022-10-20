import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  function decrement() {
    setCounter(counter - 1);
  }
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <button className='btn' onClick={decrement}>
        -
      </button>
      {counter}
      <button className='btn' onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
