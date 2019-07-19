import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardInfo from './CardInfo';


export default function Card() {
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get(`https://henry-mock-swapi.herokuapp.com/api`)
            .then(data => {
                console.log(data.data.results)
                const items = data.data.results;
                setData(items);
            })
            .catch(error => {
                console.log('ERROR from Cards.js file --> ', error);
            })

    }, [])
    // console.log(items)

    return (
        <div>
            {data.map((item) => <CardInfo name={item.name} gender={item.gender} hair_color={item.hair_color} mass={item.mass} height={item.height} birth_year={item.birth_year} skin_color={item.skin_color} eye_color={item.eye_color} />)}
        </div>
    )
}