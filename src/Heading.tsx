import React from 'react'

interface Props {
    title: string
    subtitle: string
}

export const Heading: React.FC<Props> = ({ title, subtitle }) => {
    return(
        <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}