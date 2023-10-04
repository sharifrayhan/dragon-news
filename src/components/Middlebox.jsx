import React, { useEffect, useState } from 'react';
import Card from './Card';

const Middlebox = () => {
    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch('news_data.json')
        .then(result => result.json())
        .then(data => setCards(data))
    },[])
    
    return (
        <div>
            {
                cards.map(card=>(
                    <Card key={card.id} card={card}></Card>
                ))
            }
        </div>
    );
};

export default Middlebox;