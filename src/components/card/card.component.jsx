import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="robo" src={`https://robohash.org/${props.monster.id}`} />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    ) 
}