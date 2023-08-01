import React from 'react'

interface CompletedProps {
    setCompleted: Function,
    completed: boolean
}

export const Completed: React.FC<CompletedProps> = ({ setCompleted, completed }) => {
    return(
        <div>
            <button onClick={() => setCompleted(!completed)}>completed</button>
        </div>
    )
}