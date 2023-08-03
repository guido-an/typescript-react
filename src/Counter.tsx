// CounterComponent.tsx
import React from 'react';
import useCounter from './hooks/useCounter';

export const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};