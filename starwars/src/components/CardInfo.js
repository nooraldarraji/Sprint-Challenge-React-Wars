import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    // display: flex;
    // flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Span = styled.span`
    padding: 10px;
`;



export default function CardInfo(props) {
    return (
        <Wrapper>
            <Span>Character Name: {props.name}</Span>
            <Span>Birth Year: {props.birth_year}</Span>
            <Span>Hair Color: {props.hair_color}</Span>
            <Span>Mass: {props.mass}</Span>
            <Span>Height: {props.height}</Span>
            <Span>Gender: {props.gender}</Span>
            <Span>Skin Color: {props.skin_color}</Span>
            <Span>Eye Color: {props.eye_color}</Span>
        </Wrapper>
    )
}

// "skin_color": "fair", 
// "eye_color": "blue", 
