import React from 'react'

interface CompletedProps {
    todoId: number,
    handleCompleted: Function
}

export const Completed: React.FC<CompletedProps> = ({ todoId, handleCompleted }) => {

    return(
        <div>
            <button onClick={() => handleCompleted(todoId)}>completed</button>
        </div>
    )
}