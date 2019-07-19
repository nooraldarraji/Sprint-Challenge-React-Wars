import React from 'react';


export default function CardInfo(props) {
    return (
        <div>
            <span>Character Name: {props.name}</span>
            <span>Birth Year: {props.birth_year}</span>
            <span>Hair Color: {props.hair_color}</span>
            <span>Mass: {props.mass}</span>
            <span>Height: {props.height}</span>
            <span>Gender: {props.gender}</span>
        </div>
    )
}