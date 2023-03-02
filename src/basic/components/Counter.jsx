import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <p className='number'>
        {count} <span className='total'>/{total}</span>
      </p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
        }}
        className='button'
      >
        Add +
      </button>
    </div>
  );
}
