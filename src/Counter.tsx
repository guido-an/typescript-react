import React, { useState, useEffect } from 'react'


// Using type for State:
// When you define a type using type, you create a new type that represents a specific shape or structure of data.
type CounterState = {
    count: number
}

export const Counter: React.FC = () => {
    const [counter, setCounter] = useState<CounterState>({ count: 0})
    const [isPositive, setIsPositive] = useState<boolean>(true)

    const increment = () => {
       setCounter((prev) => ({ count: prev.count + 1}))
    }

    const decrement = () => {
        setCounter((prev) => ({ count: prev.count - 1}))
    }

    const reset = () => {
        setCounter({ count: 0})
    }

    useEffect(() => {
        setIsPositive(counter.count > 0)
    }, [counter.count])

    return(
        <div>
            <h1>Counter: {counter.count}</h1>
            <p>{ isPositive ? 'Positive' : 'Negative' }</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

/* 

*/